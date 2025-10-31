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
  {
    id: 6,
    question_text: "This or That: Would you rather have an AI-powered assistant or a humanoid robot in your home?",
    options: [
      { text: "AI-powered assistant", isCorrect: true },
      { text: "Humanoid robot", isCorrect: true }
    ]
  },
  {
    id: 7,
    question_text: "What does 'XR' stand for, combining both virtual and augmented reality?",
    options: [
      { text: "Extended Reality", isCorrect: true },
      { text: "Extreme Reality", isCorrect: false },
      { text: "Expanded Reality", isCorrect: false },
      { text: "Enhanced Reality", isCorrect: false }
    ]
  },
  {
    id: 8,
    question_text: "Besides Google, which other major tech giant just announced a breakthrough in quantum error correction using an AMD chip?",
    options: [
      { text: "IBM", isCorrect: true },
      { text: "Microsoft", isCorrect: false },
      { text: "Intel", isCorrect: false },
      { text: "NVIDIA", isCorrect: false }
    ]
  },
  {
    id: 9,
    question_text: "What is the name of India’s open-network initiative helping small merchants compete in e-commerce?",
    options: [
      { text: "DigiMart", isCorrect: false },
      { text: "ONDC (Open Network for Digital Commerce)", isCorrect: true },
      { text: "BharatMart", isCorrect: false },
      { text: "IndiaTrade", isCorrect: false }
    ]
  },
  {
    id: 10,
    question_text: "In cybersecurity, what is the term for a fake but realistic video/audio created using AI?",
    options: [
      { text: "Spoof", isCorrect: false },
      { text: "Deepfake", isCorrect: true },
      { text: "Clonecast", isCorrect: false },
      { text: "SynthVid", isCorrect: false }
    ]
  },
  {
    id: 11,
    question_text: "What is the name of Amazon’s home assistant robot designed for security and monitoring?",
    options: [
      { text: "EchoBot", isCorrect: false },
      { text: "Astro", isCorrect: true },
      { text: "AlexaGo", isCorrect: false },
      { text: "Luna", isCorrect: false }
    ]
  },
  {
    id: 12,
    question_text: "What is the name of Samsung’s new mixed-reality headset that runs on Google’s 'Android XR' platform?",
    options: [
      { text: "Galaxy XR", isCorrect: true },
      { text: "VisionX", isCorrect: false },
      { text: "MetaGear", isCorrect: false },
      { text: "SmartVision", isCorrect: false }
    ]
  },
  {
    id: 13,
    question_text: "What term describes platforms that require minimal or no coding to build applications?",
    options: [
      { text: "Rapid Code Systems", isCorrect: false },
      { text: "Low-Code / No-Code", isCorrect: true },
      { text: "Zero-Code Framework", isCorrect: false },
      { text: "QuickApps", isCorrect: false }
    ]
  },
  {
    id: 14,
    question_text: "What emerging tech uses ultrasound to create mid-air haptic sensations on the skin?",
    options: [
      { text: "Virtual Touch", isCorrect: false },
      { text: "Mid-Air Haptics", isCorrect: true },
      { text: "SensAir", isCorrect: false },
      { text: "AirVibe", isCorrect: false }
    ]
  },
  {
    id: 15,
    question_text: "Which AI model developed by OpenAI is known for its reasoning and multimodal abilities?",
    options: [
      { text: "GPT-3", isCorrect: false },
      { text: "GPT-4", isCorrect: false },
      { text: "GPT-5", isCorrect: true },
      { text: "Bard", isCorrect: false }
    ]
  },
  {
    id: 16,
    question_text: "What company created the humanoid robot 'Ameca,' known for realistic facial expressions?",
    options: [
      { text: "Hanson Robotics", isCorrect: false },
      { text: "Engineered Arts", isCorrect: true },
      { text: "Boston Dynamics", isCorrect: false },
      { text: "Tesla", isCorrect: false }
    ]
  },
  {
    id: 17,
    question_text: "Which country recently launched the world’s fastest 6G test satellite?",
    options: [
      { text: "Japan", isCorrect: false },
      { text: "China", isCorrect: true },
      { text: "India", isCorrect: false },
      { text: "USA", isCorrect: false }
    ]
  },
  {
    id: 18,
    question_text: "What is the term for AI that learns continuously after deployment without retraining from scratch?",
    options: [
      { text: "Incremental AI", isCorrect: false },
      { text: "Continual Learning", isCorrect: true },
      { text: "Adaptive Neural AI", isCorrect: false },
      { text: "Streaming AI", isCorrect: false }
    ]
  },
  {
    id: 19,
    question_text: "Which company introduced the 'Copilot+ PCs' powered by AI chips?",
    options: [
      { text: "HP", isCorrect: false },
      { text: "Microsoft", isCorrect: true },
      { text: "Apple", isCorrect: false },
      { text: "Dell", isCorrect: false }
    ]
  },
  {
    id: 20,
    question_text: "What is Apple’s mixed-reality headset launched in 2024 called?",
    options: [
      { text: "Apple Vision Pro", isCorrect: true },
      { text: "iVR", isCorrect: false },
      { text: "Reality One", isCorrect: false },
      { text: "Apple Glass", isCorrect: false }
    ]
  },
  {
    id: 21,
    question_text: "What is the name of Google’s AI-powered search feature that summarizes web results?",
    options: [
      { text: "SearchGPT", isCorrect: false },
      { text: "SGE (Search Generative Experience)", isCorrect: true },
      { text: "Bard Search", isCorrect: false },
      { text: "Gemini View", isCorrect: false }
    ]
  },
  {
    id: 22,
    question_text: "Which company launched the first smartphone with built-in satellite connectivity?",
    options: [
      { text: "Samsung", isCorrect: false },
      { text: "Apple", isCorrect: true },
      { text: "Huawei", isCorrect: false },
      { text: "OnePlus", isCorrect: false }
    ]
  },
  {
    id: 23,
    question_text: "What does 'LLM' stand for in the context of AI models like ChatGPT?",
    options: [
      { text: "Long Logic Machine", isCorrect: false },
      { text: "Large Language Model", isCorrect: true },
      { text: "Linguistic Learning Mechanism", isCorrect: false },
      { text: "Layered Logic Model", isCorrect: false }
    ]
  },
  {
    id: 24,
    question_text: "Which AI art generator became popular for creating digital artwork from text prompts?",
    options: [
      { text: "DALL·E", isCorrect: false },
      { text: "Midjourney", isCorrect: false },
      { text: "Stable Diffusion", isCorrect: false},
      { text: "All of the above", isCorrect: true }
    ]
  },
  {
    id: 25,
    question_text: "What programming language was originally developed by Guido van Rossum?",
    options: [
      { text: "Java", isCorrect: false },
      { text: "C++", isCorrect: false },
      { text: "Python", isCorrect: true },
      { text: "Ruby", isCorrect: false }
    ]
  },
  {
    id: 26,
    question_text: "What is the main goal of the 'Digital India' initiative?",
    options: [
      { text: "Promote gaming technology", isCorrect: false },
      { text: "Increase smartphone production", isCorrect: false },
      { text: "Transform India into a digitally empowered society", isCorrect: true },
      { text: "Build more data centers", isCorrect: false }
    ]
  },
  {
    id: 27,
    question_text: "Which Indian city hosts the headquarters of Infosys?",
    options: [
      { text: "Bengaluru", isCorrect: true },
      { text: "Hyderabad", isCorrect: false },
      { text: "Pune", isCorrect: false },
      { text: "Chennai", isCorrect: false }
    ]
  },
  {
    id: 28,
    question_text: "What does the acronym 'IoT' stand for?",
    options: [
      { text: "Internet of Things", isCorrect: true },
      { text: "Integration of Technology", isCorrect: false },
      { text: "Internet of Technology", isCorrect: false },
      { text: "Interface of Things", isCorrect: false }
    ]
  },
  {
    id: 29,
    question_text: "Which company recently announced the AI chip 'Blackwell'?",
    options: [
      { text: "NVIDIA", isCorrect: true },
      { text: "AMD", isCorrect: false },
      { text: "Intel", isCorrect: false },
      { text: "Google", isCorrect: false }
    ]
  },
  {
    id: 30,
    question_text: "What is the main purpose of using blockchain technology?",
    options: [
      { text: "Video streaming", isCorrect: false },
      { text: "Decentralized record-keeping", isCorrect: true },
      { text: "Faster Wi-Fi", isCorrect: false },
      { text: "Virtual reality rendering", isCorrect: false }
    ]
  }
];
