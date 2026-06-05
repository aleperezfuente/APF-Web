export const profile = {
  name: 'Alejandro Pérez Fuentes',
  role: 'SysAdmin & DevSecOps Engineer | Cloud & Cybersecurity Specialist',
  tagline: 'Hardening, automatización y resiliencia en entornos cloud.',
  email: 'aleperezfuentes@gmail.com',
  location: 'Sevilla, España',
  avatar: '/assets/images/profile.jpg', // placeholder
  links: {
    github: '#',
    linkedin: '#',
    portfolio: '#'
  }
};

export const about = {
  summary:
    'Administrador de Sistemas especializado en entornos Linux, AWS y Ciberseguridad (Red Team + Blue Team). Experiencia en automatización, hardening, gestión de vulnerabilidades y despliegue de soluciones cloud. Perfil proactivo y orientado a resultados, con sólidos conocimientos en redes, virtualización y metodologías Agile.',
  values: [
    'Seguridad por diseño',
    'Automatización inteligente',
    'Resiliencia operativa',
    'Mejora continua'
  ],
  specialities: [
    'Cloud & DevOps (AWS)',
    'DevSecOps y CI/CD',
    'Hardening y Vulnerability Management',
    'Red Team / Blue Team',
    'Monitorización y observabilidad'
  ]
};

export const experience = [
  {
    title: 'Técnico en Estudios de Mercado y OPI - Media Jornada',
    company: 'Cosmeceutical Center',
    period: 'Sep 2025 – Actualidad',
    description:
      'Gestión front-back con Odoo (HTML, CSS, XML, Python, SQL) y control de código con Git.',
    tags: ['Odoo', 'Python', 'SQL', 'Git']
  },
  {
    title: 'SysAdmin AWS - Becario',
    company: 'EUIGS Admiral Group',
    period: 'Mar 2022 – Dic 2022',
    description:
      'Detección y corrección de vulnerabilidades, parcheo en AWS y Linux On-Premise, automatización interna, hardening (controles de seguridad), soporte técnico a equipos.',
    tags: ['AWS', 'Linux', 'Hardening', 'Vulnerability Management']
  }
];

export const projects = [
  {
    title: 'Aplicación Web de Gestión – Taxi Sevilla Reservas',
    status: 'En producción',
    year: '2023',
    description:
      'Plataforma para gestión de servicios, reservas y taxistas con dashboard personal y resumen diario.',
    problem:
      'Necesidad de centralizar la asignación de conductores y el seguimiento de servicios en tiempo real.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    metrics: [
      'Gestión unificada de reservas',
      'Asignación automática de conductores',
      'Historial y resumen diario por operador'
    ]
  },
  {
    title: 'Implementación de un flujo DevSecOps con contenedores',
    status: 'TFG – Campus Cámara de Comercio Sevilla',
    year: '2025',
    description:
      'Pipeline DevSecOps completo con Jenkins + Docker, análisis OWASP ZAP y despliegue seguro en AWS.',
    problem:
      'Integrar seguridad continua en el ciclo de vida del software sin ralentizar la entrega.',
    tech: [
      'Docker',
      'Jenkins',
      'GitHub Webhooks',
      'AWS EC2',
      'RDS',
      'IAM',
      'Inspector',
      'CloudWatch',
      'Auto Scaling',
      'ELB',
      'OWASP ZAP',
      'Trivy'
    ],
    metrics: [
      'Alta disponibilidad con ASG + ELB',
      'Hardening de infraestructura y red',
      'Monitorización, métricas y alertas centralizadas'
    ]
  }
];

export const skills = {
  cloudDevOps: ['AWS EC2 (ASG & ELB)', 'Lambda', 'S3', 'CloudFront', 'SNS/SES', 'EventBridge', 'Elastic Beanstalk', 'CodeCommit', 'IAM', 'CloudTrail', 'CloudWatch', 'Security Groups', 'Amazon Inspector', 'VPC', 'System Manager'],
  devOpsTools: ['Docker', 'Docker Compose', 'Jenkins', 'Ansible', 'Git', 'GitHub Webhooks', 'Cron jobs', 'Environment variables (.env)', 'Systemd'],
  blueTeam: ['Hardening', 'Vulnerability Management', 'Log Management', 'Patch Management', 'CIS Benchmarks', 'Trivy', 'OWASP ZAP', 'Prometheus', 'Grafana', 'CloudWatch', 'SNMP'],
  redTeam: ['LFI/RFI/SSTI/XSS/SQLi/RCE', 'Escalada de privilegios (Linux/Windows)', 'Pivoting (Ligolo-ng, Chisel, Metasploit)', 'Burp Suite', 'hashcat', 'ffuf', 'dirsearch', 'enum4linux', 'nxc', 'wappalyzer', 'OpenVPN', 'Nmap', 'Wireshark'],
  programming: ['Python', 'PHP', 'Bash', 'REST APIs'],
  databases: ['MySQL', 'MariaDB'],
  formats: ['YAML', 'JSON', 'HTML', 'CSS', 'XML'],
  osNetworks: ['Linux (avanzado)', 'Windows Server', 'TCP/IP', 'VPC', 'Security Groups', 'Firewalls (iptables, Windows Firewall)', 'VPN', 'NAT', 'Routing Tables', 'Subnetting']
};

export const certifications = [
  { name: 'B1 Inglés – Trinity College London' },
  { name: 'EJPTv2 INE' },
  { name: 'SC-900 – Microsoft Security, Compliance & Identity Fundamentals' },
  { name: 'MF0487 Auditoría de Seguridad Informática Mainjobs' },
  { name: 'Robótica y STEAM – Universidad Antonio de Nebrija' },
  { name: 'Kubernetes para principiantes, Docker para desarrolladores, AWS para SysAdmin, Orquestación y automatización IT – OpenWebinars' }
];

export const education = [
  {
    title: 'Máster en Ciberseguridad & IA',
    institution: 'Evolve Academy',
    period: 'May 2025 – Nov 2025',
    note: '480 horas · Nota media: 9,33'
  },
  {
    title: 'G.E.C.E.G.S. – Ciberseguridad en entornos de TI',
    institution: 'C.D.P. Campus Cámara Sevilla II (Junta Andalucía)',
    period: 'Oct 2024 – May 2025',
    note: 'Nota media: 10'
  },
  {
    title: 'CFGS Administración de Sistemas Informáticos en Red',
    institution: 'I.E.S Julio Verne',
    period: 'Sep 2019 – Mar 2022'
  },
  {
    title: 'Bachillerato Ciencias Tecnológicas',
    institution: 'I.E.S Albert Einstein',
    period: 'Sep 2016 – Jun 2019'
  }
];

export const contact = {
  email: profile.email,
  location: profile.location,
};
