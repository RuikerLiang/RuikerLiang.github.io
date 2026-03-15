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
  description?: string;
};

export type ContactInfo = {
  name: string;
  email?: string;
  academicEmail?: string;
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
  location: 'Hangzhou, China',
  shortTagline: 'Class of 2023 ZJUI ECE student building operating systems, backend services, robotics software, and end-to-end engineering projects.',
  bio: 'I am an undergraduate student in Electrical and Computer Engineering at Zhejiang University / ZJUI. My work centers on hands-on system building, from full-stack web development and Linux server operations to RISC-V operating systems and ROS-based robotics control. I was awarded the National Scholarship and enjoy taking ownership of complete technical systems from early development through deployment.',
  avatarAlt: 'Portrait of Kerui Zhang',
  highlights: ['Class of 2023', 'ZJUI ECE', 'National Scholarship']
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
    details: 'Class of 2023. Project work includes operating systems, backend development, account management systems, and robotics software.'
  }
];

export const skills = [
  'C/C++',
  'Python',
  'Django',
  'ROS',
  'RISC-V',
  'Operating Systems',
  'Virtual Memory',
  'Linux',
  'Shell',
  'Backend Development',
  'Server Operations',
  'Git',
  'Team Collaboration'
];

export const motivation = 'I enjoy building complete systems from the ground up and taking ownership of both core implementation details and practical deployment work. I am especially motivated by projects that combine strong engineering fundamentals with clear real-world utility.';

export const timeline: ExperienceItem[] = [
  {
    title: 'Full-Stack Website Development',
    organization: 'navarythm.com',
    period: 'Independent Project',
    description: 'Led the initial product development, implemented the Django backend, and handled deployment plus routine server operations.'
  },
  {
    title: 'Systems Programming',
    organization: 'Zhejiang University / ZJUI',
    period: 'ECE391',
    description: 'Built a RISC-V operating system with multithreading, disk driver, virtual memory, and shell support.'
  },
  {
    title: 'Robotics Control Development',
    organization: 'Meta ROS',
    period: 'Project Experience',
    description: 'Worked on a ROS-based robot control system with a focus on software integration and control behavior.'
  }
];

export const awards: AwardItem[] = [
  {
    title: 'National Scholarship',
    description: 'Recognized for strong academic performance and overall achievement during undergraduate study.'
  }
];

export const contactInfo: ContactInfo = {
  name: 'Kerui Zhang',
  location: 'Hangzhou, China'
};
