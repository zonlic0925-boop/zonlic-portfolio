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
  about: { heading: string; motto: string; text: string; educationHeading: string; experienceHeading: string }
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
        'master of chemistry at cityu hk · former certification engineer · native mandarin & cantonese · fluent english',
    },
    about: {
      heading: 'About me',
      motto:
        "It's going to happen, because I am going to make it happen.",
      text: "I'm Zonlic — equally at home in a lab coat or a compliance review. From research at Wuyi University, to certification at Midea, to chemistry at CityU, I keep the same rhythm: understand deeply, communicate clearly, deliver reliably.",
      educationHeading: 'Education',
      experienceHeading: 'Work Experience',
    },
    skills: {
      heading: 'Skills',
      items: [
        {
          number: '01',
          name: 'Product Certification & Compliance',
          description:
            'At Midea, managed end-to-end North American microwave certification — FDA, UL, CSA, and FCC compliance, prototype and document review, and coordination with SGS, Intertek, and UL. Also led the Vietnam production transfer, organizing cross-border meetings and delivering 20 model certifications on schedule.',
        },
        {
          number: '02',
          name: 'AI-Assisted Programming',
          description:
            'Proficient in AI-assisted development with Cursor and Codex — from rapid prototyping to production-ready full-stack delivery. Independently shipped BubbleMate, owning requirements, architecture, implementation, and iteration without a dedicated engineering team.',
        },
        {
          number: '03',
          name: 'Research & Laboratory Analysis',
          description:
            'Conducted laboratory research at City University of Hong Kong on redox-active molecules for electrochemical carbon capture, and at Wuyi University designed experiments and ran precision testing with HPLC, GC-MS, and UV-Vis spectrophotometers. Contributed to 2 SCI-indexed papers spanning experimental design, procedures, and data interpretation in photocatalysis and luminescent materials.',
        },
        {
          number: '04',
          name: 'Leadership & Communication',
          description:
            'Elected MSc Chemistry Student Representative at CityU, Class Monitor (2020–2025), and Digital Health Asia 2025 Ambassador. Comfortable leading cross-functional coordination and presenting in Mandarin, Cantonese, and English (IELTS 6.5, TOEIC 815).',
        },
        {
          number: '05',
          name: 'Microsoft Office & Automation',
          description:
            'Proficient in Excel and Word for structured reporting and documentation. Experienced with Power Automate for workflow automation and Power BI for data visualization and dashboard building.',
        },
      ],
    },
    projects: {
      heading: 'Projects',
      viewProject: 'View Project',
      items: [
        {
          number: '01',
          name: 'BubbleMate',
          category: 'Independent Project',
          period: 'Jun 2026 – Present',
          description:
            'Solo-built BubbleMate — an offline FAI ballooning app for engineering PDFs, delivered end-to-end from product design to production deployment.',
          highlights: [
            'Reduced manual drawing inspection from ~30 minutes to ~3 minutes per sheet for a manufacturing QA team',
            'Built offline workflow with geometry-first bubble detection, tolerance classification, and FA report export',
            'Owned full stack solo: requirements, UX, architecture, Cursor/Codex-assisted development, QA gates, and rollout',
          ],
        },
        {
          number: '02',
          name: 'China–Vietnam Cross-border Production Transfer',
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
        {
          number: '03',
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
          'Distinction',
          'Elected Student Representative, Department of Chemistry',
          'Research: Redox-Active Molecules for Electrochemical Carbon Capture',
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
      tagline:
        '香港城市大学化学硕士 · 前认证工程师 · 普通话和广东话是母语 · 英文流利沟通',
    },
    about: {
      heading: '关于我',
      motto: '一定会发生，因为我会让它发生。',
      text: '我是 Zonlic，习惯在科研与落地之间找答案。从五邑大学实验室，到美的认证现场，再到城大化学研究——场景在变，节奏不变：先弄懂问题，再把它做成。',
      educationHeading: '教育经历',
      experienceHeading: '工作经验',
    },
    skills: {
      heading: '技能',
      items: [
        {
          number: '01',
          name: '产品认证与合规',
          description:
            '在美的负责北美微波炉全流程认证——FDA、UL、CSA、FCC 合规审查、原型与文件审核，并与 SGS、Intertek、UL 等机构协作。同时主导越南产线转移，组织跨境会议，按时完成 20 款型号认证。',
        },
        {
          number: '02',
          name: 'AI 辅助编程',
          description:
            '熟练运用 Cursor 与 Codex 进行 AI 辅助开发，覆盖快速原型到可上线全栈交付。独立交付 BubbleMate 气泡标注工具，全流程负责需求、架构、实现与迭代。',
        },
        {
          number: '03',
          name: '科研与实验室分析',
          description:
            '科研经历涵盖香港城市大学（电化学碳捕集·氧化还原活性分子）与五邑大学：运用 HPLC、GC-MS、紫外可见分光光度计进行实验设计与精密测试，参与 2 篇 SCI 论文，涵盖光催化与发光材料方向的实验设计、操作流程与数据解读。',
        },
        {
          number: '04',
          name: '领导力与沟通',
          description:
            '城大化学硕士项目当选学生代表、班长（2020–2025）、Digital Health Asia 2025 学生大使。擅长跨团队协调与汇报，普通话、粤语、英语均可流利使用（IELTS 6.5，TOEIC 815）。',
        },
        {
          number: '05',
          name: 'Microsoft 办公与自动化',
          description:
            '熟练使用 Excel、Word 进行结构化报表与文档撰写。掌握 Power Automate 工作流自动化，以及 Power BI 数据可视化与看板搭建。',
        },
      ],
    },
    projects: {
      heading: '项目',
      viewProject: '查看项目',
      items: [
        {
          number: '01',
          name: 'BubbleMate',
          category: '独立项目',
          period: '2026年6月 – 至今',
          description:
            '独立开发 BubbleMate——面向工程 PDF 的离线 FAI 气泡标注应用，从产品设计到上线交付全流程一人完成。',
          highlights: [
            '帮助一家制造企业 QA 部门将图纸人工检验时间从约 30 分钟/张缩短至平均 3 分钟/张',
            '实现离线审阅、几何优先气泡检测、公差分类与 FA 报告一键导出',
            '独立负责需求、交互、架构、Cursor/Codex 辅助开发与质量门禁及生产部署',
          ],
        },
        {
          number: '02',
          name: '中越跨境产线转移',
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
        {
          number: '03',
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
          '优等',
          '化学系硕士项目当选学生代表',
          '研究方向：电化学碳捕集用氧化还原活性分子',
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
