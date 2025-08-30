import React, { useState, useEffect } from 'react';
// import { mockQuestions } from '@/data/questionModule';
import SecureText from './Secure';
// import SecureQR from './SecureQR';
interface Option {
    text: string;
    isCorrect: boolean;
}

interface QuestionType {
    question_text: string;
    options: Option[];
}

interface QuestionProps {
    question: QuestionType;
    onAnswer: (option: Option) => void;
    questionNumber: number;
    totalQuestions: number;
    timeLeft: number;
    usn: string;
}

export const Question = ({ question, onAnswer, questionNumber, totalQuestions, timeLeft, usn }: QuestionProps) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    // Reset selection when question changes
    useEffect(() => {
        setSelectedOption(null);
    }, [question]);

    // Safety check to prevent crashing if the question prop is not yet available.
    if (!question) {
        return <div className="text-center text-xl font-semibold">Loading question...</div>;
    }

    const handleAnswerClick = (option: Option) => {
        if (selectedOption) return; // Prevent changing answer
        setSelectedOption(option);
        onAnswer(option);
    };

    return (
        <div className='lg:shadow-2xl lg:rounded-3xl lg:p-10 p-2'>

            <div className="flex justify-between items-start mb-8">
                {/* Question Text */}
                <div className="w-3/4">
                    <p className="text-lg font-medium text-gray-600 mb-2">Question {questionNumber} of {totalQuestions}</p>
                    {/* <h2 className="text-2xl font-bold text-gray-800 break-words">{question.question_text}</h2> */}
                    <SecureText text={question.question_text}/>
                </div>

                {/* Timer Box */}
                <div className="bg-green-300 rounded-full h-15 w-15 lg:h-20 lg:w-20 flex items-center justify-center shadow-md">
                    <span className="text-3xl font-bold text-green-700">{timeLeft}</span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div
                    style={{ width: `${(timeLeft / 10) * 100}%` }}
                    className={`h-4 lg:h-6 rounded-full transition-all duration-1000 linear ${timeLeft > 5 ? 'bg-blue-500' : 'bg-red-500'
                        }`}
                ></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option, index) => {
                    const isSelected = selectedOption === option;
                    let buttonClass = "bg-white border-2 border-gray-300 text-gray-800";
                    if (isSelected) {
                        buttonClass = option.isCorrect ? "bg-green-500 border-green-500 text-white" : "bg-red-500 border-red-500 text-white";
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(option)}
                            disabled={selectedOption !== null}
                            className={`p-4 rounded-lg text-left font-semibold text-lg transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 ${buttonClass}`}
                        >
                            {option.text}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
