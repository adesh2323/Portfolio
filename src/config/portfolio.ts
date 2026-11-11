import type { PortfolioConfig } from '../types';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Adesh Vishwakarma',
    initials: 'AV',
    title: 'Senior Full Stack Developer (Node.js, React.js, AWS, Agentic AI)',
    eyebrow: 'SENIOR FULL STACK DEVELOPER · NODE.JS, REACT.JS, AWS & AGENTIC AI',
    headline: 'Building Scalable Cloud Backends, Event-Driven Systems & Agentic AI.',
    heroParagraph:
      'Full stack developer with 8 years of experience, including 6 years building Node.js backends (Express and NestJS) alongside React.js front ends. I build event-driven services on Apache Kafka and AWS SQS/SNS, define AWS infrastructure with CDK and CloudFormation, deploy to Kubernetes, and engineer agentic AI workflows with RAG.',
    location: 'Indore, Madhya Pradesh, India',
    availability: 'Based in Indore, India · Open to opportunities across India & Remote',
    totalYearsExp: '8+ Years',
    backendYearsExp: '6+ Years Backend',
    email: 'adesh2323@gmail.com',
    phone: '+91 9584515823',
    linkedinUrl: 'https://linkedin.com/in/adesh-vishwakarma',
    githubUrl: 'https://github.com/adesh2323',
    resumePath: '/resume.pdf',
  },
  about: {
    paragraphs: [
      "I am a Senior Full Stack Developer with 8 years of overall software development experience, including 6 years focused on architecting Node.js backends (Express and NestJS) alongside React.js front ends. I build event-driven distributed services on Apache Kafka and AWS SQS/SNS, define repeatable cloud infrastructure using AWS CDK and CloudFormation, and configure containerized deployments to Kubernetes.",
      "My data engineering foundation spans PostgreSQL, MongoDB, MySQL, MS SQL Server, and DynamoDB—covering everything from normalized schema design to low-latency indexing and query plan tuning. Alongside hands-on technical architecture, I actively lead and mentor engineering teams: planning and dividing sprint work, running rigorous code reviews, establishing testing standards, and unblocking teammates to ensure releases ship reliably on schedule.",
      "I have shipped enterprise platforms end-to-end, ranging from large-scale SaaS and eCommerce systems to a published points-based loyalty application on the Shopify App Store. In the AI space, I develop agentic workflows, LLM tool/function calling with OpenAI APIs, and Retrieval-Augmented Generation (RAG) using pgvector. I care deeply about tested, maintainable code and tight collaboration with design, QA, and product teams.",
    ],
    focusAreas: [
      'Node.js backends (Express & NestJS) and modern React.js frontend interfaces',
      'Event-driven architectures using Apache Kafka and AWS SQS/SNS message brokers',
      'AWS Serverless & Infrastructure as Code (CDK, CloudFormation, Lambda, ECS, DynamoDB)',
      'Containerization & deployment pipelines with Docker, Kubernetes, and CI/CD',
      'Multi-database systems: PostgreSQL (pgvector), MongoDB, MySQL, MS SQL, DynamoDB, Redis',
      'Agentic AI workflows, LLM tool/function calling, LangChain, LangGraph, and RAG',
    ],
    stats: [
      { label: 'Total Dev Experience', value: '8+ Yrs', description: 'Software engineering across systems' },
      { label: 'Backend & Full Stack', value: '6+ Yrs', description: 'Node.js, React.js, AWS, SQL/NoSQL' },
      { label: 'Featured Systems & Apps', value: '7+', description: 'SaaS, Shopify App, eCommerce & AI' },
      { label: 'Location & Availability', value: 'Indore, India', description: 'Open across India & Remote' },
    ],
  },
  skills: [
    {
      id: 'backend',
      category: 'Backend & APIs',
      items: [
        'Node.js',
        'Express.js',
        'NestJS',
        'REST APIs',
        'GraphQL',
        'Microservices',
        'Event-Driven Architecture',
        'WebSockets',
        'Apache Kafka',
        'AWS SQS',
        'AWS SNS',
        'TypeScript',
      ],
    },
    {
      id: 'frontend',
      category: 'Frontend & UI',
      items: [
        'React.js',
        'React Hooks',
        'State Management',
        'JavaScript (ES6+)',
        'TypeScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'Material UI (MUI)',
        'Responsive Design',
      ],
    },
    {
      id: 'cloud-devops',
      category: 'Cloud & DevOps',
      items: [
        'AWS Lambda',
        'API Gateway',
        'Amazon EC2',
        'Amazon ECS',
        'Amazon S3',
        'Amazon SQS / SNS',
        'DynamoDB',
        'Amazon CloudWatch',
        'AWS CDK',
        'CloudFormation',
        'Serverless',
        'Docker',
        'Kubernetes',
        'CI/CD Pipelines',
        'Git & GitHub',
      ],
    },
    {
      id: 'databases',
      category: 'Databases & Storage',
      items: [
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'MS SQL Server',
        'DynamoDB',
        'Redis Caching',
        'Schema Design',
        'Database Indexing',
        'Query Optimization',
        'ORM & Raw SQL',
        'pgvector',
      ],
    },
    {
      id: 'ai-genai',
      category: 'AI & Agentic Systems',
      items: [
        'Agentic AI',
        'AI Agents',
        'LangChain',
        'LangGraph',
        'Tool & Function Calling',
        'Generative AI',
        'LLM Integration',
        'OpenAI API (GPT)',
        'Prompt Engineering',
        'RAG (Retrieval-Augmented Generation)',
        'Vector Databases',
        'pgvector',
      ],
    },
    {
      id: 'architecture-security',
      category: 'Architecture & Security',
      items: [
        'Microservices Design',
        'Event-Driven Design',
        'Serverless Architecture',
        'System Design',
        'Design Patterns',
        'Scalable API Design',
        'Third-Party Integrations',
        'OAuth 2.0',
        'JWT',
        'Session Management',
        'API Security',
      ],
    },
    {
      id: 'ecommerce-process',
      category: 'E-commerce & Engineering Process',
      items: [
        'Shopify App Development',
        'Shopify APIs & Webhooks',
        'Loyalty & Rewards Systems',
        'AWS CloudWatch Logging',
        'Performance Tuning',
        'Unit Testing',
        'Integration Testing',
        'Code Reviews & Mentoring',
        'Sprint Planning (Agile/Scrum)',
        'Cross-Team Collaboration',
      ],
    },
  ],
  experience: [
    {
      role: 'Senior Software Engineer',
      company: 'Mindpath Tech Pvt. Ltd.',
      period: 'Jan 2022 – Present',
      location: 'Indore, MP, India',
      type: 'Full-time',
      bullets: [
        'Build backend services and APIs in NestJS and TypeScript on AWS serverless; the endpoints serve both web and mobile clients.',
        'Moved inter-service communication onto Apache Kafka and AWS SQS/SNS, which loosened coupling between services and made them hold up better under production load.',
        'Define Lambda, API Gateway, DynamoDB, EC2 and S3 resources in AWS CDK so deployments are repeatable and run through CI/CD pipelines.',
        'Configure Kubernetes deployments and Docker-based CI/CD pipelines for consistent, repeatable releases.',
        'Work with DynamoDB and MongoDB to build secure, highly available applications, with a focus on performance and data integrity.',
        'Integrated third-party REST APIs (Hippo, Icabbi, Zoho) for dispatch and CRM workflows, covering authentication, error handling and data synchronization.',
        'Set unit and integration testing standards for the team, and trace and fix production performance problems.',
        'Guide and mentor developers on the team: split sprint work, run code reviews and help resolve technical blockers.',
        'Work with frontend, QA and product teams in Agile/Scrum (sprint planning, standups, retrospectives) and deliver on schedule.',
      ],
      technologies: ['NestJS', 'TypeScript', 'AWS Serverless', 'Apache Kafka', 'AWS SQS/SNS', 'AWS CDK', 'Kubernetes', 'Docker', 'DynamoDB', 'MongoDB', 'REST APIs'],
    },
    {
      role: 'Software Developer',
      company: 'Bit-7 Informatics Pvt. Ltd.',
      period: 'Sep 2018 – Dec 2021',
      location: 'Bhopal, MP, India',
      type: 'Full-time',
      bullets: [
        'Built REST APIs for core business logic using Node.js, PHP, JavaScript, MySQL and MongoDB.',
        'Designed normalized SQL schemas and tuned queries with indexing to support complex business rules.',
        'Turned business requirements into technical specifications and REST API designs, working with stakeholders in an Agile setup.',
        'Tested, debugged and optimized production applications, reducing load times and improving reliability.',
      ],
      technologies: ['Node.js', 'PHP', 'JavaScript', 'MySQL', 'MongoDB', 'REST APIs', 'SQL Indexing', 'Agile/Scrum'],
    },
    {
      role: 'Guest Lecturer, Computer Science',
      company: 'Government Polytechnic Engineering College',
      period: 'Jul 2014 – Jun 2015',
      location: 'Nowgong, MP, India',
      type: 'Academic',
      bullets: [
        'Taught programming, data structures and web technologies to undergraduate engineering students.',
        'Wrote structured course materials, conducted programming labs, and mentored students on academic projects and software careers.',
      ],
      technologies: ['Data Structures', 'C/C++', 'Web Technologies', 'Programming Paradigms', 'Algorithms'],
    },
  ],
  projects: [
    {
      id: 'zizo-performance-platform',
      name: 'ZIZO — Performance Management Platform',
      subtitle: 'Real-time Analytics, Event-Driven Microservices & Cloud Platform',
      category: 'Cloud & Backend SaaS',
      statusBadge: 'Production Platform',
      liveDemoUrl: 'https://playzizo.com',
      description:
        'A comprehensive enterprise performance management platform with real-time analytics, auto-scaling event-driven microservices on AWS Lambda/ECS, and an interactive React management application.',
      tech: ['Node.js', 'TypeScript', 'React.js', 'PostgreSQL', 'AWS Lambda', 'ECS', 'AWS CDK', 'CloudWatch', 'Kafka', 'SQS', 'API Gateway'],
      problemStatement:
        'Organizations needed a unified real-time system to track workforce performance metrics, requiring low-latency analytics aggregation, reliable event ingestion across microservices, and auto-scaling infrastructure without high idle costs.',
      constraintsAndTradeoffs: [
        'Handling high-throughput telemetry events without database contention or write bottlenecks.',
        'Maintaining decoupled microservice boundaries with Apache Kafka and AWS SQS.',
        'Enforcing reproducible multi-environment cloud infrastructure using AWS CDK.',
        'Building responsive analytics dashboards with sub-second query rendering in PostgreSQL.',
      ],
      architectureOverview:
        'Exposed services through Amazon API Gateway and AWS Lambda with all infrastructure defined in AWS CDK. Core event-driven microservices operate on Apache Kafka and AWS SQS deployed on Lambda and ECS. PostgreSQL handles structured performance metrics with query tuning, monitored proactively via CloudWatch.',
      architectureSteps: [
        { title: 'React Client', description: 'Management dashboard for KPIs and platform settings (playzizo.com)', icon: 'monitor' },
        { title: 'API Gateway', description: 'Routes client requests with authentication and rate-limiting', icon: 'shield-check' },
        { title: 'Lambda & ECS', description: 'Stateless Node.js/TS service layer with auto-scaling CDK configuration', icon: 'cpu' },
        { title: 'Kafka & SQS', description: 'Decoupled event-driven message bus for inter-service communication', icon: 'layers' },
        { title: 'PostgreSQL DB', description: 'Normalized metric tables with optimized analytics indexing', icon: 'database' },
        { title: 'CloudWatch', description: 'Centralized logs and telemetry for tracing slow paths and errors', icon: 'activity' },
      ],
      technologyDecisions: [
        {
          title: 'AWS CDK Infrastructure as Code',
          reason: 'Enabled complete environments to be recreated identically across staging and production through CI/CD pipelines.',
        },
        {
          title: 'Apache Kafka & AWS SQS event-driven messaging',
          reason: 'Loosened service coupling and enabled services to hold up reliably under heavy production load.',
        },
        {
          title: 'PostgreSQL query tuning for analytics',
          reason: 'Optimized complex SQL execution plans behind analytics views to maintain low response times.',
        },
      ],
      reliabilityAndPerformance: [
        'Configured auto-scaling serverless setup in AWS CDK for cost control and high availability.',
        'Set up CloudWatch monitoring and distributed log groups to spot and trace slow execution paths.',
        'Utilized connection pooling and indexing to support concurrent dashboard analytics requests.',
      ],
      individualContribution: [
        'Designed and built REST APIs for the performance management platform with real-time analytics.',
        'Built event-driven microservices with Kafka and SQS on Lambda and ECS with AWS CDK.',
        'Engineered the React.js application used to manage performance metrics and platform configuration.',
      ],
      outcomes: [
        'Live in production at playzizo.com supporting high-throughput performance tracking.',
        'Decoupled architecture prevented cascading failures during peak evaluation cycles.',
        'Repeatable AWS CDK deployments cut release cycles and infrastructure drift to zero.',
      ],
    },
    {
      id: 'brandlift-shopify-loyalty-app',
      name: 'BrandLift: Points Program — Shopify Loyalty App',
      subtitle: 'Published Shopify App Store Application for Rewards, VIP & Referrals',
      category: 'E-commerce & Shopify App',
      statusBadge: 'Shopify App Store Live',
      liveDemoUrl: 'https://apps.shopify.com/brandlift-loyalty-app',
      description:
        'A full-featured points-based loyalty and rewards application published on the Shopify App Store, allowing merchants to reward customers for purchases, reviews, and social actions with referral programs, VIP tiers, and store credit.',
      tech: ['Node.js', 'TypeScript', 'Shopify App API', 'REST APIs', 'Webhooks', 'OAuth 2.0', 'Klaviyo', 'Postscript', 'Reviews.io'],
      problemStatement:
        'Shopify merchants required an automated, no-code loyalty ecosystem to drive customer retention, with tiered VIP levels, referral incentives, checkout points redemption on Shopify Plus, and deep third-party marketing integrations.',
      constraintsAndTradeoffs: [
        'Strict Shopify OAuth 2.0 security, session token authentication, and app store compliance.',
        'Handling high-velocity webhook bursts during Black Friday / Cyber Monday flash sales.',
        'Seamless synchronization with external marketing and review platforms (Klaviyo, Loox, SMS Bump).',
        'Allowing zero-code customization for merchants while preventing script injection.',
      ],
      architectureOverview:
        'Built with Node.js and TypeScript, the backend integrates with Shopify REST and GraphQL APIs and Webhook endpoints. Points allocation engine executes asynchronous rules for orders, reviews, and referrals. A merchant admin dashboard powers analytics, campaign configurations, and email/SMS triggers.',
      architectureSteps: [
        { title: 'Shopify Storefront', description: 'Customer earns points on purchases, referrals & reviews', icon: 'shopping-cart' },
        { title: 'Shopify Webhooks', description: 'Real-time order and customer events delivered via OAuth 2.0', icon: 'zap' },
        { title: 'Node.js Points Engine', description: 'Calculates points, manages VIP tiers, and generates store credit', icon: 'cpu' },
        { title: 'Merchant Dashboard', description: 'Analytics, configurable point values, and campaign builder', icon: 'monitor' },
        { title: 'Marketing Integrations', description: 'Syncs loyalty data with Klaviyo, Drip, Loox, and Postscript', icon: 'send' },
      ],
      technologyDecisions: [
        {
          title: 'Shopify Webhook event handling',
          reason: 'Handled customer orders, discounts, and point redemptions asynchronously to ensure zero impact on storefront speed.',
        },
        {
          title: 'Tiered subscription model with Shopify Billing',
          reason: 'Structured billing plans and checkout points redemption specifically tailored for Shopify Plus stores.',
        },
        {
          title: 'Direct marketing webhooks (Klaviyo, Drip, SMS Bump)',
          reason: 'Allowed merchants to trigger automated emails and SMS based on loyalty points balances and VIP tier upgrades.',
        },
      ],
      reliabilityAndPerformance: [
        'Idempotent webhook handlers prevented duplicate loyalty points allocations on retried Shopify events.',
        'Cached merchant configurations in Redis to serve storefront widgets in under 30ms.',
        'Engineered point-to-discount checkout conversions compatible with Shopify Plus checkout extensions.',
      ],
      individualContribution: [
        'Built and published the loyalty app on the official Shopify App Store (apps.shopify.com/brandlift-loyalty-app).',
        'Implemented the core points logic for earning, redeeming coupons, and VIP tier calculations.',
        'Developed the merchant dashboard with analytics, campaign controls, and integration connectors.',
      ],
      outcomes: [
        'Successfully verified and published on the official Shopify App Store.',
        'Empowered hundreds of merchants to run loyalty and referral programs with zero code required.',
        'Seamlessly processed millions in merchant gross merchandise volume without points discrepancy.',
      ],
    },
    {
      id: 'sln-custom-ecommerce',
      name: 'SLN — Custom eCommerce Platform',
      subtitle: 'Modular NestJS, GraphQL, Dual-Database Architecture & React Admin',
      category: 'Full Stack eCommerce',
      statusBadge: 'Production Store',
      liveDemoUrl: 'https://slnofficial.com',
      description:
        'A high-performance custom eCommerce platform featuring modular NestJS services, GraphQL and REST APIs for catalog and inventory, dual PostgreSQL and MongoDB data persistence, and a React.js admin operations dashboard.',
      tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'GraphQL', 'MongoDB', 'React.js', 'OAuth 2.0', 'JWT'],
      problemStatement:
        'Standard off-the-shelf eCommerce tools were unable to support complex custom pricing tiers, multi-attribute catalog filtering, and granular inventory synchronization across fulfillment warehouses.',
      constraintsAndTradeoffs: [
        'Architecting a modular backend where catalog, inventory, pricing, and orders could evolve independently.',
        'Using relational and document databases together based on data shape and query patterns.',
        'Securing checkout and payment flows with OAuth 2.0 and JWT authentication.',
        'Providing instant product search and faceted filtering across thousands of SKUs.',
      ],
      architectureOverview:
        'The backend is built in NestJS structured into decoupled domain modules (catalog, inventory, pricing, orders). PostgreSQL stores transactional orders, users, and financial records, while MongoDB handles dynamic catalog attributes and product variations. Both REST and GraphQL endpoints serve web clients and the React admin dashboard.',
      architectureSteps: [
        { title: 'Storefront & Admin', description: 'React.js customer storefront and operations admin dashboard', icon: 'monitor' },
        { title: 'GraphQL & REST APIs', description: 'Dual API layer in NestJS for optimized data querying', icon: 'server' },
        { title: 'Modular Domain Services', description: 'Decoupled modules for Catalog, Pricing, Inventory & Orders', icon: 'layers' },
        { title: 'PostgreSQL + MongoDB', description: 'Relational ACID consistency + flexible document schema', icon: 'database' },
        { title: 'Payment & Fulfillment', description: 'Secure OAuth 2.0 checkout and third-party warehouse sync', icon: 'shield-check' },
      ],
      technologyDecisions: [
        {
          title: 'Modular NestJS architecture',
          reason: 'Separating catalog, inventory, pricing, and orders into distinct modules made each area easier to test, refactor, and maintain.',
        },
        {
          title: 'Dual-database design (PostgreSQL + MongoDB)',
          reason: 'PostgreSQL guaranteed ACID guarantees for checkout and payments; MongoDB provided rapid querying for nested product attributes.',
        },
        {
          title: 'GraphQL alongside REST',
          reason: 'Allowed the storefront to fetch complex nested product variants and inventory in a single roundtrip, eliminating over-fetching.',
        },
      ],
      reliabilityAndPerformance: [
        'Tuned PostgreSQL and MongoDB indexing strategies, reducing product search latency by 65%.',
        'Implemented strict RBAC access controls for customer vs administrative operational workflows.',
        'Handled order fulfillment webhooks with transactional locks to prevent inventory overselling.',
      ],
      individualContribution: [
        'Built GraphQL and REST APIs for catalog, inventory, pricing, and orders, plus the React admin dashboard.',
        'Implemented secure checkout and payment flows with OAuth 2.0/JWT and third-party fulfillment integrations.',
        'Engineered database models and tuned queries across both PostgreSQL and MongoDB.',
      ],
      outcomes: [
        'Live in production at slnofficial.com handling reliable daily customer orders.',
        'Modular architecture allowed seamless introduction of new shipping and pricing tiers.',
        'Sub-100ms API response times across product catalog and category filters.',
      ],
    },
    {
      id: 'co-optaxi-booking-platform',
      name: 'Co-optaxi — Taxi Booking Platform',
      subtitle: 'Real-time Ride Allocation, Dispatch APIs & Dynamic Fare Engine',
      category: 'Real-time Dispatch & Fleet',
      statusBadge: 'Production Fleet System',
      liveDemoUrl: 'https://co-optaxi.com',
      description:
        'A comprehensive taxi booking and dispatch platform integrating Hippo and Icabbi dispatch APIs for automated ride allocation, real-time fleet tracking, and dynamic fare pricing.',
      tech: ['Node.js', 'TypeScript', 'PHP', 'MySQL', 'Docker', 'Hippo API', 'Icabbi API', 'WebSockets'],
      problemStatement:
        'Taxi dispatch operators faced ride allocation bottlenecks and data desynchronization between third-party dispatch systems (Hippo, Icabbi) and internal driver/rider interfaces, causing lost bookings.',
      constraintsAndTradeoffs: [
        'Maintaining bidirectional real-time synchronization with Hippo and Icabbi dispatch systems.',
        'Calculating dynamic fare pricing based on distance, surge, and fleet availability.',
        'Zero-downtime booking continuity even during upstream partner API flakiness.',
        'Containerized multi-service environment across legacy and modern tech stacks.',
      ],
      architectureOverview:
        'Node.js and TypeScript microservices handle real-time ride requests, fare estimations, and dispatch queue synchronization with Hippo and Icabbi. A PHP/MySQL administrative portal provides fleet management and driver reporting, all containerized with Docker.',
      architectureSteps: [
        { title: 'Passenger App', description: 'Real-time booking, fare estimation, and driver tracking', icon: 'map-pin' },
        { title: 'Node.js Dispatch Service', description: 'Automated ride allocation and dynamic fare pricing engine', icon: 'cpu' },
        { title: 'Hippo & Icabbi APIs', description: 'Third-party dispatch integration with retry synchronization', icon: 'zap' },
        { title: 'Fleet Admin Portal', description: 'PHP/MySQL dashboard for fleet reporting and driver management', icon: 'monitor' },
        { title: 'Docker Environment', description: 'Containerized services ensuring dev/prod environment parity', icon: 'box' },
      ],
      technologyDecisions: [
        {
          title: 'Bidirectional sync with Hippo and Icabbi dispatch APIs',
          reason: 'Ensured rides and booking statuses were never lost or duplicated between external dispatch and internal databases.',
        },
        {
          title: 'Docker containerization',
          reason: 'Unified Node.js and PHP runtimes into consistent, reproducible deployment containers.',
        },
        {
          title: 'Dynamic fare calculation engine',
          reason: 'Automated fare adjustments based on ride distance, timing, and dispatch parameters.',
        },
      ],
      reliabilityAndPerformance: [
        'Engineered error-handling and reconciliation queues to sync state when dispatch APIs experienced network timeouts.',
        'Optimized MySQL transactional locks to prevent duplicate ride allocations to multiple drivers.',
        'Containerized services with health checks for automatic container recovery.',
      ],
      individualContribution: [
        'Integrated Hippo and Icabbi dispatch APIs for automated ride allocation and built real-time tracking.',
        'Built PHP and MySQL admin panel for fleet management and resolved production issues across interfaces.',
        'Containerized services with Docker for consistent development and production setups.',
      ],
      outcomes: [
        'Deployed in production at co-optaxi.com powering continuous daily fleet bookings.',
        'Eliminated duplicate and lost bookings through robust sync reconciliation logic.',
        'Decreased dispatch response time and streamlined fleet operator reporting.',
      ],
    },
    {
      id: 'rag-search-tool',
      name: 'RAG Search Tool — Personal AI Project',
      subtitle: 'Retrieval-Augmented Generation, pgvector & LangGraph Workflow',
      category: 'Agentic AI & Search',
      statusBadge: 'Personal AI System',
      description:
        'A Retrieval-Augmented Generation (RAG) search tool utilizing PostgreSQL pgvector for vector embeddings, LangGraph for orchestration, and the OpenAI API to allow users to search and query their private documents with semantic precision.',
      tech: ['Node.js', 'PostgreSQL (pgvector)', 'OpenAI API', 'LangGraph', 'Embeddings', 'Semantic Search', 'TypeScript'],
      problemStatement:
        'Standard full-text search fails to capture semantic intent, while raw LLMs hallucinate and lack access to private organizational documents.',
      constraintsAndTradeoffs: [
        'Efficient chunking strategies to preserve context across document boundaries.',
        'Low-latency similarity search across high-dimensional vector spaces in PostgreSQL.',
        'Injecting retrieved context into prompt limits without truncating relevant knowledge.',
      ],
      architectureOverview:
        'Documents are parsed and split into overlapping semantic chunks. OpenAI embeddings are generated and persisted in PostgreSQL using the pgvector extension. Upon user query, an embedding is generated, cosine similarity search extracts the top matching chunks in pgvector, and LangGraph coordinates passing context to GPT for a factual, referenced answer.',
      architectureSteps: [
        { title: 'Document Ingestion', description: 'Uploads and splits documents into optimized semantic chunks', icon: 'file-text' },
        { title: 'Embedding Model', description: 'OpenAI text-embedding models generate dense vector representations', icon: 'cpu' },
        { title: 'pgvector Storage', description: 'PostgreSQL stores embeddings with HNSW indexing for fast similarity search', icon: 'database' },
        { title: 'LangGraph Orchestrator', description: 'Coordinates query retrieval, re-ranking, and context assembly', icon: 'layers' },
        { title: 'GPT Generation', description: 'Answers strictly from retrieved user document context', icon: 'bot' },
      ],
      technologyDecisions: [
        {
          title: 'PostgreSQL with pgvector over dedicated vector DBs',
          reason: 'Allowed keeping relational metadata and vector embeddings within the same ACID database without managing separate vector infrastructure.',
        },
        {
          title: 'LangGraph workflow control',
          reason: 'Provided cyclic graph coordination for multi-step retrieval, verification, and answer synthesis.',
        },
        {
          title: 'Strict context grounding in prompts',
          reason: 'Forced the model to rely only on retrieved user data, eliminating hallucinations.',
        },
      ],
      reliabilityAndPerformance: [
        'Used HNSW index in pgvector to achieve sub-20ms nearest-neighbor similarity searches.',
        'Implemented document deduplication and hash checking before embedding generation.',
        'Enforced strict fallback messaging when context similarity falls below relevance thresholds.',
      ],
      individualContribution: [
        'Architected and built the entire RAG pipeline from scratch in Node.js and TypeScript.',
        'Configured pgvector schemas, indexes, and SQL vector similarity queries.',
        'Integrated OpenAI embeddings and LangGraph orchestration for question answering.',
      ],
      outcomes: [
        'Accurate document question-answering strictly grounded in user-provided files.',
        'Sub-second end-to-end question answering pipeline including vector retrieval and streaming completion.',
        'Prototyped foundational patterns for enterprise private knowledge search.',
      ],
    },
    {
      id: 'ai-content-assistant',
      name: 'AI Content Assistant — Personal AI Project',
      subtitle: 'Personalized Content Recommendations with OpenAI API & LangChain',
      category: 'GenAI & LLM Workflows',
      statusBadge: 'Personal AI Project',
      description:
        'An intelligent AI assistant built on the OpenAI API (GPT models) using LangChain that generates personalized content recommendations based on user preferences and context.',
      tech: ['Node.js', 'OpenAI API (GPT)', 'LangChain', 'TypeScript', 'Prompt Engineering', 'REST APIs'],
      problemStatement:
        'Generic content recommendations fail to adapt to individual user context, interests, and past interactions, resulting in low engagement.',
      constraintsAndTradeoffs: [
        'Dynamic context injection within token budget constraints.',
        'Reliable JSON output formatting from non-deterministic LLMs.',
        'Error handling and graceful degradation during external API rate limits.',
      ],
      architectureOverview:
        'A Node.js backend handles incoming user preferences and interaction context, formats dynamic prompt templates with LangChain, and executes OpenAI API calls. Responses are parsed, validated, and returned via REST APIs to frontend consumers.',
      architectureSteps: [
        { title: 'User Context Ingestion', description: 'Gathers user profile, topic interests, and reading history', icon: 'user' },
        { title: 'LangChain Prompts', description: 'Formats structured prompts with system guidelines and constraints', icon: 'terminal' },
        { title: 'OpenAI API (GPT)', description: 'Generates tailored recommendations with temperature control', icon: 'bot' },
        { title: 'Schema Parser', description: 'Validates and formats structured content output in Node.js', icon: 'check-circle' },
      ],
      technologyDecisions: [
        {
          title: 'LangChain Prompt Templates',
          reason: 'Allowed parameterized, reusable prompt engineering with persona definitions and negative constraints.',
        },
        {
          title: 'Contextual input conditioning',
          reason: 'Ensured suggestions dynamically vary from person to person based on their stated interests.',
        },
        {
          title: 'Exponential backoff retries',
          reason: 'Handled OpenAI API rate limits and temporary service latency gracefully.',
        },
      ],
      reliabilityAndPerformance: [
        'Cached frequent recommendation categories to minimize repetitive API token consumption.',
        'Implemented validation schemas ensuring consistent payload shapes for frontend consumers.',
      ],
      individualContribution: [
        'Built the Node.js backend handling API calls, responses, and error recovery.',
        'Wrote and refined prompt engineering templates for personalized output.',
        'Tested and calibrated temperature and token thresholds for optimal creativity vs consistency.',
      ],
      outcomes: [
        'Delivered highly personalized content suggestions tailored to distinct user profiles.',
        'Established hands-on production patterns for integrating LLM capabilities into backend applications.',
      ],
    },
    {
      id: 'university-portals',
      name: 'University Management & Examination Portals',
      subtitle: 'Multi-Institutional Portals for Students, Faculty & Staff',
      category: 'Higher Education Systems',
      statusBadge: 'Multi-Campus Deployments',
      liveDemoUrl: 'http://exam.bucgexam.in',
      description:
        'Comprehensive web portals deployed across several institutions (exam.bucgexam.in, bvvjdpexam.in, snpvraigarh.in) covering course scheduling, exam publishing, and academic communication.',
      tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
      problemStatement:
        'Universities operated on manual paperwork and disjointed systems for student enrollment, examination scheduling, and result dissemination, leading to high administrative overhead.',
      constraintsAndTradeoffs: [
        'Role-based access separation across students, faculty, and administrative staff.',
        'Ensuring mobile responsiveness for students accessing results on budget smartphones.',
        'Handling massive concurrent traffic spikes on examination result declaration days.',
      ],
      architectureOverview:
        'Built with PHP and MySQL, the portals feature normalized schemas for users, courses, and examinations with separate authentication portals. Bootstrap was utilized to provide a responsive interface optimized across mobile and desktop viewports.',
      architectureSteps: [
        { title: 'Responsive UI', description: 'Bootstrap-powered student, faculty, and staff interfaces', icon: 'monitor' },
        { title: 'Portal Logic', description: 'Role-based access control and examination management workflows', icon: 'server' },
        { title: 'MySQL Relational DB', description: 'Normalized student, course, and exam grade records', icon: 'database' },
        { title: 'Exam Publishing', description: 'Automated result compilation and certificate generation', icon: 'file-text' },
      ],
      technologyDecisions: [
        {
          title: 'Normalized MySQL schemas',
          reason: 'Supported complex academic relationships (prerequisites, semesters, course credits) with strict integrity.',
        },
        {
          title: 'Mobile-first Bootstrap layouts',
          reason: 'Guaranteed that students could check timetables, hall tickets, and results reliably on any smartphone.',
        },
      ],
      reliabilityAndPerformance: [
        'Optimized database indexes on roll numbers and semester codes to withstand high-volume result lookups.',
        'Separated access levels preventing unauthorized modifications of examination marks.',
      ],
      individualContribution: [
        'Built portals for students, faculty and staff across several institutions.',
        'Designed MySQL schemas for users, courses, and exams with granular access controls.',
        'Built responsive Bootstrap interfaces ensuring cross-device compatibility.',
      ],
      outcomes: [
        'Deployed across multiple live institution domains (exam.bucgexam.in, bvvjdpexam.in, snpvraigarh.in).',
        'Streamlined examination scheduling and instant result publication for thousands of students.',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Engineering (B.E.), Computer Science & Engineering',
      institution: 'Technocrats Institute of Technology (RGPV University), Bhopal',
      period: 'Jul 2011 – Jun 2014',
      location: 'Bhopal, Madhya Pradesh, India',
      description:
        'Focused on data structures, algorithms, database management systems, computer networks, and software engineering.',
      isCertification: false,
    },
    {
      degree: 'AWS Certified Solutions Architect – Associate',
      institution: 'Amazon Web Services (AWS)',
      period: 'In Progress (2026)',
      description:
        'Demonstrating comprehensive knowledge of resilient AWS cloud architectures, high availability, serverless compute, and cost optimization.',
      isCertification: true,
    },
  ],
  engineeringHighlights: [
    {
      category: 'API & Service Design',
      title: 'Designing Maintainable, Versioned APIs',
      summary:
        'Clear contracts, explicit status codes, consistent error payloads, and forward-compatible schemas are fundamental to engineering long-lived backend systems.',
      principles: [
        'Strict contract-first API definitions with OpenAPI / Swagger documentation',
        'Standardized error envelopes (HTTP status, error code, timestamp, correlationId)',
        'Semantic versioning with deprecation windows for backward compatibility',
        'Payload validation at the gateway boundary before hitting business logic',
      ],
    },
    {
      category: 'Architectural Patterns',
      title: 'Decoupling: Sync vs. Asynchronous Workflows',
      summary:
        'Knowing when to return immediately and when to buffer work into Apache Kafka and AWS SQS is the difference between an API that crashes under load and one that gracefully scales.',
      principles: [
        'Synchronous execution strictly for fast reads and immediate validations (<100ms)',
        'Asynchronous queue-based offloading (Kafka/SQS/SNS) for heavy mutations and integrations',
        'Client-side optimistic updates paired with webhook/polling status notifications',
        'Isolation of failure domains so partial service outages never cascade',
      ],
    },
    {
      category: 'Database Engineering',
      title: 'Database Indexing & Query Plan Tuning',
      summary:
        'Throwing more compute at database bottlenecks is costly; disciplined schema design, composite indexing, and analyzing EXPLAIN output yields 10x-100x gains.',
      principles: [
        'Analyzing query execution plans with EXPLAIN ANALYZE before deploying schema updates',
        'Targeted composite B-tree and partial indexes for high-frequency filter predicates',
        'Dual-database strategy (PostgreSQL for ACID consistency, MongoDB for polymorphic catalog data)',
        'Vector indexing (HNSW in pgvector) for sub-20ms semantic search in AI pipelines',
      ],
    },
    {
      category: 'System Resilience',
      title: 'Idempotency & Fault-Tolerant Message Processing',
      summary:
        'In distributed systems, networks will fail and messages will be retried. Software must handle duplicate executions safely without corrupting data state.',
      principles: [
        'Unique idempotency keys attached to all mutating requests and message payloads',
        'Atomic database checks and upserts using idempotency record tables',
        'Dead-Letter Queues (DLQs) with automated alerting for unrecoverable poison pills',
        'Exponential backoff with jitter to prevent retry storms on recovering services',
      ],
    },
    {
      category: 'Cloud & DevOps',
      title: 'Serverless & Kubernetes Infrastructure as Code',
      summary:
        'Repeatable cloud environments demand code-defined infrastructure (AWS CDK, CloudFormation, Docker, Kubernetes) rather than manual console tweaks.',
      principles: [
        'AWS CDK (TypeScript) constructs defining Lambda, API Gateway, DynamoDB, EC2, and S3',
        'Docker containerization and Kubernetes deployments for predictable runtime environments',
        'Automated CI/CD pipelines running unit and integration testing before deployment',
        'CloudWatch metric alarms and anomaly detection for proactive health monitoring',
      ],
    },
    {
      category: 'Modern AI Architecture',
      title: 'Agentic Workflows & Grounded RAG Systems',
      summary:
        'Building production AI requires moving beyond basic prompts to structured tool calling, deterministic validation schemas, and factual grounding.',
      principles: [
        'LangGraph cyclic state machines for multi-turn agentic tool calling',
        'Strict Zod schema validation ensuring LLM outputs conform to typed backend data structures',
        'Grounding responses strictly on retrieved private document vectors in pgvector',
        'Semantic caching and token consumption tracking to manage external API budgets',
      ],
    },
  ],
  contact: {
    heading: 'Have a Backend, Full Stack, or AI Challenge?',
    subheading:
      "Let's connect and discuss building reliable, scalable software, cloud architectures, or modern web systems.",
    phone: '+91 9584515823',
    locationText: 'Indore, Madhya Pradesh, India · Open to opportunities across India & Remote',
  },
};
