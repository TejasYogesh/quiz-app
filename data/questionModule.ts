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
  },
  {
    id: 22,
    question_text: "If you could solve any global problem through a startup, which one would likely have the biggest impact?",
    options: [
      { text: "Climate change and renewable energy", isCorrect: false },
      { text: "Healthcare accessibility", isCorrect: false },
      { text: "Affordable education", isCorrect: false },
      { text: "All of the above", isCorrect: true }
    ]
  },
  {
    id: 23,
    question_text: "What is the most important thing in a startup pitch?",
    options: [
      { text: "Explaining technical details", isCorrect: false },
      { text: "Showing how the idea solves a real problem", isCorrect: true },
      { text: "Highlighting how much money you’ve raised", isCorrect: false },
      { text: "Criticizing competitors", isCorrect: false }
    ]
  },
  {
    id: 24,
    question_text: "What is “design thinking” most focused on?",
    options: [
      { text: "Making things look visually attractive", isCorrect: false },
      { text: "Understanding user needs and solving problems creatively", isCorrect: true },
      { text: "Copying competitor designs", isCorrect: false },
      { text: "Increasing production speed only", isCorrect: false }
    ]
  },
  {
    id: 25,
    question_text: "Why are prototypes important in design thinking?",
    options: [
      { text: "They make the final product perfect from the start", isCorrect: false },
      { text: "They allow testing ideas quickly and learning from mistakes", isCorrect: true },
      { text: "They increase costs and slow down the process", isCorrect: false },
      { text: "They are only used for marketing purposes", isCorrect: false }
    ]
  },
  {
    id: 26,
    question_text: "During testing in design thinking, what should teams focus on?",
    options: [
      { text: "Avoiding changes to the product", isCorrect: false },
      { text: "Learning from user feedback and improving the solution", isCorrect: true },
      { text: "Selling as many products as possible", isCorrect: false },
      { text: "Keeping the process confidential", isCorrect: false }
    ]
  },
  {
    id: 27,
    question_text: "If you’re stuck in the ‘Ideate’ phase, what’s the best way to move forward?",
    options: [
      { text: "Pick the first idea and start building", isCorrect: false },
      { text: "Brainstorm with others and look at the problem from different angles", isCorrect: true },
      { text: "Ignore the issue and proceed anyway", isCorrect: false },
      { text: "Copy a competitor’s idea", isCorrect: false }
    ]
  },
  {
    id: 28,
    question_text: "What is the main purpose of observing users in their natural environment during the ‘Empathize’ phase?",
    options: [
      { text: "To judge their choices", isCorrect: false },
      { text: "To understand how they interact with products and what challenges they face", isCorrect: true },
      { text: "To collect data for advertisements", isCorrect: false },
      { text: "To compare them with other user groups", isCorrect: false }
    ]
  },
  {
    id: 29,
    question_text: "What’s a sign that a team is stuck during the Ideate phase?",
    options: [
      { text: "They are generating a variety of ideas", isCorrect: false },
      { text: "They keep discussing the same idea without exploring others", isCorrect: true },
      { text: "They are using visuals like sketches", isCorrect: false },
      { text: "They are testing prototypes frequently", isCorrect: false }
    ]
  },
  {
    id: 30,
    question_text: "How can reflecting on failures during the design thinking process be beneficial?",
    options: [
      { text: "It lowers team morale", isCorrect: false },
      { text: "It helps identify gaps and opportunities for improvement", isCorrect: true },
      { text: "It wastes time and resources", isCorrect: false },
      { text: "It’s unnecessary if the final result is successful", isCorrect: false }
    ]
  },
  {
    id: 31,
    question_text: "Friend not contributing in startup. Best step?",
    options: [
      { text: "Ignore", isCorrect: false },
      { text: "End friendship", isCorrect: false },
      { text: "Set clear roles", isCorrect: true },
      { text: "Do all work yourself", isCorrect: false }
    ]
  },
  {
    id: 32,
    question_text: "Before building a product, what’s the BEST way to validate an idea?",
    options: [
      { text: "Build the full product", isCorrect: false },
      { text: "Run ads or surveys to test demand", isCorrect: true },
      { text: "Ask only friends", isCorrect: false },
      { text: "Pitch to investors immediately", isCorrect: false }
    ]
  },
  {
    id: 33,
    question_text: "Which is more important for a growing startup?",
    options: [
      { text: "Revenue only", isCorrect: false },
      { text: "Profit only", isCorrect: false },
      { text: "Customer retention", isCorrect: true },
      { text: "Fancy office", isCorrect: false }
    ]
  },
  {
    id: 34,
    question_text: "The Elevator Pitch Test: If you meet an investor in an elevator and have 15 seconds to impress, what should you focus on?",
    options: [
      { text: "Your product’s features", isCorrect: false },
      { text: "The size of the problem you are solving", isCorrect: true },
      { text: "The money you need", isCorrect: false },
      { text: "Your GPA and achievements", isCorrect: false }
    ]
  },
  {
    id: 35,
    question_text: "Your startup earns ₹10,000 this month. Expenses = ₹7,500. But your customers pay you next month. What’s the main challenge here?",
    options: [
      { text: "Profitability", isCorrect: false },
      { text: "Cash flow", isCorrect: true },
      { text: "Product-market fit", isCorrect: false },
      { text: "Competition", isCorrect: false }
    ]
  }
];
