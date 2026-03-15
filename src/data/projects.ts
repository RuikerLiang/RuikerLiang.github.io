export type Project = {
  name: string;
  period: string;
  summary: string;
  technologies: string[];
  contribution: string;
  links?: {
    paper?: string;
    code?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    name: 'NavaRhythm',
    period: 'Independent Project',
    summary: 'Built the early version of NavaRhythm as a full-stack web product, covering backend development and production server operations.',
    technologies: ['Django', 'Backend Development', 'Linux', 'Server Operations'],
    contribution: 'Owned the initial development end to end, implemented the Django backend, and managed deployment plus routine server maintenance.',
    links: {
      demo: 'https://navarhythm.com/'
    }
  },
  {
    name: 'ECE391 RISC-V Operating System',
    period: 'Course Project',
    summary: 'Implemented a RISC-V operating system with key subsystems for execution, storage, memory management, and user interaction.',
    technologies: ['C', 'RISC-V', 'Operating Systems', 'Virtual Memory'],
    contribution: 'Independently completed multithreading, disk driver, virtual memory, and shell functionality across the system.'
  },
  {
    name: 'CS411 Account Management System',
    period: 'Team Project',
    summary: 'Worked on an account management system designed around group expense sharing and collaborative bill splitting.',
    technologies: ['Full-Stack Development', 'Database', 'Group Expense Splitting', 'Team Collaboration'],
    contribution: 'Contributed as a team member with primary responsibility for the core group expense-splitting workflow.'
  },
  {
    name: 'Meta ROS Robot Control System',
    period: 'Project Experience',
    summary: 'Developed a ROS-based robot control system for integrating robot behavior, communication, and control logic.',
    technologies: ['ROS', 'Robotics', 'Linux', 'Control Systems'],
    contribution: 'Built and integrated robot control modules on top of ROS to support coordinated system behavior.'
  }
];
