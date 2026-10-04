export interface SocialLink {
  label: string;
  href: string;
  display: string;
}

export interface Profile {
  name: string;
  namePlaceholder: boolean;
  title: string;
  subtitle: string;
  summary: string;
  location: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  tryhackme?: string;
  hackthebox?: string;
  resumeUrl: string;
  focusAreas: string[];
  socials: SocialLink[];
}

export const profile: Profile = {
  // Replace every [BRACKETED] placeholder with your own information.
  // Do not invent employers, certifications, or credentials.
  name: 'Amit Singh',
  namePlaceholder: false,
  title: 'Cybersecurity Professional',
  subtitle: 'Ethical Hacker | Security Researcher | Security Engineer',
  summary:
    'I am a cybersecurity professional focused on ethical hacking, penetration testing, vulnerability assessment, network security, and building secure technology environments. I work in controlled, authorized lab environments and apply structured methodology — reconnaissance, enumeration, exploitation, post-exploitation analysis, and remediation guidance.',
  location: '[YOUR LOCATION]',
  availability: 'Open to security roles, internships, and freelance security assessments',
  email: 'your@email.com',
  github: 'https://github.com/USERNAME',
  linkedin: 'https://linkedin.com/in/USERNAME',
  tryhackme: 'https://tryhackme.com/p/USERNAME',
  hackthebox: 'https://app.hackthebox.com/profile/USERNAME',
  resumeUrl: './resume.pdf',
  focusAreas: [
    'Ethical Hacking',
    'Penetration Testing',
    'Vulnerability Assessment',
    'Network Security',
    'Web Application Security',
    'Security Engineering',
  ],
  socials: [
    { label: 'Email', href: 'mailto:your@email.com', display: 'your@email.com' },
    { label: 'GitHub', href: 'https://github.com/USERNAME', display: 'github.com/USERNAME' },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/USERNAME',
      display: 'linkedin.com/in/USERNAME',
    },
  ],
};

export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];
