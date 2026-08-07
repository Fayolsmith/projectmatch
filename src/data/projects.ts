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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['HTML5', 'Vanilla CSS', 'JavaScript', 'GitHub API'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Vue.js', 'JavaScript', 'CSS3', 'LocalStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Vue.js', 'TypeScript', 'CSS Grid', 'LocalStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['HTML5', 'Bootstrap', 'JavaScript', 'PHP/SQLite'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'Leaflet.js', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'React', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Vue.js', 'Node.js', 'MongoDB', 'pdfkit'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React', 'Node.js', 'Express', 'SQLite'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Next.js', 'Socket.io', 'Monaco Editor', 'Node.js'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['React', 'Express', 'Elasticsearch', 'PostgreSQL'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'Puppeteer', 'axe-core', 'React'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['React', 'Node.js', 'ws', 'Redis', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Next.js', 'Yjs', 'WebSockets', 'Node.js'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'Playwright', 'pixelmatch', 'React'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['React', 'HTML5 Canvas / Fabric.js', 'Socket.io', 'Node.js'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'ClickHouse / PostgreSQL', 'React'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'Dart', 'SQLite', 'Leaflet/Mapbox'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'SQLite', 'FlChart', 'Dart'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'Expo', 'Location API', 'AsyncStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'Pedometer Sensor API', 'SQLite'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'TypeScript', 'AsyncStorage'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'SQLite', 'Mapbox SDK'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'Expo', 'AsyncStorage'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Flutter', 'SQLite', 'FlChart'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React Native', 'Firebase', 'DocumentPicker'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Expo', 'Firebase', 'Node.js'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Node.js', 'Express', 'MongoDB'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Firebase Realtime DB', 'Cloud Messaging'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Mapbox SDK', 'SQLite', 'Dart'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Node.js', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Firebase', 'Google Maps API'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Flutter', 'Crypto API', 'Node.js', 'SQLite'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['React Native', 'Expo', 'Cloudinary API', 'Node.js'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'LocalAuth API', 'Geolocator', 'Node.js API'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'Audio Recorder API', 'Whisper API', 'Node.js'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Unity', 'AR Foundation', 'C#', 'Mobile OS'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'flutter_blue_plus', 'SQLite', 'Dart'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'MQTT/WebSockets', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'OpenCV SDK', 'Tesseract OCR', 'Dart'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'WatermelonDB', 'WebSockets', 'Yjs'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Flutter', 'Sensors API', 'Background Fetch', 'Node.js'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['React Native', 'JSI (JavaScript Interface)', 'Monaco Editor'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'Redis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'Redis', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'SQLite', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'marked', 'DOMPurify'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Express', 'csv-parser', 'PostgreSQL'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'maxmind', 'Express'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'sharp', 'Express', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'SQLite', 'node-cron'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'Redis', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'jsonwebtoken'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'ws', 'TypeScript', 'Redis Pub/Sub', 'PostgreSQL'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'cron-parser', 'Redis'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'clamscan', 'TypeScript'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Redis', 'Express'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Go', 'Node.js', 'ClickHouse / PostgreSQL', 'Redis'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Crypto'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Kafka / RabbitMQ'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['TypeScript', 'Node.js', 'Redis', 'Vitest'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'Redis', 'Lua'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'pg-query-parser', 'PostgreSQL'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Go / Node.js', 'ClickHouse', 'Redis', 'TypeScript'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', '@grpc/grpc-js', 'protobufjs', 'Consul / Etcd'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'RabbitMQ', 'PostgreSQL'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'NLTK/VADER', 'Flask', 'Chart.js'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Requests', 'Matplotlib'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'spaCy', 'Pandas', 'Flask'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'NetworkX', 'BibtexParser', 'PyVis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Seaborn', 'Jupyter'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Dash', 'Plotly'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'scikit-learn', 'Streamlit'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'Pandas', 'Matplotlib'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'FastAPI', 'scikit-learn', 'pdfplumber'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'Pandas', 'Surprise / scikit-learn', 'FastAPI'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'scikit-learn', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'OpenCV', 'YOLOv8', 'Streamlit'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'Pandas', 'scikit-learn', 'Flask'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'scikit-learn', 'Pandas', 'Streamlit'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'Tweepy / Mastodon API', 'Pandas', 'Flask'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'scikit-learn', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python', 'XGBoost', 'FastAPI', 'Pandas'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Pandas', 'Prophet/Statsmodels', 'Streamlit'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'AST module', 'Node.js', 'Vue.js'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Kafka', 'scikit-learn', 'Docker'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Gensim', 'spaCy', 'pyLDAvis', 'FastAPI'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'multiprocessing', 'ZeroMQ / Sockets'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'PyTorch', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'librosa', 'scikit-learn / TensorFlow', 'FastAPI'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python / C++', 'NumPy', 'Matplotlib'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'PySpark', 'Spark MLlib', 'FastAPI'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['C++', 'or Node.js native Net/TCP', 'POSIX Threads'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['TypeScript', 'React', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js / Python', 'Raw Sockets', 'Commander.js'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js / Python', 'psutil', 'blessed/ink'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['C / C++', 'POSIX System Calls (fork, execvp, pipe)'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['TypeScript', 'React', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'serialport', 'Commander.js'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python', 'struct module', 'CLI'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js (dgram module)', 'TypeScript', 'LRU Cache'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['C / Go', 'Linux Syscalls', 'cgroups v2'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['C / Python', 'Raw Sockets', 'Scapy'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js Net module', 'TypeScript', 'Vitest'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js dgram module', 'TypeScript', 'Buffer API'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['C / Python', 'Buffer API', 'CLI'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Go / Node.js Net module', 'TypeScript'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['C++ / TypeScript', 'Node.js', 'Vitest'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', 'Node.js Buffer', 'Vitest'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Go', 'or Node.js Net module', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['TypeScript', 'Node.js fs/buffer', 'Vitest'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['C / Rust', 'libfuse', 'OpenSSL / ring'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Go / TypeScript', 'gRPC / WebSockets', 'Vitest'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['C / C++', 'epoll / kqueue syscalls'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Go / Node.js', 'gRPC', 'TypeScript'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['C / Rust', 'Linux TUN/TAP API'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['C++11', 'POSIX shm_open / mmap', 'std::atomic'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['C++ / TypeScript', 'Vitest'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Commander.js', 'Crypto API'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Crypto Module', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'otplib', 'qrcode-terminal'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Axios', 'Chalk'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Python / Node.js', 'pngjs', 'Crypto Module'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['React', 'TypeScript', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Crypto Module', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'TypeScript', 'Crypto Module', 'clipboardy'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'beginner',
    suggestedStack: ['Node.js', 'Crypto Module', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', 'Node.js', 'OSV API / GitHub Advisory API'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Node Crypto Module'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js tls module', 'TypeScript', 'Commander.js'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['TypeScript', '@babel/parser', 'Babel Traverse'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'Redis', 'TypeScript'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'Express', 'DOMPurify', 'TypeScript'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'chokidar', 'TypeScript', 'Crypto Module'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Node.js', 'TypeScript', 'Redis', 'Express'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'intermediate',
    suggestedStack: ['Python / Node.js', 'TypeScript', 'CLI'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'Express / http-proxy'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'Scapy', 'or Node.js pcap', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js tls module', 'OpenSSL', 'TypeScript'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'TypeScript', 'tar-stream', 'OSV API'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['circom', 'snarkjs', 'JavaScript', 'React'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Python', 'pefile / elftools', 'CLI'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js (dgram module)', 'TypeScript', 'Axios / fetch'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['Node.js', 'gpkcs11', 'TypeScript', 'Express'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
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
    projectType: 'siwes',
    skillLevel: 'advanced',
    suggestedStack: ['TypeScript', 'Node.js', 'Axios', 'OpenAPI Parser'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how client-side state management differs from server-side database persistence using a generic web application example.',
      'What are the key security principles when storing session tokens in browser cookies versus local storage?',
      'Explain the HTTP request-response lifecycle when a browser requests data from a RESTful web service.'
    ],
    milestones: [
      'Parse OpenAPI 3.0 YAML/JSON specification files to discover endpoints and schemas.',
      'Generate mutated test payloads (large strings, nulls, special characters, SQLi strings).',
      'Execute HTTP requests and monitor server status codes for 500 Internal Server Errors.',
      'Generate vulnerability report highlighting crashing endpoints and input parameters.'
    ]
  },

  // =========================================================================,
  // =========================================================================
  // --- REBALANCED FINAL YEAR PROJECTS (72 ENTRIES) ---
  // Distribution: 12 Beginner (16.7%), 30 Intermediate (41.7%), 30 Advanced (41.7%)
  // =========================================================================

  // --- WEB DEVELOPMENT FYP (12: 2 beginner, 5 intermediate, 5 advanced) ---
  {
    id: 'web-fyp-1',
    title: 'Automated Departmental Course Prerequisite Validation Portal',
    description: 'A university web portal that models course dependency trees to automatically validate student academic eligibility before semester registration.',
    category: 'web',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Model relational database schema for courses, prerequisites, and student transcripts.',
      'Build prerequisite tree evaluation logic handling co-requisites and waivers.',
      'Create student registration eligibility checker and advisor override workflow.',
      'Export detailed eligibility audit reports for departmental records.'
    ],
    learningPrompts: [
      'Explain how directed acyclic graphs (DAG) can model prerequisite dependencies generically.',
      'What are the tradeoffs between recursive traversal and iterative algorithms for dependency evaluation?',
      'How does relational foreign key enforcement maintain data integrity during course deletions?'
    ],
    problemStatement: 'Manual course registration audits frequently fail to catch missing prerequisites, causing mid-semester student dropouts.',
    whySuitableForYou: 'This project fits a beginner web developer comfortable with relational tables and basic validation logic within a 6-week timeframe.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because it addresses a concrete academic administrative gap with clear, verifiable scope.',
    defendingYourChoice: [
      'Manual prerequisite auditing causes registration errors in our department.',
      'The project applies relational graph modeling to automate dependency checks cleanly.',
      'The scope focuses specifically on core eligibility validation rather than trying to build a full ERP.'
    ]
  },
  {
    id: 'web-fyp-2',
    title: 'Campus Solar Energy Generation & Load Monitoring Web Dashboard',
    description: 'An IoT-connected web dashboard tracking real-time energy production across campus solar arrays, forecasting daily battery reserves, and alerting facility engineers to load spikes.',
    category: 'web',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Vue.js', 'JavaScript', 'Chart.js', 'Express', 'SQLite'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Design REST API endpoints accepting solar inverter power output readings.',
      'Build interactive dashboard rendering live kilowatt-hour generation graphs.',
      'Implement battery reserve threshold alerts sending email notices.',
      'Generate weekly energy savings CSV exports.'
    ],
    learningPrompts: [
      'Explain how polling vs WebSocket streaming differs for rendering real-time web telemetry.',
      'What are the best practices for caching aggregation queries in time-series web applications?',
      'How does client-side chart library memory management prevent memory leaks during continuous updates?'
    ],
    problemStatement: 'Campus facility managers lack centralized real-time visibility into solar panel power yields, leading to unoptimized generator fallback usage.',
    whySuitableForYou: 'Fits a beginner developer eager to work with data visualization and RESTful telemetry collection over a 6-week schedule.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because sustainability monitoring provides strong practical utility and clear visual deliverables.',
    defendingYourChoice: [
      'Campus solar installations are unmonitored centrally, making power yield tracking difficult.',
      'I built a light-weight telemetry API paired with interactive Chart.js dashboards.',
      'The system demonstrates clear real-time monitoring and reporting capabilities.'
    ]
  },
  {
    id: 'web-fyp-3',
    title: 'Student Exam Hall Seating Allocation & Interleaving Optimizer',
    description: 'A web application ingesting registered student lists and venue layouts to compute conflict-free seating charts that prevent adjacent seating of students taking the same exam paper.',
    category: 'web',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build multi-row hall grid configuration tool supporting custom venue geometries.',
      'Implement interleaved grid placement algorithm isolating students taking identical papers.',
      'Benchmark allocation speed and seat spacing density across 500+ student cohorts.',
      'Create printable PDF seating charts and student matriculation seat lookup portal.'
    ],
    learningPrompts: [
      'Explain how graph coloring algorithms model scheduling and seat allocation constraints.',
      'What are the performance tradeoffs between greedy heuristic search and constraint satisfaction solvers?',
      'How does generating PDF documents server-side compare to client-side canvas rendering?'
    ],
    problemStatement: 'Manual exam seating allocation in large halls is time-consuming and prone to adjacent seating mistakes that compromise exam integrity.',
    whySuitableForYou: 'Well-suited for an intermediate developer mastering constraint placement algorithms and multi-role administrative web UI design.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because exam malpractice prevention is a high-priority academic administrative goal with clear algorithmic evaluation criteria.',
    defendingYourChoice: [
      'Manual exam seating allocation consumes days of faculty time before every examination period.',
      'I engineered an interleaved constraint solver that guarantees zero adjacent course code overlaps.',
      'The system delivers immediate administrative value with verifiable PDF outputs.'
    ]
  },
  {
    id: 'web-fyp-4',
    title: 'Departmental Faculty Research Publication & Citation Analytics Directory',
    description: 'A digital repository cataloging departmental research papers, BibTeX metadata import, citation index metrics, and co-author collaboration graph visualizations.',
    category: 'web',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'D3.js'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build BibTeX file parser extracting title, author, journal, and DOI metadata.',
      'Design PostgreSQL relational schema holding author entities and publication relations.',
      'Implement full-text search indexing by author, research domain, and publication year.',
      'Render interactive D3.js co-authorship network graphs and annual citation metrics.'
    ],
    learningPrompts: [
      'Explain how full-text search indexing (Inverted Index) functions in modern relational databases.',
      'What are the performance considerations when rendering node-link network graphs with D3.js?',
      'How does schema normalization prevent data duplication in multi-author academic publication databases?'
    ],
    problemStatement: 'Departmental research outputs are fragmented across personal faculty sites, hindering accreditation reporting and research collaboration.',
    whySuitableForYou: 'Suitable for an intermediate developer learning full-text database indexing and interactive graph visualization.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because centralized publication tracking aids departmental accreditation and research visibility.',
    defendingYourChoice: [
      'Faculty publication records are scattered, making departmental accreditation reporting tedious.',
      'I implemented structured metadata ingestion alongside search indexing for academic papers.',
      'The system simplifies departmental research metric tracking.'
    ]
  },
  {
    id: 'web-fyp-5',
    title: 'Multi-Criteria Student Peer Review & Code Rubric Calibration Platform',
    description: 'A specialized web workspace for software engineering courses where students submit project repositories, conduct anonymous double-blind peer reviews against rubrics, and calibrate feedback scores.',
    category: 'web',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build assignment rubric creator supporting weighted multi-criteria scoring rubrics.',
      'Implement double-blind peer assignment distribution engine enforcing reviewer anonymity.',
      'Create inline markdown review editor with rating score validation.',
      'Compute aggregated peer grades and evaluate reviewer calibration scores against instructor baselines.'
    ],
    learningPrompts: [
      'Explain the concept of double-blind review workflow security and how to prevent identity leaks in web APIs.',
      'What are the statistical approaches for calibrating peer evaluation scores to remove reviewer bias?',
      'How does ORM database transaction management ensure atomic grade submission processing?'
    ],
    problemStatement: 'Manual peer code review in large programming classes lacks standardized evaluation rubrics, double-blind anonymity controls, and reviewer score calibration.',
    whySuitableForYou: 'Well-suited for an intermediate developer with framework experience building multi-step feedback workflows and score calibration metrics.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because peer assessment methodologies are well-regarded in computer science pedagogy.',
    defendingYourChoice: [
      'Peer review in programming assignments is hard to manage at scale without double-blind automation.',
      'I implemented a double-blind rubric scoring engine that calibrates student evaluation scores.',
      'The platform improves feedback quality while reducing instructor grading workload.'
    ]
  },
  {
    id: 'web-fyp-6',
    title: 'University Official Transcripts & Cryptographic Document Verification Portal',
    description: 'A secure workflow system allowing graduates to request academic transcripts, track processing status, and issue employers cryptographic SHA-256 verification links.',
    category: 'web',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Crypto API'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Implement graduate transcript request portal with payment status integration.',
      'Build registry staff processing queue for transcript generation.',
      'Implement SHA-256 hash signing for digital transcript verification links.',
      'Add employer public verification portal checking document integrity.'
    ],
    learningPrompts: [
      'Explain how SHA-256 cryptographic hashes detect unauthorized alterations in digital PDF documents.',
      'What is the difference between digital signatures and symmetric hash verification?',
      'How do multi-role access control models (RBAC) restrict registry staff permissions in web APIs?'
    ],
    problemStatement: 'Slow paper transcript processing and fraudulent degree certificates pose reputational and operational challenges for universities.',
    whySuitableForYou: 'Fits an intermediate developer comfortable with REST APIs, authentication roles, and cryptographic hashing.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because document verification addresses a high-profile real-world security and administrative problem.',
    defendingYourChoice: [
      'Transcript verification delays hurt employment opportunities for graduating students.',
      'I combined multi-role request workflows with SHA-256 document hashing for instant public verification.',
      'The project demonstrates end-to-end security and administrative workflow engineering.'
    ]
  },
  {
    id: 'web-fyp-7',
    title: 'Departmental Research Lab Equipment Reservation & Utilization Hub',
    description: 'A web portal for scientific research laboratories to catalog high-value equipment, manage reservation calendars, enforce supervisor safety approvals, and track utilization analytics.',
    category: 'web',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Model lab equipment inventory including operational status and user safety certifications.',
      'Build booking calendar enforcing daily hour quotas per research group.',
      'Implement supervisor sign-off workflow for specialized machinery.',
      'Evaluate lab equipment utilization metrics and maintenance incident logs.'
    ],
    learningPrompts: [
      'Explain how document databases (MongoDB) store flexible nested equipment metadata versus relational schemas.',
      'What are the algorithms for detecting time-slot reservation overlaps in booking systems?',
      'How do role-based permissions prevent uncertified users from reserving hazardous lab machinery?'
    ],
    problemStatement: 'Uncoordinated access to shared research equipment leads to scheduling conflicts, uncertified usage, and unrecorded equipment damage.',
    whySuitableForYou: 'Great fit for an intermediate student capable of building multi-role approval systems and utilization dashboards.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because lab resource management directly benefits departmental research operations and equipment longevity.',
    defendingYourChoice: [
      'Shared research lab instruments frequently suffer from double-booking and uncertified user operation.',
      'My portal introduces mandatory safety certification checks before slot reservations can be confirmed.',
      'The project delivers clear operational efficiency for university research facilities.'
    ]
  },
  {
    id: 'web-fyp-8',
    title: 'Real-Time Collaborative Architectural Diagramming & CRDT Canvas Workspace',
    description: 'A WebSockets browser workspace for engineering teams to collaboratively draw system architecture diagrams with CRDT conflict-resolution state synchronization.',
    category: 'web',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Next.js', 'TypeScript', 'Socket.io', 'HTML5 Canvas API', 'Yjs / CRDT'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Build vector node and connector drawing engine using HTML5 Canvas API.',
      'Implement WebSocket binary event sync for real-time cursor and object state updates.',
      'Integrate Yjs / CRDT (Conflict-free Replicated Data Type) logic for concurrent shape manipulation.',
      'Benchmark rendering frame-rates and network sync latency under 20 concurrent active editors.'
    ],
    learningPrompts: [
      'Explain how Conflict-free Replicated Data Types (CRDTs) achieve eventual consistency without central lock servers.',
      'What are the differences between Operational Transformation (OT) and CRDTs for real-time collaborative editing?',
      'How does HTML5 Canvas vector math calculate dynamic arrow path connectors between moving shape nodes?'
    ],
    problemStatement: 'Remote student project teams lack real-time collaborative diagramming tools tailored for software engineering UML and architecture specs.',
    whySuitableForYou: 'Suitable for an advanced web engineering student experienced with WebSockets, Canvas vector math, and CRDT concurrency algorithms.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because real-time graphics and CRDT concurrency algorithms represent exceptional technical depth for an advanced FYP.',
    defendingYourChoice: [
      'Collaborative architecture modeling requires low-latency state synchronization across clients.',
      'I combined WebSocket binary streaming with CRDT conflict resolution to enable smooth multi-user editing.',
      'The project demonstrates advanced frontend graphics rendering and real-time networking.'
    ]
  },
  {
    id: 'web-fyp-9',
    title: 'Automated Web Accessibility Crawler & DOM Compliance Auditing Engine',
    description: 'A headless browser crawler that systematically analyzes target web application URL trees, evaluates WCAG 2.1 AA accessibility rules, and highlights DOM code violations visually.',
    category: 'web',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'Puppeteer', 'axe-core', 'React', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Develop headless browser crawler using Puppeteer to recursively index page link trees.',
      'Integrate axe-core evaluation engine executing WCAG 2.1 AA rule checks.',
      'Build DOM element highlighting overlay showing precise code violation locations.',
      'Evaluate accessibility compliance scores and export actionable remediation reports.'
    ],
    learningPrompts: [
      'Explain how headless browsers execute JavaScript DOM rendering during automated web crawling.',
      'What are the core technical criteria of WCAG 2.1 AA standards regarding screen reader ARIA attributes and color contrast?',
      'How do queue data structures manage breadth-first vs depth-first URL traversal in web crawlers?'
    ],
    problemStatement: 'University web portals often fail basic accessibility standards, locking out users with visual or motor impairments.',
    whySuitableForYou: 'Fits an advanced student knowledgeable in DOM trees, web standards, and automated browser testing.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because web accessibility compliance is a critical software engineering standard with strong research backing.',
    defendingYourChoice: [
      'Automated accessibility audits are essential to ensure software inclusiveness for all user groups.',
      'I built a headless crawling pipeline that evaluates WCAG 2.1 rules and highlights offending DOM nodes.',
      'The system provides actionable remediation guidance for web developers.'
    ]
  },
  {
    id: 'web-fyp-10',
    title: 'Web-Based Operating System Process Scheduling & Memory Simulator',
    description: 'An interactive educational web platform simulating CPU process scheduling algorithms (FCFS, SJF, Priority, Round Robin) with D3.js animated Gantt charts and page fault metrics.',
    category: 'web',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    milestones: [
      'Implement algorithmic state engines for FCFS, SJF, Preemptive Priority, and Round Robin.',
      'Build D3.js visual Gantt chart engine animating CPU execution cycles step-by-step.',
      'Calculate average waiting time, turnaround time, and CPU utilization metrics.',
      'Benchmark algorithm performance across different synthetic process workload distributions.'
    ],
    learningPrompts: [
      'Explain how preemptive CPU scheduling algorithms manage context switching overhead versus non-preemptive algorithms.',
      'What are the architectural patterns for building step-by-step time-travel state engines in React?',
      'How does D3.js bind data arrays to DOM elements to render dynamic animated Gantt charts?'
    ],
    problemStatement: 'Computer Science undergraduates struggle to visualize abstract OS CPU scheduling algorithms from textbook diagrams alone.',
    whySuitableForYou: 'Well-suited for an advanced student combining OS algorithmic principles with interactive data visualization.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because educational simulation tools demonstrate both deep domain understanding and UI software engineering skills.',
    defendingYourChoice: [
      'Operating systems concepts like CPU scheduling are best mastered through interactive visual simulation.',
      'I developed step-by-step algorithmic state engines paired with D3.js animated Gantt charts.',
      'The tool serves as a valuable pedagogical resource for junior CS students.'
    ]
  },
  {
    id: 'web-fyp-11',
    title: 'Multi-Tenant University Club Platform Engine with Dynamic Subdomain Routing',
    description: 'A multi-tenant SaaS architecture allowing campus student societies to spin up custom subdomains, manage memberships, process event registrations, and isolate database tenant data.',
    category: 'web',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Architect multi-tenant database isolation model separating society records.',
      'Implement wildcard subdomain routing middleware in Next.js.',
      'Build dynamic page layout editor for club executives.',
      'Benchmark response latency and tenant data isolation security under simulated multi-tenant loads.'
    ],
    learningPrompts: [
      'Explain the trade-offs between pooled database multi-tenancy (tenant ID column) vs schema-per-tenant isolation.',
      'How does HTTP host header extraction enable wildcard subdomain routing in web framework middleware?',
      'What are the security controls for preventing cross-tenant data leakage in SaaS platforms?'
    ],
    problemStatement: 'Campus student clubs maintain fragmented, insecure single-page sites that disappear when executive teams graduate.',
    whySuitableForYou: 'Ideal for an advanced full-stack developer mastering multi-tenant architecture and middleware routing.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because multi-tenancy is a key modern software engineering pattern with clear architectural depth.',
    defendingYourChoice: [
      'University clubs need professional web presences without building standalone infrastructure from scratch.',
      'I designed a multi-tenant SaaS architecture with dynamic subdomain routing and schema isolation.',
      'The platform ensures sustainable digital continuity for student organizations.'
    ]
  },
  {
    id: 'web-fyp-12',
    title: 'Web Application API Performance & Load Testing Benchmarking Suite',
    description: 'A web-based benchmarking suite executing distributed HTTP load tests against target REST APIs, computing latency percentiles (p50, p95, p99), and rendering real-time throughput metrics.',
    category: 'web',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['React', 'Node.js worker_threads', 'Autocannon', 'Chart.js'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build multi-threaded worker pipeline emitting concurrent HTTP GET/POST request bursts.',
      'Compute statistical latency percentiles (p50, p95, p99) and request-per-second throughput metrics.',
      'Render live streaming Chart.js graphs during active load testing runs.',
      'Compare performance differences across REST, GraphQL, and gRPC endpoint implementations.'
    ],
    learningPrompts: [
      'Explain why latency percentiles (p95, p99) are more informative than average latency for evaluating web APIs.',
      'What are the OS network stack socket limits (ephemeral port exhaustion) during high-concurrency load testing?',
      'How do worker thread pools in Node.js prevent blocking the main event loop during CPU-bound data aggregation?'
    ],
    problemStatement: 'Web developers struggle to identify API performance bottlenecks and latency degradation under concurrent user loads without specialized benchmarking tools.',
    whySuitableForYou: 'Fits an advanced web developer mastering concurrent load generation, statistical latency percentiles, and performance benchmarking.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because empirical performance benchmarking provides rigorous scientific evaluation criteria suitable for an advanced FYP.',
    defendingYourChoice: [
      'Average latency numbers hide severe tail-latency spikes that ruin user experience.',
      'I engineered a load benchmarking suite that computes p95 and p99 percentiles under concurrent worker traffic.',
      'The tool provides empirical performance evaluation across web service architectures.'
    ]
  },

  // --- MOBILE DEVELOPMENT FYP (12: 2 beginner, 5 intermediate, 5 advanced) ---
  {
    id: 'mobile-fyp-1',
    title: 'Offline-First Campus Library Book Search & Due Date Companion',
    description: 'A mobile app providing offline book catalog searches, digital barcode checkout passes, and local push notifications for book renewal deadlines.',
    category: 'mobile',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Flutter', 'Dart', 'SQLite', 'Barcode API'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Build local SQLite database caching library book catalog data.',
      'Create barcode renderer generating digital checkout passes.',
      'Implement local notification scheduler for book return reminders.',
      'Build search interface filtering by title, author, and shelf location.'
    ],
    learningPrompts: [
      'Explain how local SQLite caching enables mobile app functionality when internet connectivity is lost.',
      'What are the key security practices when storing user authentication tokens in mobile SQLite storage?',
      'How do local background push notification schedulers operate on mobile operating systems?'
    ],
    problemStatement: 'Unreliable campus Wi-Fi prevents students from checking library book availability and renewal deadlines while browsing stacks.',
    whySuitableForYou: 'Fits a beginner mobile developer building offline SQLite storage and local push notifications over 6 weeks.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because offline accessibility solves a genuine everyday campus utility problem.',
    defendingYourChoice: [
      'Library searches fail when campus Wi-Fi drops inside book stack aisles.',
      'I implemented local SQLite caching so students can search titles and view due dates offline.',
      'The project delivers immediate student productivity improvements.'
    ]
  },
  {
    id: 'mobile-fyp-2',
    title: 'Student Clinic Prescription & Appointment Booking App',
    description: 'A mobile healthcare app enabling university students to schedule clinic visits, receive prescription refill alerts, and view health records securely.',
    category: 'mobile',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['React Native', 'Expo', 'AsyncStorage', 'Node.js'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Design appointment booking form with doctor specialty selectors.',
      'Implement local medication alarm scheduler for daily dosage times.',
      'Build secure medical history record viewer with local PIN lock.',
      'Add emergency clinic contact speed-dial button.'
    ],
    learningPrompts: [
      'Explain the data privacy safeguards required when handling personal health records on mobile devices.',
      'How does local PIN authentication lock data state in React Native applications?',
      'What are the differences between polling an API for appointment slots versus WebSocket updates?'
    ],
    problemStatement: 'Long queues and missed prescription refills at university clinics cause avoidable student health complications.',
    whySuitableForYou: 'Ideal for a beginner mobile developer creating structured forms and local data encryption.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because healthcare access improvement provides strong social relevance and clear project scope.',
    defendingYourChoice: [
      'Clinic queueing causes students to miss lectures while waiting for basic consultations.',
      'My app introduces pre-booked appointment slots and local prescription alarms.',
      'The project addresses campus health management with a practical mobile solution.'
    ]
  },
  {
    id: 'mobile-fyp-3',
    title: 'Geofenced Lecture Attendance Verification App with BLE Beacons',
    description: 'A mobile attendance application combining Bluetooth Low Energy (BLE) beacon detection and GPS geofencing to verify physical lecture hall presence and eliminate proxy signing.',
    category: 'mobile',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Flutter', 'flutter_blue_plus', 'Geolocator', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Integrate BLE scanning service detecting classroom beacon UUIDs.',
      'Implement GPS bounding box verification for lecture hall perimeter.',
      'Build biometric prompt confirmation prior to attendance sign-in.',
      'Evaluate attendance verification accuracy and latency compared to manual paper rosters.'
    ],
    learningPrompts: [
      'Explain how Bluetooth Low Energy (BLE) beacon UUID advertising works for indoor proximity detection.',
      'What are the mathematical calculations (Haversine formula) for evaluating GPS geofence perimeters?',
      'How does integrating device biometric authentication prevent attendance proxy fraud?'
    ],
    problemStatement: 'Traditional paper attendance rosters suffer from widespread proxy signing and manual data entry errors during large university lectures.',
    whySuitableForYou: 'Well-suited for an intermediate developer combining Bluetooth sensor scanning, location services, and secure APIs.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because anti-proxy attendance verification is a high-value academic integrity problem.',
    defendingYourChoice: [
      'Paper attendance signing allows widespread proxy signing in large 500-seat lecture halls.',
      'My dual-verification system requires both physical BLE beacon proximity and GPS geofence validation.',
      'The project delivers automated, fraud-resistant attendance record keeping.'
    ]
  },
  {
    id: 'mobile-fyp-4',
    title: 'Campus Shuttle Real-Time GPS Tracking & Arrival Time Estimator',
    description: 'A mobile app giving students live map visibility into campus shuttle bus positions, route delays, and estimated arrival times (ETA) calculated from GPS telemetry streams.',
    category: 'mobile',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['React Native', 'Firebase Realtime DB', 'Google Maps SDK'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build driver app mode publishing GPS location updates every 3 seconds.',
      'Build student map view rendering smooth animated bus icon movements.',
      'Calculate arrival time estimates (ETA) for upcoming shuttle stops based on speed.',
      'Evaluate tracking accuracy and map update latency over cellular connections.'
    ],
    learningPrompts: [
      'Explain how real-time WebSocket databases (Firebase) stream location coordinates to mobile clients.',
      'What are the algorithms for smoothing GPS location jitter on mobile maps (Kalman Filter)?',
      'How do mobile apps conserve battery power during continuous background location publishing?'
    ],
    problemStatement: 'Unpredictable shuttle arrival times cause long bus stop crowds and student lecture tardiness.',
    whySuitableForYou: 'Fits an intermediate mobile developer mastering real-time database streaming and map overlays.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because real-time transit tracking offers clear utility and measurable performance criteria.',
    defendingYourChoice: [
      'Students waste hours waiting at bus stops without knowing shuttle locations.',
      'I built a real-time GPS tracking companion using Firebase streaming and Map SDKs.',
      'The system optimizes daily campus transit for thousands of students.'
    ]
  },
  {
    id: 'mobile-fyp-5',
    title: 'Mobile Peer-to-Peer Used Textbook Marketplace with ISBN Camera Scanner',
    description: 'A campus mobile marketplace enabling students to scan book ISBN barcodes with device cameras, auto-populate metadata, and arrange secure on-campus book exchanges.',
    category: 'mobile',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['React Native', 'Mobile Vision Camera API', 'Node.js', 'MongoDB'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Integrate mobile camera ISBN barcode scanner fetching book details from OpenLibrary API.',
      'Build book listing manager with condition tagging and price suggestion.',
      'Implement secure buyer-seller messaging with campus meetup location pins.',
      'Add user transaction history and trust rating reviews.'
    ],
    learningPrompts: [
      'Explain how mobile camera vision APIs decode 1D EAN/ISBN barcodes from video frames.',
      'What are the API design patterns for integrating third-party book catalog services into a custom backend?',
      'How do mobile database queries support distance-based location filtering for campus meetups?'
    ],
    problemStatement: 'High textbook costs burden undergraduates, yet senior students have no dedicated campus platform to resell used books.',
    whySuitableForYou: 'Ideal for an intermediate developer combining camera barcode scanning, third-party APIs, and messaging.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because peer-to-peer textbook reuse addresses real student financial challenges.',
    defendingYourChoice: [
      'Commercial book buyers purchase student textbooks at minimal prices and resell at steep markups.',
      'My app uses ISBN camera scanning to auto-fill book details for instant peer-to-peer campus listing.',
      'The platform reduces textbook costs through direct student exchange.'
    ]
  },
  {
    id: 'mobile-fyp-6',
    title: 'Student Mental Health Check-In & Encrypted Counseling Scheduler',
    description: 'A confidential wellness mobile application offering daily mental health self-assessments (PHQ-9), mood tracking, and end-to-end encrypted appointment booking with campus counselors.',
    category: 'mobile',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Flutter', 'Node.js', 'Express', 'PostgreSQL', 'AES Encryption'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Design anonymous mood check-in flow using standardized PHQ-9 self-assessment rubrics.',
      'Implement end-to-end encrypted appointment booking with student counseling services.',
      'Build offline library of coping strategies and emergency helpline contacts.',
      'Render personal wellness trend charts with local privacy PIN lock.'
    ],
    learningPrompts: [
      'Explain how end-to-end payload encryption prevents server administrators from reading sensitive student counseling notes.',
      'What are the ethical considerations and data anonymization requirements in mental health software design?',
      'How do mobile local storage PIN locks protect application state when the app goes into the background?'
    ],
    problemStatement: 'Mental health stigma and tedious manual booking prevent students from accessing university counseling services early.',
    whySuitableForYou: 'Suitable for an intermediate student focused on privacy-preserving mobile design and data security.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because student mental health support is a recognized institutional priority with clear ethical safeguards.',
    defendingYourChoice: [
      'Students hesitate to visit counseling centers physically due to social stigma.',
      'I built a privacy-focused mobile app with encrypted appointment booking and self-assessment tools.',
      'The project improves healthcare accessibility while protecting student confidentiality.'
    ]
  },
  {
    id: 'mobile-fyp-7',
    title: 'Mobile Emergency SOS Panic Beacon & Campus Guard Dispatcher',
    description: 'A mobile personal safety application broadcasting live GPS coordinates and audio telemetry to campus security desks upon one-tap distress activation.',
    category: 'mobile',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Flutter', 'Geolocator API', 'SMS Gateway API', 'SQLite'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    learningPrompts: [
      'Explain how device GPS location sensors query satellite signals and calculate latitude/longitude coordinates.',
      'What are the network fallback mechanisms (SMS vs HTTP webhooks) for dispatching emergency distress signals from mobile devices?',
      'How does local device storage encryption protect stored emergency contact logs when the device is locked?'
    ],
    milestones: [
      'Design high-visibility panic button interface with accidental trigger confirmation timers.',
      'Integrate device GPS location services capturing real-time coordinates.',
      'Implement emergency contact SMS dispatcher and security desk webhook alerts.',
      'Evaluate location transmission reliability across 3G, 4G, and Wi-Fi network transitions.'
    ],
    problemStatement: 'Night-time campus security incidents require immediate location broadcasting that traditional phone calls cannot provide.',
    whySuitableForYou: 'Suitable for an intermediate developer learning device GPS location APIs, emergency event triggers, and network fallback dispatchers.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because campus safety enhancement carries strong institutional priority.',
    defendingYourChoice: [
      'In emergency situations, students cannot type detailed location texts to security.',
      'I engineered a one-tap distress trigger that transmits live GPS coordinates directly to security desks.',
      'The project addresses personal safety with essential mobile sensor integration.'
    ]
  },
  {
    id: 'mobile-fyp-8',
    title: 'Real-Time Audio Lecture Transcription & AI Key-Point Summarizer App',
    description: 'A mobile application streaming live audio recordings to speech-to-text APIs, generating structured lecture transcripts, and extracting key definitions using NLP summaries.',
    category: 'mobile',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['React Native', 'Audio Streamer API', 'Whisper API', 'Node.js'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement low-latency background audio recording and PCM chunk streaming pipeline.',
      'Integrate OpenAI Whisper Speech API for multi-lingual transcript generation.',
      'Build NLP summary generator extracting key definitions and exam action items.',
      'Evaluate speech-to-text WER (Word Error Rate) accuracy across technical lecture audio samples.'
    ],
    learningPrompts: [
      'Explain how audio PCM chunk streaming operates over WebSockets without causing memory buffer overflows on mobile devices.',
      'What is Word Error Rate (WER) and how is speech recognition accuracy evaluated across different acoustic environments?',
      'How do NLP text summarization models distinguish key definitions from conversational filler in transcripts?'
    ],
    problemStatement: 'Students with auditory processing difficulties or fast-paced lecturers struggle to capture complete written lecture notes.',
    whySuitableForYou: 'Great fit for an advanced developer experienced with audio processing streams, WER evaluation, and AI API integrations.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because AI-assisted note taking represents cutting-edge mobile engineering with strong academic relevance.',
    defendingYourChoice: [
      'Capturing accurate notes during fast lectures is difficult for students with learning differences.',
      'I engineered an audio streaming pipeline that pairs Whisper speech-to-text with automated key-point extraction.',
      'The app demonstrates advanced mobile stream handling and artificial intelligence integration.'
    ]
  },
  {
    id: 'mobile-fyp-9',
    title: 'Mobile AR Indoor Navigation Companion for Complex University Faculty Complexes',
    description: 'An augmented reality mobile app using camera AR overlays, visual anchor tracking, and 3D pathfinding to guide visitors through multi-story university faculty complexes.',
    category: 'mobile',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Unity', 'AR Foundation', 'ARCore/ARKit', 'C#'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how camera visual anchor tracking and feature point cloud mapping operate in mobile Augmented Reality (AR) SDKs.',
      'What are the 3D pathfinding algorithms (A* search) used to calculate shortest walking routes on 3D building navigation meshes?',
      'How do AR applications handle tracking drift error and camera recalibration using physical QR code anchors?'
    ],
    milestones: [
      'Digitize multi-floor building plans into 3D waypoint navigation meshes.',
      'Implement AR camera tracking rendering directional ground arrows on camera feeds.',
      'Build QR-code visual relocalization anchors for indoor position calibration.',
      'Evaluate AR drift error and battery consumption across extended 15-minute indoor walks.'
    ],
    problemStatement: 'GPS signals fail indoors, leaving new students and visitors lost in complex multi-story university faculty blocks.',
    whySuitableForYou: 'Ideal for an advanced mobile developer skilled in 3D game engines, AR Foundation, and indoor pathfinding.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because augmented reality navigation demonstrates exceptional technical depth and visual innovation.',
    defendingYourChoice: [
      'Standard GPS map apps become useless inside large multi-story academic buildings.',
      'I utilized Unity AR Foundation to project 3D directional arrows onto real-world camera feeds.',
      'The project solves indoor navigation using state-of-the-art augmented reality.'
    ]
  },
  {
    id: 'mobile-fyp-10',
    title: 'Offline Peer-to-Peer BLE Mesh Communication Network for Campus Crisis Scenarios',
    description: 'An ad-hoc mesh communication app over Bluetooth Low Energy (BLE) allowing students to exchange encrypted text messages and distress alerts during campus network blackouts.',
    category: 'mobile',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Flutter', 'flutter_blue_plus', 'SQLite', 'Dart'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    learningPrompts: [
      'Explain how Bluetooth Low Energy (BLE) advertising and peripheral discovery protocols enable ad-hoc peer node detection.',
      'What are the store-and-forward routing algorithms for delivering multi-hop messages across mobile mesh networks?',
      'How does Elliptic Curve Cryptography (ECC) secure end-to-end payload encryption without centralized server infrastructure?'
    ],
    milestones: [
      'Implement BLE advertising and peripheral discovery protocols for peer node detection.',
      'Build store-and-forward packet routing mesh network engine handling multi-hop delivery.',
      'Implement ECC public key cryptography for end-to-end payload encryption.',
      'Evaluate mesh delivery rate and battery drain across simulated 10-node mesh networks.'
    ],
    problemStatement: 'Power outages and cellular tower overloads isolate campus communities during crises when communication is vital.',
    whySuitableForYou: 'Fits an advanced student mastering low-level wireless protocols, multi-hop mesh routing, and mobile cryptography.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because decentralized mesh networking addresses resilient emergency communication.',
    defendingYourChoice: [
      'Cellular networks crash during severe weather or power blackouts.',
      'I built a multi-hop BLE mesh network protocol that routes encrypted messages device-to-device without internet.',
      'The project showcases advanced wireless networking and distributed routing.'
    ]
  },
  {
    id: 'mobile-fyp-11',
    title: 'Smart Campus Parking Space Detector using Computer Vision & Telemetry Streams',
    description: 'A mobile app consuming overhead camera streams to process parking bay availability with computer vision, publishing live slot status over MQTT to arriving drivers.',
    category: 'mobile',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['React Native', 'OpenCV', 'MQTT', 'Node.js', 'PostgreSQL'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    learningPrompts: [
      'Explain how computer vision object detection models (OpenCV) detect and mark rectangular parking bay ROI zones in video streams.',
      'What is the MQTT publisher-subscriber protocol and why is it preferred for low-bandwidth IoT real-time updates?',
      'How do ambient lighting variations (daylight vs night shadows) impact computer vision object detection accuracy?'
    ],
    milestones: [
      'Build server-side OpenCV parking space vacancy detection from overhead video streams.',
      'Publish real-time bay status updates over MQTT protocol to mobile clients.',
      'Build mobile parking lot map rendering green/red slot indicators.',
      'Evaluate detection accuracy under varying lighting conditions (bright daylight vs night).'
    ],
    problemStatement: 'Drivers waste fuel and cause campus congestion hunting for open parking spaces without real-time guidance.',
    whySuitableForYou: 'Suitable for an advanced student combining computer vision processing, IoT messaging, and mobile map rendering.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because smart parking combines computer vision and IoT to solve urban congestion.',
    defendingYourChoice: [
      'Campus parking lots suffer from congestion due to drivers roaming for free spots.',
      'I integrated OpenCV computer vision detection with real-time MQTT mobile updates.',
      'The project demonstrates practical smart campus automation.'
    ]
  },
  {
    id: 'mobile-fyp-12',
    title: 'Cross-Platform Mobile App Performance & Rendering Benchmarker',
    description: 'A mobile testing suite evaluating cross-platform UI rendering frame-rates (60 FPS targets), memory consumption, and startup times across Flutter, React Native, and Native builds.',
    category: 'mobile',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Flutter', 'React Native', 'Android Profiler', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Develop standardized UI benchmark workloads (1000-item list scrolling, image rendering, JSON parsing).',
      'Measure rendering frame drop percentages (jank) and memory allocation spikes.',
      'Benchmark cold startup time vs warm startup time across mobile frameworks.',
      'Export comparative empirical benchmark reports guiding mobile framework selection.'
    ],
    learningPrompts: [
      'Explain how React Native JavaScript bridge architecture compares to Flutter skia/impeller rendering engine execution.',
      'What are the causes of UI frame drops (jank) on mobile devices during heavy list scrolling?',
      'How does Android Profiler measure heap memory allocation and garbage collection pauses?'
    ],
    problemStatement: 'Development teams choose mobile frameworks based on popularity rather than empirical benchmarks on rendering frame-rates and memory overhead.',
    whySuitableForYou: 'Ideal for an advanced mobile developer performing empirical benchmarking across mobile framework rendering engines.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because comparative framework benchmarking offers rigorous empirical computer science analysis.',
    defendingYourChoice: [
      'Choosing mobile frameworks without empirical data leads to unexpected performance bottlenecks.',
      'I engineered a cross-platform benchmark suite measuring frame-rates, startup times, and heap memory usage.',
      'The study provides objective performance criteria for mobile framework selection.'
    ]
  },

  // --- BACKEND & APIS FYP (12: 2 beginner, 5 intermediate, 5 advanced) ---
  {
    id: 'backend-fyp-1',
    title: 'RESTful Student Academic Transcript & Result Computation API',
    description: 'A backend API processing semester course grades, calculating GPA/CGPA metrics, enforcing academic probation rules, and generating transcript payloads.',
    category: 'backend',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'Express', 'PostgreSQL', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Design relational database schema for students, courses, grades, and academic standings.',
      'Implement CGPA calculation logic handling course retakes and credit weightings.',
      'Build academic status evaluator flagging Dean list vs probation thresholds.',
      'Write unit test suite verifying GPA computation accuracy across edge cases.'
    ],
    learningPrompts: [
      'Explain how relational database transactions (ACID properties) ensure grade computation consistency.',
      'What are the key HTTP status codes used in RESTful APIs to indicate calculation validation errors?',
      'How do unit test suites verify business logic calculation functions across edge cases?'
    ],
    problemStatement: 'Manual CGPA computation in academic departments leads to calculation errors and delayed student transcript releases.',
    whySuitableForYou: 'Ideal for a beginner backend developer focusing on clean database schema design and business rule validation.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because accurate academic result computation is fundamental to university operations.',
    defendingYourChoice: [
      'Manual transcript computation creates grade discrepancies during graduation clearance.',
      'I built a REST API that enforces official university grading regulations with automated test coverage.',
      'The project delivers reliable backend calculation logic.'
    ]
  },
  {
    id: 'backend-fyp-2',
    title: 'Centralized Environment Configuration & Feature Flag Server',
    description: 'A lightweight backend service storing environment settings and feature flags, serving client SDKs via HTTP REST and Server-Sent Events (SSE).',
    category: 'backend',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'Express', 'SQLite', 'TypeScript'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Design SQLite schema for feature flags, targeting rules, and environments.',
      'Build admin API for toggling flags on/off per environment.',
      'Implement Server-Sent Events (SSE) endpoint to push real-time flag updates.',
      'Create lightweight client JavaScript SDK for evaluating flags.'
    ],
    learningPrompts: [
      'Explain how Server-Sent Events (SSE) maintain persistent HTTP connections for streaming server updates.',
      'What are the architectural benefits of decoupling feature deployment from code releases using feature flags?',
      'How does local in-memory caching in client SDKs minimize feature flag evaluation latency?'
    ],
    problemStatement: 'Hardcoded application settings require full redeployments to toggle feature availability across environments.',
    whySuitableForYou: 'Suitable for a beginner backend student learning configuration storage and Server-Sent Events.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because feature flagging is a fundamental DevOps and backend architectural pattern.',
    defendingYourChoice: [
      'Deploying new features without feature flags exposes users to untested code breaks.',
      'I built a feature flag server that broadcasts instant flag updates via Server-Sent Events.',
      'The system enables safer software deployment workflows.'
    ]
  },
  {
    id: 'backend-fyp-3',
    title: 'Base62 URL Shortener & Redis Redirection Analytics Microservice',
    description: 'A high-performance URL shortening microservice generating Base62 short keys, serving sub-10ms redirects via Redis, and aggregating click analytics.',
    category: 'backend',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Implement Base62 encoding algorithm converting auto-increment IDs to short keys.',
      'Build HTTP 302 redirect engine backed by Redis cache.',
      'Log redirection events asynchronously for analytics processing.',
      'Evaluate cache hit ratios and redirect throughput under simulated high traffic loads.'
    ],
    learningPrompts: [
      'Explain how Base62 encoding creates compact unique URL keys from integer IDs.',
      'What is the difference between HTTP 301 Permanent Redirect and HTTP 302 Found Redirect regarding browser caching?',
      'How does Redis in-memory key-value caching achieve sub-millisecond response latency?'
    ],
    problemStatement: 'Long system URLs are inconvenient for campus print materials and lack redirection click analytics.',
    whySuitableForYou: 'Great beginner backend project covering encoding algorithms, caching, and analytics aggregation.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because URL shortener architecture is a classic system design topic with measurable performance metrics.',
    defendingYourChoice: [
      'Sharing raw database URLs on physical campus posters is impractical.',
      'I implemented Base62 key generation paired with Redis caching for sub-10ms redirects.',
      'The service tracks click analytics while providing short URLs.'
    ]
  },
  {
    id: 'backend-fyp-4',
    title: 'Asynchronous Notification Task Queue & Backoff Retry Processor',
    description: 'A background job processing service that accepts email/SMS notification API requests, queues them in Redis BullMQ, and processes jobs with exponential backoff retries.',
    category: 'backend',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'Redis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Set up job queue processor using Redis and BullMQ.',
      'Define job payload schemas for email templates, SMS alerts, and webhooks.',
      'Implement exponential backoff retry policy and dead-letter queue inspection API.',
      'Evaluate queue throughput and worker failure recovery under simulated network drops.'
    ],
    learningPrompts: [
      'Explain how message queue producers and consumers decouple heavy background operations from HTTP API request threads.',
      'What is exponential backoff retry logic and why does it prevent overloading failing downstream services?',
      'How does a Dead Letter Queue (DLQ) preserve unprocessable messages for manual inspection?'
    ],
    problemStatement: 'Synchronous email sending blocks API HTTP response threads, causing slow user sign-up responses.',
    whySuitableForYou: 'Ideal for a beginner learning asynchronous queue processing and Redis messaging.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because asynchronous background job queues are fundamental to scalable web backend architecture.',
    defendingYourChoice: [
      'Sending emails synchronously during API requests stalls user HTTP responses.',
      'I decoupled notification delivery using Redis BullMQ queues with retry policies.',
      'The architecture ensures fast API response times.'
    ]
  },
  {
    id: 'backend-fyp-5',
    title: 'High-Throughput E-Commerce Microservice with Distributed Rate Limiting',
    description: 'A modular e-commerce backend API implementing product catalog, shopping cart, and order placement microservices protected by Redis sliding window rate limiters.',
    category: 'backend',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'Redis', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Design modular API endpoints for products, shopping cart, and orders.',
      'Implement Redis-based rate limiter middleware to prevent API abuse.',
      'Build database migration scripts and transactional order placement logic.',
      'Benchmark API response times under 500 requests/sec traffic bursts.'
    ],
    learningPrompts: [
      'Explain the sliding window counter rate limiting algorithm and how it compares to fixed window counters.',
      'How do database transactions (BEGIN...COMMIT) prevent double-spending or overselling items during checkout?',
      'What are the principles for organizing modular microservice domain boundaries?'
    ],
    problemStatement: 'Monolithic backend APIs collapse under traffic spikes without modular service division and rate-limiting protections.',
    whySuitableForYou: 'Well-suited for an intermediate student mastering microservices modularity and Redis middleware.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because microservice architecture and API rate limiting demonstrate enterprise backend engineering principles.',
    defendingYourChoice: [
      'Flash sales crash monolithic backends due to uncontrolled API request bursts.',
      'I implemented modular domain services protected by Redis sliding-window rate limiters.',
      'The design ensures high availability under heavy user traffic.'
    ]
  },
  {
    id: 'backend-fyp-6',
    title: 'OAuth2 & OpenID Connect Centralized Identity Provider Microservice',
    description: 'A custom authentication server implementing OAuth2 authorization code flow with PKCE, JWT token issuance, refresh token rotation, and role-based access control.',
    category: 'backend',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'jsonwebtoken'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Implement password hashing (argon2) and user registration/login endpoints.',
      'Build OAuth2 Authorization Code endpoint with PKCE verification.',
      'Implement JWT token signing, verification middleware, and refresh token rotation.',
      'Evaluate authentication security against token replay and revoked token requests.'
    ],
    learningPrompts: [
      'Explain how Proof Key for Code Exchange (PKCE) prevents authorization code interception attacks in public clients.',
      'What are the security tradeoffs between short-lived Access Tokens and long-lived Refresh Tokens?',
      'How does Argon2 password hashing resist GPU brute-force cracking compared to traditional MD5/SHA256?'
    ],
    problemStatement: 'Building separate user login tables for every university sub-application creates security vulnerabilities and fragmented identity management.',
    whySuitableForYou: 'Fits an intermediate developer focused on identity protocols, token security, and RBAC authorization.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because identity management is a cornerstone of enterprise security and software architecture.',
    defendingYourChoice: [
      'Managing separate authentication databases across campus apps creates major security vulnerabilities.',
      'I built a central OAuth2 Identity Provider implementing PKCE authorization and JWT token rotation.',
      'The service unifies identity access control securely.'
    ]
  },
  {
    id: 'backend-fyp-7',
    title: 'Outbound Webhook Delivery Engine with HMAC Signatures & Exponential Retries',
    description: 'An event-driven backend service delivering webhooks to third-party subscriber URLs with cryptographic HMAC signatures and exponential backoff retry queues.',
    category: 'backend',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'BullMQ', 'PostgreSQL'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Design subscription management endpoints for registered webhook endpoints.',
      'Implement HMAC SHA-256 signature generator for payload authentication.',
      'Build worker queue dispatching HTTP POST requests with timeout protection.',
      'Evaluate webhook delivery success rates across simulated unstable receiver endpoints.'
    ],
    learningPrompts: [
      'Explain how HMAC SHA-256 signatures allow webhook receivers to verify payload integrity and authenticity.',
      'What are the safety measures (connection timeouts, payload size limits) when dispatching HTTP webhooks to untrusted servers?',
      'How does idempotent processing on receiver endpoints prevent duplicate event processing?'
    ],
    problemStatement: 'Third-party integrations fail silently when webhooks are sent without signature verification or retry mechanisms for failed deliveries.',
    whySuitableForYou: 'Great for an intermediate student exploring event-driven architecture, cryptography, and queue management.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because webhook delivery engines demonstrate distributed event-driven system design.',
    defendingYourChoice: [
      'Unreliable receiver endpoints cause event notification loss without automatic retry queues.',
      'I built a webhook engine with HMAC-SHA256 payload signing and exponential backoff retries.',
      'The system guarantees verified event delivery across third-party platforms.'
    ]
  },
  {
    id: 'backend-fyp-8',
    title: 'Event-Sourced Order Processing Engine with CQRS Read Projections',
    description: 'A specialized backend architecture separating write commands from read queries using an append-only event log to replay state changes deterministically.',
    category: 'backend',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Kafka / RabbitMQ'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Design append-only event store table holding serialized domain events.',
      'Implement command handlers validating business rules and emitting events.',
      'Build asynchronous read model projections updating queryable read tables.',
      'Benchmark read query latency and event replay recovery speeds from cold starts.'
    ],
    learningPrompts: [
      'Explain the core principles of Command Query Responsibility Segregation (CQRS) and Event Sourcing.',
      'How does event replay rebuild application state from an append-only event store?',
      'What are the eventual consistency considerations when read projections update asynchronously after write commands?'
    ],
    problemStatement: 'Traditional CRUD databases overwrite historical state, preventing complete audit trails and complex temporal state analysis.',
    whySuitableForYou: 'Suitable for an advanced backend developer interested in distributed patterns like Event Sourcing and CQRS.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because Event Sourcing and CQRS represent advanced software architectural paradigms with deep research depth.',
    defendingYourChoice: [
      'CRUD state overwrites destroy historical transaction state and financial audit trails.',
      'I built an Event-Sourced architecture where domain events are immutable and read projections are generated asynchronously.',
      'The design provides 100% deterministic state auditability.'
    ]
  },
  {
    id: 'backend-fyp-9',
    title: 'In-Memory Caching Proxy with Probabilistic XFetch Cache Stampede Guard',
    description: 'A high-concurrency caching proxy layer sitting between application servers and databases that prevents cache stampedes using probabilistic early recomputation (XFetch algorithm).',
    category: 'backend',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['TypeScript', 'Node.js', 'Redis', 'Vitest'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement core key-value get/set proxy wrapper around Redis client.',
      'Implement XFetch probabilistic algorithm determining when to refresh cached entries before expiration.',
      'Build mutex locking fallback for background recomputation workers.',
      'Benchmark database load and response latency under simulated thundering herd traffic.'
    ],
    learningPrompts: [
      'Explain the Cache Stampede (Thundering Herd) problem and how popular cache key expirations crash databases.',
      'How does the XFetch probabilistic early recomputation algorithm compute refresh probabilities dynamically?',
      'What is the difference between mutex locking cache updates and probabilistic background refreshes?'
    ],
    problemStatement: 'Simultaneous cache key expirations under heavy traffic cause database crashes due to thundering herd requests.',
    whySuitableForYou: 'Fits an advanced student mastering algorithmic caching, probabilistic algorithms, and high-concurrency performance tuning.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because cache stampede mitigation requires sophisticated algorithmic reasoning and performance benchmarking.',
    defendingYourChoice: [
      'Expiring popular cache keys under heavy load causes thundering herd database crashes.',
      'I implemented the XFetch probabilistic algorithm to refresh cached entries early before expiration.',
      'The proxy prevents database overloads while maintaining sub-millisecond response speeds.'
    ]
  },
  {
    id: 'backend-fyp-10',
    title: 'Distributed Chunked File Storage Gateway with SHA-256 Content Deduplication',
    description: 'A backend storage API that breaks uploaded files into content-addressable SHA-256 chunks, eliminates duplicate storage of identical chunks, and reconstructs original files.',
    category: 'backend',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Crypto'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Implement fixed/variable chunking algorithm for incoming file streams.',
      'Build content-addressed storage repository indexing chunks by hash.',
      'Implement deduplication registry verifying existing chunk hashes prior to disk write.',
      'Benchmark disk space savings and file upload/reconstruction speeds across redundant datasets.'
    ],
    learningPrompts: [
      'Explain content-addressable storage (CAS) and how SHA-256 chunk hashes identify duplicate data blocks.',
      'What are the algorithmic differences between fixed-size chunking and variable-size rolling hash chunking (Rabin Fingerprints)?',
      'How do stream transformers process multi-gigabyte file uploads without loading whole files into RAM?'
    ],
    problemStatement: 'Duplicate file uploads waste server storage infrastructure and network bandwidth.',
    whySuitableForYou: 'Ideal for an advanced backend developer working with binary stream processing, content-addressable storage, and hash registries.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because data deduplication is a core storage engineering concept with high practical efficiency gains.',
    defendingYourChoice: [
      'Redundant file uploads waste gigabytes of cloud storage space.',
      'I engineered a content-addressable storage gateway that indexes SHA-256 chunks to eliminate duplicate storage.',
      'The project significantly reduces disk space requirements.'
    ]
  },
  {
    id: 'backend-fyp-11',
    title: 'Distributed Atomic Token-Bucket Rate Limiter Gateway with Redis Lua Scripts',
    description: 'A high-throughput API gateway middleware enforcing distributed sliding window and token bucket rate limits across clustered server nodes using atomic Lua scripts in Redis.',
    category: 'backend',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Redis', 'Lua'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Write atomic Redis Lua script executing token bucket refill and deduction in a single step.',
      'Build Fastify gateway middleware evaluating client API keys or IP addresses.',
      'Add dynamic rate limit header injection (X-RateLimit-Remaining, Retry-After).',
      'Benchmark API gateway throughput and verify zero concurrency race conditions under 10,000 req/sec.'
    ],
    learningPrompts: [
      'Explain why executing rate-limiting logic inside Redis Lua scripts eliminates distributed race conditions.',
      'What are the differences between Token Bucket, Leaky Bucket, and Sliding Window Log rate limiters?',
      'How do HTTP headers (X-RateLimit-Limit, Retry-After) communicate rate-limiting state to client API consumers?'
    ],
    problemStatement: 'Distributed API servers suffer from race conditions when checking rate limits without atomic database operations.',
    whySuitableForYou: 'Suitable for an advanced student studying distributed lock-free algorithms, Lua scripting, and gateway architecture.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because atomic distributed rate-limiting demonstrates technical mastery over distributed concurrency risks.',
    defendingYourChoice: [
      'Distributed rate limit checks introduce race conditions if read and update steps are non-atomic.',
      'I executed atomic token-bucket operations inside Redis Lua scripts to eliminate race conditions.',
      'The gateway handles tens of thousands of API requests safely.'
    ]
  },
  {
    id: 'backend-fyp-12',
    title: 'gRPC vs REST Microservice Communication Performance Benchmarking Engine',
    description: 'A specialized backend benchmarking suite executing comparative performance evaluations between gRPC (HTTP/2 Protocol Buffers) and REST (HTTP/1.1 JSON) microservices under heavy load.',
    category: 'backend',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Go / Node.js', 'gRPC', 'Protobuf', 'Express', 'Benchmark.js'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Implement identical CRUD microservices in both gRPC (Protobuf) and REST (JSON).',
      'Build benchmarking client issuing 100,000 concurrent RPC vs REST payload calls.',
      'Compute throughput (RPS), CPU utilization, and payload serialization size differences.',
      'Export empirical comparative benchmark reports detailing HTTP/2 multiplexing advantages.'
    ],
    learningPrompts: [
      'Explain how binary Protocol Buffer serialization achieves smaller payload sizes than JSON string serialization.',
      'What are the advantages of HTTP/2 stream multiplexing in gRPC over HTTP/1.1 sequential connections?',
      'How does contract-first API design (.proto files) enforce type safety across polyglot microservices?'
    ],
    problemStatement: 'Engineering teams adopt microservice communication protocols based on hype without empirical benchmarks on CPU overhead, latency, and serialization size.',
    whySuitableForYou: 'Ideal for an advanced backend developer performing empirical benchmarking across inter-service communication protocols.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because empirical protocol evaluation provides scientific methodology and clear quantitative results.',
    defendingYourChoice: [
      'Choosing inter-service communication protocols without empirical testing leads to unexpected serialization bottlenecks.',
      'I built a comparative benchmarking suite measuring gRPC Protobuf vs REST JSON throughput and payload sizes.',
      'The study proves gRPC serialization efficiency gains for internal microservice communication.'
    ]
  },

  // --- DATA & ANALYTICS FYP (12: 2 beginner, 5 intermediate, 5 advanced) ---
  {
    id: 'data-fyp-1',
    title: 'Course Evaluation Qualitative Student Feedback Sentiment Analyzer',
    description: 'A natural language processing pipeline that categorizes student qualitative end-of-semester course feedback into positive, neutral, or negative sentiment tiers using lexicon tools.',
    category: 'data',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Python', 'NLTK/VADER', 'Flask', 'Chart.js'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Preprocess feedback text (lowercasing, stop-word removal, tokenization).',
      'Apply VADER sentiment analysis dictionary to score text samples.',
      'Generate keyword cloud and topic distribution summaries per course.',
      'Build simple web dashboard displaying aggregated course sentiment scores.'
    ],
    learningPrompts: [
      'Explain how lexicon-based sentiment tools (VADER) calculate polarity scores for text sentences.',
      'What are the standard text preprocessing steps (stemming, lemmatization, stop-word removal) in NLP?',
      'How do keyword extraction algorithms identify frequent topic nouns in student review data?'
    ],
    problemStatement: 'Academic departments receive thousands of written student course reviews but lack automated tools to summarize qualitative feedback.',
    whySuitableForYou: 'Fits a beginner data science student learning text preprocessing, lexicon sentiment tools, and web chart rendering.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because NLP feedback analysis offers practical utility for academic quality assurance.',
    defendingYourChoice: [
      'Reading qualitative course feedback manually takes faculty weeks after every semester.',
      'I applied VADER sentiment lexicon scoring and keyword extraction to process reviews automatically.',
      'The dashboard highlights areas needing course improvement.'
    ]
  },
  {
    id: 'data-fyp-2',
    title: 'University Library Book Borrowing Frequency & Demand Analytics Dashboard',
    description: 'An analytics dashboard processing historical library checkout records to highlight popular genres, peak borrowing months, and overdue trends.',
    category: 'data',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Python', 'Pandas', 'Streamlit', 'Plotly'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Clean raw library checkout CSV logs and parse timestamp data.',
      'Calculate metric aggregations (top genres, average borrow duration).',
      'Build interactive Streamlit web dashboard with category filters.',
      'Export summary reports for library acquisitions planning.'
    ],
    learningPrompts: [
      'Explain how Pandas DataFrame aggregation functions (groupby, pivot_table) process tabular datasets.',
      'What are the key visualization guidelines for choosing bar charts versus line graphs for time-series data?',
      'How does interactive web dashboard state management operate in Streamlit?'
    ],
    problemStatement: 'Library managers order new books based on intuition rather than historical borrowing data trends.',
    whySuitableForYou: 'Ideal for a beginner learning data cleaning with Pandas and interactive dashboard creation with Streamlit.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because data-driven resource acquisition provides clear institutional benefits.',
    defendingYourChoice: [
      'Library acquisition budgets are spent without data on actual book checkout demand.',
      'I built a data aggregation pipeline that reveals peak borrowing cycles and genre demand.',
      'The dashboard guides smarter library inventory investments.'
    ]
  },
  {
    id: 'data-fyp-3',
    title: 'E-Commerce Product Review Aspect & Noun Phrase Sentiment Miner',
    description: 'A text mining pipeline that processes customer review comments, extracts feature nouns using POS tagging, and correlates features with sentiment scores.',
    category: 'data',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Python', 'spaCy', 'Pandas', 'Flask'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Preprocess text dataset and perform Part-of-Speech (POS) tagging with spaCy.',
      'Extract noun chunks corresponding to product features (e.g. "battery life", "screen quality").',
      'Correlate extracted features with star ratings and sentiment scores.',
      'Evaluate extraction precision and recall against manually annotated review samples.'
    ],
    learningPrompts: [
      'Explain how Part-of-Speech (POS) tagging algorithms identify noun chunks in natural language text.',
      'What is Aspect-Based Sentiment Analysis (ABSA) and how does it differ from document-level sentiment analysis?',
      'How are Precision and Recall calculated when evaluating text information extraction pipelines?'
    ],
    problemStatement: 'E-commerce buyers cannot easily discern specific product pros and cons from hundreds of unorganized text reviews.',
    whySuitableForYou: 'Suitable for a beginner student applying NLP part-of-speech tagging to extract structured information from unstructured text.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because aspect-based text mining is a well-established data science research application.',
    defendingYourChoice: [
      'Star ratings alone do not tell buyers which specific product features are failing.',
      'I used spaCy part-of-speech tagging to mine noun phrases and link them to rating scores.',
      'The tool provides clear feature-level sentiment summaries.'
    ]
  },
  {
    id: 'data-fyp-4',
    title: 'Academic Co-Authorship & Research Collaboration Graph Network Analyzer',
    description: 'A network analysis utility parsing publication metadata files (BibTeX/CSV) to construct co-author collaboration graphs and compute centrality metrics (PageRank, Betweenness).',
    category: 'data',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Python', 'NetworkX', 'BibtexParser', 'PyVis'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Parse BibTeX publication files into author and paper data structures.',
      'Build undirected collaboration graph using NetworkX.',
      'Compute Degree Centrality, Betweenness Centrality, and PageRank scores.',
      'Render interactive HTML graph visualizer identifying key inter-disciplinary research hubs.'
    ],
    learningPrompts: [
      'Explain how PageRank algorithm scores node importance in network graphs.',
      'What is Betweenness Centrality and how does it identify bridge nodes connecting distinct research clusters?',
      'How are graph adjacency matrices represented efficiently in Python memory?'
    ],
    problemStatement: 'University research directors lack network visualization tools to track inter-departmental research collaborations.',
    whySuitableForYou: 'Great beginner data science project introducing graph theory metrics (NetworkX) and network visualizers.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because graph analysis of scientific co-authorship offers compelling visual insights and academic rigor.',
    defendingYourChoice: [
      'Tracking interdisciplinary research collaborations is difficult from plain publication lists.',
      'I applied graph network analysis using NetworkX to compute PageRank centrality across co-author networks.',
      'The interactive graph highlights key research hubs in the faculty.'
    ]
  },
  {
    id: 'data-fyp-5',
    title: 'Student Academic Attrition & Early Warning Classifier using Machine Learning',
    description: 'A predictive machine learning classifier evaluating student quiz scores, attendance rates, and assignment timing to flag at-risk students needing academic support.',
    category: 'data',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Python', 'scikit-learn', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Engineer tabular feature dataset from synthetic academic performance records.',
      'Train and evaluate Logistic Regression, Random Forest, and XGBoost classifiers.',
      'Optimize hyper-parameters for Recall to minimize false negatives on at-risk students.',
      'Evaluate ROC-AUC curves and deploy predictive API returning risk probability scores.'
    ],
    learningPrompts: [
      'Explain why optimizing for Recall is critical when building early warning risk classifiers.',
      'What is the difference between Decision Trees, Random Forests, and Gradient Boosted Trees (XGBoost)?',
      'How does SMOTE (Synthetic Minority Over-sampling Technique) address class imbalance in training data?'
    ],
    problemStatement: 'Academic probation is often identified too late in the semester for interventions to prevent student dropouts.',
    whySuitableForYou: 'Well-suited for an intermediate student mastering tabular classification models, feature engineering, and model metrics (Recall, ROC-AUC).',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because early warning predictive modeling directly supports student retention initiatives.',
    defendingYourChoice: [
      'By the time semester grades are published, it is too late to help failing students.',
      'I trained Random Forest and XGBoost classifiers optimized for recall to detect risk early.',
      'The predictive API flags struggling students in time for academic tutoring.'
    ]
  },
  {
    id: 'data-fyp-6',
    title: 'Automated Resume PDF Parser & Skill Similarity Matcher',
    description: 'A data processing engine extracting text from student resumes (PDF), normalizing technical skills against a taxonomy, and computing TF-IDF cosine similarity scores.',
    category: 'data',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Python', 'FastAPI', 'scikit-learn', 'pdfplumber'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Build document parser to extract unstructured text from PDF resumes.',
      'Create TF-IDF vectorizer and Cosine Similarity matrix calculation engine.',
      'Implement skill dictionary normalization (e.g. mapping "ReactJS" -> "React").',
      'Evaluate skill extraction accuracy and output missing skill gap reports.'
    ],
    learningPrompts: [
      'Explain how Vector Space Models and Cosine Similarity measure text document alignment mathematically.',
      'What is the role of TF (Term Frequency) and IDF (Inverse Document Frequency) in text feature extraction?',
      'How does text normalization (synonym mapping) improve resume skill matching accuracy?'
    ],
    problemStatement: 'Graduating CS students struggle to identify specific skill gaps between their resumes and technical job descriptions.',
    whySuitableForYou: 'Ideal for an intermediate data student applying TF-IDF vectorization and cosine similarity to document matching.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because automated resume parsing addresses a high-demand career technology challenge.',
    defendingYourChoice: [
      'Manual resume reviews fail to give students quantitative feedback on missing skills.',
      'I applied TF-IDF vectorization and cosine similarity to measure resume alignment with job postings.',
      'The system outputs precise skill gap reports to help students prepare for job markets.'
    ]
  },
  {
    id: 'data-fyp-7',
    title: 'Campus Video Pedestrian Traffic Density Estimator using YOLOv8',
    description: 'A computer vision pipeline processing campus camera video streams to detect, track, and count pedestrian traffic volumes across designated walkway zones.',
    category: 'data',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Python', 'OpenCV', 'YOLOv8', 'Streamlit'],
    estimatedTimeframeWeeks: 9,
    timeframeLabel: '8-9 weeks (~2 months)',
    milestones: [
      'Set up OpenCV video capture pipeline for frame extraction.',
      'Integrate pre-trained YOLOv8 object detection model for person detection.',
      'Build bounding box tracking and virtual counting line crossing logic.',
      'Evaluate counting accuracy and FPS throughput across varying video resolutions.'
    ],
    learningPrompts: [
      'Explain how single-stage object detectors (YOLO) predict bounding boxes and class probabilities in a single forward pass.',
      'What are object tracking algorithms (SORT / DeepSORT) and how do they maintain entity IDs across video frames?',
      'How does IoU (Intersection over Union) evaluate object detection bounding box accuracy?'
    ],
    problemStatement: 'Campus urban planners lack objective pedestrian density data to plan walkway expansions and traffic control.',
    whySuitableForYou: 'Fits an intermediate data student interested in deep learning object detection (YOLOv8) and video analytics.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because computer vision traffic analysis provides strong technical sophistication and clear visual evidence.',
    defendingYourChoice: [
      'Manual pedestrian counting for campus planning is inaccurate and labor-intensive.',
      'I integrated YOLOv8 object detection with line-crossing algorithms to count traffic automatically.',
      'The analytics dashboard helps optimize campus pedestrian infrastructure.'
    ]
  },
  {
    id: 'data-fyp-8',
    title: 'AST-Based Source Code Plagiarism & Structural Similarity Detector',
    description: 'An educational static analysis tool parsing student code into Abstract Syntax Trees (ASTs), generating Winnowing token fingerprints, and detecting structural code plagiarism.',
    category: 'data',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Python', 'AST module', 'Node.js', 'Vue.js'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement AST parser for target programming language (Python or JavaScript).',
      'Build Winnowing fingerprinting algorithm on normalized AST token streams.',
      'Generate pairwise similarity score matrix across student submission directory.',
      'Evaluate detection accuracy against benchmark plagiarized code datasets (refactored, reordered, variable-renamed).'
    ],
    learningPrompts: [
      'Explain why Abstract Syntax Tree (AST) representations are immune to cosmetic code changes like variable renaming.',
      'What is the Winnowing algorithm and how does substring k-gram hashing detect local code similarities efficiently?',
      'How do Jaccard Similarity and Cosine Distance compare when measuring document fingerprint overlaps?'
    ],
    problemStatement: 'Textual code comparisons fail to detect plagiarized code when students rename variables or reorder functions.',
    whySuitableForYou: 'Ideal for an advanced student studying compiler ASTs, token fingerprinting algorithms, and code analysis.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because AST-based similarity detection demonstrates high academic computer science rigor.',
    defendingYourChoice: [
      'Simple text diff tools are easily bypassed by variable renaming.',
      'I parsed source code into Abstract Syntax Trees and applied Winnowing fingerprinting to detect structural similarity.',
      'The tool accurately identifies plagiarized code regardless of cosmetic variable changes.'
    ]
  },
  {
    id: 'data-fyp-9',
    title: 'Time-Series Forecasting Model for Campus Electricity Demand Peak Alerts',
    description: 'An analytics pipeline ingesting smart meter electrical data, fitting Prophet/ARIMA time-series models, evaluating RMSE forecast errors, and predicting peak demand spikes.',
    category: 'data',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Python', 'Pandas', 'Prophet/Statsmodels', 'Streamlit'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Clean multi-year energy consumption CSV datasets and perform seasonal decomposition.',
      'Train time-series forecasting models (ARIMA and Prophet) on historical hourly load data.',
      'Evaluate forecast accuracy metrics (RMSE, MAPE) across 24-hour and 7-day forecast horizons.',
      'Deploy Streamlit dashboard visualizing predicted demand curves and peak threshold alerts.'
    ],
    learningPrompts: [
      'Explain seasonal decomposition (Trend, Seasonality, Residuals) in time-series data analysis.',
      'What are the parameters (p, d, q) in ARIMA models and how does stationarity testing (ADF test) guide differencing?',
      'How do Root Mean Squared Error (RMSE) and Mean Absolute Percentage Error (MAPE) evaluate time-series forecast accuracy?'
    ],
    problemStatement: 'Unpredicted electrical demand spikes result in expensive utility surcharge penalties for the university.',
    whySuitableForYou: 'Suitable for an advanced data science student proficient in time-series forecasting models and seasonal decomposition.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because time-series energy forecasting offers substantial financial savings and rigorous statistical depth.',
    defendingYourChoice: [
      'Unexpected power demand spikes trigger costly peak-load electricity penalties.',
      'I trained Prophet time-series models on historical smart meter data to forecast daily peak hours.',
      'The system allows facility managers to shift heavy electrical loads proactively.'
    ]
  },
  {
    id: 'data-fyp-10',
    title: 'Streaming Credit Card Fraud Detection Pipeline using Kafka & Isolation Forest',
    description: 'A real-time data streaming pipeline ingesting credit card transaction events over Apache Kafka, scoring events with an Isolation Forest model, and benchmarking alert latency.',
    category: 'data',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Python', 'Kafka', 'scikit-learn', 'Docker'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Set up Apache Kafka event topic for transaction stream ingestion.',
      'Train Isolation Forest anomaly model on imbalanced transaction datasets.',
      'Build real-time streaming consumer scoring events against model decision thresholds.',
      'Benchmark detection latency and false positive rates under simulated 1,000 req/sec event streams.'
    ],
    learningPrompts: [
      'Explain how Isolation Forest isolates anomalies by randomly partitioning feature spaces compared to distance-based models.',
      'What is stream processing sliding windowing and how does it compute real-time feature aggregations in Kafka?',
      'How does evaluating Precision-Recall AUC differ from ROC AUC when dealing with extreme 0.1% fraud class imbalances?'
    ],
    problemStatement: 'Batch fraud detection models process transactions too late, allowing fraudulent payments to settle.',
    whySuitableForYou: 'Fits an advanced student mastering real-time event streaming (Kafka) and unsupervised anomaly detection.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because streaming anomaly detection reflects state-of-the-art financial data engineering.',
    defendingYourChoice: [
      'Batch transaction analysis leaves financial systems vulnerable to real-time fraud.',
      'I integrated Kafka event streaming with an Isolation Forest anomaly model for sub-second fraud scoring.',
      'The pipeline detects suspicious transactions in real time.'
    ]
  },
  {
    id: 'data-fyp-11',
    title: 'Distributed MapReduce Web Access Log Processing Framework',
    description: 'A custom distributed MapReduce implementation in Python partitioning multi-gigabyte server access logs across worker nodes to compute top IP bandwidth consumers and 4xx error rates.',
    category: 'data',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Python', 'multiprocessing', 'ZeroMQ / Sockets'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Design Master node for splitting file chunks and assigning Map/Reduce tasks to Workers.',
      'Implement Map functions parsing Apache/Nginx access log lines into key-value pairs.',
      'Implement Shuffle and Sort phase grouping intermediate key-value pairs by key.',
      'Evaluate speedup factor and scaling efficiency across 2, 4, and 8 worker process nodes.'
    ],
    learningPrompts: [
      'Explain the Map, Shuffle, and Reduce phases of the MapReduce distributed computing paradigm.',
      'What is Amdahl\'s Law and how does it limit maximum speedup when parallelizing data processing across nodes?',
      'How do distributed master nodes handle worker node failures during active task execution?'
    ],
    problemStatement: 'Single-threaded log analyzer scripts crash when processing multi-gigabyte server access logs.',
    whySuitableForYou: 'Suitable for an advanced student learning distributed computing architectures and MapReduce primitives.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because implementing a custom MapReduce framework demonstrates fundamental distributed systems expertise.',
    defendingYourChoice: [
      'Analyzing multi-gigabyte server logs on a single CPU core causes memory exhaustion.',
      'I built a custom distributed MapReduce framework with Master-Worker task partitioning and Shuffle phases.',
      'The framework processes large log datasets in parallel efficiently.'
    ]
  },
  {
    id: 'data-fyp-12',
    title: 'Comparative Evaluation of Collaborative Filtering vs Content-Based Book Recommenders',
    description: 'An empirical machine learning study constructing both Collaborative Filtering (Matrix Factorization SVD) and Content-Based (TF-IDF) book recommendation models, benchmarking MAE and Coverage.',
    category: 'data',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Python', 'Surprise', 'scikit-learn', 'Pandas', 'FastAPI'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build user-item interaction matrix and book metadata feature vectors from library dataset.',
      'Implement Matrix Factorization (SVD) Collaborative Filtering model.',
      'Implement Content-Based TF-IDF Item Feature Vector model.',
      'Benchmark RMSE, MAE, Coverage, and Cold-Start performance across both model architectures.'
    ],
    learningPrompts: [
      'Explain Matrix Factorization (SVD) in recommender systems and how latent factor vectors represent user preferences.',
      'What is the Cold-Start Problem in collaborative filtering and how do hybrid content-based models mitigate it?',
      'How do Mean Absolute Error (MAE) and Catalog Coverage metrics measure recommendation model quality?'
    ],
    problemStatement: 'Recommender systems suffer from cold-start failures and poor coverage when relying on a single modeling technique without comparative evaluation.',
    whySuitableForYou: 'Ideal for an advanced data science student conducting empirical comparative evaluations across machine learning architectures.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because empirical model comparison provides strong scientific methodology suitable for an advanced FYP.',
    defendingYourChoice: [
      'Collaborative filtering fails on new unrated books due to the cold-start problem.',
      'I conducted a comparative evaluation between SVD Matrix Factorization and Content-Based TF-IDF models.',
      'The empirical results define optimal hybrid recommendation strategies.'
    ]
  },

  // --- SYSTEMS & NETWORKING FYP (12: 2 beginner, 5 intermediate, 5 advanced) ---
  {
    id: 'systems-fyp-1',
    title: 'Lightweight HTTP/1.1 Web Server with Fixed Thread Worker Pool',
    description: 'A CLI static web server written from low-level sockets handling HTTP GET/HEAD requests, MIME type detection, concurrency via a fixed worker pool, and access logging.',
    category: 'systems',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['C++', 'or Node.js native Net', 'POSIX Threads'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Implement raw TCP socket listener handling incoming client connections.',
      'Parse HTTP request lines, headers, and requested file path.',
      'Build non-blocking thread pool for concurrent client request processing.',
      'Implement HTTP response builder with status codes (200, 404, 500) and MIME types.'
    ],
    learningPrompts: [
      'Explain how raw TCP socket listening (`socket()`, `bind()`, `listen()`, `accept()`) operates in C/POSIX.',
      'What are the advantages of thread pool worker reuse over spawning new threads per connection?',
      'How does HTTP/1.1 wire format structure request headers, status codes, and body content?'
    ],
    problemStatement: 'High-level web frameworks hide underlying TCP socket handling and HTTP wire protocol mechanics from systems students.',
    whySuitableForYou: 'Ideal for a beginner systems student mastering low-level socket programming and thread pools.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because building a web server from raw sockets demonstrates core networking and concurrency fundamentals.',
    defendingYourChoice: [
      'High-level frameworks obscure socket management and HTTP wire parsing.',
      'I constructed an HTTP/1.1 server from raw TCP sockets paired with a POSIX thread worker pool.',
      'The project proves hands-on mastery of low-level networking.'
    ]
  },
  {
    id: 'systems-fyp-2',
    title: 'Operating System Memory Page Replacement Algorithm Simulator',
    description: 'An educational simulation tool comparing OS memory page replacement strategies (FIFO, LRU, Optimal, Clock) against custom page reference strings.',
    category: 'systems',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['TypeScript', 'React', 'Tailwind CSS'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Implement algorithmic state machines for FIFO, LRU, Optimal, and Clock algorithms.',
      'Build step-by-step memory frame state transition simulator engine.',
      'Calculate and display comparative Page Fault rates and execution statistics.',
      'Design visual step-through UI rendering memory frame slots and cache hits/misses.'
    ],
    learningPrompts: [
      'Explain Virtual Memory paging and why page faults occur when requested pages are absent from physical RAM.',
      'What is Belady\'s Anomaly in FIFO page replacement and why doesn\'t LRU suffer from it?',
      'How does the Clock page replacement algorithm approximate LRU using reference bits?'
    ],
    problemStatement: 'OS virtual memory management concepts like page faults and LRU replacement are difficult to grasp without step-by-step state visualization.',
    whySuitableForYou: 'Great for a beginner systems developer combining state machine logic with step-by-step visualization.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because OS algorithm simulation demonstrates theoretical understanding and clear software execution.',
    defendingYourChoice: [
      'Understanding virtual memory page faults requires tracing frame allocations step by step.',
      'I built a simulator comparing FIFO, LRU, and Optimal algorithms with live page fault metrics.',
      'The tool visualizes virtual memory mechanics clearly.'
    ]
  },
  {
    id: 'systems-fyp-3',
    title: 'Low-Level Network Latency & ICMP Ping Probe CLI Utility',
    description: 'A command-line networking utility constructing raw ICMP Echo Request packets, measuring round-trip latency, calculating packet jitter, and rendering ASCII charts.',
    category: 'systems',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js / Python', 'Raw Sockets', 'Commander.js'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Construct raw ICMP Echo Request binary packet headers with checksum computation.',
      'Send ICMP probes over raw sockets and await ICMP Echo Reply frames.',
      'Calculate RTT min/max/average stats and loss percentage.',
      'Evaluate packet jitter and render terminal ASCII charts visualizing latency spikes.'
    ],
    learningPrompts: [
      'Explain how ICMP Echo Request and Echo Reply binary headers are constructed in IP packets.',
      'How is the Internet Checksum (ones\' complement sum) calculated over binary packet headers?',
      'What is network jitter and how does standard deviation of RTT measure connection stability?'
    ],
    problemStatement: 'Standard ping utilities lack customizable packet payloads, detailed jitter calculations, and terminal latency visualization.',
    whySuitableForYou: 'Suitable for a beginner systems student learning binary packet construction and raw sockets.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because raw socket packet manipulation is a foundational networking skill.',
    defendingYourChoice: [
      'Default network diagnostic tools do not display latency jitter trends over time.',
      'I constructed raw ICMP binary headers and computed checksums to measure network stability.',
      'The tool provides custom network latency probes with visual terminal charts.'
    ]
  },
  {
    id: 'systems-fyp-4',
    title: 'Terminal System Process Resource Monitor & Task Manager Utility',
    description: 'A terminal resource monitoring utility reading OS process stats (/proc), tracking CPU and RAM consumption, and sending process signals.',
    category: 'systems',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js / Python', 'psutil', 'blessed/ink'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Read process status metadata from OS system interfaces (/proc or psutil).',
      'Build interactive terminal UI table updating every 1000ms.',
      'Implement process sorting by CPU%, Memory%, PID, and user.',
      'Add keybindings for sending SIGTERM (kill) commands to selected processes.'
    ],
    learningPrompts: [
      'Explain how Linux `/proc` pseudo-filesystem exposes kernel process metrics to user-space tools.',
      'What is the difference between POSIX signals SIGTERM (15) and SIGKILL (9) regarding process handling?',
      'How do terminal UI libraries render interactive grid layouts without clearing terminal history?'
    ],
    problemStatement: 'Undergraduate students often lack understanding of OS process states, PID structures, and process signal handling.',
    whySuitableForYou: 'Fits a beginner developer learning system process APIs, signal handling, and terminal interface design.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because process monitor development bridges operating system concepts with user-space tool engineering.',
    defendingYourChoice: [
      'Monitoring system resource usage requires direct interaction with OS process tables.',
      'I built a terminal task manager that parses process metadata and supports process signal dispatching.',
      'The tool demonstrates practical systems programming skills.'
    ]
  },
  {
    id: 'systems-fyp-5',
    title: 'Custom Filtering DNS Server with Domain Blocklists and LRU Cache',
    description: 'A UDP-based DNS server intercepting DNS queries, checking against local domain blocklists, forwarding queries to upstream resolvers, and caching responses in an LRU memory cache.',
    category: 'systems',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js (dgram)', 'TypeScript', 'LRU Cache'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Implement UDP socket listener on port 53 and binary DNS packet parser.',
      'Build in-memory domain blocklist matching engine.',
      'Implement upstream DNS resolver forwarding with answer packet response.',
      'Evaluate DNS lookup latency reduction achieved by the LRU memory cache.'
    ],
    learningPrompts: [
      'Explain binary DNS packet header structures (ID, Flags, Questions, Answer RRs) over UDP.',
      'What are the architectural advantages of UDP over TCP for lightweight DNS query-response protocols?',
      'How does TTL (Time to Live) govern cache entry expiration in DNS recursive resolvers?'
    ],
    problemStatement: 'Standard DNS resolvers do not block malicious domains or provide local caching to reduce network latency.',
    whySuitableForYou: 'Well-suited for an intermediate student mastering UDP socket listeners, binary packet parsing, and LRU cache structures.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because DNS packet parsing and caching demonstrate strong computer networking fundamentals.',
    defendingYourChoice: [
      'Unfiltered DNS traffic exposes campus networks to known malicious domains.',
      'I built a UDP DNS server that parses DNS binary packets, checks blocklists, and caches TTL responses.',
      'The server improves network security while reducing DNS lookup latency.'
    ]
  },
  {
    id: 'systems-fyp-6',
    title: 'Container Process Isolator using Linux Namespaces and CGroups',
    description: 'A lightweight process containerization wrapper utilizing Linux namespaces (PID, Mount, Net) and cgroups to isolate processes with restricted CPU and RAM quotas.',
    category: 'systems',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['C / Go', 'Linux Syscalls', 'cgroups v2'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Invoke `clone()` syscall with `CLONE_NEWPID`, `CLONE_NEWNS`, and `CLONE_NEWNET` flags.',
      'Set up pivot_root chroot environment from a minimal rootfs folder.',
      'Configure cgroup v2 controller memory and max CPU quota limits.',
      'Evaluate process resource containment by running CPU stress benchmarks inside isolated containers.'
    ],
    learningPrompts: [
      'Explain how Linux Namespaces (PID, Mount, Network) virtualize kernel resources for isolated processes.',
      'What is the role of Linux Control Groups (CGroups v2) in enforcing hard memory and CPU limits?',
      'How does `pivot_root` chroot jail isolate a container filesystem from the host root filesystem?'
    ],
    problemStatement: 'Developers use container tools like Docker without understanding how Linux kernel namespaces and cgroups achieve process isolation.',
    whySuitableForYou: 'Ideal for an intermediate systems student exploring Linux kernel system calls and container internals.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because container isolation implementation showcases deep Linux systems knowledge.',
    defendingYourChoice: [
      'Relying on black-box container engines obscures fundamental OS isolation mechanisms.',
      'I utilized Linux `clone()` syscall flags and cgroup v2 controllers to build a custom container isolator.',
      'The project proves low-level Linux kernel system call expertise.'
    ]
  },
  {
    id: 'systems-fyp-7',
    title: 'Distributed In-Memory Key-Value Server with TTL Eviction Engine',
    description: 'An in-memory key-value database server supporting custom binary protocol commands (SET, GET, DEL, EXPIRE), active/passive TTL eviction, and concurrent TCP connection pooling.',
    category: 'systems',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js Net module', 'TypeScript', 'Vitest'],
    estimatedTimeframeWeeks: 8,
    timeframeLabel: '6-8 weeks (~2 months)',
    milestones: [
      'Design binary/text wire protocol for command serialization and parsing.',
      'Implement concurrent TCP connection listener storing data in memory maps.',
      'Add TTL key expiration handling using active sweep and passive check routines.',
      'Benchmark throughput (ops/sec) and memory footprint across 100,000 key operations.'
    ],
    learningPrompts: [
      'Explain the difference between active TTL sweep routines and passive expiration checks on key read.',
      'What are the design considerations when crafting custom wire protocols for TCP database servers?',
      'How do hash map data structures achieve O(1) average time complexity for key lookups?'
    ],
    problemStatement: 'Applications requiring fast in-memory state lookup struggle without lightweight, custom key-value storage servers.',
    whySuitableForYou: 'Great for an intermediate systems developer learning wire protocols, active memory management, and TCP servers.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because in-memory database construction showcases systems design, data structure management, and networking.',
    defendingYourChoice: [
      'Understanding database internals requires building wire protocols and memory eviction engines.',
      'I designed a binary wire protocol paired with active TTL sweep routines for in-memory key storage.',
      'The server provides high-concurrency key-value storage.'
    ]
  },
  {
    id: 'systems-fyp-8',
    title: 'Layer 4 TCP Reverse Proxy Load Balancer with Active Health Probes',
    description: 'A reverse proxy load balancer operating at the TCP layer, distributing incoming client socket connections across backend nodes using Round-Robin and Least-Conn algorithms with health monitoring.',
    category: 'systems',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Go', 'or Node.js Net module', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Implement TCP connection forwarding proxy between client sockets and target servers.',
      'Build Round-Robin and Least-Connections backend selector algorithms.',
      'Add active periodic HTTP/TCP health checker to automatically remove failed backends.',
      'Evaluate proxy throughput and latency overhead compared to direct socket connections.'
    ],
    learningPrompts: [
      'Explain how Layer 4 TCP proxying (transport layer) differs from Layer 7 HTTP proxying (application layer).',
      'What are the mathematical differences between Round-Robin, Weighted Round-Robin, and Least-Connections algorithms?',
      'How do active health probes detect backend node failures without disrupting active client connections?'
    ],
    problemStatement: 'High-traffic server clusters suffer outages if load balancers cannot detect backend node failures and reroute socket traffic.',
    whySuitableForYou: 'Suitable for an advanced systems student mastering socket proxying, load balancing algorithms, and health probes.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because Layer 4 proxy engineering demonstrates advanced network programming and high-availability architecture.',
    defendingYourChoice: [
      'Server cluster fault tolerance requires socket-level load balancing and active health checks.',
      'I engineered a TCP reverse proxy supporting Round-Robin routing and automatic node removal on failure.',
      'The project delivers resilient network traffic distribution.'
    ]
  },
  {
    id: 'systems-fyp-9',
    title: 'Embedded Key-Value Storage Engine with Write-Ahead Logging & SSTables',
    description: 'A persistent key-value storage engine featuring an in-memory MemTable (SkipList), Write-Ahead Log (WAL) for crash durability, and immutable SSTable disk flushes.',
    category: 'systems',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['TypeScript', 'Node.js fs/buffer', 'Vitest'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Implement append-only Write-Ahead Log (WAL) to guarantee write durability.',
      'Build in-memory MemTable using balanced SkipList data structure.',
      'Implement MemTable flushing to immutable SSTable disk files with sparse index.',
      'Benchmark write throughput (MB/s) and crash recovery time replaying WAL logs.'
    ],
    learningPrompts: [
      'Explain Log-Structured Merge-tree (LSM-tree) architecture and why append-only disk writes outperform random B-Tree I/O.',
      'How does a Write-Ahead Log (WAL) guarantee durability (ACID D property) upon unexpected system crashes?',
      'What is a SkipList probabilistic data structure and how does it achieve O(log N) search insertion without tree rebalancing?'
    ],
    problemStatement: 'In-memory stores lose data on crashes, while traditional B-Trees suffer from random disk write overhead.',
    whySuitableForYou: 'Ideal for an advanced systems developer studying LSM-tree architecture, write-ahead logs, and crash recovery.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because Log-Structured Merge-tree storage engines represent top-tier database systems engineering.',
    defendingYourChoice: [
      'High write-throughput databases use LSM-trees instead of B-Trees to avoid random disk I/O.',
      'I built an LSM storage engine with WAL logs, SkipList MemTables, and SSTable disk flushes.',
      'The engine guarantees data durability with high write performance.'
    ]
  },
  {
    id: 'systems-fyp-10',
    title: 'User-Space Encrypted FUSE File System Driver',
    description: 'A virtual file system driver implemented via FUSE that transparently encrypts file contents using AES-256-GCM before writing to underlying storage blocks.',
    category: 'systems',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['C / Rust', 'libfuse', 'OpenSSL / ring'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement FUSE callback operations (`read`, `write`, `readdir`, `getattr`).',
      'Integrate AES-256-GCM block encryption routine for file payload writes.',
      'Implement key derivation from master password prompt on file system mount.',
      'Benchmark file read/write IOPS compared to native EXT4 file systems.'
    ],
    learningPrompts: [
      'Explain how FUSE (Filesystem in Userspace) intercepts kernel VFS operations to execute user-space driver callbacks.',
      'What are the security advantages of authenticated block encryption (AES-GCM) for disk storage systems?',
      'How does block-level encryption differ from file-level encryption in virtual file system drivers?'
    ],
    problemStatement: 'Storing sensitive files on standard file systems exposes data if the physical disk is stolen or unencrypted.',
    whySuitableForYou: 'Fits an advanced student mastering user-space file systems (FUSE), block encryption, and file system I/O callbacks.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because FUSE file system driver development reflects advanced OS kernel interface programming.',
    defendingYourChoice: [
      'Protecting confidential disk files requires transparent block-level encryption.',
      'I implemented a FUSE file system driver that intercepts file callbacks to apply AES-256-GCM encryption.',
      'The project delivers secure, transparent disk storage.'
    ]
  },
  {
    id: 'systems-fyp-11',
    title: 'Raft Consensus Protocol Engine for Distributed State Machine Replication',
    description: 'A distributed state machine replication engine implementing the Raft consensus algorithm, including leader election, log replication, safety checks, and network partition recovery.',
    category: 'systems',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Go / TypeScript', 'gRPC / WebSockets', 'Vitest'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Implement Raft node state machine (Follower, Candidate, Leader) with randomized election timers.',
      'Build `RequestVote` and `AppendEntries` RPC messaging handlers.',
      'Implement log replication with leader commit index tracking.',
      'Simulate network partition split-brain scenarios verifying cluster safety and leader election recovery.'
    ],
    learningPrompts: [
      'Explain how Raft consensus algorithm guarantees state machine safety during network partitions.',
      'What is the role of randomized election timeouts in preventing split-vote deadlocks during leader elections?',
      'How does leader log matching property ensure consistent log replication across follower nodes?'
    ],
    problemStatement: 'Distributed server clusters fail to maintain consistent state across nodes during network partitions.',
    whySuitableForYou: 'Well-suited for an advanced student studying fault-tolerant distributed consensus algorithms and RPC messaging.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because Raft consensus protocol engineering represents pinnacle distributed systems mastery.',
    defendingYourChoice: [
      'Distributed systems require consensus algorithms to maintain state consistency across network failures.',
      'I implemented the Raft consensus protocol with leader election, log replication, and split-brain safety checks.',
      'The engine guarantees distributed state consistency.'
    ]
  },
  {
    id: 'systems-fyp-12',
    title: 'Custom User-Space TCP/IP Protocol Stack Simulator',
    description: 'A low-level networking project implementing a simplified user-space TCP/IP protocol stack (Ethernet frame parsing, ARP table resolution, IP routing, and TCP state machine).',
    category: 'systems',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['C / Rust', 'TUN/TAP device driver', 'Make'],
    estimatedTimeframeWeeks: 12,
    timeframeLabel: '10-12 weeks (~3 months)',
    milestones: [
      'Read raw network packets from virtual Linux TUN/TAP device driver interface.',
      'Parse Ethernet frames, ARP requests, and IPv4 packet headers.',
      'Implement TCP state machine (CLOSED, LISTEN, SYN-RCVD, ESTABLISHED, FIN-WAIT).',
      'Benchmark socket throughput and verify compliance against RFC TCP handshake specifications.'
    ],
    learningPrompts: [
      'Explain how Linux TUN/TAP virtual network devices expose raw Layer 2/3 packets to user-space applications.',
      'What are the states in the TCP finite state machine (SYN-SENT, ESTABLISHED, TIME-WAIT) during connection lifecycles?',
      'How does Address Resolution Protocol (ARP) map IP addresses to physical MAC addresses on local network segments?'
    ],
    problemStatement: 'Kernel networking stacks operate as black boxes, preventing systems students from inspecting packet processing pipelines directly.',
    whySuitableForYou: 'Ideal for an advanced systems student mastering TUN/TAP interfaces, packet header decoding, and TCP state machine implementation.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because building a user-space TCP/IP stack represents premier network protocol engineering.',
    defendingYourChoice: [
      'Kernel network stacks obscure TCP state transitions and frame encapsulation.',
      'I built a user-space TCP/IP stack that processes TAP frames, handles ARP resolution, and manages TCP state machines.',
      'The project proves master-level understanding of core networking protocols.'
    ]
  },

  // --- SECURITY BASICS FYP (12: 2 beginner, 5 intermediate, 5 advanced) ---
  {
    id: 'security-fyp-1',
    title: 'Password Entropy Evaluator & Public Leak Checker CLI',
    description: 'A security utility CLI checking password strength against entropy metrics, common dictionary wordlists, and public breach databases via k-Anonymity APIs.',
    category: 'security',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Commander.js', 'Crypto API'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Build Shannon entropy calculator and password pattern complexity analyzer.',
      'Integrate local dictionary matching to detect common password substrings.',
      'Implement SHA-1 hashing and k-Anonymity API lookup against HaveIBeenPwned API.',
      'Provide actionable security score and recommendations output.'
    ],
    learningPrompts: [
      'Explain Shannon Entropy and how it measures the information randomness of passwords in bits.',
      'What is k-Anonymity privacy model and how does sending SHA-1 hash prefixes protect user passwords during leak lookups?',
      'Why are simple character rule checks insufficient to assess password strength against dictionary attacks?'
    ],
    problemStatement: 'Users select weak, breached passwords because static length checks fail to measure mathematical entropy or breach history.',
    whySuitableForYou: 'Ideal for a beginner security developer learning information entropy, cryptographic hashing, and k-Anonymity privacy.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because password security and breach checking address critical real-world cybersecurity awareness.',
    defendingYourChoice: [
      'Simple character length requirements do not prevent users from choosing breached passwords.',
      'I combined Shannon entropy calculations with k-Anonymity API hashing queries to evaluate real password strength.',
      'The utility provides accurate password security feedback.'
    ]
  },
  {
    id: 'security-fyp-2',
    title: 'File Directory Cryptographic Integrity Monitoring Tool',
    description: 'A CLI security tool generating SHA-256 baseline manifests for system directories to detect unauthorized file modifications or tampering.',
    category: 'security',
    skillLevel: 'beginner',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Crypto Module', 'Commander.js'],
    estimatedTimeframeWeeks: 4,
    timeframeLabel: '3-4 weeks (~1 month)',
    milestones: [
      'Scan directory recursively and generate SHA-256 baseline checksum manifest.',
      'Build verification mode comparing current directory state against baseline manifest.',
      'Flag added, modified, or deleted files with precise timestamps.',
      'Export audit report in text and JSON format.'
    ],
    learningPrompts: [
      'Explain how SHA-256 cryptographic hash collision resistance guarantees file integrity verification.',
      'What is Host-based Intrusion Detection (HIDS) and how does file integrity monitoring fit into system hardening?',
      'How do file system metadata attributes (mtime, permissions) complement hash checksums during auditing?'
    ],
    problemStatement: 'System administrators cannot detect unauthorized configuration file modifications made by malware or unauthorized users.',
    whySuitableForYou: 'Suitable for a beginner security student working with file system traversal, SHA-256 hashing, and audit reporting.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because file integrity monitoring is a standard security control for host defense.',
    defendingYourChoice: [
      'Silent file tampering goes unnoticed without cryptographic checksum verification.',
      'I built a file integrity monitor that hashes directory trees with SHA-256 to flag unauthorized changes.',
      'The tool provides essential host intrusion detection.'
    ]
  },
  {
    id: 'security-fyp-3',
    title: 'Time-Based One-Time Password (TOTP) MFA Authenticator CLI',
    description: 'A command-line authenticator tool implementing RFC 6238 Time-based One-Time Passwords (TOTP), secret key generation, and ASCII QR code rendering.',
    category: 'security',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'otplib', 'qrcode-terminal'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Implement HMAC-SHA1 TOTP token generation algorithm based on Unix epoch time steps.',
      'Generate base32 secret keys and render ASCII QR codes in terminal.',
      'Build verification function accepting 6-digit user tokens within time drift windows.',
      'Secure local storage of secret keys using encrypted keyfiles.'
    ],
    learningPrompts: [
      'Explain how RFC 6238 TOTP generates identical 6-digit tokens on server and client without network communication.',
      'What is HMAC (Hash-based Message Authentication Code) and how does Unix epoch time act as a moving factor?',
      'How does clock drift compensation allow valid TOTP verification despite slight device time mismatches?'
    ],
    problemStatement: 'Developers struggle to understand how two-factor authenticator apps generate dynamic 6-digit codes without network connectivity.',
    whySuitableForYou: 'Great beginner project covering HMAC algorithms, Base32 encoding, and RFC security standards.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because implementing standard RFC 6238 multi-factor authentication showcases solid cryptographic understanding.',
    defendingYourChoice: [
      'Understanding multi-factor authentication requires building RFC 6238 TOTP algorithms from scratch.',
      'I implemented HMAC-SHA1 time-step token generation paired with encrypted key storage.',
      'The project delivers a fully functional MFA authenticator CLI.'
    ]
  },
  {
    id: 'security-fyp-4',
    title: 'HTTP Security Response Headers Scanner & Auditor',
    description: 'A web security tool connecting to target applications, inspecting HTTP response headers, evaluating CSP/HSTS policies, and generating security grade reports.',
    category: 'security',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Axios', 'Chalk'],
    estimatedTimeframeWeeks: 5,
    timeframeLabel: '4-5 weeks (~1 month)',
    milestones: [
      'Fetch response headers from target HTTP/HTTPS URLs.',
      'Evaluate presence and configuration of essential headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).',
      'Calculate letter grade (A+ to F) based on missing or misconfigured headers.',
      'Output recommendations explaining risk mitigation for each missing header.'
    ],
    learningPrompts: [
      'Explain how Content Security Policy (CSP) headers prevent Cross-Site Scripting (XSS) attacks in modern browsers.',
      'What is HTTP Strict Transport Security (HSTS) and how does preload protection prevent SSL stripping attacks?',
      'How does X-Frame-Options header protect web portals against Clickjacking attacks?'
    ],
    problemStatement: 'Web applications frequently omit critical security headers, exposing users to clickjacking, MIME-sniffing, and XSS attacks.',
    whySuitableForYou: 'Fits a beginner student learning HTTP protocol headers, security policies, and automated domain scanning.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because security header auditing provides immediate practical value for securing web deployments.',
    defendingYourChoice: [
      'Misconfigured HTTP response headers leave web applications vulnerable to common browser attacks.',
      'I built a scanner that audits HSTS, CSP, and X-Frame-Options headers to assign letter grades.',
      'The tool provides clear remediation advice for web developers.'
    ]
  },
  {
    id: 'security-fyp-5',
    title: 'Static Vulnerability Scanner for Software Package Manifests',
    description: 'A command-line tool parsing project manifest files (package.json), auditing installed dependencies against OSV vulnerability databases, and reporting severity risks.',
    category: 'security',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['TypeScript', 'Node.js', 'OSV API / GitHub Advisory API'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Build package manifest parser extracting dependency names and version ranges.',
      'Query Open Source Vulnerabilities (OSV) public API for matching package advisories.',
      'Implement semver range matching logic to identify vulnerable installed versions.',
      'Evaluate package vulnerability severity distributions (CVSS scores) across software projects.'
    ],
    learningPrompts: [
      'Explain Software Supply Chain security risks and how transitive dependencies introduce hidden vulnerabilities.',
      'What is CVSS (Common Vulnerability Scoring System) and how are Base Severity Scores calculated?',
      'How does semantic versioning (SemVer) comparison logic evaluate vulnerable package version ranges?'
    ],
    problemStatement: 'Third-party open source packages introduce hidden CVE vulnerabilities into application software supply chains.',
    whySuitableForYou: 'Well-suited for an intermediate student working with manifest parsing, semver comparison logic, and security advisory APIs.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because software supply chain security is a premier contemporary cybersecurity topic.',
    defendingYourChoice: [
      'Vulnerable third-party package dependencies expose applications to supply chain attacks.',
      'I built a scanner that parses package manifests and queries the OSV vulnerability database.',
      'The tool alerts developers to critical package advisories before deployment.'
    ]
  },
  {
    id: 'security-fyp-6',
    title: 'Authenticated Local File Encryption Vault using AES-256-GCM',
    description: 'A secure CLI application encrypting sensitive files locally using PBKDF2 key derivation, AES-256-GCM authenticated encryption, and tamper detection.',
    category: 'security',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Node Crypto Module'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Implement PBKDF2 salt-based master key derivation function from user passphrase.',
      'Implement streaming file encryption/decryption using AES-256-GCM.',
      'Add authentication tag verification to detect file tampering.',
      'Evaluate encryption throughput and authentication tag validation under tampered ciphertext.'
    ],
    learningPrompts: [
      'Explain why AES-GCM (Galois/Counter Mode) authenticated encryption is superior to unauthenticated AES-CBC mode.',
      'What is PBKDF2 key derivation and why does salt iteration count resist dictionary passphrase cracking?',
      'How does Galois Message Authentication Code (GMAC) detect bit-flipping attacks in encrypted payloads?'
    ],
    problemStatement: 'Unauthenticated encryption schemes (like plain AES-CBC) fail to detect ciphertext tampering or bit-flipping attacks.',
    whySuitableForYou: 'Ideal for an intermediate security student mastering authenticated encryption (GCM mode), salt derivation, and tamper verification.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because authenticated encryption (AES-GCM) demonstrates robust cryptographic software engineering.',
    defendingYourChoice: [
      'Unauthenticated encryption allows attacker ciphertext manipulation without detection.',
      'I implemented AES-256-GCM authenticated encryption paired with PBKDF2 key derivation.',
      'The vault verifies authentication tags before decrypting file contents.'
    ]
  },
  {
    id: 'security-fyp-7',
    title: 'SSL/TLS Certificate Chain Expiry & Cipher Suite Auditor',
    description: 'A network security scanner inspecting HTTPS server TLS handshakes, validating x509 certificate chains, checking expiration dates, and auditing weak cipher suites.',
    category: 'security',
    skillLevel: 'intermediate',
    projectType: 'final-year',
    suggestedStack: ['Node.js tls module', 'TypeScript', 'Commander.js'],
    estimatedTimeframeWeeks: 6,
    timeframeLabel: '4-6 weeks (~1.5 months)',
    milestones: [
      'Establish TLS socket connection to target host and retrieve peer certificate.',
      'Parse x509 fields: issuer, SANs, valid from/to timestamps, and key size.',
      'Test support for deprecated TLS versions (SSLv3, TLS 1.0, TLS 1.1) and weak ciphers.',
      'Generate terminal report highlighting expiring certs and insecure configurations.'
    ],
    learningPrompts: [
      'Explain how x509 Certificate Authorities (CA) create digital signature trust chains to validate web domain identity.',
      'What are the security vulnerabilities associated with legacy TLS 1.0/1.1 protocols and weak ciphers (RC4, 3DES)?',
      'How does Server Name Indication (SNI) allow TLS servers to host multiple domain certificates on a single IP address?'
    ],
    problemStatement: 'Expired SSL certificates cause service outages, while legacy TLS cipher support exposes servers to downgrade attacks.',
    whySuitableForYou: 'Fits an intermediate student interested in TLS handshake protocols, x509 certificate chains, and network auditing.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because TLS certificate auditing directly improves web infrastructure security.',
    defendingYourChoice: [
      'Unexpected SSL certificate expirations break web services and erode user trust.',
      'I built a scanner that inspects TLS handshakes and audits x509 certificate validity.',
      'The tool identifies weak ciphers and expiring certificates proactively.'
    ]
  },
  {
    id: 'security-fyp-8',
    title: 'AST-Based SQL Injection Code Scanner for Node.js Applications',
    description: 'A static code analysis utility parsing JS/TS source files into Abstract Syntax Trees (ASTs) to flag unsafe raw string concatenations in SQL query calls.',
    category: 'security',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['TypeScript', '@babel/parser', 'Babel Traverse'],
    estimatedTimeframeWeeks: 7,
    timeframeLabel: '6-7 weeks (~1.5 months)',
    milestones: [
      'Parse target source code files into AST nodes.',
      'Traverse AST looking for database query method calls (e.g. `db.query(...)`).',
      'Identify binary expression concatenation or template literals containing raw user input variables.',
      'Evaluate scanner precision and false positive rates on benchmark vulnerable code repositories.'
    ],
    learningPrompts: [
      'Explain why Abstract Syntax Tree (AST) traversal is more reliable for detecting SQL injection than regex pattern matching.',
      'How do taint analysis concepts track untrusted user input variables from API entry points to database query sinks?',
      'What are parameterized queries (prepared statements) and how do database drivers separate SQL commands from data values?'
    ],
    problemStatement: 'Developers accidentally introduce SQL Injection vulnerabilities by concatenating raw user variables into query strings.',
    whySuitableForYou: 'Great intermediate project covering Babel AST parsing, code traversal, and static vulnerability detection.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because AST-based static code analysis is a major software security technique.',
    defendingYourChoice: [
      'Regex-based code scanners miss complex multi-line SQL injection concatenations.',
      'I used Babel AST traversal to inspect database method calls and flag raw variable concatenations.',
      'The scanner pinpoints vulnerable query lines with parameterized fix suggestions.'
    ]
  },
  {
    id: 'security-fyp-9',
    title: 'Web Application Firewall (WAF) Rule Inspection Reverse Proxy',
    description: 'An HTTP reverse proxy inspecting incoming web requests against customizable security rule sets to detect and block SQL Injection (SQLi) and XSS attacks with dynamic scoring.',
    category: 'security',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'Express / http-proxy'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Build HTTP proxy engine inspecting query params, request headers, and payload bodies.',
      'Design regular expression and token-matching engine for SQLi and XSS patterns.',
      'Implement dynamic IP blocking and configurable request score thresholds.',
      'Evaluate WAF latency overhead and false-positive blocking rates across legitimate HTTP request suites.'
    ],
    learningPrompts: [
      'Explain how Web Application Firewalls (WAF) inspect Layer 7 HTTP payloads to block OWASP Top 10 attack vectors.',
      'What are anomaly scoring models versus deterministic signature matching in WAF rule engines?',
      'How does HTTP payload normalization (decoding URL-encoding, HTML entities) prevent WAF evasion techniques?'
    ],
    problemStatement: 'Unprotected web servers collapse when targeted by automated SQLi and XSS exploit payload bots.',
    whySuitableForYou: 'Suitable for an advanced student studying reverse proxies, regular expression matching engines, and web attack vectors.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because Web Application Firewall design demonstrates comprehensive web security engineering.',
    defendingYourChoice: [
      'Web application code often contains undetected vulnerabilities that need perimeter protection.',
      'I built a WAF reverse proxy that inspects HTTP bodies and headers for SQLi and XSS signatures.',
      'The proxy blocks malicious requests before they reach backend application servers.'
    ]
  },
  {
    id: 'security-fyp-10',
    title: 'Network Packet Capture Anomaly & Port Scan Detector',
    description: 'A network monitoring tool capturing local packet metadata (pcap), tracking connection rates per IP, and triggering alerts when port scanning or TCP SYN floods occur.',
    category: 'security',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Python', 'Scapy', 'or Node.js pcap', 'TypeScript'],
    estimatedTimeframeWeeks: 10,
    timeframeLabel: '8-10 weeks (~2.5 months)',
    milestones: [
      'Set up low-level packet capture listener filtering TCP/UDP packet headers.',
      'Build sliding-window packet rate tracker per remote source IP.',
      'Implement heuristic rules detecting SYN scan patterns and rapid sequential port probes.',
      'Evaluate detection accuracy and CPU overhead under 10,000 pps (packets per second) synthetic traffic bursts.'
    ],
    learningPrompts: [
      'Explain how TCP SYN stealth scanning (half-open scanning) discovers open network ports without completing handshakes.',
      'What is a Network Intrusion Detection System (NIDS) and how do sliding-window rate limiters flag port scan probes?',
      'How do promiscuous mode network interface drivers capture raw Ethernet frames from local network segments?'
    ],
    problemStatement: 'Reconnaissance port scans precede major cyber attacks but often go unnoticed by standard network monitors.',
    whySuitableForYou: 'Ideal for an advanced student working with low-level packet capture libraries (Scapy/pcap), sliding windows, and port scan heuristics.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because network intrusion detection system (NIDS) design exhibits high technical depth.',
    defendingYourChoice: [
      'Attackers conduct rapid port scans to find vulnerable network services before launching exploits.',
      'I engineered a packet capture monitor with sliding-window rate tracking to detect sequential port probes.',
      'The tool provides early detection of network reconnaissance.'
    ]
  },
  {
    id: 'security-fyp-11',
    title: 'Microservice Mutual TLS (mTLS) Auth Proxy & Private CA Generator',
    description: 'A security infrastructure project featuring a custom private Certificate Authority (CA) issuing X.509 certificates and an mTLS reverse proxy enforcing mutual authentication.',
    category: 'security',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Node.js tls module', 'OpenSSL', 'TypeScript'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Build private Certificate Authority CLI tool generating root CA, intermediate certs, and key pairs.',
      'Configure mTLS reverse proxy enforcing client certificate validation (`rejectUnauthorized: true`).',
      'Extract client certificate identity details for authorization headers.',
      'Evaluate handshake overhead and Certificate Revocation List (CRL) validation performance.'
    ],
    learningPrompts: [
      'Explain how Mutual TLS (mTLS) achieves bilateral authentication where both client and server present x509 certificates.',
      'What is Zero Trust network architecture and why does it eliminate perimeter-based network trust assumptions?',
      'How does Certificate Revocation List (CRL) checking invalidate compromised x509 client certificates in mTLS proxies?'
    ],
    problemStatement: 'Unencrypted microservice-to-microservice traffic is vulnerable to eavesdropping and lateral movement if internal networks are breached.',
    whySuitableForYou: 'Fits an advanced student mastering Public Key Infrastructure (PKI), X.509 certificate generation, and mTLS proxy enforcement.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because zero-trust mutual TLS architecture is a premier modern cloud security standard.',
    defendingYourChoice: [
      'Internal microservice communications should not trust network perimeter boundaries.',
      'I built a private Certificate Authority paired with an mTLS reverse proxy enforcing client certificate authentication.',
      'The architecture implements Zero Trust security between microservices.'
    ]
  },
  {
    id: 'security-fyp-12',
    title: 'OCI Container Image TAR Layer Vulnerability Scanner',
    description: 'A container security analyzer inspecting OCI/Docker image TAR archives, extracting filesystem layers, parsing package databases, and querying vulnerability APIs.',
    category: 'security',
    skillLevel: 'advanced',
    projectType: 'final-year',
    suggestedStack: ['Node.js', 'TypeScript', 'tar-stream', 'OSV API'],
    estimatedTimeframeWeeks: 11,
    timeframeLabel: '9-11 weeks (~2.5 months)',
    milestones: [
      'Extract layer TAR archives from exported Docker image blobs.',
      'Locate and parse Linux package manager status files (e.g. `/var/lib/dpkg/status`).',
      'Query OSV / NVD APIs for vulnerabilities matching installed package versions.',
      'Evaluate scan duration and vulnerability report accuracy across 10 official Docker Hub images.'
    ],
    learningPrompts: [
      'Explain OCI (Open Container Initiative) container image specifications and how image TAR layers stack filesystem changes.',
      'How do package status files (`/var/lib/dpkg/status`, `rpmdb`) record installed software versions inside container rootfs layers?',
      'What is the role of automated container scanning in DevSecOps CI/CD deployment pipelines?'
    ],
    problemStatement: 'Docker container images often package outdated Linux system libraries with known vulnerabilities.',
    whySuitableForYou: 'Suitable for an advanced student studying OCI container layer specifications, archive parsing, and vulnerability databases.',
    whySupervisorMightApprove: 'This topic is likely to be viewed favorably because container image security scanning is a fundamental DevSecOps capability.',
    defendingYourChoice: [
      'Deploying uninspected container images exposes cloud infrastructure to base-OS vulnerabilities.',
      'I built a scanner that unpacks OCI image TAR layers and checks dpkg status databases against OSV advisories.',
      'The tool prevents vulnerable container images from reaching production.'
    ]
  }
];
