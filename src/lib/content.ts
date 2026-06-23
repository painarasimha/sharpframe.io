/**
 * SharpFrame site content.
 * All copy lives here so sections stay data-driven and easy to edit.
 */

export const site = {
  name: "SharpFrame",
  logo: { lead: "Sharp", accent: "Frame" },
  calendly: "https://calendly.com/sharpframe/audit",
  email: "hello@sharpframe.io",
  domain: "sharpframe.io",
};

export const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Content types", href: "#formats" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const heroTicker = [
  {
    key: "Videos produced / month",
    value: 80,
    unit: "videos",
    sub: "Per client. In under 3 hours.",
    accent: true,
    prefix: "",
  },
  {
    key: "Average CPA target",
    value: 20,
    unit: "or less",
    sub: "Across Meta, TikTok & Google",
    accent: false,
    prefix: "$",
  },
  {
    key: "Traditional equivalent cost",
    value: 75,
    unit: "K / mo",
    sub: "What 80 videos costs a traditional agency",
    accent: false,
    prefix: "$",
  },
  {
    key: "Platforms covered",
    value: 3,
    unit: "platforms",
    sub: "Meta · TikTok · Google / YouTube",
    accent: false,
    prefix: "",
    animate: false,
  },
] as const;

export const scrollTickerItems = [
  "AI-powered UGC",
  "80 videos/month",
  "CPA under $20",
  "Meta · TikTok · Google",
  "Skincare & supplements",
  "3-hour production",
  "6-stage pipeline",
  "Performance loop",
  "Done for you",
];

export const proofStats = [
  { num: "80", accent: "+", label: "Videos produced per client per month. Every month." },
  { num: "", accent: "3", suffix: "hrs", label: "Time to produce a full month of content. Not weeks." },
  { num: "", accent: "<", suffix: "$20", label: "Target CPA across Meta, TikTok & Google for every client." },
  { num: "50", accent: "×", label: "More creative variants tested vs traditional agencies at the same budget." },
];

export const pipeline = [
  { node: "01", name: "Research", desc: "Trend scan + prior CPA data" },
  { node: "02", name: "Plan", desc: "CPA-weighted content calendar" },
  { node: "03", name: "Generate", desc: "AI production — all formats" },
  { node: "04", name: "Publish", desc: "All platforms, auto-scheduled" },
  { node: "05", name: "Report", desc: "Cost savings, ROAS, CPA" },
  { node: "06", name: "Optimise", desc: "Data feeds next campaign brief" },
];

export const stageCards = [
  {
    num: "Stage 01 → 02",
    title: "Research & Planning",
    desc: "We scan TikTok, Instagram, and YouTube for what's winning in your niche this week — then build a content calendar weighted by what drove the lowest CPA in your last campaign.",
    tools: ["Web research", "Claude AI", "CPA data"],
    featured: false,
  },
  {
    num: "Stage 03 → 04",
    title: "Production & Publishing",
    desc: "Higgsfield generates every video. GPT Image 2.0 builds your full image asset pack. Campaigns go live across Meta, TikTok, and Google — all from one system, no manual trafficking.",
    tools: ["Higgsfield AI", "Meta Ads", "TikTok Ads", "Google Ads"],
    featured: false,
  },
  {
    num: "Stage 05 → 06",
    title: "Performance Intelligence",
    desc: "14 days after launch, we pull creative-level data from every platform. Every video is scored. We tell you what to kill, what to scale, what to remix — and that data immediately briefs next month's campaign.",
    tools: ["All platform MCPs", "AI scoring", "CPA loop"],
    featured: true,
  },
];

export const comparison = {
  them: {
    title: "Traditional agency",
    items: [
      "80 videos in 6–8 weeks",
      "$30K–$75K/month for same volume",
      "4 logins to see your own data",
      "New brief = starting from scratch",
      "3–5 creative variants tested/month",
      "No CPA guarantee. Ever.",
    ],
  },
  you: {
    title: "SharpFrame",
    items: [
      "80 videos in 3 hours",
      "From $2,500/month",
      "All platforms in one live dashboard",
      "Every brief built from last campaign's CPA data",
      "50+ variants tested for the same budget",
      "CPA under $20 — or we keep working",
    ],
  },
};

