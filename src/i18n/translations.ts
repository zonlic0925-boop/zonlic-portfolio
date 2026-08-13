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
  hero: { taglines: string[] }
  about: { heading: string; motto: string; text: string; educationHeading: string; experienceHeading: string }
  skills: { heading: string; items: ServiceItem[] }
  projects: { heading: string; viewProject: string; items: ProjectItem[] }
  contact: { heading: string; button: string }
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
      taglines: [
        'Master of Chemistry, CityU HK · Distinction',
        'Chemistry Student Representative',
        'Solo Product Developer',
        'Native Mandarin & Cantonese · Fluent English',
      ],
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
            'Elected MSc Chemistry Student Representative at CityU, Class Monitor (2020–2023), and Digital Health Asia 2025 Ambassador. Comfortable leading cross-functional coordination and presenting in Mandarin, Cantonese, and English (IELTS 6.5, TOEIC 815).',
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
      button: 'Contact Me',
    },
    language: { label: 'Language', en: 'EN', zh: '繁中' },
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
    meta: { title: 'Zonlic — 個人作品集', lang: 'zh-HK' },
    nav: {
      about: '關於',
      skills: '技能',
      projects: '項目',
      contact: '聯繫',
    },
    hero: {
      taglines: [
        '香港城市大學化學碩士 · Distinction 優等',
        '化學系學生代表',
        '獨立產品開發者',
        '普通話和廣東話是母語 · 英文流利溝通',
      ],
    },
    about: {
      heading: '關於我',
      motto:
        "It's going to happen, because I am going to make it happen.",
      text: '我是 Zonlic，習慣在科研與落地之間找答案。從五邑大學實驗室，到美的認證現場，再到城大化學研究——場景在變，節奏不變：先弄懂問題，再把它做成。',
      educationHeading: '教育經歷',
      experienceHeading: '工作經驗',
    },
    skills: {
      heading: '技能',
      items: [
        {
          number: '01',
          name: '產品認證與合規',
          description:
            '在美的負責北美微波爐全流程認證——FDA、UL、CSA、FCC 合規審查、原型與文件審核，並與 SGS、Intertek、UL 等機構協作。同時主導越南產線轉移，組織跨境會議，按時完成 20 款型號認證。',
        },
        {
          number: '02',
          name: 'AI 輔助編程',
          description:
            '熟練運用 Cursor 與 Codex 進行 AI 輔助開發，覆蓋快速原型到可上線全棧交付。獨立交付 BubbleMate 氣泡標註工具，全流程負責需求、架構、實現與迭代。',
        },
        {
          number: '03',
          name: '科研與實驗室分析',
          description:
            '科研經歷涵蓋香港城市大學（電化學碳捕集·氧化還原活性分子）與五邑大學：運用 HPLC、GC-MS、紫外可見分光光度計進行實驗設計與精密測試，參與 2 篇 SCI 論文，涵蓋光催化與發光材料方向的實驗設計、操作流程與數據解讀。',
        },
        {
          number: '04',
          name: '領導力與溝通',
          description:
            '城大化學碩士項目當選學生代表、班長（2020–2023）、Digital Health Asia 2025 學生大使。擅長跨團隊協調與匯報，普通話、廣東話、英語均可流利使用（IELTS 6.5，TOEIC 815）。',
        },
        {
          number: '05',
          name: 'Microsoft 辦公與自動化',
          description:
            '熟練使用 Excel、Word 進行結構化報表與文檔撰寫。掌握 Power Automate 工作流自動化，以及 Power BI 數據可視化與看板搭建。',
        },
      ],
    },
    projects: {
      heading: '項目',
      viewProject: '查看項目',
      items: [
        {
          number: '01',
          name: 'BubbleMate',
          category: '獨立項目',
          period: '2026年6月 – 至今',
          description:
            '獨立開發 BubbleMate——面向工程 PDF 的離線 FAI 氣泡標註應用，從產品設計到上線交付全流程一人完成。',
          highlights: [
            '幫助一家製造企業 QA 部門將圖紙人工檢驗時間從約 30 分鐘/張縮短至平均 3 分鐘/張',
            '實現離線審閱、幾何優先氣泡檢測、公差分類與 FA 報告一鍵導出',
            '獨立負責需求、交互、架構、Cursor/Codex 輔助開發與質量門禁及生產部署',
          ],
        },
        {
          number: '02',
          name: '中越跨境產線轉移',
          category: '美的集團 · 跨境項目',
          period: '2025年3月 – 2025年7月',
          description:
            '主導北美微波爐從中國向越南的產線轉移，確保所有認證與出貨時間節點滿足北美市場需求。',
          highlights: [
            '組織 8 次中越跨境協調會議',
            '按時完成 20 款熱銷型號認證',
            '管理越南認證文件提交與可行性分析',
          ],
        },
        {
          number: '03',
          name: '五邑大學實驗室研究',
          category: '科研 · 2 篇 SCI 論文',
          period: '2021年5月 – 2024年3月',
          description:
            '在五邑大學開展化學實驗與精密測試，操作先進分析儀器，參與同行評審論文撰寫。',
          highlights: [
            'MOF-TiO2 光催化合成縮醛/縮酮（SCI）',
            'Cu(I) 配合物 luminescent piezochromism 客體封裝策略（SCI）',
            '熟練操作 HPLC、GC-MS、紫外可見分光光度計',
          ],
        },
      ],
    },
    contact: {
      heading: '聯繫方式',
      button: '聯繫我',
    },
    language: { label: '語言', en: 'EN', zh: '繁中' },
    education: [
      {
        school: '香港城市大學',
        degree: '化學碩士',
        period: '2025年9月 – 2026年6月',
        highlights: [
          '優等',
          '化學系碩士項目當選學生代表',
          '研究方向：電化學碳捕集用氧化還原活性分子',
        ],
      },
      {
        school: '五邑大學',
        degree: '化學工程與工藝學士',
        period: '2020年10月 – 2024年6月',
        highlights: [
          '五邑大學優秀畢業生',
          '發表 2 篇 SCI 論文（光催化與發光材料）',
          '實驗室研究：HPLC、GC-MS、紫外可見分光光度計',
        ],
      },
    ],
    experience: [
      {
        company: '美的集團',
        role: '認證工程師（全職）',
        period: '2024年7月 – 2025年7月',
        highlights: [
          '管理北美微波爐認證（FDA、UL、CSA、FCC）',
          '與 SGS、Intertek、UL 及研發、製造團隊協作',
          '開展原型審查與合規風險分析',
        ],
      },
    ],
  },
}
