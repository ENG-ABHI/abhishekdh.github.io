// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO CONTENT — edit this file to update your website.
// Add profile.jpg to public/images/ to replace the portrait placeholder.
// ─────────────────────────────────────────────────────────────────────────────
export const portfolio = {
  name: 'Abhishek Dhaulakhandi',
  title: 'Junior Project Fellow',
  initials: 'AD',
  tagline: 'Building intelligent systems at the intersection of machine learning, language, and vision.',
  intro: 'Computer Science & Engineering graduate with a curiosity for intelligent systems that turn research into practical impact.',
  education: {
    degree: 'B.Tech Computer Science & Engineering',
    university: 'Uttaranchal University',
    years: '2022 – 2026',
  },
  currentOrganization: 'Uttarakhand Space Application Center, Dehradun',
  workingSince: 'August 2026',
  location: 'Dehradun, India', // Replace with your preferred location
  social: {
    // IMPORTANT: Replace these placeholders with your real links before publishing.
    email:'abhishekdhaulakhandi01@gmail.com',
    github: 'https://github.com/ENG-ABHI',
    linkedin: 'https://linkedin.com/in/a-dhaulakhandi',
  },
  about: 'Abhishek Dhaulakhandi is a Computer Science & Engineering graduate from Uttaranchal University with a strong interest in Artificial Intelligence and Machine Learning. His interests span Natural Language Processing, Computer Vision, Generative AI, and modern vision models. He enjoys building practical intelligent systems that connect machine learning research with real-world applications.',
  focusPills: ['B.Tech CSE', 'AI/ML', 'NLP', 'Computer Vision', 'Generative AI'],
  experience: [
    {
      company: 'USAC, Dehradun',
      role: 'Junior Project Fellow',
      period: 'August 2026 – Present',
      description: 'Working in the field of AI/ML, with interests spanning NLP, computer vision, Generative AI, and vision-based intelligent systems.',
    },
  ],
  projects: [
    {
      title: 'Brain Tumor Detection using CNN',
      category: 'Computer Vision / Deep Learning',
      description: 'Deep learning based medical image analysis system for detecting brain tumors from medical images using Convolutional Neural Networks.',
      technologies: ['Python', 'CNN', 'Deep Learning', 'Computer Vision', 'Image Classification'],
      image: '', // Example: '/images/brain-tumor.jpg'. Leave blank to use the visual placeholder.
      github: '', // Add a GitHub URL to show the button.
      demo: '', // Add a live-demo URL to show the button.
      accent: 'cyan',
    },
    {
      title: 'Finance Chatbot using RAG',
      category: 'Generative AI / NLP',
      description: 'A Retrieval-Augmented Generation based finance chatbot designed to retrieve relevant financial information and provide contextual responses.',
      technologies: ['Python', 'RAG', 'NLP', 'LLM', 'Embeddings', 'Vector Database'],
      image: '',
      github: '',
      demo: '',
      accent: 'violet',
    },
  ],
  skills: {
    'Machine Learning': ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Model Development'],
    NLP: ['Natural Language Processing', 'LLMs', 'Retrieval-Augmented Generation', 'Embeddings', 'Conversational AI'],
    'Computer Vision': ['Computer Vision', 'CNNs', 'Image Classification', 'Image Analysis', 'Vision Models'],
    'Generative AI': ['Generative AI', 'RAG', 'LLM Applications', 'AI Agents / intelligent systems'],
    Programming: ['Python', 'SQL', 'Git/GitHub'],
  },
  research: [
    { title: 'NLP', label: 'Language Intelligence', description: 'Understanding and building systems that can process, retrieve, and generate human language.', icon: 'message' },
    { title: 'Computer Vision', label: 'Visual Intelligence', description: 'Building intelligent systems that understand images and visual information.', icon: 'eye' },
    { title: 'Generative AI', label: 'Emergent Systems', description: 'Exploring RAG, LLM applications, and emerging generative AI architectures.', icon: 'sparkles' },
    { title: 'Vision Models', label: 'Visual Reasoning', description: 'Exploring modern vision architectures and their applications across real-world problems.', icon: 'scan' },
  ],
}

export const navigation = [
  ['Home', 'home'], ['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'],
  ['Skills', 'skills'], ['Research', 'research'], ['Education', 'education'], ['Contact', 'contact'],
]
