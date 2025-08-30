import { useState } from "react";
import { Button } from "../ui/button";
import { AccessDenied } from "./AccessDenied";
import Footer from "./Footer";
import { LoadingSecond } from "./LoadingSecond";

export const QuizResult = ({ onFeedbackSubmit }: { onFeedbackSubmit: (feedback: string) => void }) => {
    const [feedback, setFeedback] = useState('');
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!feedback.trim()) return;
        setIsSubmitting(true);
        onFeedbackSubmit(feedback);
        setTimeout(() => {
            setIsSubmitting(false); // Hide the loader
            setFeedbackSubmitted(true); // Show the final screen
        }, 10000); // 5000 milliseconds = 5 seconds
    };

     if (isSubmitting) {
        return <LoadingSecond />;
    }

    return (
        <div className="">
            {/* <h2 className="text-xl font-bold mb-4">Thank you for Attemping the Quiz</h2> */}
            {feedbackSubmitted ? (

                <AccessDenied />

            ) : (
                <form onSubmit={handleSubmit} className="mt-6 lg:shadow-2xl lg:rounded-3xl lg:p-10">
                    <h1 className="text-3xl mb-8 lg:mb-4">Would love to hear <span className="text-blue-400 font-bold"> your feedback?!</span></h1>
                    <label htmlFor="feedback" className="block text-lg font-medium text-gray-700 mb-6">Do you want us to create Quiz similar to this?!</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        rows={4}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="
        w-full
        p-3
        bg-white
        text-gray-800
        placeholder-gray-400
        border-2 border-gray-300
        rounded-lg
        shadow-sm
        resize-y
        transition-all duration-200 ease-in-out
        focus:outline-none
        focus:border-blue-400
        
    "
                        placeholder="Tell us what you think..."
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg mt-4"
                    >
                        Submit Feedback
                    </button>
                </form>
            )}

            <div className="absolute bottom-0">
                <Footer/>
            </div>
        </div>
    );
};

