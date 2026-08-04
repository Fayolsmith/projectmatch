import { Project } from '../lib/types.js';

export const CURATED_PROJECTS: Project[] = [
  // =========================================================================
  // --- WEB DEVELOPMENT (27 projects: 9 beginner, 9 intermediate, 9 advanced) ---
  // =========================================================================
  // Beginner (9)
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
  {
    id: 'web-16',
    title: 'Student Hostel Roommate Compatibility Finder',
    description:
      'A web tool matching students seeking hostel accommodation based on study habits, sleep schedules, cleanliness preferences, and department.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Design lifestyle preference survey questionnaire form.',
      'Implement compatibility scoring algorithm comparing user profile vectors.',
      'Build filtered match list with masked contact request options.',
      'Store user profiles and match requests in Firebase.'
    ]
  },
  {
    id: 'web-17',
    title: 'Campus Library Quiet Zone & Desk Reservation System',
    description:
      'A visual booking application for university students to reserve library study carrels and silent reading desks in advance.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['Vue.js', 'TypeScript', 'CSS Grid', 'LocalStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Render visual floor plan grid of library quiet zones.',
      'Implement desk availability state toggling (Free, Reserved, Occupied).',
      'Build time slot selector enforcing 2-hour maximum booking limits.',
      'Generate booking confirmation pass with seat location.'
    ]
  },
  {
    id: 'web-18',
    title: 'Departmental Student Notice & Announcement Hub',
    description:
      'A digital bulletin portal for departmental associations to publish official announcements, exam timetables, and seminar schedules with category tags.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['HTML5', 'Bootstrap', 'JavaScript', 'PHP/SQLite'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Create announcement feed UI with tag filtering (Exams, Seminars, Association).',
      'Implement executive admin portal for publishing and editing notices.',
      'Add search bar indexing notice titles and body text.',
      'Support attachment downloads for official PDF circulars.'
    ]
  },
  {
    id: 'web-19',
    title: 'Campus Bus Route & Arrival Time Viewer',
    description:
      'A responsive web application displaying campus shuttle routes, stop locations, estimated transit times, and ticket fare tables.',
    category: 'web',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'Leaflet.js', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Embed interactive Leaflet map rendering campus shuttle stops and paths.',
      'Build timetable lookup view filtered by peak vs off-peak hours.',
      'Calculate estimated walk time to nearest shuttle stop using user location.',
      'Add fare calculator based on start and destination stops.'
    ]
  },

  // Intermediate (9)
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
  {
    id: 'web-20',
    title: 'Campus Cafeteria Daily Menu & Review Portal',
    description:
      'A food service portal allowing campus vendors to publish daily meal menus, nutritional info, and pricing, while enabling students to post ratings and dietary reviews.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Build vendor management UI for updating daily breakfast/lunch offerings.',
      'Implement student review and star-rating module with photo uploads.',
      'Add dietary filter tags (Vegan, Halal, Nut-Free, Budget Deals).',
      'Create analytics dashboard showing top-rated daily dishes per cafeteria.'
    ]
  },
  {
    id: 'web-21',
    title: 'Student Final-Year Project Team Formation Hub',
    description:
      'A platform helping final-year students pitch project concepts, advertise open team roles (Frontend, Backend, ML), and review teammate applications.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build project proposal creation form with required tech stack tags.',
      'Implement applicant review workflow for team leaders to accept/reject members.',
      'Add team role requirements matrix and progress status tracker.',
      'Integrate supervisor assignment request tracking.'
    ]
  },
  {
    id: 'web-22',
    title: 'Departmental Equipment & Lab Instrument Reservation Hub',
    description:
      'A resource management portal for engineering and computer labs to catalog hardware kits (Raspberry Pis, Oscilloscopes), handle borrowing requests, and enforce return deadlines.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Model inventory schema for lab devices, barcode IDs, and checkout status.',
      'Build student checkout request workflow with lab technologist approval.',
      'Implement automated overdue return alert notifications via email.',
      'Generate usage statistics report per equipment model.'
    ]
  },
  {
    id: 'web-23',
    title: 'Campus Alumni Mentorship & Career Directory',
    description:
      'A portal bridging alumni and graduating CS students for career guidance, resume reviews, and mock interview scheduling.',
    category: 'web',
    skillLevel: 'intermediate',
    suggestedStack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build verified alumni profile onboarding with industry role tags.',
      'Implement mentorship request booking module with calendar availability.',
      'Create document exchange space for sharing resume drafts.',
      'Add feedback scoring system post-mentorship session.'
    ]
  },

  // Advanced (9)
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
  {
    id: 'web-24',
    title: 'Distributed Web Document Editor with CRDT Sync',
    description:
      'A rich text document editor enabling distributed real-time document editing using Conflict-free Replicated Data Types (CRDTs) over WebSockets.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['Next.js', 'Yjs', 'WebSockets', 'Node.js'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement Yjs CRDT document model supporting collaborative text formatting.',
      'Build WebSocket signaling server managing room state and peer sync.',
      'Integrate rich text editor UI (TipTap / Slate.js) with presence cursors.',
      'Implement offline edit queue reconciling changes on reconnection.'
    ]
  },
  {
    id: 'web-25',
    title: 'Automated Visual Regression & UI Testing Dashboard',
    description:
      'A web testing service that takes screenshots of web pages across viewport sizes, compares pixel differences against baseline images, and flags visual regressions.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'Playwright', 'pixelmatch', 'React'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build Playwright test runner taking headless screenshots across multiple viewports.',
      'Integrate pixelmatch engine to detect visual diff percentage.',
      'Build side-by-side screenshot comparison UI highlighting diff areas in red.',
      'Expose CI webhook trigger reporting test pass/fail status.'
    ]
  },
  {
    id: 'web-26',
    title: 'Real-Time Interactive Whiteboard & Vector Canvas',
    description:
      'A browser-based vector graphics canvas for virtual study groups to sketch system architectures, draw flowcharts, and manipulate shape objects concurrently.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['React', 'HTML5 Canvas / Fabric.js', 'Socket.io', 'Node.js'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Build vector drawing canvas supporting shapes, connectors, and text labels.',
      'Implement WebSocket binary event protocol broadcasting object transformations.',
      'Add multi-user cursor tracking rendering active participant names.',
      'Export whiteboards to SVG and PNG formats.'
    ]
  },
  {
    id: 'web-27',
    title: 'Web Application Real-User Monitoring (RUM) Engine',
    description:
      'A performance analytics platform collecting client-side Web Vitals metrics (LCP, FID, CLS), aggregating error traces, and rendering real-time performance dashboards.',
    category: 'web',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'ClickHouse / PostgreSQL', 'React'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Create lightweight browser beacon SDK gathering Core Web Vitals.',
      'Build high-throughput HTTP ingestion endpoint processing metric batches.',
      'Design time-series dashboard displaying 75th percentile performance metrics.',
      'Add alert threshold triggers for JS error rate spikes.'
    ]
  },

  // =========================================================================
  // --- MOBILE DEVELOPMENT (27 projects: 9 beginner, 9 intermediate, 9 advanced) ---
  // =========================================================================
  // Beginner (9)
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
  {
    id: 'mobile-16',
    title: 'Campus Hydration & Refill Station Finder',
    description:
      'A utility mobile app mapping campus clean drinking water refill stations and encouraging daily water consumption targets.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'SQLite', 'Mapbox SDK'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Build interactive campus map rendering water refill points.',
      'Implement daily hydration logging counter with customizable cup sizes.',
      'Add push reminders for drinking water during long lecture blocks.',
      'Allow students to rate refill station filter quality.'
    ]
  },
  {
    id: 'mobile-17',
    title: 'Student Exam Revision & Target Countdown App',
    description:
      'A study companion app managing exam timetables, generating daily revision checklists, and rendering time countdown widgets.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'Expo', 'AsyncStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build exam subject registration form with date/time pickers.',
      'Implement automatic countdown timers sorted by upcoming exam date.',
      'Add daily topic study checklist for each registered course.',
      'Provide study progress bar visualizer.'
    ]
  },
  {
    id: 'mobile-18',
    title: 'Personal Budget & Expense Mobile Tracker for Students',
    description:
      'A personal finance app designed for students to track daily pocket money, meal expenses, transport costs, and monthly allowance balances.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'SQLite', 'FlChart'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Create expense entry screen with category icons (Food, Books, Transport).',
      'Implement monthly budget limit warnings when spending reaches 80%.',
      'Build pie chart rendering breakdown of monthly spending.',
      'Support CSV data export for monthly record keeping.'
    ]
  },
  {
    id: 'mobile-19',
    title: 'Campus Printing Shop Mobile Document Dispatcher',
    description:
      'A mobile utility enabling students to send document PDFs directly to local campus printing centers and choose print specifications.',
    category: 'mobile',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'Firebase', 'DocumentPicker'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Integrate device document picker for uploading PDF lecture notes.',
      'Build print configuration selector (Color vs B/W, Double-sided, Copies).',
      'Display estimated print cost and order pickup token.',
      'Send push alert when document printing is completed.'
    ]
  },

  // Intermediate (9)
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
  {
    id: 'mobile-20',
    title: 'Campus Health & Clinic Appointment Booking App',
    description:
      'A mobile healthcare app for university medical centers allowing students to book nurse consultations, track prescription readiness, and receive health alerts.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build appointment slot booking UI filtered by doctor specialty.',
      'Implement secure digital prescription record viewer.',
      'Send automated SMS/push reminders for upcoming clinic visits.',
      'Add emergency ambulance dispatch request button.'
    ]
  },
  {
    id: 'mobile-21',
    title: 'Student Carpooling & Campus Ride Sharing App',
    description:
      'A mobile carpooling app connecting student commuters traveling along similar off-campus routes to share rides and split fuel costs.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Firebase', 'Google Maps API'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Implement driver trip creation detailing origin, destination, seats, and departure time.',
      'Build rider route matching algorithm finding drivers along path.',
      'Integrate in-app messaging between driver and prospective passengers.',
      'Add user identity verification via university email domain.'
    ]
  },
  {
    id: 'mobile-22',
    title: 'Mobile Student Digital ID & Gate Access Pass',
    description:
      'A mobile application generating cryptographically signed, dynamic QR code student ID passes for campus library and hall security checkpoints.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Crypto API', 'Node.js', 'SQLite'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Design student digital ID card UI displaying profile photo and matric number.',
      'Implement dynamic time-based TOTP QR code generator preventing screenshot sharing.',
      'Build security guard scanner app mode verifying QR authenticity.',
      'Log gate entrance and exit timestamps in backend database.'
    ]
  },
  {
    id: 'mobile-23',
    title: 'Hostel Maintenance Incident & Photo Reporter',
    description:
      'A mobile reporting app for hostel residents to submit photos and location tags for plumbing, electrical, or structural damage.',
    category: 'mobile',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Expo', 'Cloudinary API', 'Node.js'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Integrate device camera module for capturing damage photos.',
      'Upload images to cloud storage and attach GPS/room location metadata.',
      'Build real-time ticket status timeline (Submitted -> Assigned -> Resolved).',
      'Add resident feedback rating upon ticket closure.'
    ]
  },

  // Advanced (9)
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
  {
    id: 'mobile-24',
    title: 'Mobile Document Scanner & OCR Text Extractor',
    description:
      'A mobile utility using computer vision to detect document borders, perform perspective correction on captured photos, and extract searchable text via OCR.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'OpenCV SDK', 'Tesseract OCR', 'Dart'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement real-time document edge detection in camera preview stream.',
      'Apply 4-point perspective transform to flatten scanned document images.',
      'Integrate Tesseract OCR engine for offline text extraction.',
      'Export multi-page PDF files with embedded searchable text layer.'
    ]
  },
  {
    id: 'mobile-25',
    title: 'Offline-First Synchronized Task & Note Manager',
    description:
      'A mobile notes app utilizing Conflict-free Replicated Data Types (CRDTs) for offline editing and seamless background synchronization across devices.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'WatermelonDB', 'WebSockets', 'Yjs'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Set up local SQLite database using WatermelonDB for high-speed local persistence.',
      'Implement CRDT delta sync algorithm over WebSocket connection.',
      'Add automatic conflict resolution for concurrent edits on different devices.',
      'Benchmark sync performance under simulated intermittent network connectivity.'
    ]
  },
  {
    id: 'mobile-26',
    title: 'Mobile Accelerometer Crash & Fall Detector',
    description:
      'A safety mobile background service monitoring accelerometer and gyroscope sensor streams to detect sudden impact forces and trigger automatic emergency alerts.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'Sensors API', 'Background Fetch', 'Node.js'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Capture high-frequency 3-axis accelerometer sensor data vectors.',
      'Implement threshold detection algorithm identifying sudden deceleration spikes.',
      'Build 30-second cancellation timer UI to prevent false positive alarms.',
      'Dispatch automated SMS alert with location link when uncancelled.'
    ]
  },
  {
    id: 'mobile-27',
    title: 'Cross-Platform On-Device Code Interpreter',
    description:
      'A mobile developer tool providing an on-device code editor and JavaScript execution engine with console log output and syntax highlighting.',
    category: 'mobile',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'JSI (JavaScript Interface)', 'Monaco Editor'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Embed mobile code editor component with syntax highlighting.',
      'Integrate isolated JavaScript runtime context executing code scripts on-device.',
      'Capture stdout console logs and display output console window.',
      'Add local snippet library storage and file export capabilities.'
    ]
  },

  // =========================================================================
  // --- BACKEND / API (27 projects: 9 beginner, 9 intermediate, 9 advanced) ---
  // =========================================================================
  // Beginner (9)
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
  {
    id: 'backend-16',
    title: 'Student Grade Import & Bulk CSV Processing API',
    description:
      'A backend API processing uploaded student grade CSV files, validating schema rules, calculating GPA metrics, and inserting clean records transactionally.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'csv-parser', 'PostgreSQL'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build streaming CSV file parser handling multi-megabyte uploads.',
      'Validate input fields against academic grading scheme regulations.',
      'Execute bulk database insertions using SQL transactions.',
      'Return detailed validation error reports for malformed rows.'
    ]
  },
  {
    id: 'backend-17',
    title: 'IP Geolocation & Network Metadata REST API',
    description:
      'A RESTful API querying local MaxMind GeoIP binary databases to return geographical coordinates, ISP details, and country codes for IP addresses.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'maxmind', 'Express'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Integrate MaxMind GeoLite2 binary database reader module.',
      'Build REST endpoints accepting single IP lookups and batch requests.',
      'Add Redis caching layer for frequent IP queries.',
      'Document API endpoints with OpenAPI specs.'
    ]
  },
  {
    id: 'backend-18',
    title: 'Lightweight Image Resizing & Thumbnail Microservice',
    description:
      'An HTTP microservice accepting image URLs or file uploads, resizing images on-the-fly based on query parameters (width, height, format), and serving WebP outputs.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'sharp', 'Express', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Implement image processing pipeline using `sharp` library.',
      'Support dynamic query param transformations (`?w=300&h=200&format=webp`).',
      'Implement disk-backed cache for transformed thumbnail outputs.',
      'Add HTTP Cache-Control headers to optimize browser delivery.'
    ]
  },
  {
    id: 'backend-19',
    title: 'System Uptime & Service Health Probe Service',
    description:
      'A background service that periodically sends HTTP/TCP probes to monitored target URLs, tracks response latency, and calculates uptime percentages.',
    category: 'backend',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'SQLite', 'node-cron'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build cron scheduler executing HTTP GET requests to target endpoints.',
      'Log response status codes, execution times, and failure reasons.',
      'Calculate daily/weekly uptime SLA percentage metrics.',
      'Expose REST API for querying endpoint health histories.'
    ]
  },

  // Intermediate (9)
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
  {
    id: 'backend-20',
    title: 'Distributed Cron Job Scheduler Engine',
    description:
      'A distributed cron management backend parsing standard cron expressions, acquiring Redis locks to prevent duplicate execution, and invoking worker tasks.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'cron-parser', 'Redis'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Parse 5-field cron syntax expressions to calculate next execution timestamps.',
      'Implement distributed lock manager using Redlock algorithm.',
      'Dispatch scheduled task payloads to HTTP webhooks or message queues.',
      'Expose job execution history API with execution duration metrics.'
    ]
  },
  {
    id: 'backend-21',
    title: 'File Upload Gateway with Anti-Virus Hook',
    description:
      'A secure file ingestion API gateway that buffers incoming file uploads, streams files through anti-virus scanner processes (ClamAV), and stores clean files.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'clamscan', 'TypeScript'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Build streaming file upload handler using multipart/form-data parser.',
      'Integrate ClamAV daemon socket connector for inline virus scanning.',
      'Quarantine infected files and emit security alert logs.',
      'Persist verified clean files to S3-compatible object storage.'
    ]
  },
  {
    id: 'backend-22',
    title: 'Multi-Provider Push Notification Server',
    description:
      'A unified push notification gateway accepting message payloads and routing notifications across Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs).',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build unified message schema supporting title, body, icon, and deep-link payload.',
      'Implement device token registry mapping tokens to user IDs.',
      'Integrate FCM and APNs push provider SDKs.',
      'Handle invalid token cleanup based on provider response feedback.'
    ]
  },
  {
    id: 'backend-23',
    title: 'Real-Time Gaming Leaderboard Engine',
    description:
      'A backend scoring API utilizing Redis Sorted Sets to maintain real-time player leaderboards, rank computations, and score delta updates.',
    category: 'backend',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Redis', 'Express'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Implement Redis Sorted Set operations (`ZADD`, `ZREVRANK`, `ZREVRANGE`) for player scores.',
      'Build REST endpoints retrieving top-N players and surrounding neighborhood ranks.',
      'Support seasonal leaderboard resets with snapshot archiving.',
      'Write concurrency unit tests demonstrating thread-safe score increments.'
    ]
  },

  // Advanced (9)
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
  {
    id: 'backend-24',
    title: 'Distributed Database Sharding Router Gateway',
    description:
      'A database proxy layer sitting in front of PostgreSQL shard instances, routing queries based on consistent hashing of shard keys.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'pg-query-parser', 'PostgreSQL'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement consistent hashing ring distributing key ranges across database nodes.',
      'Build SQL query AST parser to extract shard key values from WHERE clauses.',
      'Implement connection pooling and query dispatching to targeted shard instances.',
      'Handle shard node additions and key range rebalancing.'
    ]
  },
  {
    id: 'backend-25',
    title: 'High-Performance Time-Series Data Ingestion Gateway',
    description:
      'A streaming telemetry ingestion service buffering high-frequency IoT metric streams in memory ring buffers before batch writing to columnar storage.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Go / Node.js', 'ClickHouse', 'Redis', 'TypeScript'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Build UDP/TCP binary telemetry stream collector handling 50,000 metrics/sec.',
      'Implement in-memory lock-free ring buffer for metric batching.',
      'Write flush controller writing compressed metric blocks to ClickHouse storage.',
      'Benchmark throughput and memory consumption under burst traffic.'
    ]
  },
  {
    id: 'backend-26',
    title: 'gRPC Microservices Mesh with Service Discovery',
    description:
      'A microservice Communication layer using Protocol Buffers over HTTP/2 gRPC, featuring automated service discovery and client-side load balancing.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', '@grpc/grpc-js', 'protobufjs', 'Consul / Etcd'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Define Protocol Buffer `.proto` schemas for inter-service RPC contracts.',
      'Implement service registry connector advertising active service instances.',
      'Build gRPC client interceptor managing round-robin client-side load balancing.',
      'Add distributed tracing header propagation across RPC calls.'
    ]
  },
  {
    id: 'backend-27',
    title: 'Distributed Transaction Saga Orchestrator',
    description:
      'An event-driven transaction coordinator managing multi-service workflows (Reserve -> Charge -> Ship) with automated compensating transactions on failure.',
    category: 'backend',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'RabbitMQ', 'PostgreSQL'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement Saga State Machine tracking multi-step transaction progress.',
      'Emit step execution commands and await async step completion events.',
      'Implement backward recovery executing compensating transactions when any step fails.',
      'Build inspection dashboard visualizing active and compensated Sagas.'
    ]
  },

  // =========================================================================
  // --- DATA / ANALYTICS (27 projects: 9 beginner, 9 intermediate, 9 advanced) ---
  // =========================================================================
  // Beginner (9)
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
  {
    id: 'data-16',
    title: 'Student Cafeteria Meal Consumption Pattern Miner',
    description:
      'An analytics script processing cafeteria register logs to analyze popular meal choices, peak dining hours, and daily revenue aggregations.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Clean raw transaction log files handling missing timestamps.',
      'Perform hourly dining hall attendance volume aggregation.',
      'Identify top 10 most ordered menu combinations.',
      'Generate visual heatmaps of peak cafeteria traffic.'
    ]
  },
  {
    id: 'data-17',
    title: 'Campus Wi-Fi Bandwidth & Traffic Usage Visualizer',
    description:
      'A data visualizer processing router bandwidth logs to map network usage density across campus building access points.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Dash', 'Plotly'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Parse access point CSV logs extracting bytes transferred per building.',
      'Build interactive Dash web dashboard rendering line charts of network load.',
      'Highlight buildings exceeding bandwidth thresholds during exam periods.',
      'Export daily bandwidth utilization summaries.'
    ]
  },
  {
    id: 'data-18',
    title: 'E-Commerce Customer RFM Segmentation Profiler',
    description:
      'A customer analytics tool evaluating Recency, Frequency, and Monetary (RFM) transaction metrics to group e-commerce shoppers into value segments.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'scikit-learn', 'Streamlit'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Compute RFM score metrics from raw transaction histories.',
      'Apply K-Means clustering to segment customers into 4 value tiers.',
      'Build Streamlit interactive dashboard showing segment distributions.',
      'Export targeted marketing customer list CSVs.'
    ]
  },
  {
    id: 'data-19',
    title: 'Public Transport Delay & Schedule Adherence Analyzer',
    description:
      'An analytics tool comparing scheduled bus departure timetables against actual sensor logs to calculate route delay averages.',
    category: 'data',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Matplotlib'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Align scheduled vs actual arrival timestamp datasets.',
      'Compute mean delay minutes per bus route and time of day.',
      'Identify top 3 bottleneck transit stops.',
      'Generate summary PDF report for campus transport committee.'
    ]
  },

  // Intermediate (9)
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
  {
    id: 'data-20',
    title: 'Real Estate Property Rental Price Estimator',
    description:
      'A machine learning regression model predicting housing rental prices based on location features, bedroom counts, square footage, and proximity to campus.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Scrape and clean tabular rental housing datasets.',
      'Engineer geographic distance features to university gates.',
      'Train Ridge Regression and Gradient Boosting Regressor models (R² > 0.82).',
      'Build interactive Streamlit price estimation app.'
    ]
  },
  {
    id: 'data-21',
    title: 'Social Media Topic Trend & Hashtag Tracker',
    description:
      'A streaming text analytics pipeline consuming public social posts, calculating hashtag frequency velocity, and identifying emerging viral campus topics.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'Tweepy / Mastodon API', 'Pandas', 'Flask'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Connect to public social media API stream filtering targeted keywords.',
      'Maintain sliding window hashtag frequency count dictionaries.',
      'Compute velocity metric identifying rapidly growing topics.',
      'Build web dashboard visualizing top trending campus conversations.'
    ]
  },
  {
    id: 'data-22',
    title: 'Clinical Patient Hospital Readmission Risk Scorer',
    description:
      'A healthcare predictive model evaluating patient electronic health records to score 30-day hospital readmission probabilities for care management.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'scikit-learn', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Preprocess anonymized clinical tabular datasets handling missing lab values.',
      'Train Random Forest classifier evaluated using ROC-AUC and F1-score.',
      'Extract SHAP feature importance values explaining key risk drivers.',
      'Deploy REST API delivering patient risk scores.'
    ]
  },
  {
    id: 'data-23',
    title: 'Customer Subscription Churn Predictor API',
    description:
      'A predictive machine learning API analyzing customer usage metrics to flag subscription churn risks and generate retention recommendations.',
    category: 'data',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'XGBoost', 'FastAPI', 'Pandas'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Clean customer behavioral event metrics (logins, support tickets, usage).',
      'Train XGBoost binary classifier optimizing for Precision-Recall curve.',
      'Expose FastAPI endpoint accepting customer ID payloads.',
      'Generate automated retention email triggers for high-risk churn scores.'
    ]
  },

  // Advanced (9)
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
  {
    id: 'data-24',
    title: 'Financial Stock Market Anomaly & Spike Detector',
    description:
      'A time-series deep learning pipeline using Autoencoders to detect abnormal trading volume and price movement spikes in stock market feeds.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'PyTorch', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Preprocess high-frequency trade tick data into fixed sequence windows.',
      'Train Autoencoder neural network to reconstruct normal market sequence patterns.',
      'Flag sequence windows exceeding reconstruction error thresholds as anomalies.',
      'Build alert feed dashboard rendering price chart anomaly points.'
    ]
  },
  {
    id: 'data-25',
    title: 'Real-Time Audio Speech Emotion Recognition Engine',
    description:
      'A speech processing system extracting Mel-Frequency Cepstral Coefficients (MFCCs) from voice clips to classify emotional states (Happy, Sad, Angry, Neutral).',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'librosa', 'scikit-learn / TensorFlow', 'FastAPI'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Preprocess raw audio wav files extracting 40 MFCC features per frame.',
      'Train 1D Convolutional Neural Network or Random Forest classifier.',
      'Build real-time audio chunk processor accepting microphone audio input.',
      'Render live emotion probability distribution charts.'
    ]
  },
  {
    id: 'data-26',
    title: 'Autonomous Vehicle Sensor Fusion Object Tracker',
    description:
      'A sensor data fusion system utilizing Extended Kalman Filters (EKF) to combine noisy radar and LiDAR measurement inputs into accurate vehicle tracking state estimates.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python / C++', 'NumPy', 'Matplotlib'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement Extended Kalman Filter state prediction and measurement update equations.',
      'Process simulated LiDAR (Cartesian) and Radar (Polar) sensor input streams.',
      'Compute Root Mean Square Error (RMSE) comparing estimated track against ground truth.',
      'Visualize 2D vehicle trajectory tracking paths.'
    ]
  },
  {
    id: 'data-27',
    title: 'Distributed Matrix Factorization Recommendation Engine',
    description:
      'A large-scale recommendation system implementing Alternating Least Squares (ALS) matrix factorization to process millions of user rating interactions.',
    category: 'data',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'PySpark', 'Spark MLlib', 'FastAPI'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Set up PySpark data processing cluster environment.',
      'Train Spark MLlib ALS collaborative filtering model on sparse rating matrices.',
      'Tune latent factors hyperparameter using grid search CV.',
      'Deploy FastAPI endpoint delivering batch item recommendations.'
    ]
  },

  // =========================================================================
  // --- SYSTEMS / NETWORKING (27 projects: 9 beginner, 9 intermediate, 9 advanced) ---
  // =========================================================================
  // Beginner (9)
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
  {
    id: 'systems-16',
    title: 'Command-Line Shell Implementation (Mini-Bash)',
    description:
      'A lightweight Unix command-line shell supporting process spawning, input/output redirection (`>`, `<`), command piping (`|`), and built-in commands (`cd`, `pwd`, `exit`).',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['C / C++', 'POSIX System Calls (fork, execvp, pipe)'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Build REPL command line parser tokenizing commands and argument vectors.',
      'Implement process creation using `fork()` and `execvp()` syscalls.',
      'Implement file descriptor redirection using `dup2()`.',
      'Add single and multi-stage pipeline command chaining (`cmd1 | cmd2`).'
    ]
  },
  {
    id: 'systems-17',
    title: 'Low-Level Memory Allocator Simulator',
    description:
      'An educational heap memory simulator demonstrating memory allocation algorithms (First-Fit, Best-Fit, Worst-Fit) and visualizing heap fragmentation.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['TypeScript', 'React', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Implement heap block header linked list structure tracking free vs allocated memory.',
      'Build allocation routines for First-Fit, Best-Fit, and Worst-Fit algorithms.',
      'Implement `free()` block coalescing to merge adjacent free memory blocks.',
      'Build visual heap layout map rendering allocated vs free memory fragments.'
    ]
  },
  {
    id: 'systems-18',
    title: 'Serial Port & Peripheral Communication Terminal',
    description:
      'A terminal utility communicating with hardware devices over RS-232/UART serial connections, displaying raw hexadecimal data feeds.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'serialport', 'Commander.js'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'List available OS COM/serial port devices.',
      'Establish serial connection with configurable baud rates (9600, 115200).',
      'Format incoming data streams in side-by-side ASCII and Hexadecimal views.',
      'Log serial communication sessions to file.'
    ]
  },
  {
    id: 'systems-19',
    title: 'Disk Partition Table Inspector & Sector Checker',
    description:
      'A system utility parsing Master Boot Record (MBR) and GUID Partition Table (GPT) binary structures from raw disk image files.',
    category: 'systems',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'struct module', 'CLI'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Read Sector 0 binary buffer of disk image files.',
      'Parse MBR 16-byte partition entry structures extracting start/size LBA sectors.',
      'Parse GPT Primary Header structures verifying header CRC32 checksums.',
      'Print formatted partition table layout summary.'
    ]
  },

  // Intermediate (9)
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
  {
    id: 'systems-20',
    title: 'User-Space FAT16 File System Reader & Extractor',
    description:
      'A system utility parsing FAT16 file system structures from raw disk images to list directory entries, parse file allocation tables, and extract file contents.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['C / Python', 'Buffer API', 'CLI'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Parse FAT16 Boot Sector (BIOS Parameter Block) fields.',
      'Traverse Root Directory Sector reading 32-byte directory entry records.',
      'Follow FAT table cluster chains to read file payload bytes.',
      'Build CLI tool extracting specified files from disk images.'
    ]
  },
  {
    id: 'systems-21',
    title: 'Network Bandwidth Benchmark & Throughput Tester',
    description:
      'A custom network benchmarking utility (similar to iPerf) measuring TCP/UDP socket transfer speeds, latency variance, and packet loss rates between client and server.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['Go / Node.js Net module', 'TypeScript'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Implement client-server binary protocol for negotiating benchmark duration and buffer sizes.',
      'Stream high-volume TCP/UDP data payloads across socket connections.',
      'Calculate real-time Megabits Per Second (Mbps) transfer speed.',
      'Generate summary report detailing throughput, jitter, and packet loss.'
    ]
  },
  {
    id: 'systems-22',
    title: 'Virtual Machine Bytecode Interpreter',
    description:
      'A virtual machine execution engine featuring a custom assembly instruction set (PUSH, POP, ADD, JMP), register file, stack memory, and bytecode interpreter.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['C++ / TypeScript', 'Node.js', 'Vitest'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Define binary opcode instruction set architecture (ISA).',
      'Implement virtual CPU state machine with PC (Program Counter) and general registers.',
      'Build fetch-decode-execute instruction loop.',
      'Write simple assembler compiler translating text assembly into binary bytecode.'
    ]
  },
  {
    id: 'systems-23',
    title: 'Asynchronous Binary Protocol Buffer Serializer',
    description:
      'A high-speed binary data serialization library encoding structured data fields into compact varint binary payloads with zero dynamic allocation.',
    category: 'systems',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', 'Node.js Buffer', 'Vitest'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Implement variable-length zigzag integer (Varint) encoding/decoding routines.',
      'Build schema encoder converting JavaScript objects to binary byte buffers.',
      'Implement binary reader parsing field tags and wire types.',
      'Benchmark serialized payload sizes against standard JSON format.'
    ]
  },

  // Advanced (9)
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
  {
    id: 'systems-24',
    title: 'Distributed Lock Manager with Deadlock Detector',
    description:
      'A distributed locking service implementing lease expirations, lock renewal heartbeats, and Wait-For graph cycle detection to prevent deadlocks.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['Go / Node.js', 'gRPC', 'TypeScript'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Build distributed lock acquire/release RPC endpoints with TTL leases.',
      'Maintain directed Wait-For graph tracking lock dependencies across clients.',
      'Implement Tarjan / DFS cycle detection algorithm identifying deadlock loops.',
      'Abort conflicting lock requests and return deadlock error codes.'
    ]
  },
  {
    id: 'systems-25',
    title: 'Userspace TCP/IP Network Stack Simulator',
    description:
      'A minimal TCP/IP network stack operating in userspace over Linux TUN/TAP virtual network interfaces, handling ARP resolution, IPv4 routing, and TCP state transitions.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['C / Rust', 'Linux TUN/TAP API'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Configure TUN/TAP virtual device reading raw Ethernet/IP frames.',
      'Implement ARP request/reply packet handling and ARP cache table.',
      'Implement IPv4 packet parsing and ICMP Echo response processing.',
      'Implement TCP finite state machine (LISTEN, SYN_RCVD, ESTABLISHED, FIN_WAIT).'
    ]
  },
  {
    id: 'systems-26',
    title: 'Lock-Free Shared Memory Ring Buffer IPC',
    description:
      'An Inter-Process Communication (IPC) library utilizing shared memory regions and atomic memory operations (`atomic_cas`) for lock-free message passing.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['C++11', 'POSIX shm_open / mmap', 'std::atomic'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Allocate POSIX shared memory region (`shm_open`, `mmap`) shared between 2 processes.',
      'Implement single-producer single-consumer (SPSC) lock-free ring buffer using atomic memory barriers.',
      'Benchmark message throughput comparing IPC speed against Unix domain sockets.',
      'Handle process crash cleanup and shared memory unlinking.'
    ]
  },
  {
    id: 'systems-27',
    title: 'Generational Garbage Collector Engine',
    description:
      'A simulated memory management garbage collector implementing Young Generation (Nursery) copying collection and Old Generation Mark-and-Sweep compaction.',
    category: 'systems',
    skillLevel: 'advanced',
    suggestedStack: ['C++ / TypeScript', 'Vitest'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement object heap model with header mark bits and forward pointers.',
      'Implement Cheney Copying GC algorithm for Young Generation allocations.',
      'Implement Mark-and-Sweep collection with LISP 2 object compaction for Old Generation.',
      'Visualize memory heap layout before and after garbage collection cycles.'
    ]
  },

  // =========================================================================
  // --- SECURITY BASICS (27 projects: 9 beginner, 9 intermediate, 9 advanced) ---
  // =========================================================================
  // Beginner (9)
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
      'Implement AES-256 encryption for raw text messages using user passphrase.',
      'Parse PNG image RGBA pixel buffers and overwrite LSBs with secret message payload bitstream.',
      'Build extraction tool reading LSB bits and decrypting original message.',
      'Verify image visual quality preservation using Peak Signal-to-Noise Ratio (PSNR).'
    ]
  },
  {
    id: 'security-16',
    title: 'Classical Cryptography & Cipher Educational Toolkit',
    description:
      'An educational cryptography application demonstrating classical ciphers (Caesar, Vigenère, Playfair) alongside letter frequency analysis tools.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'TypeScript', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Implement encryption and decryption logic for Caesar, Vigenère, and Substitution ciphers.',
      'Build letter frequency distribution chart for ciphertext inputs.',
      'Implement automated frequency analysis solver guessing Caesar shift keys.',
      'Provide step-by-step visual cipher matrix walkthroughs.'
    ]
  },
  {
    id: 'security-17',
    title: 'Sensitive File Shredder & Data Wiping Utility',
    description:
      'A secure data deletion CLI tool that overwrites target files with zero bytes, random bit patterns, and DoD 5220.22-M wiping standards before deletion.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Crypto Module', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Implement multi-pass file content overwriting (Zero pass, Random bytes pass, Inverted pass).',
      'Flush OS file system write buffers after each overwrite pass.',
      'Rename file to random string before unlinking file descriptor.',
      'Log audit summary confirming permanent data erasure.'
    ]
  },
  {
    id: 'security-18',
    title: 'Personal CLI Password Manager with AES Keyfile',
    description:
      'A secure command-line password vault encrypting stored credentials using PBKDF2 key derivation and AES-256-CBC, featuring auto-copying to clipboard.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Crypto Module', 'clipboardy'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Derive AES master key from user master password using PBKDF2 with 100,000 iterations.',
      'Encrypt and decrypt credential vault JSON files using AES-256-CBC with random IV.',
      'Build search and query CLI commands copying passwords to clipboard with 15s auto-clear.',
      'Add master password verification check.'
    ]
  },
  {
    id: 'security-19',
    title: 'X.509 Certificate Inspector & PEM Viewer',
    description:
      'A utility tool parsing PEM/DER encoded SSL certificates to display validity ranges, Subject Alternative Names (SANs), public key fingerprints, and signature algorithms.',
    category: 'security',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Crypto Module', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Parse PEM certificate string blocks into ASN.1 binary structures.',
      'Extract x509 fields: Subject, Issuer, Validity Dates, Key Usage, and SANs.',
      'Compute SHA-256 and SHA-1 certificate fingerprints.',
      'Output formatted color terminal certificate summary.'
    ]
  },

  // Intermediate (9)
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
  {
    id: 'security-20',
    title: 'Cross-Site Scripting (XSS) Input Sanitization Gateway',
    description:
      'A request filter middleware inspecting incoming web forms and query parameters for XSS payload signatures, sanitizing HTML tags before processing.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'DOMPurify', 'TypeScript'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Inspect JSON request bodies, URL query params, and headers.',
      'Match payload strings against XSS attack vector patterns (`<script>`, `onerror=`, `javascript:`).',
      'Apply DOMPurify HTML sanitization rules to neutralize executable script tags.',
      'Log sanitization events with original vs cleaned payload diffs.'
    ]
  },
  {
    id: 'security-21',
    title: 'Cryptographic Ransomware Behavior Monitor',
    description:
      'A host monitoring utility watching target directories for suspicious file activity, such as rapid file extensions renames or sudden entropy increases.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'chokidar', 'TypeScript', 'Crypto Module'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Set up recursive file system watcher monitoring create/modify/delete file events.',
      'Compute file Shannon entropy changes before and after modifications.',
      'Detect rapid mass file renames matching known ransomware extension patterns (.locked, .crypto).',
      'Trigger emergency process isolation alert when suspicious thresholds are breached.'
    ]
  },
  {
    id: 'security-22',
    title: 'OAuth Token Introspection & Blacklist Service',
    description:
      'An authentication security microservice providing fast OAuth JWT token validation, active revocation check endpoints, and Redis token blacklists.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Redis', 'Express'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Build RFC 7662 Token Introspection API endpoint returning active token metadata.',
      'Implement JWT token revocation endpoint writing `jti` claim IDs to Redis blacklist.',
      'Add fast middleware verifying token validity against expiration and blacklist.',
      'Benchmark token introspection latency under high API traffic.'
    ]
  },
  {
    id: 'security-23',
    title: 'SSH Key Security & Permitted Shell Auditor',
    description:
      'A server auditing utility scanning system `authorized_keys` files to check SSH key lengths, key algorithms (Ed25519 vs RSA 1024), and forced command restrictions.',
    category: 'security',
    skillLevel: 'intermediate',
    suggestedStack: ['Python / Node.js', 'TypeScript', 'CLI'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Parse SSH `authorized_keys` files extracting key type, base64 key, and options.',
      'Flag weak RSA keys under 2048 bits and obsolete DSA key types.',
      'Check for dangerous options (e.g. missing `no-port-forwarding` or `no-pty`).',
      'Generate server security hardening recommendation report.'
    ]
  },

  // Advanced (9)
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
  },
  {
    id: 'security-24',
    title: 'Automated Binary Security Hardening Analyzer (Checksec)',
    description:
      'A binary security inspection tool parsing ELF/PE executable files to evaluate security mitigations (ASLR, NX Stack, Stack Canaries, RELRO, Control Flow Guard).',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'pefile / elftools', 'CLI'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Parse ELF/PE binary headers extracting section flags and dynamic tags.',
      'Check for Non-Executable Stack (`NX`), Address Space Layout Randomization (`PIE`), and Stack Canaries.',
      'Audit Read-Only Relocations (`RELRO`) and Control Flow Integrity (`CFI`) flags.',
      'Generate binary security score matrix and vulnerability mitigation recommendations.'
    ]
  },
  {
    id: 'security-25',
    title: 'Encrypted DNS-over-HTTPS (DoH) Security Proxy',
    description:
      'A DNS security proxy intercepting local UDP DNS queries, encrypting requests into HTTPS JSON/wireformat payloads, and forwarding queries to DNS-over-HTTPS resolvers.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js (dgram module)', 'TypeScript', 'Axios / fetch'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Implement local UDP DNS socket server listening on port 53.',
      'Serialize binary DNS question packets into RFC 8484 DoH HTTPS requests.',
      'Forward requests over TLS 1.3 to Cloudflare / Google DoH resolvers.',
      'Unpack HTTPS DNS answers and return binary DNS response to local client.'
    ]
  },
  {
    id: 'security-26',
    title: 'Hardware Security Module (HSM) Key Management API',
    description:
      'A cryptographic key management microservice wrapping PKCS#11 hardware interfaces to perform key generation, RSA/ECC signing, and decryption without exposing private keys.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'gpkcs11', 'TypeScript', 'Express'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Connect to PKCS#11 software HSM emulator (SoftHSM2).',
      'Implement key generation API for RSA 4096-bit and ECDSA P-256 key pairs.',
      'Expose cryptographic signing endpoint returning digital signatures.',
      'Implement strict access control and key usage audit logging.'
    ]
  },
  {
    id: 'security-27',
    title: 'Automated REST API Security Fuzzer',
    description:
      'A security testing tool that parses OpenAPI/Swagger specifications, mutates request payloads with boundary values and SQLi/XSS payloads, and flags unhandled server exceptions.',
    category: 'security',
    skillLevel: 'advanced',
    suggestedStack: ['TypeScript', 'Node.js', 'Axios', 'OpenAPI Parser'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Parse OpenAPI 3.0 YAML/JSON specification files to discover endpoints and schemas.',
      'Generate mutated test payloads (large strings, nulls, special characters, SQLi strings).',
      'Execute HTTP requests and monitor server status codes for 500 Internal Server Errors.',
      'Generate vulnerability report highlighting crashing endpoints and input parameters.'
    ]
  }
];
