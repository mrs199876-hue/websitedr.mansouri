export type EducationItem = {
  id: string;
  level: string;
  field: string;
  specialization: string;
  title: string;
  result?: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    id: 'edu-phd',
    level: 'Doctoral Studies',
    field: 'Computer Engineering — Software',
    specialization: 'Artificial Intelligence',
    title: 'A Cost-Sensitive Decision Tree Algorithm for Classification of Imbalanced Data Using Metaheuristic Algorithms',
    result: 'Defended with an excellent grade',
    period: 'PhD',
  },
  {
    id: 'edu-masters',
    level: "Master's Degree",
    field: 'Computer Engineering — Software',
    specialization: 'Intelligent Transportation',
    title: 'Analysis and Monitoring of Traffic Road Accidents Using Data Mining Techniques — Case Study of Isfahan Province',
    result: 'Defended with an excellent grade',
    period: 'MSc',
  },
  {
    id: 'edu-bachelors',
    level: "Bachelor's Degree",
    field: 'Computer Engineering — Software',
    specialization: 'Software Engineering',
    title: 'Design and Implementation of an Online Buying and Selling Website',
    period: 'BSc',
  },
];
