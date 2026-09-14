/**
 * data/content.js
 * ────────────────
 * Single source of truth for all portfolio text, projects, skills, etc.
 * Updating content here automatically updates the entire site.
 */

import resumePdf from './resume/Logeshwaran_resume.pdf';

export const personalInfo = {
  name: 'Logeshwaran Shanmugam',
  role: 'AI Engineer | LLM Systems Developer',
  tagline: 'Building intelligent systems with LLMs, RAG, and AI agents.',
  summary:
    'AI Engineer specializing in Large Language Models (LLMs), Agentic AI Systems, Retrieval-Augmented Generation (RAG), and AI workflow automation. Experienced in building scalable AI platforms, MCP servers, AI API gateways, and multi-agent systems using FastAPI, LangChain, LangGraph, and vector databases. Skilled in LLM orchestration, semantic search, tool calling, context engineering, and AI infrastructure development.',
  resumeUrl: resumePdf,
  githubUrl: 'https://github.com/logesh-001',
  linkedinUrl: 'https://www.linkedin.com/in/logeshwaran-shanmugam',
  email: 'logeshwaranshanmugam02@gmail.com',
  phone: '+91 87788 20191',
  location: 'Bengaluru, India',
};

export const stats = [
  { value: '10K+', label: 'Monthly LLM Requests' },
  { value: '20+', label: 'LLM Models Unified' },
  { value: '15+', label: 'Automation Workflows' },
  { value: '99.5%', label: 'Gateway Availability' },
];

