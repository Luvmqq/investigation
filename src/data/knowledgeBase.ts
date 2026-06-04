export interface KnowledgeBaseEntry {
  id: string;
  cluster: "relationship" | "background" | "locate" | "debtor" | "compliance" | "trust";
  audienceZh: string;
  audienceEn: string;
  questionZh: string;
  questionEn: string;
  intent: "informational" | "commercial" | "transactional";
  answerAngleZh: string;
  answerAngleEn: string;
  keyPointsZh: string[];
  keyPointsEn: string[];
  complianceNotesZh: string[];
  complianceNotesEn: string[];
  internalLinks: string[];
}

export const knowledgeBase: KnowledgeBaseEntry[] = [
  {
    id: "relationship-verify-before-trust",
    cluster: "relationship",
    audienceZh: "海外华人、跨境恋爱关系客户",
    audienceEn: "Overseas Chinese clients in cross-border relationships",
    questionZh: "在信任对方之前，如何核实中国境内对象的真实情况？",
    questionEn: "How can I verify someone in mainland China before I trust them?",
    intent: "informational",
    answerAngleZh: "从已有线索、关系背景、现实情况一致性和合法边界四个角度切入，帮助客户先做风险判断。",
    answerAngleEn: "Frame the answer around known clues, relationship context, real-life consistency, and legal boundaries.",
    keyPointsZh: ["先整理已知信息", "判断哪些情况存在明显矛盾", "优先核实生活状态与关系真实性", "先评估再决定是否委托"],
    keyPointsEn: ["Organize what is already known", "Identify visible inconsistencies", "Verify lifestyle and relationship consistency first", "Assess before formally engaging support"],
    complianceNotesZh: ["不承诺非法获取聊天记录", "不提供手机定位", "不提供开房记录"],
    complianceNotesEn: ["No unlawful message access", "No phone tracking", "No hotel record access"],
    internalLinks: ["/services/relationship-investigation-china/", "/blog/how-to-investigate-someone-in-china/", "/legal-disclaimer/"]
  },
  {
    id: "relationship-red-flags",
    cluster: "relationship",
    audienceZh: "准备结婚、转账或赴华见面的跨境客户",
    audienceEn: "Cross-border clients considering marriage, money transfer, or travel",
    questionZh: "跨境婚恋里有哪些值得警惕的风险信号？",
    questionEn: "What are the common red flags in cross-border relationships involving China?",
    intent: "informational",
    answerAngleZh: "把风险信号拆成身份信息、财务请求、生活状态、社交表达和线下真实性五类。",
    answerAngleEn: "Break the warning signs into identity, financial requests, lifestyle, social behavior, and offline authenticity.",
    keyPointsZh: ["频繁要钱", "身份信息反复变化", "拒绝提供现实生活线索", "讲述与现实不符", "长期回避线下见面"],
    keyPointsEn: ["Repeated money requests", "Changing identity details", "Refusal to share real-life clues", "Stories that do not match reality", "Persistent avoidance of in-person contact"],
    complianceNotesZh: ["文章以风险教育为主", "不鼓励报复性调查"],
    complianceNotesEn: ["Keep the content educational", "Do not encourage retaliatory investigation"],
    internalLinks: ["/services/relationship-investigation-china/", "/contact/"]
  },
  {
    id: "background-before-cooperation",
    cluster: "background",
    audienceZh: "准备合作、借款或建立长期关系的海外客户",
    audienceEn: "Overseas clients considering cooperation, lending, or long-term relationships",
    questionZh: "在合作、借款或关系深入前，怎样了解一个人的中国本地背景？",
    questionEn: "How can I understand a person's background in China before cooperation or commitment?",
    intent: "commercial",
    answerAngleZh: "强调公开信息研究、本地线索整理和现实情况评估，而不是夸张式背调。",
    answerAngleEn: "Emphasize public information review, local clue organization, and practical assessment over exaggerated claims.",
    keyPointsZh: ["适合合作前判断", "适合借款风险控制", "适合婚恋前了解", "重点是判断可信度而非制造结论"],
    keyPointsEn: ["Useful before cooperation", "Useful for lending risk control", "Useful before relationship commitment", "Focus on credibility, not forced conclusions"],
    complianceNotesZh: ["不承诺获取银行流水", "不承诺获取内部档案"],
    complianceNotesEn: ["No bank records", "No internal records access"],
    internalLinks: ["/services/background-investigation-china/", "/blog/"]
  },
  {
    id: "background-public-info",
    cluster: "background",
    audienceZh: "搜索背景调查服务的海外用户",
    audienceEn: "Overseas users searching for background investigation support",
    questionZh: "中国背景调查通常可以看哪些公开信息和现实线索？",
    questionEn: "What public information and practical clues can be reviewed in a China background check?",
    intent: "informational",
    answerAngleZh: "把内容限定在公开信息、社交痕迹、工作和生活一致性等可解释的范围内。",
    answerAngleEn: "Keep the scope to public records, social footprints, work clues, and lifestyle consistency.",
    keyPointsZh: ["社交平台痕迹", "公开商业信息", "工作与城市线索", "关系链合理性", "现实表达与身份一致性"],
    keyPointsEn: ["Social platform footprints", "Public business information", "Work and city clues", "Relationship network plausibility", "Consistency between identity and behavior"],
    complianceNotesZh: ["不使用违法数据源", "不夸大信息覆盖面"],
    complianceNotesEn: ["No unlawful sources", "Do not overstate coverage"],
    internalLinks: ["/services/background-investigation-china/", "/privacy-policy/"]
  },
  {
    id: "locate-family-overseas",
    cluster: "locate",
    audienceZh: "寻找失联亲友或旧联系人的海外华人",
    audienceEn: "Overseas Chinese looking for lost family members or old contacts",
    questionZh: "海外华人如何寻找中国境内失联亲友或旧联系人？",
    questionEn: "How can overseas Chinese locate lost family members or old contacts in China?",
    intent: "informational",
    answerAngleZh: "先讲准备材料，再讲线索判断和沟通边界，降低用户焦虑。",
    answerAngleEn: "Start with preparation, then explain clue assessment and communication boundaries.",
    keyPointsZh: ["先整理姓名、城市、联系方式", "区分家人重联与债务寻找", "准备可共享照片与旧信息", "不要一开始发送敏感材料"],
    keyPointsEn: ["Prepare names, city, and contact history", "Separate family reconnection from debt cases", "Organize photos and old details", "Do not send sensitive materials at the start"],
    complianceNotesZh: ["不鼓励骚扰", "尊重明确拒绝联系的边界"],
    complianceNotesEn: ["Do not encourage harassment", "Respect clear no-contact boundaries"],
    internalLinks: ["/services/locate-someone-china/", "/blog/how-overseas-chinese-can-locate-family-in-china/"]
  },
  {
    id: "locate-ex-partner",
    cluster: "locate",
    audienceZh: "寻找前任、旧合作人、失联朋友的客户",
    audienceEn: "Clients looking for former partners, old associates, or lost friends",
    questionZh: "寻找前任或失联联系人时，哪些线索最有用？",
    questionEn: "What clues are most useful when trying to locate a former partner or lost contact in China?",
    intent: "commercial",
    answerAngleZh: "用用户最能提供的日常线索切入，比如旧手机号、微信、城市、工作或学校信息。",
    answerAngleEn: "Focus on the everyday clues users are most likely to have, such as phone numbers, WeChat, city, work, or school history.",
    keyPointsZh: ["旧手机号", "微信号或昵称", "曾经工作单位", "学校或共同联系人", "最后出现城市"],
    keyPointsEn: ["Old phone number", "WeChat ID or nickname", "Former employer", "School or mutual contacts", "Last known city"],
    complianceNotesZh: ["不承诺精准定位", "不承诺强制见面"],
    complianceNotesEn: ["No promise of exact location", "No promise of forced contact"],
    internalLinks: ["/services/locate-someone-china/", "/contact/"]
  },
  {
    id: "debtor-locate-basics",
    cluster: "debtor",
    audienceZh: "有中国债务纠纷或借款回收需求的海外客户",
    audienceEn: "Overseas clients dealing with debt or private lending disputes in China",
    questionZh: "债务人失联后，先准备哪些信息最有用？",
    questionEn: "What information is most useful when a debtor in China stops responding?",
    intent: "transactional",
    answerAngleZh: "帮助用户先整理证据、时间线、身份线索，再判断是否需要本地调查协助或法律路径。",
    answerAngleEn: "Help users organize evidence, timelines, and identity clues before deciding on local support or legal counsel.",
    keyPointsZh: ["姓名和曾用名", "联系方式", "最后已知城市", "借款记录或合同", "共同联系人", "工作或公司信息"],
    keyPointsEn: ["Name and aliases", "Contact channels", "Last known city", "Loan records or contracts", "Mutual contacts", "Employer or company details"],
    complianceNotesZh: ["不提供威胁施压服务", "不承诺违法查询财产"],
    complianceNotesEn: ["No intimidation tactics", "No unlawful asset lookup"],
    internalLinks: ["/services/debtor-location-china/", "/blog/china-debtor-location-guide/", "/legal-disclaimer/"]
  },
  {
    id: "debtor-investigation-vs-legal",
    cluster: "debtor",
    audienceZh: "不确定该先找调查协助还是律师的客户",
    audienceEn: "Clients unsure whether to start with investigation support or a lawyer",
    questionZh: "债务人线索调查和法律追偿分别适合什么阶段？",
    questionEn: "When should someone use debtor clue investigation versus legal recovery?",
    intent: "informational",
    answerAngleZh: "把实践场景拆成前期摸底、证据整理、沟通评估、决定法律行动四步。",
    answerAngleEn: "Break the answer into early-stage assessment, evidence organization, communication feasibility, and legal escalation.",
    keyPointsZh: ["先搞清楚人是否还在原城市", "先判断联系方式是否有效", "先整理借款证据", "再决定是否走律师或诉讼路径"],
    keyPointsEn: ["Confirm whether the person is still in the same city", "Check whether contact details remain valid", "Organize debt evidence first", "Then decide on counsel or litigation"],
    complianceNotesZh: ["不把调查协助说成法律意见", "不夸大追债效果"],
    complianceNotesEn: ["Do not present support as legal advice", "Do not overstate debt recovery results"],
    internalLinks: ["/services/debtor-location-china/", "/contact/"]
  },
  {
    id: "compliance-can-and-cannot",
    cluster: "compliance",
    audienceZh: "担心合法边界的所有潜在客户",
    audienceEn: "All prospective clients concerned about legality",
    questionZh: "网站能做什么，不能做什么？",
    questionEn: "What can this site help with, and what will it not do?",
    intent: "informational",
    answerAngleZh: "用明确边界建立信任，强调合法、合规、保密和先评估后接案。",
    answerAngleEn: "Use clear service boundaries to build trust and signal lawful, confidential handling.",
    keyPointsZh: ["可做公开信息研究", "可做情况评估", "可做本地线索整理", "不可做非法数据获取", "不可做黑客或定位"],
    keyPointsEn: ["Public information research is possible", "Situation assessment is possible", "Local clue organization is possible", "Unlawful data access is not allowed", "No hacking or tracking"],
    complianceNotesZh: ["这类内容要出现在首页、FAQ、合规声明、文章中"],
    complianceNotesEn: ["Repeat these boundaries on the homepage, FAQ, disclaimer, and blog content"],
    internalLinks: ["/legal-disclaimer/", "/privacy-policy/", "/"]
  },
  {
    id: "trust-why-xingwaitian",
    cluster: "trust",
    audienceZh: "首次访问、对机构真实性存疑的访客",
    audienceEn: "First-time visitors who need reassurance",
    questionZh: "为什么海外客户会选择星外天的中国本地调查协助？",
    questionEn: "Why do overseas clients choose Xingwaitian for local China investigation support?",
    intent: "commercial",
    answerAngleZh: "从10+年经验、专业机构、诚信服务、证书展示、原官网链接几方面建立可信感。",
    answerAngleEn: "Build confidence through experience, professionalism, integrity, credentials, and the official legacy website.",
    keyPointsZh: ["10+年行业经验", "专业机构", "诚信服务", "资质证书展示", "星外天原官网外链"],
    keyPointsEn: ["10+ years of experience", "Professional organization", "Integrity-first service", "Visible credentials", "Legacy official website link"],
    complianceNotesZh: ["避免夸大无法验证的荣誉", "优先使用已有图片和公开资料"],
    complianceNotesEn: ["Do not overstate unverifiable honors", "Prefer existing images and public references"],
    internalLinks: ["/about/", "/#services", "/contact/"]
  }
];
