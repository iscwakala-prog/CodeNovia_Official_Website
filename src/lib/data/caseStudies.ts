export type CaseStudy = {
  slug: string;
  industry: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  /** Accent tone for placeholder / overlay */
  accent: "blue" | "cyan" | "indigo" | "teal" | "violet" | "sky";
  /** Cover image under /public/portfolio */
  image: string;
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "isc-digital-banking-platform",
    industry: "FinTech",
    title: "ISC Digital Banking Platform",
    tagline: "Sharia-Compliant Digital Banking & Savings Ecosystem",
    description:
      "A modern Islamic finance platform designed to simplify digital savings, financial transparency and member engagement through secure and scalable technology.",
    features: [
      "Digital Savings Accounts",
      "Transaction History",
      "Member Management",
      "Investment Tracking",
      "Financial Reports",
      "Admin Dashboard",
      "Secure Authentication",
      "Analytics Dashboard",
    ],
    techStack: ["Flutter", "Node.js", "Express.js", "MongoDB", "Redis"],
    accent: "blue",
    image: "/portfolio/isc-digital-banking-platform.png",
    featured: true,
  },
  {
    slug: "edusphere-school-management-platform",
    industry: "EdTech",
    title: "EduSphere School Management Platform",
    tagline: "Complete ERP Platform for National and International Schools",
    description:
      "A complete multi-tenant SaaS platform designed for schools, colleges and educational institutions to manage academics, administration and communication from a single platform.",
    features: [
      "Admissions",
      "Attendance",
      "Examinations",
      "Fee Management",
      "Timetable",
      "Homework",
      "Parent Portal",
      "Teacher Portal",
      "Inventory Management",
      "Reporting & Analytics",
    ],
    techStack: ["Flutter", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    accent: "cyan",
    image: "/portfolio/edusphere-school-management-platform.png",
    featured: true,
  },
  {
    slug: "inventoryflow-management-suite",
    industry: "Enterprise Operations",
    title: "InventoryFlow Management Suite",
    tagline: "Real-Time Inventory Visibility for Modern Businesses",
    description:
      "An enterprise inventory platform providing complete control over stock movement, purchasing, warehouse operations and reporting.",
    features: [
      "Inventory Tracking",
      "Warehouse Management",
      "Purchase Orders",
      "Vendor Management",
      "Reporting",
      "Audit Logs",
      "Analytics Dashboard",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Redis"],
    accent: "indigo",
    image: "/portfolio/inventoryflow-management-suite.png",
    featured: true,
  },
  {
    slug: "mediaflow-downloader-suite",
    industry: "Productivity Tools",
    title: "MediaFlow Downloader Suite",
    tagline: "High-Speed Media Processing Platform",
    description:
      "A media processing platform allowing users to download, convert and manage online media assets with speed and simplicity.",
    features: [
      "Audio Extraction",
      "Multi-format Downloads",
      "Batch Processing",
      "Queue System",
      "Download History",
      "User Dashboard",
    ],
    techStack: ["Next.js", "Node.js", "FFmpeg", "MongoDB"],
    accent: "violet",
    image: "/portfolio/mediaflow-downloader-suite.png",
    featured: true,
  },
  {
    slug: "carelink-health-os",
    industry: "Healthcare",
    title: "CareLink Health OS",
    tagline: "Unified Care Coordination for Clinics & Hospitals",
    description:
      "A secure healthcare operations platform that connects appointments, patient records, teleconsults and billing into one compliant workflow.",
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Telemedicine Rooms",
      "Prescription Workflows",
      "Billing & Invoicing",
      "Role-Based Access",
      "Audit Trails",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "AWS"],
    accent: "teal",
    image: "/portfolio/carelink-health-os.png",
  },
  {
    slug: "novamind-automation-hub",
    industry: "AI Automation",
    title: "NovaMind Automation Hub",
    tagline: "Intelligent Workflows That Remove Manual Bottlenecks",
    description:
      "An AI automation layer that connects internal tools, documents and messaging channels to accelerate operations and decision-making.",
    features: [
      "Document Intelligence",
      "Workflow Orchestration",
      "AI Assistants",
      "Knowledge Base RAG",
      "Approval Pipelines",
      "Analytics Insights",
    ],
    techStack: ["Next.js", "Python", "OpenAI", "LangChain", "MongoDB"],
    accent: "sky",
    image: "/portfolio/novamind-automation-hub.png",
  },
  {
    slug: "routepeak-logistics-cloud",
    industry: "Logistics",
    title: "RoutePeak Logistics Cloud",
    tagline: "End-to-End Visibility Across Fleet & Freight",
    description:
      "A logistics command center built for dispatch, tracking, warehouse handoffs and delivery performance at national scale.",
    features: [
      "Fleet Tracking",
      "Route Optimization",
      "Shipment Lifecycle",
      "Driver Mobile App",
      "SLA Monitoring",
      "Ops Dashboards",
    ],
    techStack: ["Flutter", "Node.js", "PostgreSQL", "Redis", "Docker"],
    accent: "blue",
    image: "/portfolio/routepeak-logistics-cloud.png",
  },
  {
    slug: "relaysales-crm",
    industry: "CRM",
    title: "RelaySales CRM",
    tagline: "Pipeline Clarity for Modern Revenue Teams",
    description:
      "A custom CRM designed around real sales processes—capturing leads, automating follow-ups and giving leadership a single source of truth.",
    features: [
      "Lead Pipelines",
      "Activity Tracking",
      "Deal Forecasting",
      "Email Sequences",
      "Team Workspaces",
      "Revenue Reports",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Redis"],
    accent: "cyan",
    image: "/portfolio/relaysales-crm.png",
  },
  {
    slug: "peoplegrid-hr-suite",
    industry: "HR Management",
    title: "PeopleGrid HR Suite",
    tagline: "People Operations Without the Spreadsheet Chaos",
    description:
      "An HR platform covering onboarding, attendance, payroll readiness and employee self-service for growing organizations.",
    features: [
      "Employee Directory",
      "Attendance & Leave",
      "Onboarding Flows",
      "Performance Reviews",
      "Document Vault",
      "HR Analytics",
    ],
    techStack: ["React", "Node.js", "MongoDB", "AWS"],
    accent: "indigo",
    image: "/portfolio/peoplegrid-hr-suite.png",
  },
  {
    slug: "merchantbay-commerce-os",
    industry: "E-Commerce",
    title: "MerchantBay Commerce OS",
    tagline: "Omnichannel Commerce Built for Growth",
    description:
      "A commerce operating system for catalogs, orders, payments and fulfillment—engineered for multi-store and high-volume catalogues.",
    features: [
      "Product Catalog",
      "Order Management",
      "Checkout Flows",
      "Inventory Sync",
      "Promotions Engine",
      "Seller Dashboards",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Redis", "Cloudinary"],
    accent: "teal",
    image: "/portfolio/merchantbay-commerce-os.png",
  },
  {
    slug: "estateatlas-property-platform",
    industry: "Real Estate",
    title: "EstateAtlas Property Platform",
    tagline: "Listings, Leads & Transactions in One Workspace",
    description:
      "A real estate platform that unifies property listings, agent workflows, client inquiries and deal tracking for agencies and developers.",
    features: [
      "Property Listings",
      "Lead Capture",
      "Agent CRM",
      "Virtual Tours",
      "Document Sharing",
      "Deal Pipeline",
    ],
    techStack: ["Next.js", "Express.js", "MongoDB", "Cloudinary"],
    accent: "violet",
    image: "/portfolio/estateatlas-property-platform.png",
  },
];

export const portfolioMetrics = [
  { value: "10+", label: "Solutions Designed" },
  { value: "5+", label: "Industries Served" },
  { value: "∞", label: "Global-Ready Architecture" },
  { value: "AI", label: "AI-Ready Systems" },
  { value: "SaaS", label: "Multi-Tenant Expertise" },
  { value: "🔒", label: "Enterprise-Grade Security" },
] as const;

export const portfolioIndustries = [
  {
    name: "FinTech",
    description: "Secure banking, savings and payment platforms built for trust.",
  },
  {
    name: "EdTech",
    description: "Multi-tenant school and learning systems for institutions at scale.",
  },
  {
    name: "Healthcare",
    description: "Compliant clinical and patient workflows with privacy by design.",
  },
  {
    name: "Logistics",
    description: "Fleet, freight and warehouse visibility across the supply chain.",
  },
  {
    name: "E-Commerce",
    description: "High-performance commerce engines for catalogs and conversions.",
  },
  {
    name: "AI & Automation",
    description: "Intelligent assistants and automated operations for modern teams.",
  },
  {
    name: "Enterprise Software",
    description: "Mission-critical internal systems that streamline organizations.",
  },
  {
    name: "Real Estate",
    description: "Listings, leads and transaction platforms for property businesses.",
  },
] as const;

export const techExpertise = {
  Backend: ["Node.js", "Express.js", "NestJS"],
  Frontend: ["Next.js", "React", "Flutter"],
  Database: ["MongoDB", "PostgreSQL", "Redis"],
  Cloud: ["Docker", "AWS", "Cloudinary"],
  AI: ["OpenAI", "LangChain", "RAG Systems"],
} as const;

export const portfolioProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We map business goals, constraints and success metrics before a single line of code.",
  },
  {
    step: "02",
    title: "Architecture & Planning",
    description:
      "Scalable system design, domain modeling and a clear delivery roadmap.",
  },
  {
    step: "03",
    title: "Design & Development",
    description:
      "Product UI and engineering executed in focused iterations with visible progress.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description:
      "Quality, performance and security hardening before customers ever see the product.",
  },
  {
    step: "05",
    title: "Deployment & Scaling",
    description:
      "Cloud-ready releases with observability, CI/CD and capacity for growth.",
  },
  {
    step: "06",
    title: "Long-Term Partnership",
    description:
      "Ongoing product evolution, support and strategic technology guidance.",
  },
] as const;

export const portfolioTestimonials = [
  {
    quote:
      "CodeNovia approached our banking product like a true technology partner—secure architecture, clear milestones and a platform we can still scale today.",
    role: "Founder, FinTech Startup",
  },
  {
    quote:
      "EduSphere replaced fragmented school tools with one system. Administration is faster and parents finally have transparency.",
    role: "Director, Educational Institution",
  },
  {
    quote:
      "They understood our operations, not just the tech. Inventory visibility improved across warehouses within the first release cycle.",
    role: "Operations Manager, Enterprise Company",
  },
] as const;

/** Homepage / footer compact list */
export const projects = caseStudies
  .filter((study) => study.featured)
  .map((study) => ({
    slug: study.slug,
    title: study.title,
    category: study.industry,
    summary: study.tagline,
  }));

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
