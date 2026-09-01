export type Award = {
  id: string;
  title: string;
  context: string;
  year: string;
  description?: string;
};

export const awards: Award[] = [
  { id: 'aw-01', title: 'Golden Plaque', context: '6th National Student Festival of Iran', year: '1396' },
  { id: 'aw-02', title: 'Model Employee', context: 'Shahid Rajaei Festival, Isfahan', year: '1393' },
  { id: 'aw-03', title: 'Model Manager', context: 'National Land and Housing Organization', year: '1403' },
  { id: 'aw-04', title: 'Third Place — Idea Event', context: 'Islamic Azad University, Qeshm', year: '1404', description: 'Intelligent system for monitoring and optimizing energy extraction from oil reservoirs and geothermal resources using the Cost-Sensitive Decision Tree (SCDT)' },
  { id: 'aw-05', title: 'First Place — Best Report Festival', context: 'Official Experts Center of Isfahan', year: '1404' },
  { id: 'aw-06', title: 'Commendation from First Vice President', context: 'National', year: '1403' },
];

export const commendationSummary = {
  firstVicePresident: 1,
  vicePresidents: 4,
  minister: 3,
  total: 45,
};

export const book = {
  title: 'Software Development Management',
  isbn: '978-622-6949-74-3',
  publisher: 'Parsian Danesh Pendar',
  printRun: '1000 copies',
};

export const scientificMemberships = [
  'IEEE',
  'Center for National Elites and Top Scholars',
  'Young Researchers and Elite Club',
  'Iranian Association of Civil Defense',
];

export const certifications = [
  { title: 'General Teaching Qualification Certificate', issuer: 'Planning and Budget Organization' },
  { title: 'Instructor at the Government Management Training Center', issuer: 'Government Management Training Center' },
  { title: 'EPT English Language Certificate', issuer: 'EPT', detail: 'Score: 710' },
];

export const scientificLeadership = [
  'Scientific Secretary',
  'Jury Committee Chair',
  'Scientific Committee Member',
  'Conference Reviewer',
  'Executive Secretary',
  'Festival Secretary',
];

export const scientificEvents = [
  'National AI-related event',
  'Innovation Festival in Road and Construction Industry',
  'International business management seminar',
  'International seismic strengthening seminar',
  'Green technology seminar',
  'Smartification investment opportunities conference',
];
