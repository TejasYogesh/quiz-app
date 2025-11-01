import { useState } from "react";
import { AccessDenied } from "./AccessDenied";
import Footer from "./Footer";
import { LoadingSecond } from "./LoadingSecond";

// Define the interface for the props this component expects
interface QuizResultProps {
  score: number;
  onFeedbackSubmit: (feedback: string) => void;
   user?: {
    name: string;
    email: string;
  };
}

// Use the QuizResultProps interface to correctly type the component's props
export const QuizResult = ({ score, onFeedbackSubmit }: QuizResultProps) => {
    const [feedback, setFeedback] = useState('');
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

      const getStoredUser = () => {
      try {
        const raw = localStorage.getItem('userData');
        if (!raw) return null;
        return JSON.parse(raw) as { name: string; email: string; college?: string; usn?: string };
      } catch (e) {
        console.error('Failed to parse userData from localStorage', e);
        return null;
      }
    };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!feedback.trim()) return;

        setIsSubmitting(true);

        // Prefer prop user if provided, otherwise read from localStorage
        const stored = getStoredUser();
        if (!stored || !stored.email) {
            console.error('No user email available to send the email.');
            setIsSubmitting(false);
            return;
        }

        try {
            // 1) Call your /api/send route to trigger email (name & email)
            const resp = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: stored.name,
                  email: stored.email,
                  // optionally include feedback if your route accepts it:
                  feedback
                })
            });

            const result = await resp.json().catch(() => ({}));
            if (!resp.ok) {
                console.error('Send API error:', result);
            } else {
                console.log('Email send result:', result);
            }

            // 2) Call parent feedback handler (updates DB etc)
            await onFeedbackSubmit(feedback);

            setFeedbackSubmitted(true);
            // mark submitted in localStorage so you can show AccessDenied later
            localStorage.setItem('feedbackSubmitted', 'true');
        } catch (err) {
            console.error('Error sending feedback/email:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) {
        return <LoadingSecond />;
    }

    if (feedbackSubmitted) {
        return <AccessDenied />;
    }

    return (
        <div className="relative h-full flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="lg:shadow-2xl lg:rounded-3xl lg:p-10">
               

                <h2 className="text-2xl mb-4">Would love to hear <span className="text-blue-400 font-bold"> your feedback!</span></h2>
                <label htmlFor="feedback" className="block text-md font-medium text-gray-700 mb-4">Do you want us to create quizzes similar to this?</label>
                
                <textarea
                    id="feedback"
                    name="feedback"
                    rows={4}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="
                        w-full p-3 bg-white text-gray-800 placeholder-gray-400
                        border-2 border-gray-300 rounded-lg shadow-sm resize-y
                        transition-all duration-200 ease-in-out focus:outline-none
                        focus:border-blue-400
                    "
                    placeholder="Tell us what you think..."
                />
                
                <button
                    type="submit"
                    className="bg-blue-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg mt-4 w-full"
                >
                    Submit Feedback
                </button>
            </form>

            {/* <div className="absolute bottom-[-50px]">
                <Footer/>
            </div> */}
        </div>
    );
};
