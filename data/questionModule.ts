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
        question_text: "What is the capital of France?sdo;guh voa;HA Ountvhy OUSHGUOCSNHSUODNGCHSUPIAOHNFGPONIAYNGC", 
        options: [
            { text: "Berlin", isCorrect: false }, 
            { text: "Madrid", isCorrect: false }, 
            { text: "Paris", isCorrect: true }, 
            { text: "Rome", isCorrect: false }
        ] 
    },
    { 
        id: 2, 
        question_text: "Which planet is known as the Red Planet?", 
        options: [
            { text: "Earth", isCorrect: false }, 
            { text: "Mars", isCorrect: true }, 
            { text: "Jupiter", isCorrect: false }, 
            { text: "Venus", isCorrect: false }
        ] 
    },
    { 
        id: 3, 
        question_text: "What is the largest mammal in the world?", 
        options: [
            { text: "Elephant", isCorrect: false }, 
            { text: "Blue Whale", isCorrect: true }, 
            { text: "Giraffe", isCorrect: false }, 
            { text: "Great White Shark", isCorrect: false }
        ] 
    },
    { 
        id: 4, 
        question_text: "Who wrote 'Romeo and Juliet'?", 
        options: [
            { text: "Charles Dickens", isCorrect: false }, 
            { text: "William Shakespeare", isCorrect: true }, 
            { text: "Jane Austen", isCorrect: false }, 
            { text: "Mark Twain", isCorrect: false }
        ] 
    },
    { 
        id: 5, 
        question_text: "What is the chemical symbol for water?", 
        options: [
            { text: "O2", isCorrect: false }, 
            { text: "CO2", isCorrect: false }, 
            { text: "H2O", isCorrect: true }, 
            { text: "NaCl", isCorrect: false }
        ] 
    },
    { 
        id: 6, 
        question_text: "How many continents are there?", 
        options: [
            { text: "5", isCorrect: false }, 
            { text: "6", isCorrect: false }, 
            { text: "7", isCorrect: true }, 
            { text: "8", isCorrect: false }
        ] 
    },
    { 
        id: 7, 
        question_text: "What is the tallest mountain in the world?", 
        options: [
            { text: "K2", isCorrect: false }, 
            { text: "Mount Everest", isCorrect: true }, 
            { text: "Kangchenjunga", isCorrect: false }, 
            { text: "Lhotse", isCorrect: false }
        ] 
    },
    { 
        id: 8, 
        question_text: "Which country is home to the kangaroo?", 
        options: [
            { text: "South Africa", isCorrect: false }, 
            { text: "India", isCorrect: false }, 
            { text: "Australia", isCorrect: true }, 
            { text: "Mexico", isCorrect: false }
        ] 
    },
    { 
        id: 9, 
        question_text: "What is the primary language spoken in Brazil?", 
        options: [
            { text: "Spanish", isCorrect: false }, 
            { text: "Portuguese", isCorrect: true }, 
            { text: "English", isCorrect: false }, 
            { text: "French", isCorrect: false }
        ] 
    },
    { 
        id: 10, 
        question_text: "Who painted the Mona Lisa?", 
        options: [
            { text: "Vincent van Gogh", isCorrect: false }, 
            { text: "Pablo Picasso", isCorrect: false }, 
            { text: "Leonardo da Vinci", isCorrect: true }, 
            { text: "Claude Monet", isCorrect: false }
        ] 
    },
     { 
        id: 11, 
        question_text: "Who painted the Mona Lisa?", 
        options: [
            { text: "Vincent van Gogh", isCorrect: false }, 
            { text: "Pablo Picasso", isCorrect: false }, 
            { text: "Leonardo da Vinci", isCorrect: true }, 
            { text: "Claude Monet", isCorrect: false }
        ] 
    },
     { 
        id: 12, 
        question_text: "Who painted the College?", 
        options: [
            { text: "Vincent van Gogh", isCorrect: false }, 
            { text: "Pablo Picasso", isCorrect: false }, 
            { text: "Leonardo da Vinci", isCorrect: true }, 
            { text: "Claude Monet", isCorrect: false }
        ] 
    },
     { 
        id: 13, 
        question_text: "Who created the Universe?", 
        options: [
            { text: "Vincent van Gogh", isCorrect: false }, 
            { text: "Pablo Picasso", isCorrect: false }, 
            { text: "Leonardo da Vinci", isCorrect: true }, 
            { text: "Claude Monet", isCorrect: false }
        ] 
    },
];
