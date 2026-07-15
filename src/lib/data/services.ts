export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  /** Shown on homepage + footer */
  core?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  summary: string;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ai-automation",
    title: "AI & Automation",
    summary:
      "Turn data and processes into intelligent systems that work around the clock.",
    services: [
      {
        slug: "ai-integration-automation",
        title: "AI Integration & Intelligent Automation",
        description:
          "Embed AI into your stack—assistants, copilots, and smart process automation.",
        core: true,
      },
      {
        slug: "ai-powered-business-solutions",
        title: "AI-Powered Business Solutions",
        description:
          "Custom AI products that unlock insights, predictions, and competitive advantage.",
      },
      {
        slug: "workflow-automation-systems",
        title: "Workflow Automation Systems",
        description:
          "Eliminate repetitive work with reliable automation across your tools and teams.",
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering & Product Services",
    summary:
      "Build scalable products and platforms with engineering craft and product clarity.",
    services: [
      {
        slug: "saas-product-engineering",
        title: "SaaS Product Engineering",
        description:
          "End-to-end SaaS builds—from MVP to multi-tenant platforms ready to scale.",
        core: true,
      },
      {
        slug: "enterprise-software-development",
        title: "Enterprise Software Development",
        description:
          "Secure, reliable systems tailored to complex business workflows and compliance.",
        core: true,
      },
      {
        slug: "web-platform-engineering",
        title: "Web Platform Engineering",
        description:
          "High-performance web platforms engineered for speed, SEO, and growth.",
        core: true,
      },
      {
        slug: "mobile-app-engineering",
        title: "Mobile App Engineering",
        description:
          "Native-quality iOS and Android apps that users love to return to.",
        core: true,
      },
      {
        slug: "cms-wordpress-solutions",
        title: "CMS & WordPress Solutions",
        description:
          "Flexible CMS and WordPress builds that make publishing and growth effortless.",
        core: true,
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    summary:
      "Craft interfaces and systems that feel premium, clear, and conversion-focused.",
    services: [
      {
        slug: "product-design-ux",
        title: "Product Design & User Experience",
        description:
          "Research-led UX and UI that make complex products simple and desirable.",
        core: true,
      },
      {
        slug: "design-systems-interface",
        title: "Design Systems & Interface Engineering",
        description:
          "Reusable design systems and polished interfaces that ship consistently at scale.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    summary:
      "Foundations that keep products fast, secure, and ready for demand spikes.",
    services: [
      {
        slug: "cloud-infrastructure-devops",
        title: "Cloud Infrastructure & DevOps",
        description:
          "Cloud, CI/CD, and observability setups engineered for reliability and speed.",
        core: true,
      },
      {
        slug: "scalable-systems-architecture",
        title: "Scalable Systems Architecture",
        description:
          "Architectures designed to grow with your users—without costly rewrites later.",
      },
    ],
  },
  {
    id: "growth",
    title: "Growth",
    summary:
      "Align technology, strategy, and marketing so digital investments actually move revenue.",
    services: [
      {
        slug: "digital-transformation-consulting",
        title: "Digital Transformation Consulting",
        description:
          "Roadmaps and execution plans to modernize products, process, and platforms.",
        core: true,
      },
      {
        slug: "technology-strategy-consulting",
        title: "Technology Strategy & Business Consulting",
        description:
          "Clear tech choices tied to business outcomes, budgets, and timelines.",
      },
      {
        slug: "digital-marketing-growth",
        title: "Digital Marketing & Growth Strategy",
        description:
          "Acquisition, retention, and growth systems that compound over time.",
        core: true,
      },
    ],
  },
];

/** Flattened list of every service */
export const services: ServiceItem[] = serviceCategories.flatMap(
  (category) => category.services,
);

/** Homepage + footer recommendation set */
export const coreServices: ServiceItem[] = services.filter((s) => s.core);
