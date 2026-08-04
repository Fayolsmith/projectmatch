import { Project } from '../lib/types.js';

export const CURATED_PROJECTS: Project[] = [
  // --- WEB DEVELOPMENT ---
  {
    id: 'web-1',
    title: 'Student Academic Performance Dashboard',
    description:
      'A web application that enables undergraduate students to log course grades, visualize semester GPA trends, track credit requirements, and simulate target grade scenarios to maintain academic standing.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Design responsive UI wireframes and define student grade schema.',
      'Implement course input forms with GPA calculation logic.',
      'Integrate interactive charting for historical performance visualization.',
      'Add target GPA simulation tools and local persistence.'
    ]
  },
  {
    id: 'web-2',
    title: 'Campus Event & Venue Booking System',
    description:
      'A centralized platform for student organizations to request venue reservations, schedule events, manage attendee RSVPs, and avoid room scheduling conflicts with conflict detection.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'React', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Model relational database schema for venues, events, and bookings.',
      'Develop REST API with conflict check logic for double-booking prevention.',
      'Build frontend calendar interface for interactive venue browsing.',
      'Implement user role authentication (Student Leader vs Admin Approver).'
    ]
  },
  {
    id: 'web-3',
    title: 'Real-Time Collaborative Code Review Workspace',
    description:
      'A WebSockets-powered code review platform allowing students to collaborate in real-time on code snippets, leave line-by-line syntax comments, and test code execution via sandboxed web workers.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['Next.js', 'Socket.io', 'Monaco Editor', 'Node.js'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Set up WebSocket server for real-time document synchronization.',
      'Integrate Monaco Editor with operational transformation or CRDTs for multi-user editing.',
      'Implement inline code commenting and code diff visualizer.',
      'Deploy sandboxed evaluation environment for executing short JS/Python scripts.'
    ]
  },
  {
    id: 'web-4',
    title: 'SIWES Logbook & Industrial Training Tracker',
    description:
      'A specialized workflow system for IT students to log daily work activities, submit weekly reports, attach supervisor signatures, and export official PDF logbooks for department defense.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['Vue.js', 'Node.js', 'MongoDB', 'pdfkit'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Create structured log entry schema matching departmental SIWES guidelines.',
      'Implement daily/weekly log editor with draft saving and photo attachment upload.',
      'Build PDF generation engine to format logs into standard university booklet layout.',
      'Add supervisor feedback & verification portal.'
    ]
  },
  {
    id: 'web-5',
    title: 'Digital Open Courseware & Past Question Repository',
    description:
      'A community-curated archive for university course materials, lecture notes, and past examination papers featuring full-text search, OCR indexing, and student rating systems.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['React', 'Express', 'Elasticsearch', 'PostgreSQL'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Design file store architecture and OCR processing queue for scanned papers.',
      'Set up Elasticsearch index for fast document title, course code, and text search.',
      'Build frontend search UI with facets by department, semester, and course level.',
      'Implement document voting, user moderation, and file preview engine.'
    ]
  },

  // --- MOBILE DEVELOPMENT ---
  {
    id: 'mobile-1',
    title: 'Offline-First Campus Shuttle & Timetable App',
    description:
      'A lightweight mobile app that helps students access campus shuttle routes, departure timetables, and stop locations even without active internet connectivity.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'Dart', 'SQLite', 'Leaflet/Mapbox'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Gather and structure campus route and timetable dataset.',
      'Implement local SQLite caching for offline schedule lookups.',
      'Build interactive route map display showing nearest shuttle stops.',
      'Add countdown timer for upcoming departures based on current time.'
    ]
  },
  {
    id: 'mobile-2',
    title: 'Campus Cafeteria Mobile Ordering & Queue Tracker',
    description:
      'A mobile app enabling students to pre-order meals from campus cafeterias, track estimated preparation time in real-time, and collect food using secure QR pass codes.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Expo', 'Firebase', 'Node.js'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Design food item menu and shopping cart mobile UI.',
      'Implement real-time order status updates via Firebase Firestore.',
      'Integrate unique QR code generation for pickup verification at counter.',
      'Build vendor portal view for cafeteria staff to update order status.'
    ]
  },
  {
    id: 'mobile-3',
    title: 'Student Mood & Study Habit Journal',
    description:
      'A personal wellness and productivity tracking app designed for undergraduate students to track daily mood levels, study hours, sleep metrics, and correlate stress with exam schedules.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'SQLite', 'FlChart', 'Dart'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Create intuitive daily check-in UI for mood and study session logging.',
      'Implement local database storage with daily backup/export features.',
      'Build analytical summary charts showing weekly productivity trends.',
      'Add customized notification reminders for daily journaling.'
    ]
  },
  {
    id: 'mobile-4',
    title: 'Peer-to-Peer Textbook Exchange & Rental App',
    description:
      'A mobile marketplace connecting students on the same campus to buy, sell, or rent used textbooks directly, featuring geolocation proximity matching and messaging.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    milestones: [
      'Implement book listing creation with camera photo uploads and ISBN lookup.',
      'Build search and filter view based on course code, department, and condition.',
      'Implement in-app buyer-seller chat messaging.',
      'Add transaction history and seller trust ratings.'
    ]
  },
  {
    id: 'mobile-5',
    title: 'Biometric Attendance Verification App',
    description:
      'A mobile lecture attendance system using device biometric authentication (fingerprint/FaceID) and time-windowed geofencing to prevent proxy attendance sign-ins.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'LocalAuth API', 'Geolocator', 'Node.js API'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Integrate OS-level biometric prompt authentication in Flutter app.',
      'Implement GPS coordinate geofencing validation against lecture hall boundaries.',
      'Develop backend API for lecture session generation and attendance roster export.',
      'Add security checks against location spoofing and mock mock-GPS tools.'
    ]
  },

  // --- BACKEND / API ---
  {
    id: 'backend-1',
    title: 'E-Commerce Microservices Engine with Rate Limiting',
    description:
      'A robust backend API implementing core e-commerce workflows (catalog, order, payment mock) using microservice modularity, Redis token-bucket rate limiting, and centralized error handling.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'Redis', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Design modular API endpoints for products, shopping cart, and orders.',
      'Implement Redis-based rate limiter middleware to prevent API abuse.',
      'Build database migration scripts and transactional order placement logic.',
      'Write comprehensive unit and integration tests using Vitest/Supertest.'
    ]
  },
  {
    id: 'backend-2',
    title: 'Asynchronous Task Queue & Email/SMS Dispatcher',
    description:
      'A reliable background job processing service that accepts notification requests via API, queues them in Redis BullMQ, and processes them with retry backoff and failure dead-letter queues.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'Redis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Set up job queue processor using Redis and BullMQ.',
      'Define job payload schemas for email templates, SMS alerts, and webhooks.',
      'Implement exponential backoff retry policy and dead-letter queue inspection API.',
      'Build a simple dashboard endpoint showing pending, active, and failed jobs.'
    ]
  },
  {
    id: 'backend-3',
    title: 'High-Throughput Distributed Log Collector & Alert API',
    description:
      'A high-performance backend backend service that ingests streaming log events from client applications, indexes logs by severity, and triggers webhook alerts when error thresholds are exceeded.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Go', 'Node.js', 'ClickHouse / PostgreSQL', 'Redis'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Design binary/JSON log ingestion API with asynchronous batching.',
      'Implement efficient database indexing for time-series search operations.',
      'Build dynamic alerting engine evaluating rule thresholds (e.g. >50 errors/min).',
      'Create load testing benchmark suite demonstrating request throughput under load.'
    ]
  },
  {
    id: 'backend-4',
    title: 'OAuth2 & OpenID Connect Identity Provider Service',
    description:
      'A custom authentication server implementing OAuth2 authorization code flow with PKCE, JWT token issuance, refresh token rotation, and role-based access management.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'jsonwebtoken'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Implement password hashing (argon2/bcrypt) and user registration/login endpoints.',
      'Build OAuth2 Authorization Code endpoint with PKCE verification.',
      'Implement JWT token signing, verification middleware, and refresh token rotation.',
      'Build user permissions management interface for scope enforcement.'
    ]
  },
  {
    id: 'backend-5',
    title: 'Chunked File Storage Gateway with Deduplication',
    description:
      'A backend storage API that breaks uploaded files into content-addressable SHA-256 chunks, eliminates duplicate storage of identical chunks, and reconstructs original files on download.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Crypto'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Implement fixed/variable chunking algorithm for incoming file streams.',
      'Build content-addressed storage repository indexing chunks by hash.',
      'Implement deduplication registry verifying existing chunk hashes prior to disk write.',
      'Build file reconstruction stream handler for download requests.'
    ]
  },

  // --- DATA / ANALYTICS ---
  {
    id: 'data-1',
    title: 'Automated Resume & Skill Matcher for Tech Jobs',
    description:
      'A data processing engine that extracts text from student resumes (PDF/DOCX), normalizes technical skills against a standardized taxonomy, and scores compatibility against job descriptions.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'FastAPI', 'scikit-learn', 'pdfplumber'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build document parser to extract unstructured text from PDFs.',
      'Create TF-IDF / Cosine Similarity matrix engine for skill extraction.',
      'Implement skill dictionary normalization (e.g. mapping "ReactJS" -> "React").',
      'Expose REST endpoint providing compatibility percentage and missing skill gap report.'
    ]
  },
  {
    id: 'data-2',
    title: 'Campus Energy Consumption Forecasting Tool',
    description:
      'An analytics pipeline that ingests historical smart meter electrical data, cleans missing records, trains a time-series forecasting model, and visualizes predicted peak demand hours.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Pandas', 'Prophet/Statsmodels', 'Streamlit'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Clean and preprocess multi-year energy consumption CSV datasets.',
      'Perform exploratory data analysis to identify seasonal load patterns.',
      'Train time-series forecasting model (ARIMA or Prophet) on historical data.',
      'Deploy interactive Streamlit dashboard showing forecasts and anomaly alerts.'
    ]
  },
  {
    id: 'data-3',
    title: 'Student Course Feedback Sentiment Analyzer',
    description:
      'A natural language processing pipeline that categorizes student end-of-semester qualitative feedback into positive, neutral, or negative sentiments and extracts key keywords.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'NLTK/VADER', 'Flask', 'Chart.js'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Preprocess feedback text (lowercasing, stop-word removal, tokenization).',
      'Apply VADER sentiment analysis dictionary to score text samples.',
      'Generate keyword cloud and topic distribution summaries per course.',
      'Build simple web dashboard displaying aggregated course sentiment scores.'
    ]
  },
  {
    id: 'data-4',
    title: 'Source Code Plagiarism & Similarity Detector',
    description:
      'An educational static analysis tool that parses student programming assignment submissions into Abstract Syntax Trees (ASTs), compares token sequences, and flags structural code similarity.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'AST module', 'Node.js', 'Vue.js'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement AST parser for target language (Python or JavaScript).',
      'Build Rabin-Karp or Winnowing fingerprinting algorithm on normalized AST tokens.',
      'Generate pairwise similarity score matrix across student submission directory.',
      'Build side-by-side code diff visualizer highlighting matching code fragments.'
    ]
  },
  {
    id: 'data-5',
    title: 'Library Book Recommendation Engine',
    description:
      'A recommendation system that analyzes historical student borrowing patterns using item-based collaborative filtering to suggest relevant supplementary textbooks for registered courses.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'Pandas', 'Surprise / scikit-learn', 'FastAPI'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Construct user-book interaction matrix from checkout history logs.',
      'Implement item-item k-Nearest Neighbors collaborative filtering model.',
      'Evaluate model accuracy using Precision@K and Mean Absolute Error (MAE).',
      'Expose REST API delivering personalized top-N recommended books per student.'
    ]
  },

  // --- SYSTEMS / NETWORKING ---
  {
    id: 'systems-1',
    title: 'Lightweight HTTP/1.1 Static Web Server with Thread Pooling',
    description:
      'A CLI static web server written from low-level sockets handling HTTP GET/HEAD requests, MIME type detection, concurrency via a fixed worker pool, and basic logging.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['C++', 'or Node.js native Net/TCP', 'POSIX Threads'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Implement raw TCP socket listener handling incoming client connections.',
      'Parse HTTP request lines, headers, and requested file path.',
      'Build non-blocking thread pool for concurrent client request processing.',
      'Implement HTTP response builder with status codes (200, 404, 500) and MIME types.'
    ]
  },
  {
    id: 'systems-2',
    title: 'Custom DNS Server with Domain Filtering & LRU Cache',
    description:
      'A lightweight UDP-based DNS server that intercepts DNS queries, checks against a local blocklist for ad-blocking/malware domain filtering, and caches upstream DNS responses in memory.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js (dgram module)', 'TypeScript', 'LRU Cache'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Implement UDP socket listener on port 53 and binary DNS packet parser.',
      'Build in-memory domain blocklist matching engine.',
      'Implement upstream DNS resolver forwarding with answer packet response.',
      'Add LRU (Least Recently Used) cache for fast TTL-based DNS record responses.'
    ]
  },
  {
    id: 'systems-3',
    title: 'TCP Layer 4 Load Balancer with Health Checking',
    description:
      'A reverse proxy load balancer operating at the TCP layer, distributing incoming client socket connections across backend nodes using round-robin and least-connections algorithms.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['Go', 'or Node.js Net module', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Implement TCP connection forwarding proxy between client sockets and target servers.',
      'Build Round-Robin and Least-Connections backend selector algorithms.',
      'Add active periodic HTTP/TCP health checker to automatically remove failed backends.',
      'Expose live stats endpoint detailing connection counts and server health status.'
    ]
  },
  {
    id: 'systems-4',
    title: 'Virtual Memory Page Replacement Simulator',
    description:
      'An educational simulation and visualization CLI/web tool comparing Operating System memory page replacement strategies (FIFO, LRU, Optimal, Clock) against custom page reference strings.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['TypeScript', 'React', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Implement algorithmic state machines for FIFO, LRU, Optimal, and Clock algorithms.',
      'Build step-by-step memory frame state transition simulator engine.',
      'Calculate and display comparative Page Fault rates and execution statistics.',
      'Design visual step-through UI rendering memory frame slots and cache hits/misses.'
    ]
  },
  {
    id: 'systems-5',
    title: 'Embedded Key-Value Store with Write-Ahead Logging',
    description:
      'A persistent key-value storage engine featuring an in-memory MemTable, Write-Ahead Log (WAL) for crash recovery, and immutable SSTable disk files with binary search indexing.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['TypeScript', 'Node.js fs/buffer', 'Vitest'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement append-only Write-Ahead Log (WAL) to guarantee durability.',
      'Build in-memory MemTable using balanced SkipList or Red-Black Tree data structure.',
      'Implement MemTable flushing to immutable SSTable disk files with sparse index.',
      'Build crash recovery mechanism that replays WAL on startup.'
    ]
  },

  // --- SECURITY BASICS ---
  {
    id: 'security-1',
    title: 'Password Security Evaluator & Leak Checker CLI',
    description:
      'A security utility CLI that checks password strength against entropy metrics, common dictionary wordlists, and verifies if hashed passwords appear in public breach databases via k-Anonymity APIs.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Commander.js', 'Crypto API'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build Shannon entropy calculator and password pattern complexity analyzer.',
      'Integrate local dictionary matching to detect common password substrings.',
      'Implement SHA-1 hashing and k-Anonymity API lookup against HaveIBeenPwned API.',
      'Provide actionable security score and recommendations output.'
    ]
  },
  {
    id: 'security-2',
    title: 'Web Application Firewall (WAF) Rule Evaluator Proxy',
    description:
      'An HTTP reverse proxy that inspects incoming web requests against customizable security rule sets to detect and block SQL Injection (SQLi), Cross-Site Scripting (XSS), and Path Traversal attacks.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'Express / http-proxy'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build HTTP proxy engine inspecting query params, request headers, and payload bodies.',
      'Design regular expression and token-matching engine for SQLi and XSS patterns.',
      'Implement dynamic IP blocking and configurable request score thresholds.',
      'Create security event logger and real-time security dashboard.'
    ]
  },
  {
    id: 'security-3',
    title: 'Static Security Vulnerability Analyzer for Dependencies',
    description:
      'A command-line tool that parses project manifest files (e.g. package.json), audits installed package versions against known CVE vulnerability databases, and reports severity risks.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', 'Node.js', 'OSV API / GitHub Advisory API'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Build package manifest parser extracting dependency names and version ranges.',
      'Query Open Source Vulnerabilities (OSV) public API for matching package advisories.',
      'Implement semver range matching logic to identify vulnerable installed versions.',
      'Generate formatted terminal reports and JSON export with remediation advice.'
    ]
  },
  {
    id: 'security-4',
    title: 'Encrypted File Vault with AES-256-GCM & HMAC',
    description:
      'A secure CLI application for encrypting sensitive files locally using PBKDF2 key derivation, AES-256-GCM authenticated encryption, and tamper detection.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Node Crypto Module'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Implement PBKDF2 salt-based master key derivation function from user passphrase.',
      'Implement streaming file encryption/decryption using AES-256-GCM.',
      'Add authentication tag verification to detect file tampering.',
      'Build CLI commands for vault creation, locking, unlocking, and file inspection.'
    ]
  },
  {
    id: 'security-5',
    title: 'Network Traffic Anomaly & Port Scan Detector',
    description:
      'A network monitoring tool that captures local packet metadata, monitors incoming connection rates per IP, and triggers security alerts when port scanning or TCP SYN flood activity is detected.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Scapy', 'or Node.js pcap', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Set up low-level packet capture listener filtering TCP/UDP packet headers.',
      'Build sliding-window packet rate tracker per remote source IP.',
      'Implement heuristic rules detecting SYN scan patterns and rapid sequential port probes.',
      'Build console dashboard and real-time email/webhook alert triggers.'
    ]
  }
];
