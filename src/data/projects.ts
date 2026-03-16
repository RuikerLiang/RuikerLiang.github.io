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
    summary: 'Developed NavaRhythm as a full-stack web project, building the backend and handling deployment in a production Linux environment.',
    technologies: ['Python', 'Django', 'Linux', 'Server Operations'],
    contribution: 'Led the project from initial development to deployment, with primary responsibility for backend implementation and routine server maintenance.',
    links: {
      demo: 'https://navarhythm.com/'
    }
  },
  {
    name: 'Meta ROS Robot Control System',
    period: 'Project Experience',
    summary: 'Built a ROS-based control system for RoboMaster competition robots, supporting multiple robot configurations including mobile bases, robotic arms, and launching modules.',
    technologies: ['C++', 'ROS', 'Linux', 'Robotics'],
    contribution: 'Developed and integrated control modules for different robot subsystems, with a focus on reliable coordination across diverse hardware configurations.'
  },
  {
    name: 'RISC-V Operating System',
    period: 'Course Project',
    summary: 'Built a RISC-V operating system from scratch as part of ECE391 course work, covering low-level CPU interaction, multithreading, disk drivers, virtual memory, shell support, and networking.',
    technologies: ['C++', 'RISC-V', 'Operating Systems', 'Linux'],
    contribution: 'Implemented core system components independently, including multithreading, storage, virtual memory, shell functionality, and network-related support.'
  }
];
