export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type ResearchInterest = {
  title: string;
  keywords: string[];
  summary: string;
};

export type ContactInfo = {
  name: string;
  email: string;
  academicEmail: string;
  github: string;
  googleScholar: string;
  cvLink: string;
  location: string;
  linkedin?: string;
  x?: string;
  blog?: string;
};

export const profile = {
  name: 'Kerui Zhang',
  displayName: 'Kerui Zhang',
  title: 'Undergraduate Student / Research Applicant',
  affiliation: 'Zhejiang University / ZJUI',
  location: 'Hangzhou, China',
  email: 'your_email@example.com',
  academicEmail: 'your_academic_email@example.com',
  github: 'https://github.com/yourname',
  googleScholar: 'https://scholar.google.com/',
  cvLink: '/cv.pdf',
  shortTagline: 'Applying for graduate study, research internships, and RA opportunities in AI and graphics.',
  bio: 'I am an undergraduate student interested in computer graphics, generative models, inverse rendering, and embodied intelligence. I am building this website to showcase my academic background, research interests, and selected projects for graduate school and research applications.',
  avatarAlt: 'Portrait placeholder for Kerui Zhang'
};

export const researchInterests: ResearchInterest[] = [
  {
    title: 'Computer Graphics',
    keywords: ['Rendering', 'Geometry Processing', 'Differentiable Graphics'],
    summary: 'I am interested in physically grounded visual computing, from rendering foundations to learnable graphics pipelines.'
  },
  {
    title: 'Generative Models / Diffusion Models',
    keywords: ['Diffusion', 'Text-to-3D', 'Controllable Generation'],
    summary: 'I explore how modern generative models can be made controllable and reliable for scientific and visual creation tasks.'
  },
  {
    title: 'Inverse Rendering',
    keywords: ['Material Estimation', 'Lighting Reconstruction', 'Optimization'],
    summary: 'I study inverse problems that recover scene properties from images under uncertain lighting and geometry.'
  },
  {
    title: '3D Vision',
    keywords: ['NeRF', '3D Reconstruction', 'View Synthesis'],
    summary: 'My focus includes representation learning for geometry and appearance to bridge perception and generation.'
  },
  {
    title: 'Embodied AI',
    keywords: ['Simulation', 'Policy Learning', 'Multimodal Reasoning'],
    summary: 'I am interested in embodied systems that integrate visual perception, language, and control for real-world tasks.'
  }
];

export const education: EducationItem[] = [
  {
    degree: 'B.Eng. in Computer Science (Expected)',
    institution: 'Zhejiang University / University of Illinois Urbana-Champaign Institute (ZJUI)',
    period: '2022 – Present',
    details: 'Relevant coursework: Computer Graphics, Machine Learning, Computer Vision, Linear Algebra.'
  }
];

export const skills = [
  'Python',
  'C++',
  'PyTorch',
  'Computer Vision',
  'Deep Learning',
  'LaTeX',
  'Git',
  'Linux'
];

export const motivation = 'I aim to conduct research that combines principled visual modeling with modern learning methods, and eventually contributes to robust 3D understanding and generation systems for both academic and real-world impact.';

export const timeline: ExperienceItem[] = [
  {
    title: 'Undergraduate Research Preparation',
    organization: 'Self-Driven Projects',
    period: '2024 – Present',
    description: 'Developing research prototypes in graphics and generative modeling while preparing materials for research applications.'
  },
  {
    title: 'Course Project Development',
    organization: 'Zhejiang University / ZJUI',
    period: '2023 – 2025',
    description: 'Built project-based systems in machine learning and visual computing with emphasis on reproducibility and clear technical communication.'
  }
];

export const contactInfo: ContactInfo = {
  name: 'Kerui Zhang',
  email: 'your_email@example.com',
  academicEmail: 'your_academic_email@example.com',
  github: 'https://github.com/yourname',
  googleScholar: 'https://scholar.google.com/',
  cvLink: '/cv.pdf',
  location: 'Hangzhou, China',
  linkedin: 'https://www.linkedin.com/in/yourname',
  x: 'https://x.com/yourname',
  blog: 'https://yourblog.example.com'
};
