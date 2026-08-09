/* ============================================================
   SENDSerene, site content
   Centralised so copy is editable in one place.
   Voice: direct, human, parent-to-parent. No jargon-soup.
   ============================================================ */

export const site = {
  name: "SENDSerene",
  wordmark: "SENDSerene",
  tagline: "A calmer way through your child's SEND case.",
  client: "Zifankrah Ltd",
  developer: "KoomBei Digital Limited, Accra",
  projectRef: "KB-2026-007",
  domain: "sendserene.co.uk",
};

/**
 * `label` is the English source string. `key` points at the entry in
 * lib/i18n.ts so the header can render the label in the chosen language.
 */
export const nav = [
  { label: "The problem", href: "/#problem", key: "nav.problem" },
  { label: "Compare", href: "/#comparison", key: "nav.compare" },
  { label: "Voice log", href: "/voice-log", key: "nav.voiceLog" },
  { label: "Decoder", href: "/decoder", key: "nav.decoder" },
  { label: "Evidence", href: "/evidence", key: "nav.evidence" },
  { label: "Glossary", href: "/glossary", key: "nav.glossary" },
  { label: "Pricing", href: "/pricing", key: "nav.pricing" },
  { label: "FAQ", href: "/faq", key: "nav.faq" },
] as const;

export const languages = [
  { code: "en", label: "English", native: "English", sample: "Your child's SEND case, one calm place." },
  { code: "so", label: "Somali", native: "Soomaali", sample: "Xaalka SEND ee ilmahaaga, meel deggan." },
  { code: "ur", label: "Urdu", native: "اردو", sample: "آپ کے بچے کا SEND کیس، ایک پرسکون جگہ۔" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ", sample: "ਤੁਹਾਡੇ ਬੱਚੇ ਦਾ SEND ਕੇਸ, ਇੱਕ ਸ਼ਾਂਤ ਥਾਂ।" },
  { code: "bn", label: "Bengali", native: "বাংলা", sample: "আপনার সন্তানের SEND মামলা, একটি শান্ত জায়গা।" },
  { code: "pl", label: "Polish", native: "Polski", sample: "Sprawa SEND Twojego dziecka, jedno spokojne miejsce." },
  { code: "ar", label: "Arabic", native: "العربية", sample: "قضية SEND لطفلك، مكان هادئ واحد." },
  { code: "fr", label: "French", native: "Français", sample: "Le dossier SEND de votre enfant, un endroit calme." },
  { code: "pt", label: "Portuguese", native: "Português", sample: "O caso SEND do seu filho, um lugar calmo." },
  { code: "tr", label: "Turkish", native: "Türkçe", sample: "Çocuğunuzun SEND davası, tek bir sakin yer." },
  { code: "ro", label: "Romanian", native: "Română", sample: "Cazul SEND al copilului dumneavoastră, un singur loc liniștit." },
  { code: "zh", label: "Chinese", native: "中文", sample: "您孩子的 SEND 案例，一个平静的地方." },
  { code: "es", label: "Spanish", native: "Español", sample: "El caso SEND de su hijo, un lugar tranquilo." },
  { code: "fa", label: "Persian", native: "فارسی", sample: "پرونده SEND فرزندتان، یک مکان آرام." },
  { code: "tg", label: "Tagalog", native: "Tagalog", sample: "Ang kaso ng SEND ng iyong anak, isang tahimik na lugar." },
  { code: "vi", label: "Vietnamese", native: "Tiếng Việt", sample: "Hồ sơ SEND của con bạn, một nơi bình yên." },
];

export const hero = {
  eyebrow: "For UK parents navigating SEND",
  titleLines: ["Your child's", "SEND case,", "one calm place."],
  lede:
    "Record what's happening, in your own words and your own language. Understand the letters the council sends you. And when a review or tribunal comes, hand over a clear, dated evidence pack instead of a shoebox of paper.",
  primaryCta: "Start a free account",
  secondaryCta: "See an evidence pack",
  trust: [
    "Sixteen languages, including Somali, Urdu, Punjabi, Bengali, Polish, Arabic, French and more",
    "UK data residency. Stored in the London region, not shipped overseas.",
    "Built with Zifankrah Ltd, a SEND-parent-led organisation.",
  ],
};

export const stats = [
  {
    figure: "638,700",
    suffix: "",
    label: "children in England had an EHC plan",
    sub: "January 2025, Department for Education.",
    source: "DfE SEN statistics",
  },
  {
    figure: "99%",
    suffix: "",
    label: "of SEN appeals decided by tribunal were in favour of the family",
    sub: "2024/25, First-tier Tribunal (SEND).",
    source: "Ministry of Justice",
  },
  {
    figure: "20",
    suffix: " weeks",
    label: "the statutory limit from assessment request to a final EHC plan",
    sub: "Children and Families Act 2014, s.36.",
    source: "UK legislation",
  },
];

export const problem = {
  eyebrow: "The system wasn't written for you",
  title: "You're already doing the work. The system just doesn't notice.",
  body: [
    "UK SEND runs on paper. Notebooks in the kitchen drawer. Emails you meant to save. School reports that say one thing in a meeting and another in writing. A council letter arrives, and you don't know what it means, what your rights are, or what you need to do by when.",
    "Then a review is called, or an appeal, and you're asked to prove what's been happening to your child. With nothing organised, you start from scratch. Most parents give up at this point. They shouldn't have to.",
    "SENDSerene gives you one place to put it all, as it happens, in the language you think in. It does not give legal advice. It does not diagnose your child. It makes sure that when the moment comes, your evidence is already there, dated, and in order.",
  ],
  pullquote: {
    text: "Organised, timestamped, clearly presented evidence is the single most consequential thing a family can bring to a review, appeal, or tribunal.",
    cite: "SENDSerene project brief, KB-2026-007",
  },
};

export const pillars = [
  {
    num: "01",
    title: "Capture",
    body: "Speak into your phone for up to five minutes. SENDSerene transcribes it, lets you fix the wording, and files it under the right statutory category. No typing at midnight. No notebook left on the bus.",
    points: [
      "Voice log in any of sixteen languages",
      "Auto-tagged to the four SEND categories",
      "Pin the entries that matter most",
    ],
    accent: "teal" as const,
  },
  {
    num: "02",
    title: "Understand",
    body: "Upload a council letter or paste the text from an email. SENDSerene reads it back to you in plain English, flags the jargon, pulls out the deadlines, and tells you when the wording is vague enough to be unenforceable.",
    points: [
      "OCR on PDFs, photos and scans",
      "Plain-English decode with cited sources",
      "Deadline calculator from one trigger date",
    ],
    accent: "clay" as const,
  },
  {
    num: "03",
    title: "Prove",
    body: "When the meeting lands, generate an evidence pack. Filtered by date, category and concern. Each entry numbered, dated and attributed. A printable one-pager for when you've had ten minutes' notice and a bad night's sleep.",
    points: [
      "Server-side PDF, formatted and paginated",
      "Sequential entry numbers for citation",
      "A quick brief that fits on one page",
    ],
    accent: "sage" as const,
  },
];

export const voiceFeature = {
  eyebrow: "Voice logging",
  title: "Say it out loud while it's fresh. We'll do the rest.",
  body: "You don't have time to write a diary. But you do have five minutes in the car after pickup, or standing in the kitchen waiting for the kettle. Hit record. Tell it like it happened. SENDSerene turns that into a dated, categorised, searchable entry.",
  transcript: {
    date: "19 Jan 2026 · 16:20",
    category: "Communication & Interaction",
    flag: "concern" as const,
    original: "Pick-up today, his TA mentioned Jack went non-verbal for about ten minutes during maths after the fire alarm test. He wouldn't respond to his name until he'd had five minutes with his fidget toy.",
    followup: {
      q: "How often has this happened before, roughly?",
      a: "Twice this half-term that I know of, today and once in December.",
    },
    loggedBy: "Sarah Bennett",
  },
  features: [
    "Five-minute hard stop with a 30-second warning",
    "Editable transcript before it's filed",
    "Side-by-side original and English translation",
    "Low-confidence translations flagged for review",
    "AI follow-up questions, never blocking the save",
    "Urgent flag for safeguarding-level entries",
    "Source audio deleted within an hour of transcription",
    "Plain keyword search across every entry",
  ],
  note: "A one-time reminder the first time you record: if you're logging a conversation with someone, let them know.",
};

export const decoderFeature = {
  eyebrow: "Jargon decoder",
  title: "Council letters, decoded. Deadlines, surfaced.",
  body: "Most parents don't speak the language these letters are written in. SENDSerene does. Paste the text or upload the PDF, and you get a plain-English summary, a glossary of the jargon used, and any deadline pulled out with the exact passage it came from.",
  docCategories: [
    { name: "School Report", desc: "Termly reports, progress updates, teacher observations" },
    { name: "Medical or Diagnostic Letter", desc: "Paediatrician, CAMHS, psychology reports" },
    { name: "OT or Speech Therapy", desc: "Therapy assessments, session notes, recommendations" },
    { name: "IEP or APDR", desc: "Individual Education Plans, Assess-Plan-Do-Review cycles" },
    { name: "Official Local Authority Correspondence", desc: "EHC decisions, assessment letters, final plans" },
  ],
  fileFormats: ["PDF", "JPEG", "PNG"],
  samples: [
    {
      id: "ehc-decision",
      label: "EHC needs assessment decision",
      source:
        "The Local Authority has decided, pursuant to section 36(3) of the Children and Families Act 2014, to conduct an EHC needs assessment for Jack Bennett. This assessment, and the Local Authority's decision on whether to issue an EHC Plan, will be completed within a maximum of 20 weeks from the date of this letter, in line with the SEND Code of Practice.",
      decode: {
        summary:
          "The council has agreed to formally assess whether Jack needs an Education, Health and Care Plan (EHCP). This starts a legal 20-week clock: by law, they must either issue a final EHCP or explain in writing why they won't, by the deadline below.",
        jargon: [
          {
            term: "EHC needs assessment",
            meaning:
              "The formal process the council uses to decide whether a child needs an Education, Health and Care Plan. It is not the plan itself.",
          },
          {
            term: "Section 36(3), Children and Families Act 2014",
            meaning:
              "The specific law that gives the council the duty to assess when asked, if certain conditions are met. This is the legal basis for the decision.",
          },
          {
            term: "SEND Code of Practice",
            meaning:
              "The government guidance councils and schools must follow. It explains how the law should be applied day to day.",
          },
        ],
        deadlines: [
          {
            label: "Final EHC Plan (or decision not to issue) due by",
            date: "4 June 2026",
            note: "Calculated as 20 weeks from the date of this letter. A reminder is sent 14 days before.",
          },
        ],
        flags: [],
      },
    },
    {
      id: "vague-provision",
      label: "Vague provision wording",
      source:
        "Jack will have access to support as needed during unstructured times, and the school will make reasonable endeavours to provide a quiet space for him to use when he requires it.",
      decode: {
        summary:
          "This sounds supportive but commits the school to almost nothing. 'Access to support as needed' has no hours attached and no named person. 'Reasonable endeavours' means they'll try, not that they will. This kind of wording is very hard to enforce later.",
        jargon: [
          {
            term: "Access to support as needed",
            meaning:
              "No quantity, no frequency, no named support. Compare with 'six hours of 1:1 TA support per week', that is enforceable; this is not.",
          },
          {
            term: "Reasonable endeavours",
            meaning:
              "A legal hedge. It means the school will try, but cannot be held to a specific standard. Push for 'must' instead of 'will make reasonable endeavours to'.",
          },
        ],
        deadlines: [],
        flags: [
          {
            type: "vague",
            text: "Vague or unenforceable language detected. Consider asking for specific hours and a named person.",
          },
        ],
      },
    },
    {
      id: "annual-review",
      label: "Annual review invitation",
      source:
        "You are invited to attend Jack's annual review meeting on 14 March 2026 at 10:30am. Please bring any reports or evidence you wish the meeting to consider. Under the SEND Code of Practice, the review must be completed and the Local Authority notified of any changes within four weeks of the meeting.",
      decode: {
        summary:
          "A standard annual review invite. The meeting itself is one step; the council then has four weeks to record any changes to Jack's plan. Bring everything you want considered, the school is not obliged to chase you for it.",
        jargon: [
          {
            term: "Annual review",
            meaning:
              "A legally required yearly meeting to check the EHCP is still right. The plan can be amended, kept as is, or (rarely) ceased.",
          },
        ],
        deadlines: [
          {
            label: "Annual review meeting",
            date: "14 March 2026, 10:30",
            note: "Bring reports and evidence. Log a reminder.",
          },
          {
            label: "Council must notify changes by",
            date: "11 April 2026",
            note: "Four weeks after the meeting. Chase if silence.",
          },
        ],
        flags: [],
      },
    },
  ],
};

export const evidenceFeature = {
  eyebrow: "Evidence pack",
  title: "When the meeting lands, your case is already made.",
  body: "A year of voice logs and decoded letters, filtered to what matters for this review, compiled into a paginated PDF. Each entry numbered so you can cite it. Tags muted so the pack reads as organised record-keeping, not a complaint.",
  meta: {
    child: "Jack Bennett (age 8)",
    holder: "Sarah Bennett",
    generated: "8 August 2026, 09:14",
    range: "12 January 2026, 8 August 2026",
    filters: "All categories · All tags · Attribution shown",
    count: "5 voice log entries, 1 document excerpt",
  },
  entries: [
    {
      n: 1,
      date: "12 Jan 2026 · 07:55",
      category: "Sensory & Physical Needs",
      flag: "neutral" as const,
      text: "Jack wore his ear defenders to assembly this morning without being asked. He said the hall was 'too echoey' yesterday and it hurt.",
      loggedBy: "Sarah Bennett",
    },
    {
      n: 2,
      date: "19 Jan 2026 · 16:20",
      category: "Communication & Interaction",
      flag: "concern" as const,
      text: "Pick-up today, his TA mentioned Jack went non-verbal for about ten minutes during maths after the fire alarm test. He wouldn't respond to his name until he'd had five minutes with his fidget toy.",
      followup: {
        q: "How often has this happened before, roughly?",
        a: "Twice this half-term that I know of, today and once in December.",
      },
      loggedBy: "Sarah Bennett",
    },
    {
      n: 3,
      date: "2 Feb 2026 · 18:03",
      category: "Social, Emotional & Mental Health",
      flag: "positive" as const,
      text: "Really good day. Jack asked another boy to sit with him at lunch and stayed at the table the whole time. First time in weeks he's come home smiling about school.",
      loggedBy: "Sarah Bennett",
    },
    {
      n: 4,
      date: "14 Feb 2026 · 09:10",
      category: "Cognition & Learning",
      flag: "concern" as const,
      text: "Reading homework took over an hour again. He can sound out the words fine on his own but loses the thread of the sentence completely if there's any noise in the room, had to do it in the car with the engine off in the end.",
      loggedBy: "David Bennett (collaborator)",
    },
    {
      n: 5,
      date: "3 Mar 2026 · 07:40",
      category: "Sensory & Physical Needs",
      flag: "concern" as const,
      text: "School shoes rubbing again despite the new pair, he's wearing two pairs of socks to cope. Worth raising with the OT at Thursday's appointment.",
      followup: {
        q: "Has this been mentioned to the school or OT before?",
        a: "Not yet, first time I've written it down.",
      },
      loggedBy: "Sarah Bennett",
    },
  ],
  excerpt: {
    doc: "Local Authority letter, EHC needs assessment decision",
    uploaded: "16 January 2026 · tagged as Official Local Authority Correspondence",
    original:
      "The Local Authority has decided, pursuant to section 36(3) of the Children and Families Act 2014, to conduct an EHC needs assessment for Jack Bennett. This assessment, and the Local Authority's decision on whether to issue an EHC Plan, will be completed within a maximum of 20 weeks from the date of this letter, in line with the SEND Code of Practice.",
    decode:
      "The council has agreed to formally assess whether Jack needs an Education, Health and Care Plan (EHCP). This starts a legal 20-week clock: by law, they must either issue a final EHC Plan or explain their decision not to by the deadline below.",
    deadline: "4 June 2026",
    deadlineLabel: "Final EHC Plan (or decision not to issue) due by",
  },
  quickBrief: {
    openDeadlines: [
      { label: "Final EHC Plan due", value: "4 June 2026 (in 4 weeks)" },
      { label: "Annual review", value: "not yet scheduled" },
    ],
    byCategory: [
      { cat: "Communication & Interaction", count: "2 entries (2 concern)" },
      { cat: "Cognition & Learning", count: "1 entry (1 concern)" },
      { cat: "Social, Emotional & Mental Health", count: "1 entry (1 positive)" },
      { cat: "Sensory & Physical Needs", count: "2 entries (1 concern, 1 neutral)" },
    ],
    diagnosis: "Autism assessment, referred September 2025, outcome pending.",
  },
  pagination: {
    note: "Every page after the cover carries a running header: the child's name and the date range. Page numbers are sequential. A short index lists each entry by date and a one-line summary before the full transcripts begin, so a panel member can find what they need without reading the whole pack.",
  },
};

export const languagesFeature = {
  eyebrow: "Sixteen languages. One system.",
  title: "The system wasn't built for families who don't think in English. We are.",
  body: "Most SEND support is English-only. The letters, the forms, the helplines. SENDSerene works in sixteen languages, including English, Somali, Urdu, Punjabi, Bengali, Polish, Arabic, French, Portuguese, Turkish, Romanian, Chinese, Spanish, Persian, Tagalog and Vietnamese. The communities most underserved by English-only support, covered. Record in your language. Read the decode in your language. Export in English when you need to.",
};

export const expertHelp = {
  eyebrow: "Get expert help",
  title: "This is hard. You don't have to do it alone.",
  body: "SENDSerene organises and explains. It does not give legal advice. When a letter is difficult, or a decision feels wrong, these organisations give free, independent support to UK SEND families.",
  resources: [
    {
      name: "IPSEA",
      full: "Independent Provider of Special Education Advice",
      desc: "Free legally-based advice to families of children with SEND. Helpline, tribunal support, and training.",
      href: "https://ipsea.org.uk",
      tag: "Legal advice",
    },
    {
      name: "SENDIASS",
      full: "SEND Information, Advice and Support Service",
      desc: "Every local authority in England has one. Free, impartial support including help with letters, meetings and appeals.",
      href: "https://councilfordisabledchildren.org.uk/sendias",
      tag: "Local support",
    },
    {
      name: "Special Needs Jungle",
      full: "SEND parent information & news",
      desc: "News, explainers and a community of parents who have been through it. Useful for understanding what's normal and what isn't.",
      href: "https://specialneedsjungle.com",
      tag: "Community",
    },
    {
      name: "Council for Disabled Children",
      full: "CDC",
      desc: "National body shaping SEND policy and practice. Fact sheets, resources, and the umbrella for SENDIASS services.",
      href: "https://councilfordisabledchildren.org.uk",
      tag: "Resources",
    },
  ],
};

export const collaborators = {
  eyebrow: "Collaborators",
  title: "You shouldn't have to carry this alone, either.",
  body: "Invite a co-parent, advocate, or your child's SENCO with scoped, permission-controlled access. They can log voice entries, view documents, or generate evidence packs, without seeing your billing or account settings. Access expires when you say it does.",
  roles: [
    {
      name: "Co-parent",
      perms: ["View all records", "Log voice entries", "Download documents", "Generate evidence packs"],
      canExport: true,
      expiry: "No expiry (revoke anytime)",
      accent: "teal" as const,
    },
    {
      name: "Advocate / Solicitor",
      perms: ["View filtered records", "Generate evidence packs", "No billing access", "No settings access"],
      canExport: true,
      expiry: "Set per invitation",
      accent: "clay" as const,
    },
    {
      name: "SENCO / Teacher",
      perms: ["View shared entries only", "No voice logging", "No document download", "Read-only access"],
      canExport: false,
      expiry: "Term-based",
      accent: "sage" as const,
    },
  ],
  inviteFlow: [
    { step: "01", title: "Enter their email", body: "We send a tokenised single-use invitation. No password shared, no account created until they accept." },
    { step: "02", title: "Pick their role", body: "Choose what they can see and do. Every permission is explicit, nothing is on by default." },
    { step: "03", title: "Set an expiry (optional)", body: "Access ends on a date you choose, or when you revoke it. No standing access, ever." },
    { step: "04", title: "They're in", body: "Your collaborator logs in with MFA and sees only what you've shared. Every action is logged." },
  ],
  mockInvites: [
    { email: "david.bennett@email.co.uk", role: "Co-parent", status: "Active", joined: "14 Feb 2026" },
    { email: "sarah.advocate@sendlaw.co.uk", role: "Advocate", status: "Active", joined: "2 Mar 2026", expires: "4 Jun 2026" },
    { email: "mrs.thompson@stmarys.sch.uk", role: "SENCO", status: "Pending", joined: "-", expires: "End of term" },
  ],
};

export const dayInLife = {
  eyebrow: "A day with SENDSerene",
  title: "Not a project. A habit.",
  body: "Nobody has time for another app they have to maintain. SENDSerene works because it fits into the five minutes you already have, in the car, at the kitchen table, after the phone call you'd rather not have had.",
  moments: [
    {
      time: "07:55",
      ampm: "AM",
      title: "Assembly morning",
      action: "Jack put his ear defenders on without being asked. You tap the mic icon, speak for thirty seconds, and it's filed under Sensory & Physical before you've finished your tea.",
      tag: "Voice log",
      flag: "neutral" as const,
    },
    {
      time: "09:10",
      ampm: "AM",
      title: "School drop-off",
      action: "His TA mentions he went non-verbal after the fire alarm test yesterday. You log it in the car. SENDSerene asks if this has happened before. It has. You say so.",
      tag: "Voice log",
      flag: "concern" as const,
    },
    {
      time: "12:30",
      ampm: "PM",
      title: "Post arrives",
      action: "A letter from the council. You photograph it, upload it, and by the time you've made lunch the jargon decoder has pulled out the 20-week deadline and flagged the vague wording in section 3.",
      tag: "Document decode",
      flag: "neutral" as const,
    },
    {
      time: "16:20",
      ampm: "PM",
      title: "Pick-up",
      action: "Jack's had a good day. He asked a friend to sit with him at lunch. You log it, a positive entry, the kind that matters as much as the concerns when the review comes.",
      tag: "Voice log",
      flag: "positive" as const,
    },
    {
      time: "18:03",
      ampm: "PM",
      title: "Homework",
      action: "Reading took an hour again. You note it: he can sound out the words but loses the thread in noise. Tagged Cognition & Learning, flagged as concern, pinned for the annual review.",
      tag: "Voice log",
      flag: "concern" as const,
    },
    {
      time: "21:00",
      ampm: "PM",
      title: "After he's asleep",
      action: "You open the dashboard. Six entries this week, two flagged for the OT appointment on Thursday. The evidence pack for the annual review is building itself. You didn't spend an evening on paperwork.",
      tag: "Dashboard",
      flag: "neutral" as const,
    },
  ],
};

export const comparison = {
  eyebrow: "Better than a folder. Quieter than a spreadsheet.",
  title: "What you've been doing. What SENDSerene does instead.",
  body: "Most parents end up running their child's SEND case on a combination of kitchen-drawer paper, a phone full of photos, and a spreadsheet that hasn't been opened since March. It works, until it doesn't. Here's the difference.",
  rows: [
    {
      feature: "Recording what happens",
      folder: "Notebooks, voice memos, texts to yourself. Lost within a week.",
      sheet: "A spreadsheet you mean to update. You don't.",
      sendserene: "Five-minute voice log, auto-categorised, searchable forever.",
    },
    {
      feature: "Understanding council letters",
      folder: "Google the jargon at 11pm. Find contradictory answers.",
      sheet: "Paste it into a document. Still don't understand it.",
      sendserene: "Plain-English decode with cited sources and deadlines extracted.",
    },
    {
      feature: "Tracking statutory deadlines",
      folder: "A date written on a letter. The letter is in a drawer.",
      sheet: "A formula you're not sure is right.",
      sendserene: "One trigger date generates every legal deadline. Reminders sent.",
    },
    {
      feature: "Preparing for a review or appeal",
      folder: "Three days of sorting paper. The night before.",
      sheet: "Export to PDF. It's 200 rows of unfiltered data.",
      sendserene: "Filtered, paginated evidence pack. Sequential entry numbers for citation.",
    },
    {
      feature: "Sharing with a co-parent or advocate",
      folder: "Photocopy everything. Hand it over in a carrier bag.",
      sheet: "Share the spreadsheet. They see your budget tabs too.",
      sendserene: "Scoped, permission-controlled access. Expiry date. Every action logged.",
    },
    {
      feature: "Working in your first language",
      folder: "Find a friend to translate. Hope they got it right.",
      sheet: "Google Translate. It doesn't know SEND terminology.",
      sendserene: "Sixteen languages with a SEND glossary override layer.",
    },
    {
      feature: "When you're done with it",
      folder: "A box in the loft. You'll need it again in two years.",
      sheet: "A file you can't bring yourself to delete.",
      sendserene: "Export everything. Delete the account. Gone, properly.",
    },
  ],
};

export const adminPanel = {
  eyebrow: "Admin panel",
  title: "Real control, without a developer on call.",
  body: "Zifankrah Ltd owns this product. That means Irene can update quota limits, edit the glossary, and change disclaimer text herself, no ticket, no waiting, no bill. This is the internal screen she sees.",
  tabs: [
    {
      id: "quotas",
      label: "Quotas",
      title: "Tier limits",
      body: "Every numeric limit in the product is configurable. Free tier voice logs per month, premium decodes, collaborator seats, all of it.",
      rows: [
        { setting: "Free tier voice logs / month", value: "30", type: "number" },
        { setting: "Free tier jargon decodes / month", value: "3", type: "number" },
        { setting: "Free tier collaborators", value: "1", type: "number" },
        { setting: "Premium base children", value: "2", type: "number" },
        { setting: "Premium extra child / month (£)", value: "2.00", type: "currency" },
        { setting: "Premium yearly base (£)", value: "48.00", type: "currency" },
      ],
    },
    {
      id: "glossary",
      label: "Glossary",
      title: "SEND terminology glossary",
      body: "The glossary powers the jargon decoder across all sixteen languages. Irene adds, edits, and validates entries. Changes go live without a deploy.",
      entries: [
        { term: "EHC needs assessment", definition: "The formal process the council uses to decide whether a child needs an Education, Health and Care Plan. It is not the plan itself.", langs: "All 6" },
        { term: "Section 36(3), Children and Families Act 2014", definition: "The specific law that gives the council the duty to assess when asked, if certain conditions are met.", langs: "All 6" },
        { term: "SEND Code of Practice", definition: "The government guidance councils and schools must follow. Explains how the law should be applied day to day.", langs: "All 6" },
        { term: "Annual review", definition: "A legally required yearly meeting to check the EHCP is still right. The plan can be amended, kept, or (rarely) ceased.", langs: "All 6" },
      ],
    },
    {
      id: "disclaimer",
      label: "Disclaimers",
      title: "Legal & advisory wording",
      body: "Every disclaimer shown to users, on decode results, evidence exports, and the Get Expert Help panel, is editable here. Zifankrah owns the legal accuracy; KoomBei owns the plumbing.",
      blocks: [
        { location: "Jargon decoder result", text: "AI-generated · always verify against the source · not legal advice", editable: true },
        { location: "Evidence pack footer", text: "SENDSerene is an organisation and evidence tool. It does not provide legal, medical, or educational advice. It does not diagnose children.", editable: true },
        { location: "Get Expert Help panel", text: "SENDSerene organises and explains. It does not give legal advice. When a letter is difficult, or a decision feels wrong, these organisations give free, independent support.", editable: true },
        { location: "Dashboard header", text: "Patterns shown are based on your logged entries. They are observations, not clinical assessments.", editable: true },
      ],
    },
  ],
};

export const testimonials = {
  eyebrow: "From the people who'd use it",
  title: "Not testimonials. Scenarios.",
  body: "SENDSerene isn't live yet, so we can't quote real users. What we can do is describe the situations it was designed for, drawn from the experience of the families who shaped it.",
  items: [
    {
      scenario: "The parent who nearly missed the 20-week deadline",
      quote: "The council letter went into a drawer for six weeks. By the time I opened it, the clock had been running for a month. I didn't even know there was a clock.",
      detail: "A reminder 14 days before the deadline would have changed everything. Now the deadline is the first thing I see.",
      persona: "Parent of a 6-year-old, Greater Manchester",
      accent: "teal" as const,
    },
    {
      scenario: "The parent who didn't speak the language",
      quote: "Every letter was in English. I'd ask my neighbour to read it, but she's not a lawyer either. Half the time I'd sign things I didn't understand.",
      detail: "Now I read the decode in Urdu. The jargon is explained. I know what I'm agreeing to before I sign.",
      persona: "Parent of a 9-year-old, Birmingham",
      accent: "clay" as const,
    },
    {
      scenario: "The parent at tribunal",
      quote: "They asked for my evidence. I had a year of notes on my phone, three school reports, and two letters I'd never properly read. It took me four evenings to sort it. I lost the appeal.",
      detail: "If I'd been logging all along, the pack would have built itself. I wouldn't have spent those evenings crying at the kitchen table.",
      persona: "Parent of an 11-year-old, Leeds",
      accent: "sage" as const,
    },
  ],
};

export const onboarding = {
  eyebrow: "First login",
  title: "Three screens. Then you're in.",
  body: "Nobody reads a manual. The first time you log in, SENDSerene walks you through the three things that matter, how to record, how to decode, and how to export. Then it gets out of your way.",
  steps: [
    {
      num: "01",
      title: "Record your first entry",
      subtitle: "The voice log",
      body: "Tap the microphone. Speak for up to five minutes about what happened today. SENDSerene transcribes it, files it under the right category, and shows you the searchable record. You can edit the wording before it saves.",
      tip: "You don't have to get it right. You can fix the transcript, the category, and the tag afterwards.",
      cta: "Try a 30-second recording",
    },
    {
      num: "02",
      title: "Decode your first letter",
      subtitle: "The jargon decoder",
      body: "Paste the text of a council letter, or upload a photo of it. SENDSerene reads it back in plain English, flags the jargon, and pulls out any deadlines. You'll know what it means, what you need to do, and by when.",
      tip: "If you don't have a letter handy, try one of the three sample letters in the decoder.",
      cta: "Open the decoder",
    },
    {
      num: "03",
      title: "See your evidence build",
      subtitle: "The dashboard",
      body: "Every entry you log and every letter you decode feeds the dashboard. You'll see patterns by category, open deadlines, and how close you are to ready for a review or appeal. It builds itself, you just keep logging.",
      tip: "The evidence pack export lives here too. You won't need it for a while. It'll be ready when you do.",
      cta: "View the dashboard",
    },
  ],
  skip: "You can skip this and come back to it anytime from Settings.",
};

export const glossary = {
  eyebrow: "SEND glossary",
  title: "The words that keep parents out. Defined.",
  body: "This is a sample of the glossary that powers the jargon decoder. The full version covers hundreds of terms across all sixteen languages, validated by Zifankrah Ltd. Here are the ones parents see most often.",
  categories: ["All", "Legal", "Education", "Health", "Process"],
  terms: [
    {
      term: "EHCP",
      category: "Legal",
      full: "Education, Health and Care Plan",
      definition: "A legally binding document setting out a child's special educational needs and the support they must receive. Issued by the local authority after an EHC needs assessment.",
      related: "EHC needs assessment",
    },
    {
      term: "EHC needs assessment",
      category: "Process",
      full: "Education, Health and Care needs assessment",
      definition: "The formal process the council uses to decide whether a child needs an EHCP. It is not the plan itself. Must be completed within 20 weeks of the request.",
      related: "EHCP, 20-week deadline",
    },
    {
      term: "SEND",
      category: "Legal",
      full: "Special Educational Needs and Disabilities",
      definition: "The umbrella term for children who need extra support with learning, communication, physical, or social-emotional needs. Defined in the Children and Families Act 2014.",
      related: "Children and Families Act 2014",
    },
    {
      term: "SENCO",
      category: "Education",
      full: "Special Educational Needs Coordinator",
      definition: "The teacher in a school responsible for SEND provision. Every maintained school must have one. Your first port of call for in-school concerns.",
      related: "APDR, IEP",
    },
    {
      term: "APDR",
      category: "Education",
      full: "Assess, Plan, Do, Review",
      definition: "The graduated approach schools use to identify and meet SEND needs. A cycle, not a one-off. Should happen at least termly for children on SEN support.",
      related: "SEN support, SENCO",
    },
    {
      term: "IEP",
      category: "Education",
      full: "Individual Education Plan",
      definition: "A school-level document setting out a child's targets and the support they'll get. Not a legal document on its own, but useful evidence if provision isn't being delivered.",
      related: "APDR, SEN support",
    },
    {
      term: "Annual review",
      category: "Process",
      full: "Annual review of EHCP",
      definition: "A legally required yearly meeting to check the EHCP is still right. The plan can be amended, kept as is, or (rarely) ceased. Council must be notified of changes within 4 weeks.",
      related: "EHCP, Section I",
    },
    {
      term: "Tribunal",
      category: "Legal",
      full: "First-tier Tribunal (SEND)",
      definition: "The independent body that hears appeals against local authority SEND decisions. Free to use. Parents can represent themselves. 99% of decided appeals in 2024/25 were in favour of the family.",
      related: "Appeal, IPSEA",
    },
    {
      term: "Section I",
      category: "Legal",
      full: "Section I of the EHCP",
      definition: "The section of an EHCP that names the school or setting. This is the only section that can be appealed to tribunal on its own. 'No school' or 'type of school' disputes live here.",
      related: "EHCP, Tribunal",
    },
    {
      term: "OT",
      category: "Health",
      full: "Occupational Therapist",
      definition: "A health professional who assesses and supports fine motor skills, sensory processing, and daily living skills. Often involved in EHC needs assessments for sensory and physical needs.",
      related: "Sensory & Physical Needs",
    },
    {
      term: "SALT",
      category: "Health",
      full: "Speech and Language Therapy",
      definition: "Support for children with communication difficulties. Can be provided by school or health service. Provision should be specified in Section G of the EHCP if it's needed.",
      related: "Communication & Interaction, Section G",
    },
    {
      term: "DLA",
      category: "Legal",
      full: "Disability Living Allowance",
      definition: "A tax-free benefit for children under 16 with disabilities or long-term health conditions. Not means-tested. Evidence of care needs and mobility difficulties is required.",
      related: "PIP (over 16)",
    },
  ],
};

export const timescaleTable = {
  eyebrow: "Statutory timescales",
  title: "The legal clock. Every week, on the record.",
  body: "The SEND system runs on statutory deadlines. Most parents don't know they exist until one has passed. This is the full timescale table that powers SENDSerene's deadline calculator, validated by Zifankrah Ltd, sourced from the Children and Families Act 2014 and the SEND Code of Practice.",
  disclaimer: "Illustrative only. Always confirm against the specific letter you received. Some deadlines shift by a few days around school holidays. Not legal advice.",
  rows: [
    {
      week: 0,
      event: "Request for EHC needs assessment received",
      who: "Parent or school",
      duty: "The statutory clock starts on the date the local authority receives the request.",
      source: "CAFA 2014 s.36(3)",
    },
    {
      week: 6,
      event: "Decision whether to assess",
      who: "Local authority",
      duty: "The LA must decide whether to carry out an EHC needs assessment and notify the parent within 6 weeks.",
      source: "SEND Regs 2014 r.3",
    },
    {
      week: 12,
      event: "Assessment evidence gathered",
      who: "Local authority",
      duty: "Advice and information gathered during the assessment. By week 12, the LA should have all the evidence it needs from health, social care, and education.",
      source: "SEND Code of Practice 9.46",
    },
    {
      week: 14,
      event: "Draft EHC plan issued (if applicable)",
      who: "Local authority",
      duty: "If the LA decides to issue a plan, a draft must be sent to the parent for comment. The parent has at least 15 days to respond.",
      source: "SEND Regs 2014 r.38",
    },
    {
      week: 16,
      event: "Parent response on draft",
      who: "Parent",
      duty: "Parent responds to the draft: requests changes, states preference for school, provides any further evidence.",
      source: "SEND Regs 2014 r.38(3)",
    },
    {
      week: 20,
      event: "Final EHC plan issued (or decision not to issue)",
      who: "Local authority",
      duty: "The statutory maximum. The LA must issue the final EHC plan, or give written reasons for not doing so, by this date.",
      source: "CAFA 2014 s.44; SEND Regs 2014 r.45",
    },
  ],
  appealWindow: {
    title: "After the final plan: the appeal window",
    body: "Once a final plan is issued (or a decision not to issue is made), parents have 2 months from the date of the decision to appeal to the First-tier Tribunal (SEND). This deadline is strict.",
    period: "2 months",
    from: "the date of the LA's decision letter",
    source: "Tribunal Procedure (FTT) Rules 2008 r.32",
  },
};

export const emailIngestion = {
  eyebrow: "Coming in Phase 2",
  title: "Forward the letter. We'll do the rest.",
  body: "Right now you upload or paste. In Phase 2, every SENDSerene account gets a dedicated inbound email address. Forward a council letter the moment it arrives. SENDSerene OCRs it, decodes the jargon, extracts the deadlines, and files it in your vault, before you've finished reading it.",
  flow: [
    { step: "Forward", body: "Forward the council email to your sendserene.co.uk address. The subject line becomes the document title." },
    { step: "OCR", body: "AWS Textract extracts the text. PII is redacted before anything reaches the AI." },
    { step: "Decode", body: "The jargon decoder runs automatically. You get a plain-English summary and any deadlines." },
    { step: "File", body: "The original and the decode are stored in your document vault, tagged and dated." },
  ],
  note: "Phase 2 feature. Not in the current build. The upload and paste-text routes work today.",
};

export const ehcpViewer = {
  eyebrow: "Inside an EHCP",
  title: "Eleven sections. Here's what each one is for.",
  body: "An Education, Health and Care Plan isn't one document, it's eleven. Each section covers a different part of your child's needs or the support they should get. Knowing which section says what is the difference between accepting a plan and holding the council to it.",
  intro: "Click a section to see what it covers, who writes it, and what to check. The sections below follow the statutory format set out in the SEND Regulations 2014.",
  sections: [
    {
      letter: "A",
      title: "The child's views, interests and aspirations",
      who: "Parent and child",
      what: "What your child wants to achieve, their interests, and how they see their future. This is the only section written primarily by the family.",
      check: "Is it in your child's own words? Has the council paraphrased or toned it down? It should sound like them.",
    },
    {
      letter: "B",
      title: "Special educational needs",
      who: "Local authority (from advice)",
      what: "A detailed description of your child's special educational needs across all four statutory categories. This is the foundation, everything in Sections F and G must answer to what's written here.",
      check: "Does it cover all four SEND categories that apply? Are needs specific (not 'has some difficulties')? Each need should be quantified and evidenced.",
    },
    {
      letter: "C",
      title: "Health needs related to SEN",
      who: "Health professionals",
      what: "Health needs that are linked to your child's special educational needs. Written from advice provided by health professionals (paediatrician, OT, SALT, CAMHS).",
      check: "Does it capture every health need that affects learning? Diagnoses belong here if they impact education.",
    },
    {
      letter: "D",
      title: "Social care needs related to SEN",
      who: "Social care",
      what: "Social care needs linked to SEN, if any. Often shorter than B and C, but important if your family receives social care support.",
      check: "If you have a social worker, has their input been included? Don't let this section be skipped.",
    },
    {
      letter: "E",
      title: "Outcomes",
      who: "Local authority",
      what: "The outcomes the plan aims to achieve. Should be SMART: specific, measurable, achievable, realistic, time-bound. Each outcome should link to a need in B, C, or D.",
      check: "Are outcomes measurable? Do they have dates? 'Will make progress' is not an outcome. 'Will read at age-appropriate level by July 2027' is.",
    },
    {
      letter: "F",
      title: "Special educational provision",
      who: "Local authority",
      what: "The specific support your child must receive for each need in Section B. This is the most important section for enforcement. Every provision must be specific and quantified.",
      check: "Is every provision quantified (hours, frequency, named person)? 'Access to support as needed' is unenforceable. '1:1 TA support for 6 hours per week' is not.",
    },
    {
      letter: "G",
      title: "Health provision",
      who: "Health (via LA)",
      what: "Health interventions required, agreed by health professionals. Must be specific. If it's in this section, it must be delivered.",
      check: "Is SALT, OT, or CAMHS provision quantified? Who delivers it? How often? Vague wording here is common, push back.",
    },
    {
      letter: "H",
      title: "Social care provision",
      who: "Social care (via LA)",
      what: "Social care support related to SEN. Section H1 is for provision under the Chronically Sick and Disabled Persons Act; H2 is for other social care.",
      check: "If you receive social care support, is it accurately reflected? This section is often thin or missing.",
    },
    {
      letter: "I",
      title: "Placement",
      who: "Local authority / Parent",
      what: "The school or setting your child will attend. This is the only section you can appeal to tribunal on its own. Can name a specific school or a type of school.",
      check: "Is the right school named? If it says 'type of school' rather than a named school, you can push for a specific placement.",
    },
    {
      letter: "J",
      title: "Personal budget",
      who: "Parent / LA",
      what: "Details of any personal budget you've requested, including direct payments. Optional, only if you've asked for one.",
      check: "If you requested a personal budget, is the amount and arrangement clear? If you didn't, this section will be blank.",
    },
    {
      letter: "K",
      title: "Advice and information",
      who: "Local authority",
      what: "List of all the advice and reports gathered during the assessment, with who wrote them and when. You should be able to see every piece of evidence the council relied on.",
      check: "Is every report listed? Are the dates right? If advice was ignored, Sections B-H won't reflect it, and you have a right to know why.",
    },
  ],
};

export const provisionTracker = {
  eyebrow: "Coming in Phase 2",
  title: "When the plan says one thing and the school does another.",
  body: "An EHCP is only as good as what actually gets delivered. In Phase 2, SENDSerene will compare the provision written in Section F of your child's plan against what you log in your voice entries. When provision isn't being delivered, you'll see it, clearly, dated, and ready for the next review.",
  how: [
    {
      step: "01",
      title: "Import Section F",
      body: "Paste or upload Section F of your child's EHCP. SENDSerene extracts each provision as a separate, trackable item.",
    },
    {
      step: "02",
      title: "Log as normal",
      body: "Keep voice-logging what happens. SENDSerene matches new entries to the provision they relate to, using the categories and tags you already use.",
    },
    {
      step: "03",
      title: "See the gaps",
      body: "The dashboard shows each provision item with a status: delivered, partially delivered, not seen, or contradicted. Over time, patterns become undeniable.",
    },
    {
      step: "04",
      title: "Export the evidence",
      body: "Generate a provision gap report for an annual review or appeal. Every gap is backed by dated, attributed entries.",
    },
  ],
  mock: [
    { provision: "1:1 TA support, 6 hours/week", status: "delivered", entries: 14, note: "Consistently logged across the term" },
    { provision: "Quiet space available at break times", status: "partial", entries: 3, note: "Available 2 of 5 days last week" },
    { provision: "SALT, 30 min fortnightly", status: "missing", entries: 0, note: "No entries since September" },
    { provision: "Ear defenders for assembly", status: "delivered", entries: 8, note: "Jack uses them independently" },
    { provision: "Modified reading materials", status: "contradicted", entries: 2, note: "Standard materials sent home twice" },
  ],
  note: "Phase 2 feature. Not in the current build. The evidence pack export works today, provision tracking is the next layer.",
};

export const helpMeReply = {
  eyebrow: "Help me reply",
  title: "Stuck on what to write back? Start here.",
  body: "When a letter arrives and you don't know what to say, SENDSerene drafts a starting point. Tell it what the letter said and what you want to achieve. It writes a measured, factual reply you can edit and send. Not legal advice, a scaffold, so you're not staring at a blank screen at midnight.",
  presets: [
    {
      id: "request-assessment",
      label: "Request an EHC needs assessment",
      recipient: "The SEN Team, [Your Local Authority]",
      subject: "Request for EHC needs assessment, [Child's name]",
      body: "Dear SEN Team,\n\nI am writing to formally request an Education, Health and Care needs assessment for my [son/daughter], [Child's name], who is [age] years old and attends [School name].\n\n[Child's name] has [brief description of needs]. Despite [school's] efforts through SEN support over [period], [he/she] is not making adequate progress. I am concerned that [he/she] needs support that goes beyond what the school can provide from its own resources.\n\nI understand that under section 36(3) of the Children and Families Act 2014, the local authority must decide whether to carry out an assessment within six weeks of receiving this request.\n\nI have attached [list any evidence: school reports, professional letters, your own observations]. I am happy to provide any further information you need.\n\nI look forward to hearing from you within the statutory timescale.\n\nYours sincerely,\n[Your name]",
      note: "This is a draft. Edit it before sending. The 6-week clock starts when the LA receives this, keep proof of delivery.",
    },
    {
      id: "chase-deadline",
      label: "Chase a missed deadline",
      recipient: "The SEN Team, [Your Local Authority]",
      subject: "EHC needs assessment, statutory deadline passed",
      body: "Dear SEN Team,\n\nI wrote to you on [date] requesting an EHC needs assessment for [Child's name]. I have not yet received a decision.\n\nUnder the SEND Regulations 2014 (regulation 3), the local authority must decide whether to carry out an assessment within six weeks of receiving a request. That deadline passed on [date].\n\nI would be grateful if you could confirm:\n1. The date my request was received\n2. The current status of the decision\n3. When I can expect to hear from you\n\nIf I do not receive a response within [10 working days / a reasonable period], I will consider contacting the Local Government and Social Care Ombudsman and/or appealing to the First-tier Tribunal (SEND) on the grounds of delay.\n\nYours sincerely,\n[Your name]",
      note: "Send by email and keep the receipt. If the LA still doesn't respond, the Ombudsman route is free and effective.",
    },
    {
      id: "annual-review-prep",
      label: "Prepare for an annual review",
      recipient: "[SENCO / Review Coordinator]",
      subject: "Annual review, evidence and questions in advance",
      body: "Dear [Name],\n\nThank you for the invitation to [Child's name]'s annual review on [date]. I would like to share some points in advance so they can be considered at the meeting.\n\nSince the last review:\n- [Observation 1, e.g. progress or regression in a specific area]\n- [Observation 2]\n- [Observation 3]\n\nI would like the meeting to consider:\n- [Question or concern 1]\n- [Question or concern 2]\n\nI am bringing [list any reports or evidence]. Please let me know if there is anything else you need from me beforehand.\n\nI look forward to the meeting.\n\nYours sincerely,\n[Your name]",
      note: "Sending points in writing before the meeting means they're on the record even if the meeting runs short.",
    },
  ],
  disclaimer: "Drafts are starting points, not legal advice. Always review and edit before sending. For advice on your specific situation, contact IPSEA or SENDIASS.",
};

export const nonResponse = {
  eyebrow: "Silence is evidence too",
  title: "When they don't reply. SENDSerene notices.",
  body: "One of the hardest things about the SEND system is being ignored. You send a letter, you wait, nothing comes back. Was it lost? Is it being considered? Did they forget? SENDSerene tracks expected reply dates and turns silence into a logged evidence entry, dated, attributed, and ready for the next review or appeal.",
  how: [
    {
      step: "Set an expected reply date",
      body: "When you send a letter or email, log the expected reply date in SENDSerene. The statutory timescale table helps you pick the right one.",
    },
    {
      step: "We watch the clock",
      body: "SENDSerene counts down. Three days before the expected reply, you get a gentle reminder. On the day, a check-in. Seven days after, silence becomes an entry.",
    },
    {
      step: "Silence becomes evidence",
      body: "If no reply arrives, SENDSerene creates a 'non-response' entry in your record, tagged, dated, and attributed to the responsible party. It appears in your evidence pack.",
    },
    {
      step: "Chase or escalate",
      body: "One tap generates a chase draft (see Help Me Reply). If silence continues, the non-response entries stack up, and a pattern of non-engagement is exactly the kind of evidence tribunals notice.",
    },
  ],
  mock: [
    {
      date: "12 Feb 2026",
      sent: "Requested annual review date confirmation",
      recipient: "SEN Team",
      expected: "26 Feb 2026",
      status: "overdue",
      daysOverdue: 12,
    },
    {
      date: "3 Mar 2026",
      sent: "Asked school for SALT provision update",
      recipient: "SENCO",
      expected: "17 Mar 2026",
      status: "overdue",
      daysOverdue: 4,
    },
    {
      date: "14 Mar 2026",
      sent: "Chased EHC assessment decision",
      recipient: "SEN Team",
      expected: "28 Mar 2026",
      status: "pending",
      daysOverdue: 0,
    },
  ],
  note: "Non-response tracking is part of the evidence system, not a separate feature. It works alongside voice logs and document decodes.",
};

export const vagueDetector = {
  eyebrow: "Vague language detector",
  title: "When the wording won't hold up. SENDSerene says so.",
  body: "Council letters and EHCPs are full of phrases that sound supportive but commit to nothing. 'Access to support as needed.' 'Reasonable endeavours.' 'Where appropriate.' These are unenforceable. SENDSerene flags them and tells you what to push for instead.",
  samples: [
    {
      vague: "Jack will have access to support as needed during unstructured times.",
      enforceable: "Jack will receive 1:1 TA support for 30 minutes during every lunch and break period, delivered by a named TA.",
      why: "'Access to support as needed' has no quantity, no frequency, and no named person. It cannot be enforced because there's nothing to measure. Push for specific hours, a named staff member, and a defined context.",
      severity: "high",
    },
    {
      vague: "The school will make reasonable endeavours to provide a quiet space.",
      enforceable: "The school will provide a designated quiet space (Room 4) available to Jack at any point during the school day, accessible within 5 minutes of his request.",
      why: "'Reasonable endeavours' is a legal hedge. It means the school will try, but cannot be held to a standard. Replace with 'must' or 'will', and name the space and the access conditions.",
      severity: "high",
    },
    {
      vague: "Jack's progress will be monitored regularly.",
      enforceable: "Jack's progress in reading and writing will be assessed termly using the school's standardised assessment, results shared with parents within 2 weeks of assessment.",
      why: "'Regularly' has no defined interval and no defined measure. Termly assessment with a shared result is measurable and accountable.",
      severity: "medium",
    },
    {
      vague: "Appropriate adjustments will be made where appropriate.",
      enforceable: "Specific adjustments to be listed in Section F, each with a named context and frequency.",
      why: "This sentence says nothing twice. 'Appropriate' and 'where appropriate' cancel each other out. If an adjustment is needed, it should be named, specific, and quantified, not left to the school's discretion.",
      severity: "high",
    },
    {
      vague: "Jack may access sensory breaks as required.",
      enforceable: "Jack will have two 10-minute sensory breaks per day, mid-morning and mid-afternoon, in the sensory room, supervised by his named TA.",
      why: "'May access' is permission, not provision. 'As required' leaves the decision to someone else. Change to 'will have', with a defined frequency and location.",
      severity: "medium",
    },
  ],
};

export const ehcpMap = {
  eyebrow: "How the sections connect",
  title: "Every need should have provision. If it doesn't, it's a gap.",
  body: "An EHCP only works if the sections line up. A need in Section B should have matching provision in Section F. A health need in Section C should have health provision in Section G. SENDSerene checks these connections, so when a need has no provision, you see it immediately.",
  connections: [
    {
      from: "B",
      fromTitle: "Special educational needs",
      to: "F",
      toTitle: "Special educational provision",
      principle: "Every need in B must have specific, quantified provision in F. No provision, no enforcement.",
      color: "teal" as const,
    },
    {
      from: "C",
      fromTitle: "Health needs",
      to: "G",
      toTitle: "Health provision",
      principle: "Every health need in C should have matching health provision in G, delivered by a named health professional.",
      color: "clay" as const,
    },
    {
      from: "D",
      fromTitle: "Social care needs",
      to: "H",
      toTitle: "Social care provision",
      principle: "Every social care need in D should have provision in H. Often the thinnest section, don't let it be skipped.",
      color: "sage" as const,
    },
    {
      from: "B, C, D",
      fromTitle: "All needs",
      to: "E",
      toTitle: "Outcomes",
      principle: "Each outcome in E should link back to a need. An outcome without a need is aspirational; a need without an outcome is unaddressed.",
      color: "teal" as const,
    },
    {
      from: "F",
      fromTitle: "Provision",
      to: "I",
      toTitle: "Placement",
      principle: "The provision in F must be deliverable at the placement named in I. If the school can't deliver it, the placement is wrong.",
      color: "clay" as const,
    },
    {
      from: "K",
      fromTitle: "Advice list",
      to: "B-H",
      toTitle: "All content",
      principle: "Every piece of advice in K should inform something in B-H. If advice was ignored, the plan doesn't reflect it, and you have a right to know why.",
      color: "sage" as const,
    },
  ],
};

export const dataFlow = {
  eyebrow: "Where your data goes",
  title: "A letter in. Plain English out. Here's every step in between.",
  body: "When you upload a council letter, it passes through five stages before you see the decode. Each one is designed to protect your child's data. Nothing leaves the UK. The AI never sees identifying detail. Here's the full journey.",
  steps: [
    {
      num: "01",
      title: "Upload",
      location: "Your browser → UK S3",
      icon: "upload",
      body: "You drag, select, or photograph the document. PDF, JPEG, or PNG. The file streams directly from your browser to a private S3 bucket in the AWS London region using a short-lived presigned URL. It never passes through the application server.",
      detail: "Presigned URL expires in 15 minutes. Bucket has Block Public Access enabled. AES-256 encryption at rest, TLS 1.2+ in transit.",
      region: "eu-west-2",
    },
    {
      num: "02",
      title: "OCR",
      location: "AWS Textract (London)",
      icon: "scan",
      body: "AWS Textract runs the Detect Document Text API in-region. The image becomes text. The original file stays encrypted in S3; only the extracted text moves forward.",
      detail: "Textract runs in eu-west-2. No data crosses a regional boundary. Original image retained only as long as you keep it in your vault.",
      region: "eu-west-2",
    },
    {
      num: "03",
      title: "PII redaction",
      location: "SENDSerene server (London)",
      icon: "shield",
      body: "Before any text reaches the AI, personally identifying information is stripped: names, dates of birth, NHS numbers, addresses. The AI sees the substance of the letter, not who it's about.",
      detail: "Redaction runs server-side in-region. Redacted text is logged. The AI sub-processor (Anthropic) never receives identifying detail.",
      region: "eu-west-2",
    },
    {
      num: "04",
      title: "AI decode",
      location: "Anthropic Claude API",
      icon: "sparkles",
      body: "The redacted text is sent to the Anthropic Claude API with the SEND glossary system prompt. Claude returns a plain-English summary, jargon definitions, and any extracted deadlines. Zero data retention by default.",
      detail: "Anthropic's API terms include zero data retention: prompts and completions are not stored beyond the call and are not used for model training. Named as a sub-processor in the DPA.",
      region: "API call only",
    },
    {
      num: "05",
      title: "Stored in your vault",
      location: "PostgreSQL (London)",
      icon: "archive",
      body: "The original text, the redacted version, and the AI decode are stored in your document vault, encrypted, audit-logged, and accessible only to you and your collaborators. The original image is kept; the AI's work is done.",
      detail: "Row-level security on every table. Every read, write, and download is timestamped in an immutable audit log. You can delete anything at any time.",
      region: "eu-west-2",
    },
  ],
  guarantees: [
    { label: "UK data residency", value: "100%", note: "All storage and processing in eu-west-2" },
    { label: "PII before AI", value: "Redacted", note: "Names, DOBs, NHS numbers, addresses stripped" },
    { label: "AI data retention", value: "Zero", note: "Anthropic does not store or train on prompts" },
    { label: "Cross-account access", value: "Impossible", note: "Row-level security on every table" },
  ],
};

export const exportComparison = {
  eyebrow: "Evidence pack export",
  title: "Free gives you six months. Premium gives you the whole case.",
  body: "The evidence pack export is the moment SENDSerene pays for itself. Free tier exports the most recent six months, unfiltered. Premium exports your full history, filtered by date, category, and concern, with the formatted PDF, sequential numbering, and the quick brief one-pager.",
  rows: [
    { feature: "Date range exported", free: "Last 6 months", premium: "Full history" },
    { feature: "Filter by statutory category", free: false, premium: true },
    { feature: "Filter by concern / positive / neutral", free: false, premium: true },
    { feature: "Filter by purpose tag", free: false, premium: true },
    { feature: "Formatted PDF with pagination", free: false, premium: true },
    { feature: "Sequential entry numbering (Entry 1, 2, 3…)", free: false, premium: true },
    { feature: "Running page headers (child + date range)", free: false, premium: true },
    { feature: "Index page with one-line summaries", free: false, premium: true },
    { feature: "Quick brief one-pager", free: false, premium: true },
    { feature: "Attribution toggle (hide/show who logged)", free: true, premium: true },
    { feature: "Professional handoff summary", free: false, premium: true },
    { feature: "Export by collaborators (view-only)", free: true, premium: true },
  ],
};

export const patternDashboard = {
  eyebrow: "Pattern dashboard",
  title: "The patterns you're too tired to see. Surfaced.",
  body: "When you're living it day to day, patterns are invisible. Is sleep getting worse? Is the reading homework taking longer? Are the positive entries clustering around a particular teacher or time of day? SENDSerene's dashboard surfaces trends across your logged observations by category and over time, so you walk into a review already knowing what the data says.",
  months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
  categories: [
    {
      name: "Communication & Interaction",
      color: "teal" as const,
      data: [3, 5, 4, 6, 5, 7],
      trend: "up",
      trendLabel: "Increasing",
      latest: "7 entries",
      insight: "More non-verbal episodes logged since the fire alarm tests started in November.",
    },
    {
      name: "Cognition & Learning",
      color: "clay" as const,
      data: [2, 2, 3, 4, 4, 5],
      trend: "up",
      trendLabel: "Increasing",
      latest: "5 entries",
      insight: "Reading homework duration increasing week on week. Worth raising with the SENCO.",
    },
    {
      name: "Social, Emotional & Mental Health",
      color: "sage" as const,
      data: [1, 2, 3, 2, 4, 3],
      trend: "up",
      trendLabel: "Improving",
      latest: "3 entries",
      insight: "Positive social entries up since the lunchtime seating change. Keep it.",
    },
    {
      name: "Sensory & Physical Needs",
      color: "slate" as const,
      data: [4, 3, 5, 4, 6, 5],
      trend: "flat",
      trendLabel: "Stable",
      latest: "5 entries",
      insight: "Ear defender use consistent. School shoes rubbing flagged twice this month.",
    },
  ],
  readiness: {
    title: "Evidence readiness",
    body: "How much evidence you've captured per statutory category, building toward an upcoming review or tribunal date.",
    target: 12,
    items: [
      { cat: "Communication & Interaction", count: 7, pct: 58 },
      { cat: "Cognition & Learning", count: 5, pct: 42 },
      { cat: "Social, Emotional & Mental Health", count: 3, pct: 25 },
      { cat: "Sensory & Physical Needs", count: 5, pct: 42 },
    ],
  },
  timeline: {
    title: "Recent entries, chronological",
    body: "The same data, as a timeline. Every dot is a logged observation. Hover to see what happened.",
    entries: [
      { date: "3 Mar", time: "07:40", cat: "Sensory", flag: "concern", text: "School shoes rubbing again, two pairs of socks." },
      { date: "2 Mar", time: "09:15", cat: "Communication", flag: "neutral", text: "Responded to name first time today." },
      { date: "28 Feb", time: "16:30", cat: "Cognition", flag: "concern", text: "Reading took 65 minutes. Lost thread twice." },
      { date: "27 Feb", time: "12:00", cat: "Social", flag: "positive", text: "Sat with same friend at lunch again." },
      { date: "25 Feb", time: "08:20", cat: "Sensory", flag: "neutral", text: "Ear defenders on without being asked." },
      { date: "22 Feb", time: "15:45", cat: "Communication", flag: "concern", text: "Went non-verbal for 8 minutes after bell." },
      { date: "20 Feb", time: "18:00", cat: "Cognition", flag: "concern", text: "Homework took 55 minutes. Noise in kitchen." },
      { date: "18 Feb", time: "11:30", cat: "Social", flag: "positive", text: "Asked to join a game at break." },
    ],
  },
};

export const notIncluded = {
  eyebrow: "What this isn't",
  title: "We won't pretend to be everything. Here's what SENDSerene is not.",
  body: "Most products list what they do. We think it's just as important to be clear about what they don't. If you need any of the below, SENDSerene isn't the right tool, and we'd rather you knew that now than after you've signed up.",
  items: [
    {
      title: "Legal advice",
      body: "SENDSerene organises and explains. It does not interpret your legal position, predict tribunal outcomes, or replace a solicitor. For advice on your case, contact IPSEA or a SEND lawyer.",
      instead: "IPSEA, SENDIASS, or a solicitor",
    },
    {
      title: "A medical or diagnostic tool",
      body: "SENDSerene does not diagnose, assess, or interpret your child's needs. It records what you observe. Diagnosis comes from qualified health professionals.",
      instead: "Your GP, paediatrician, or CAMHS",
    },
    {
      title: "An EHCP writer",
      body: "SENDSerene helps you understand and check an EHCP. It does not draft one. The local authority writes the plan; you contribute evidence and request changes.",
      instead: "Your SENCO, an EHCP coordinator, or IPSEA",
    },
    {
      title: "A school communication portal",
      body: "SENDSerene is not a replacement for your child's school communication book or app. It's the place you bring what you observe and receive, to build the evidence record.",
      instead: "Your school's existing communication system",
    },
    {
      title: "A guarantee of outcomes",
      body: "Organised evidence improves your position. It does not guarantee a tribunal win or a better plan. The SEND system is imperfect. SENDSerene gives you the best chance of being heard.",
      instead: "Realistic expectations, and good advice",
    },
    {
      title: "A free-for-life product",
      body: "Free tier is generous but limited. Premium exists because running this properly, UK data residency, AI, security, costs money. We won't sell your data to make it free.",
      instead: "£5/month if you need the full version",
    },
  ],
};

export const security = {
  eyebrow: "Security & privacy",
  title: "Special category data, treated like it.",
  body: "Your child's health and disability information is the most protected class of personal data under UK law. SENDSerene is built accordingly.",
  points: [
    {
      title: "UK data residency",
      body: "Database and file storage in the AWS London region (eu-west-2). Your data does not leave the UK.",
    },
    {
      title: "Row-level security",
      body: "Every database table enforces row-level security. Cross-account access is structurally impossible, not just policy-disabled.",
    },
    {
      title: "PII redaction before AI",
      body: "Names, dates of birth, NHS numbers and addresses are stripped from text before anything reaches the AI. Anthropic never sees identifying detail.",
    },
    {
      title: "Immutable audit log",
      body: "Every upload, voice log, download and login is timestamped and recorded. You can see who did what, and when.",
    },
    {
      title: "Files never touch our servers",
      body: "Documents stream straight from your browser to UK storage via short-lived presigned URLs. Fifteen-minute expiry.",
    },
    {
      title: "Audio is ephemeral",
      body: "Source recordings are deleted within an hour of transcription. What you said stays. The sound of you saying it does not.",
    },
    {
      title: "Auto-logout and PIN lock",
      body: "Sessions auto-expire on inactivity. An optional app-level PIN lock protects shared devices, so a family member picking up the phone can't accidentally open your child's record.",
    },
    {
      title: "MFA on every account",
      body: "Multi-factor authentication is available on every account role, including collaborators. No one gets in with just a password.",
    },
  ],
  internationalTransfer: {
    title: "Built in Ghana. Data in the UK. Here's how that works.",
    body: "KoomBei Digital, the developer, operates from Accra, Ghana. Ghana does not currently hold UK data adequacy status. So the workflow is designed to keep live personal data out of KoomBei's hands after handover.",
    points: [
      {
        title: "PII-scrubbed error monitoring",
        body: "Bugs are diagnosed from stack traces and technical context via Sentry, never from personal data.",
      },
      {
        title: "Staging with synthetic data",
        body: "A staging environment with fake test data mirrors the production schema for all testing and reproduction. No real child data is used.",
      },
      {
        title: "Shared-screen investigation",
        body: "Where a production issue can't be diagnosed without live data, a UK-based person with production access drives the investigation on a shared screen, with KoomBei guiding. The data does not cross the border.",
      },
      {
        title: "IDTA-gated live access",
        body: "Any direct KoomBei access to live personal data requires an IDTA or the UK Addendum to standard contractual clauses, plus a transfer risk assessment, before access is granted. Time-boxed, expiring credentials are used, not standing access.",
      },
    ],
  },
};

export const personas = [
  {
    stage: "Stage 01",
    title: "Just starting out",
    body: "You suspect your child needs more support, or the school has raised it. You're not sure what an EHCP is, what your rights are, or where to begin. Start logging now. The record you build from here is the record that matters later.",
    cta: "Begin a record",
    accent: "teal" as const,
  },
  {
    stage: "Stage 02",
    title: "Mid-process",
    body: "The assessment is underway. Letters arrive. The 20-week clock is ticking. SENDSerene decodes each one, pulls out the deadlines, and keeps everything in one place so nothing falls through.",
    cta: "Decode the letters",
    accent: "clay" as const,
  },
  {
    stage: "Stage 03",
    title: "Mediation, complaints & appeals",
    body: "You've been refused, or the plan is wrong, or provision isn't being delivered. This is where organised evidence wins cases. Filter your record, export the pack, cite it by entry number.",
    cta: "Build the pack",
    accent: "sage" as const,
  },
];

export const pricing = {
  eyebrow: "Pricing",
  title: "Free to start. £5 a month when it matters.",
  body: "Every account starts free: three jargon decodes, thirty voice logs, one collaborator. Upgrade when you need full history, filtering, and the evidence pack export. Per-child pricing, because most families have one child with SEND, some have more.",
  free: {
    name: "Free",
    price: "£0",
    period: "always",
    blurb: "Enough to find out if this works for you.",
    features: [
      "3 jargon decodes per month",
      "30 voice logs per month",
      "1 invited collaborator",
      "6-month evidence export, unfiltered",
      "All 16 languages",
      "Full accessibility panel",
    ],
    cta: "Start free",
  },
  premium: {
    name: "Premium",
    basePrice: 5,
    basePeriod: "month",
    baseChildren: 2,
    extraChildMonthly: 2,
    extraChildYearly: 20,
    yearlyPrice: 48,
    blurb: "Full history, filtering, and the formatted evidence pack.",
    features: [
      "Unlimited jargon decodes",
      "Unlimited voice logs",
      "Up to 5 invited collaborators",
      "Full history evidence export, filtered",
      "Formatted evidence pack PDF",
      "Statutory deadline reminders by email and in-app",
      "Configurable reminder digest: daily, weekly, or off",
      "Quick brief one-pager",
      "Per-child billing",
    ],
    cta: "Start Premium",
    note: "Premium covers two children. Each additional child adds £2/month or £20/year.",
  },
};

export const deadlineCalc = {
  eyebrow: "Statutory deadline calculator",
  title: "One date in. Every legal deadline out.",
  body: "Enter the date of the trigger event, usually the date on the council's letter agreeing to assess. SENDSerene calculates the statutory deadlines that follow, using the timescale table validated by Zifankrah Ltd.",
  disclaimer:
    "Illustrative only, based on the statutory framework in the Children and Families Act 2014 and the SEND Code of Practice. Not legal advice. Always confirm against the letter you received.",
  steps: [
    { label: "Request received by council", weeks: 0, note: "The date you submitted the request, or the date on the council's letter." },
    { label: "Council decides whether to assess", weeks: 6, note: "The council must decide whether to carry out an EHC needs assessment within 6 weeks of the request." },
    { label: "Assessment completed", weeks: 12, note: "Advice and information gathered during the assessment. By week 12, the council should have all the evidence it needs." },
    { label: "Draft EHC plan issued (if applicable)", weeks: 14, note: "If the council decides to issue a plan, a draft must be sent to you for comment." },
    { label: "Final EHC plan (or decision not to issue)", weeks: 20, note: "The statutory maximum. The council must issue the final plan, or give written reasons for not doing so, by this date." },
  ],
};

export const faqs = [
  {
    q: "Is SENDSerene legal advice?",
    a: "No. SENDSerene is an organisation and evidence tool. It does not provide legal, medical, or educational advice. It does not diagnose children. The plain-English decodes are summaries, not interpretations of your legal position. For advice on your case, contact IPSEA, SENDIASS, or a solicitor.",
  },
  {
    q: "Where is my data stored?",
    a: "In the AWS London region (eu-west-2). Database, file storage, and OCR all run in-region. Your data does not leave the UK. Documents stream directly from your browser to UK storage using short-lived presigned URLs, they do not pass through the application server.",
  },
  {
    q: "What happens to the audio I record?",
    a: "Source audio is transcribed server-side and deleted within one hour of transcription. The transcript, which you can edit, is what's stored. The sound of your voice is not retained.",
  },
  {
    q: "Does the AI see my child's name?",
    a: "No. Before any text is sent to the AI (Anthropic Claude, zero data retention by default), personally identifying information is redacted, names, dates of birth, NHS numbers and addresses. The AI sees the substance of a letter, not who it's about.",
  },
  {
    q: "Can a co-parent or advocate use the account?",
    a: "Yes. You can invite collaborators with scoped, permission-controlled access: viewing level, voice logging permission, document download permission, and an optional expiry date. Invitations are tokenised single-use emails. View-only contributors can generate evidence packs without access to billing or settings.",
  },
  {
    q: "Which languages are supported?",
    a: "English, Somali, Urdu, Punjabi, Bengali and Polish, across the interface, voice logging, translation, and the jargon decoder. The toggle and framework are built by KoomBei; the translated wording is supplied and validated by Zifankrah Ltd.",
  },
  {
    q: "What if I need to cancel?",
    a: "Cancel anytime from the billing portal. You keep access until the end of the period you've paid for. Your data stays for 90 days after that in case you change your mind, then it's deleted. You can also export everything or delete the account immediately from settings, at any time, on any plan.",
  },
  {
    q: "Who built this, and who owns it?",
    a: "SENDSerene is owned by Zifankrah Ltd, a SEND-parent-led organisation. It was built by KoomBei Digital Limited in Accra under project reference KB-2026-007. Zifankrah owns all third-party accounts (AWS, hosting, Stripe, AI, email) and the domain. KoomBei does not hold standing access to live personal data after handover.",
  },
];

export const builtBy = {
  eyebrow: "Who's behind this",
  title: "Built by a SEND parent, for SEND parents.",
  body: "SENDSerene is a Zifankrah Ltd product. Zifankrah is led by Irene Ankrah, a parent who has been through the system and came out the other side determined to make it easier for the next family. The application is built by KoomBei Digital Limited in Accra, Ghana, under a fixed-scope engagement with a founding-client rate that reflects the social purpose of the work, not its commercial value.",
  quote:
    "Dream with us. Rise with us.",
  quoteBy: "KoomBei Digital",
  ref: "KB-2026-007",
};

export const finalCta = {
  title: "Start the record. The rest follows.",
  body: "You don't need to know where this is going. You just need to start logging what's happening, in the language you think in. When the moment comes, and it always comes, your evidence will be there.",
  primaryCta: "Start a free account",
  secondaryCta: "Talk to us first",
};

export const footer = {
  blurb:
    "SENDSerene is an organisation and evidence tool. It does not provide legal, medical, or educational advice. It does not diagnose children.",
  columns: [
    {
      title: "Product",
      links: [
        { label: "Voice logging", href: "/voice-log" },
        { label: "Jargon decoder", href: "/decoder" },
        { label: "Evidence pack", href: "/evidence" },
        { label: "Pattern dashboard", href: "/dashboard" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "Get help",
      links: [
        { label: "SEND glossary", href: "/glossary" },
        { label: "Statutory timescales", href: "/timescales" },
        { label: "Inside an EHCP", href: "/ehcp" },
        { label: "Security & data", href: "/security" },
        { label: "IPSEA (external)", href: "https://ipsea.org.uk", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "What SENDSerene isn't", href: "/faq#not-included" },
        { label: "Built by", href: "/faq#built-by" },
      ],
    },
  ],
  legal: [
    "Zifankrah Ltd is the Data Controller. KoomBei Digital Limited is the Data Processor.",
    "Data stored in the AWS London region (eu-west-2). ICO registration required before launch.",
    "© 2026 Zifankrah Ltd. Built in the UK and Ghana.",
  ],
};
