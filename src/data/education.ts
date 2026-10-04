export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  coursework: string[];
  placeholder: boolean;
}

export const education: EducationItem[] = [
  {
    degree: '[DEGREE — e.g. B.Sc. Computer Science]',
    institution: '[INSTITUTION NAME]',
    location: '[LOCATION]',
    year: '[YEAR or Expected YEAR]',
    coursework: [
      'Cybersecurity Fundamentals',
      'Computer Networks',
      'Operating Systems',
      'Ethical Hacking (authorized lab)',
      'Information Security',
      'Digital Forensics (intro)',
    ],
    placeholder: true,
  },
];
