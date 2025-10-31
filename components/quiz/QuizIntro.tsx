import React from 'react';

const QuizIntro = ({ onStart }: { onStart: () => void }) => {

  const handleStartClick = () => {
  // Set a flag in localStorage to indicate the test has started.
  // localStorage.setItem('quizAttempted', 'true');
  
  // Call the original onStart function passed in as a prop.
  onStart();
};


  return (
    <div className="text-gray-800 p-2">
      <div className="overflow-y-auto">
        <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold">Vision Hunt</h1>
        <p className="text-gray-500 mb-8">Powered by ME-RIISE Foundation</p>

        <div className="space-y-4 mb-10">
          <div className="flex items-center">
            <div className="bg-green-100 text-green-600 rounded-full h-12 w-12 flex items-center justify-center mr-4">
              {/* Icon placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            </div>
            <div>
              <p className="font-bold text-lg md:text-2xl lg:text-2xl">15 Questions</p>
              <p className="text-gray-600 text-sm">MCQ Type</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 text-green-600 rounded-full h-12 w-12 flex items-center justify-center mr-4">
              {/* Icon placeholder */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <p className="font-bold text-lg md:text-2xl lg:text-2xl">15 seconds</p>
              <p className="text-gray-600 text-sm">Per Question</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-bold text-xl mb-4">Before you start</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li className='text-sm lg:text-lg'>You must complete this test in one session - make sure your internet is reliable.</li>
            <li className='text-sm lg:text-lg'>Results will be announced at the end of the semester.</li>
            {/* <li>The more you give the correct answer the more chance to win the badge.</li> */}
            <li className='text-sm lg:text-lg'>Do not try to copy, Don&apos;t use AI for answering this questions, Instead use your brain.</li>
          </ul>
        </div>

        {/* <p className="text-center text-gray-500 mb-6">All </p> */}

        <button
          onClick={handleStartClick}
          className="w-full bg-blue-400 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-500 transition-colors duration-300 shadow-lg text-lg"
        >
          Start Test
        </button>
      </div>
    </div>
  );
};

export default QuizIntro;
