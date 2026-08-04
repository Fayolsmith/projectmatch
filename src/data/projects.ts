import { Project } from '../lib/types.js';

export const CURATED_PROJECTS: Project[] = [
  // =========================================================================
  // --- WEB DEVELOPMENT (15 projects) ---
  // =========================================================================
  // Beginner (5)
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
    id: 'web-6',
    title: 'Campus Facility Maintenance Request Portal',
    description:
      'A web portal allowing students and staff to submit maintenance requests for damaged lecture hall equipment or hostel facilities, with real-time status tracking.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build request submission form with photo upload and location selectors.',
      'Implement Firestore collection for ticket status tracking.',
      'Create technician admin view for updating repair progress.',
      'Add email notifications on ticket resolution.'
    ]
  },
  {
    id: 'web-7',
    title: 'Developer Portfolio & Interactive Project Showcase',
    description:
      'A customizable web portfolio template for computer science students to showcase SIWES projects, GitHub repositories, technical skills, and downloadable resumes.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['HTML5', 'Vanilla CSS', 'JavaScript', 'GitHub API'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Create responsive grid layout with dark mode toggle.',
      'Fetch live public repositories and stats using GitHub REST API.',
      'Build dynamic project filtering by tech stack and category.',
      'Deploy site to GitHub Pages with clean contact form validation.'
    ]
  },
  {
    id: 'web-8',
    title: 'Student Assignment & Exam Deadline Calendar',
    description:
      'An interactive web calendar designed for students to organize coursework deadlines, set task priorities, and view upcoming exam schedules with countdown tags.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['Vue.js', 'JavaScript', 'CSS3', 'LocalStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build month and agenda calendar views.',
      'Implement assignment creation modal with priority tag selectors.',
      'Add browser notification triggers for upcoming deadlines within 24 hours.',
      'Support JSON export and import for schedule backups.'
    ]
  },
  {
    id: 'web-9',
    title: 'Campus Lost & Found Bulletin Board',
    description:
      'A campus community board where students can post lost or found items with photo attachments, claim verification questions, and masked contact details.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Create item posting form with category tags and location pickers.',
      'Build searchable gallery view with item status (Lost vs Claimed).',
      'Implement claim verification modal with owner challenge question.',
      'Add security controls masking user phone numbers until verified.'
    ]
  },

  // Intermediate (5)
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
    id: 'web-10',
    title: 'Student Organization Dues & Member Management',
    description:
      'A financial management portal for departmental associations to track member registrations, process dues payments, issue digital receipts, and audit treasury balances.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Design member directory database with role permissions.',
      'Implement payment receipt logging and verification workflow.',
      'Build financial dashboard visualizing dues collected versus outstanding balance.',
      'Add automated email receipt delivery and membership card export.'
    ]
  },
  {
    id: 'web-11',
    title: 'Peer Tutoring Session Scheduler & Feedback Portal',
    description:
      'A web application connecting senior student tutors with junior tutees, enabling session booking, topic requests, review submission, and study hours logging.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['React', 'Node.js', 'Express', 'SQLite'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Implement tutor profile creation detailing course expertise and open availability.',
      'Build booking calendar with subject topic selection.',
      'Implement star rating and written feedback system post-session.',
      'Add tutor leaderboard based on verified study hours delivered.'
    ]
  },
  {
    id: 'web-12',
    title: 'Departmental Lecture Timetable Generator',
    description:
      'An administrative web application that assists academic coordinators in building clash-free lecture and lab timetables across multiple levels and shared venues.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Define data models for courses, lecturers, venues, and time slots.',
      'Build interactive drag-and-drop timetable grid UI.',
      'Implement real-time conflict detector checking lecturer and venue double-bookings.',
      'Export finalized master schedules to PDF and iCal format.'
    ]
  },

  // Advanced (5)
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
  {
    id: 'web-13',
    title: 'Multi-Tenant Student Club Web Engine',
    description:
      'A multi-tenant web platform enabling campus societies to deploy custom subdomains, landing pages, announcement feeds, and registration forms from a single core codebase.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Architect multi-tenant database isolation model using tenant IDs or schemas.',
      'Build dynamic theme engine allowing clubs to customize branding colors and logo.',
      'Implement subdomain routing middleware.',
      'Build central super-admin monitoring portal for resource usage.'
    ]
  },
  {
    id: 'web-14',
    title: 'Automated Web Accessibility & Audit Dashboard',
    description:
      'A web tool that crawls student project URLs, runs automated WCAG 2.1 accessibility checks, flags non-compliant color contrasts or missing ARIA tags, and generates detailed compliance reports.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'Puppeteer', 'axe-core', 'React'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build headless browser crawler using Puppeteer to navigate page trees.',
      'Integrate axe-core audit engine to run WCAG rule evaluations.',
      'Parse violation outputs into categorized severity scores.',
      'Build dashboard presenting visual code snippets and remediation instructions.'
    ]
  },
  {
    id: 'web-15',
    title: 'Interactive Real-Time Classroom Polling System',
    description:
      'A high-concurrency web platform allowing lecturers to launch instant multiple-choice polls during classes and render live animated result distributions using WebSockets.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['React', 'Node.js', 'ws', 'Redis', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    milestones: [
      'Build WebSocket server handling concurrent student session connections.',
      'Implement pub/sub message broker using Redis for horizontal scaling.',
      'Design live chart dashboard updating poll results in real time.',
      'Export session response analytics and attendance logs to CSV.'
    ]
  },

  // =========================================================================
  // --- MOBILE DEVELOPMENT (15 projects) ---
  // =========================================================================
  // Beginner (5)
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
    id: 'mobile-6',
    title: 'Campus Emergency Alert & Safety Companion',
    description:
      'A safety-focused mobile app providing one-tap emergency contacts, GPS location broadcasting to security, and campus safety route guides.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'Expo', 'Location API', 'AsyncStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Design quick-access SOS panic button with instant SMS/call trigger.',
      'Integrate device GPS location services to capture precise coordinates.',
      'Build offline directory of campus security posts and clinic numbers.',
      'Add flashlight toggle and audible distress siren feature.'
    ]
  },
  {
    id: 'mobile-7',
    title: 'Campus Fitness & Step Goal Tracker',
    description:
      'A mobile app encouraging healthy habits among students by tracking daily walking steps, calculating campus distance covered, and unlocking campus milestone badges.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'Pedometer Sensor API', 'SQLite'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Connect app to mobile pedometer sensor API for background step counts.',
      'Implement daily step goal progress ring and streak counter.',
      'Build campus landmark distance converter (e.g. "Walked from Library to Gate").',
      'Store historical activity logs in local database.'
    ]
  },
  {
    id: 'mobile-8',
    title: 'Student Flashcard & Spaced Repetition App',
    description:
      'A mobile study tool allowing students to create custom flashcard decks by course code and practice retention using Leitner box spaced repetition intervals.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'TypeScript', 'AsyncStorage'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Build deck and flashcard creation UI supporting text and code snippets.',
      'Implement Leitner 5-box algorithm for interval study scheduling.',
      'Create interactive flashcard review mode with flip animation.',
      'Display daily review progress and mastery percentages.'
    ]
  },

  // Intermediate (5)
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
    id: 'mobile-9',
    title: 'Hostel Laundry Machine Reservation App',
    description:
      'A mobile application enabling hall residents to check washing machine availability in real-time, reserve 45-minute slots, and receive push notifications when cycles end.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Firebase Realtime DB', 'Cloud Messaging'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Model machine status (Available, Occupied, Out of Service) in Realtime DB.',
      'Build interactive slot reservation grid with 45-min lock duration.',
      'Set up Firebase Cloud Messaging for cycle completion push alerts.',
      'Add report button for faulty machines notifying hostel managers.'
    ]
  },
  {
    id: 'mobile-10',
    title: 'Campus Navigation & Indoor Room Finder',
    description:
      'A mobile map companion that helps fresh students navigate campus pathways and locate specific lecture halls, laboratories, and faculty offices.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Mapbox SDK', 'SQLite', 'Dart'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Digitize campus building locations and indoor room numbers into GeoJSON.',
      'Integrate Mapbox SDK with custom map style overlay.',
      'Implement search auto-complete for room codes (e.g. "LT1", "Lab 3").',
      'Build step-by-step outdoor walking route guidance engine.'
    ]
  },
  {
    id: 'mobile-11',
    title: 'Student Skill Sharing & Micro-Services Marketplace',
    description:
      'A peer-to-peer mobile marketplace where students offer or request campus services such as graphic design, proofreading, computer formatting, or tutoring.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build user service profile creation with skill portfolio uploads.',
      'Implement service request listing with budget and deadline tags.',
      'Add real-time buyer-provider chat room.',
      'Create completion approval workflow with mutual rating reviews.'
    ]
  },

  // Advanced (5)
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
  {
    id: 'mobile-12',
    title: 'Real-Time Audio Lecture Summarizer App',
    description:
      'A mobile app that records lecture audio, streams audio chunks to a speech-to-text API, and extracts structured key bullet points and action items automatically.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'Audio Recorder API', 'Whisper API', 'Node.js'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement chunked audio recording and background streaming pipeline.',
      'Integrate speech-to-text API for transcript generation.',
      'Build NLP processing module to summarize long transcriptions into study bullets.',
      'Implement local transcript search and audio playback sync.'
    ]
  },
  {
    id: 'mobile-13',
    title: 'Mobile AR Campus Tour & Historic Guide',
    description:
      'An augmented reality mobile application rendering 3D information cards, historical facts, and department details when pointing the camera at campus buildings.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['Unity', 'AR Foundation', 'C#', 'Mobile OS'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Set up Unity AR Foundation camera tracking and plane detection.',
      'Create 3D floating UI prefab cards for department information.',
      'Implement GPS-assisted location trigger to display correct landmark AR data.',
      'Build audio tour player integrated with AR visual overlays.'
    ]
  },
  {
    id: 'mobile-14',
    title: 'BLE Peer-to-Peer Offline Mesh Communicator',
    description:
      'A mobile communication app that forms an ad-hoc mesh network over Bluetooth Low Energy (BLE) allowing students to exchange text messages without cellular network service.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'flutter_blue_plus', 'SQLite', 'Dart'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement BLE advertising and scanning service for peer discovery.',
      'Build multi-hop store-and-forward packet routing protocol.',
      'Implement end-to-end encryption for mesh packet payloads.',
      'Build chat UI displaying message delivery acknowledgements across hops.'
    ]
  },
  {
    id: 'mobile-15',
    title: 'Smart Parking Occupancy & Finder App',
    description:
      'A mobile application connecting to campus parking sensors/cameras to display real-time parking space availability and navigate drivers to open bays.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'MQTT/WebSockets', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build real-time MQTT subscriber consuming parking lot sensor feeds.',
      'Design interactive parking bay map displaying occupied vs free slots.',
      'Implement bay reservation countdown timer for arriving drivers.',
      'Add parking history and peak occupancy analytics.'
    ]
  },

  // =========================================================================
  // --- BACKEND / API (15 projects) ---
  // =========================================================================
  // Beginner (5)
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
    id: 'backend-6',
    title: 'Public Open Data REST API Wrapper',
    description:
      'A structured backend REST API that scrapes and aggregates public academic metrics, standardizes response formats, and caches results in Redis.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'Redis', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build RESTful endpoints returning JSON formatted data with pagination.',
      'Implement Redis caching layer with configurable TTLs to reduce origin requests.',
      'Add Swagger / OpenAPI interactive documentation endpoints.',
      'Write unit tests verifying API error handling and status codes.'
    ]
  },
  {
    id: 'backend-7',
    title: 'Centralized Config & Feature Flag Server',
    description:
      'A lightweight configuration server storing environment settings and feature flags, serving client SDKs via HTTP REST and Server-Sent Events (SSE).',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'SQLite', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Design SQLite schema for feature flags, targeting rules, and environments.',
      'Build admin API for toggling flags on/off per environment.',
      'Implement Server-Sent Events (SSE) endpoint to push real-time flag updates.',
      'Create lightweight client JavaScript SDK for evaluating flags.'
    ]
  },
  {
    id: 'backend-8',
    title: 'Base62 URL Shortener & Analytics API',
    description:
      'A high-performance URL shortening backend service that generates unique short keys using Base62 encoding and records click metrics including user-agent and referrer.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Implement Base62 encoding algorithm converting auto-increment IDs to short keys.',
      'Build HTTP 302 redirect engine backed by Redis cache.',
      'Log redirection events asynchronously for analytics processing.',
      'Expose analytics endpoints returning total clicks, top referrers, and daily trends.'
    ]
  },
  {
    id: 'backend-9',
    title: 'Markdown Documentation Host & Parser API',
    description:
      'A backend service accepting raw Markdown files or Git webhooks, compiling them into clean sanitized HTML, and serving versioned API documentation.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'marked', 'DOMPurify'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build file upload and Git webhook ingestion endpoint.',
      'Integrate markdown compilation pipeline with XSS sanitization.',
      'Implement table of contents extractor generating JSON navigation trees.',
      'Serve versioned documentation routes with client caching headers.'
    ]
  },

  // Intermediate (5)
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
    id: 'backend-10',
    title: 'Multi-Room WebSockets Chat Backend',
    description:
      'A scalable real-time messaging backend supporting channel creation, direct messaging, message history persistence, and user online presence heartbeats.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'ws', 'TypeScript', 'Redis Pub/Sub', 'PostgreSQL'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Build WebSocket server handling connection lifecycle and authentication tokens.',
      'Implement Redis Pub/Sub for broadcasting messages across worker instances.',
      'Build message persistence queue writing chat logs to PostgreSQL.',
      'Implement online/offline presence tracker with periodic ping/pong frames.'
    ]
  },
  {
    id: 'backend-11',
    title: 'Webhook Delivery Engine with HMAC Retries',
    description:
      'An event-driven backend service responsible for delivering outbound webhooks to third-party subscriber URLs with cryptographic HMAC signatures and exponential retry backoff.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Design subscription management endpoints for registered webhook endpoints.',
      'Implement HMAC SHA-256 signature generator for payload authentication.',
      'Build worker queue dispatching HTTP POST requests with timeout protection.',
      'Log delivery status codes and build manual retry trigger endpoints.'
    ]
  },
  {
    id: 'backend-12',
    title: 'Unified Payment Gateway Aggregator API',
    description:
      'A unified backend abstraction layer normalizing API calls across multiple payment providers (Paystack, Flutterwave, Stripe) with webhook verification.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build strategy pattern abstraction interface for payment operations (charge, verify, refund).',
      'Implement provider adapters for Paystack and Flutterwave REST APIs.',
      'Build webhook receiver validating cryptographically signed provider webhooks.',
      'Log transaction ledger entries with idempotent processing guarantees.'
    ]
  },

  // Advanced (5)
  {
    id: 'backend-3',
    title: 'High-Throughput Distributed Log Collector & Alert API',
    description:
      'A high-performance backend service that ingests streaming log events from client applications, indexes logs by severity, and triggers webhook alerts when error thresholds are exceeded.',
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
  {
    id: 'backend-13',
    title: 'CQRS & Event Sourcing Order Engine',
    description:
      'A specialized backend architecture separating write commands from read queries using an event log store to replay order state changes deterministically.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Kafka / RabbitMQ'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Design append-only event store table holding serialized domain events.',
      'Implement command handlers validating business rules and emitting events.',
      'Build asynchronous read model projections updating queryable read tables.',
      'Create event replay utility to rebuild read projections from scratch.'
    ]
  },
  {
    id: 'backend-14',
    title: 'In-Memory Caching Proxy with XFetch Stampede Guard',
    description:
      'A high-concurrency caching proxy layer sitting between application servers and database databases that prevents cache stampedes using probabilistic early recomputation (XFetch algorithm).',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['TypeScript', 'Node.js', 'Redis', 'Vitest'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement core key-value get/set proxy wrapper around Redis client.',
      'Implement XFetch probabilistic algorithm determining when to refresh cached entries before expiration.',
      'Build mutex locking fallback for background recomputation workers.',
      'Benchmark response latency under simulated thundering herd traffic.'
    ]
  },
  {
    id: 'backend-15',
    title: 'Distributed Token-Bucket Rate Limiter Gateway',
    description:
      'A high-throughput API gateway middleware that enforces distributed sliding window and token bucket rate limits across clustered server nodes using Lua scripts in Redis.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'Redis', 'Lua'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Write atomic Redis Lua script executing token bucket refill and deduction in a single step.',
      'Build Express / Fastify gateway middleware evaluating client API keys or IP addresses.',
      'Add dynamic rate limit header injection (X-RateLimit-Remaining, Retry-After).',
      'Conduct high-concurrency load testing demonstrating zero race conditions.'
    ]
  },

  // =========================================================================
  // --- DATA / ANALYTICS (15 projects) ---
  // =========================================================================
  // Beginner (5)
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
    id: 'data-6',
    title: 'Campus Weather & Microclimate Data Collector',
    description:
      'A data processing script that periodically ingests local weather API readings, calculates heat comfort indices, and exports structured CSV reports.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Requests', 'Matplotlib'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Set up scheduled fetcher fetching temperature, humidity, and wind data.',
      'Calculate heat index and thermal comfort scores.',
      'Generate daily summary charts and export clean CSV datasets.',
      'Build interactive HTML report viewer.'
    ]
  },
  {
    id: 'data-7',
    title: 'University Library Borrowing Stats Dashboard',
    description:
      'An analytics dashboard analyzing historical library checkout records to highlight top borrowed book categories, peak loan months, and overdue frequencies.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Clean raw library checkout CSV logs and parse timestamp data.',
      'Calculate metric aggregations (top genres, average borrow duration).',
      'Build interactive Streamlit web dashboard with category filters.',
      'Export summary reports for library acquisitions planning.'
    ]
  },
  {
    id: 'data-8',
    title: 'Product Review Keyword & Noun Phrase Miner',
    description:
      'A text mining pipeline that processes raw customer review comments, extracts frequently mentioned product feature nouns, and links features with rating scores.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'spaCy', 'Pandas', 'Flask'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Preprocess text dataset and perform Part-of-Speech (POS) tagging.',
      'Extract noun chunks corresponding to product features (e.g. "battery life", "screen").',
      'Correlate extracted features with 1-5 star user ratings.',
      'Build web UI displaying top positive and negative product features.'
    ]
  },
  {
    id: 'data-9',
    title: 'Academic Co-authorship & Citation Graph Analyzer',
    description:
      'A network analysis utility that parses academic publication metadata files (BibTeX/CSV), constructs co-author collaboration graphs, and calculates author centrality scores.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'NetworkX', 'BibtexParser', 'PyVis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Parse BibTeX publication files into author and paper data structures.',
      'Build undirected collaboration graph using NetworkX.',
      'Compute degree centrality and PageRank scores to identify key researchers.',
      'Export interactive HTML graph visualization using PyVis.'
    ]
  },

  // Intermediate (5)
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
    id: 'data-5',
    title: 'Library Book Collaborative Recommendation Engine',
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
  {
    id: 'data-10',
    title: 'Student Academic Attrition Early Warning Predictor',
    description:
      'A predictive machine learning model trained on anonymized student quiz scores, attendance rates, and assignment submission timing to flag students at risk of course failure.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'scikit-learn', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Engineered tabular feature dataset from synthetic academic records.',
      'Train and evaluate Logistic Regression, Random Forest, and XGBoost classifiers.',
      'Optimize model for recall to minimize false negatives on at-risk students.',
      'Deploy FastAPI endpoint returning risk score probabilities and key risk factors.'
    ]
  },
  {
    id: 'data-11',
    title: 'Campus Traffic & Pedestrian Density Analyzer',
    description:
      'A computer vision data pipeline that processes campus camera video frames using object detection to count pedestrian and vehicle traffic volume over time.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'OpenCV', 'YOLOv8', 'Streamlit'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    milestones: [
      'Set up OpenCV video capture pipeline for frame extraction.',
      'Integrate pre-trained YOLOv8 model for person and vehicle detection.',
      'Build bounding box tracking and virtual counting line crossing logic.',
      'Visualize hourly traffic density curves in a Streamlit dashboard.'
    ]
  },
  {
    id: 'data-12',
    title: 'Automated Expense Classifier & Budget Forecaster',
    description:
      'A personal finance analytics tool that parses bank transaction statements, categorizes spending descriptions using Naive Bayes text classification, and forecasts end-of-month balances.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'Pandas', 'scikit-learn', 'Flask'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Build CSV/OFX statement parser extracting transaction text and amounts.',
      'Train Multinomial Naive Bayes text classifier on labeled transaction training data.',
      'Implement moving average monthly expenditure forecasting engine.',
      'Generate visual budget progress breakdown and alert thresholds.'
    ]
  },

  // Advanced (5)
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
    id: 'data-13',
    title: 'Streaming Credit Card Fraud Detection Pipeline',
    description:
      'A real-time data streaming pipeline ingesting mock credit card transaction events, scoring each transaction with an Isolation Forest anomaly model, and outputting fraud alerts.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Kafka', 'scikit-learn', 'Docker'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Set up Apache Kafka event topic for transaction stream ingestion.',
      'Train Isolation Forest model on imbalanced transaction dataset.',
      'Build real-time consumer scoring streaming events against model thresholds.',
      'Output fraud alerts to WebSocket dashboard with sub-second latency.'
    ]
  },
  {
    id: 'data-14',
    title: 'News Article LDA Topic Modeling Engine',
    description:
      'A text analytics engine that collects unstructured news articles from RSS feeds, extracts latent topics using Latent Dirichlet Allocation (LDA), and tracks topic evolution over time.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Gensim', 'spaCy', 'pyLDAvis', 'FastAPI'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build RSS feed scraper collecting articles across multiple news sources.',
      'Preprocess text with lemmatization, bi-gram phrase detection, and TF-IDF filtering.',
      'Train Gensim LDA topic model and optimize topic coherence (C_v score).',
      'Deploy pyLDAvis interactive topic visualizer embedded in FastAPI web portal.'
    ]
  },
  {
    id: 'data-15',
    title: 'Distributed MapReduce Log Analytics Engine',
    description:
      'A lightweight distributed MapReduce implementation in Python that splits large web server access logs across worker processes to compute top IP bandwidth consumers and 4xx error rates.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'multiprocessing', 'ZeroMQ / Sockets'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Design Master node for splitting file chunks and assigning Map/Reduce tasks to Workers.',
      'Implement Map functions parsing Apache/Nginx access log lines.',
      'Implement Shuffle and Sort phase grouping intermediate key-value pairs.',
      'Implement Reduce functions computing aggregated metrics and outputting final summaries.'
    ]
  },

  // =========================================================================
  // --- SYSTEMS / NETWORKING (15 projects) ---
  // =========================================================================
  // Beginner (5)
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
    id: 'systems-6',
    title: 'Network Ping & ICMP Latency Probe CLI',
    description:
      'A command-line networking utility that constructs raw ICMP Echo Request packets, measures round-trip latency, calculates packet jitter, and displays terminal graphs.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js / Python', 'Raw Sockets', 'Commander.js'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Construct raw ICMP Echo Request binary packet headers with checksum computation.',
      'Send ICMP probes over raw sockets and await ICMP Echo Reply frames.',
      'Calculate RTT min/max/average stats and loss percentage.',
      'Render ascii terminal chart visualizing connection latency spikes.'
    ]
  },
  {
    id: 'systems-7',
    title: 'System Process Resource Monitor CLI',
    description:
      'A terminal resource monitoring utility similar to top/htop that reads OS process stats, tracks CPU and RAM consumption per process, and supports sending termination signals.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js / Python', 'psutil', 'blessed/ink'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Read process status metadata from OS system interfaces (/proc or psutil).',
      'Build interactive terminal UI table updating every 1000ms.',
      'Implement process sorting by CPU%, Memory%, PID, and user.',
      'Add keybindings for sending SIGTERM (kill) commands to selected processes.'
    ]
  },
  {
    id: 'systems-8',
    title: 'File System Duplicate Finder & Space Analyzer',
    description:
      'A high-speed disk utility CLI that recursively traverses specified directory trees, detects duplicate files using fast size check + SHA-256 hashing, and outputs tree visual maps.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Implement recursive directory crawler handling symlinks and permission errors.',
      'Group candidate duplicate files by file size prior to hashing.',
      'Compute SHA-256 stream hashes for matching size candidates to confirm duplicate status.',
      'Generate formatted summary detailing space wasted and interactive deletion prompts.'
    ]
  },

  // Intermediate (5)
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
    id: 'systems-9',
    title: 'Linux Namespace Process Isolator (Mini-Docker)',
    description:
      'A lightweight process containerization wrapper utilizing Linux namespaces (PID, Mount, Net) and cgroups to isolate processes with restricted CPU and memory limits.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['C / Go', 'Linux Syscalls', 'cgroups v2'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Invoke `clone()` syscall with `CLONE_NEWPID`, `CLONE_NEWNS`, and `CLONE_NEWNET` flags.',
      'Set up pivot_root chroot environment from a minimal rootfs folder.',
      'Configure cgroup v2 controller memory and max CPU quota limits.',
      'Expose CLI syntax `minidocker run <rootfs> <command>`.'
    ]
  },
  {
    id: 'systems-10',
    title: 'Custom TCP Syn-Flood & Packet Generator Tool',
    description:
      'A network benchmarking and security testing utility that constructs custom IP/TCP header frames to simulate high-volume connection requests and evaluate firewall drop rules.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['C / Python', 'Raw Sockets', 'Scapy'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Construct raw IPv4 and TCP header byte structures with custom flags.',
      'Implement checksum calculation routines for IP and TCP pseudo-headers.',
      'Build multi-threaded packet sender emitting target packet bursts.',
      'Add safety features requiring explicit confirmation prior to execution.'
    ]
  },
  {
    id: 'systems-11',
    title: 'Distributed In-Memory Key-Value Dictionary',
    description:
      'An in-memory key-value database server supporting custom binary protocol commands (SET, GET, DEL, EXPIRE), key eviction policies, and concurrent TCP connections.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js Net module', 'TypeScript', 'Vitest'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Design binary/text wire protocol for command serialization and parsing.',
      'Implement concurrent TCP connection listener storing data in memory maps.',
      'Add TTL key expiration handling using active sweep and passive check routines.',
      'Build client CLI REPL utility for interacting with the key-value server.'
    ]
  },
  {
    id: 'systems-12',
    title: 'Async Non-Blocking TFTP File Transfer Protocol',
    description:
      'A custom implementation of the Trivial File Transfer Protocol (TFTP) over UDP sockets, featuring sliding window packet acknowledgements and file transfer resume capabilities.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js dgram module', 'TypeScript', 'Buffer API'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Parse TFTP packet types (RRQ, WRQ, DATA, ACK, ERROR).',
      'Implement UDP socket file read/write stream handler using 512-byte block chunks.',
      'Add timeout retransmission mechanism for lost ACK packets.',
      'Implement partial file transfer resume using block offset requests.'
    ]
  },

  // Advanced (5)
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
  {
    id: 'systems-13',
    title: 'User-space Encrypted FUSE File System Driver',
    description:
      'A virtual file system driver implemented via FUSE that transparently encrypts file contents using AES-256 before writing to underlying storage blocks.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['C / Rust', 'libfuse', 'OpenSSL / ring'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement FUSE callback operations (`read`, `write`, `readdir`, `getattr`).',
      'Integrate AES-256-GCM block encryption routine for file payload writes.',
      'Implement key derivation from master password prompt on file system mount.',
      'Benchmark file read/write IOPS compared to native EXT4 file systems.'
    ]
  },
  {
    id: 'systems-14',
    title: 'Custom Raft Consensus Protocol Implementation',
    description:
      'A distributed state machine replication engine implementing the Raft consensus algorithm, including leader election, log replication, and split-brain safety.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['Go / TypeScript', 'gRPC / WebSockets', 'Vitest'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement Raft node state machine (Follower, Candidate, Leader) with randomized election timers.',
      'Build `RequestVote` and `AppendEntries` RPC messaging handlers.',
      'Implement log replication with leader commit index tracking.',
      'Simulate network partition scenarios verifying cluster safety and election recovery.'
    ]
  },
  {
    id: 'systems-15',
    title: 'High-Performance Async Event Loop Engine',
    description:
      'A low-level asynchronous event loop library wrapping OS I/O multiplexing primitives (`epoll` on Linux, `kqueue` on macOS) to schedule non-blocking socket tasks.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['C / C++', 'epoll / kqueue syscalls'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Wrap `epoll_create`, `epoll_ctl`, and `epoll_wait` system calls in clean C++ abstraction.',
      'Implement event registration interface for read/write socket descriptors.',
      'Build min-heap timer queue for executing delayed timer callbacks.',
      'Construct echo TCP benchmark server demonstrating handling 10,000 concurrent sockets.'
    ]
  },

  // =========================================================================
  // --- SECURITY BASICS (15 projects) ---
  // =========================================================================
  // Beginner (5)
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
    id: 'security-6',
    title: 'File Directory SHA-256 Integrity Verification Tool',
    description:
      'A CLI security tool that generates cryptographic SHA-256 manifest files for critical system directories and detects unauthorized file modifications or tampering.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Crypto Module', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Scan directory recursively and generate SHA-256 baseline checksum manifest.',
      'Build verification mode comparing current directory state against baseline manifest.',
      'Flag added, modified, or deleted files with precise timestamps.',
      'Export audit report in text and JSON format.'
    ]
  },
  {
    id: 'security-7',
    title: 'Multi-Factor Authentication (TOTP) CLI App',
    description:
      'A command-line authenticator tool implementing RFC 6238 Time-based One-Time Passwords (TOTP), secret key generation, terminal QR code rendering, and verification.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'otplib', 'qrcode-terminal'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Implement HMAC-SHA1 TOTP token generation algorithm based on current Unix epoch time.',
      'Generate base32 secret keys and render ASCII QR codes in terminal.',
      'Build verification function accepting 6-digit user tokens within time drift window.',
      'Secure local storage of secret keys using encrypted keyfile.'
    ]
  },
  {
    id: 'security-8',
    title: 'HTTP Security Headers Auditor & Scanner',
    description:
      'A web security tool that connects to target web applications, inspects HTTP response headers, evaluates CSP/HSTS policies, and generates security grade reports.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Axios', 'Chalk'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Fetch response headers from target HTTP/HTTPS URLs.',
      'Evaluate presence and configuration of essential headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).',
      'Calculate letter grade (A+ to F) based on missing or misconfigured headers.',
      'Output recommendations explaining risk mitigation for each missing header.'
    ]
  },
  {
    id: 'security-9',
    title: 'Image Steganography Secret Message Encoder',
    description:
      'A security desktop/CLI utility that hides encrypted text messages inside the Least Significant Bits (LSBs) of PNG image files without visual degradation.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Python / Node.js', 'pngjs', 'Crypto Module'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Implement AES-256 encryption for raw text messages using user passcode.',
      'Parse PNG image RGBA pixel buffers and overwrite LSBs with secret message payload bitstream.',
      'Build extraction tool reading LSB bits and decrypting original message.',
      'Verify image visual quality preservation using Peak Signal-to-Noise Ratio (PSNR).'
    ]
  },

  // Intermediate (5)
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
    id: 'security-10',
    title: 'SSL/TLS Certificate Expiry & Cipher Auditor',
    description:
      'A network security scanner that inspects HTTPS server TLS handshakes, validates x509 certificate chains, checks expiration dates, and audits weak cipher suites.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js tls module', 'TypeScript', 'Commander.js'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Establish TLS socket connection to target host and retrieve peer certificate.',
      'Parse x509 fields: issuer, SANs, valid from/to timestamps, and key size.',
      'Test support for deprecated TLS versions (SSLv3, TLS 1.0, TLS 1.1) and weak ciphers.',
      'Generate terminal report highlighting expiring certs and insecure configurations.'
    ]
  },
  {
    id: 'security-11',
    title: 'SQL Injection AST Code Scanner for Node/Python',
    description:
      'A static code analysis utility parsing JS/TS or Python source files into Abstract Syntax Trees (ASTs) to flag unsafe raw string concatenations in SQL query calls.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', '@babel/parser', 'Babel Traverse'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Parse target source code files into AST nodes.',
      'Traverse AST looking for database query method calls (e.g. `db.query(...)`).',
      'Identify binary expression concatenation or template literals containing raw user input variables.',
      'Output line number, snippet, and parameterized query recommendation.'
    ]
  },
  {
    id: 'security-12',
    title: 'Brute-Force Auth Lockout & Rate Limit Proxy',
    description:
      'A security reverse proxy middleware that tracks failed login attempts per account/IP, enforcing progressive exponential delay lockouts to prevent brute-force attacks.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'Redis', 'TypeScript'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Intercept POST requests to authentication endpoints (/api/login).',
      'Track failed attempts in Redis indexed by IP and username.',
      'Apply progressive delay lockouts (e.g. 5 failures -> 1 min lock, 10 failures -> 15 min lock).',
      'Build admin unlock endpoint and audit log feed.'
    ]
  },

  // Advanced (5)
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
  },
  {
    id: 'security-13',
    title: 'Microservice Mutual TLS (mTLS) Auth Proxy',
    description:
      'A security infrastructure project featuring a custom private Certificate Authority (CA) issuing X.509 certificates to microservices and an mTLS reverse proxy enforcing mutual authentication.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js tls module', 'OpenSSL', 'TypeScript'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Build private Certificate Authority CLI tool generating root CA, intermediate certs, and key pairs.',
      'Configure mTLS reverse proxy enforcing client certificate validation (`rejectUnauthorized: true`).',
      'Extract client certificate identity details for authorization headers.',
      'Implement Certificate Revocation List (CRL) check mechanism.'
    ]
  },
  {
    id: 'security-14',
    title: 'OCI Container Layer Vulnerability Scanner',
    description:
      'A container security analyzer that inspects OCI/Docker image TAR archives, extracts filesystem layer manifests, reads package databases (dpkg, rpm, apk), and queries vulnerability databases.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'tar-stream', 'OSV API'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Extract layer TAR archives from exported Docker image blobs.',
      'Locate and parse Linux package manager status files (e.g. `/var/lib/dpkg/status`).',
      'Query OSV / NVD APIs for vulnerabilities matching installed package versions.',
      'Generate severity breakdown report (Critical, High, Medium, Low).'
    ]
  },
  {
    id: 'security-15',
    title: 'Zero-Knowledge Proof (ZKP) Age & Credential Verifier',
    description:
      'A cryptographic verification app using zero-knowledge proofs (zk-SNARKs) allowing users to prove age > 18 or student membership without revealing birth date or private identity details.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['circom', 'snarkjs', 'JavaScript', 'React'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Write Circom arithmetic circuit evaluating inequality condition (`birthYear <= currentYear - 18`).',
      'Compile circuit and perform trusted setup phase generating proving and verification keys.',
      'Build client web app generating zero-knowledge proof from secret input.',
      'Build verifier backend verifying proof authenticity without learning secret birth year.'
    ]
  }
];
