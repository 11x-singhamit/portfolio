export interface ExperienceItem {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  securityFocus: string[];
  placeholder: boolean;
}

export const experience: ExperienceItem[] = [
  {
    organization: '[ORGANIZATION NAME]',
    position: '[POSITION — e.g. Security Intern]',
    startDate: '[START DATE]',
    endDate: '[END DATE or Present]',
    location: '[LOCATION]',
    responsibilities: [
      '[Describe a responsibility — e.g. Assisted with vulnerability assessments in authorized lab environments.]',
      '[Describe a responsibility — e.g. Documented findings with severity, impact, and remediation steps.]',
      '[Describe a responsibility — e.g. Supported hardening of Linux hosts following a baseline checklist.]',
    ],
    technologies: ['[Technology 1]', '[Technology 2]', '[Technology 3]'],
    securityFocus: ['[Security area 1]', '[Security area 2]'],
    placeholder: true,
  },
  {
    organization: '[ORGANIZATION NAME]',
    position: '[POSITION — e.g. IT Support / Junior Analyst]',
    startDate: '[START DATE]',
    endDate: '[END DATE]',
    location: '[LOCATION]',
    responsibilities: [
      '[Describe transferable experience — e.g. Troubleshot networking issues across Windows/Linux hosts.]',
      '[Describe transferable experience — e.g. Followed access-control procedures for user provisioning.]',
    ],
    technologies: ['[Technology 1]', '[Technology 2]'],
    securityFocus: ['[Security area 1]'],
    placeholder: true,
  },
];
