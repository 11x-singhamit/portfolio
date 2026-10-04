export type ResearchCategory =
  | 'Vulnerability Research'
  | 'CTF Writeups'
  | 'Penetration Testing Notes'
  | 'Security Labs'
  | 'Detection Engineering'
  | 'Security Tutorials';

export interface ResearchPost {
  slug: string;
  title: string;
  category: ResearchCategory;
  date: string;
  description: string;
  technologies: string[];
  readTime: string;
}

export const researchPosts: ResearchPost[] = [
  {
    slug: 'web-enumeration-methodology',
    title: 'Web Enumeration Methodology: From Recon to First Finding',
    category: 'Penetration Testing Notes',
    date: '2026-03-14',
    description:
      'A repeatable checklist for authorized web assessments: subdomain discovery, content discovery, parameter mapping, and safe manual verification before any active testing.',
    technologies: ['Burp Suite', 'Gobuster', 'Nmap'],
    readTime: '8 min read',
  },
  {
    slug: 'linux-privilege-escalation-checklist',
    title: 'Linux Privilege-Escalation Checklist for Lab Environments',
    category: 'Security Labs',
    date: '2026-02-02',
    description:
      'Structured enumeration order — users, sudo, SUID, cron, services, and kernel — with remediation notes for defenders. Lab-only techniques.',
    technologies: ['Linux', 'Bash'],
    readTime: '10 min read',
  },
  {
    slug: 'ctf-forensics-starter-notes',
    title: 'CTF Forensics Starter Notes: Metadata, PCAPs, and Timelines',
    category: 'CTF Writeups',
    date: '2026-01-11',
    description:
      'How to approach beginner forensics challenges: file analysis, packet triage in Wireshark, and building a timeline before jumping to conclusions.',
    technologies: ['Wireshark', 'Python'],
    readTime: '6 min read',
  },
  {
    slug: 'secure-headers-baseline',
    title: 'A Practical Secure-Headers Baseline for Static and Dynamic Sites',
    category: 'Security Tutorials',
    date: '2025-12-05',
    description:
      'What CSP, HSTS, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy actually do, with copy-paste Nginx examples for this portfolio.',
    technologies: ['Nginx', 'CSP', 'HSTS'],
    readTime: '7 min read',
  },
];
