import { useState } from "react";
import { AccessDenied } from "./AccessDenied";
import Footer from "./Footer";
import { LoadingSecond } from "./LoadingSecond";

// Define the interface for the props this component expects
interface QuizResultProps {
  score: number;
  onFeedbackSubmit: (feedback: string) => void;
}

// Use the QuizResultProps interface to correctly type the component's props
export const QuizResult = ({ score, onFeedbackSubmit }: QuizResultProps) => {
    const [feedback, setFeedback] = useState('');
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!feedback.trim()) return;
        setIsSubmitting(true);
        onFeedbackSubmit(feedback);

        setTimeout(() => {
            setIsSubmitting(false);
            setFeedbackSubmitted(true);
        }, 10000); // 10-second loader display
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
                <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
                <p className="text-lg text-gray-600 mb-8">Your final score is: <span className="font-bold text-blue-500">{score}</span></p>

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

            <div className="absolute bottom-0 left-0 right-0">
                <Footer/>
            </div>
        </div>
    );
};
