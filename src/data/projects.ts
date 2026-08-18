export type Project = {
  id: string;
  title: string;
  role: string;
  organization: string;
  category: 'Research' | 'Digital Transformation';
  challenge?: string;
  context?: string;
  solution?: string;
  method?: string;
  scale?: string;
  result?: string;
  basis?: string;
};

export const researchProjects: Project[] = [
  {
    id: 'rp-01',
    title: 'Evaluation of research conducted at the Road, Housing and Urban Development Research Center in national development and design of a data-driven monitoring system',
    role: 'Project Lead',
    organization: 'Road, Housing and Urban Development Research Center',
    category: 'Research',
    challenge: 'Evaluating the impact of conducted research on national development and building a system to monitor outcomes data-driven.',
    context: 'National research center under the Ministry of Roads and Urban Development.',
    solution: 'Design of a data-driven monitoring system to evaluate and track research impact.',
    scale: 'National research institution',
  },
  {
    id: 'rp-02',
    title: 'Feasibility Study of Applying Artificial Intelligence to Road Safety in Iran',
    role: 'Project Collaborator',
    organization: 'Road, Housing and Urban Development Research Center',
    category: 'Research',
    challenge: 'Assessing the feasibility of applying AI techniques to improve road safety outcomes in Iran.',
    context: 'Road safety research within the national transportation infrastructure.',
    solution: 'Feasibility study examining AI applications for road safety.',
    scale: 'National',
  },
];

export const digitalProjects: Project[] = [
  {
    id: 'dp-01',
    title: 'Data-Based Governance Operational Program',
    role: 'Senior Project Manager and Designer',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    basis: 'Article 107(p) of the Seventh Development Plan',
    challenge: 'Operationalizing data-based governance within a national organization.',
    context: 'National Land and Housing Organization — national scope.',
    solution: 'Design and implementation of a data-based governance operational program.',
    scale: 'National',
  },
  {
    id: 'dp-02',
    title: 'Integrated Location-Based National Property and Housing System',
    role: 'Senior Project Manager',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Creating an integrated, location-based system for national property and housing data.',
    context: 'National Land and Housing Organization.',
    solution: 'Design and management of an integrated location-based national system.',
    scale: 'National',
  },
  {
    id: 'dp-03',
    title: 'Data-Driven Performance Payment System',
    role: 'Senior Project Manager and Designer',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Linking performance outcomes to payment processes through data-driven mechanisms.',
    context: 'National Land and Housing Organization.',
    solution: 'Design and implementation of a data-driven performance payment system.',
    scale: 'National',
  },
  {
    id: 'dp-04',
    title: 'Data Center',
    role: 'Implementation Lead',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Establishing organizational data infrastructure.',
    context: 'National Land and Housing Organization.',
    solution: 'Implementation and establishment of the organization\'s data center.',
    scale: 'Organizational',
  },
  {
    id: 'dp-05',
    title: 'Management Dashboard',
    role: 'Senior Project Manager and Designer',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Providing decision-makers with real-time organizational intelligence.',
    context: 'National Land and Housing Organization — Road and Urban Development General Offices across the country.',
    solution: 'Design and implementation of a national management dashboard.',
    scale: 'National — countrywide general offices',
  },
  {
    id: 'dp-06',
    title: 'AI-Based Organizational Chatbot',
    role: 'Implementation Lead',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Improving organizational service delivery through AI.',
    context: 'National Land and Housing Organization.',
    solution: 'Implementation of an AI-based organizational chatbot.',
    scale: 'Organizational',
  },
  {
    id: 'dp-07',
    title: 'Electronic Services Contact Center',
    role: 'Designer',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Centralizing electronic service delivery for citizens.',
    context: 'National Land and Housing Organization.',
    solution: 'Design of an electronic services contact center.',
    scale: 'Organizational',
    result: 'Contact telephone: 02152305',
  },
  {
    id: 'dp-08',
    title: 'Organizational Process Re-engineering',
    role: 'Lead',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Identifying and improving outdated organizational processes.',
    context: 'National Land and Housing Organization.',
    solution: 'Systematic re-engineering of organizational processes.',
    scale: 'Organizational',
    result: '43 organizational processes identified and re-engineered',
  },
  {
    id: 'dp-09',
    title: 'Government Digitalization / Smartification Evaluation',
    role: 'Organizational Lead',
    organization: 'National Land and Housing Organization',
    category: 'Digital Transformation',
    challenge: 'Improving the organization\'s standing in national e-government evaluations.',
    context: 'Ministry of Communications evaluation in e-government and smartification.',
    solution: 'Organization-wide digitalization and smartification initiatives.',
    scale: 'National',
    result: '87-position improvement during 1402 and 1403 — documented organizational achievement',
  },
];
