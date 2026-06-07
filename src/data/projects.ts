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
    graphNodes: [
      { id: 'ui', label: 'Next.js UI', sub: 'Dashboard', x: 100, y: 60, r: 32, cat: 'frontend', info: 'React frontend providing real-time order dashboard and agent activity log.', tags: ['React', 'Next.js'] },
      { id: 'api', label: 'FastAPI', sub: 'REST API', x: 280, y: 60, r: 34, cat: 'backend', info: 'Backend exposing 15 endpoints for order management, agent interaction, and health checks.', tags: ['FastAPI', 'Pydantic', 'asyncpg'] },
      { id: 'agent', label: 'Agent Core', sub: 'Llama-3.3-70b', x: 440, y: 140, r: 36, cat: 'ai', info: 'Dedicated autonomous supervisor per order running Llama-3.3-70b via Groq. Persistent event loop with sleep/wake cycles.', tags: ['Groq', 'Llama-3.3-70b'] },
      { id: 'classifier', label: 'Event Classifier', sub: 'Llama-3.1-8b', x: 280, y: 200, r: 32, cat: 'ai', info: 'Lightweight classifier routing incoming events to the correct handler before main agent processes them.', tags: ['Llama-3.1-8b', 'Groq'] },
      { id: 'memory', label: 'Agent Memory', sub: 'Context Store', x: 540, y: 260, r: 30, cat: 'data', info: 'Per-agent context store tracking order history, past decisions, and conversation state.', tags: ['PostgreSQL'] },
      { id: 'db', label: 'PostgreSQL', sub: 'Primary DB', x: 340, y: 330, r: 34, cat: 'data', info: 'PostgreSQL with Alembic migrations storing order state, agent memory, and audit trails.', tags: ['PostgreSQL', 'Alembic', 'asyncpg'] },
      { id: 'audit', label: 'Audit Trail', sub: 'Decision Log', x: 140, y: 330, r: 30, cat: 'data', info: 'Full audit trail of every agent decision — what it saw, what it decided, and why.', tags: ['Logging'] },
      { id: 'scheduler', label: 'APScheduler', sub: 'Job Runner', x: 540, y: 60, r: 28, cat: 'infra', info: 'Async job scheduler managing agent wake/sleep cycles and periodic check-ins.', tags: ['APScheduler', 'asyncio'] },
    ],
    graphEdges: [
      ['ui', 'api'],
      ['api', 'agent'],
      ['api', 'classifier'],
      ['api', 'db'],
      ['agent', 'memory'],
      ['agent', 'db'],
      ['agent', 'scheduler'],
      ['agent', 'audit'],
      ['classifier', 'agent'],
      ['memory', 'db'],
      ['audit', 'db'],
    ],
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
    graphNodes: [
      { id: 'frontend', label: 'React Frontend', sub: 'Vite SPA', x: 100, y: 60, r: 34, cat: 'frontend', info: 'React/Vite frontend for running evals, chatbot testing, and viewing vulnerability reports with real-time SSE updates.', tags: ['React', 'Vite', 'SSE'] },
      { id: 'backend', label: 'Express Backend', sub: 'REST API', x: 100, y: 200, r: 34, cat: 'backend', info: 'Express.js backend orchestrating multiple attack frameworks through a unified API with multi-route architecture.', tags: ['Express', 'Node.js'] },
      { id: 'orchestrator', label: 'Orchestrator', sub: 'Attack Engine', x: 320, y: 200, r: 36, cat: 'backend', info: 'Central orchestration engine coordinating Garak, PromptFoo, and custom probe runs. Manages attack lifecycle.', tags: ['Node.js'] },
      { id: 'garak', label: 'Garak Runner', sub: 'Probe Framework', x: 480, y: 80, r: 30, cat: 'ai', info: 'Programmatic Garak integration for automated probe execution across 6 attack categories.', tags: ['Garak', 'Python'] },
      { id: 'promptfoo', label: 'PromptFoo', sub: 'Eval Runner', x: 540, y: 200, r: 30, cat: 'ai', info: 'PromptFoo integration for structured evaluation and comparison of model responses under attack.', tags: ['PromptFoo'] },
      { id: 'scanner', label: 'Custom Scanner', sub: 'Probe Engine', x: 480, y: 320, r: 30, cat: 'ai', info: 'Custom probe scanner for encoding bypasses, recursive injection, and novel attack patterns.', tags: ['Custom'] },
      { id: 'litellm', label: 'LiteLLM Proxy', sub: 'Model Gateway', x: 320, y: 340, r: 32, cat: 'infra', info: 'LiteLLM proxy enabling testing against OpenAI, Anthropic, and open-source models through a single interface.', tags: ['LiteLLM', 'Proxy'] },
      { id: 'sse', label: 'SSE Stream', sub: 'Real-time', x: 140, y: 340, r: 28, cat: 'infra', info: 'Server-Sent Events stream for real-time attack progress and result delivery to the frontend.', tags: ['SSE'] },
      { id: 'reports', label: 'Report Generator', sub: 'JSON Output', x: 540, y: 340, r: 28, cat: 'data', info: 'Structured JSON vulnerability reports per eval run, scored on a 5-point severity scale.', tags: ['JSON'] },
    ],
    graphEdges: [
      ['backend', 'orchestrator'],
      ['orchestrator', 'garak'],
      ['orchestrator', 'promptfoo'],
      ['orchestrator', 'scanner'],
      ['orchestrator', 'litellm'],
      ['orchestrator', 'sse'],
      ['sse', 'frontend'],
      ['orchestrator', 'reports'],
      ['frontend', 'backend'],
    ],
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
    graphNodes: [
      { id: 'frontend', label: 'React Frontend', sub: 'SPA', x: 100, y: 60, r: 34, cat: 'frontend', info: 'React frontend with project dashboards, task management, and an integrated AI chatbot interface.', tags: ['React'] },
      { id: 'api', label: 'FastAPI', sub: 'REST API', x: 280, y: 60, r: 34, cat: 'backend', info: 'FastAPI backend with comprehensive endpoint coverage. 248 Pytest tests verify all routes and RBAC rules.', tags: ['FastAPI', 'Pydantic', 'Pytest'] },
      { id: 'rbac', label: 'RBAC Layer', sub: '4-Tier Auth', x: 280, y: 190, r: 32, cat: 'backend', info: '4-tier role-based access control (Super Admin, Admin, Manager, Member) enforced at the dependency-injection level.', tags: ['JWT', 'RBAC'] },
      { id: 'chatbot', label: 'Agentic Chatbot', sub: 'AI Assistant', x: 460, y: 100, r: 34, cat: 'ai', info: 'Agentic chatbot providing natural-language project queries, task creation, and status updates.', tags: ['Agentic', 'Tool Calling'] },
      { id: 'groq', label: 'Groq LLM', sub: 'Llama-3', x: 560, y: 200, r: 28, cat: 'ai', info: 'Groq-hosted Llama-3 powering the chatbot with fast inference for interactive conversations.', tags: ['Groq', 'Llama-3'] },
      { id: 'csv', label: 'CSV Importer', sub: 'Bulk Ingest', x: 100, y: 200, r: 28, cat: 'infra', info: 'CSV bulk importer handling large dataset ingestion with validation, deduplication, and error reporting.', tags: ['CSV', 'Validation'] },
      { id: 'orm', label: 'SQLAlchemy', sub: 'ORM Layer', x: 340, y: 310, r: 32, cat: 'data', info: 'SQLAlchemy ORM with Alembic migrations managing the full data model and relationships.', tags: ['SQLAlchemy', 'Alembic'] },
      { id: 'audit', label: 'Audit Listener', sub: 'Event Logger', x: 180, y: 340, r: 30, cat: 'data', info: 'Audit listener tracking all mutations across 12 entity types with full before/after state capture.', tags: ['Events', 'Audit'] },
      { id: 'db', label: 'PostgreSQL', sub: 'Primary DB', x: 500, y: 340, r: 34, cat: 'data', info: 'PostgreSQL storing projects, tasks, users, roles, audit logs, and chatbot conversation history.', tags: ['PostgreSQL'] },
    ],
    graphEdges: [
      ['frontend', 'api'],
      ['api', 'rbac'],
      ['rbac', 'chatbot'],
      ['chatbot', 'groq'],
      ['api', 'csv'],
      ['api', 'orm'],
      ['orm', 'audit'],
      ['audit', 'db'],
      ['orm', 'db'],
    ],
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
    graphNodes: [
      { id: 'pipeline', label: 'Data Pipeline', sub: 'ETL', x: 80, y: 200, r: 32, cat: 'data', info: 'Data pipeline ingesting SemEval news articles and HQP tweet corpus with cleaning, tokenization, and stratified splitting.', tags: ['HuggingFace', 'Datasets'] },
      { id: 'augmentor', label: 'Data Augmentor', sub: 'Balancing', x: 220, y: 100, r: 30, cat: 'data', info: 'Augmentation strategies to mitigate 5.5:1 class imbalance — synonym replacement, back-translation, and oversampling.', tags: ['NLP', 'Augmentation'] },
      { id: 'xlmr', label: 'XLM-RoBERTa', sub: 'Base Model', x: 360, y: 200, r: 38, cat: 'ai', info: 'XLM-RoBERTa multilingual transformer pretrained on 100 languages. Sequential transfer: clean news then noisy tweets.', tags: ['XLM-RoBERTa', 'Transformers'] },
      { id: 'lora', label: 'LoRA Adapter', sub: 'PEFT', x: 500, y: 120, r: 30, cat: 'ai', info: 'Low-Rank Adaptation for parameter-efficient fine-tuning — fewer trainable parameters, same classification performance.', tags: ['LoRA', 'PEFT'] },
      { id: 'focal', label: 'Focal Loss', sub: 'Custom Loss', x: 500, y: 280, r: 28, cat: 'ai', info: 'Custom PyTorch Focal Loss function down-weighting easy negatives and focusing training on hard propaganda examples.', tags: ['PyTorch', 'Focal Loss'] },
      { id: 'evaluator', label: 'Evaluator', sub: 'Metrics', x: 360, y: 340, r: 30, cat: 'infra', info: 'Evaluation pipeline computing recall, specificity, F1, and confusion matrices on 185 verified samples.', tags: ['sklearn', 'Metrics'] },
      { id: 'inference', label: 'Inference API', sub: 'Serving', x: 180, y: 340, r: 28, cat: 'backend', info: 'Inference endpoint for real-time propaganda classification of input text in English and Hindi.', tags: ['FastAPI', 'Inference'] },
    ],
    graphEdges: [
      ['pipeline', 'augmentor'],
      ['augmentor', 'xlmr'],
      ['xlmr', 'lora'],
      ['lora', 'focal'],
      ['focal', 'evaluator'],
      ['lora', 'inference'],
    ],
  },
];
