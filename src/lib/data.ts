export const siteConfig = {
  name: "NewHorizon Immigration Services",
  shortName: "NewHorizon",
  tagline: "Guiding you to a new horizon",
  description:
    "NewHorizon Immigration Services is a trusted immigration consulting firm helping families, professionals and students navigate visas, green cards, citizenship and more with confidence.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://newhorizon-immigration-services.amsitservices.com",
  email: "hello@newhorizonimmigration.com",
  phone: "+1 (555) 012-3456",
  address: "480 Horizon Avenue, Suite 210, Austin, TX 78701",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM CST",
  founded: 2012,
  socials: [
    { label: "Facebook", icon: "fa-brands fa-facebook-f", href: "https://facebook.com" },
    { label: "X (Twitter)", icon: "fa-brands fa-x-twitter", href: "https://x.com" },
    { label: "Instagram", icon: "fa-brands fa-instagram", href: "https://instagram.com" },
    { label: "LinkedIn", icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Success Stories", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const routes = [
  "/",
  "/services",
  "/services/visa-green-card-applications",
  "/services/citizenship-naturalization",
  "/services/family-based-immigration",
  "/services/employment-based-visas",
  "/services/student-visas",
  "/services/adjustment-of-status",
  "/services/appeals-waivers",
  "/about",
  "/projects",
  "/pricing",
  "/contact",
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  faIcon: string;
  features: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "visa-green-card-applications",
    title: "Visa & Green Card Applications",
    short:
      "End-to-end preparation of immigrant visa petitions and permanent resident (green card) applications, from eligibility analysis to interview coaching.",
    description:
      "Whether you are joining family, advancing your career or starting a new life, our team prepares airtight visa petitions and green card applications. We map the right visa category to your profile, assemble evidence in a way adjudicators trust, and coach you through every interview so you walk in confident.",
    image: "/images/service-visa-green-card.jpg",
    faIcon: "fa-solid fa-passport",
    features: [
      "Visa category selection & eligibility assessment",
      "Complete petition and application preparation",
      "Evidence compilation and document review",
      "Interview preparation and mock sessions",
      "Status tracking and USCIS correspondence",
      "RFEs handled swiftly and accurately",
    ],
    process: [
      { title: "Free consultation", text: "We assess your profile, goals and eligibility across visa categories." },
      { title: "Strategy & checklist", text: "You get a clear roadmap, document checklist and timeline." },
      { title: "Preparation & filing", text: "We draft, review and file your petition with precision." },
      { title: "Follow-through", text: "Interview coaching, status updates and support until approval." },
    ],
    faqs: [
      { q: "How long does a green card application take?", a: "Timelines vary by category — family petitions typically 12–24 months, employment-based 6–18 months. We give you a realistic timeline for your exact case during the first consultation." },
      { q: "Can you help if my application was already denied?", a: "Yes. We analyze denial reasons and advise whether re-filing, a motion to reopen, or an appeal is the strongest path forward." },
      { q: "Do I need to be in the US to apply?", a: "Not always — consular processing allows applications from abroad. We tailor the process to your current location." },
    ],
  },
  {
    slug: "citizenship-naturalization",
    title: "Citizenship & Naturalization",
    short:
      "Complete N-400 support, civics and English prep, and interview guidance for your journey to US citizenship.",
    description:
      "Becoming a citizen is a life-changing milestone. We prepare your N-400 application with care, verify you meet residency and good-moral-character requirements, and coach you through the civics test, English interview and oath ceremony so nothing stands between you and your new passport.",
    image: "/images/service-citizenship.jpg",
    faIcon: "fa-solid fa-landmark",
    features: [
      "N-400 application preparation and filing",
      "Residency & good moral character assessment",
      "Civics and English test preparation materials",
      "Mock naturalization interviews",
      "Documentation for travel, taxes and name changes",
      "Oath ceremony preparation",
    ],
    process: [
      { title: "Eligibility review", text: "We confirm you meet residency, age and character requirements." },
      { title: "Application preparation", text: "Your N-400 is completed accurately and filed with confidence." },
      { title: "Test & interview prep", text: "Structured civics study and realistic mock interviews." },
      { title: "Celebration", text: "Guidance through the oath ceremony to citizenship day." },
    ],
    faqs: [
      { q: "What is the continuous residence requirement?", a: "Generally, you must have lived in the US as a permanent resident for 5 years (3 if married to a US citizen) with no extended absences. We verify your travel history against the rules." },
      { q: "Do I need to speak perfect English?", a: "No — you need basic reading, writing and speaking ability. Exemptions exist for older applicants and certain medical conditions; we check your eligibility." },
      { q: "What if I have a criminal record?", a: "Certain offenses affect eligibility. We review your history honestly and advise whether to apply now or wait." },
    ],
  },
  {
    slug: "family-based-immigration",
    title: "Family-Based Immigration",
    short:
      "Reunite with spouses, parents and children through family petitions, fiancé visas and green cards for relatives.",
    description:
      "Family is the heart of immigration. We handle spousal petitions (CR-1/IR-1), fiancé visas (K-1), parent and child petitions, and green cards for qualifying relatives — guiding you through every affidavit of support and interview with compassion and precision.",
    image: "/images/service-family.jpg",
    faIcon: "fa-solid fa-people-roof",
    features: [
      "Spouse & fiancé petitions (CR-1, IR-1, K-1)",
      "Parent, child and sibling petitions",
      "Affidavit of support (I-864) preparation",
      "Consular processing support",
      "Green card applications for qualifying relatives",
      "Waiver guidance for inadmissibility issues",
    ],
    process: [
      { title: "Relationship & eligibility check", text: "We confirm category, priority date and petition strategy." },
      { title: "Petition filing", text: "I-130 or I-129F prepared, reviewed and filed." },
      { title: "Consular or adjustment phase", text: "Full support through NVC or USCIS processing." },
      { title: "Interview & arrival", text: "Coaching plus arrival and green card follow-through." },
    ],
    faqs: [
      { q: "Can I sponsor my fiancé to live in the US?", a: "Yes — the K-1 fiancé visa allows your fiancé to enter and marry within 90 days, then adjust to a green card. We handle the full sequence." },
      { q: "What is the affidavit of support?", a: "It's a legally binding promise to support your relative financially. We prepare your I-864 with the right income evidence to avoid delays." },
      { q: "How long does spousal sponsorship take?", a: "Typically 10–18 months depending on service center and whether you file from inside or outside the US." },
    ],
  },
  {
    slug: "employment-based-visas",
    title: "Employment-Based Visas",
    short:
      "H-1B, L-1, EB-1/EB-2/EB-3 and PERM labor certification for employers and skilled professionals.",
    description:
      "From H-1B specialty occupation petitions to EB-1 extraordinary ability and employer-sponsored PERM labor certification, we help companies and professionals secure the right work authorization — and we keep your case moving when premium processing, RFEs or audits come into play.",
    image: "/images/service-employment.jpg",
    faIcon: "fa-solid fa-briefcase",
    features: [
      "H-1B specialty occupation petitions",
      "L-1 intracompany transferee petitions",
      "EB-1, EB-2 (NIW) and EB-3 petitions",
      "PERM labor certification and recruitment",
      "Employer compliance & audit support",
      "O-1 extraordinary ability visas",
    ],
    process: [
      { title: "Position & category analysis", text: "We match the role and candidate to the strongest visa path." },
      { title: "Employer & candidate prep", text: "Wage, job duty and credential documentation assembled." },
      { title: "Filing & tracking", text: "Petitions filed, premium processing managed, RFEs answered." },
      { title: "Approval & extension", text: "Support through approval, extensions and green card sponsorship." },
    ],
    faqs: [
      { q: "Did my H-1B get selected in the lottery?", a: "We track H-1B registrations closely and guide you on cap-exempt alternatives and day-one CPT options if the lottery isn't favorable." },
      { q: "What is an RFE and what should I do?", a: "A Request for Evidence means USCIS wants more proof. Our team drafts a comprehensive, deadline-aware response — most of our RFE responses are approved." },
      { q: "Can my employer sponsor my green card?", a: "Usually yes, through PERM and the EB-2/EB-3 process. We coordinate with HR to make it smooth." },
    ],
  },
  {
    slug: "student-visas",
    title: "Student Visas",
    short:
      "F-1 and J-1 visas, SEVIS management, OPT/CPT work authorization and F-1 to H-1B transitions.",
    description:
      "From your first I-20 to post-graduation OPT and beyond, we guide international students through F-1 and J-1 visas, SEVIS compliance, on-campus work rules, OPT and CPT authorizations, and the leap from student status to H-1B or a green card.",
    image: "/images/service-student.jpg",
    faIcon: "fa-solid fa-graduation-cap",
    features: [
      "F-1 and J-1 visa application support",
      "SEVIS record management & compliance",
      "OPT and STEM OPT applications",
      "CPT work authorization guidance",
      "H-1B transition strategy for graduates",
      "Visa interview coaching for students",
    ],
    process: [
      { title: "School & program fit", text: "We confirm the right student path and documentation." },
      { title: "Visa & SEVIS prep", text: "DS-160, interview prep and SEVIS fee guidance." },
      { title: "Study-period support", text: "Work authorization, transfers and compliance checks." },
      { title: "Career transition", text: "OPT to H-1B or green card planning before you graduate." },
    ],
    faqs: [
      { q: "Can I work while studying?", a: "F-1 students may work on campus and, with authorization, off campus via CPT or OPT. We make sure you stay compliant." },
      { q: "What is STEM OPT?", a: "STEM graduates can extend OPT by 24 months — a total of up to 36 months of work authorization. We handle the application and reporting." },
      { q: "What happens after my visa expires?", a: "Your status is what matters most. We help you maintain status, transfer schools, or transition to work visas before grace periods end." },
    ],
  },
  {
    slug: "adjustment-of-status",
    title: "Adjustment of Status",
    short:
      "Move from a temporary visa to permanent residency from inside the US with a correctly filed I-485.",
    description:
      "Already in the US? Adjustment of status lets you become a lawful permanent resident without leaving. We prepare your I-485, coordinate medical exams and work/travel permits, and handle interviews — carefully managing your timeline so you never fall out of status.",
    image: "/images/service-adjustment.jpg",
    faIcon: "fa-solid fa-arrows-rotate",
    features: [
      "I-485 application preparation & filing",
      "I-765 work permit & I-131 travel document",
      "Medical exam (I-693) coordination",
      "Priority date & visa bulletin tracking",
      "Interview preparation for adjustment applicants",
      "Status gap resolution and overstay strategy",
    ],
    process: [
      { title: "Eligibility & timing", text: "We confirm your category is current and you're eligible to adjust." },
      { title: "Complete filing", text: "I-485 package prepared with biometrics, medical and fees." },
      { title: "Interim benefits", text: "Work and travel authorization secured while you wait." },
      { title: "Interview & approval", text: "Coaching, attendance support and green card delivery." },
    ],
    faqs: [
      { q: "Can I apply even if I overstayed my visa?", a: "In many family categories, overstays are forgiven for adjustment purposes. We evaluate your exact history to confirm safety." },
      { q: "How long may I travel while the I-485 is pending?", a: "With an approved advance parole (I-131) you can travel. We advise on the safest timing — travel without it can abandon your application." },
      { q: "When can I get a work permit?", a: "Once your I-485 is pending, the I-765 work permit is typically approved within a few months. You may also be able to port jobs in some categories." },
    ],
  },
  {
    slug: "appeals-waivers",
    title: "Appeals & Waivers",
    short:
      "Motions to reopen, appeals to the BIA, and inadmissibility waivers like I-601 and I-601A when cases go sideways.",
    description:
      "A denial is not the end of the road. Our specialists fight for you with motions to reopen, appeals to the Board of Immigration Appeals, and inadmissibility waivers (I-601, I-601A) for unlawful presence, misrepresentation and more — building the strongest possible record for a favorable decision.",
    image: "/images/service-appeals.jpg",
    faIcon: "fa-solid fa-scale-balanced",
    features: [
      "Motion to reopen / reconsider filings",
      "BIA appeal preparation and briefing",
      "I-601 & I-601A inadmissibility waivers",
      "Extreme hardship documentation",
      "Unlawful presence and misrepresentation strategy",
      "Case review with honest success assessment",
    ],
    process: [
      { title: "Case review", text: "We obtain your file and assess every angle of the denial." },
      { title: "Strategy", text: "Appeal, motion, waiver or re-filing — we pick the winning path." },
      { title: "Evidence building", text: "Hardship affidavits, expert letters and supporting records." },
      { title: "Advocacy", text: "Briefs, hearings and correspondence handled by specialists." },
    ],
    faqs: [
      { q: "What are my options after a denial?", a: "Typically a motion to reopen, a motion to reconsider, or an appeal to the BIA. Deadlines are strict (often 30 days) — contact us immediately." },
      { q: "What is an I-601A waiver?", a: "It waives unlawful presence for immediate relatives of US citizens, letting them process abroad without a 10-year bar. It's a powerful tool we use frequently." },
      { q: "What counts as extreme hardship?", a: "It must go beyond the ordinary — serious health, financial, educational or country-condition factors affecting a qualifying relative. We document each one rigorously." },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  summary: string;
  story: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "family-reunion-after-seven-years",
    title: "A Family Reunited After Seven Years",
    category: "Family-Based Immigration",
    image: "/images/project-family-reunion.jpg",
    summary:
      "After seven years of separation, the Alvarez family finally reunited in Texas thanks to a carefully navigated spousal petition and waiver.",
    story: [
      "Maria's husband had been waiting in Mexico since 2016 while her petition crawled through processing. With a prior removal order on his record, every standard path seemed blocked.",
      "Our team filed a combined I-130, an I-212 permission-to-reapply and an I-601A waiver, building a 300-page hardship record. When the interview day came, we coached the family through every question.",
      "Eight months later, the waiver was approved — and the family reunited at Austin-Bergstrom airport. Maria says her only regret is not calling us sooner.",
    ],
    metrics: [
      { label: "Total timeline", value: "8 months" },
      { label: "Waiver approved", value: "I-601A" },
      { label: "Family members", value: "4 reunited" },
    ],
  },
  {
    slug: "tech-team-h1b-to-green-card",
    title: "Scaling a Tech Team: H-1B to Green Cards",
    category: "Employment-Based Visas",
    image: "/images/project-tech-sponsorship.jpg",
    summary:
      "A fast-growing SaaS company relied on us to sponsor 12 engineers across H-1B, PERM and EB-2 — with zero audit failures.",
    story: [
      "The company was losing senior engineers to visa uncertainty. We onboarded as their immigration partner and audited every job title, wage level and recruitment step.",
      "We filed 12 H-1B petitions (9 selected in the lottery), ran PERM recruitments that passed audit scrutiny, and prepared EB-2 petitions for the most senior engineers.",
      "Two years in, all 12 engineers hold approved petitions, retention is up, and the company has a repeatable immigration playbook for every new hire.",
    ],
    metrics: [
      { label: "Engineers sponsored", value: "12" },
      { label: "H-1B selections", value: "9/12" },
      { label: "Audits survived", value: "3/3" },
    ],
  },
  {
    slug: "founders-o1-extraordinary-ability",
    title: "From Startup Founder to O-1 Visa",
    category: "O-1 Extraordinary Ability",
    image: "/images/project-startup-founder.jpg",
    summary:
      "A first-time founder with no traditional degree proved extraordinary ability through awards, press and metrics — approved in 12 days.",
    story: [
      "Rahul had built a fintech app with 2 million downloads, but a typical O-1 profile needs strong evidence. His story was compelling — it just wasn't documented.",
      "We worked with him for six weeks to gather press coverage, customer metrics, speaking invitations and advisory letters from industry leaders.",
      "The O-1 was approved in 12 days with premium processing. Rahul now builds his team in Austin, and we're already planning his EB-1 green card.",
    ],
    metrics: [
      { label: "Decision time", value: "12 days" },
      { label: "App downloads", value: "2M+" },
      { label: "Visa category", value: "O-1A" },
    ],
  },
  {
    slug: "green-card-delivered-to-family-of-five",
    title: "A Green Card for a Family of Five",
    category: "Adjustment of Status",
    image: "/images/project-green-card-family.jpg",
    summary:
      "A family of five adjusted status together after 11 years on work visas — no interview, no RFE, approved in one stroke.",
    story: [
      "The Nguyen family had lived in the US for over a decade on renewable work visas, always one layoff away from upheaval. Their employer filed an EB-3 petition, and they turned to us for the I-485 phase.",
      "We prepared a meticulous package: medical exams, birth certificates translated, work authorizations and a clean I-693. Every form was triple-checked against our internal checklist.",
      "The family's green cards arrived in seven months — no RFE, no interview. Their children, who had only ever known the US as home, finally had certainty.",
    ],
    metrics: [
      { label: "Approval time", value: "7 months" },
      { label: "RFEs received", value: "0" },
      { label: "Green cards", value: "5" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "NewHorizon turned our most stressful year into the happiest one. The waiver that felt impossible was approved — our family is finally together.",
    name: "Maria & Diego Alvarez",
    role: "Family reunification, Austin TX",
    initials: "MA",
  },
  {
    quote:
      "They handled our entire H-1B and green card process for 12 engineers. Precision, speed and zero surprises. Our best vendor decision.",
    name: "Priya Sharma",
    role: "VP People, SaaS company",
    initials: "PS",
  },
  {
    quote:
      "My O-1 was approved in 12 days. I thought extraordinary ability was out of reach without a degree — they proved me wrong.",
    name: "Rahul Mehta",
    role: "Founder, O-1A visa",
    initials: "RM",
  },
  {
    quote:
      "From the first call they were honest, organized and genuinely caring. Seven months later we all held real green cards.",
    name: "Linh Nguyen",
    role: "EB-3 adjustment, family of five",
    initials: "LN",
  },
  {
    quote:
      "The citizenship interview felt easy because of their mock sessions. I walked in calm and walked out a citizen.",
    name: "Kwame Osei",
    role: "Naturalization, N-400",
    initials: "KO",
  },
  {
    quote:
      "My student visa interview was terrifying, but their coaching made it simple. Now I'm on OPT and planning my H-1B.",
    name: "Sofia García",
    role: "F-1 student, STEM OPT",
    initials: "SG",
  },
];

export const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "4,800+", label: "Cases approved" },
  { value: "97%", label: "Success rate" },
  { value: "40+", label: "Countries served" },
];

export const homeFaqs = [
  {
    q: "How much does an immigration consultation cost?",
    a: "Your first consultation is free. After we understand your case, you'll receive a transparent, fixed-fee quote — no hourly surprises, no hidden charges.",
  },
  {
    q: "How long will my case take?",
    a: "Every case is different, but we give you a realistic, category-specific timeline at day one — and we track your priority date and processing times actively.",
  },
  {
    q: "What if my case was already denied?",
    a: "A denial isn't the end. We review the denial notice, assess appeals, motions and waivers, and tell you honestly which path gives you the best odds.",
  },
  {
    q: "Do you handle cases from outside the US?",
    a: "Yes. We support clients worldwide through consular processing, with secure document exchange and consultations by video call.",
  },
  {
    q: "Are you lawyers?",
    a: "We are accredited immigration consultants who work alongside licensed attorneys on complex cases, giving you expert preparation at a fraction of typical legal fees.",
  },
];

export const pricingPlans = [
  {
    name: "Consultation",
    price: "$0",
    period: "first call",
    description: "A clear read on your options before you commit to anything.",
    features: [
      "30-minute case assessment",
      "Eligibility & timeline overview",
      "Honest success assessment",
      "No obligation",
    ],
    cta: "Book free call",
    featured: false,
  },
  {
    name: "Standard Filing",
    price: "$1,450",
    period: "per case",
    description: "Full preparation and filing support for straightforward petitions.",
    features: [
      "Complete form preparation & filing",
      "Document checklist & review",
      "USCIS fee handling guidance",
      "Status tracking & updates",
      "One revision round",
    ],
    cta: "Start standard",
    featured: true,
  },
  {
    name: "Premium Support",
    price: "$2,900",
    period: "per case",
    description: "White-glove handling with attorney partnership for complex cases.",
    features: [
      "Everything in Standard",
      "Attorney-reviewed strategy",
      "RFE & NOID response drafting",
      "Interview coaching sessions",
      "Priority support line",
      "Waiver & appeal expertise",
    ],
    cta: "Go premium",
    featured: false,
  },
];
