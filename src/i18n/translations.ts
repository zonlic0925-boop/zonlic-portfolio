export type Lang = 'en' | 'zh'

export interface HighlightItem {
  school?: string
  company?: string
  degree?: string
  role?: string
  period: string
  highlights: string[]
}

export interface ServiceItem {
  number: string
  name: string
  description: string
}

export interface ProjectItem {
  number: string
  name: string
  category: string
  period: string
  description: string
  highlights: string[]
}

export interface Translation {
  meta: { title: string; lang: string }
  nav: { about: string; skills: string; projects: string; contact: string }
  hero: { tagline: string }
  about: { heading: string; text: string }
  skills: { heading: string; items: ServiceItem[] }
  projects: { heading: string; viewProject: string; items: ProjectItem[] }
  contact: { heading: string; title: string; button: string }
  language: { label: string; en: string; zh: string }
  education: HighlightItem[]
  experience: HighlightItem[]
}

export const translations: Record<Lang, Translation> = {
  en: {
    meta: { title: 'Zonlic — Portfolio', lang: 'en' },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      tagline:
        'certification engineer · msc chemistry · sci researcher · cross-border project lead',
    },
    about: {
      heading: 'About me',
      text: "I'm Zonlic (ZHANG Zilong) — an MSc Chemistry candidate at City University of Hong Kong (Distinction, cGPA 3.51/4.30) and former Certification Engineer at Midea Group. At Midea, I managed North American microwave oven certification under FDA, UL, CSA, and FCC standards, and led the Vietnam production transfer certifying 20 models on time. My research spans electrochemical carbon capture at CityU and photocatalysis at Wuyi University, with two SCI-indexed publications. Elected Student Representative for MSc Chemistry, Outstanding Graduate of Wuyi University. Fluent in Mandarin, Cantonese, and English (IELTS 6.5). Let's connect!",
    },
    skills: {
      heading: 'Skills',
      items: [
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
            "Led Midea's microwave oven production transfer to Vietnam — organized 8 Sino-Vietnamese meetings, managed certification document submissions, and certified 20 high-demand models on schedule.",
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
      ],
    },
    projects: {
      heading: 'Projects',
      viewProject: 'View Project',
      items: [
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
        },
        {
          number: '02',
          name: 'Wuyi University Lab Research',
          category: 'Research · 2 SCI Papers',
          period: 'May 2021 – Mar 2024',
          description:
            'Conducted chemical experiments and precision testing at Wuyi University, operating advanced instruments and contributing to peer-reviewed publications.',
          highlights: [
            'MOF-TiO2 photocatalyst for acetals/ketals synthesis (SCI)',
            'Cu(I) complex luminescent piezochromism via guest encapsulation (SCI)',
            'Skilled with HPLC, GC-MS, and UV-Vis spectrophotometers',
          ],
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
        },
      ],
    },
    contact: {
      heading: 'Contact',
      title: 'Certification Engineer · MSc Chemistry · Researcher',
      button: 'Contact Me',
    },
    language: { label: 'Language', en: 'EN', zh: '中文' },
    education: [
      {
        school: 'City University of Hong Kong',
        degree: 'Master of Chemistry',
        period: 'Sep 2025 – Jun 2026',
        highlights: [
          'cGPA 3.51/4.30 (Distinction)',
          'Elected Student Representative, Department of Chemistry',
          'Research: Redox-Active Molecules for Electrochemical Carbon Capture (Prof. Li Xing)',
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
    ],
    experience: [
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
    ],
  },
  zh: {
    meta: { title: 'Zonlic — 个人作品集', lang: 'zh-CN' },
    nav: {
      about: '关于',
      skills: '技能',
      projects: '项目',
      contact: '联系',
    },
    hero: {
      tagline: '认证工程师 · 化学硕士 · 科研工作者 · 跨境项目负责人',
    },
    about: {
      heading: '关于我',
      text: '我是 Zonlic（张子龙）—— 香港城市大学化学硕士在读（优等，cGPA 3.51/4.30），曾任美的集团认证工程师。在美的期间，我负责北美微波炉产品的 FDA、UL、CSA、FCC 认证管理，并主导越南产线转移项目，按时完成 20 款型号认证。我的科研方向涵盖城大电化学碳捕集研究及五邑大学光催化研究，已发表 2 篇 SCI 论文。现任化学系硕士项目学生代表，五邑大学优秀毕业生。精通普通话、粤语和英语（IELTS 6.5）。期待与你交流！',
    },
    skills: {
      heading: '技能',
      items: [
        {
          number: '01',
          name: '北美产品认证',
          description:
            '负责美的微波炉进入北美市场的全流程认证管理，确保符合 FDA、UL、CSA、FCC 标准，并与 SGS、Intertek、UL 等认证机构协作。',
        },
        {
          number: '02',
          name: '实验室研究与分析',
          description:
            '使用 HPLC、GC-MS、紫外可见分光光度计进行实验设计与精密测试，参与 2 篇 SCI 论文的实验设计、测试流程与数据解读。',
        },
        {
          number: '03',
          name: '跨境项目管理',
          description:
            '主导美的微波炉越南产线转移项目，组织 8 次中越跨境会议，管理认证文件提交，按时完成 20 款热销型号认证。',
        },
        {
          number: '04',
          name: '技术合规审查',
          description:
            '审查产品原型与技术文档，识别北美认证合规风险，为研发和制造团队提供可落地的改进方案。',
        },
        {
          number: '05',
          name: '领导力与沟通',
          description:
            '城大化学硕士项目学生代表、班长（2020–2025）、Digital Health Asia 2025 学生大使。精通普通话、粤语和英语（IELTS 6.5，TOEIC 815）。',
        },
      ],
    },
    projects: {
      heading: '项目',
      viewProject: '查看项目',
      items: [
        {
          number: '01',
          name: '北美微波炉认证',
          category: '美的集团 · 工作经历',
          period: '2024年7月 – 2025年7月',
          description:
            '负责美的微波炉北美市场的全流程产品认证，从原型审查到最终批准，协调内外部团队确保合规上市。',
          highlights: [
            '确保符合 FDA、UL、CSA、FCC 标准',
            '与 SGS、Intertek、UL 协作完成认证流程',
            '跟踪法规更新并推动团队内部落地',
          ],
        },
        {
          number: '02',
          name: '五邑大学实验室研究',
          category: '科研 · 2 篇 SCI 论文',
          period: '2021年5月 – 2024年3月',
          description:
            '在五邑大学开展化学实验与精密测试，操作先进分析仪器，参与同行评审论文撰写。',
          highlights: [
            'MOF-TiO2 光催化合成缩醛/缩酮（SCI）',
            'Cu(I) 配合物 luminescent piezochromism 客体封装策略（SCI）',
            '熟练操作 HPLC、GC-MS、紫外可见分光光度计',
          ],
        },
        {
          number: '03',
          name: '越南产线转移',
          category: '美的集团 · 跨境项目',
          period: '2025年3月 – 2025年7月',
          description:
            '主导北美微波炉从中国向越南的产线转移，确保所有认证与出货时间节点满足北美市场需求。',
          highlights: [
            '组织 8 次中越跨境协调会议',
            '按时完成 20 款热销型号认证',
            '管理越南认证文件提交与可行性分析',
          ],
        },
      ],
    },
    contact: {
      heading: '联系方式',
      title: '认证工程师 · 化学硕士 · 科研工作者',
      button: '联系我',
    },
    language: { label: '语言', en: 'EN', zh: '中文' },
    education: [
      {
        school: '香港城市大学',
        degree: '化学硕士',
        period: '2025年9月 – 2026年6月',
        highlights: [
          'cGPA 3.51/4.30（优等）',
          '化学系硕士项目当选学生代表',
          '研究方向：电化学碳捕集用氧化还原活性分子（李行教授）',
        ],
      },
      {
        school: '五邑大学',
        degree: '化学工程与工艺学士',
        period: '2020年10月 – 2024年6月',
        highlights: [
          '五邑大学优秀毕业生',
          '发表 2 篇 SCI 论文（光催化与发光材料）',
          '实验室研究：HPLC、GC-MS、紫外可见分光光度计',
        ],
      },
    ],
    experience: [
      {
        company: '美的集团',
        role: '认证工程师（全职）',
        period: '2024年7月 – 2025年7月',
        highlights: [
          '管理北美微波炉认证（FDA、UL、CSA、FCC）',
          '与 SGS、Intertek、UL 及研发、制造团队协作',
          '开展原型审查与合规风险分析',
        ],
      },
    ],
  },
}
