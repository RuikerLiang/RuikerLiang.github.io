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

export type AwardItem = {
  title: string;
  period?: string;
  description?: string;
};

export type ContactInfo = {
  name: string;
  email?: string;
  academicEmail?: string;
  wechat?: string;
  github?: string;
  googleScholar?: string;
  cvLink?: string;
  location?: string;
  linkedin?: string;
  x?: string;
  blog?: string;
};

export const profile = {
  name: 'Kerui Zhang',
  displayName: 'Kerui Zhang',
  title: 'ECE Undergraduate Student',
  affiliation: 'Zhejiang University / ZJUI',
  shortTagline: '2023 ZJUI ECE student.',
  bio: 'I am interested in 3D AIGC, computer graphics, and machine learning. With a solid programming foundation and a hands-on approach to building practical systems, I hope to further deepen my work in research in the future.',
  avatarAlt: 'Portrait of Kerui Zhang',
  highlights: ['Class of 2023', 'ZJUI ECE', 'China National Scholarship']
};

export const researchInterests: ResearchInterest[] = [
  {
    title: 'Operating Systems',
    keywords: ['RISC-V', 'Multithreading', 'Virtual Memory'],
    summary: 'I enjoy building low-level systems that expose how scheduling, memory, and device management work together.'
  },
  {
    title: 'Backend Engineering',
    keywords: ['Django', 'Deployment', 'Server Operations'],
    summary: 'I like owning backend services end to end, including application logic, deployment, and day-to-day maintenance.'
  },
  {
    title: 'Robotics Software',
    keywords: ['ROS', 'Control Systems', 'Integration'],
    summary: 'I am interested in software systems that connect robot control, coordination, and real-world execution.'
  },
  {
    title: 'Collaborative Product Development',
    keywords: ['Team Projects', 'Full-Stack Systems', 'Expense Sharing'],
    summary: 'I value building practical software with clear user-facing goals, especially when it requires coordination across a team.'
  }
];

export const education: EducationItem[] = [
  {
    degree: 'B.Eng. in Electrical and Computer Engineering',
    institution: 'Zhejiang University / University of Illinois Urbana-Champaign Institute (ZJUI)',
    period: '2023 - Present',
    details: 'English Proficiency: TOEFL 107',
  }
];

export const motivation = 'I enjoy building complete systems from the ground up and taking ownership of both core implementation details and practical deployment work. I am especially motivated by projects that combine strong engineering fundamentals with clear real-world utility.';

export const timeline: ExperienceItem[] = [
  {
    title: 'Full-Stack Website Development',
    organization: 'NavaRhythm',
    period: 'Independent Project',
    description: 'Led the initial product development, implemented the Django backend, and handled deployment plus routine server operations.'
  },
  {
    title: 'Systems Programming',
    organization: 'Zhejiang University / ZJUI',
    period: 'Course Work',
    description: 'Built a RISC-V operating system from scratch as part of ECE391 course work, starting from low-level CPU interactions, and implemented multithreading, disk drivers, virtual memory, a shell, and network support.'
  },
  {
    title: 'Robotics Control Development',
    organization: 'Meta-Ros',
    period: 'Project Experience',
    description: 'Built a ROS-based control system for RoboMaster competition robots, supporting diverse robot configurations such as Mecanum-wheel and omnidirectional mobile bases, robotic arms, and projectile launching modules.'
  }
];

export const awards: AwardItem[] = [
  {
    title: 'Teaching Assistant for CS225: Data Structures',
    period: '2026.1 - 2026.6'
  },
  {
    title: 'China National Scholarship',
    period: '2024'
  }
];

export const contactInfo: ContactInfo = {
  name: 'Kerui Zhang',
  email: 'keruiz@zju.edu.cn',
  wechat: 'keruiz3',
  location: 'Hangzhou, China'
};
