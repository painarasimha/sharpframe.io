/**
 * Sharpframe — every word on the site.
 *
 * Copy changes should never require touching a component. Pages read from
 * this file only.
 *
 * ⚠ HONESTY RULES (from the brief — do not break these)
 *  · No client logos, testimonials, or result numbers unless real and
 *    approved in writing.
 *  · Hero stat cards use offer facts until real results replace them.
 *  · Industry pages describe typical problems and possible solutions —
 *    never claimed results.
 *  · Anything in [square brackets] must be replaced before launch.
 *    See PLACEHOLDERS.md.
 */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/* ══════════════════════════════════════════════════════════
   GLOBAL
══════════════════════════════════════════════════════════ */

export const site = {
  name: "Sharpframe",
  wordmark: "sharpframe",
  tagline: "Systems first. Then AI.",
  promise: "AI transformation that pays for itself",
  url: "https://sharpframe.com", // [replace with the real domain]
  email: "[hello@yourdomain]",
  linkedin: "[LinkedIn URL]",
  founder: "[Your name]",
  location: "Bengaluru, India",
  reach: "Serving clients worldwide",
  /**
   * Cal.com inline embed: the "username/event" slug.
   * While empty, /book shows a clearly-marked fallback instead of a blank frame.
   */
  booking: {
    calLink: "", // e.g. "sharpframe/20min-ops-call" — [set before launch]
    eventName: "20-min Ops Call",
  },
  /** Hide the footer newsletter block until the checklist PDF exists. */
  showChecklistSignup: false,
};

export const cta = {
  long: "Book a 20-min Ops Call",
  short: "Book a Call",
  href: "/book",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "Blueprint", href: "/blueprint" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
];

export const footer = {
  line: "AI transformation that pays for itself. Systems first, then AI.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Blueprint", href: "/blueprint" },
        { label: "Build", href: "/services#custom-systems" },
        { label: "Automate", href: "/services#ai-automation" },
        { label: "Grow", href: "/services#growth-partner" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Industries", href: "/industries" },
        { label: "Book a Call", href: "/book" },
      ],
    },
  ],
  checklist: {
    title: "Get the Ops Leak Checklist",
    body: "The questions we ask in week one of every Blueprint.",
    cta: "Send it",
  },
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

/* ══════════════════════════════════════════════════════════
   INDUSTRIES — shared by /industries, the home marquee,
   the header dropdown, and the booking form dropdown.
══════════════════════════════════════════════════════════ */

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  leaks: string[];
  builds: string[];
}