export const experience = [
  {
    role: 'AI/ML Engineer',
    company: 'IAgami Technologies',
    duration: 'Jul 2025 – Present',
    current: true,
    highlights: [
      'Designed and developed AI-powered backend services using FastAPI, LangChain, LangGraph, and LLM orchestration frameworks, cutting integration time for new AI features across teams',
      'Engineered core routing and monitoring logic for AgamiLLM, an AI Gateway unifying 20+ LLM models handling 10K+ requests/month with 99.5% availability and <100ms average latency',
      'Reduced provider integration effort by ~60% across 3 internal teams and 10+ active users through centralized model management and a single unified API layer',
      'Developed MCP servers enabling standardized, tool-calling interaction between AI agents and enterprise systems',
      'Built Agentic AI workflows integrating external APIs, enterprise tools, vector databases, and custom business logic',
      'Implemented Retrieval-Augmented Generation (RAG) pipelines using ChromaDB, FAISS, and Neo4j, improving enterprise knowledge retrieval accuracy and response relevance',
      'Built 15+ n8n automation workflows, saving 10–15 hours of manual effort weekly and cutting repetitive operational tasks by ~60%',
      'Containerized AI services using Docker and integrated Google Cloud Platform (GCP) services and external AI APIs into enterprise workflows',
    ],
    tags: ['FastAPI', 'LangChain', 'LangGraph', 'MCP', 'RAG', 'Docker', 'GCP', 'n8n'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'IAgami Technologies',
    duration: '2024 – 2025',
    current: false,
    highlights: [
      'Built full-stack applications using React.js and backend APIs, delivering features from design through deployment',
      'Developed LLM-powered chatbot systems using retrieval-based knowledge pipelines to automate internal query handling',
      'Implemented backend APIs supporting AI-driven applications, laying groundwork later extended into production RAG systems',
    ],
    tags: ['React.js', 'FastAPI', 'LLMs', 'RAG', 'REST APIs'],
  },
];

export const projects = [
  {
    name: 'AI API Gateway (AgamiLLM)',
    description:
      'Engineered an AI Gateway handling 10K+ LLM requests/month with 99.5% availability and <100ms average latency. Unifies 20+ AI models through a single API layer, providing model routing, authentication, usage tracking, monitoring, and provider abstraction to reduce provider integration effort by ~60%.',
    story: 'Built the AI backbone — unified 20+ LLM models with 99.5% availability.',
    tags: ['FastAPI', 'AgamiLLM', 'Docker', 'Monitoring', 'LLM Routing'],
    icon: '🔀',
    featured: true,
  },
  {
    name: 'RAG-based Support Assistant',
    description:
      'Developed a RAG-based Support Assistant automating 1,500+ queries/month, resolving ~65% of common queries without human escalation and cutting resolution time by ~40%. Built document ingestion pipelines, embedding generation, and vector search with ChromaDB, FAISS, and Neo4j.',
    story: 'Automated 1,500+ queries/month — resolved ~65% without human escalation.',
    tags: ['ChromaDB', 'FAISS', 'Neo4j', 'RAG', 'FastAPI'],
    icon: '🧠',
    featured: false,
  },
  {
    name: 'HR Knowledge Assistant',
    description:
      'Automated 500+ queries/month, reducing repetitive HR ticket volume by ~30% with second-level responses. Implemented LangGraph reasoning workflows and tool calling for employees to apply for leave, view balances, and query HR policies directly in chat.',
    story: 'Conversational HR operations — LangGraph reasoning & tool calling.',
    tags: ['LangGraph', 'Tool Calling', 'FastAPI', 'Enterprise AI'],
    icon: '📋',
    featured: false,
  },
  {
    name: 'NutriLLM — AI Nutritionist Platform',
    description:
      'Developed NutriLLM to generate 1,000+ personalized diet plans, reducing plan-generation time from 15–20 minutes to under 1 minute (~90% cut). Engineered a meal planning engine dynamically adjusting food quantities with AI reasoning workflows.',
    story: 'Generated 1,000+ diet plans — cut creation time by ~90%.',
    tags: ['Agentic AI', 'LLMs', 'Python', 'Reasoning Workflows'],
    icon: '🥗',
    featured: false,
  },
  {
    name: 'Workflow Automation Platform',
    description:
      'Event-driven AI automation platform with 15+ n8n workflows integrating external APIs, Google Cloud Platform (GCP) services, and custom business logic, saving 10–15 hours weekly and cutting repetitive operational tasks by ~60%.',
    story: 'Automated 15+ enterprise workflows — saved 10-15 hrs/week.',
    tags: ['n8n', 'AI Agents', 'GCP', 'Automation'],
    icon: '⚡',
    featured: false,
  },
];

export const skills = [
  {
    category: 'AI Systems',
    items: [
      'Agentic AI',
      'RAG',
      'Multi-Agent Systems',
      'MCP',
      'Tool Calling',
      'Function Calling',
      'Prompt Engineering',
      'Context Engineering',
      'Semantic Search',
    ],
  },
  {
    category: 'LLM Frameworks',
    items: ['LangChain', 'LangGraph', 'LiteLLM', 'OpenRouter'],
  },
  {
    category: 'Vector Databases',
    items: ['ChromaDB', 'FAISS', 'Neo4j'],
    highlighted: ['ChromaDB', 'FAISS', 'Neo4j'],
  },
  {
    category: 'Backend & Databases',
    items: ['FastAPI', 'REST APIs', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Google Cloud Platform (GCP)', 'Docker'],
  },
  {
    category: 'Programming & AI Libraries',
    items: [
      'Python',
      'JavaScript',
      'SQL',
      'Transformers',
      'Scikit-learn',
      'Pandas',
      'SentenceTransformers',
      'NumPy',
    ],
  },
  {
    category: 'Automation & Tools',
    items: ['n8n', 'GitHub', 'VS Code', 'Postman', 'Jupyter Notebook'],
  },
];

export const education = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  college: 'Sri Shanmugha College of Engineering & Technology',
  year: '2021 – 2025',
  gpa: '8.2',
  achievements: [
    'Top Academic Performer Award — Dept. of AI & DS',
    'Coordinated and organized a successful technical symposium event',
    'Upskilling in advanced agentic workflows via LangChain Academy’s Intro to LangGraph course',
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
