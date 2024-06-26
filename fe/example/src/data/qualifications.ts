import { faker } from './faker';

export interface Qualification {
  date: Date;
  name: string;
  issuer: string;
}

const QUALIFICATION_ISSUERS = [
  'Australian National University',
  'Box Hill Institute',
  'Canberra Institute of Technology',
  'Chisholm Institute',
  'École Polytechnique Fédérale de Lausanne',
  'Gordon Institute of TAFE',
  'Griffith College',
  'Harvard University',
  'LMU Munich',
  'Macquarie University, Sydney',
  'Massachusetts Institute of Technology',
  'Nanyang Technological University, Singapore',
  'National University of Singapore',
  'Peking University',
  'RMIT University, Melbourne',
  'Stanford University',
  'Swinburne University of Technology, Melbourne',
  'TAFE International Western Australia',
  'TAFE South Australia',
  'TasTAFE',
  'The University of Melbourne',
  'The University of New South Wales',
  'The University of South Australia',
  'The University of Sydney',
  'The University of Tokyo',
  'The University of Western Australia',
  'University of California, Berkeley',
  'University of Cambridge',
  'University of Hong Kong',
  'University of Oxford',
  'University of Toronto',
  'Yale University',
];

const QUALIFICATION_NAMES = [
  'Bachelor of Electrical Engineering',
  'Bachelor of Engineering (Honours) – Bachelor of Arts',
  'Bachelor of Information Technology',
  'Bachelor of Research',
  'Bachelor of Science',
  'Certificate III in Aged Care',
  'Certificate III in Disability',
  'Certificate III in Pathology',
  'Certificate IV in Accounting',
  'Certificate IV in Administration',
  'Certificate IV in Education Support',
  'Certificate IV in Information Technology-Networking',
  'Diploma in Languages',
  'Graduate Certificate in Biofabrication',
  'Graduate Certificate in Gerontology and Rehabilitation Studies',
  'Graduate Certificate in Health Leadership and Management',
  'Graduate Certificate in Indigenous Health',
  'Graduate Certificate in Indigenous Trauma and Recovery Practice',
  'Honorary Master of Arts',
  'Honorary Doctor of Business Administration',
  'Honorary Doctor of Creative Arts',
  'Honorary Doctor of Education',
  'Honorary Doctor of Laws',
  'Honorary Doctor of Letters',
  'Honorary Doctor of Philosophy',
  'Honorary Doctor of Science',
  'Honorary Doctor of the University of Wollongong',
  'Master of Beekeeping',
  'Master of Work Health and Safety',
];

export const generateQualification = (): Qualification => ({
  date: faker.date.past({ years: 5, refDate: faker.custom.latestDate }),
  issuer: faker.helpers.arrayElement(QUALIFICATION_ISSUERS),
  name: faker.helpers.arrayElement(QUALIFICATION_NAMES),
});