export const industries: Industry[] = [
  {
    slug: "rental-fleet",
    name: "Rental & Fleet",
    icon: "Truck",
    leaks: [
      "Idle vehicles or equipment",
      "Unbilled fines, tolls, and damage",
      "Bookings scattered across WhatsApp and calls",
    ],
    builds: [
      "Booking and fleet system",
      "Photo-based damage records",
      "Utilization and pricing insights",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Transport",
    icon: "Package",
    leaks: [
      "Manual dispatch and trip planning",
      "No live view of drivers and deliveries",
      "Slow proof-of-delivery and billing",
    ],
    builds: [
      "Dispatch and tracking dashboard",
      "Driver mobile app with digital POD",
      "Automated invoicing",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    icon: "Stethoscope",
    leaks: [
      "Missed appointments and no-shows",
      "Front desk overloaded with calls",
      "Paperwork for records and billing",
    ],
    builds: [
      "AI booking assistant",
      "Automated reminders",
      "Digital patient and billing records",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    leaks: [
      "Leads lost across portals and WhatsApp",
      "Slow follow-ups",
      "Manual rent and maintenance tracking",
    ],
    builds: [
      "Lead management with auto follow-ups",
      "AI enquiry assistant",
      "Property and rent management system",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    leaks: [
      "Paper-based production tracking",
      "Inventory surprises",
      "Unplanned machine downtime",
    ],
    builds: [
      "Production and inventory dashboards",
      "Digital quality checklists",
      "Maintenance scheduling and forecasting",
    ],
  },
  {
    slug: "retail",
    name: "Retail & Distribution",
    icon: "ShoppingCart",
    leaks: [
      "Stock-outs and overstock",
      "Manual orders from dealers and stores",
      "Delayed collections",
    ],
    builds: [
      "Order and inventory system",
      "Dealer ordering app",
      "Collections tracking and reminders",
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "ConciergeBell",
    leaks: [
      "Reservations spread across channels",
      "Slow guest responses",
      "Manual staff scheduling",
    ],
    builds: [
      "Unified reservations view",
      "AI guest messaging",
      "Staff and housekeeping task apps",
    ],
  },
  {
    slug: "education",
    name: "Education & Training",
    icon: "GraduationCap",
    leaks: [
      "Manual admissions and fee tracking",
      "Repetitive parent and student queries",
      "Scattered records",
    ],
    builds: [
      "Admissions and fee system",
      "AI query assistant",
      "Student records and reporting dashboards",
    ],
  },
  {
    slug: "field-services",
    name: "Field Services",
    icon: "Wrench",
    leaks: [
      "Jobs assigned by phone",
      "No proof of work done",
      "Delayed invoicing after jobs",
    ],
    builds: [
      "Job scheduling and dispatch",
      "Technician mobile app with photos and signatures",
      "Instant invoicing",
    ],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    leaks: [
      "Site updates on WhatsApp",
      "Material waste and theft",
      "Cost overruns spotted too late",
    ],
    builds: [
      "Site progress app",
      "Material and equipment tracking",
      "Budget-versus-actual dashboards",
    ],
  },
  {
    slug: "insurance",
    name: "Insurance & Financial Services",
    icon: "FileText",
    leaks: [
      "Manual document handling",
      "Slow policy and claim processing",
      "Renewals missed",
    ],
    builds: [
      "AI document processing",
      "Automated renewal reminders",
      "Claims and policy workflow system",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    leaks: [
      "Time lost to admin and reporting",
      "Inconsistent client onboarding",
      "Slow invoicing",
    ],
    builds: [
      "Client portal and onboarding flows",
      "AI document drafting",
      "Time, billing, and reporting automation",
    ],
  },
];

/* ══════════════════════════════════════════════════════════
   HOME
══════════════════════════════════════════════════════════ */

export const home = {
  /* 1 — Hero */
  hero: {
    pill: {
      text: "How we took a rental business from paper to one system",
      link: "View case",
      href: "/case-studies/rental-operations",
    },
    headline: { before: "AI Transformation that ", marked: "Pays for Itself" },
    sub: "We find where your business is losing time and money, then build the systems and AI to fix it, from first audit to full deployment.",
    secondary: { label: "See the Blueprint", href: "/blueprint" },
    micro: "Backed by our 5x Value Guarantee",
    /**
     * Offer facts, not client results — per the honesty rules. Swap one card
     * at a time for a real client result once it is confirmed in writing.
     */
    stats: [
      { icon: "CalendarDays", stat: "3 Weeks", label: "Audit to costed roadmap" },
      { icon: "ShieldCheck", stat: "5x Value", label: "Or skip the second payment" },
      { icon: "Layers", stat: "7 Deliverables", label: "Yours to keep, whatever you decide" },
      { icon: "RefreshCw", stat: "100% Credit", label: "Blueprint fee counts toward your build" },
    ],
  },

  /* 2 — Built-for strip */
  builtFor: {
    line: "Built for businesses where operations run the show",
  },

  /* 3 — Services */
  services: {
    eyebrow: "Services",
    heading: "One partner, from first audit to live AI",
    cards: [
      {
        icon: "Compass",
        title: "Ops & AI Blueprint",
        body: "A 3-week deep-dive that maps your operations, puts a number on every leak, and hands you a costed roadmap.",
        link: { label: "Learn more", href: "/blueprint" },
      },
      {
        icon: "LayoutGrid",
        title: "Custom Systems",
        body: "Web and mobile apps, dashboards, and integrations that replace paper, WhatsApp, and spreadsheets.",
        link: null,
      },
      {
        icon: "Bot",
        title: "AI Automation & Agents",
        body: "AI assistants, document processing, smart follow-ups, and forecasting, built on top of clean data.",
        link: null,
      },
      {
        icon: "TrendingUp",
        title: "Growth Partner",
        body: "Monthly strategy, performance reviews, and improvements, so your systems keep up with your plans.",
        link: null,
      },
    ],
    footLine: "Every system we launch includes hands-on training for your team.",
    footLink: { label: "All services", href: "/services" },
  },

  /* 4 — The problem */
  problem: {
    eyebrow: "The problem",
    heading: "The hidden leaks slowing your business",
    sub: "Every growing business ends up asking the same questions about time, money, and AI.",
    questions: [
      "Where is my team losing hours every week?",
      "Why do payments keep slipping through?",
      "Which AI tools are actually worth paying for?",
      "Is our data even ready for AI?",
      "Should we build custom software or buy a tool?",
      "How do we grow without hiring more admin staff?",
      "What's the ROI before we invest?",
      "Why do we still run on WhatsApp and Excel?",
      "How do I see my business in real time?",
      "Which processes should we automate first?",
      "How do we stop errors and double entries?",
      "Is our customer data secure?",
      "Why didn't our last software project stick?",
      "How much is manual work really costing us?",
      "Can AI handle our customer enquiries?",
      "How do we train our team on new systems?",
      "What will this cost, and when does it pay back?",
      "Where do we even start?",
    ],
    footLine: "The Blueprint answers these with your own numbers in 3 weeks.",
    footLink: { label: "See the Blueprint", href: "/blueprint" },
  },

  /* 5 — Why systems first */
  approach: {
    eyebrow: "Our approach",
    heading: "Most AI projects fail before they start",
    body: "AI can only work with clean, structured data. But most businesses still run on chats, paper, and spreadsheets. So we fix the foundation first, then add AI where the numbers say it pays off.",
    layers: [
      { label: "AI and automation", note: "Where the numbers say it pays" },
      { label: "Connected systems", note: "Apps, dashboards, integrations" },
      { label: "Clear operations", note: "How work actually happens" },
    ],
    comparison: {
      themLabel: "Typical AI agency",
      usLabel: "Sharpframe",
      rows: [
        {
          them: "Starts by pitching a chatbot",
          us: "Starts by mapping how your business really works",
        },
        {
          them: "“AI will transform you”",
          us: "A number on every leak, from your own data",
        },
        { them: "Builds on messy data", us: "Fixes the foundation, then adds AI" },
        {
          them: "Consultant hands off to a dev shop",
          us: "One team from audit to deployment",
        },
        { them: "You carry all the risk", us: "5x Value Guarantee on the Blueprint" },
      ],
    },
  },

  /* 6 — Where AI pays off */
  useCases: {
    eyebrow: "Use cases",
    heading: "Where systems and AI pay off in your business",
    tabs: [
      {
        id: "operations",
        label: "Operations",
        items: [
          "Live tracking of jobs, assets, or bookings",
          "Automated scheduling and dispatch",
          "Maintenance and inspection records",
          "Utilization and capacity insights",
        ],
      },
      {
        id: "sales",
        label: "Sales & Customers",
        items: [
          "AI assistant for WhatsApp and web enquiries",
          "Automatic quotes and booking confirmations",
          "Lead tracking and follow-ups",
          "Customer history in one place",
        ],
      },
      {
        id: "finance",
        label: "Finance & Collections",
        items: [
          "Automated payment reminders",
          "Invoice and receipt processing with AI",
          "Unbilled charges caught automatically",
          "Cash-flow visibility",
        ],
      },
      {
        id: "admin",
        label: "Admin & Back Office",
        items: [
          "Document generation from templates",
          "Data entry removed with OCR and AI",
          "Approvals and workflows",
          "Staff task tracking",
        ],
      },
      {
        id: "leadership",
        label: "Leadership & Reporting",
        items: [
          "Live owner dashboards",
          "AI-written daily summaries",
          "Demand and revenue forecasting",
          "Branch and team performance comparison",
        ],
      },
    ],
    note: "Examples of what we commonly build. Your Blueprint decides what's actually worth building for you.",
  },

  /* 7 — How it works */
  howItWorks: {
    eyebrow: "How it works",
    heading: "From manual chaos to measurable results",
    steps: [
      {
        num: "01",
        name: "Blueprint",
        when: "Weeks 1–3",
        body: "We interview your team, map your operations, and quantify every leak.",
      },
      {
        num: "02",
        name: "Build",
        when: "typically 4–12 weeks",
        body: "We build the highest-ROI systems first, in short cycles you can see and test.",
      },
      {
        num: "03",
        name: "Launch & Train",
        when: "",
        body: "We roll out, train your team, and make sure the new way of working sticks.",
      },
      {
        num: "04",
        name: "Grow",
        when: "Monthly",
        body: "As your Growth Partner, we track results, fix what's not working, and plan what's next.",
      },
    ],
  },

  /* 8 — The guarantee */
  guarantee: {
    number: "5x",
    heading: "Our Value Guarantee",
    body: "If our Blueprint doesn't find opportunities worth at least five times its fee every year, you don't pay the second half. And if you build with us, the full Blueprint fee is credited toward your project.",
    link: { label: "How the Blueprint works", href: "/blueprint" },
  },

  /* 9 — Case studies */
  caseStudies: {
    eyebrow: "Case studies",
    heading: "Real operations, really transformed",
  },

  /* 10 — Founder note */
  founderNote: {
    eyebrow: "Why Sharpframe",
    quote:
      "Every business owner I meet wants AI. But most of their operations still run on WhatsApp and paper. Technology only pays off when it fits how a business really runs, so that's where we start, every time.",
    signature: `${site.founder}, Founder`,
    link: { label: "More about us", href: "/about" },
  },

  /* 11 — FAQ */
  faqs: [
    {
      q: "Do you only work with one industry?",
      a: "No. We work with growing businesses in any industry where operations are complex: bookings, assets, field teams, multiple branches, or heavy paperwork.",
    },
    {
      q: "We're not “tech” people. Is this for us?",
      a: "Yes. Most of our clients run on WhatsApp and spreadsheets today. That's exactly where we start.",
    },
    {
      q: "Do we have to replace our current software?",
      a: "Not necessarily. Often the best move is to connect and improve what you already use. The Blueprint tells you which.",
    },
    {
      q: "How long until we see results?",
      a: "The Blueprint takes 3 weeks. Quick wins often go live within the first month of building.",
    },
    {
      q: "Do you work with clients outside India?",
      a: "Yes. We work with clients in India, the Middle East, and worldwide, remotely and on-site when it matters.",
    },
    {
      q: "How much does it cost?",
      a: "It depends on the size of your operations. We share clear, fixed pricing after a 20-minute call.",
    },
    {
      q: "Is our data safe?",
      a: "Yes. Everything is covered by a confidentiality agreement, and your data is only used for your project.",
    },
  ],

  /* 12 — Final CTA */
  finalCta: {
    heading: "Start with our 3-Week Ops & AI Blueprint",
    body: "Find out exactly where your business is losing time and money, and what it's worth to fix it.",
  },
};

/* ══════════════════════════════════════════════════════════
   SERVICES
══════════════════════════════════════════════════════════ */

export const services = {
  hero: {
    eyebrow: "Services",
    headline: "Everything you need to run on systems, not chaos",
    sub: "Start with a clear diagnosis. Build what pays off. Keep improving every month.",
    flow: ["Blueprint", "Build", "Automate", "Grow"],
  },

  blocks: [
    {
      id: "blueprint",
      num: "01",
      name: "Ops & AI Blueprint",
      tagline: "Know exactly where you're losing time and money.",
      what: "A 3-week, fixed-scope review of your operations. We interview your team, map how work really flows, and estimate the annual value of every leak.",
      listTitle: "You get",
      list: [
        "Operations map",
        "Leak report with ₹/$ values",
        "Prioritized 30/90/365-day roadmap",
        "AI readiness assessment",
        "Build scope and estimate",
        "Leadership presentation",
        "30 days of support",
      ],
      bestFor:
        "Businesses that know something's broken but not exactly what, or want AI but don't know where it fits.",
      timelineLabel: "Timeline",
      timeline: "3 weeks",
      link: { label: "Explore the Blueprint", href: "/blueprint" },
    },
    {
      id: "custom-systems",
      num: "02",
      name: "Custom Systems",
      tagline: "Replace paper, WhatsApp, and spreadsheets with one source of truth.",
      what: "Web and mobile applications designed around how your team actually works, connected to the tools you already use.",
      listTitle: "Examples",
      list: [
        "Booking and job management",
        "Asset and fleet tracking",
        "Inventory and orders",
        "Customer and billing records",
        "Field-team mobile apps",
        "Owner dashboards",
        "Integrations with accounting, payment, and messaging tools",
      ],
      bestFor:
        "Businesses whose growth is limited by manual work and scattered data.",
      timelineLabel: "Timeline",
      timeline: "Typically 4–12 weeks, delivered in short, testable cycles",
      link: null,
    },
    {
      id: "ai-automation",
      num: "03",
      name: "AI Automation & Agents",
      tagline: "Let AI handle the repetitive work, on data you can trust.",
      what: "AI features layered on top of clean systems, focused on clear, measurable savings.",
      listTitle: "Examples",
      list: [
        "WhatsApp and web assistants that answer enquiries and take bookings",
        "Document and invoice processing",
        "Automated reminders and follow-ups",
        "Photo-based inspections",
        "Demand and revenue forecasting",
        "AI-written daily summaries for owners",
        "Internal knowledge assistants for staff",
      ],
      bestFor:
        "Businesses with structured data and repetitive, high-volume tasks.",
      timelineLabel: "Timeline",
      timeline: "Often 2–6 weeks per use case",
      link: null,
    },
    {
      id: "growth-partner",
      num: "04",
      name: "Growth Partner",
      tagline: "Your systems keep up with your ambitions.",
      what: "An ongoing monthly partnership after launch.",
      listTitle: "Includes",
      list: [
        "Monthly strategy sessions",
        "Performance review of everything we've built",
        "Roadmap updates as your plans change",
        "Priority fixes and improvements",
        "A direct line to the founder",
      ],
      bestFor:
        "Businesses that want a long-term tech and AI partner without hiring a full in-house team.",
      timelineLabel: "Commitment",
      timeline: "Minimum 3 months",
      link: null,
    },
  ],

  training: {
    heading: "Add-on: Team Training",
    body: "Hands-on training so your team actually uses what we build: role-based sessions, simple guides, and support during the switch. Included with every launch; extended programmes available for larger teams.",
  },

  models: {
    heading: "Engagement models",
    columns: ["Blueprint", "Build", "Growth Partner"],
    rows: [
      {
        label: "Pricing",
        values: ["Fixed fee", "Fixed project price", "Monthly retainer"],
      },
      { label: "Duration", values: ["3 weeks", "Per project", "3+ months"] },
      {
        label: "Risk",
        values: [
          "5x Value Guarantee",
          "Fee credited from Blueprint",
          "Cancel with notice after 3 months",
        ],
      },
    ],
    note: "No prices on the site. Pricing is shared after the call.",
  },

  finalCta: {
    heading: "Not sure where to start? Start with a conversation.",
    body: "",
  },
};

/* ══════════════════════════════════════════════════════════
   INDUSTRIES PAGE
══════════════════════════════════════════════════════════ */

export const industriesPage = {
  hero: {
    eyebrow: "Industries",
    headline: "Different industries. The same hidden leaks.",
    sub: "Wherever work runs on bookings, assets, field teams, or paperwork, time and money slip through the cracks. Find yours below.",
  },
  leaksLabel: "Common leaks",
  buildsLabel: "What we build",
  disclaimer:
    "These are common patterns we look for. Your Blueprint identifies what actually applies to your business, with your own numbers.",
  notListed: {
    heading: "Don't see your industry?",
    body: "If your business has repetitive work, manual records, or teams spread across locations, the same approach applies. Tell us how you work.",
  },
};

/* ══════════════════════════════════════════════════════════
   BLUEPRINT
══════════════════════════════════════════════════════════ */

export const blueprint = {
  hero: {
    eyebrow: "The Sharpframe Blueprint",
    headline: { before: "Know exactly where your business leaks money, ", marked: "in 3 weeks" },
    sub: "We map how your operations really run, put a number on every leak, and hand you a costed roadmap to fix it with systems and AI.",
    stats: ["3 Weeks", "7 Deliverables", "5x Value Guarantee", "100% Fee Credit"],
  },

  forYou: {
    heading: "The Blueprint is for you if…",
    items: [
      "Your team spends hours a day on WhatsApp, calls, and spreadsheets",
      "Money is slipping through, but you can't say exactly where",
      "You want AI but don't know where it would pay off",
      "You're growing, and the current way of working won't scale",
      "You've been burned by a software project before",
      "You want decisions based on numbers, not sales pitches",
    ],
  },

  timeline: {
    heading: "The 3 weeks",
    weeks: [
      {
        week: "Week 1",
        focus: "Understand",
        body: "Kick-off with leadership. Interviews with the people who do the work. Review of tools, records, and data.",
      },
      {
        week: "Week 2",
        focus: "Quantify",
        body: "Map every key workflow. Find where time and money leak. Estimate each leak's annual value from your own data.",
      },
      {
        week: "Week 3",
        focus: "Recommend",
        body: "Build the prioritized roadmap and build plan. Present findings to your leadership team.",
      },
    ],
  },

  deliverables: {
    heading: "What you get",
    items: [
      {
        icon: "Map",
        title: "Operations map",
        body: "How work really flows across people, tools, and handoffs.",
      },
      {
        icon: "Droplets",
        title: "Leak report",
        body: "Every major source of lost time and money, with its annual value.",
      },
      {
        icon: "ListChecks",
        title: "Prioritized roadmap",
        body: "Quick wins for 30 days, priorities for 90 days, and a 12-month view.",
      },
      {
        icon: "Gauge",
        title: "AI readiness score",
        body: "Where AI can help now, and what needs to be fixed first.",
      },
      {
        icon: "Ruler",
        title: "Build scope and estimate",
        body: "What to build, how long it takes, and what it costs.",
      },
      {
        icon: "Presentation",
        title: "Leadership presentation",
        body: "A 60-minute walkthrough with your team.",
      },
      {
        icon: "LifeBuoy",
        title: "30 days of support",
        body: "Answers while you decide on next steps.",
      },
    ],
  },

  sampleReport: {
    heading: "What a leak report looks like",
    badge: "Illustrative example",
    /** Illustrative only — `weight` drives the bar length, nothing more. */
    rows: [
      { label: "Manual admin hours", weight: 100 },
      { label: "Unbilled charges", weight: 72 },
      { label: "Idle assets", weight: 58 },
      { label: "Late payments", weight: 41 },
      { label: "Errors and rework", weight: 27 },
    ],
    totalLabel: "Total identified opportunity",
    totalValue: "Your own numbers, shown with every calculation",
  },

  guarantee: {
    number: "5x",
    heading: "The 5x Value Guarantee",
    body: "If the Blueprint doesn't identify opportunities worth at least five times its fee every year, you don't pay the second half. You pay 50% to start, and the rest only when you've seen the findings.",
    smallPrint:
      "Estimates use your own data, with every calculation shown. Requires access to the people and records needed for the review.",
  },

  buildCredit: {
    heading: "Your Blueprint fee counts toward the build",
    body: "Build with Sharpframe within 60 days, and 100% of the Blueprint fee is credited toward your project. You never pay twice.",
  },

  faqs: [
    {
      q: "How much of my team's time does it take?",
      a: "About 4–6 hours across the team in week 1, plus a 60-minute presentation at the end.",
    },
    {
      q: "Do you need access to our systems?",
      a: "We need relevant records like bookings, invoices, and operational data. Everything is covered by a confidentiality agreement.",
    },
    {
      q: "Can it be done remotely?",
      a: "Yes. Most Blueprints run over video calls and shared files, with on-site visits when useful.",
    },
    {
      q: "What if we already use software?",
      a: "Great. We often find ways to get far more from what you already have before building anything new.",
    },
    {
      q: "Do we have to build with you afterwards?",
      a: "No. The roadmap is yours to keep. If you do build with us, the fee is credited.",
    },
    {
      q: "What does it cost?",
      a: "It depends on the size of your operations. You'll get a fixed price after a 20-minute call.",
    },
  ],

  finalCta: {
    heading: "Start with a 20-minute conversation",
    body: "Tell us how your business runs today. We'll tell you honestly whether a Blueprint makes sense.",
  },
};

/* ══════════════════════════════════════════════════════════
   CASE STUDIES
══════════════════════════════════════════════════════════ */

export interface CaseCard {
  slug: string;
  label: string;
  /** Replace with the strongest real, confirmed number when available. */
  headline: string;
  line: string;
  href: string;
}

export const caseStudiesIndex = {
  eyebrow: "Case studies",
  heading: "Real operations, really transformed",
  cards: [
    {
      slug: "rental-operations",
      label: "Vehicle rental · Web + mobile",
      headline: "From paper and WhatsApp to one operations system",
      line: "Every rental, damage record, and outstanding balance, tracked in one place.",
      href: "/case-studies/rental-operations",
    },
  ] as CaseCard[],
  /** Remove once there are three real cases. */
  ctaCard: {
    heading: "Your operation could be next.",
    line: "Book a 20-minute call and we'll show you where to start.",
  },
};

export const rentalCase = {
  label: "Vehicle rental · Web + mobile",
  /** [Replace with the strongest confirmed number, e.g. "[X] hours of admin saved every week"] */
  headline: "From paper and WhatsApp to one operations system",
  sub: "How a [city]-based rental business brought every rental, damage record, and outstanding balance into one place.",
  facts: [
    { label: "Industry", value: "Vehicle rental" },
    { label: "Fleet", value: "[X vehicles]" },
    { label: "Services", value: "Discovery + Custom Systems" },
    { label: "Delivered", value: "Web app + mobile app" },
  ],
  /** Offer-neutral facts until real, client-confirmed numbers land. */
  stats: [
    { value: "100%", label: "of rentals tracked digitally" },
    { value: "Photo", label: "evidence logged against every damage record" },
    { value: "Real time", label: "visibility of outstanding balances" },
  ],
  before: {
    heading: "Before",
    body: "[Client] managed [X] vehicles using paper records, WhatsApp, and phone calls. Rental details lived in chats and notebooks, damage disputes had no clear evidence, outstanding balances were easy to miss, and hours went into manual work every day.",
  },
  did: {
    heading: "What we did",
    steps: [
      "Mapped the full rental process, from first enquiry to return and final payment",
      "Designed the system around how staff actually work, in the office and on the move",
      "Built a web app for the office and a mobile app for the team",
      "Supported the team through the switch from paper",
    ],
  },
  built: {
    heading: "What we built",
    features: [
      { title: "Rental tracking", body: "Every booking, handover, and return in one place." },
      { title: "Damage records", body: "Condition logged at handover and return, with photo evidence." },
      { title: "Outstanding balances", body: "A clear view of who owes what, and since when." },
      { title: "Vehicle information", body: "Fleet details, status, and history." },
      { title: "Mobile access", body: "Staff update records on the go." },
    ],
    screenshotNote:
      "[Anonymized screenshot — blur customer names and phone numbers]",
  },
  after: {
    heading: "After",
    body: "[Two or three sentences on what changed, with real numbers.]",
    testimonial: null as Testimonial | null,
  },
  next: {
    heading: "What's next",
    body: "With operations now on structured data, the business is ready for AI: automated payment reminders, photo-based damage detection, and utilization insights.",
  },
  finalCta: {
    heading: "Running operations on chats and spreadsheets?",
    body: "Let's find where your business is losing time and money.",
  },
};

/* ══════════════════════════════════════════════════════════
   ABOUT
══════════════════════════════════════════════════════════ */

export const about = {
  hero: {
    eyebrow: "About",
    headline: { before: "Systems first. ", marked: "Then AI." },
    sub: "Sharpframe exists to help growing businesses scale without drowning in manual work.",
  },
  story: {
    heading: "Why we started Sharpframe",
    paragraphs: [
      "Every business owner we meet wants to use AI. But look closer, and their operations still run on WhatsApp, phone calls, paper, and spreadsheets. AI can't help a business whose data lives in chat threads.",
      "So we built Sharpframe to do it properly: understand how a business really runs, build the systems that are missing, then add AI where the numbers say it pays off. Less flashy than promising an “AI revolution,” but it's what actually works.",
    ],
  },
  founder: {
    name: site.founder,
    title: "Founder",
    bio: `${site.founder} holds a B.Tech in Artificial Intelligence and Data Science and has spent [X] years building web and mobile products for businesses, from custom operations systems to apps used daily by field teams. He founded Sharpframe to bring a practical, numbers-first approach to AI for growing businesses.`,
    link: { label: "Connect on LinkedIn", href: site.linkedin },
  },
  principles: {
    heading: "What we believe",
    items: [
      {
        icon: "Search",
        title: "Understand before building",
        body: "We map how work really happens before recommending any technology.",
      },
      {
        icon: "Calculator",
        title: "Numbers over hype",
        body: "Every recommendation comes with an estimate of what it's worth.",
      },
      {
        icon: "Puzzle",
        title: "Fit the business",
        body: "Systems should match how your team works, not force them into a generic tool.",
      },
      {
        icon: "MessageSquare",
        title: "Honest advice",
        body: "If something isn't worth building, we'll say so, even if it means less work for us.",
      },
    ],
  },
  team: {
    heading: "A focused team, start to finish",
    body: "Sharpframe pairs consulting with a hands-on team of engineers experienced in web, mobile, data, and AI. You work directly with the founder from the first call through delivery.",
  },
  where: {
    heading: "Where we work",
    body: "Based in Bengaluru, India. Working with clients across India, the Middle East, and worldwide, remotely and on-site when it matters.",
  },
  finalCta: { heading: "Let's talk about your operations", body: "" },
};

/* ══════════════════════════════════════════════════════════
   BOOK + THANK YOU
══════════════════════════════════════════════════════════ */

export const book = {
  eyebrow: "Free 20-minute ops call",
  headline: "Let's find your biggest leak",
  intro:
    "A short, practical conversation about how your business runs today. No sales pitch.",
  cover: {
    heading: "What we'll cover",
    items: [
      "How work flows today, from first enquiry to final payment",
      "Where time and money are most likely leaking",
      "Whether a Blueprint makes sense, and an honest “no” if it doesn't",
    ],
  },
  goodToKnow: {
    heading: "Good to know",
    items: [
      "Free, with no obligation",
      "You talk directly with the founder",
      "We review your business before the call",
    ],
  },
  emailFallback: "Prefer email?",
};

export const thankYou = {
  headline: "You're booked. Talk soon.",
  body: "Your confirmation and meeting link are on their way. Before we talk, we'll look at your business so we can use the 20 minutes well.",
  prepHeading: "To get the most from the call, think about:",
  prep: [
    "The one process that frustrates you most",
    "Roughly how many people and hours it involves",
    "Where you want the business to be in a year",
  ],
  links: [
    { label: "Read the rental case study", href: "/case-studies/rental-operations" },
    { label: "See how the Blueprint works", href: "/blueprint" },
  ],
};

/* ══════════════════════════════════════════════════════════
   404 + LEGAL
══════════════════════════════════════════════════════════ */

export const notFoundCopy = {
  headline: "This page doesn't exist.",
  body: "Unlike the leaks in your operations, this one's easy to fix.",
};

export const legalUpdated = "[date]";

export const privacy = {
  heading: "Privacy Policy",
  intro:
    "This policy explains what we collect through this website, why, and how to have it removed. It is written in plain language on purpose.",
  sections: [
    {
      title: "What we collect",
      body: "The details you enter in the booking form: your name, work email, company name and website, role, industry, team size, your description of your biggest operational headache, and optionally a phone or WhatsApp number. We also collect basic analytics — which pages were visited, device type, and approximate location.",
    },
    {
      title: "Why we collect it",
      body: "To schedule and prepare for calls with you, and to understand which parts of this website are useful so we can improve them.",
    },
    {
      title: "Who processes it",
      body: "[Cal.com] handles scheduling. [Vercel Analytics] handles website analytics. [email provider] handles email. Each processes data on our behalf under their own terms.",
    },
    {
      title: "What we never do",
      body: "We do not sell personal data, and we do not use it for advertising.",
    },
    {
      title: "Access and deletion",
      body: "To ask what we hold about you, or to have it deleted, email [hello@yourdomain]. We will respond within 30 days.",
    },
  ],
  reviewNote:
    "[Have this reviewed by a lawyer before launch, especially if you target clients in the EU or UK.]",
};

export const terms = {
  heading: "Terms",
  sections: [
    {
      title: "General information only",
      body: "The content on this website is provided for general information. It is not professional, legal, financial, or technical advice, and should not be relied on as such.",
    },
    {
      title: "Ownership",
      body: "The content, design, and materials on this website belong to Sharpframe unless stated otherwise.",
    },
    {
      title: "Client work",
      body: "Any work Sharpframe carries out for a client is governed by a separate signed agreement between the parties. Nothing on this website forms part of that agreement or constitutes an offer.",
    },
    {
      title: "Contact",
      body: "Questions about these terms can be sent to [hello@yourdomain].",
    },
  ],
};

/* ══════════════════════════════════════════════════════════
   SEO
══════════════════════════════════════════════════════════ */

export const seo = {
  home: {
    title: "Sharpframe – AI Transformation that Pays for Itself",
    description:
      "We find where your business loses time and money, then build the systems and AI to fix it. 3-week Blueprint with a 5x value guarantee.",
  },
  services: {
    title: "Services – Blueprint, Systems, AI Automation",
    description:
      "From a 3-week operations audit to custom systems, AI automation, and ongoing growth partnership.",
  },
  industries: {
    title: "Industries We Serve",
    description:
      "How rental, logistics, healthcare, real estate, manufacturing, and other businesses use systems and AI to stop operational leaks.",
  },
  blueprint: {
    title: "Ops & AI Blueprint – Find Your Leaks in 3 Weeks",
    description:
      "Map your operations, quantify every leak, and get a costed roadmap in 3 weeks, backed by a 5x value guarantee.",
  },
  caseStudies: {
    title: "Case Studies",
    description:
      "Real businesses moving from manual operations to systems that scale.",
  },
  rentalCase: {
    title: "Rental Operations Case Study",
    description:
      "How a rental business moved from paper and WhatsApp to one web and mobile operations system.",
  },
  about: {
    title: "About Sharpframe – Systems First, Then AI",
    description: "Why we start with operations before AI, and who's behind Sharpframe.",
  },
  book: {
    title: "Book a 20-Minute Ops Call",
    description:
      "A free, practical conversation about where your business is losing time and money.",
  },
};
