export interface GraphNode {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  r: number;
  cat: 'frontend' | 'backend' | 'ai' | 'data' | 'infra';
  info: string;
  tags: string[];
}

export type GraphEdge = [string, string];

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'SHIPPED' | 'R&D';
  status: 'LIVE' | 'IN PROGRESS';
  icon: string;
  stack: string[];
  githubUrl?: string;
  metrics: ProjectMetric[];
  summary: string[];
  description: {
    technical: string;
    executive: string;
  };
  detailedDescription: {
    technical: string[];
    executive: string[];
  };
  learned?: string[];
  graphNodes: GraphNode[];
  graphEdges: GraphEdge[];
}

export const PROJECTS: Project[] = [
  {
    id: '0xS001',
    title: 'Order Supervisor',
    slug: 'order-supervisor',
    category: 'SHIPPED',
    status: 'LIVE',
    icon: 'smart_toy',
    stack: ['FastAPI', 'PostgreSQL', 'Llama-3', 'Groq', 'React', 'Alembic', 'Pytest'],
    githubUrl: 'https://github.com/suryansh-sharma420/AI_Supervisor',
    metrics: [
      { value: '110', label: 'Tests' },
      { value: '15', label: 'Endpoints' },
      { value: '7', label: 'DB Models' },
    ],
    summary: [
      'Each order spawns a dedicated Llama-3.3-70b supervisor agent that autonomously monitors its lifecycle.',
      'A lightweight Llama-3.1-8b classifier routes incoming events to the correct handler before the main agent processes them.',
      'PostgreSQL with Alembic migrations stores order state, agent memory, and a full audit trail of every decision.',
      'FastAPI backend exposes 15 endpoints for order management, agent interaction, and system health.',
      'React frontend provides a real-time dashboard for monitoring order status and agent activity.',
    ],
    description: {
      technical: 'Autonomous agent system where each e-commerce order gets a dedicated Llama-3.3-70b supervisor. Agent watches for events (payment failure, shipment updates) and takes actions. Llama-3.1-8b classifier routes events. FastAPI + PostgreSQL + React frontend.',
      executive: 'Each customer order gets its own AI supervisor that monitors delivery, flags payment issues, and keeps teams informed — automatically. Built with large language models and a full web interface.',
    },
    detailedDescription: {
      technical: [
        'Each order spawns a dedicated autonomous supervisor agent running Llama-3.3-70b via Groq. The agent runs a persistent loop — watching for domain events (payment failure, shipment update, delivery confirmation) and deciding actions (notify team, create note, sleep until next check-in).',
        'A lightweight Llama-3.1-8b classifier routes incoming events to the correct handler before the main agent processes them, reducing context overhead.',
        'PostgreSQL + Alembic for schema migrations. asyncpg for async DB access. React frontend provides an order dashboard and agent activity log.',
      ],
      executive: [
        'Every customer order gets its own AI brain. It watches for problems — payment failures, delayed shipments, delivery issues — and keeps the right people informed automatically.',
        'Built with two AI models working together: a fast classifier that identifies what type of event just happened, and a larger reasoning model that decides what to do about it.',
        'Full web interface for monitoring order status and agent decisions in real time.',
      ],
    },
    learned: [
      'Order lifecycle management in e-commerce systems',
      'Job schedulers and long-running async agent loops',
      'Test-driven development in practice',
      'PostgreSQL connection + query optimization with asyncpg',
      'Context window optimization for LLM agents',
    ],
    graphNodes: [],
    graphEdges: [],
  },
  {
    id: '0xR002',
    title: 'LLM Red Teaming Platform',
    slug: 'red-teaming-platform',
    category: 'SHIPPED',
    status: 'LIVE',
    icon: 'security',
    stack: ['Node.js', 'Express', 'React', 'Vite', 'Garak', 'PromptFoo', 'LiteLLM'],
    description: {
      technical: 'Full-stack adversarial evaluation platform. Express.js backend orchestrates Garak probe runs with a proxy layer intercepting model calls for attack injection. React/Vite frontend for running evals, chatbot testing, and document-based attack configs.',
      executive: 'A platform that automatically attacks AI models to find security weaknesses — before bad actors do. Covers prompt injection, jailbreaking, and recursive encoding bypasses. Results delivered as structured vulnerability reports.',
    },
    detailedDescription: {
      technical: [
        'Express.js backend orchestrates Garak probe runs programmatically. A proxy layer sits between the UI and the target model — intercepting calls for attack injection, logging, and result capture.',
        'Multi-route architecture: /run (execute eval), /models (target selection), /chat (direct chatbot testing), /documents (upload attack configs), /evaluation (results viewer), /chatbot (interactive adversarial session).',
        'Structured JSON vulnerability reports per eval run, stored to disk for audit trails. React/Vite frontend for full UI access without needing the terminal.',
      ],
      executive: [
        'A platform that automatically attacks AI models to discover security vulnerabilities — prompt injection, jailbreaking, recursive encoding bypasses — before bad actors can exploit them.',
        'Brings AI security testing into a web interface, replacing command-line tools with a structured, repeatable workflow.',
        'Produces clear vulnerability reports that security teams can act on directly.',
      ],
    },
    metrics: [
      { value: '6', label: 'Attack Categories' },
      { value: '5-pt', label: 'Severity Scale' },
      { value: '3', label: 'LLM Providers' },
    ],
    summary: [
      'Express.js backend orchestrates multiple attack frameworks (Garak, PromptFoo, custom probes) through a unified API.',
      'A proxy interception layer captures every LLM call for attack injection, logging, and structured result capture.',
      'Six attack categories cover prompt injection, jailbreaking, encoding bypasses, and more — each scored on a 5-point severity scale.',
      'LiteLLM proxy enables testing against OpenAI, Anthropic, and open-source models through a single interface.',
      'React/Vite frontend provides real-time SSE streaming of attack progress and interactive vulnerability reports.',
    ],
    learned: [
      'Red teaming methodology: attack types, probes, strategies',
      'Orchestrating Garak programmatically (not just CLI)',
      'Building a proxy interception layer for LLM call capture',
      'Iterative attack strategy development and refinement',
    ],
    graphNodes: [],
    graphEdges: [],
  },
  {
    id: '0xP003',
    title: 'AI Project Management Platform',
    slug: 'ai-pm-platform',
    category: 'SHIPPED',
    status: 'LIVE',
    icon: 'dashboard',
    stack: ['FastAPI', 'React', 'SQLAlchemy', 'Groq', 'Pytest', 'PostgreSQL'],
    description: {
      technical: 'Full-stack project management platform with an agentic AI chatbot (Groq/Llama-3), 4-tier RBAC, CSV bulk import, and a comprehensive audit trail tracking 12 entity types. 248 Pytest tests, SQLAlchemy ORM.',
      executive: 'An AI-powered project management tool where teams can chat with an intelligent assistant to manage tasks, track progress, and generate reports — all governed by role-based access control.',
    },
    detailedDescription: {
      technical: [
        'FastAPI backend with 4-tier RBAC (Super Admin, Admin, Manager, Member) enforced at the dependency-injection level. Every endpoint is gated by role permissions.',
        'Agentic chatbot powered by Groq/Llama-3 provides natural-language project queries, task creation, and status updates through a conversational interface.',
        'CSV bulk importer handles large dataset ingestion with validation, deduplication, and error reporting. SQLAlchemy ORM with Alembic migrations.',
        'Comprehensive audit listener tracks all CRUD operations across 12 entity types — who changed what, when, and the before/after state.',
        '248 Pytest tests covering routes, services, RBAC enforcement, chatbot interactions, and edge cases.',
      ],
      executive: [
        'A project management platform where teams can use an AI chatbot to manage tasks, query project status, and generate reports using natural language.',
        'Four-tier access control ensures the right people see the right data — from super admins with full visibility to members scoped to their own tasks.',
        'Complete audit trail for compliance and accountability, tracking every change across the entire system.',
      ],
    },
    metrics: [
      { value: '248', label: 'Tests' },
      { value: '4-tier', label: 'RBAC' },
      { value: '12', label: 'Audited Entities' },
    ],
    summary: [
      'FastAPI backend with 4-tier RBAC (Super Admin, Admin, Manager, Member) enforced at the dependency level.',
      'Agentic chatbot powered by Groq/Llama-3 handles natural-language project queries and task management.',
      'CSV bulk importer processes large datasets with validation, deduplication, and structured error reporting.',
      'Audit listener tracks all mutations across 12 entity types with full before/after state capture.',
      '248 Pytest tests cover routes, RBAC enforcement, chatbot interactions, and edge cases end-to-end.',
    ],
    learned: [
      'Designing multi-tier RBAC systems with dependency injection',
      'Building agentic chatbot interfaces with tool-calling patterns',
      'Audit trail architecture for compliance-grade tracking',
      'High-coverage test suites for complex multi-role systems',
    ],
    graphNodes: [],
    graphEdges: [],
  },
  {
    id: '0xD004',
    title: 'Multilingual Propaganda Detection',
    slug: 'propaganda-detection',
    category: 'R&D',
    status: 'IN PROGRESS',
    icon: 'monitoring',
    stack: ['PyTorch', 'XLM-RoBERTa', 'LoRA', 'PEFT', 'Hugging Face'],
    githubUrl: 'https://github.com/suryansh-sharma420/Propaganda-Detection-Project',
    description: {
      technical: 'Sequential transfer learning pipeline: XLM-RoBERTa pretrained on clean SemEval news data, then DAPT on noisy tweets (HQP). Mitigated 5.5:1 class imbalance with custom Focal Loss. Cross-lingual EN/HI classification.',
      executive: 'AI system detecting manipulative content in social media posts across English and Hindi. Training on clean data first — then adapting to real-world noisy tweets — produced a model with zero false positives on neutral content.',
    },
    detailedDescription: {
      technical: [
        'Sequential transfer learning pipeline: XLM-RoBERTa first trained on clean SemEval news articles, then domain-adaptive pretraining (DAPT) on noisy tweet corpus (HQP), then fine-tuned back on SemEval only.',
        'Severe 5.5:1 class imbalance mitigated with a custom PyTorch Focal Loss function — down-weights easy negatives, focuses training on hard propaganda examples.',
        'Cross-lingual generalization: XLM-RoBERTa\'s multilingual pretraining enables EN/HI classification without separate Hindi training data.',
        'Final model: 75.3% propaganda recall with zero false positives on 100 verified neutral samples.',
      ],
      executive: [
        'AI system that detects manipulative and propaganda content in social media posts across English and Hindi.',
        'Training on clean news articles first — before exposing the model to messy tweet data — produced far better results than training on tweets directly.',
        'The model achieves zero false positives on neutral content, meaning it only flags something as propaganda when it is highly confident.',
      ],
    },
    metrics: [
      { value: '99%', label: 'Accuracy' },
      { value: '5.5:1', label: 'Imbalance Handled' },
      { value: '2', label: 'Languages' },
    ],
    summary: [
      'Sequential transfer learning: XLM-RoBERTa pretrained on clean news, then domain-adapted to noisy social media text.',
      'Custom Focal Loss function mitigates severe 5.5:1 class imbalance by down-weighting easy negatives.',
      'Cross-lingual architecture enables English and Hindi classification without parallel training data.',
      'LoRA adapters enable parameter-efficient fine-tuning with minimal compute overhead.',
      'Achieves 99% accuracy with zero false positives on verified neutral content.',
    ],
    learned: [
      'Fine-tuning BERT-family models end-to-end',
      'Sequential transfer learning: clean domain then noisy domain adaptation',
      'LoRA for parameter-efficient fine-tuning',
      'Multilingual models for cross-lingual generalization',
      'Dataset quality matters more than model architecture',
    ],
    graphNodes: [],
    graphEdges: [],
  },
];
