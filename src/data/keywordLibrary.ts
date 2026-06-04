export interface KeywordCluster {
  id: string;
  cluster: "relationship" | "background" | "locate" | "debtor" | "compliance" | "brand";
  targetUrl: string;
  intent: "informational" | "commercial" | "transactional" | "navigational";
  primaryKeywords: {
    zh: string[];
    zhHant: string[];
    en: string[];
  };
  secondaryKeywords: {
    zh: string[];
    zhHant: string[];
    en: string[];
  };
}

export const keywordLibrary: KeywordCluster[] = [
  {
    id: "home-brand-cluster",
    cluster: "brand",
    targetUrl: "/",
    intent: "navigational",
    primaryKeywords: {
      zh: ["中国大陆调查协助", "中国调查协助服务", "海外华人中国调查协助", "南京星外天商务咨询有限公司"],
      zhHant: ["中國大陸調查協助", "中國調查協助服務", "海外華人中國調查協助", "南京星外天商務諮詢有限公司"],
      en: ["China investigation support", "mainland China investigation support", "Xingwaitian investigation support", "Nanjing Xingwaitian Business Consulting"]
    },
    secondaryKeywords: {
      zh: ["中国本地核实服务", "跨境情况评估", "中国本地调查团队"],
      zhHant: ["中國本地核實服務", "跨境情況評估", "中國本地調查團隊"],
      en: ["China local verification service", "cross-border case assessment", "local investigation team in China"]
    }
  },
  {
    id: "relationship-cluster",
    cluster: "relationship",
    targetUrl: "/services/relationship-investigation-china/",
    intent: "commercial",
    primaryKeywords: {
      zh: ["中国婚恋调查", "关系调查协助", "跨境婚恋核实", "中国感情调查"],
      zhHant: ["中國婚戀調查", "關係調查協助", "跨境婚戀核實", "中國感情調查"],
      en: ["relationship investigation China", "China relationship verification", "cross-border relationship check China", "private relationship investigation in China"]
    },
    secondaryKeywords: {
      zh: ["微信对象核实", "中国对象真实性核实", "婚恋背景了解", "异地关系调查"],
      zhHant: ["微信對象核實", "中國對象真實性核實", "婚戀背景了解", "異地關係調查"],
      en: ["verify someone in China", "WeChat relationship verification", "romance scam check China", "relationship background review China"]
    }
  },
  {
    id: "background-cluster",
    cluster: "background",
    targetUrl: "/services/background-investigation-china/",
    intent: "commercial",
    primaryKeywords: {
      zh: ["中国背景调查", "个人背景调查中国", "中国个人信息核实", "中国本地背景了解"],
      zhHant: ["中國背景調查", "個人背景調查中國", "中國個人資訊核實", "中國本地背景了解"],
      en: ["China background investigation", "background check in China", "personal background investigation China", "China due diligence for individuals"]
    },
    secondaryKeywords: {
      zh: ["公开信息研究", "社交痕迹分析", "借款前背景了解", "婚恋前背景核实"],
      zhHant: ["公開資訊研究", "社交痕跡分析", "借款前背景了解", "婚戀前背景核實"],
      en: ["public information review China", "social footprint check China", "pre-lending background review", "relationship background review China"]
    }
  },
  {
    id: "locate-cluster",
    cluster: "locate",
    targetUrl: "/services/locate-someone-china/",
    intent: "transactional",
    primaryKeywords: {
      zh: ["中国寻人协助", "寻找中国失联亲友", "中国找人服务", "中国境内寻人"],
      zhHant: ["中國尋人協助", "尋找中國失聯親友", "中國找人服務", "中國境內尋人"],
      en: ["locate someone in China", "find a person in China", "China person locating service", "find lost family in China"]
    },
    secondaryKeywords: {
      zh: ["寻找前任", "寻找旧联系人", "失联亲友寻找", "海外华人寻人"],
      zhHant: ["尋找前任", "尋找舊聯絡人", "失聯親友尋找", "海外華人尋人"],
      en: ["find former partner in China", "locate lost contact in China", "search for family in China", "overseas Chinese locate someone"]
    }
  },
  {
    id: "debtor-cluster",
    cluster: "debtor",
    targetUrl: "/services/debtor-location-china/",
    intent: "transactional",
    primaryKeywords: {
      zh: ["中国债务人调查", "债务人线索调查", "中国找债务人", "债务人失联调查"],
      zhHant: ["中國債務人調查", "債務人線索調查", "中國找債務人", "債務人失聯調查"],
      en: ["debtor location China", "China debtor investigation", "find debtor in China", "debtor clue investigation China"]
    },
    secondaryKeywords: {
      zh: ["借款失联", "债务人联系方式核实", "中国追债前摸底", "欠款人现实情况了解"],
      zhHant: ["借款失聯", "債務人聯絡方式核實", "中國追債前摸底", "欠款人現實情況了解"],
      en: ["lost borrower in China", "debtor contact verification China", "pre-recovery investigation China", "debt clue assessment China"]
    }
  },
  {
    id: "compliance-cluster",
    cluster: "compliance",
    targetUrl: "/legal-disclaimer/",
    intent: "informational",
    primaryKeywords: {
      zh: ["中国调查合法边界", "调查协助合规说明", "中国调查能做什么", "中国调查不能做什么"],
      zhHant: ["中國調查合法邊界", "調查協助合規說明", "中國調查能做什麼", "中國調查不能做什麼"],
      en: ["is private investigation legal in China", "China investigation legal boundaries", "what can a China investigator do", "lawful investigation support China"]
    },
    secondaryKeywords: {
      zh: ["手机定位违法吗", "开房记录查询风险", "黑客调查风险", "个人信息合规边界"],
      zhHant: ["手機定位違法嗎", "開房記錄查詢風險", "黑客調查風險", "個人資訊合規邊界"],
      en: ["phone tracking China legality", "hotel records privacy risk", "hacking investigation risk", "personal data compliance China"]
    }
  },
  {
    id: "blog-cluster",
    cluster: "brand",
    targetUrl: "/blog/",
    intent: "informational",
    primaryKeywords: {
      zh: ["中国调查博客", "海外华人调查指南", "中国寻人指南", "中国背景调查指南"],
      zhHant: ["中國調查部落格", "海外華人調查指南", "中國尋人指南", "中國背景調查指南"],
      en: ["China investigation blog", "overseas Chinese investigation guide", "China locating guide", "China background check guide"]
    },
    secondaryKeywords: {
      zh: ["跨境关系核实", "中国债务线索", "中国本地核实", "中国情况评估"],
      zhHant: ["跨境關係核實", "中國債務線索", "中國本地核實", "中國情況評估"],
      en: ["cross-border relationship verification", "China debt clues", "China local verification", "mainland China case assessment"]
    }
  }
];
