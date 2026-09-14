// Define the structure of a single question option
interface Option {
  text: string;
  isCorrect: boolean;
}

// Define the structure of a single question
export interface Question {
  id: number;
  question_text: string;
  options: Option[];
}

// Export the array of mock questions
export const mockQuestions: Question[] = [
  {
    id: 1,
    question_text: "Microsoft just announced the end of support for which extremely popular operating system?",
    options: [
      { text: "Windows 8", isCorrect: false },
      { text: "Windows 10", isCorrect: true },
      { text: "Windows 11", isCorrect: false },
      { text: "Windows Vista", isCorrect: false }
    ]
  },
  {
    id: 2,
    question_text: "What did Google name its new quantum chip that it claims has achieved 'verifiable quantum advantage'?",
    options: [
      { text: "Sycamore", isCorrect: false },
      { text: "Willow", isCorrect: true },
      { text: "QuantumX", isCorrect: false },
      { text: "QubitPro", isCorrect: false }
    ]
  },
  {
    id: 3,
    question_text: "What is the name of Tesla’s humanoid robot recently unveiled with new AI-powered abilities?",
    options: [
      { text: "Atlas", isCorrect: false },
      { text: "Optimus", isCorrect: true },
      { text: "Sophia", isCorrect: false },
      { text: "Titan", isCorrect: false }
    ]
  },
  {
    id: 4,
    question_text: "What is the name for AI systems that can independently perform complex tasks, not just respond to prompts?",
    options: [
      { text: "Reactive AI", isCorrect: false },
      { text: "Agentic AI", isCorrect: true },
      { text: "Cognitive AI", isCorrect: false },
      { text: "Adaptive AI", isCorrect: false }
    ]
  },
  {
    id: 5,
    question_text: "What is the name of India’s new government-backed alliance to lead research in next-generation mobile technology?",
    options: [
      { text: "Make in 6G", isCorrect: false },
      { text: "Bharat 6G Alliance", isCorrect: true },
      { text: "India Connect 6G", isCorrect: false },
      { text: "FutureNet India", isCorrect: false }
    ]
  },
];
