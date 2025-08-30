'use client'
import { useState, useEffect, useCallback } from "react";
import { mockQuestions } from "@/data/questionModule";
import { Question } from '../components/quiz/Question'
import { QuizResult } from "@/components/quiz/QuestionResult";
import QuizIntro from "@/components/quiz/QuizIntro";
import { AccessDenied } from "@/components/quiz/AccessDenied";
import { Login } from "@/components/quiz/Login"
import { supabase } from "@/lib/supabaseClient";
import { Loading } from "@/components/quiz/Loading";

// import Footer from "@/components/quiz/Footer";

// interface QuizCompletionParams {
//   finalScore: number;
// }
  interface Option {
  text: string;
  isCorrect: boolean;
}

  interface QuestionType {
  question_text: string;
  options: Option[];
}

type LoginDetails = {
  status: 'success';
  name: string;
  college: string;
  usn: string;
} | {
  status: 'denied';
};

// --- MAIN APP COMPONENT ---
// Manages state and orchestrates the quiz flow.
export default function App() {
  const [accessDenied, setAccessDenied] = useState(false);
  const [user, setUser] = useState(null);
  const [userEntered, setuserEntered] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [quizState, setQuizState] = useState('intro'); // intro, loading, active, finished
  const [hasAttempted, setHasAttempted] = useState(false);
  const [feedback, setFeedbackGiven] = useState(false);
  // const [isReload, setIsReload] = useState(false);



  useEffect(() => {


    // Check if quiz was previously attempted
    const attempted = localStorage.getItem('quizAttempted');
    const feedback = localStorage.getItem('feedbackSubmitted');
    const userEntered = localStorage.getItem('userEntered')
    setHasAttempted(attempted === 'true');
    setFeedbackGiven(feedback === 'true');
    setuserEntered(userEntered === 'true');
  }, []);




  useEffect(() => {
    if (quizState !== 'loading') return;

    const fetchQuestions = async () => {
      const shuffledQuestions = [...mockQuestions].sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffledQuestions.slice(0, 10);

      setTimeout(() => {
        // 3. Set the 10 selected questions into state
        setQuestions(selectedQuestions);
        setQuizState('active');
      }, 10000);
    };

    fetchQuestions();
  }, [quizState]);

  const handleStartQuiz = () => {
    setQuizState('loading');
  };

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setTimeLeft(10);
    } else {
      setQuizState('finished');
      localStorage.setItem('quizAttempted', 'true');
      setHasAttempted(true);
      console.log(`Quiz finished! Final score (hidden from user): ${score}`);
    }
  }, [currentQuestionIndex, questions.length, score]);

  useEffect(() => {
    if (quizState !== 'active') return;
    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, quizState, handleNextQuestion]);



// --- Update your handleLogin function to use this type ---
const handleLogin = (loginDetails: LoginDetails) => {
  if (loginDetails.status === 'denied') {
    setAccessDenied(true);
  } else {
    // Because of our type definition, TypeScript now knows that if the
    // status is 'success', the object also contains name, college, and usn.
    setUser(loginDetails);
    localStorage.setItem('userEntered', 'true');
    console.log("User Logged In:", loginDetails);
  }
};

  interface QuizOption {
    isCorrect: boolean;
  }

  const handleAnswer = (option: QuizOption) => {
    if (option.isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setTimeout(() => handleNextQuestion(), 1000);
  };
  const handleFeedbackSubmit = async (feedback: string, userDetails: string, finalScore: number) => {
    console.log('Feedback submitted:', feedback);
    localStorage.setItem('feedbackSubmitted', 'true');
    if (!user || !user.usn) {
      console.error("User details not found. Cannot update score.");
      return;
    }


    // Update state to immediately show the AccessDenied page after feedback
    setHasAttempted(true);
    const { data, error } = await supabase
      .from('students')
      .update({ score: score, feedback: feedback })     // Uses the 'score' from state
      .eq('usn', user.usn)          // Specifies WHICH student to update
      .select();

    if (error) {
      console.error('Error updating score:', error);
    } else {
      console.log('Score updated successfully:', data);
      localStorage.setItem('feedbackSubmitted', 'true');
      setHasAttempted(true);
    }
  };
  const renderContent = () => {
    switch (quizState) {
      case 'intro':
        return <QuizIntro onStart={handleStartQuiz} />;
      case 'loading':
        return <Loading />
      case 'active':
        return (
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            timeLeft={timeLeft}
          />
        );
      case 'finished':
        return <QuizResult score={score} onFeedbackSubmit={handleFeedbackSubmit} />;
      default:
        return null;
    }
  };

  if (accessDenied) {
    return <div className="p-4">
      <AccessDenied />
    </div>;
  }

  if (!user) {
    return (
      <div className="lg:min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="lg:rounded-2xl lg:shadow-2xl p-6 md:p-10 w-full max-w-3xl flex flex-col justify-center">
          <Login onLogin={handleLogin} />
        </div>
      </div>
    )
  }

  // if (hasAttempted && feedback && userEntered) {
  //   return (
  //     <AccessDenied />
  //   );
  // }

  return (
    <div className="lg:min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl p-4 lg:p-6 md:p-10 w-full max-w-3xl h-[85vh] lg:h-full">
        {renderContent()}
        {/* <Footer/> */}
      </div>
    </div>
  );
}