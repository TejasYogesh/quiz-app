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

// Export the array of mock questions (from VISION HUNT PDF)
export const mockQuestions: Question[] = [
  {
    id: 1,
    question_text: "In which country was Nykaa founded?",
    options: [
      { text: "USA", isCorrect: false },
      { text: "India", isCorrect: true },
      { text: "UK", isCorrect: false },
      { text: "Singapore", isCorrect: false }
    ]
  },
  {
    id: 2,
    question_text: "Kiran Mazumdar-Shaw is popularly known as India’s “_____ Lady.”",
    options: [
      { text: "Iron Lady", isCorrect: false },
      { text: "Biotech Lady", isCorrect: true },
      { text: "Science Lady", isCorrect: false },
      { text: "Medicine Lady", isCorrect: false }
    ]
  },
  {
    id: 3,
    question_text: "The product created by PSYONIC is mainly designed to replace which part of the human body?",
    options: [
      { text: "Leg", isCorrect: false },
      { text: "Hand", isCorrect: true },
      { text: "Eye", isCorrect: false },
      { text: "Ear", isCorrect: false }
    ]
  },
  {
    id: 4,
    question_text: "What does the name “Nykaa” mean?",
    options: [
      { text: "Star", isCorrect: false },
      { text: "Success", isCorrect: false },
      { text: "Heroine", isCorrect: true },
      { text: "Beauty", isCorrect: false }
    ]
  },
  {
    id: 5,
    question_text: "The bionic hand developed by PSYONIC is called:",
    options: [
      { text: "Ability Hand", isCorrect: true },
      { text: "Robo Hand", isCorrect: false },
      { text: "Smart Hand", isCorrect: false },
      { text: "Power Hand", isCorrect: false }
    ]
  },
  {
    id: 6,
    question_text: "PSYONIC mainly develops technology for which group of people?",
    options: [
      { text: "Children", isCorrect: false },
      { text: "Athletes", isCorrect: false },
      { text: "Amputees", isCorrect: true },
      { text: "Elderly", isCorrect: false }
    ]
  },
  {
    id: 7,
    question_text: "Biocon was originally started in a _____.",
    options: [
      { text: "Factory shed", isCorrect: false },
      { text: "Garage", isCorrect: true },
      { text: "Small rented house", isCorrect: false },
      { text: "Office cabin", isCorrect: false }
    ]
  },
  {
    id: 8,
    question_text: "Biocon is India’s first company to manufacture which product?",
    options: [
      { text: "Insulin", isCorrect: true },
      { text: "Vaccines", isCorrect: false },
      { text: "Antibiotics", isCorrect: false },
      { text: "Painkillers", isCorrect: false }
    ]
  },
  {
    id: 9,
    question_text: "Peyush Bansal completed his master’s degree at which university?",
    options: [
      { text: "Stanford University", isCorrect: true },
      { text: "Harvard University", isCorrect: false },
      { text: "MIT", isCorrect: false },
      { text: "Oxford University", isCorrect: false }
    ]
  },
  {
    id: 10,
    question_text: "Nykaa follows which type of business model?",
    options: [
      { text: "B2B", isCorrect: false },
      { text: "B2C", isCorrect: true },
      { text: "C2C", isCorrect: false },
      { text: "D2C", isCorrect: false }
    ]
  },
  {
    id: 11,
    question_text: "Biocon started as a manufacturer of _____.",
    options: [
      { text: "Enzymes", isCorrect: true },
      { text: "Antibiotics", isCorrect: false },
      { text: "Vaccines", isCorrect: false },
      { text: "Cancer drugs", isCorrect: false }
    ]
  },
  {
    id: 12,
    question_text: "Peyush Bansal worked at which tech giant before starting his entrepreneurial journey?",
    options: [
      { text: "Amazon", isCorrect: false },
      { text: "Google", isCorrect: false },
      { text: "Microsoft", isCorrect: true },
      { text: "IBM", isCorrect: false }
    ]
  },
  {
    id: 13,
    question_text: "Peyush Bansal also appeared as an investor on which popular Indian TV show?",
    options: [
      { text: "Shark Tank India", isCorrect: true },
      { text: "Dragons’ Den India", isCorrect: false },
      { text: "The Apprentice India", isCorrect: false },
      { text: "Business Baazigar", isCorrect: false }
    ]
  },
  {
    id: 14,
    question_text: "Falguni Nayar’s leadership style is often described as:",
    options: [
      { text: "Risk-averse", isCorrect: false },
      { text: "Bold and customer-focused", isCorrect: true },
      { text: "Technical only", isCorrect: false },
      { text: "Traditional and slow", isCorrect: false }
    ]
  },
  {
    id: 15,
    question_text: "The Ability Hand developed by PSYONIC is controlled by:",
    options: [
      { text: "Voice commands", isCorrect: false },
      { text: "Neural signals and sensors", isCorrect: true },
      { text: "Manual switches", isCorrect: false },
      { text: "Remote control", isCorrect: false }
    ]
  },
  {
    id: 16,
    question_text: "PSYONIC focuses on helping people with:",
    options: [
      { text: "Visual impairments", isCorrect: false },
      { text: "Hearing loss", isCorrect: false },
      { text: "Limb amputations", isCorrect: true },
      { text: "Speech disorders", isCorrect: false }
    ]
  },
  {
    id: 17,
    question_text: "Kiran Mazumdar-Shaw’s company Biocon is a pioneer in:",
    options: [
      { text: "Software development", isCorrect: false },
      { text: "Agricultural chemicals", isCorrect: false },
      { text: "Biopharmaceuticals", isCorrect: true },
      { text: "Heavy machinery", isCorrect: false }
    ]
  },
  {
    id: 18,
    question_text: "Kiran Mazumdar-Shaw has been an advocate for:",
    options: [
      { text: "Renewable energy", isCorrect: false },
      { text: "Women entrepreneurship and healthcare", isCorrect: true },
      { text: "Political reforms", isCorrect: false },
      { text: "Space technology", isCorrect: false }
    ]
  },
  {
    id: 19,
    question_text: "Biocon is known globally for manufacturing:",
    options: [
      { text: "Consumer electronics", isCorrect: false },
      { text: "Generic drugs and biosimilars", isCorrect: true },
      { text: "Agricultural products", isCorrect: false },
      { text: "Industrial equipment", isCorrect: false }
    ]
  },
  {
    id: 20,
    question_text: "Lenskart’s business model is based on:",
    options: [
      { text: "Wholesale distribution", isCorrect: false },
      { text: "Direct-to-consumer (D2C) online sales", isCorrect: true },
      { text: "Retail chain only", isCorrect: false },
      { text: "Offline workshops", isCorrect: false }
    ]
  },
  {
    id: 21,
    question_text: "Which of these founders started their company after working in finance or tech industries abroad?",
    options: [
      { text: "Kiran Mazumdar-Shaw", isCorrect: false },
      { text: "Falguni Nayar and Peyush Bansal", isCorrect: true },
      { text: "Dr. Aadeel Akhtar only", isCorrect: false },
      { text: "All of them", isCorrect: false }
    ]
  }
];