export const formats = [
  {
    icon: "🎤",
    name: "UGC Review",
    desc: "Authentic product review in the creator's voice. Hook-first, results-focused. The highest-converting format on Meta.",
    cpa: "Avg CPA: $16–22",
  },
  {
    icon: "📦",
    name: "Unboxing",
    desc: "First-impression format. High curiosity hook. Strong for launch campaigns and new SKUs entering the market.",
    cpa: "Avg CPA: $20–28",
  },
  {
    icon: "🎙️",
    name: "Street Interview",
    desc: "Social proof at scale. Multiple voices, same product. Builds trust without one person having to carry the whole ad.",
    cpa: "Avg CPA: $22–30",
  },
  {
    icon: "🎬",
    name: "Product Review",
    desc: "Structured talking-head review with clear before/after framing. High hold rate when the hook earns the first 3 seconds.",
    cpa: "Avg CPA: $22–32",
  },
  {
    icon: "🎧",
    name: "ASMR / Sensory",
    desc: "Product-first, no talking. Texture, sound, motion. Works exceptionally well for skincare and beauty on TikTok.",
    cpa: "Avg CPA: $28–40",
  },
];

export const platforms = [
  { icon: "📘", name: "Meta Ads", detail: "— Facebook & Instagram" },
  { icon: "🎵", name: "TikTok Ads", detail: "— TikTok for Business" },
  { icon: "🔍", name: "Google Ads", detail: "— YouTube & Display" },
  { icon: "📸", name: "Instagram Organic", detail: "— Reels & Stories" },
];

export const tiers = [
  {
    badge: "Launchpad",
    name: "Get started",
    tagline:
      "For brands ready to test what AI-powered content can do. Full production, one platform, real data.",
    price: "$2,500",
    period: "per month · 3-month minimum",
    featured: false,
    features: [
      { text: "30 AI-produced videos/month", key: true },
      { text: "3 UGC formats included", key: true },
      { text: "Image asset pack (10 stills)", key: false },
      { text: "Monthly content calendar", key: false },
      { text: "Meta Ads publishing", key: false },
      { text: "Monthly performance report", key: false },
      { text: "Bi-weekly insight email", key: false },
    ],
  },
  {
    badge: "Most popular",
    name: "Scale",
    tagline:
      "Full pipeline. All 5 formats. All 3 ad platforms. Cross-platform data and AI insight reports every two weeks.",
    price: "$5,500",
    period: "per month · 3-month minimum",
    featured: true,
    features: [
      { text: "80 AI-produced videos/month", key: true },
      { text: "All 5 UGC formats", key: true },
      { text: "Meta + TikTok + Google publishing", key: true },
      { text: "Live cross-platform dashboard", key: true },
      { text: "Bi-weekly AI insight reports", key: true },
      { text: "Full image asset pack (25+ stills)", key: false },
      { text: "CPA optimisation loop", key: false },
      { text: "Instagram organic analytics", key: false },
    ],
  },
  {
    badge: "Partner",
    name: "Full partnership",
    tagline:
      "For brands serious about growth. Revenue-share model, CPA guarantee, and ad spend management up to $50K/month.",
    price: "$10K+",
    period: "per month + % ad spend · 6-month minimum",
    featured: false,
    features: [
      { text: "150+ videos/month", key: true },
      { text: "Custom AI brand avatar (Soul 2.0)", key: true },
      { text: "All platforms including Amazon", key: true },
      { text: "Ad spend management up to $50K", key: true },
      { text: "Weekly AI-prepared strategy call", key: true },
      { text: "CPA guarantee — or we work free", key: true },
      { text: "Shopify revenue attribution", key: false },
      { text: "Weekly insight reports", key: false },
      { text: "Branded client PDF reports", key: false },
    ],
  },
];

