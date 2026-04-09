/**
 * data/content.js
 * ────────────────
 * Single source of truth for all portfolio text, projects, skills, etc.
 * Updating content here automatically updates the entire site.
 */

export const personalInfo = {
  name: 'Logeshwaran Shanmugam',
  role: 'AI Engineer | LLM Systems Developer',
  tagline: 'Building intelligent systems with LLMs, RAG, and AI agents.',
  summary:
    'AI Engineer specializing in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and AI agent systems. Experienced in building scalable AI infrastructure including AI API gateways, MCP servers, and intelligent automation workflows.',
};

export const stats = [
  { value: '1+', label: 'Year Experience' },
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Tools Mastered' },
  { value: 'RAG', label: 'LLM · Agents' },
];

export const experience = [
  {
    role: 'AI ML Engineer',
    company: 'IAgami Technologies',
    duration: 'July 2025 – Present',
    current: true,
    highlights: [
      'Built AI-powered backend services using FastAPI and LLM orchestration',
      'Developed MCP servers for structured AI-tool interaction',
      'Designed AI agent workflows integrating APIs and knowledge bases',
      'Implemented RAG pipelines using vector databases',
      'Contributed to AI API Gateway for LLM routing and monitoring',
      'Automated workflows using n8n and AI pipelines',
    ],
    tags: ['FastAPI', 'LLMs', 'RAG', 'MCP', 'n8n'],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'IAgami Technologies',
    duration: '2024 – 2025',
    current: false,
    highlights: [
      'Built React-based full-stack applications',
      'Developed LLM-powered chatbot systems',
      'Created backend APIs for AI applications',
    ],
    tags: ['React', 'LLMs', 'APIs'],
  },
];

export const projects = [
  {
    name: 'AI API Gateway (AgamiLLM)',
    description:
      'Centralized LLM routing system across multiple providers with request management, monitoring, and scalable backend architecture.',
    story: 'Built the AI backbone — intelligent routing across providers.',
    tags: ['LLM Routing', 'FastAPI', 'Multi-provider', 'Monitoring'],
    icon: '🔀',
    featured: true,
  },
  {
    name: 'RAG-based Support Assistant',
    description:
      'Intelligent chatbot using document ingestion and vector search with ChromaDB, FAISS, and Neo4j for context-aware responses.',
    story: 'Made documents talk — AI conversations with context.',
    tags: ['ChromaDB', 'FAISS', 'Neo4j', 'RAG'],
    icon: '🧠',
    featured: false,
  },
  {
    name: 'HR Knowledge Assistant',
    description:
      'AI chatbot for HR policies with vector search over enterprise documents and FastAPI-based real-time responses.',
    story: 'Enterprise AI at scale — real-time policy intelligence.',
    tags: ['FastAPI', 'Vector Search', 'Enterprise'],
    icon: '📋',
    featured: false,
  },
  {
    name: 'Workflow Automation Platform',
    description:
      'AI agent workflows using n8n with integrated APIs and event-driven automation pipelines.',
    story: 'Automated the boring — event-driven AI pipelines.',
    tags: ['n8n', 'AI Agents', 'Automation'],
    icon: '⚡',
    featured: false,
  },
  {
    name: 'NutriLLM — AI Nutritionist',
    description:
      'AI agent-based diet planning with personalized plans using BMI, goals, and regional data. Dynamic meal optimization with AI reasoning workflows.',
    story: 'AI that cares — personalized health intelligence.',
    tags: ['AI Agents', 'LLMs', 'Full Stack'],
    icon: '🥗',
    featured: false,
  },
];

export const skills = [
  {
    category: 'AI Systems',
    items: ['RAG', 'Prompt Engineering', 'LLM Routing', 'AI Agents', 'Context Injection'],
  },
  {
    category: 'Frameworks',
    items: ['LangChain', 'LiteLLM', 'OpenRouter'],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Spring Boot', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'ChromaDB', 'FAISS', 'Neo4j'],
    highlighted: ['ChromaDB', 'FAISS', 'Neo4j'],
  },
  {
    category: 'Tools',
    items: ['n8n', 'GitHub', 'Postman', 'VS Code', 'Jupyter'],
  },
];

export const education = {
  degree: 'B.Tech AI & Data Science',
  college: 'Sri Shanmugha College of Engineering & Technology',
  year: '2021 – 2025',
  gpa: '8.2',
  achievements: [
    'Top Academic Performer Award',
    'Organized technical symposium',
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];
