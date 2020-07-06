export interface Skill {
  name: string;
  type: string;
}

const generateSkills = (names: string[], type: string): Skill[] =>
  names.map((name) => ({ name, type }));

export const SKILLS: Skill[] = [
  ...generateSkills(
    [
      'Bantz',
      'Babysitting',
      'Eating spicy food',
      'Event organising',
      'Football',
      'Green thumb',
      'Homebrewing',
      'Inspirational speaking',
      'Iteration micromanagement',
      'Parenting',
      'Soccer',
      'Soccer coaching',
      'Stakeholder management',
      'Taking people on the journey',
      'Thought leadership',
    ],
    // Obviously
    'Everything else',
  ),

  ...generateSkills(
    [
      '>100 WPM',
      'Apex Legends',
      'Apex',
      'C#',
      'Colemak',
      'Computer networking',
      'F#',
      'Fortnite',
      'Java',
      'JavaScript',
      'jQuery',
      'Lifting',
      'Microsoft Office',
      'Oracle',
      'PC building',
      'PowerShell',
      'Soldering',
      'Subversion',
      'Windows troubleshooting',
    ],
    'IT',
  ),
];
