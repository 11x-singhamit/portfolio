export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  placeholder: boolean;
}

export const certifications: Certification[] = [
  {
    name: '[CERTIFICATION NAME — only if earned]',
    issuer: '[ISSUING ORGANIZATION]',
    year: '[YEAR]',
    credentialUrl: 'https://example.com/verify/YOUR-CREDENTIAL',
    status: 'Planned',
    placeholder: true,
  },
  {
    name: '[CERTIFICATION NAME — only if earned]',
    issuer: '[ISSUING ORGANIZATION]',
    year: '[YEAR]',
    status: 'In Progress',
    placeholder: true,
  },
];

export const certificationNote =
  'No certifications are claimed here. Replace the placeholders above with certifications you have actually earned, or remove entries. Never list a certification you have not completed and verified.';
