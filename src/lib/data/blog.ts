export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  categories: string[];
  readingTime: string;
  /** ISO date for sorting/display */
  publishedAt: string;
  /**
   * Full article markdown. Leave empty until content is provided.
   * Use H1, H2, H3 only when writing.
   */
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-business-needs-digital-transformation-in-2026",
    title: "Why Every Business Needs Digital Transformation in 2026",
    excerpt:
      "How growing companies use digital transformation to cut inefficiency, compete faster, and prepare for the next decade of business.",
    categories: ["Digital Transformation", "Strategy"],
    readingTime: "6 min read",
    publishedAt: "2026-01-08",
    content: `## Introduction

The business landscape in 2026 is more competitive than ever. Customers expect faster service, seamless experiences, and instant access to information. Businesses that still rely on manual processes, paperwork, spreadsheets, and disconnected systems are finding it increasingly difficult to compete.

Digital transformation is no longer a luxury reserved for large enterprises. It has become a necessity for businesses of every size.

## What Is Digital Transformation?

Digital transformation is the process of using technology to improve business operations, customer experiences, and decision-making.

Examples include:

- Replacing paper records with digital systems.
- Automating repetitive tasks.
- Moving operations to cloud platforms.
- Using data analytics for business decisions.
- Implementing CRM and ERP systems.

## Why Businesses Are Digitizing

### Increased Efficiency

Employees spend less time on repetitive administrative work and more time on activities that generate value.

### Better Customer Experience

Customers expect quick responses, online services, and personalized experiences.

### Data-Driven Decisions

Modern systems provide valuable insights that help businesses make smarter decisions.

### Improved Scalability

Digital businesses can grow without proportionally increasing operational costs.

## Industries Being Transformed

- Healthcare
- Education
- Retail
- Manufacturing
- Logistics
- Financial Services

## Conclusion

Businesses that embrace digital transformation gain efficiency, improve customer satisfaction, and position themselves for long-term growth. The question is no longer whether businesses should digitize, but how quickly they can begin.`,
  },
  {
    slug: "how-ai-integration-can-transform-existing-businesses",
    title: "How AI Integration Can Transform Existing Businesses",
    excerpt:
      "Practical ways established companies embed AI into operations, products, and customer experience—without rewriting everything.",
    categories: ["AI & Automation", "Business Growth"],
    readingTime: "7 min read",
    publishedAt: "2026-01-15",
    content: `## Introduction

Artificial Intelligence has moved beyond research labs and technology companies. Today, businesses of all sizes can integrate AI into their existing systems to improve productivity, reduce costs, and enhance customer experiences.

The best part is that businesses do not need to rebuild their systems from scratch to benefit from AI.

## AI Applications for Existing Businesses

### Customer Support Automation

AI-powered chatbots can answer common questions, handle support requests, and provide 24/7 customer assistance.

### Intelligent Data Analysis

AI can analyze large datasets and identify trends that would be difficult for humans to detect manually.

### Personalized Recommendations

Retail businesses can recommend products based on customer behavior and preferences.

### Workflow Automation

AI can automate tasks such as invoice processing, appointment scheduling, and email categorization.

## Benefits of AI Integration

### Reduced Operational Costs

Automation decreases the need for repetitive manual work.

### Faster Decision Making

Businesses can access insights in real time.

### Improved Customer Satisfaction

Customers receive quicker responses and more personalized experiences.

### Increased Productivity

Employees can focus on higher-value tasks rather than routine activities.

## Conclusion

AI is no longer a future technology. Businesses that integrate AI today gain a significant competitive advantage and prepare themselves for the next generation of digital innovation.`,
  },
  {
    slug: "why-custom-software-beats-off-the-shelf-solutions",
    title: "Why Custom Software Beats Off-The-Shelf Solutions",
    excerpt:
      "When packaged tools hit a wall, custom software becomes a competitive advantage—not just another IT expense.",
    categories: ["Software Development", "Enterprise"],
    readingTime: "6 min read",
    publishedAt: "2026-01-22",
    content: `## Introduction

When businesses need software, they often face a common decision: purchase an existing solution or build custom software tailored to their needs.

While off-the-shelf products may appear cheaper initially, custom software often delivers greater value over time.

## Limitations of Off-The-Shelf Software

### Unnecessary Features

Businesses often pay for features they never use.

### Missing Functionality

Critical business requirements may not be supported.

### Limited Flexibility

Companies must adapt their processes to the software instead of the software adapting to the business.

### Integration Challenges

Many third-party systems struggle to communicate with each other effectively.

## Advantages of Custom Software

### Built Around Your Processes

Custom software reflects the way your business actually operates.

### Scalability

As the company grows, the software evolves with it.

### Competitive Advantage

Unique software capabilities can differentiate businesses from competitors.

### Ownership and Control

Businesses control features, updates, and future development priorities.

## Conclusion

Custom software is an investment in efficiency, flexibility, and long-term growth. For businesses with unique workflows and ambitious goals, it often becomes the smarter strategic choice.`,
  },
  {
    slug: "how-saas-products-are-changing-modern-businesses",
    title: "How SaaS Products Are Changing Modern Businesses",
    excerpt:
      "Why subscription software platforms are reshaping how companies sell, scale, and deliver value to customers.",
    categories: ["SaaS", "Product"],
    readingTime: "7 min read",
    publishedAt: "2026-01-29",
    content: `## Introduction

Software as a Service (SaaS) has transformed how businesses purchase, deploy, and use technology.

Instead of expensive software installations and maintenance costs, businesses can now access powerful solutions through simple monthly subscriptions.

## Why SaaS Is Growing

### Lower Initial Costs

Businesses avoid large upfront investments.

### Accessibility

Employees can access systems from anywhere with an internet connection.

### Automatic Updates

Software providers handle maintenance, security patches, and upgrades.

### Faster Deployment

Businesses can begin using solutions immediately without lengthy installation processes.

## Benefits of SaaS

### Predictable Costs

Subscription models simplify budgeting.

### Better Collaboration

Teams can work together in real time regardless of location.

### Improved Security

Professional SaaS providers often invest heavily in cybersecurity.

### Scalability

Organizations can add users and features as they grow.

## Examples of SaaS Products

- CRM Systems
- School Management Systems
- Accounting Platforms
- Project Management Tools
- Healthcare Management Solutions

## Conclusion

SaaS products have lowered barriers to technology adoption and allowed businesses of all sizes to compete more effectively in the digital economy.`,
  },
  {
    slug: "why-your-business-needs-a-mobile-app",
    title: "Why Your Business Needs a Mobile App",
    excerpt:
      "What a mobile product unlocks for customer engagement, retention, and new revenue—beyond just having an app icon.",
    categories: ["Mobile", "Product"],
    readingTime: "6 min read",
    publishedAt: "2026-02-05",
    content: `## Introduction

Smartphones have become the primary way people interact with businesses. Customers shop, communicate, book services, and manage finances directly from their mobile devices.

For many businesses, a mobile app is no longer optional.

## Benefits of Mobile Applications

### Improved Customer Engagement

Mobile apps create a direct communication channel between businesses and customers.

### Better Accessibility

Customers can access services anytime and anywhere.

### Increased Brand Visibility

A business that appears on a customer's home screen remains visible every day.

### Personalized Experiences

Apps can provide personalized content, recommendations, and notifications.

## Business Applications

### Retail

Mobile shopping experiences increase customer retention.

### Healthcare

Patients can schedule appointments and access records.

### Education

Students can access courses and educational content.

### Service Businesses

Bookings and customer support become easier and faster.

## Competitive Advantage

Businesses that adopt mobile technology often outperform competitors that rely only on websites or traditional channels.

## Conclusion

Mobile applications have become one of the most effective tools for customer engagement, operational efficiency, and business growth. Companies that invest in mobile experiences today position themselves for success in an increasingly mobile-first world.`,
  },
  {
    slug: "how-good-ui-ux-increases-revenue",
    title: "How Good UI/UX Increases Revenue",
    excerpt:
      "Clear design is not decoration—it reduces friction, builds trust, and directly improves conversion and retention.",
    categories: ["Design", "Growth"],
    readingTime: "6 min read",
    publishedAt: "2026-02-12",
    content: `## Introduction

Many businesses consider UI/UX design to be purely about aesthetics. In reality, user experience directly impacts customer satisfaction, conversion rates, retention, and ultimately revenue.

A beautiful product that is difficult to use loses customers. A well-designed product that solves problems efficiently creates loyal customers and drives growth.

## What Is UI and UX?

UI (User Interface) refers to the visual elements users interact with, including buttons, layouts, and colors.
UX (User Experience) refers to the overall experience users have while using a product or service.

Together, they determine how customers feel when interacting with your business.

## Better UX Means Higher Conversion Rates

Customers abandon websites and applications when they:

- Cannot find information quickly.
- Face complicated checkout processes.
- Experience slow loading times.
- Encounter confusing navigation.

Simplifying these experiences can significantly increase conversions.

## Good Design Builds Trust

Users often judge a business within seconds of visiting its website.

A professional interface communicates:

- Credibility
- Reliability
- Quality
- Attention to detail

Poor design can make even an excellent business appear unprofessional.

## Reduced Customer Support Costs

Intuitive interfaces reduce the number of support requests by allowing customers to solve problems independently.

This improves efficiency and lowers operational costs.

## Mobile Experience Matters

With most users browsing on smartphones, responsive and mobile-friendly design has become essential.

Businesses that ignore mobile experiences risk losing a large portion of their audience.

## Conclusion

UI/UX design is not an expense. It is an investment that improves customer satisfaction, increases conversions, and drives revenue growth.`,
  },
  {
    slug: "why-seo-is-still-critical-for-businesses-in-2026",
    title: "Why SEO Is Still Critical for Businesses in 2026",
    excerpt:
      "Search still drives high-intent buyers. Here’s why SEO remains a durable growth channel in an AI-shaped web.",
    categories: ["SEO & Marketing", "Growth"],
    readingTime: "7 min read",
    publishedAt: "2026-02-19",
    content: `## Introduction

Despite the rise of social media and paid advertising, search engines remain one of the most valuable sources of high-quality traffic.

When customers need a product or service, their first action is often a search query.

Businesses that appear in those search results gain a significant advantage.

## What Is SEO?

Search Engine Optimization (SEO) is the process of improving a website's visibility in search engine results.

The goal is simple:

Help potential customers find your business when they are actively looking for solutions.

## Why SEO Matters

### Long-Term Return on Investment

Unlike paid advertisements, organic traffic continues generating results long after content is published.

### High Purchase Intent

Users searching for products or services often have immediate needs and stronger buying intent.

### Brand Credibility

Businesses ranking highly in search results are often perceived as more trustworthy.

### Lower Customer Acquisition Costs

Over time, SEO can become one of the most cost-effective marketing channels.

## Components of Modern SEO

- Technical SEO
- Content Marketing
- Mobile Optimization
- Website Performance
- Local SEO
- Backlink Building

## Local Businesses Benefit Too

SEO is not only for global companies.

Local businesses can attract nearby customers by optimizing for location-based searches.

## Conclusion

SEO continues to be one of the most powerful tools for generating sustainable business growth and attracting high-quality leads.`,
  },
  {
    slug: "the-business-value-of-cloud-infrastructure-and-devops",
    title: "The Business Value of Cloud Infrastructure and DevOps",
    excerpt:
      "Cloud and DevOps are not just engineering concerns—they affect speed, reliability, cost, and how fast you can ship.",
    categories: ["Cloud & DevOps", "Infrastructure"],
    readingTime: "7 min read",
    publishedAt: "2026-02-26",
    content: `## Introduction

Modern businesses require systems that are reliable, secure, and scalable.

Cloud infrastructure and DevOps practices help organizations achieve these goals while reducing operational complexity.

## What Is Cloud Infrastructure?

Cloud infrastructure allows businesses to run applications and services on remote servers instead of maintaining physical hardware.

Examples include:

- Cloud hosting
- Databases
- Storage solutions
- Content delivery networks

## What Is DevOps?

DevOps combines software development and IT operations to improve deployment speed, reliability, and collaboration.

Its goal is to deliver software faster and more efficiently.

## Benefits for Businesses

### Faster Deployments

New features and updates can be delivered quickly and safely.

### Improved Reliability

Automated monitoring and backup systems reduce downtime.

### Better Scalability

Infrastructure can adapt to increasing demand without major disruptions.

### Enhanced Security

Modern cloud providers invest heavily in security and compliance.

### Cost Optimization

Businesses only pay for the resources they actually use, reducing infrastructure waste.

## Competitive Advantage

Organizations that deploy faster and scale efficiently can respond more quickly to market opportunities.

## Conclusion

Cloud infrastructure and DevOps enable businesses to innovate faster, operate more efficiently, and prepare for future growth.`,
  },
  {
    slug: "signs-your-business-has-outgrown-spreadsheets-and-manual-processes",
    title:
      "Signs Your Business Has Outgrown Spreadsheets and Manual Processes",
    excerpt:
      "Spreadsheets got you here. These warning signs mean your operations need systems that scale with the business.",
    categories: ["Digital Transformation", "Operations"],
    readingTime: "6 min read",
    publishedAt: "2026-03-05",
    content: `## Introduction

Spreadsheets are excellent tools for small teams and simple tasks. However, as businesses grow, manual processes become difficult to manage and increasingly error-prone.

Recognizing the warning signs early can prevent costly inefficiencies.

## Sign 1: Data Exists in Multiple Places

Employees maintain separate spreadsheets that often contain conflicting information.

This creates confusion and delays.

## Sign 2: Reporting Takes Too Long

If generating reports requires hours of manual work, your business may need centralized systems and automation.

## Sign 3: Human Errors Are Increasing

Manual data entry inevitably leads to mistakes.

Errors in invoices, inventory, or customer records can become expensive.

## Sign 4: Collaboration Is Difficult

Multiple employees editing different files often leads to version conflicts and lost information.

## Sign 5: Customers Experience Delays

Operational inefficiencies eventually affect customer experience.

Slow responses and delayed services reduce satisfaction.

## Sign 6: Growth Feels Difficult

When every new employee increases complexity, systems rather than people become the bottleneck.

## The Solution

Businesses should consider:

- CRM systems
- ERP solutions
- Workflow automation
- Cloud-based platforms

## Conclusion

Spreadsheets help businesses start. Digital systems help businesses scale.`,
  },
  {
    slug: "how-automation-can-save-businesses-thousands-of-hours",
    title: "How Automation Can Save Businesses Thousands of Hours",
    excerpt:
      "Where smart automation pays for itself—workflow examples that reclaim time for teams that are already stretched.",
    categories: ["AI & Automation", "Operations"],
    readingTime: "7 min read",
    publishedAt: "2026-03-12",
    content: `## Introduction

Many employees spend a significant portion of their workday performing repetitive tasks.

Automation allows businesses to eliminate these inefficiencies and focus on activities that generate value.

## Common Tasks Suitable for Automation

- Invoice generation
- Appointment reminders
- Email notifications
- Report creation
- Customer onboarding
- Inventory tracking

## Benefits of Automation

### Increased Productivity

Employees spend more time solving problems and less time performing repetitive work.

### Reduced Errors

Automated processes follow predefined rules and reduce human mistakes.

### Faster Operations

Tasks that previously took hours can often be completed within seconds.

### Better Customer Experience

Customers receive quicker responses and more consistent service.

## Real-World Examples

### Healthcare

Appointment confirmations and reminders can be automated.

### Education

Attendance reports and fee reminders can be generated automatically.

### Retail

Inventory updates and order notifications can run without human intervention.

## Financial Impact

Saving just one hour per employee each day can result in thousands of productive hours recovered annually.

## Conclusion

Automation is not about replacing employees. It is about enabling teams to focus on higher-value work while technology handles repetitive tasks efficiently.`,
  },
  {
    slug: "why-every-growing-company-needs-a-scalable-web-platform",
    title: "Why Every Growing Company Needs a Scalable Web Platform",
    excerpt:
      "Your website and web apps must grow with demand. What “scalable” really means for performance, team velocity, and cost.",
    categories: ["Web Platforms", "Engineering"],
    readingTime: "6 min read",
    publishedAt: "2026-03-19",
    content: `## Introduction

Many businesses start with simple websites that work well in the early stages. However, as customer demand grows, these systems often struggle to handle increased traffic, new features, and operational complexity.

A scalable web platform allows businesses to grow without rebuilding their technology from scratch.

## What Is Scalability?

Scalability refers to a system's ability to handle increasing numbers of users, transactions, and data while maintaining performance and reliability.

## Problems with Non-Scalable Systems

- Slow website performance.
- Frequent downtime during traffic spikes.
- Difficult integrations with third-party services.
- Expensive redesigns and migrations.

## Benefits of Scalable Platforms

### Support Business Growth

Your platform grows with your customer base.

### Faster Feature Development

Modern architectures make it easier to launch new products and services.

### Better User Experience

Fast and reliable platforms improve customer satisfaction.

### Lower Long-Term Costs

Building scalable systems early prevents expensive rebuilds later.

## Conclusion

A scalable web platform is not just a technical investment. It is an investment in future business growth.`,
  },
  {
    slug: "ai-automation-opportunities-most-businesses-ignore",
    title: "AI Automation Opportunities Most Businesses Ignore",
    excerpt:
      "Beyond chatbots: overlooked AI use cases in sales, operations, support, and decision-making that create real ROI.",
    categories: ["AI & Automation", "Strategy"],
    readingTime: "7 min read",
    publishedAt: "2026-03-26",
    content: `## Introduction

When businesses think about AI, they often imagine chatbots and virtual assistants. However, many valuable automation opportunities remain overlooked.

These hidden opportunities can significantly improve productivity and reduce operational costs.

## Internal Reporting

Generating reports manually consumes valuable employee time.

AI can automatically collect, analyze, and generate reports in minutes.

## Email Management

AI can categorize emails, prioritize important messages, and draft responses.

## Invoice Processing

Invoices can be extracted, validated, and entered into systems automatically.

## Customer Follow-Ups

AI can automatically send reminders, follow-ups, and notifications based on customer behavior.

## Knowledge Management

Internal documentation and company policies can be converted into searchable AI assistants.

## Recruitment Processes

Resume screening and candidate shortlisting can be partially automated.

## Conclusion

Businesses that identify hidden automation opportunities often gain advantages over competitors focused only on customer-facing AI solutions.`,
  },
  {
    slug: "how-technology-can-scale-small-businesses-into-enterprises",
    title: "How Technology Can Scale Small Businesses into Enterprises",
    excerpt:
      "The systems and platforms that help small teams operate with the leverage of much larger organizations.",
    categories: ["Business Growth", "Strategy"],
    readingTime: "7 min read",
    publishedAt: "2026-04-02",
    content: `## Introduction

Many successful enterprises started as small businesses with limited resources.

Technology often becomes the key factor that enables rapid growth and expansion.

## Standardized Processes

Technology reduces dependency on manual work and individual employees.

## Better Data Management

Centralized systems improve decision-making and visibility across the organization.

## Automation

Routine tasks can be automated, allowing teams to focus on growth activities.

## Improved Customer Experience

Technology enables faster responses and personalized services.

## Access to Global Markets

Digital platforms allow businesses to serve customers beyond local boundaries.

## Scalability

Modern cloud systems support growth without requiring major infrastructure investments.

## Conclusion

Technology allows small businesses to operate with the efficiency and capabilities of much larger organizations.`,
  },
  {
    slug: "the-cost-of-delaying-digital-transformation",
    title: "The Cost of Delaying Digital Transformation",
    excerpt:
      "Waiting rarely saves money. The hidden costs of outdated processes—and why delayed modernization becomes expensive.",
    categories: ["Digital Transformation", "Strategy"],
    readingTime: "6 min read",
    publishedAt: "2026-04-09",
    content: `## Introduction

Many businesses delay technology investments because they view digital transformation as an expense rather than an opportunity.

However, delaying modernization often creates larger costs in the future.

## Lost Productivity

Employees continue spending time on inefficient manual tasks.

## Missed Revenue Opportunities

Slow processes and outdated systems reduce competitiveness.

## Higher Operational Costs

Manual operations become increasingly expensive as organizations grow.

## Customer Frustration

Customers expect fast and seamless experiences.

Businesses that fail to meet these expectations risk losing customers.

## Competitive Disadvantage

Competitors adopting modern technologies can innovate faster and operate more efficiently.

## Conclusion

The cost of delaying digital transformation is often much greater than the cost of implementing it.`,
  },
  {
    slug: "why-businesses-should-invest-in-custom-crm-systems",
    title: "Why Businesses Should Invest in Custom CRM Systems",
    excerpt:
      "When off-the-shelf CRM no longer fits how you sell, a tailored system becomes infrastructure for revenue.",
    categories: ["Software Development", "Sales"],
    readingTime: "6 min read",
    publishedAt: "2026-04-16",
    content: `## Introduction

Customer relationships are one of the most valuable assets any business owns.

Managing these relationships effectively requires more than spreadsheets and disconnected tools.

## What Is a CRM?

Customer Relationship Management systems help businesses manage customer interactions, sales pipelines, support requests, and communication history.

## Benefits of Custom CRM Systems

### Tailored Workflows

The system matches your business processes rather than forcing your team to adapt.

### Better Customer Insights

Businesses gain a complete view of customer behavior and preferences.

### Improved Collaboration

Sales, support, and management teams work from a single source of truth.

### Automation

Follow-ups, reminders, and notifications can be automated.

### Scalability

The CRM evolves as business requirements change.

## Conclusion

Custom CRM solutions improve customer experiences while increasing operational efficiency and business growth.`,
  },
  {
    slug: "common-technology-mistakes-growing-businesses-make",
    title: "Common Technology Mistakes Growing Businesses Make",
    excerpt:
      "Tool sprawl, rushed builds, and skipped foundations—mistakes that slow scale and how to avoid them.",
    categories: ["Strategy", "Engineering"],
    readingTime: "7 min read",
    publishedAt: "2026-04-23",
    content: `## Introduction

Technology decisions made during the early stages of growth can affect businesses for years.

Avoiding common mistakes helps companies scale more efficiently.

## Choosing Based on Price Alone

The cheapest solution is rarely the most cost-effective long term.

## Ignoring Scalability

Systems should support future growth rather than current requirements only.

## Delaying Automation

Manual processes become more expensive as businesses expand.

## Poor Security Practices

Security should be integrated from the beginning rather than added later.

## Lack of Integration

Disconnected systems create duplicate work and inconsistent data.

## Ignoring User Experience

Complex systems reduce employee productivity and customer satisfaction.

## Conclusion

Strategic technology decisions create competitive advantages while poor decisions create technical debt.`,
  },
  {
    slug: "how-saas-can-create-recurring-revenue-opportunities",
    title: "How SaaS Can Create Recurring Revenue Opportunities",
    excerpt:
      "Turning expertise and products into subscription revenue—what it takes to build a SaaS opportunity that lasts.",
    categories: ["SaaS", "Business Growth"],
    readingTime: "7 min read",
    publishedAt: "2026-04-30",
    content: `## Introduction

Traditional businesses often depend on one-time sales.

SaaS businesses operate differently by generating recurring subscription revenue.

## Predictable Income

Monthly subscriptions create stable cash flow and improve financial planning.

## Higher Customer Lifetime Value

Long-term customer relationships increase revenue over time.

## Easier Upselling

Businesses can offer additional features and premium plans.

## Continuous Improvement

Products evolve continuously through updates and feature releases.

## Stronger Customer Relationships

Subscription models encourage ongoing engagement and support.

## Examples of SaaS Models

- School Management Systems
- Healthcare Platforms
- Accounting Software
- Project Management Tools

## Conclusion

Recurring revenue models provide stability, scalability, and long-term business growth opportunities.`,
  },
  {
    slug: "future-proofing-your-business-through-technology",
    title: "Future-Proofing Your Business Through Technology",
    excerpt:
      "A practical approach to building resilient systems, teams, and products that adapt as markets and tech change.",
    categories: ["Strategy", "Digital Transformation"],
    readingTime: "7 min read",
    publishedAt: "2026-05-07",
    content: `## Introduction

Markets evolve rapidly and customer expectations continue to rise.

Businesses that fail to adapt risk becoming irrelevant.

## Invest in Scalable Systems

Choose technologies that support long-term growth.

## Adopt Cloud Infrastructure

Cloud platforms provide flexibility and resilience.

## Embrace Automation

Automation improves efficiency and reduces operational costs.

## Prioritize Data

Data-driven decisions help businesses respond quickly to market changes.

## Focus on Security

Cybersecurity should remain a strategic priority.

## Encourage Innovation

Organizations that experiment with new technologies adapt more successfully.

## Build for Change

Technology strategies should prioritize flexibility rather than short-term optimization.

## Conclusion

Future-proof businesses are not those that predict the future perfectly. They are the ones that build systems capable of adapting to change quickly and efficiently.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.flatMap((post) => post.categories))].sort();
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
