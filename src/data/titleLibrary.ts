export interface TitleLibraryGroup {
  cluster: "relationship" | "background" | "locate" | "debtor" | "compliance" | "trust";
  pageType: "blog" | "service-support" | "faq";
  titlesZh: string[];
  titlesEn: string[];
}

export const titleLibrary: TitleLibraryGroup[] = [
  {
    cluster: "relationship",
    pageType: "blog",
    titlesZh: [
      "在决定结婚前，如何核实中国境内对象的真实情况",
      "跨境婚恋里最常见的5个风险信号",
      "微信认识的中国对象，哪些信息最值得先核实",
      "海外华人如何判断一段中国境内关系是否真实",
      "对方总说很忙不见面，跨境关系里该先看哪些线索",
      "跨境恋爱中，生活状态与说法不一致时该怎么办"
    ],
    titlesEn: [
      "How to Verify Someone in China Before Marriage or Commitment",
      "Five Common Red Flags in Cross-border Relationships Involving China",
      "What to Check First When You Meet Someone in China on WeChat",
      "How Overseas Chinese Can Assess Whether a Relationship in China Is Real",
      "What to Look For When Someone in China Avoids Meeting in Person",
      "How to Review Lifestyle Consistency in a Cross-border Relationship"
    ]
  },
  {
    cluster: "background",
    pageType: "blog",
    titlesZh: [
      "合作前如何了解一个人的中国本地背景",
      "中国背景调查通常能看哪些公开信息",
      "借钱前，怎样判断中国境内对象是否存在风险",
      "海外客户做中国背景了解时最常忽略的3类线索",
      "婚恋前的背景了解，重点应该看什么",
      "个人背景调查不是万能答案，真正有用的是哪些线索"
    ],
    titlesEn: [
      "How to Understand a Person's Background in China Before Cooperation",
      "What Public Information Can Be Reviewed in a China Background Check",
      "How to Assess Risk Before Lending Money to Someone in China",
      "Three Types of Clues Overseas Clients Often Miss in China Background Cases",
      "What Matters Most in a Relationship Background Review in China",
      "A Useful Background Investigation Is About Clarity, Not Drama"
    ]
  },
  {
    cluster: "locate",
    pageType: "blog",
    titlesZh: [
      "海外华人如何寻找中国境内失联亲友",
      "寻找前任或旧联系人时，哪些线索最有帮助",
      "中国境内寻人前，先准备哪些信息更有效",
      "失联多年的人还能找吗？中国本地寻人该怎么开始",
      "从海外寻找中国旧友或亲人，常见误区有哪些",
      "中国本地寻人协助和直接骚扰对方有什么区别"
    ],
    titlesEn: [
      "How Overseas Chinese Can Locate Lost Family Members in China",
      "What Clues Matter Most When Trying to Find a Former Partner in China",
      "What Information to Prepare Before Asking for Locating Help in China",
      "Can Someone Lost for Years Still Be Found in China?",
      "Common Mistakes When Searching for Old Contacts in Mainland China",
      "The Difference Between Lawful Locating Support and Harassment"
    ]
  },
  {
    cluster: "debtor",
    pageType: "blog",
    titlesZh: [
      "债务人失联后，海外客户先该做什么",
      "中国债务人线索调查前，要准备哪些材料",
      "债务人换城市、换电话后，还能从哪些线索入手",
      "调查协助和法律追偿，债务案件里应该先做哪一步",
      "面对中国境内借款失联，哪些承诺最不可信",
      "如何在不冒法律风险的前提下了解债务人现实情况"
    ],
    titlesEn: [
      "What Overseas Clients Should Do First When a Debtor in China Disappears",
      "What Documents to Prepare Before Debtor Clue Investigation in China",
      "How to Rebuild Clues After a Debtor Changes City or Phone Number",
      "Investigation Support or Legal Recovery: Which Comes First in China Debt Cases",
      "What Promises to Avoid When Hiring Debtor Location Support in China",
      "How to Clarify a Debtor's Situation in China Without Legal Risk"
    ]
  },
  {
    cluster: "compliance",
    pageType: "faq",
    titlesZh: [
      "中国调查协助服务可以做什么，不能做什么",
      "为什么正规机构不会提供手机定位或开房记录",
      "如何判断一家中国调查协助机构是否靠谱",
      "跨境客户找中国本地协助时，哪些要求本身就有风险"
    ],
    titlesEn: [
      "What a Lawful China Investigation Support Service Can and Cannot Do",
      "Why Reputable Providers Do Not Offer Phone Tracking or Private Records",
      "How to Tell Whether a China Investigation Provider Is Credible",
      "Which Client Requests Create Legal Risk in Cross-border Cases"
    ]
  },
  {
    cluster: "trust",
    pageType: "service-support",
    titlesZh: [
      "为什么海外客户会选择星外天调查协助",
      "10+年行业经验如何帮助跨境客户降低风险",
      "专业机构、诚信服务、合规边界，为什么这些比夸张承诺更重要",
      "有证书、有官网、有边界，可信任的中国本地协助应该长什么样"
    ],
    titlesEn: [
      "Why Overseas Clients Choose Xingwaitian for Local Investigation Support",
      "How 10+ Years of Industry Experience Reduces Cross-border Risk",
      "Why Professionalism, Integrity, and Clear Boundaries Matter More Than Big Claims",
      "What a Trustworthy Local Investigation Support Provider in China Looks Like"
    ]
  }
];
