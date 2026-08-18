export type Publication = {
  id: string;
  title: string;
  authors?: string;
  year: string;
  venue: string;
  type: 'Journal' | 'Conference' | 'Book';
  domain: string;
  volume?: string;
  pages?: string;
  issn?: string;
  publisher?: string;
  quartile?: string;
  doi?: string;
  url?: string;
  city?: string;
  language?: 'English' | 'Persian';
};

export const publications: Publication[] = [
  {
    id: 'pub-01',
    title: 'Swarm-Based Cost-Sensitive Decision Tree Using Optimized Rules for Imbalanced Data Classification',
    year: '2025',
    venue: 'Journal of Bionic Engineering',
    type: 'Journal',
    domain: 'Artificial Intelligence',
    publisher: 'Springer',
    volume: '22(2)',
    quartile: 'Q1 as supplied',
    language: 'English',
  },
  {
    id: 'pub-02',
    title: 'Analysis and monitoring of the traffic suburban road accidents using data mining techniques; a case study of Isfahan Province in Iran',
    year: '2014',
    venue: 'The Open Transportation Journal',
    type: 'Journal',
    domain: 'Intelligent Transportation',
    volume: '8',
    pages: '39–49',
    issn: '1874-4478',
    language: 'English',
  },
  {
    id: 'pub-03',
    title: 'A Hybrid Intrusion Detection System Based on Multilayer Artificial Neural Network and Intelligent Feature Selection',
    year: '2015',
    venue: 'Cumhuriyet University Faculty of Science Journal',
    type: 'Journal',
    domain: 'Cybersecurity',
    volume: '36',
    pages: 'No. 3 Special Issue',
    issn: '1300-1949',
    language: 'English',
  },
  {
    id: 'pub-04',
    title: 'Hp-Apriori: Horizontal Parallel-Apriori Algorithm For Frequent Item set Mining From Big Data',
    year: '2017',
    venue: 'IEEE International Conference on Big Data Analysis (ICBDA)',
    type: 'Conference',
    domain: 'Data Science',
    city: 'Beijing, China',
    language: 'English',
  },
  {
    id: 'pub-05',
    title: 'Security issues and challenges using cloud computing in organisations',
    year: '2015',
    venue: '2nd International Congress of Electrical Engineering, Computer Science and Information Technology',
    type: 'Conference',
    domain: 'Cybersecurity',
    city: 'Shahid Beheshti University',
    language: 'English',
  },
];
