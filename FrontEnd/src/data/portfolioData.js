export const initialPersonalInfo = {
  name: 'N.A.D.R Adikari',
  title: 'MERN DEVELOPER & IT OPERATIONS SPECIALIST',
  bio: 'Analytical BIT undergraduate at the University of Moratuwa specializing in the intersection of software logic and physical IT infrastructure. Experienced in the full lifecycle of technical support, from LAN configuration and network management to PC hardware repair and MERN-stack application development.',
  github: 'https://github.com/dilumadikari610-coder',
  linkedin: 'www.linkedin.com/in/dilum-adikari-747960414',
  email: 'dilumadikari610@gmail.com',
  phone: '0743775423',
  location: 'Veyangoda, Sri Lanka',
  address: '137/7 Kureekotuwa, Veyangoda',
  languages: [
    { 
      name: 'Sinhala', 
      level: 'Native / Bilingual', 
      percentage: 90,
      subMetrics: { reading: 90, writing: 90, speaking: 90, doc: 90 }
    },
    { 
      name: 'English', 
      level: 'Professional Working', 
      percentage: 60,
      subMetrics: { reading: 80, writing: 60, speaking: 60, doc: 80 }
    }
  ]
};

export const initialExperience = [
  {
    role: 'IT Operations & Systems Assistant',
    company: 'Elisha Clothing PVT LTD',
    period: '2025 - PRESENT',
    type: 'Full-time',
    bullets: [
      'Transport Management Development: Architected a TransitFlow system using the MERN stack to automate vehicle requests, driver allocations, and fleet tracking for company logistics.',
      'System Logic & Automation: Engineered digital FIFO workflows and style-based validation logic, utilizing barcode generation to ensure 100% data integrity in warehouse operations.',
      'LAN & Network Administration: Configured and managed the local area network (LAN) to ensure high-uptime connectivity for all production floor devices and office workstations.',
      'Hardware Systems Support: Diagnosed and maintained specialized industrial hardware, including POS terminals, thermal printers, and barcode systems, to minimize operational downtime.',
      'Technical Troubleshooting: Provided rapid-response support for complex network bottlenecks and hardware failures to guarantee high systems availability.'
    ]
  }
];

export const initialEducation = [
  {
    degree: 'Bachelor of Information Technology (BIT)',
    institution: 'University of Moratuwa, Sri Lanka',
    period: '2025 - PRESENT (IN PROGRESS)',
    highlights: 'Specializing in computer science architecture, asynchronous program control flow, database scaling, and full-stack software logic.',
    isHighlighted: true
  },
  {
    degree: 'Full-Stack Web Development Certification',
    institution: 'University of Moratuwa, Sri Lanka',
    period: 'COMPLETED SPECIALIZATION',
    highlights: 'Comprehensive coverage of modern frontend rendering frameworks, Express backend design patterns, and MongoDB Atlas database schema modeling.',
    isHighlighted: false
  },
  {
    degree: 'G.C.E. Advanced Level',
    institution: 'Technology Stream',
    period: 'PASSED EXAMINATIONS',
    highlights: 'Acquired highly rigorous foundational training in technology mechanics, logic networks, mathematics, and operational science principles.',
    isHighlighted: false
  }
];

export const initialProjects = [
  {
    id: '1',
    title: 'TransitFlow Fleet Manager',
    description: 'A dedicated logistics platform automating vehicle requests, driver allocations, and tracking mechanisms using Express backend routes and real-time frontend indicators.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
    type: 'Logistics SaaS',
    github: '#',
    demo: '#'
  },
  
 /* {
    id: '2',
    title: 'Moratuwa Academic Hub',
    description: 'Collaborative task portal built during full-stack web certification to manage academic modules, grade registries, and server integrations.',
    tech: ['React', 'Tailwind CSS', 'Express.js', 'Node.js'],
    type: 'Web Portal',
    github: '#',
    demo: '#'
  } */
];