export const processRows = [
  {
    step: "Week 1",
    name: "Research & brief",
    desc: "We scan what's winning in your niche this week — on TikTok, Instagram, and YouTube. We pull your prior ad performance data and build a content brief with 15+ video concepts, hook variants, and format allocation. You review and approve it. Nothing goes into production without your sign-off.",
    details: ["Trend research", "15+ concepts", "CPA-weighted format split", "Your approval required"],
  },
  {
    step: "Week 2",
    name: "Production",
    desc: "Once the brief is approved, we generate every video and image asset in a single production session. You receive a preview of every batch before it's finalised. Each video is tagged with its format, hook, and target platform before it gets anywhere near an ad account.",
    details: ["All 5 UGC formats", "Full image pack", "Per-batch approval", "3 hours total"],
  },
  {
    step: "Week 3",
    name: "Publishing",
    desc: "Campaigns go live across your platforms on the approved schedule. All campaigns are created in paused status and you approve them before a single dollar of spend is activated. We handle the campaign structure, targeting, creative upload, and scheduling across every platform.",
    details: ["Meta + TikTok + Google", "You approve before spend", "Scheduled per calendar"],
  },
  {
    step: "Week 4 → Next cycle",
    name: "Performance & loop",
    desc: "14 days after launch, we pull creative-level performance data from every connected platform. Every video gets a CPA score, a hook rate, and a hold rate. We tell you which to scale, which to kill, and which to remix. That data immediately seeds the next campaign brief — so month 2 starts with everything month 1 learned.",
    details: ["All platform data", "Creative scoring", "Kill / scale / remix recs", "Auto-seeds next brief"],
  },
];

export const faqs = [
  {
    q: "Does AI-generated content actually perform on Meta and TikTok?",
    a: "AI UGC achieves a 1.5%–3% CTR on Meta — the same range as human UGC for direct-response advertising. The hook, script, and pacing matter more than whether a real human filmed it. Where AI wins is volume: we can test 50 creative variants for under $200. The same test with real creators costs $10,000+. More variants means the algorithm finds winners faster, which is how CPA drops.",
  },
  {
    q: "Will my ads be labelled as AI-generated?",
    a: "Yes — Meta requires an AI content label on AI-generated creatives as of March 2026. We auto-apply this during every campaign upload. This is a platform policy, not a SharpFrame choice. In practice, the label has minimal impact on direct-response ad performance — what drives clicks is the hook and the offer, not the label.",
  },
  {
    q: "How quickly can we get started after signing?",
    a: "Onboarding takes one week. You connect your ad accounts (takes about 20 minutes with our guided setup), share your brand profile and product details, and we begin the research brief immediately. First videos are typically delivered by the end of week 2. First campaigns go live in week 3.",
  },
  {
    q: "What if the content isn't what we wanted?",
    a: "Every stage has an approval gate. You approve the brief before production starts, the calendar before it's finalised, and each batch of videos before they go anywhere near an ad account. If something isn't right, you request a revision with specific feedback. We allow two revision rounds per batch. You never pay for content you haven't approved.",
  },
  {
    q: "Do I need to manage the ad accounts myself?",
    a: "No. On Scale and Partner tiers, we handle campaign setup, creative upload, targeting, scheduling, and performance monitoring across all platforms. The only thing you do is connect your accounts once and approve campaigns before they go live. Your job is to review and approve — not to operate anything.",
  },
  {
    q: "What exactly is the CPA guarantee on Partner tier?",
    a: "We target a CPA below $20 for your brand within 90 days. If we don't hit it by day 90, we continue working at no additional charge until we do. This guarantee is only possible because our iteration cost is near zero — we can test 50 creative variants in the time a traditional agency takes to brief one. If one angle doesn't work, we move to the next one immediately.",
  },
  {
    q: "What niches do you work with?",
    a: "Currently we work exclusively with DTC skincare and supplement brands. We chose these niches because they're visual, product-forward, and have clear performance metrics. Going deep in two niches means our research, hooks, and format knowledge compound — we get better at your category every month, not just at content production in general.",
  },
];

export const footer = {
  brand:
    "AI-native content agency for DTC skincare and supplement brands. Built to cut CPA, not just fill feeds.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Launchpad — $2,500/mo", href: "#pricing" },
        { label: "Scale — $5,500/mo", href: "#pricing" },
        { label: "Partner — $10K+/mo", href: "#pricing" },
        { label: "Free content audit", href: site.calendly, external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "How it works", href: "#how" },
        { label: "Content formats", href: "#formats" },
        { label: "FAQ", href: "#faq" },
        { label: "hello@sharpframe.io", href: `mailto:${site.email}` },
      ],
    },
    {
      title: "Follow",
      links: [
        { label: "Instagram", href: "https://instagram.com/sharpframe.studio", external: true },
        { label: "TikTok", href: "https://tiktok.com/@sharpframe", external: true },
        { label: "LinkedIn", href: "https://linkedin.com/company/sharpframe", external: true },
      ],
    },
  ],
};
