export type NewsItem = {
  date: string;
  content: string;
  link?: string;
};

export const news: NewsItem[] = [
  {
    date: '2026-03',
    content: 'Personal academic homepage launched for graduate and research applications.'
  },
  {
    date: '2026-02',
    content: 'Started preparing research statements and selected project summaries for 2026 application cycle.',
    link: '/projects'
  }
];
