export type ResearchDomain = {
  id: string;
  number: string;
  title: string;
  text: string;
  topics: string[];
};

export const researchDomains: ResearchDomain[] = [
  {
    id: 'ai',
    number: '01',
    title: 'Artificial Intelligence',
    text: 'Machine learning, cost-sensitive learning, decision trees and metaheuristic algorithms applied to classification and intelligent systems.',
    topics: ['Machine Learning', 'Cost-Sensitive Learning', 'Decision Trees', 'Metaheuristic Algorithms', 'Intelligent Systems'],
  },
  {
    id: 'ds',
    number: '02',
    title: 'Data Science',
    text: 'Data mining, imbalanced data classification, big data analytics and the construction of data-driven systems for real-world decision making.',
    topics: ['Data Mining', 'Imbalanced Data Classification', 'Big Data', 'Data-driven Systems'],
  },
  {
    id: 'it',
    number: '03',
    title: 'Intelligent Transportation',
    text: 'Traffic accident analysis, road safety and decision support systems for intelligent transportation infrastructure.',
    topics: ['Traffic Accident Analysis', 'Road Safety', 'Intelligent Transportation Systems', 'Decision Support Systems'],
  },
  {
    id: 'cyber',
    number: '04',
    title: 'Cybersecurity',
    text: 'Intrusion detection, information security, cyber defense and cloud security for organizational and national systems.',
    topics: ['Intrusion Detection', 'Information Security', 'Cyber Defense', 'Cloud Security'],
  },
  {
    id: 'dt',
    number: '05',
    title: 'Digital Transformation',
    text: 'Data governance, e-government, smartification and information systems driving organizational and national digital transformation.',
    topics: ['Data Governance', 'E-Government', 'Smartification', 'Information Systems', 'Digital Transformation'],
  },
];

export const researchFlow = [
  { stage: 'Research', desc: 'Scientific inquiry and method development' },
  { stage: 'Technology', desc: 'Translating methods into working systems' },
  { stage: 'Governance', desc: 'Embedding systems into organizational structures' },
  { stage: 'Impact', desc: 'Measurable outcomes in the real world' },
];
