export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'Published' | 'Under Review' | 'Preprint' | 'In Preparation';
  links?: {
    paper?: string;
    code?: string;
    poster?: string;
    slides?: string;
  };
};

export const publications: Publication[] = [
  {
    title: 'Toward Controllable Diffusion for Structured 3D Content Generation',
    authors: ['Kerui Zhang', 'Firstname Lastname', 'Firstname Lastname'],
    venue: 'arXiv preprint',
    year: 2026,
    status: 'Preprint',
    links: {
      paper: 'https://arxiv.org/',
      code: 'https://github.com/yourname/project'
    }
  }
];
