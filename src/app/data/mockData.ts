import { Subject, Lesson } from '../types';

export const initialSubjects: Subject[] = [
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Learn algebra, calculus, geometry and more',
    icon: 'Calculator',
    color: 'bg-blue-500',
    lessonCount: 8
  },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Explore mechanics, thermodynamics, and electromagnetism',
    icon: 'Atom',
    color: 'bg-purple-500',
    lessonCount: 6
  },
  {
    id: 'cs',
    name: 'Computer Science',
    description: 'Programming, algorithms, and data structures',
    icon: 'Code',
    color: 'bg-green-500',
    lessonCount: 10
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Organic, inorganic, and physical chemistry',
    icon: 'FlaskConical',
    color: 'bg-orange-500',
    lessonCount: 7
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Cell biology, genetics, and ecology',
    icon: 'Microscope',
    color: 'bg-emerald-500',
    lessonCount: 9
  },
  {
    id: 'english',
    name: 'English',
    description: 'Literature, grammar, and composition',
    icon: 'BookOpen',
    color: 'bg-red-500',
    lessonCount: 5
  }
];

export const initialLessons: Lesson[] = [
  // Mathematics
  {
    id: 'math-1',
    title: 'Introduction to Algebra',
    description: 'Learn the fundamentals of algebraic expressions and equations',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 1,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'math-2',
    title: 'Linear Equations',
    description: 'Solving linear equations and inequalities',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 2,
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'math-3',
    title: 'Quadratic Functions',
    description: 'Understanding quadratic equations and their graphs',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 3,
    createdAt: '2024-01-17T10:00:00Z'
  },
  {
    id: 'math-4',
    title: 'Calculus Basics',
    description: 'Introduction to derivatives and integrals',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 4,
    createdAt: '2024-01-18T10:00:00Z'
  },
  {
    id: 'math-5',
    title: 'Trigonometry',
    description: 'Sine, cosine, and tangent functions',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 5,
    createdAt: '2024-01-19T10:00:00Z'
  },
  {
    id: 'math-6',
    title: 'Geometry Fundamentals',
    description: 'Shapes, angles, and geometric proofs',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 6,
    createdAt: '2024-01-20T10:00:00Z'
  },
  {
    id: 'math-7',
    title: 'Statistics and Probability',
    description: 'Data analysis and probability theory',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 7,
    createdAt: '2024-01-21T10:00:00Z'
  },
  {
    id: 'math-8',
    title: 'Vectors and Matrices',
    description: 'Linear algebra fundamentals',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'math',
    order: 8,
    createdAt: '2024-01-22T10:00:00Z'
  },
  
  // Physics
  {
    id: 'physics-1',
    title: 'Newton\'s Laws of Motion',
    description: 'Understanding force, mass, and acceleration',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'physics',
    order: 1,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'physics-2',
    title: 'Energy and Work',
    description: 'Kinetic and potential energy concepts',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'physics',
    order: 2,
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'physics-3',
    title: 'Thermodynamics',
    description: 'Heat, temperature, and the laws of thermodynamics',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'physics',
    order: 3,
    createdAt: '2024-01-17T10:00:00Z'
  },
  {
    id: 'physics-4',
    title: 'Electromagnetism',
    description: 'Electric fields, magnetic fields, and electromagnetic waves',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'physics',
    order: 4,
    createdAt: '2024-01-18T10:00:00Z'
  },
  {
    id: 'physics-5',
    title: 'Waves and Optics',
    description: 'Wave properties and light behavior',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'physics',
    order: 5,
    createdAt: '2024-01-19T10:00:00Z'
  },
  {
    id: 'physics-6',
    title: 'Modern Physics',
    description: 'Quantum mechanics and relativity basics',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'physics',
    order: 6,
    createdAt: '2024-01-20T10:00:00Z'
  },
  
  // Computer Science
  {
    id: 'cs-1',
    title: 'Introduction to Programming',
    description: 'Basic programming concepts and syntax',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 1,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'cs-2',
    title: 'Data Structures',
    description: 'Arrays, linked lists, stacks, and queues',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 2,
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'cs-3',
    title: 'Algorithms',
    description: 'Sorting, searching, and algorithm analysis',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 3,
    createdAt: '2024-01-17T10:00:00Z'
  },
  {
    id: 'cs-4',
    title: 'Object-Oriented Programming',
    description: 'Classes, objects, and inheritance',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 4,
    createdAt: '2024-01-18T10:00:00Z'
  },
  {
    id: 'cs-5',
    title: 'Database Systems',
    description: 'SQL, relational databases, and normalization',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 5,
    createdAt: '2024-01-19T10:00:00Z'
  },
  {
    id: 'cs-6',
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript fundamentals',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 6,
    createdAt: '2024-01-20T10:00:00Z'
  },
  {
    id: 'cs-7',
    title: 'Computer Networks',
    description: 'TCP/IP, protocols, and network architecture',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 7,
    createdAt: '2024-01-21T10:00:00Z'
  },
  {
    id: 'cs-8',
    title: 'Operating Systems',
    description: 'Process management, memory, and file systems',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 8,
    createdAt: '2024-01-22T10:00:00Z'
  },
  {
    id: 'cs-9',
    title: 'Software Engineering',
    description: 'Development methodologies and best practices',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 9,
    createdAt: '2024-01-23T10:00:00Z'
  },
  {
    id: 'cs-10',
    title: 'Artificial Intelligence',
    description: 'Machine learning and AI fundamentals',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'cs',
    order: 10,
    createdAt: '2024-01-24T10:00:00Z'
  },
  
  // Chemistry
  {
    id: 'chem-1',
    title: 'Atomic Structure',
    description: 'Atoms, electrons, and the periodic table',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'chemistry',
    order: 1,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'chem-2',
    title: 'Chemical Bonding',
    description: 'Ionic, covalent, and metallic bonds',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'chemistry',
    order: 2,
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'chem-3',
    title: 'Chemical Reactions',
    description: 'Types of reactions and balancing equations',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'chemistry',
    order: 3,
    createdAt: '2024-01-17T10:00:00Z'
  },
  {
    id: 'chem-4',
    title: 'Organic Chemistry',
    description: 'Hydrocarbons and functional groups',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'chemistry',
    order: 4,
    createdAt: '2024-01-18T10:00:00Z'
  },
  {
    id: 'chem-5',
    title: 'Acids and Bases',
    description: 'pH, neutralization, and titration',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'chemistry',
    order: 5,
    createdAt: '2024-01-19T10:00:00Z'
  },
  {
    id: 'chem-6',
    title: 'Thermochemistry',
    description: 'Energy changes in chemical reactions',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'chemistry',
    order: 6,
    createdAt: '2024-01-20T10:00:00Z'
  },
  {
    id: 'chem-7',
    title: 'Electrochemistry',
    description: 'Redox reactions and electrochemical cells',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'chemistry',
    order: 7,
    createdAt: '2024-01-21T10:00:00Z'
  },
  
  // Biology
  {
    id: 'bio-1',
    title: 'Cell Structure',
    description: 'Prokaryotic and eukaryotic cells',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 1,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'bio-2',
    title: 'DNA and Genetics',
    description: 'DNA structure, replication, and inheritance',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 2,
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'bio-3',
    title: 'Evolution',
    description: 'Natural selection and adaptation',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 3,
    createdAt: '2024-01-17T10:00:00Z'
  },
  {
    id: 'bio-4',
    title: 'Ecology',
    description: 'Ecosystems, populations, and communities',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 4,
    createdAt: '2024-01-18T10:00:00Z'
  },
  {
    id: 'bio-5',
    title: 'Human Anatomy',
    description: 'Body systems and organs',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 5,
    createdAt: '2024-01-19T10:00:00Z'
  },
  {
    id: 'bio-6',
    title: 'Plant Biology',
    description: 'Photosynthesis and plant structure',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 6,
    createdAt: '2024-01-20T10:00:00Z'
  },
  {
    id: 'bio-7',
    title: 'Microbiology',
    description: 'Bacteria, viruses, and microorganisms',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 7,
    createdAt: '2024-01-21T10:00:00Z'
  },
  {
    id: 'bio-8',
    title: 'Biotechnology',
    description: 'Genetic engineering and cloning',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 8,
    createdAt: '2024-01-22T10:00:00Z'
  },
  {
    id: 'bio-9',
    title: 'Neuroscience',
    description: 'Brain structure and nervous system',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'biology',
    order: 9,
    createdAt: '2024-01-23T10:00:00Z'
  },
  
  // English
  {
    id: 'eng-1',
    title: 'Grammar Fundamentals',
    description: 'Parts of speech and sentence structure',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'english',
    order: 1,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: 'eng-2',
    title: 'Literary Analysis',
    description: 'Understanding themes, symbols, and motifs',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'english',
    order: 2,
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: 'eng-3',
    title: 'Essay Writing',
    description: 'Structure, argumentation, and style',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'english',
    order: 3,
    createdAt: '2024-01-17T10:00:00Z'
  },
  {
    id: 'eng-4',
    title: 'Poetry and Verse',
    description: 'Poetic devices and forms',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'english',
    order: 4,
    createdAt: '2024-01-18T10:00:00Z'
  },
  {
    id: 'eng-5',
    title: 'Shakespeare Studies',
    description: 'Analyzing Shakespearean plays and sonnets',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    subjectId: 'english',
    order: 5,
    createdAt: '2024-01-19T10:00:00Z'
  }
];
