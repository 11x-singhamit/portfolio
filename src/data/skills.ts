export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: { name: string; level: 'Foundational' | 'Proficient' | 'Advanced' | 'Familiar' }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'offensive',
    title: 'Offensive Security',
    description: 'Structured, authorized testing methodology practised in lab environments.',
    skills: [
      { name: 'Penetration Testing', level: 'Proficient' },
      { name: 'Web Application Security', level: 'Proficient' },
      { name: 'Network Security Testing', level: 'Proficient' },
      { name: 'Vulnerability Assessment', level: 'Proficient' },
      { name: 'Reconnaissance', level: 'Proficient' },
      { name: 'Security Testing & Reporting', level: 'Proficient' },
    ],
  },
  {
    id: 'defensive',
    title: 'Defensive Security',
    description: 'Detection, hardening, and resilience for real infrastructure.',
    skills: [
      { name: 'Security Monitoring', level: 'Foundational' },
      { name: 'Incident Response', level: 'Foundational' },
      { name: 'Security Hardening', level: 'Proficient' },
      { name: 'Access Control', level: 'Proficient' },
      { name: 'Risk Management', level: 'Foundational' },
      { name: 'Security Awareness', level: 'Proficient' },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    description: 'Core engineering foundations for understanding and securing systems.',
    skills: [
      { name: 'Linux', level: 'Proficient' },
      { name: 'Networking (TCP/IP, DNS, HTTP)', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
      { name: 'Bash', level: 'Proficient' },
      { name: 'Git', level: 'Proficient' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'Docker Compose', level: 'Proficient' },
      { name: 'CI/CD (GitHub Actions)', level: 'Foundational' },
      { name: 'Cloud Infrastructure Concepts', level: 'Familiar' },
    ],
  },
  {
    id: 'tools',
    title: 'Security Tools',
    description:
      'Only list tools you have genuinely used in labs or authorized assessments. Edit this list to match your experience.',
    skills: [
      { name: 'Nmap', level: 'Proficient' },
      { name: 'Burp Suite', level: 'Proficient' },
      { name: 'Wireshark', level: 'Foundational' },
      { name: 'Metasploit (lab only)', level: 'Foundational' },
      { name: 'OWASP ZAP', level: 'Foundational' },
      { name: 'Gobuster', level: 'Foundational' },
      { name: 'Nikto', level: 'Familiar' },
      { name: 'SQLmap (lab only)', level: 'Familiar' },
    ],
  },
];
