export type ExperienceItem = {
  id: string;
  period: string;
  role: string;
  organization: string;
  category: 'Professional' | 'Leadership' | 'Academic' | 'Research';
};

export const experience: ExperienceItem[] = [
  { id: 'ex-01', period: '2022–2025', role: 'Head of Information Technology Development and Smartification Center', organization: 'National Land and Housing Organization', category: 'Professional' },
  { id: 'ex-02', period: '2022', role: 'Director General of Information Technology and Communications', organization: 'National Land and Housing Organization', category: 'Professional' },
  { id: 'ex-03', period: '2021–2023', role: 'Advisor to the President', organization: 'Road, Housing and Urban Development Research Center', category: 'Leadership' },
  { id: 'ex-04', period: '2021–2022', role: 'Head of Regional Office — Isfahan', organization: 'Road, Housing and Urban Development Research Center', category: 'Professional' },
  { id: 'ex-05', period: '2021–2022', role: 'Secretary of the Coordination Council for Transportation, Roads and Urban Development', organization: 'Isfahan Province', category: 'Leadership' },
  { id: 'ex-06', period: '2021–2022', role: 'Secretary of the Physical and Infrastructure Working Group', organization: 'Civil Defense Council of Isfahan Province', category: 'Leadership' },
  { id: 'ex-07', period: '2020–2022', role: 'Member of the E-Government Development Working Group', organization: 'Isfahan Province', category: 'Professional' },
  { id: 'ex-08', period: '2019–2022', role: 'Member of the Executive Board', organization: 'Urban Regeneration Company — Isfahan Province', category: 'Leadership' },
  { id: 'ex-09', period: '2018–2019', role: 'Advisor to Director General of Roads and Urban Development', organization: 'Planning Affairs', category: 'Professional' },
  { id: 'ex-10', period: '2018–2020', role: 'Head of Statistics, Information Technology and Communications Department', organization: 'Isfahan Roads and Urban Development Organization', category: 'Professional' },
  { id: 'ex-11', period: '2021', role: 'Acting Head of the Isfahan Construction Engineering Organization', organization: 'Isfahan Construction Engineering Organization', category: 'Leadership' },
  { id: 'ex-12', period: '2019–2020', role: 'Member of the Representative Board', organization: 'National Land and Housing Organization — Isfahan', category: 'Professional' },
  { id: 'ex-13', period: '2009–2016', role: 'Head of Information Technology Security Unit', organization: 'Isfahan Roads and Urban Development Organization', category: 'Professional' },
];

export const additionalRoles = [
  'Secretary of E-Government and Administrative Smartification Committee',
  'Secretary of Information Monitoring, Data Governance and AI Working Group',
  'Secretary of Data-Based Governance Working Group',
  'Secretary of Information Security Steering Committee',
  'Member of Research and Innovation Committee',
  'Member of Organizational Architecture Steering Council',
  'Member of Road and Urban Development Management and Development Document Committee',
  'Member of relevant professional and supervisory bodies',
  'Ministry inspector in information technology',
  'Engineering examination supervisor',
];
