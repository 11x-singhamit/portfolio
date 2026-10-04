export type ProjectCategory =
  'Penetration Testing' | 'Secure Development' | 'Security Lab' | 'DevSecOps';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  approach: string[];
  technologies: string[];
  securityConcepts: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Penetration Testing',
  'Secure Development',
  'Security Lab',
  'DevSecOps',
];

export const projects: Project[] = [
  {
    slug: 'penetration-testing-lab',
    title: 'Penetration Testing Lab',
    category: 'Penetration Testing',
    description:
      'A controlled cybersecurity lab designed to practise reconnaissance, enumeration, vulnerability identification, exploitation, and remediation in an isolated virtual environment.',
    problem:
      'Security practitioners need a safe, legal, repeatable environment to develop testing methodology without touching production or unauthorized systems.',
    approach: [
      'Scoped isolated virtual network (attacker + vulnerable targets, no internet exposure)',
      'Methodical recon: passive OSINT in-lab, active host discovery and service enumeration',
      'Vulnerability identification mapped to misconfigurations and known weakness classes',
      'Controlled exploitation followed by privilege-escalation analysis',
      'Remediation notes and hardening checklist for each finding',
    ],
    technologies: [
      'Kali Linux',
      'Nmap',
      'Burp Suite',
      'Metasploit (lab)',
      'VirtualBox / VMware',
      'Markdown',
    ],
    securityConcepts: [
      'Reconnaissance & Enumeration',
      'Vulnerability Assessment',
      'Ethical Exploitation',
      'Reporting & Remediation',
    ],
    githubUrl: 'https://github.com/USERNAME/penetration-testing-lab',
    featured: true,
  },
  {
    slug: 'secure-web-application',
    title: 'Secure Web Application',
    category: 'Secure Development',
    description:
      'A demo web application built with secure defaults: authentication, input validation, secure headers, access control, and audit logging.',
    problem:
      'Most web breaches trace back to preventable issues — injection, broken access control, and missing security headers. Developers need a reference for doing it right.',
    approach: [
      'Server-side input validation and parameterized queries',
      'Session authentication with secure cookie flags and password hashing',
      'Role-based access control enforced on backend, not just UI',
      'Secure headers (CSP, HSTS, X-Content-Type-Options) and output encoding',
      'Structured audit logging without storing sensitive data',
    ],
    technologies: ['Node.js', 'Express', 'SQLite/Postgres', 'Docker', 'OWASP ZAP (testing)'],
    securityConcepts: [
      'Authentication & Session Management',
      'Input Validation',
      'Secure Headers',
      'Access Control',
      'Logging & Monitoring',
    ],
    githubUrl: 'https://github.com/USERNAME/secure-web-application',
    demoUrl: 'https://yourdomain.com/demos/secure-app',
    featured: true,
  },
  {
    slug: 'docker-security-lab',
    title: 'Docker Security Lab',
    category: 'Security Lab',
    description:
      'Container security lab covering image hardening, isolation, least-privilege configuration, secret handling, and vulnerability scanning.',
    problem:
      'Default container configurations often run as root, leak secrets, and ship vulnerable base images. Teams need a hands-on reference for secure defaults.',
    approach: [
      'Minimal base images with pinned versions and non-root users',
      'Read-only filesystems, dropped capabilities, and resource limits',
      'Secret management via environment/compose secrets — never baked into images',
      'Image and container vulnerability scanning in the workflow',
      'Compose network segmentation for multi-service labs',
    ],
    technologies: ['Docker', 'Docker Compose', 'Trivy', 'Nginx', 'Linux'],
    securityConcepts: [
      'Container Isolation',
      'Least Privilege',
      'Image Hardening',
      'Secrets Management',
      'Vulnerability Scanning',
    ],
    githubUrl: 'https://github.com/USERNAME/docker-security-lab',
    featured: true,
  },
  {
    slug: 'cicd-security-pipeline',
    title: 'CI/CD Security Pipeline',
    category: 'DevSecOps',
    description:
      'A GitHub Actions pipeline template with dependency scanning, static analysis, container scanning, and automated security gates.',
    problem:
      'Vulnerabilities reach production when security checks are manual or optional. Pipelines should enforce them automatically on every change.',
    approach: [
      'Dependency audit on every PR with configurable severity gates',
      'Static analysis (SAST) for common injection and secret patterns',
      'Container image scanning before publish',
      'SARIF upload for centralized code-scanning results',
      'Fail-closed policy: high-severity findings block merge',
    ],
    technologies: ['GitHub Actions', 'npm audit', 'Trivy', 'CodeQL', 'Docker'],
    securityConcepts: ['SAST', 'SCA', 'Container Scanning', 'Shift-Left Security', 'Secure SDLC'],
    githubUrl: 'https://github.com/USERNAME/cicd-security-pipeline',
    featured: false,
  },
];
