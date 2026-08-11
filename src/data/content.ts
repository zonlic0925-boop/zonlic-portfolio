export const PERSON = {
  displayName: 'Zonlic',
  fullName: 'ZHANG Zilong',
  alias: 'Zonlic',
  title: 'Certification Engineer · MSc Chemistry · Researcher',
  email: 'zonlic0925@gmail.com',
  phone: '(852) 8495-7302',
  linkedin: 'https://linkedin.com/in/zonlic6',
  cityuEmail: 'zilozhang6-c@my.cityu.edu.hk',
}

export const EDUCATION = [
  {
    school: 'City University of Hong Kong',
    degree: 'Master of Chemistry',
    period: 'Sep 2025 – Jun 2026',
    highlights: [
      'cGPA 3.51/4.30 (Distinction)',
      'Elected Student Representative, Department of Chemistry',
      'Research: Developing Redox-Active Molecules for Electrochemical Carbon Capture (Prof. Li Xing)',
    ],
  },
  {
    school: 'Wuyi University',
    degree: 'BEng Chemical Engineering & Process',
    period: 'Oct 2020 – Jun 2024',
    highlights: [
      'Outstanding Graduate of Wuyi University',
      '2 SCI-indexed papers in photocatalysis & luminescent materials',
      'Laboratory research: HPLC, GC-MS, UV-Vis spectrophotometry',
    ],
  },
]

export const WORK_EXPERIENCE = [
  {
    company: 'Midea Group',
    role: 'Certification Engineer (Full-time)',
    period: 'Jul 2024 – Jul 2025',
    highlights: [
      'Managed NA microwave oven certification (FDA, UL, CSA, FCC)',
      'Collaborated with SGS, Intertek, UL, R&D & manufacturing teams',
      'Conducted prototype review & compliance risk analysis',
    ],
  },
]

export const SERVICES = [
  {
    number: '01',
    name: 'North American Product Certification',
    description:
      'End-to-end certification management for Midea microwave ovens entering the North American market — ensuring compliance with FDA, UL, CSA, and FCC standards, and liaising with SGS, Intertek, and UL.',
  },
  {
    number: '02',
    name: 'Laboratory Research & Analysis',
    description:
      'Designing experiments and precision testing with HPLC, GC-MS, and UV-Vis spectrophotometers. Contributed to 2 SCI-indexed papers covering experimental design, procedures, and data interpretation.',
  },
  {
    number: '03',
    name: 'Cross-border Project Management',
    description:
      'Led Midea\'s microwave oven production transfer to Vietnam — organized 8 Sino-Vietnamese meetings, managed certification document submissions, and certified 20 high-demand models on schedule.',
  },
  {
    number: '04',
    name: 'Technical Compliance Review',
    description:
      'Analyzing product prototypes and technical documentation to identify non-compliance risks with NA certification requirements, providing actionable solutions to R&D and production teams.',
  },
  {
    number: '05',
    name: 'Leadership & Communication',
    description:
      'MSc Chemistry Student Representative at CityU, Class Monitor (2020–2025), Digital Health Asia 2025 Ambassador. Fluent in Mandarin, Cantonese, and English (IELTS 6.5, TOEIC 815).',
  },
]

export interface Project {
  number: string
  name: string
  category: string
  period: string
  description: string
  highlights: string[]
  col1Image1: string
  col1Image2: string
  col2Image: string
}

export const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'NA Microwave Certification',
    category: 'Midea Group · Work Experience',
    period: 'Jul 2024 – Jul 2025',
    description:
      'Managed and coordinated the full product certification process for Midea microwave ovens targeting the North American market, from prototype review through final approval.',
    highlights: [
      'Ensured compliance with FDA, UL, CSA, and FCC standards',
      'Partnered with SGS, Intertek, and UL on certification workflows',
      'Tracked regulatory updates and implemented changes across teams',
    ],
    col1Image1:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1581092918484-8313a0851643?w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80',
  },
  {
    number: '02',
    name: 'Wuyi University Lab Research',
    category: 'Research · 2 SCI Papers',
    period: 'May 2021 – Mar 2024',
    description:
      'Conducted chemical experiments and precision testing at Wuyi University, operating advanced instruments and contributing to peer-reviewed publications.',
    highlights: [
      'MOF-TiO₂ photocatalyst for acetals/ketals synthesis (SCI)',
      'Cu(I) complex luminescent piezochromism via guest encapsulation (SCI)',
      'Skilled with HPLC, GC-MS, and UV-Vis spectrophotometers',
    ],
    col1Image1:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1576086213369-97a270d7be0c?w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&q=80',
  },
  {
    number: '03',
    name: 'Vietnam Production Transfer',
    category: 'Midea Group · Cross-border Project',
    period: 'Mar 2025 – Jul 2025',
    description:
      'Led the North American microwave oven production transfer from China to Vietnam, ensuring all certification and shipment timelines were met for the NA market.',
    highlights: [
      'Organized 8 cross-border Sino-Vietnamese coordination meetings',
      'Completed certification for 20 high-demand models on schedule',
      'Managed Vietnamese certification documents & feasibility analysis',
    ],
    col1Image1:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    col1Image2:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    col2Image:
      'https://images.unsplash.com/photo-1521737711862-e3b16537f228?w=800&q=80',
  },
]

export const ABOUT_TEXT =
  "I'm Zonlic (ZHANG Zilong) — an MSc Chemistry candidate at City University of Hong Kong (Distinction, cGPA 3.51/4.30) and former Certification Engineer at Midea Group. At Midea, I managed North American microwave oven certification under FDA, UL, CSA, and FCC standards, and led the Vietnam production transfer certifying 20 models on time. My research spans electrochemical carbon capture at CityU and photocatalysis at Wuyi University, with two SCI-indexed publications. Elected Student Representative for MSc Chemistry, Outstanding Graduate of Wuyi University. Fluent in Mandarin, Cantonese, and English (IELTS 6.5). Let's connect!"

export const HERO_TAGLINE =
  'certification engineer · msc chemistry · sci researcher · cross-border project lead'

export const HERO_PORTRAIT = '/portrait-3d.png'
export const HERO_PORTRAIT_PHOTO = '/portrait.png'

export const DECORATIVE_IMAGES = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object3d:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
