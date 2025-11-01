import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";


// 1. Define the shape of the object that onLogin sends
type LoginDetails = {
    status: 'success';
    name: string;
    college: string;
    usn: string;
    email: string
} | {
    status: 'denied';
};

// 2. Define the props for the Login component
interface LoginProps {
    onLogin: (details: LoginDetails) => void;
}


export const Login = ({ onLogin }: LoginProps) => {
    const [name, setName] = useState('');
    const [college, setCollege] = useState('');
    const [usn, setUsn] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        console.log(email);
        e.preventDefault();
        if (!name.trim() || !college.trim() || !usn.trim() || !email.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        setIsLoading(true);
        setError('');

        // This function contains your actual login logic
        const loginLogic = async () => {
            try {
                // 1. Check if a student with this USN already exists
                const { data: existingUser, error: selectError } = await supabase
                    .from('students')
                    .select('usn')
                    .eq('usn', usn);

                if (selectError) throw selectError;

                // 2. If the user exists, deny access
                if (existingUser && existingUser.length > 0) {
                    onLogin({ status: 'denied' });
                    return; // Stop further execution
                }

                // 3. If the user does not exist, insert the new record
                const { data, error: insertError } = await supabase
                    .from('students')
                    .insert([{ name, college, usn, email }])
                    .select();

                if (insertError) throw insertError;
                const userData = { name, college, usn, email };
                localStorage.setItem('userData', JSON.stringify(userData));
                // Also set a flag so page.tsx can proceed if needed
                localStorage.setItem('userEntered', 'true');

                if (data && data.length > 0) {
                    onLogin({ name, college, usn, email, status: 'success' });
                } else {
                    setError('Failed to save details. No data returned.');
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
                console.error('Supabase error:');
            }
        };

        // Create a timer promise that resolves after 8 seconds
        const timerPromise = new Promise(resolve => setTimeout(resolve, 10000));

        // Wait for both the API call and the timer to finish
        await Promise.all([loginLogic(), timerPromise]);

        // Only set loading to false after both are done
        setIsLoading(false);
    };

    return (
        <div className="text-white">
            <h1 className="text-4xl font-bold mb-6 text-black">Vision Hunt.</h1>
            <p className="text-lg text-gray-400 mb-8">Please enter your details to begin the quiz.</p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-xl border-3 border-gray-600 text-black placeholder-black-400 focus:outline-none focus:border-blue-500"
                    placeholder="Student Name"
                    required
                />
                <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full p-3 rounded-xl border-3 border-gray-600 text-black placeholder-black-400 focus:outline-none focus:border-blue-500"
                    placeholder="College Name"
                    required
                />
                <input
                    type="text"
                    value={usn}
                    onChange={(e) => setUsn(e.target.value.toUpperCase())}
                    className="w-full p-3 rounded-xl border-3 border-gray-600 text-black placeholder-black-400 focus:outline-none focus:border-blue-500"
                    placeholder="USN Number"
                    required
                />

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-xl border-3 border-gray-600 text-black placeholder-black-400 focus:outline-none focus:border-blue-500"
                    placeholder="Email ID"
                    required
                />

                <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-4 w-full bg-blue-400 text-white font-bold py-3 px-6 rounded-lg border-4 border-black hover:bg-blue-600 transition-colors flex justify-center items-center disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </>
                    ) : (
                        'Proceed'
                    )}
                </button>
                <p className="text-gray-400">*Once proceeding cannot go back or refresh the page</p>
                {/* <img src="meriise.png" className="h-10 w-20 text-center items-center" alt="" /> */}
            </form>
        </div>
    );
};
