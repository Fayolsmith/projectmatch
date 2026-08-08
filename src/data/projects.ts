import { Project } from '../lib/types.js';

export const CURATED_PROJECTS: Project[] = [
  {
    "id": "web-1",
    "title": "Rural Primary Health Kiosk Patient Log & Immunization Tracker",
    "description": "A web dashboard enabling healthcare workers at rural primary health centers to record patient visits, track childhood vaccination schedules, log vital signs, and flag overdue immunization follow-ups in low-bandwidth clinic settings.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "IndexedDB"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Design patient registration and clinical visit entry web forms.",
      "Implement client-side state management for offline-first data caching.",
      "Integrate interactive charting for clinic immunization coverage rates.",
      "Add SMS notification triggers for parents with upcoming child vaccination dates."
    ]
  },
  {
    "id": "web-6",
    "title": "Municipal Public Water Point & Borehole Repair Reporter",
    "description": "A community web portal allowing citizens and local council representatives to report broken public boreholes or damaged water pipes, upload fault photos, and track repair status updates in real time.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Firebase"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build responsive fault submission form with geolocated photo upload.",
      "Implement real-time Firestore database listener for repair status updates.",
      "Create municipal maintenance technician dashboard for assignment dispatch.",
      "Integrate public map view displaying functional versus broken water points."
    ]
  },
  {
    "id": "web-7",
    "title": "Artisanal Craft & Indigenous Textile Export Catalog",
    "description": "A web showcase and ordering inquiry platform for local artisan cooperatives to digitize handmade textiles, track inventory stock, display craft provenance, and accept global wholesale buyer inquiries.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "HTML5",
      "Vanilla CSS",
      "JavaScript",
      "REST API"
    ],
    "estimatedTimeframeWeeks": 4,
    "timeframeLabel": "3-4 weeks (~1 month)",
    "learningPrompts": [
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Create responsive grid layout with rich image gallery and filtering tags.",
      "Fetch product catalog and pricing asynchronously from REST backend.",
      "Build interactive craft provenance timeline modal.",
      "Deploy site with automated contact form validation and email forwarding."
    ]
  },
  {
    "id": "web-8",
    "title": "Smallholder Farm Crop Planting & Harvest Seasonal Calendar",
    "description": "An interactive web calendar helping smallholder farmers plan crop rotation cycles, set fertilizer application reminders, and track seasonal harvest dates based on local rainfall patterns.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Vue.js",
      "JavaScript",
      "CSS3",
      "LocalStorage"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain reactivity and state management in Vue.js compared to immutable state updates in other modern web frameworks.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build interactive month and seasonal crop timeline views.",
      "Implement crop activity creation modal with weather-triggered recommendations.",
      "Add browser notification alerts for upcoming planting and spraying dates.",
      "Support JSON export and import for cooperative schedule sharing."
    ]
  },
  {
    "id": "web-9",
    "title": "Agricultural Cooperative Shared Equipment QR Tracker",
    "description": "A QR-code based web application allowing farming cooperative members to check out shared tractors, threshers, and spraying equipment, record usage hours, and report mechanical faults.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React",
      "HTML5 QR Scanner",
      "CSS Modules",
      "Supabase"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Integrate browser QR camera scanner for quick equipment check-in/check-out.",
      "Build asset status dashboard displaying active loans and repair queue.",
      "Implement usage logbook calculating rental hours per cooperative member.",
      "Add automated maintenance alert notifications when operational hours exceed limits."
    ]
  },
  {
    "id": "web-16",
    "title": "Community Health Center Duty Roster & Shift Exchange Portal",
    "description": "A scheduling web portal for rural health posts enabling nurses and clinical officers to view monthly duty shifts, request peer shift swaps, and log on-call availability.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React",
      "TypeScript",
      "Tailwind CSS"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build interactive monthly shift calendar grid with role color-coding.",
      "Implement peer-to-peer shift exchange request and supervisor approval workflow.",
      "Create SMS and email alert dispatcher for emergency shift fill-ins.",
      "Export shift rosters to PDF and downloadable calendar files."
    ]
  },
  {
    "id": "web-17",
    "title": "Outpatient Clinic Appointment Desk Reservation System",
    "description": "A web application allowing patients to select available consultation slots at district healthcare centers, reducing crowded waiting room times through staggered time-slot bookings.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Vue.js",
      "Express",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain reactivity and state management in Vue.js compared to immutable state updates in other modern web frameworks.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build doctor consultation schedule selector with real-time slot availability.",
      "Implement patient booking form with SMS confirmation token generation.",
      "Create clinic receptionist queue management interface.",
      "Add daily appointment summary reporting for head doctors."
    ]
  },
  {
    "id": "web-18",
    "title": "Local Government Ward Public Announcement & Civic Portal",
    "description": "A lightweight civic web portal enabling local government ward councilors to broadcast community announcements, publish town hall minutes, and display public project updates.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "HTML5",
      "Bootstrap",
      "JavaScript",
      "PHP"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Build public civic news feed with category tags and search filter.",
      "Implement ward admin panel for posting verified announcements.",
      "Add public comment submission form with moderator approval queue.",
      "Ensure low-bandwidth responsive layout for low-end mobile web browsers."
    ]
  },
  {
    "id": "web-19",
    "title": "Intercity Agricultural Produce Dispatch & Truck Timetable",
    "description": "A logistics web dashboard displaying daily truck departures from agricultural hubs to urban markets, cargo capacity availability, and estimated arrival times for perishable produce.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React",
      "CSS3",
      "Node.js",
      "Express"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build transit route selector showing active freight departure times.",
      "Implement freight space reservation form for smallholder traders.",
      "Create truck driver update portal for logging transit milestones.",
      "Display live cargo status updates with delay alerts."
    ]
  },
  {
    "id": "web-2",
    "title": "Rural Community Center & Agricultural Hall Booking Engine",
    "description": "A multi-user web booking application for rural community development centers to schedule hall rentals, agricultural extension training workshops, and cooperative meetings.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "What are the trade-offs between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) in Next.js?",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build interactive booking calendar with conflict prevention logic.",
      "Implement multi-role permission access control for administrators and hall managers.",
      "Integrate payment gateway API for facility rental deposits.",
      "Generate automated booking confirmation receipts and PDF invoices."
    ]
  },
  {
    "id": "web-4",
    "title": "Vocational Apprentice Skill Progress & Workshop Logbook",
    "description": "A digital logbook web app for technical and vocational education trainees to log daily practical workshop hours, upload supervisor-verified skill evidence, and track certification progress.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between relational schemas and document-oriented (NoSQL) schemas for applications requiring flexible data structures?",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Design multi-step logbook entry form with image attachment upload.",
      "Implement master craftsman approval workflow with digital signature capture.",
      "Create trainee skill competency matrix visualizer.",
      "Add automated weekly summary report generator for vocational training boards."
    ]
  },
  {
    "id": "web-10",
    "title": "Micro-Merchant Daily Cash Flow & Cooperative Thrift Tracker",
    "description": "A web accounting portal for informal market vendors and thrift group (Esusu/ROSCA) managers to log daily sales, track member contribution rounds, and calculate loan payout schedules.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Vue.js",
      "Django",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain reactivity and state management in Vue.js compared to immutable state updates in other modern web frameworks.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build daily income and expense ledger with automated balance calculation.",
      "Implement thrift rotation algorithm calculating payout turns per member.",
      "Create financial analytics dashboard with monthly profit/loss visualizations.",
      "Export ledger reports to CSV and encrypted PDF statements."
    ]
  },
  {
    "id": "web-11",
    "title": "Rural Secondary School Teacher Peer Mentorship Portal",
    "description": "A web platform connecting experienced educators with rural school teachers for lesson plan sharing, peer classroom observation scheduling, and subject mentorship.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "Node.js",
      "GraphQL",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Design teacher profile registry searchable by subject expertise and location.",
      "Implement mentorship session scheduler with automated email reminders.",
      "Build shared lesson resource repository with peer rating system.",
      "Create interactive discussion forum for rural teaching challenges."
    ]
  },
  {
    "id": "web-12",
    "title": "District Clinic Mobile Health Outreach Timetable Generator",
    "description": "A algorithmic web scheduling tool that automatically generates optimized visiting schedules for mobile health teams across remote villages based on population density and road accessibility.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Angular",
      "TypeScript",
      "Node.js"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-7 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain dependency injection and component architecture in Angular web applications.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement scheduling engine handling nurse availability and village location constraints.",
      "Build interactive route timeline and calendar visualizer.",
      "Add conflict detection and manual schedule adjustment overrides.",
      "Export mobile health team itineraries to PDF and print-ready formats."
    ]
  },
  {
    "id": "web-20",
    "title": "Urban Food Bank Daily Inventory & Relief Distribution Portal",
    "description": "A web application for non-governmental relief agencies to track donated food inventory, monitor expiration dates, and manage daily emergency ration distribution to registered families.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "Redux Toolkit",
      "Express",
      "MongoDB"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between relational schemas and document-oriented (NoSQL) schemas for applications requiring flexible data structures?",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build batch food inventory tracker with automated expiration alert triggers.",
      "Implement beneficiary household registry with QR identification scanning.",
      "Create daily distribution log verifying ration limits per family.",
      "Generate donor transparency reports on inventory utilization."
    ]
  },
  {
    "id": "web-21",
    "title": "Youth Agricultural Enterprise Team Formation Hub",
    "description": "A collaborative web platform matching young agricultural graduates based on complementary skills (e.g. agronomy, marketing, financial management) to form commercial farming joint ventures.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Vue.js",
      "Firebase",
      "Tailwind CSS"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain reactivity and state management in Vue.js compared to immutable state updates in other modern web frameworks.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build skill profiling system categorizing expertise across farming disciplines.",
      "Implement venture proposal creation workspace with team position postings.",
      "Add real-time team messaging and proposal feedback tools.",
      "Create cooperative registrar review panel for formal onboarding."
    ]
  },
  {
    "id": "web-23",
    "title": "Informal Economy Master Craftsman & Apprentice Directory",
    "description": "A web directory connecting master artisans (carpenters, electricians, mechanics) with prospective apprentices, featuring verified client reviews and work portfolio galleries.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages."
    ],
    "milestones": [
      "Build searchable trade directory filtered by local government area and skill trade.",
      "Implement verified work portfolio showcase with client testimonial ratings.",
      "Create apprenticeship inquiry application workflow.",
      "Add SMS gateway integration for offline phone contact requests."
    ]
  },
  {
    "id": "web-13",
    "title": "Multi-Tenant Small Business Association Portal Engine",
    "description": "A web portal engine allowing multiple local trade associations (e.g. plumbers union, grain sellers) to publish custom member directories, manage membership dues, and host noticeboards on subdomains.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Express"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build multi-tenant database isolation model using schema-per-tenant.",
      "Implement admin panel for trade association executives to customize branding.",
      "Create dynamic member registration and annual dues collection workflow.",
      "Add subdomain routing logic for tenant portal isolation."
    ]
  },
  {
    "id": "web-3",
    "title": "Low-Bandwidth Tele-Triage & Clinical Case Discussion Workspace",
    "description": "A real-time collaborative web application enabling rural general practitioners to consult distant medical specialists by sharing compressed diagnostic images, clinical notes, and annotated vital signs over weak networks.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React",
      "WebSockets",
      "Node.js",
      "Canvas API"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain how Conflict-Free Replicated Data Types (CRDTs) achieve eventual consistency and conflict-free state synchronization in collaborative applications.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?"
    ],
    "milestones": [
      "Build real-time collaborative canvas for diagnostic image annotation using WebSockets.",
      "Implement client-side WebP image compression reducing payload sizes by 80%.",
      "Design conflict-free replicated data type (CRDT) sync for low-latency clinical notes.",
      "Integrate role-based access control ensuring patient privacy compliance."
    ]
  },
  {
    "id": "web-5",
    "title": "Offline-First Agricultural Extension Knowledge & Audio Repository",
    "description": "A progressive web app (PWA) storing crop pest diagnostic guides, voice advisories, and farming tutorials offline in browser storage, syncing updates automatically when internet connection becomes available.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React",
      "TypeScript",
      "Workbox PWA",
      "IndexedDB"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how Service Workers intercept network requests and manage caching strategies in Progressive Web Apps.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement Service Worker caching strategy for offline media and articles.",
      "Build IndexedDB storage engine for storing multi-megabyte audio guides locally.",
      "Create background data synchronization protocol reconciling offline edits.",
      "Design accessibility-focused UI supporting voice navigation and audio playback."
    ]
  },
  {
    "id": "web-14",
    "title": "Low-Literacy Accessible Public Service Portal Auditor",
    "description": "A web inspection engine that automatically scans public sector service websites for WCAG 2.1 accessibility compliance, color contrast standards, and readability metrics for low-literacy users.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "Puppeteer",
      "Vue.js",
      "Tailwind CSS"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain reactivity and state management in Vue.js compared to immutable state updates in other modern web frameworks.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build automated headless browser crawler analyzing DOM accessibility trees.",
      "Implement WCAG 2.1 rule evaluation engine detecting missing alt text and contrast failures.",
      "Generate visual audit reports highlighting compliance flaws directly on screenshot overlays.",
      "Create historical accessibility scoring dashboard tracking portal improvements."
    ]
  },
  {
    "id": "web-15",
    "title": "Low-Bandwidth Civic Town Hall & Rural Survey Polling Engine",
    "description": "A high-concurrency real-time polling engine enabling thousands of rural citizens to participate in local government budget surveys and community town halls via web or low-cost SMS relays.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Elixir",
      "Phoenix LiveView",
      "PostgreSQL",
      "WebSockets"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?"
    ],
    "milestones": [
      "Build fault-tolerant real-time polling server using Erlang/OTP actors.",
      "Implement WebSockets and SMS gateway ingestion pipelines for live vote counts.",
      "Create live charting dashboard rendering thousands of votes per second with minimal CPU usage.",
      "Add anti-fraud vote deduplication based on voter registration hashes."
    ]
  },
  {
    "id": "web-22",
    "title": "Off-Grid Solar Home System Customer Support & Fault Ticket Desk",
    "description": "A specialized customer service web application for rural solar energy providers to manage customer hardware faults, track technician dispatch routes, and monitor PAYG token generation disputes.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React",
      "TypeScript",
      "GraphQL",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?"
    ],
    "milestones": [
      "Build ticket management workspace with SLA deadline tracking timers.",
      "Implement technician geolocation dispatch map routing nearest service agents.",
      "Integrate solar inverter telemetry API displaying live battery status per ticket.",
      "Create customer notification dispatcher via automated SMS updates."
    ]
  },
  {
    "id": "web-24",
    "title": "Local Open-Air Farmers Market Multi-Vendor Stall Directory",
    "description": "A progressive web platform enabling open-air market committees to digitize vendor stalls, manage market fee payments, and display daily commodity prices for consumers.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "What are the trade-offs between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) in Next.js?",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?"
    ],
    "milestones": [
      "Build interactive market map grid showing active vendor stalls and produce types.",
      "Implement automated daily price survey ingestion pipeline.",
      "Create vendor mobile kiosk mode for updating available stock.",
      "Add multi-language localization supporting major regional languages."
    ]
  },
  {
    "id": "web-25",
    "title": "Collaborative Rural Land Boundary Mapping & Annotation Canvas",
    "description": "A real-time spatial web canvas allowing community land committees to draw, annotate, and review rural farmland plot boundaries collaboratively over satellite map tiles.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React",
      "Leaflet.js",
      "GeoJSON",
      "WebSockets"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?"
    ],
    "milestones": [
      "Integrate interactive Leaflet GIS canvas with offline vector tile caching.",
      "Implement WebSocket synchronization for multi-user boundary polygon editing.",
      "Calculate plot surface area automatically from GPS boundary coordinates.",
      "Export verified land plot boundary claims to GeoJSON and PDF certificates."
    ]
  },
  {
    "id": "web-26",
    "title": "Low-Bandwidth Emergency Relief News & Field Update Engine",
    "description": "A static-site publishing engine designed for emergency response teams to generate micro-sized, static HTML updates for disaster-affected regions, optimizing for ultra-low bandwidth mobile networks.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "Gatsby",
      "React",
      "Tailwind CSS"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?"
    ],
    "milestones": [
      "Build markdown-based field reporting CMS producing compressed static HTML pages.",
      "Implement automated image optimization pipeline converting photos to sub-20KB WebP files.",
      "Deploy static output to multi-region CDN edge nodes for instant low-latency delivery.",
      "Integrate RSS and SMS broadcast relays for offline news dissemination."
    ]
  },
  {
    "id": "web-27",
    "title": "Rural Health Clinic Medical Equipment Maintenance & Work-Order Tracker",
    "description": "A comprehensive web work-order management application for biomedical engineers servicing oxygen concentrators, refrigerators, and lab equipment across rural clinics.",
    "category": "web",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build asset inventory management portal tracking equipment lifecycle and maintenance logs.",
      "Implement Kanban work-order board with priority dispatch assignment.",
      "Create mobile-responsive technician field inspection form with offline draft save.",
      "Generate automated preventative maintenance schedules and spare parts inventory alerts."
    ]
  },
  {
    "id": "mobile-1",
    "title": "Offline-First Rural Ambulance & Emergency Transport Dispatcher",
    "description": "A mobile app enabling rural clinic staff to request emergency ambulance or community volunteer transport, caching dispatch requests offline and broadcasting location updates via SMS when internet connectivity drops.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?"
    ],
    "milestones": [
      "Design responsive ambulance dispatch form with GPS location tagging.",
      "Implement SQLite local storage for queueing requests when offline.",
      "Add SMS gateway fallback dispatcher for low-connectivity regions.",
      "Create driver notification screen displaying route coordinates."
    ]
  },
  {
    "id": "mobile-3",
    "title": "Community Mental Health & Maternal Well-Being Tracker",
    "description": "A confidential mobile self-care and mental health check-in application designed for expectant mothers in rural communities, featuring offline audio relaxation guides and mood logs.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "AsyncStorage"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build daily mood logging interface with visual emotion selectors.",
      "Integrate local audio player for offline guided wellness sessions.",
      "Implement secure PIN lock protecting user personal journal entries.",
      "Add emergency helpline directory with one-touch dialing."
    ]
  },
  {
    "id": "mobile-6",
    "title": "Community Disaster Early Warning & Evacuation Alert App",
    "description": "A mobile safety companion providing rural communities with real-time flood, wildfire, and severe weather alerts, evacuation route maps, and offline emergency contact lists.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Firebase Cloud Messaging"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?"
    ],
    "milestones": [
      "Integrate push notification service for broadcast hazard warnings.",
      "Build offline evacuation map viewer with designated shelter points.",
      "Create family safety status toggle allowing users to mark themselves safe.",
      "Add emergency flash alarm and siren audio trigger."
    ]
  },
  {
    "id": "mobile-7",
    "title": "Field Health Worker Daily Vaccination Walk & Visit Tracker",
    "description": "A lightweight mobile app for community health workers to record home vaccination visits, track steps walked in rural wards, and view daily child immunization targets.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React Native",
      "JavaScript",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build daily patient visit logging screen with location coordinate capture.",
      "Integrate device pedometer API to track daily field walking distance.",
      "Implement local SQLite database for offline patient visit records.",
      "Generate daily summary report of children vaccinated."
    ]
  },
  {
    "id": "mobile-8",
    "title": "Community Health Worker Medical Symptom Guide & Flashcards",
    "description": "A mobile educational app providing village health volunteers with offline diagnostic decision trees, symptom flashcards, and basic first-aid procedure guides.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Shared Preferences"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build searchable medical symptom catalog with category filters.",
      "Implement interactive flashcard revision mode for health training.",
      "Add bookmarking feature for quick access to critical emergency guides.",
      "Support multi-language text toggles for local languages."
    ]
  },
  {
    "id": "mobile-16",
    "title": "Clean Water Point & Public Borehole Location Finder",
    "description": "A location-based mobile application helping rural residents locate functioning clean water boreholes, view water quality test ratings, and flag dry or contaminated wells.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React Native",
      "Expo",
      "Google Maps API"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Integrate interactive mobile map displaying nearby public water points.",
      "Build borehole status detail view with water purity icons.",
      "Create citizen reporting form for flagging broken water pumps.",
      "Add offline map tile caching for remote areas without internet."
    ]
  },
  {
    "id": "mobile-17",
    "title": "Crop Harvest Countdown & Cold Storage Reservation Alert",
    "description": "A mobile notification tool for smallholders to calculate crop maturity dates, set harvest timers, and receive alerts when local solar cold-storage slots become available.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Local Notifications"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build crop maturity calculation calculator based on planting date.",
      "Implement local notification scheduler for harvest and storage alerts.",
      "Create cold-storage slot reservation request form.",
      "Display historical harvest log with yield notes."
    ]
  },
  {
    "id": "mobile-18",
    "title": "Micro-Trader Daily Expenses & Profit/Loss Mobile Journal",
    "description": "A simplified mobile bookkeeping application tailored for informal open-air market traders to record daily cash sales, inventory purchases, and net profit without complex accounting terminology.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "AsyncStorage"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build rapid single-tap sales and expense entry interface.",
      "Calculate daily net profit automatically with visual summary cards.",
      "Implement voice note recorder for attaching quick audio expense notes.",
      "Generate weekly summary chart comparing revenue versus expenses."
    ]
  },
  {
    "id": "mobile-19",
    "title": "Rural Health Post Medical Test Result & Lab Report Dispatcher",
    "description": "A secure mobile document delivery app allowing district medical laboratories to dispatch PDF test results directly to health officers' mobile devices in remote clinics.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "PDF Viewer"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build encrypted mobile inbox for receiving medical laboratory reports.",
      "Integrate PDF viewer for offline inspection of blood and diagnostic tests.",
      "Implement push notification alerts upon arrival of urgent lab results.",
      "Add PIN-protected biometric authentication for patient confidentiality."
    ]
  },
  {
    "id": "mobile-2",
    "title": "Grain Storage Depot Queue Booking & Slot Reservation App",
    "description": "A mobile queue management application allowing grain farmers to schedule harvest drop-off times at central silos, eliminating multi-day truck queues during peak harvest season.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Firebase"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build depot drop-off time slot selection interface.",
      "Implement QR ticket generator for arrival verification at silo gates.",
      "Create real-time depot queue status monitor displaying waiting truck counts.",
      "Add SMS notification dispatcher when a farmer's turn approaches."
    ]
  },
  {
    "id": "mobile-4",
    "title": "Smallholder Implement & Seed Exchange Mobile Marketplace",
    "description": "A peer-to-peer mobile marketplace app enabling farming families to trade surplus seeds, rent unutilized plows, and share agricultural tools within local rural districts.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "Firebase"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build product listing creation workflow with camera photo attachment.",
      "Implement geo-proximity search filtering equipment within a 20km radius.",
      "Add in-app messaging interface between buyer and seller.",
      "Create user trust rating system based on completed rental transactions."
    ]
  },
  {
    "id": "mobile-9",
    "title": "Shared Agricultural Milling Machine & Equipment Booking App",
    "description": "A mobile reservation application for rural farmer cooperatives to schedule usage times for shared cassava processing mills, oil presses, and tractors.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Supabase"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build calendar reservation picker preventing overlapping equipment bookings.",
      "Implement usage fee calculator based on processing duration or weight.",
      "Create operator mobile dashboard for logging machine running hours.",
      "Add offline sync for storing reservations recorded in low-coverage zones."
    ]
  },
  {
    "id": "mobile-10",
    "title": "District Hospital Wing & Outpatient Navigation Companion",
    "description": "An indoor mobile navigation app assisting patients and visitors to navigate large district hospital complexes, locate specialized clinics, and find accessible ramps.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React Native",
      "Expo",
      "Mapbox SDK"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Design interactive multi-floor hospital building vector map.",
      "Implement indoor turn-by-turn routing algorithm between department wards.",
      "Create accessibility filter routing wheelchair-accessible paths.",
      "Add multi-language audio instructions for illiterate patients."
    ]
  },
  {
    "id": "mobile-11",
    "title": "Local Informal Artisan & Handyman Services Marketplace",
    "description": "A mobile app connecting households and small businesses with vetted local tradespeople (plumbers, electricians, carpenters), featuring job quotes and work completion verification.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Node.js",
      "MongoDB"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between relational schemas and document-oriented (NoSQL) schemas for applications requiring flexible data structures?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build service request posting flow with photo upload and location pin.",
      "Implement artisan bidding interface for submitting job price estimates.",
      "Create job completion verification workflow with customer sign-off.",
      "Add Escrow payment status indicator protecting payment funds."
    ]
  },
  {
    "id": "mobile-20",
    "title": "Primary Healthcare Center Maternal Care Booking App",
    "description": "A specialized mobile healthcare app allowing pregnant women to register for antenatal clinics, track check-up appointments, and receive automated maternal nutrition advice.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "Express",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build antenatal care timeline visualizer tracking pregnancy trimesters.",
      "Implement appointment booking interface with health center availability.",
      "Add automated SMS and push reminders for upcoming tetanus vaccinations.",
      "Integrate offline emergency contacts and maternal warning sign guide."
    ]
  },
  {
    "id": "mobile-21",
    "title": "Rural Farm-to-Market Produce Carpooling & Freight Sharing",
    "description": "A mobile transport coordination app connecting smallholders harvested produce with commercial truck drivers returning empty from rural delivery trips.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Firebase"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build freight listing interface for farmers specifying cargo weight and crop type.",
      "Implement truck route matching algorithm pairing partial loads along transit corridors.",
      "Add driver phone verification and vehicle capacity checks.",
      "Create real-time transit status tracker for cargo owners."
    ]
  },
  {
    "id": "mobile-22",
    "title": "Mobile Health Insurance & Patient Identification Pass",
    "description": "A mobile digital health pass application allowing rural patients to present verified health insurance membership QR codes at participating clinics for cashless consultations.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "SQLite",
      "CryptoJS"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?"
    ],
    "milestones": [
      "Build secure digital pass wallet storing encrypted patient health membership data.",
      "Implement offline QR code generator with cryptographic timestamp verification.",
      "Create clinic scanner mode for verifying patient insurance validity.",
      "Add transaction history log tracking medical coverage usage."
    ]
  },
  {
    "id": "mobile-23",
    "title": "Public Infrastructure Damage & Pothole Citizen Reporter",
    "description": "A mobile civic engagement app enabling citizens to capture geotagged photos of damaged public infrastructure (broken bridges, collapsed culverts, potholes) for local government repair prioritisation.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Node.js",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?"
    ],
    "milestones": [
      "Build rapid incident reporting interface capturing GPS coordinates and photo evidence.",
      "Implement local offline queue for saving reports when cell signal is unavailable.",
      "Create civic map feed showing community infrastructure reports.",
      "Add status tracking update badge displaying municipal repair progress."
    ]
  },
  {
    "id": "mobile-5",
    "title": "Rural School Teacher Biometric Attendance & Payroll Verifier",
    "description": "A mobile biometric application utilizing smartphone fingerprint sensors to verify teacher attendance in remote rural schools, combating absenteeism and streamlining civil service payroll processing.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Android SDK",
      "Java",
      "BiometricPrompt API",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Integrate Android BiometricPrompt API for secure hardware fingerprint authentication.",
      "Implement geofenced location verification preventing off-site attendance clock-ins.",
      "Build encrypted local SQLite database storing biometric audit logs.",
      "Create background synchronization protocol pushing verified attendance hashes to central payroll."
    ]
  },
  {
    "id": "mobile-12",
    "title": "Extension Officer Voice Notes & Audio Advisory Summarizer",
    "description": "A mobile app enabling agricultural extension officers to record field observations in local languages, automatically transcribing audio and generating structured pest outbreak summaries.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Whisper API",
      "TensorFlow Lite"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Integrate native audio recording engine with low-bitrate compression.",
      "Implement local speech-to-text pipeline or cloud Whisper API integration.",
      "Extract key agricultural entity keywords (crop, pest, location) using NLP.",
      "Create exportable field report summary formatted for agricultural ministry databases."
    ]
  },
  {
    "id": "mobile-13",
    "title": "Mobile AR Historical Heritage & Eco-Tourism Guide",
    "description": "An augmented reality mobile application overlays historical artifacts, architectural reconstructions, and ecological information onto physical monuments and heritage sites.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Unity",
      "C#",
      "AR Foundation",
      "ARCore"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build AR camera view rendering 3D historical models anchored to physical GPS/image targets.",
      "Implement spatial audio playback triggered by proximity to heritage landmarks.",
      "Create offline asset bundle downloader for remote eco-tourism parks.",
      "Add interactive AR quiz module for educational tourist engagement."
    ]
  },
  {
    "id": "mobile-14",
    "title": "BLE Peer-to-Peer Emergency Rescue & Disaster Mesh Messenger",
    "description": "An offline peer-to-peer mobile messaging app operating via Bluetooth Low Energy (BLE) mesh networks, enabling disaster survivors and emergency responders to communicate when cellular networks fail.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Android SDK",
      "Kotlin",
      "BLE Mesh API",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement BLE advertising and scanning discovery protocols for nearby peer devices.",
      "Build store-and-forward mesh routing protocol relaying text messages across multiple hops.",
      "Create encrypted local message store ensuring privacy between endpoints.",
      "Add battery-optimized background scanning cycle preserving phone power during emergency."
    ]
  },
  {
    "id": "mobile-15",
    "title": "Urban Freight Loading Bay Occupancy & Parking Finder",
    "description": "A real-time mobile app for commercial delivery drivers to find available urban freight loading bays, reserve delivery slots, and receive automated parking expiry warnings.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "WebSockets",
      "Mapbox"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Integrate real-time WebSocket connection for live loading bay occupancy updates.",
      "Build turn-by-turn navigation overlay directing trucks to assigned loading spaces.",
      "Implement automated slot reservation timer with extension requests.",
      "Create parking enforcement officer mode for scanning valid loading bay sessions."
    ]
  },
  {
    "id": "mobile-24",
    "title": "Rural Agricultural Cooperative Expense & Output Splitter",
    "description": "A mobile financial tool for farming groups to split shared costs (fertilizer, diesel, transport) according to land area or harvest yield proportions, reconciling accounts transparently.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "Prisma"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages."
    ],
    "milestones": [
      "Build proportional expense allocation engine handling multi-item group purchases.",
      "Implement offline transaction entry with multi-party cryptographic signature sign-off.",
      "Generate printable financial balance sheets per cooperative member.",
      "Add SMS receipt broadcast sending account statements directly to member phones."
    ]
  },
  {
    "id": "mobile-25",
    "title": "Offline Vocational Training Audio Lesson & Podcast Player",
    "description": "An offline-first mobile audio learning player designed for rural vocational students, featuring low-bandwidth audio downloads, variable speed playback, and automatic progress sync.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Just_Audio",
      "Hive DB"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement background audio player service supporting lock-screen controls.",
      "Build chunked media downloader storing audio courses in local encrypted storage.",
      "Create interactive audio bookmarking and voice note reaction tool.",
      "Add background progress sync reconciling completed lessons when connected."
    ]
  },
  {
    "id": "mobile-26",
    "title": "Indigenous Crop Nutrition & Infant Feeding Planner App",
    "description": "A health mobile application guiding mothers in rural communities on formulating nutrient-dense infant meals using locally available, affordable indigenous crops.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build interactive nutritional database indexed by local crop availability and season.",
      "Implement infant meal planner calculating macro and micronutrient targets by age.",
      "Create visual step-by-step cooking tutorial guides with audio narration.",
      "Add growth milestone chart tracking child height and weight against WHO standards."
    ]
  },
  {
    "id": "mobile-27",
    "title": "Inter-State Freight Truck GPS Companion & Speed Alert Tracker",
    "description": "A driver companion mobile app monitoring inter-state freight trucks, detecting hazardous driving speeds, logging mandatory rest stops, and alerting dispatchers in case of breakdowns.",
    "category": "mobile",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Background Location API"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement background GPS tracking service recording vehicle velocity and location.",
      "Build automated speed violation and aggressive braking alert generator.",
      "Create driver rest-stop timer enforcing national highway transport safety rules.",
      "Add emergency panic button broadcasting location coordinates to transport fleet control."
    ]
  },
  {
    "id": "backend-1",
    "title": "Zero-Trust Patient Identity & Medical Portal Auth Gateway",
    "description": "A backend authentication microservice managing secure user registration, multi-role RBAC access (doctors, nurses, patients), JWT issuance, and session token revocation for rural health portals.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Node.js",
      "Express",
      "JWT",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build user authentication endpoints with bcrypt password hashing.",
      "Implement JSON Web Token (JWT) issuance and verification middleware.",
      "Create role-based permission matrix restricting access to patient records.",
      "Add refresh token rotation and token blacklist revocation storage."
    ]
  },
  {
    "id": "backend-2",
    "title": "Rural Pharmacy Essential Medicines & Stock Level REST API",
    "description": "A RESTful API enabling primary healthcare dispensaries to manage essential drug inventories, log pharmaceutical supply deliveries, track batch expiration dates, and query regional stockouts.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "FastAPI",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Design REST API endpoints for CRUD operations on medicine inventory.",
      "Implement database queries filtering drugs by therapeutic category and expiry date.",
      "Add request input validation using Pydantic schemas.",
      "Generate OpenAPI (Swagger) interactive documentation for API consumers."
    ]
  },
  {
    "id": "backend-3",
    "title": "Low-Latency Emergency Responder Dispatch Chat Gateway",
    "description": "A real-time WebSocket backend server allowing disaster emergency dispatchers to broadcast urgent incident updates, track first-responder locations, and relay field messages.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Node.js",
      "Socket.io",
      "Express"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build WebSocket server handling multi-room chat connections per emergency district.",
      "Implement message broadcast events for urgent dispatcher alerts.",
      "Create connection drop recovery and message queueing logic.",
      "Store incident chat logs in SQLite database for post-disaster audit."
    ]
  },
  {
    "id": "backend-4",
    "title": "Medical Diagnostic Image Storage & Low-Bandwidth Compression Proxy",
    "description": "A dedicated file handling backend API that receives diagnostic X-rays and ultrasounds, generates low-bandwidth WebP thumbnails, and securely streams images to mobile health workers.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Node.js",
      "Multer",
      "Sharp",
      "Express"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build file upload endpoint accepting DICOM and high-resolution JPEG images.",
      "Implement server-side image compression resizing images to sub-100KB WebP files.",
      "Create secure file download proxy using pre-signed temporary URLs.",
      "Add mime-type validation and file size restrictions for security."
    ]
  },
  {
    "id": "backend-5",
    "title": "Distributed Micro-Finance Transaction Audit Logging Service",
    "description": "A centralized logging API that ingests, formats, and stores financial audit logs from multiple micro-finance agent devices, providing immutable transaction traces.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Go",
      "SQLite",
      "Gin Framework"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build JSON log ingestion endpoint handling high-frequency request streams.",
      "Implement structured log parsing capturing timestamp, agent ID, and transaction hash.",
      "Create query endpoints filtering audit logs by date range and agent account.",
      "Write automated log rotation script archiving old transactions to compressed files."
    ]
  },
  {
    "id": "backend-6",
    "title": "Emergency Weather Alert & Agricultural SMS Notification Dispatcher",
    "description": "An automated notification backend microservice that formats disaster emergency alerts, queues message jobs, and dispatches SMS alerts to registered rural farmers via cellular gateways.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "Flask",
      "Twilio API",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build notification creation API accepting target recipient tags and alert text.",
      "Implement SMS integration via Twilio or local cellular gateway REST API.",
      "Create asynchronous message queue preventing API timeout on bulk sends.",
      "Track message delivery statuses (queued, sent, failed) in database."
    ]
  },
  {
    "id": "backend-7",
    "title": "Public Sector Open Data Portal Traffic Throttle Middleware",
    "description": "A custom HTTP middleware component protecting public government open data APIs against denial-of-service spikes by enforcing IP-based and API-key-based rate limits.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Express",
      "TypeScript",
      "Redis"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement sliding-window rate limiting algorithm using Redis key expiration.",
      "Build middleware interceptor checking client IP address and API key headers.",
      "Return standardized HTTP 429 Too Many Requests response headers with retry intervals.",
      "Add admin dashboard endpoint monitoring active rate limit violations."
    ]
  },
  {
    "id": "backend-8",
    "title": "Micro-Merchant Inventory Sync & POS Transaction API",
    "description": "A backend service powering point-of-sale (POS) terminals for informal market vendors, handling barcode product lookups, cash transaction logging, and daily inventory synchronization.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Design product catalog endpoints indexed by barcode barcode scanner inputs.",
      "Implement checkout transaction processing endpoint updating stock levels atomically.",
      "Create daily sales summary report aggregator.",
      "Support batch offline transaction sync handling multiple cash sales."
    ]
  },
  {
    "id": "backend-9",
    "title": "Public Health Guidelines & Clinical Treatment Protocol Hosting API",
    "description": "A content management REST API providing structured clinical guidelines, drug dosage tables, and emergency medical procedures to health apps in markdown format.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "Django REST Framework",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build medical guideline publishing schema with version control fields.",
      "Implement markdown rendering endpoint outputting sanitized HTML or JSON.",
      "Create full-text search index querying medical procedures by disease keyword.",
      "Add caching layer returning ETag headers for efficient mobile sync."
    ]
  },
  {
    "id": "backend-10",
    "title": "Off-Grid Solar Tariff Gateway & Smart Meter Microservice Broker",
    "description": "An API gateway acting as a central broker between pay-as-you-go (PAYG) solar home system payment providers and off-grid smart meter hardware, validating token purchases.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "Gorilla Mux",
      "PostgreSQL",
      "Docker"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build API gateway router forwarding micro-payment webhooks to meter validation services.",
      "Implement cryptographic HMAC signature verification on incoming payment notifications.",
      "Generate encrypted 20-digit OTP token codes for solar meter activation.",
      "Containerize backend services using Docker and Docker Compose."
    ]
  },
  {
    "id": "backend-11",
    "title": "Supply Chain Freight Milestone Webhook Delivery Gateway",
    "description": "A reliable event notification gateway that registers logistics webhooks, monitors transport milestone events (departure, border arrival, delivery), and delivers webhooks with exponential backoff retries.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "Redis",
      "BullMQ"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build webhook endpoint registration management portal.",
      "Implement distributed event queue handling asynchronous HTTP POST deliveries.",
      "Create exponential backoff retry mechanism for failed endpoint responses.",
      "Design webhook signature generator using SHA-256 HMAC for payload security."
    ]
  },
  {
    "id": "backend-12",
    "title": "Open Banking Financial Identity Provider & Consent Gateway",
    "description": "An OAuth2 / OpenID Connect authorization service allowing micro-finance bank customers to securely grant third-party fintech apps permission to view account balances.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "Express",
      "OAuth2orize",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement OAuth2 Authorization Code flow with PKCE extension for mobile security.",
      "Build user consent authorization screen managing requested scope permissions.",
      "Create access token and refresh token management endpoints.",
      "Add identity introspection endpoint complying with Open Banking standards."
    ]
  },
  {
    "id": "backend-13",
    "title": "Edge Node Cache Broker for Rural Health Information Systems",
    "description": "An in-memory cache proxy deployed on rural clinic local servers, caching frequently requested medical records locally to eliminate latency when central cloud servers are unreachable.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "Redis",
      "gRPC"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement gRPC communication interface between edge cache node and central cloud DB.",
      "Build LRU (Least Recently Used) cache eviction policy tuned for medical record sizes.",
      "Create cache invalidation protocol triggered by central cloud database updates.",
      "Measure latency improvements comparing direct cloud access versus edge caching."
    ]
  },
  {
    "id": "backend-14",
    "title": "Multi-Bank Micro-Loan Disbursement Saga Orchestrator",
    "description": "A distributed saga orchestration backend that coordinates multi-step financial micro-loan approvals across credit scoring, bank transfer APIs, and SMS notification services.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Java",
      "Spring Boot",
      "RabbitMQ",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement Saga Orchestration state machine handling multi-step loan disbursements.",
      "Create compensating transaction handlers reverting bank transfers upon failure.",
      "Integrate RabbitMQ message queues for asynchronous service communication.",
      "Add transaction audit dashboard tracking active loan saga states."
    ]
  },
  {
    "id": "backend-15",
    "title": "Real-Time Mini-Grid Power Load Surge Alert Gateway",
    "description": "A high-concurrency event stream server processing telemetry data from community solar mini-grids, detecting electrical overloads, and triggering automated circuit breaker trip alerts.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "WebSockets",
      "TimescaleDB"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build telemetry ingestion pipeline receiving per-second voltage/current readings.",
      "Implement real-time threshold check algorithm identifying current spikes exceeding grid capacity.",
      "Broadcast emergency trip alerts to mini-grid controllers over persistent WebSockets.",
      "Store time-series electrical load data in TimescaleDB for power analytics."
    ]
  },
  {
    "id": "backend-16",
    "title": "National Immunization Bulk Registry CSV Processing API",
    "description": "A high-throughput file processing backend designed to ingest massive CSV spreadsheets of child immunization records from field surveys, validate data schema, and update central registries asynchronously.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "Worker Threads",
      "Express",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build streaming CSV file parser handling 100,000+ line dataset uploads without memory crash.",
      "Implement multithreaded worker pool validating patient identity numbers and batch codes.",
      "Create bulk database insertion pipeline using PostgreSQL COPY commands.",
      "Generate structured validation error report detailing failed rows."
    ]
  },
  {
    "id": "backend-17",
    "title": "Agricultural Water District Irrigation Tariff Billing Engine",
    "description": "A subscription and usage-based billing engine for public irrigation schemes, calculating seasonal water tariffs based on farmland acreage, crop type, and meter consumption.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "Django",
      "Celery",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build tariff calculation rule engine processing volumetric water meter reads.",
      "Implement asynchronous monthly invoice generation using Celery background tasks.",
      "Integrate mobile money payment gateway webhooks for invoice reconciliation.",
      "Create automated overdue payment penalty calculation schedule."
    ]
  },
  {
    "id": "backend-18",
    "title": "Agricultural Weather Telemetry Data Aggregation Job Queue",
    "description": "An asynchronous background task processing pipeline that regularly polls remote automated weather stations, cleans noisy sensor readings, and aggregates hourly microclimate statistics.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "FastAPI",
      "Redis",
      "RQ"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build cron task scheduler fetching weather station telemetry every 15 minutes.",
      "Implement data cleaning pipeline filtering out erroneous sensor spike outliers.",
      "Calculate rolling 24-hour rainfall totals and evapotranspiration rates.",
      "Expose clean weather data REST endpoints for agricultural analytics tools."
    ]
  },
  {
    "id": "backend-19",
    "title": "Municipal Portal Role-Based Identity & Access Control System",
    "description": "An enterprise-grade centralized identity management service enforcing fine-grained attribute-based access control (ABAC) across municipal government land, tax, and licensing portals.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "OAuth2",
      "PostgreSQL",
      "Docker"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement Attribute-Based Access Control (ABAC) policy evaluation engine.",
      "Build centralized single sign-on (SSO) authentication server using SAML 2.0 / OIDC.",
      "Create audit logging subsystem capturing user identity access decisions.",
      "Add administrator management console for policy definition and role assignment."
    ]
  },
  {
    "id": "backend-20",
    "title": "Rural Public Health Census Dynamic Form Builder Engine",
    "description": "A flexible backend schema engine allowing public health researchers to dynamically construct custom survey forms, deploy JSON schemas to mobile apps, and ingest structured response payloads.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "MongoDB",
      "JSON Schema"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "What are the trade-offs between relational schemas and document-oriented (NoSQL) schemas for applications requiring flexible data structures?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build dynamic form schema builder API validating JSON Schema specifications.",
      "Implement versioned survey template distribution endpoint.",
      "Create flexible MongoDB submission storage engine handling arbitrary form fields.",
      "Generate exportable CSV and SPSS dataset files for statistical analysis."
    ]
  },
  {
    "id": "backend-21",
    "title": "Mobile Money Cash-In/Cash-Out Audit & Reconciliation Engine",
    "description": "An event-sourced microservice architecture for mobile money operators to log cash transactions, process double-entry ledger updates, and automatically reconcile agent balance discrepancies.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Design immutable Event Sourcing architecture using Kafka for transaction streaming.",
      "Implement Command Query Responsibility Segregation (CQRS) separating ledger writes from read views.",
      "Create automated end-of-day balance reconciliation engine highlighting cash mismatches.",
      "Build high-performance audit query API serving historical account statements."
    ]
  },
  {
    "id": "backend-22",
    "title": "SMS-Based Crop Market Price Query Link Compressor",
    "description": "A ultra-fast URL shortening and SMS query routing engine that compresses agricultural market price data into minimal character strings for low-cost USSD and SMS transmission.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Redis",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build base62 URL encoding algorithm producing 6-character unique key tokens.",
      "Implement Redis caching layer achieving sub-5ms lookup latency for shortened links.",
      "Create click analytics pipeline tracking geographic query volume per crop.",
      "Ensure thread-safe atomic counter generation under high concurrent requests."
    ]
  },
  {
    "id": "backend-23",
    "title": "Remote Field Research Video & Satellite Data Chunking Service",
    "description": "A distributed file storage gateway that splits massive satellite maps and environmental drone video files into encrypted chunks, distributing them across edge storage nodes.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "gRPC",
      "PostgreSQL",
      "S3 API"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?"
    ],
    "milestones": [
      "Implement content-addressable chunking algorithm hashing files into fixed 4MB blocks.",
      "Build concurrent chunk upload proxy distributing blocks across storage nodes.",
      "Create file reconstruction engine verifying SHA-256 block integrity upon download.",
      "Add fault-tolerance logic re-replicating missing chunks if a storage node fails."
    ]
  },
  {
    "id": "backend-24",
    "title": "Hospital EMR Module Rollout & Feature Toggle Server",
    "description": "A low-latency feature flagging backend enabling hospital IT administrators to gradually roll out new Electronic Medical Record (EMR) software modules to specific clinical wards.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "Redis",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build evaluation engine calculating feature flag states based on user attributes and percentage rollouts.",
      "Implement real-time WebSocket config sync pushing flag changes to connected hospital apps under 100ms.",
      "Create kill-switch override API instantly disabling problematic modules across all wards.",
      "Store historical audit logs of all configuration changes."
    ]
  },
  {
    "id": "backend-25",
    "title": "National Health Insurance Scheme Legacy API Aggregator",
    "description": "A unified GraphQL gateway layering over legacy REST and SOAP health insurance web services, resolving federated patient claims queries into a single query response.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "GraphQL",
      "Apollo Server",
      "TypeScript"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Design unified GraphQL schema abstracting multiple legacy insurance backend services.",
      "Implement DataLoader batching to solve N+1 query performance bottlenecks.",
      "Build XML SOAP to JSON transformation wrappers for legacy insurance endpoints.",
      "Add response caching and schema rate limiting for gateway stability."
    ]
  },
  {
    "id": "backend-26",
    "title": "Emergency Disaster Victim Registry Distributed Cache Proxy",
    "description": "A resilient caching proxy designed to prevent database crashes during natural disaster emergencies by absorbing high read surges for missing person registry lookups.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Redis",
      "Memcached Protocol"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement Probabilistic Early Expiration algorithm to prevent Cache Stampede under sudden traffic spikes.",
      "Build distributed Redis cluster connector with automatic failover handling.",
      "Create read-through and write-behind cache update strategies for victim status entries.",
      "Benchmark response throughput demonstrating stability under 10,000 requests/sec."
    ]
  },
  {
    "id": "backend-27",
    "title": "Biometric Voter Registry Duplicate Records Cleaner",
    "description": "A high-performance backend data deduplication service that processes millions of voter record strings, running fuzzy matching algorithms to flag duplicate identity entries.",
    "category": "backend",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Rust",
      "Actix-web",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain Rust's memory ownership model, borrowing rules, and lifetime annotations for memory-safe systems programming.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement parallelized Levenshtein and Jaro-Winkler string similarity algorithms in Rust.",
      "Build memory-efficient streaming batch pipeline processing large database tables.",
      "Create candidate duplicate pair queue for human electoral officer verification.",
      "Achieve multi-fold speedup compared to standard SQL string comparison functions."
    ]
  },
  {
    "id": "data-1",
    "title": "Vocational Trainee & Local Employer Skill Matching Engine",
    "description": "A data processing tool that parses vocational graduate skill profiles and local trade job postings, calculating TF-IDF text similarity scores to match qualified apprentices with employers.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "scikit-learn"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Clean and preprocess job description and vocational resume text datasets.",
      "Implement TF-IDF vectorizer converting text into numerical feature matrices.",
      "Calculate Cosine Similarity scores ranking top job matches per candidate.",
      "Build interactive Streamlit web dashboard displaying match results."
    ]
  },
  {
    "id": "data-2",
    "title": "Solar Mini-Grid Load Demand Forecasting Tool",
    "description": "A time-series data analysis application using historical power consumption records from rural solar mini-grids to forecast daily peak electricity demand.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "Prophet",
      "Matplotlib"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Ingest hourly mini-grid kilowatt-hour consumption datasets.",
      "Preprocess missing time-series entries and smooth out anomalous power outages.",
      "Train Facebook Prophet forecasting model predicting 7-day power load demand.",
      "Plot forecast visualizer displaying peak load hours and uncertainty intervals."
    ]
  },
  {
    "id": "data-3",
    "title": "Public Health Clinic Patient Feedback Sentiment Analyzer",
    "description": "A natural language processing utility that categorizes qualitative patient feedback collected at district health centers into positive, negative, or neutral sentiment scores.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "NLTK",
      "pandas",
      "scikit-learn"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Tokenize, clean, and remove stop-words from patient survey text data.",
      "Train Naive Bayes text classifier on labeled healthcare feedback samples.",
      "Evaluate model accuracy using precision, recall, and confusion matrices.",
      "Generate hospital departmental sentiment summary reports."
    ]
  },
  {
    "id": "data-4",
    "title": "Land Registry Document Title Similarity & Duplicate Claim Detector",
    "description": "A text analytics script that scans scanned deed abstracts and land description records, identifying potential duplicate land claims based on boundary phrase matching.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Extract and clean textual land parcel descriptions from registry files.",
      "Compute n-gram document similarity scores across historical deed records.",
      "Flag land plot pairs exceeding an 80% similarity threshold for legal inspection.",
      "Export flagged duplicate claim report to Excel and CSV formats."
    ]
  },
  {
    "id": "data-5",
    "title": "Smallholder Crop Selection & Fertilizer Recommendation Engine",
    "description": "A rule-based data recommendation system that suggests optimal crop varieties and fertilizer application rates based on regional soil pH, rainfall data, and field elevation.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "Streamlit"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Construct tabular database of crop soil requirements and regional climate parameters.",
      "Implement decision logic matching soil input parameters to crop suitability rules.",
      "Create interactive user web interface for agricultural extension officers.",
      "Generate printable crop recommendation sheets for smallholders."
    ]
  },
  {
    "id": "data-6",
    "title": "Agro-Climatic Sensor Telemetry & Rainfall Data Collector",
    "description": "A data ingestion pipeline that collects telemetry streams from automated weather stations, calculates daily temperature averages, and logs cumulative rainfall totals.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "SQLite",
      "Plotly"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets."
    ],
    "milestones": [
      "Build automated data scraper fetching hourly CSV logs from weather station nodes.",
      "Perform data validation filtering impossible temperature outliers.",
      "Store cleaned weather telemetry in local SQLite database.",
      "Create interactive Plotly charts showing monthly precipitation trends."
    ]
  },
  {
    "id": "data-7",
    "title": "District Hospital Essential Drug Consumption & Stockout Risk Dashboard",
    "description": "An analytics dashboard analyzing historical dispensary dispensing logs to calculate burn rates for essential medicines and forecast stockout dates for rural pharmacies.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "Dash",
      "Plotly"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Aggregate daily drug consumption logs across multiple primary health posts.",
      "Calculate mean daily burn rate and remaining stock inventory runway.",
      "Build interactive web dashboard visualizing drugs nearing critical reorder thresholds.",
      "Export weekly procurement emergency request lists."
    ]
  },
  {
    "id": "data-8",
    "title": "Open-Air Market Agro-Commodity Price Trend Pipeline",
    "description": "A data processing script that ingests weekly agricultural commodity prices across regional open-air markets, calculating price volatility and regional price differentials.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "Seaborn"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets."
    ],
    "milestones": [
      "Parse weekly market survey data files across major grain trading hubs.",
      "Compute price moving averages and percentage price spikes per commodity.",
      "Generate heatmaps visualizing price differences between producing rural zones and urban consumption centers.",
      "Export summary statistical tables for agricultural policy briefings."
    ]
  },
  {
    "id": "data-9",
    "title": "Agricultural Supply Chain Trader & Middleman Network Graph Analyzer",
    "description": "A network science analysis project mapping supply chain links between smallholder farmers, village aggregators, inter-state traders, and urban wholesalers.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "NetworkX",
      "Matplotlib",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build directed graph representation of agricultural trade transactions.",
      "Calculate network centrality metrics (degree, betweenness) identifying key market middlemen.",
      "Visualize market network topology highlighting supply chain bottlenecks.",
      "Identify vulnerable single-point supply nodes in regional food distribution."
    ]
  },
  {
    "id": "data-10",
    "title": "Micro-Finance Borrower Default Risk Early Warning Predictor",
    "description": "A predictive machine learning model analyzing micro-loan repayment histories, mobile transaction frequency, and borrower demographics to identify high-risk loans before default occurs.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "XGBoost",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Preprocess imbalanced micro-finance loan applicant tabular dataset.",
      "Engine features capturing historical repayment delay ratios and cash-flow stability.",
      "Train XGBoost classification model predicting loan default likelihood.",
      "Evaluate model ROC-AUC performance and tune probability decision thresholds."
    ]
  },
  {
    "id": "data-11",
    "title": "Urban Feeder Bus Route & Intercity Transit Bottleneck Analyzer",
    "description": "A spatial data analytics pipeline processing GPS telemetry from informal transit buses (Danfos/Matatus) to identify severe road congestion bottlenecks and average transit delays.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "GeoPandas",
      "Shapely",
      "Folium"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Clean raw GPS trajectory data filtering static drift points.",
      "Map bus positions onto road network GIS shapefiles using map-matching algorithms.",
      "Compute average corridor transit speeds across different times of day.",
      "Generate interactive Folium map highlighting urban traffic bottleneck hotspots."
    ]
  },
  {
    "id": "data-12",
    "title": "Public Health Disease Outbreak & Epidemic Keyword Monitor",
    "description": "A text mining pipeline that monitors public news reports and social media posts, analyzing keyword spikes related to disease symptoms (e.g. fever, cholera) for early epidemic detection.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "spaCy",
      "pandas",
      "scikit-learn"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Ingest regional news articles and social media text streams via RSS and APIs.",
      "Perform Named Entity Recognition (NER) extracting location names and health symptom mentions.",
      "Calculate temporal keyword frequency z-scores detecting anomalous symptom surges.",
      "Build alert web dashboard displaying geographic outbreak risk indicators."
    ]
  },
  {
    "id": "data-13",
    "title": "Mobile Money Unauthorised Withdrawal Fraud Detector",
    "description": "An anomaly detection pipeline analyzing real-time mobile money transaction logs to flag suspicious cash-out patterns, rapid velocity transfers, and out-of-character location jumps.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "IsolationForest",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Engineer transaction features including velocity, transfer amount ratios, and time-of-day.",
      "Train Isolation Forest unsupervised anomaly detection model on transaction logs.",
      "Evaluate false positive rates against known fraudulent agent accounts.",
      "Deploy REST API scoring incoming transactions with a real-time risk index."
    ]
  },
  {
    "id": "data-14",
    "title": "Pay-As-You-Go Solar Home System Subscription Churn Predictor",
    "description": "A machine learning classification model predicting which off-grid solar customers are likely to cancel subscriptions or stop daily payments based on usage patterns.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "LightGBM",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Preprocess solar home system daily battery discharge and payment log data.",
      "Construct customer recency, frequency, and monetary (RFM) behavioral features.",
      "Train LightGBM classifier predicting 30-day payment drop-off risk.",
      "Generate actionable retention lists for customer service outreach."
    ]
  },
  {
    "id": "data-15",
    "title": "Water Treatment Plant Pump & Motor Predictive Maintenance Engine",
    "description": "A predictive analytics system processing vibration and temperature sensor data from municipal water pumps to forecast mechanical failure prior to breakdown.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "SciPy",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Perform Fast Fourier Transform (FFT) on raw pump vibration time-series data.",
      "Extract spectral energy features indicating bearing wear and rotor imbalance.",
      "Train Random Forest regression model estimating remaining useful life (RUL).",
      "Plot predictive maintenance alerts on industrial monitoring dashboard."
    ]
  },
  {
    "id": "data-16",
    "title": "Community Nutritional Deficiency & Food Relief Pattern Miner",
    "description": "A data mining pipeline analyzing primary health center child growth logs to discover spatial clusters of acute malnutrition and prioritize emergency food relief distribution.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "HDBSCAN",
      "GeoPandas"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Clean child WHO weight-for-height z-score datasets from community health surveys.",
      "Apply HDBSCAN spatial clustering to identify high-density malnutrition hot-spots.",
      "Overlay spatial clusters onto agricultural food availability maps.",
      "Export targeted relief allocation maps for humanitarian agencies."
    ]
  },
  {
    "id": "data-17",
    "title": "Telemedicine Clinic Satellite Bandwidth & Latency Visualizer",
    "description": "A telemetry data visualizer tracking satellite internet connection quality across remote telemedicine posts, measuring latency jitter, packet loss, and video call viability.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "pandas",
      "Streamlit",
      "Plotly"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Ingest continuous network ping, throughput, and packet drop log files.",
      "Calculate rolling network quality index score per health post.",
      "Create interactive Streamlit dashboard displaying connection uptime trends.",
      "Identify correlation between weather conditions and satellite signal degradation."
    ]
  },
  {
    "id": "data-18",
    "title": "Local Grain Exchange Commodity Bid-Ask Order Book Visualizer",
    "description": "A financial data analytics application visualizing real-time bid-ask orders, trade volume depth, and daily settlement prices for regional agricultural commodity exchanges.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "pandas",
      "Plotly",
      "Dash"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Parse commodity trade execution and limit order book data feeds.",
      "Construct dynamic market depth charts showing maize and sorghum buy/sell orders.",
      "Calculate volume-weighted average price (VWAP) benchmarks per trading day.",
      "Build web dashboard serving grain traders live price charts."
    ]
  },
  {
    "id": "data-19",
    "title": "Traffic Intersection Near-Miss Collision Video Analyzer",
    "description": "A computer vision and object tracking pipeline analyzing video footage of chaotic urban intersections to detect near-miss vehicle trajectories and evaluate accident risk.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "OpenCV",
      "YOLOv8",
      "DeepSORT"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how object detection algorithms perform real-time bounding box prediction and feature extraction on video frames.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Deploy YOLOv8 object detection model identifying cars, motorcycles, and pedestrians.",
      "Implement DeepSORT multi-object tracking algorithm assigning persistent trajectory IDs.",
      "Calculate Time-To-Collision (TTC) metrics flagging close vehicle interactions.",
      "Generate intersection safety risk heatmaps for urban transportation planners."
    ]
  },
  {
    "id": "data-20",
    "title": "Urban Informal Settlement Housing Rent & Value Estimator",
    "description": "A spatial machine learning regression model estimating informal housing rental values based on proximity to paved roads, water access, market hubs, and structural building features.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "GeoPandas",
      "XGBoost"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build spatial feature matrix incorporating distance to infrastructure using GeoPandas.",
      "Train XGBoost regression model predicting monthly rent prices per square meter.",
      "Perform SHAP feature importance analysis identifying primary rent cost drivers.",
      "Map property price predictions across urban informal settlements."
    ]
  },
  {
    "id": "data-21",
    "title": "Agricultural Pest Infestation & Crop Disease Hashtag Tracker",
    "description": "A social media text mining pipeline using deep learning NLP to track public posts reporting crop disease symptoms (e.g., armyworm, cassava mosaic) and map pest spread.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "Transformers",
      "PyTorch",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Fine-tune BERT transformer model on domain-specific agricultural pest corpora.",
      "Classify social media messages for presence of crop disease reports.",
      "Extract location mentions using named entity recognition models.",
      "Plot temporal pest migration maps for agricultural extension alerts."
    ]
  },
  {
    "id": "data-22",
    "title": "Local Government Citizen Complaint Topic Clustering Model",
    "description": "An unsupervised natural language processing model that clusters unstructured citizen feedback and service complaints into coherent municipal policy themes.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "BERTopic",
      "scikit-learn",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Extract embeddings from raw citizen feedback texts using sentence transformers.",
      "Apply UMAP dimensionality reduction and HDBSCAN clustering to discover latent topics.",
      "Generate automated topic labels using LLM summary prompts or TF-IDF keywords.",
      "Build interactive visualization of municipal complaint trends over time."
    ]
  },
  {
    "id": "data-23",
    "title": "Rural Health Clinic Outpatient Waiting Time Video Analytics",
    "description": "An automated computer vision system analyzing privacy-preserved video streams of hospital waiting rooms to calculate patient queue lengths and average waiting durations.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "OpenCV",
      "YOLOv8",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how object detection algorithms perform real-time bounding box prediction and feature extraction on video frames.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement privacy-preserving video pipeline blurring human facial features in real time.",
      "Detect seated and standing patients in waiting area frames using YOLOv8.",
      "Track queue density fluctuations across clinic operating hours.",
      "Generate daily hospital throughput reports comparing waiting time to clinical staffing."
    ]
  },
  {
    "id": "data-24",
    "title": "Industrial Belt Air Quality & Particulate Matter Forecaster",
    "description": "A multivariate time-series forecasting model predicting PM2.5 and PM10 air pollution levels near industrial zones using weather parameters and historical sensor readings.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "PyTorch",
      "LSTM",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Construct multivariate time-series dataset of air sensor and weather data.",
      "Build Long Short-Term Memory (LSTM) recurrent neural network in PyTorch.",
      "Forecast 24-hour ahead air quality index values with confidence metrics.",
      "Evaluate model accuracy against baseline ARIMA time-series models."
    ]
  },
  {
    "id": "data-25",
    "title": "Cold-Chain Perishable Food Logistics Temperature Anomaly Detector",
    "description": "A real-time telemetry processing pipeline analyzing temperature sensor streams from refrigerated food transport trucks to flag cold-chain breaches before produce spoils.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "PyOD",
      "pandas"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Ingest continuous truck refrigeration sensor logs capturing temperature and humidity.",
      "Apply PyOD anomaly detection algorithms identifying gradual cooling failure trends.",
      "Trigger real-time alert webhooks when temperature exceeds 4 degrees Celsius threshold.",
      "Calculate estimated cargo shelf-life reduction resulting from cold-chain breaches."
    ]
  },
  {
    "id": "data-26",
    "title": "Agricultural Tractor Path Follower & Soil Compaction Simulator",
    "description": "A physics-based simulation tool computing optimal field tractor driving paths to minimize soil compaction, reduce fuel consumption, and maximize crop planting efficiency.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "NumPy",
      "SciPy",
      "Matplotlib"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Model vehicle wheel load pressure and soil compaction depth equations.",
      "Implement geometric path optimization algorithm generating optimal field turns.",
      "Simulate fuel consumption savings comparing optimized versus conventional tractor paths.",
      "Export optimized driving path coordinates to agricultural guidance displays."
    ]
  },
  {
    "id": "data-27",
    "title": "Mini-Grid Electrical Substation Sensor Stream Anomaly Detector",
    "description": "An edge-deployable anomaly detection engine evaluating high-frequency voltage and current waveforms from solar mini-grids to detect transformer insulation breakdowns.",
    "category": "data",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "TensorFlow Lite",
      "SciPy",
      "NumPy"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Extract time-domain and frequency-domain features from electrical waveform samples.",
      "Train Autoencoder neural network model detecting subtle electrical noise anomalies.",
      "Quantize model to TensorFlow Lite format for low-power edge microcontroller execution.",
      "Demonstrate anomaly detection performance on historical grid fault datasets."
    ]
  },
  {
    "id": "systems-1",
    "title": "Embedded Offline Health Kiosk Web Server for Rural Clinics",
    "description": "A ultra-lightweight static HTTP web server written in C, optimized to serve offline health information and medical training videos from low-power Raspberry Pi single-board computers.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "POSIX Sockets",
      "Make"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement HTTP/1.0 GET request parsing logic handling static HTML/CSS files.",
      "Use POSIX socket API for binding, listening, and accepting client connections.",
      "Serve MIME-types correctly for HTML, JPEG, and MP4 media files.",
      "Measure RAM footprint verifying execution under 10MB memory usage."
    ]
  },
  {
    "id": "systems-2",
    "title": "High-Throughput Telecom Unstructured Data Cache Engine",
    "description": "An in-memory key-value store server designed to store short-lived session tokens and subscriber balances for telecommunication billing gateways with sub-millisecond retrieval times.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C++",
      "STL",
      "Sockets"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build hash map data structure in C++ for O(1) key lookups.",
      "Implement custom TCP socket protocol handling SET, GET, and DELETE commands.",
      "Add key time-to-live (TTL) expiration tracking mechanism.",
      "Benchmark command throughput handling over 5,000 queries per second."
    ]
  },
  {
    "id": "systems-3",
    "title": "Low-Resource Community Wireless Router HTTP Gateway Engine",
    "description": "A multi-threaded C web engine designed to run on low-cost OpenWrt routers, providing community captive portal authentication and local bandwidth status displays.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "pthreads",
      "Sockets"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement thread-pool architecture distributing incoming client requests across worker threads.",
      "Build thread-safe request queue using mutexes and condition variables.",
      "Serve dynamic network status pages reading system /proc files.",
      "Conduct concurrency load tests verifying stability under high simultaneous connections."
    ]
  },
  {
    "id": "systems-4",
    "title": "Encrypted Offline Patient Record Virtual File System Engine",
    "description": "A user-space virtual file system driver that presents encrypted medical records stored on USB flash drives as transparent read/write files when unlocked with a clinical security key.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "FUSE",
      "OpenSSL"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement FUSE (Filesystem in Userspace) callback operations (read, write, getattr).",
      "Integrate OpenSSL AES-256 encryption for transparent block-level data transform.",
      "Create password prompt authorization mechanism mounting encrypted container volumes.",
      "Verify zero plaintext data remains on storage medium after unmounting."
    ]
  },
  {
    "id": "systems-5",
    "title": "Edge Node Load Balancer for Remote Disaster Alert Servers",
    "description": "A lightweight layer-7 HTTP reverse proxy load balancer that distributes incoming traffic across multiple field disaster server nodes using round-robin and least-connections routing.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Go",
      "net/http",
      "Goroutines"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build reverse proxy engine forwarding HTTP requests to active backend node pools.",
      "Implement periodic active health check probes detecting failed disaster server nodes.",
      "Support Round-Robin and Least-Connections load balancing algorithms.",
      "Measure response latency overhead introduced by proxy layer."
    ]
  },
  {
    "id": "systems-6",
    "title": "Solar Mini-Grid Controller Hardware Resource Telemetry Monitor",
    "description": "A system utility daemon that monitors CPU usage, memory consumption, temperature, and disk I/O on solar micro-grid embedded controllers, logging metrics to local storage.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "Linux sysinfo",
      "Make"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Read Linux kernel telemetry files (/proc/stat, /proc/meminfo, /sys/class/thermal).",
      "Implement circular memory buffer storing rolling 1-hour performance metrics.",
      "Export REST or socket endpoint returning JSON hardware telemetry data.",
      "Configure low-priority daemon execution minimizing background CPU overhead."
    ]
  },
  {
    "id": "systems-7",
    "title": "Offline Legal & Public Gazette Document Search Engine",
    "description": "A fast C command-line text indexing engine using inverted indices to perform sub-second keyword searches across offline collections of national laws and public gazettes.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "File I/O",
      "Hash Tables"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement text tokenizer and stop-word filter parsing text document files.",
      "Build inverted index mapping unique words to document IDs and word positions.",
      "Support boolean AND / OR search queries across multi-gigabyte document archives.",
      "Measure search query performance against raw grep file scans."
    ]
  },
  {
    "id": "systems-8",
    "title": "Resource-Constrained Router Diagnostics Command Shell",
    "description": "A Unix command-line shell implementation for network technicians, supporting command execution, pipe redirection, background jobs, and diagnostic network scripts.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "POSIX fork/exec",
      "Signals"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Implement REPL (Read-Eval-Print Loop) parsing user command lines and flags.",
      "Use fork() and execvp() system calls to execute system networking commands.",
      "Implement I/O redirection (<, >) and inter-process piping (|).",
      "Handle POSIX signals (SIGINT, SIGTSTP) managing background job control."
    ]
  },
  {
    "id": "systems-9",
    "title": "Rural Community Network Bandwidth Accounting Packet Analyzer",
    "description": "A low-level network packet sniffer that inspects raw Ethernet frames, calculates bandwidth usage per IP address on community networks, and logs protocol distribution statistics.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "libpcap",
      "POSIX Sockets"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Capture network interface traffic using raw sockets or libpcap library.",
      "Decode Ethernet, IP, TCP, and UDP packet headers extracting source/destination addresses.",
      "Maintain real-time bandwidth consumption table per connected local device.",
      "Generate periodic network usage summary reports for community network admins."
    ]
  },
  {
    "id": "systems-10",
    "title": "Embedded Sensor Node Heap Allocator for Agricultural IoT",
    "description": "A custom dynamic memory allocator (malloc/free) designed for microcontrollers in farm sensor nodes, minimizing memory fragmentation and preventing heap exhaustion crashes.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "Memory Management",
      "Pointers"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Implement explicit free-list memory management algorithm tracking heap blocks.",
      "Support First-Fit and Best-Fit block allocation strategies.",
      "Add boundary tag coalescing merging adjacent free blocks upon free().",
      "Compare fragmentation performance against standard C library malloc under stress tests."
    ]
  },
  {
    "id": "systems-11",
    "title": "Low-Power Telemetry Data Parser for Weather Stations",
    "description": "A zero-allocation C JSON parser library designed to parse sensor telemetry payloads on resource-constrained weather station hardware without dynamic memory overhead.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "String Parsing",
      "Pointer Arithmetic"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Implement finite-state machine (FSM) parsing JSON tokens directly in input buffer.",
      "Avoid dynamic memory allocation using fixed-size token arrays.",
      "Support nested JSON objects and numeric telemetry arrays.",
      "Benchmark parsing speed against standard open-source JSON libraries."
    ]
  },
  {
    "id": "systems-12",
    "title": "Vehicle Black Box Memory Dump Inspector",
    "description": "A low-level binary analysis tool that inspects raw memory dumps from vehicle event data recorders, reconstructing speed, braking, and sensor states prior to accident incidents.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C++",
      "Binary File I/O",
      "Bit Manipulation"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Parse raw binary disk images extracting structured crash log records.",
      "Decode proprietary bit-packed CAN-bus sensor telemetry fields.",
      "Validate data integrity using cyclic redundancy check (CRC) checksums.",
      "Export reconstructed crash timeline report to CSV and JSON formats."
    ]
  },
  {
    "id": "systems-13",
    "title": "Tele-Triage Real-Time Audio Streaming Event Loop",
    "description": "An asynchronous event loop engine utilizing epoll/kqueue system calls to handle hundreds of concurrent low-latency audio streams between rural clinics and medical specialists.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "epoll",
      "Non-blocking I/O"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement non-blocking socket event loop using Linux epoll system call.",
      "Handle non-blocking socket reads/writes for real-time audio packet forwarding.",
      "Implement ring-buffer data structures for smooth audio jitter buffering.",
      "Demonstrate low CPU usage handling 500 concurrent audio streams."
    ]
  },
  {
    "id": "systems-14",
    "title": "Rural Health Center Offline-to-Online Records Sync Agent",
    "description": "A background file synchronization agent that monitors local health record directories, computes differential file deltas, and syncs updates to central cloud servers upon internet reconnect.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "Rsync Algorithm",
      "File System Events"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Monitor local database directory changes using OS filesystem notification APIs.",
      "Implement rolling hash (Rsync algorithm) computing block-level file deltas.",
      "Sync only changed file blocks over low-bandwidth mobile networks.",
      "Ensure atomic file replacements preventing database corruption during interrupted transfers."
    ]
  },
  {
    "id": "systems-15",
    "title": "Encrypted VHF Radio Packet Networking Stack",
    "description": "A custom network layer protocol stack enabling emergency responders to transmit encrypted text messages and GPS locations over long-range VHF radio frequencies.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "Serial Port I/O",
      "AES-128"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement packet framing protocol with start/stop bytes and CRC-16 error checking.",
      "Integrate AES-128-CBC encryption securing radio data payloads.",
      "Handle serial port communication interfacing with VHF radio hardware modems.",
      "Demonstrate reliable packet transmission over noisy Simulated radio links."
    ]
  },
  {
    "id": "systems-16",
    "title": "Rural Mesh Community Network Quality-of-Service Router",
    "description": "A software-defined networking (SDN) packet routing engine that enforces Quality-of-Service (QoS) prioritization, guaranteeing bandwidth for telemedicine over recreational web traffic.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "Linux TC",
      "RAW Sockets"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement token bucket traffic shaping algorithm controlling bandwidth rates per traffic class.",
      "Classify IP packets by DSCP header tags (prioritizing medical and emergency data).",
      "Configure Linux Traffic Control (TC) kernel queues programmatically.",
      "Verify zero latency degradation for priority medical traffic under heavy network congestion."
    ]
  },
  {
    "id": "systems-17",
    "title": "Tamper-Evident Land Registry Transaction Log Engine",
    "description": "A high-reliability storage engine that appends land ownership transactions to a write-ahead log (WAL) with SHA-256 hash chaining, preventing retroactive record tampering.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C++",
      "File I/O",
      "SHA-256"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement write-ahead log (WAL) data structure with sequential record appending.",
      "Chain records cryptographically where each entry contains the SHA-256 hash of the previous log.",
      "Build crash recovery algorithm validating log integrity upon restart.",
      "Detect unauthorized manual edits to log files flagging tampered record indices."
    ]
  },
  {
    "id": "systems-18",
    "title": "Micro-Finance Sandbox Code Execution Container Runtime",
    "description": "A lightweight container runtime utilizing Linux namespaces and cgroups to isolate third-party fintech plugin scripts, restricting memory usage and network access.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "Linux Namespaces",
      "cgroups"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Use Linux unshare() system call creating isolated PID and Mount namespaces.",
      "Configure cgroups v2 resource limits capping CPU usage and memory allocation to 64MB.",
      "Pivot root filesystem into minimal read-only sandbox environment.",
      "Verify untrusted plugin code cannot access host filesystem or external network."
    ]
  },
  {
    "id": "systems-19",
    "title": "High-Scale National Identity Number (NIN) B-Tree Index Engine",
    "description": "A disk-backed B+ Tree storage engine optimized for indexing hundreds of millions of National Identity Numbers, performing logarithmic time key lookups with minimal disk I/O.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C++",
      "Disk I/O",
      "B+ Tree Algorithms"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement B+ Tree node splitting, merging, and disk page serialization algorithms.",
      "Build LRU buffer pool manager caching hot B+ Tree disk pages in memory.",
      "Perform multi-million key insertions measuring disk read/write operation counts.",
      "Achieve sub-millisecond key lookups across 10-gigabyte index files."
    ]
  },
  {
    "id": "systems-20",
    "title": "Decentralized Agricultural Cooperative Voting Consensus Node",
    "description": "An implementation of the Raft distributed consensus protocol enabling farming cooperative nodes to maintain an agreed ledger of crop dividend distributions across unreliable network links.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Raft Protocol",
      "gRPC"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement Raft leader election, heartbeats, and candidate state transitions.",
      "Build log replication state machine ensuring linearizable log commits across cluster nodes.",
      "Handle network partitions verifying consensus safety when nodes disconnect.",
      "Demonstrate cluster state recovery after simulated leader crashes."
    ]
  },
  {
    "id": "systems-21",
    "title": "Solar-Powered Edge Computer Dynamic Battery-Aware Task Scheduler",
    "description": "A CPU process scheduler for solar-powered edge computers that dynamically defers non-critical background jobs during night hours when battery reserves fall below critical thresholds.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "Linux cgroups",
      "Hardware Telemetry"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Monitor battery state-of-charge telemetry via system serial interface.",
      "Dynamically adjust Linux cgroup CPU quota allocations based on energy availability.",
      "Pause low-priority batch jobs when battery level drops below 20%.",
      "Verify extended edge node runtime during prolonged overcast weather conditions."
    ]
  },
  {
    "id": "systems-22",
    "title": "High-Frequency Micro-Fintech Engine Real-Time Garbage Collector",
    "description": "A deterministic memory management system for high-frequency financial transaction engines, using region-based memory allocation to achieve zero garbage collection latency spikes.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C++",
      "Memory Management",
      "Custom Allocators"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Design arena memory allocator allocating memory in fixed contiguous regions.",
      "Implement instant bulk memory deallocation per transaction cycle eliminating GC sweeps.",
      "Measure worst-case transaction processing latency under heavy memory allocation stress.",
      "Eliminate memory fragmentation compared to standard dynamic heap usage."
    ]
  },
  {
    "id": "systems-23",
    "title": "Affordable Medical Imaging Storage RAID Controller",
    "description": "A user-space software RAID controller implementing RAID 5 parity striping across multiple low-cost hard drives to protect hospital medical imaging archives against disk failure.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "POSIX I/O",
      "XOR Parity"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Implement block-level striping and XOR parity calculation across 3+ virtual disk files.",
      "Handle single-disk failure mode, reconstructing missing data on-the-fly using parity.",
      "Implement background disk rebuild worker restoring data onto replacement drive.",
      "Benchmark read/write throughput across virtual RAID configurations."
    ]
  },
  {
    "id": "systems-24",
    "title": "Mobile Money SMS Transaction Dispatch Message Broker",
    "description": "A high-performance message broker designed for mobile money SMS gateways, utilizing disk-backed ring buffers to guarantee zero message loss during peak transaction hours.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Memory Mapping (mmap)",
      "Concurrency"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build disk-backed circular queue using memory-mapped files (mmap) for persistence.",
      "Implement producer-consumer concurrency model serving high-throughput message streams.",
      "Guarantee At-Least-Once message delivery semantics with consumer acknowledgment tracking.",
      "Achieve throughput exceeding 20,000 messages per second on modest server hardware."
    ]
  },
  {
    "id": "systems-25",
    "title": "Resilient Emergency Disaster Response Mesh DNS Resolver",
    "description": "A lightweight DNS server that runs on local disaster mesh nodes, resolving emergency service domains (.sos, .clinic) and caching upstream records for offline field operation.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "UDP Sockets",
      "DNS Protocol"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Parse binary UDP DNS query packets and construct standard DNS response frames.",
      "Implement local hosts file lookup table for emergency field domain names.",
      "Build upstream recursive query cache with TTL expiration tracking.",
      "Serve fallback local IP addresses when upstream DNS servers are unreachable."
    ]
  },
  {
    "id": "systems-26",
    "title": "Smart Contract Financial Execution Bytecode Engine",
    "description": "A custom stack-based virtual machine interpreter that executes compiled financial contract bytecode, verifying micro-insurance payout conditions deterministically.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C++",
      "Virtual Machine",
      "Bytecode"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Define bytecode instruction set (opcodes for arithmetic, stack ops, branch jumps).",
      "Build virtual machine execution loop with operand stack and memory environment.",
      "Implement gas-metering mechanism halting execution if contract exceeds instruction budget.",
      "Test financial execution correctness against sample micro-insurance policy contracts."
    ]
  },
  {
    "id": "systems-27",
    "title": "Micro-Second Freight Exchange Order Matcher Queue",
    "description": "A ultra-low latency lock-free order matching queue written in C++, connecting freight shippers with transport carriers using lock-free atomic operations to minimize matching latency.",
    "category": "systems",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C++",
      "Atomics",
      "Lock-Free Data Structures"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement lock-free single-producer single-consumer (SPSC) ring buffer using C++ std::atomic.",
      "Eliminate mutex lock contention between freight order submission and matching threads.",
      "Benchmark execution latency achieving sub-microsecond order enqueue/dequeue performance.",
      "Validate thread-safety under multi-threaded stress tests using ThreadSanitizer."
    ]
  },
  {
    "id": "security-1",
    "title": "Micro-Business Merchant Encrypted Credentials Vault",
    "description": "A secure command-line password manager for small business merchants to store encrypted bank login credentials and supplier passwords using master passphrase encryption.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "cryptography",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement AES-256-GCM symmetric encryption for credential storage.",
      "Derive encryption key from master password using PBKDF2 key derivation.",
      "Store encrypted credential records in local SQLite database.",
      "Add automatic clipboard clearing after 15 seconds to prevent password leaks."
    ]
  },
  {
    "id": "security-2",
    "title": "Rural Health Information System Web Application Firewall",
    "description": "A lightweight HTTP security proxy that inspects incoming web requests to rural clinic portals, blocking common SQL injection and Cross-Site Scripting (XSS) attack payloads.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "Flask",
      "Regex"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build HTTP request interceptor scanning URL query parameters and POST body text.",
      "Write regular expression signature rules detecting SQLi keywords and XSS script tags.",
      "Block malicious requests returning HTTP 403 Forbidden status pages.",
      "Log security violation events with client IP address and attack payload."
    ]
  },
  {
    "id": "security-3",
    "title": "Sensitive Medical Diagnostic File Encryption Tool",
    "description": "A desktop security utility enabling healthcare staff to encrypt confidential patient diagnostic files before emailing or storing them on portable drives.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "PyQt",
      "cryptography"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build graphical user interface for selecting files and entering password passphrases.",
      "Encrypt files using AES-CBC with PKCS7 padding and random initialization vectors.",
      "Generate cryptographic file hash (SHA-256) verifying file integrity upon decryption.",
      "Ensure temporary unencrypted files are securely overwritten in memory."
    ]
  },
  {
    "id": "security-4",
    "title": "Public Sector IT Infrastructure Network Vulnerability Scanner",
    "description": "A network scanning tool that audits municipal local government servers, detecting open ports, running network services, and flagging outdated software banners.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "Sockets",
      "nmap API"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement multi-threaded TCP port scanner probing common service ports (21, 22, 80, 443).",
      "Perform service banner grabbing identifying running HTTP and SSH server versions.",
      "Cross-reference identified service banners against known vulnerability databases.",
      "Generate executive HTML audit report detailing open port risks."
    ]
  },
  {
    "id": "security-5",
    "title": "Tamper-Evident Pharmaceutical Supply Chain Integrity Verifier",
    "description": "A cryptographic utility that generates and verifies digital signatures on drug batch shipments, allowing pharmacists to verify authenticity and detect counterfeit medicines.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "cryptography",
      "OpenSSL"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Generate RSA key pairs for pharmaceutical manufacturer digital signing.",
      "Sign drug batch manifest details (batch ID, expiry, manufacturer) using RSA-PSS.",
      "Build verification tool verifying digital signatures against manufacturer public key.",
      "Flag tampered or unverified drug shipments with visual security warnings."
    ]
  },
  {
    "id": "security-6",
    "title": "Confidential Financial Records Secure Erasure Utility",
    "description": "A security utility that permanently wipes sensitive micro-finance files from disk storage by overwriting data blocks with random bytes complying with DoD sanitization standards.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "OS File I/O"
    ],
    "estimatedTimeframeWeeks": 4,
    "timeframeLabel": "3-4 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement 3-pass file overwriting algorithm (zeroes, ones, random pseudo-bytes).",
      "Flush disk write buffers ensuring physical media blocks are overwritten.",
      "Rename file paths to random strings before unlinking file pointers.",
      "Generate cryptographic verification report confirming target file sectors are wiped."
    ]
  },
  {
    "id": "security-7",
    "title": "Mobile Money Agent Transaction Two-Factor Auth Server",
    "description": "A backend authentication module issuing and validating Time-Based One-Time Passwords (TOTP) for mobile money agents authorizing high-value cash withdrawals.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Node.js",
      "speakeasy",
      "qrcode",
      "Express"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Generate TOTP secret keys and secret QR code setup images for authenticator apps.",
      "Implement 6-digit TOTP verification endpoint accepting time-synced tokens.",
      "Support 30-second token expiration window with clock drift tolerance.",
      "Store user TOTP secret keys securely encrypted in database."
    ]
  },
  {
    "id": "security-8",
    "title": "Micro-Finance Bank Web Application Security Auditor",
    "description": "An automated HTTP scanner that evaluates micro-finance bank websites for critical HTTP security response headers (HSTS, CSP, X-Frame-Options) and cookie security flags.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "requests",
      "BeautifulSoup"
    ],
    "estimatedTimeframeWeeks": 5,
    "timeframeLabel": "4-5 weeks (~1 month)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Send automated HTTP GET requests analyzing target web application responses.",
      "Inspect HTTP response headers checking presence of Strict-Transport-Security and Content-Security-Policy.",
      "Audit set-cookie flags verifying Secure, HttpOnly, and SameSite attributes.",
      "Generate letter-graded security posture report with remediation instructions."
    ]
  },
  {
    "id": "security-9",
    "title": "Open-Source Civic Software Static Security Analysis Tool",
    "description": "A static code scanner that parses Python and JavaScript source code for open-source government projects, identifying hardcoded passwords, API keys, and unsafe eval() calls.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "ast",
      "Regex"
    ],
    "estimatedTimeframeWeeks": 6,
    "timeframeLabel": "4-6 weeks (~1.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Parse Python Abstract Syntax Trees (AST) looking for insecure function calls.",
      "Write regular expressions scanning project code files for exposed secret keys and tokens.",
      "Flag vulnerable dependency patterns in requirements.txt and package.json.",
      "Export security scan results with exact source code line numbers."
    ]
  },
  {
    "id": "security-10",
    "title": "Secure Field Hospital Patient Data P2P Dispatcher",
    "description": "A peer-to-peer file transfer utility using TLS 1.3 encryption and mutual certificate authentication to safely transfer patient medical files between field hospital laptops.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "crypto/tls",
      "gRPC"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Configure Mutual TLS (mTLS) requiring both client and server certificates.",
      "Implement file chunking streaming transfer over encrypted gRPC connections.",
      "Verify SHA-256 checksum of received file against sender manifest.",
      "Enforce certificate pinned authority checking preventing rogue peer connections."
    ]
  },
  {
    "id": "security-11",
    "title": "Enterprise Banking API Attack Trapping Honeypot",
    "description": "A decoy REST API server mimicking core banking endpoints to trap malicious automated bots, logging attacker payloads, IP addresses, and exploitation attempts.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "FastAPI",
      "Elasticsearch"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build decoy REST API simulating authentic bank account and transfer routes.",
      "Log all incoming attacker request headers, payload bodies, and IP origins.",
      "Implement rate limiting decoy responses tricking bots into prolonged engagement.",
      "Store attack telemetry in Elasticsearch for security intelligence visualizer."
    ]
  },
  {
    "id": "security-12",
    "title": "Municipal Infrastructure Server SSH Key Security Audit Utility",
    "description": "A security management tool that audits SSH configurations across municipal servers, detecting weak public keys, unauthorized authorized_keys additions, and root login permissions.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "paramiko",
      "cryptography"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Connect to remote servers securely over SSH using Paramiko library.",
      "Parse /etc/ssh/sshd_config flagging insecure options (PermitRootLogin yes, PasswordAuthentication yes).",
      "Audit authorized_keys files flagging RSA keys under 2048 bits.",
      "Generate centralized SSH security compliance report for systems administrators."
    ]
  },
  {
    "id": "security-13",
    "title": "Micro-Finance Core Banking Network Intrusion Alarm",
    "description": "A signature-based network intrusion detection system (NIDS) analyzing packet streams on micro-finance internal networks to raise real-time alarms on port scans and brute-force attacks.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "scapy",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Sniff network traffic using Scapy inspecting TCP connection flags.",
      "Detect TCP SYN port scan patterns originating from single IP hosts.",
      "Identify SSH/HTTP brute-force login attempts exceeding failure thresholds.",
      "Trigger real-time desktop notification and log intrusion alerts to database."
    ]
  },
  {
    "id": "security-14",
    "title": "National e-ID Public Key Infrastructure Validation Gateway",
    "description": "A PKI validation gateway that checks digital certificates against Certificate Revocation Lists (CRLs) and OCSP endpoints to verify the validity of e-ID signatures.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Java",
      "Spring Boot",
      "Bouncy Castle"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Parse X.509 digital certificates using Bouncy Castle cryptography library.",
      "Validate certificate chain of trust up to Root Certificate Authority.",
      "Check Online Certificate Status Protocol (OCSP) and CRL revocation lists.",
      "Expose REST verification API returning certificate validity status."
    ]
  },
  {
    "id": "security-15",
    "title": "Privacy-Preserving Micro-Loan Credit Score Verifier",
    "description": "A cryptographic application using Zero-Knowledge Proofs (ZKP) allowing loan applicants to prove their credit score exceeds a threshold without revealing their exact score.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "circom",
      "snarkjs"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Design ZKP arithmetic circuit in Circom evaluating credit score inequality.",
      "Generate zero-knowledge proof and public signals on applicant device.",
      "Build verifier contract/service validating proof without discovering credit score value.",
      "Demonstrate privacy preservation in micro-finance credit evaluation."
    ]
  },
  {
    "id": "security-16",
    "title": "Central Bank Micro-Payment Key Management Gateway",
    "description": "A hardware security interface emulator managing cryptographic keys used for signing central bank micro-payment transactions, isolating keys in software-protected memory.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "PKCS#11",
      "OpenSSL"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement PKCS#11 standard API interface for cryptographic token operations.",
      "Store Master Keys in locked memory pages preventing RAM dumping attacks.",
      "Perform AES-GCM and RSA signature operations inside key management boundary.",
      "Audit key access logs ensuring strict cryptographic operations accounting."
    ]
  },
  {
    "id": "security-17",
    "title": "Anti-Censorship Civic Journalist Encrypted DNS Proxy",
    "description": "A local DNS proxy server that encapsulates DNS queries inside encrypted HTTPS requests (DNS-over-HTTPS / DoH), preventing ISP DNS hijacking and censorship of civic news.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "net/http",
      "miekg/dns"
    ],
    "estimatedTimeframeWeeks": 7,
    "timeframeLabel": "6-8 weeks (~1.5-2 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Listen for local UDP DNS queries on standard port 53.",
      "Convert raw DNS binary query into HTTPS GET/POST requests sent to trusted DoH providers.",
      "Unpack DoH response JSON/wire format and return valid DNS reply to local client.",
      "Ensure complete encryption of DNS resolution traffic over TLS."
    ]
  },
  {
    "id": "security-18",
    "title": "Open Banking Session Revocation & Security Gateway",
    "description": "An API security gateway enforcing active session introspection, checking token revocation lists, and enforcing IP-pinning on third-party fintech API calls.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "Redis",
      "Express"
    ],
    "estimatedTimeframeWeeks": 8,
    "timeframeLabel": "6-8 weeks (~2 months)",
    "learningPrompts": [
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Interception middleware validating bearer tokens against active Redis token registry.",
      "Verify client IP address matches original authorization session IP bindings.",
      "Implement instant global session revocation API invalidating compromised user tokens.",
      "Return RFC 6750 compliant HTTP error status codes on security failures."
    ]
  },
  {
    "id": "security-19",
    "title": "Hospital EMR File Modification Malware Early Warning System",
    "description": "A behavior monitoring agent that tracks file system activity on Electronic Medical Record (EMR) servers, detecting rapid file encryption patterns characteristic of ransomware.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C++",
      "WinAPI / Linux inotify",
      "Crypto APIs"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Monitor file system event hooks detecting rapid file modification and rename activity.",
      "Calculate Shannon entropy of modified files to identify encrypted data payloads.",
      "Automatically terminate suspicious process trees when ransomware entropy thresholds trigger.",
      "Create immediate emergency backup isolation lock protecting uninfected health archives."
    ]
  },
  {
    "id": "security-20",
    "title": "Third-Party Fintech Plugin Execution Memory Sandbox",
    "description": "A secure execution sandbox leveraging WebAssembly (Wasm) runtimes to execute untrusted third-party fintech plugin code with strict memory isolation.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Rust",
      "wasmtime",
      "Wasm"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain Rust's memory ownership model, borrowing rules, and lifetime annotations for memory-safe systems programming.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Embed Wasmtime WebAssembly runtime engine inside Rust host application.",
      "Restrict plugin execution memory to isolated linear WebAssembly memory bounds.",
      "Implement fuel-metering mechanism halting plugins that execute infinite loops.",
      "Expose safe host function APIs preventing arbitrary system call execution."
    ]
  },
  {
    "id": "security-21",
    "title": "Solar Mini-Grid IoT Substation Packet Inspection Firewall",
    "description": "An industrial control firewall inspecting Modbus and MQTT protocol packets on solar mini-grid networks, dropping unauthorized control commands aimed at tripping breakers.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "Netfilter / iptables",
      "libpcap"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement Linux Netfilter queue (NFQUEUE) handler intercepting raw industrial network traffic.",
      "Deep-packet inspect (DPI) Modbus TCP function codes allowing read commands while blocking write functions.",
      "Parse MQTT topic strings enforcing access control rules on solar inverter telemetry.",
      "Measure packet inspection latency overhead verifying sub-millisecond control delay."
    ]
  },
  {
    "id": "security-22",
    "title": "Public Health Server Dependency Security Patching Bot",
    "description": "An automated devsecops bot that scans open-source public health repositories for vulnerable third-party dependencies, generates security patches, and submits automated pull requests.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "GitHub API",
      "Safety DB"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Parse repository dependency manifests (requirements.txt, package.json).",
      "Cross-reference installed package versions against CVE National Vulnerability Databases.",
      "Automatically determine non-breaking updated version releases resolving CVEs.",
      "Generate automated git branches and pull requests with security vulnerability details."
    ]
  },
  {
    "id": "security-23",
    "title": "National Health Survey Privacy-Preserving Data Anonymizer",
    "description": "A data privacy engine applying Differential Privacy algorithms to public health survey datasets, adding calibrated noise to allow statistical analysis while preventing individual identification.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "Diffprivlib",
      "pandas",
      "NumPy"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement Laplace and Gaussian noise mechanisms enforcing differential privacy (epsilon-budget).",
      "Calculate privacy loss budget expenditure across multiple analytical data queries.",
      "Validate anonymized dataset utility by comparing statistical query results against raw data.",
      "Demonstrate zero re-identification risk against targeted membership inference attacks."
    ]
  },
  {
    "id": "security-24",
    "title": "Critical National Infrastructure Software Bill of Materials Scanner",
    "description": "A supply-chain security auditor analyzing compiled binary executables used in national infrastructure, extracting Embedded Software Bill of Materials (SBOM) details.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Syft API",
      "CycloneDX"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Inspect binary container images and executable files identifying included open-source libraries.",
      "Export standardized CycloneDX and SPDX SBOM specification documents.",
      "Query vulnerability databases evaluating supply-chain security risks.",
      "Generate executive dependency risk matrix for infrastructure security officers."
    ]
  },
  {
    "id": "security-25",
    "title": "High-Security Government Land Registry FIDO2 WebAuthn Server",
    "description": "A passwordless authentication server implementing FIDO2 / WebAuthn protocols, allowing land registry officials to authenticate using hardware security keys.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "SimpleWebAuthn",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 9,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement WebAuthn registration workflow verifying hardware key attestation signatures.",
      "Build passwordless authentication challenge-response verification endpoint.",
      "Verify COSE public key algorithms (ES256, RS256) during assertion checks.",
      "Prevent replay attacks by tracking authenticator sign-count counters."
    ]
  },
  {
    "id": "security-26",
    "title": "Remote Clinic Health Information System Zero-Trust Access Gateway",
    "description": "A Zero-Trust Access Proxy enforcing continuous device security posture checks, user identity verification, and micro-segmentation for remote clinical health portals.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Reverse Proxy",
      "JWT",
      "TLS"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build reverse proxy requiring valid device health certificates before forwarding requests.",
      "Evaluate context-aware policies (user role, device compliance, location IP) per HTTP request.",
      "Implement real-time session termination upon device posture policy violation.",
      "Audit access logs providing complete visibility into clinical micro-segmentation."
    ]
  },
  {
    "id": "security-27",
    "title": "Critical Financial Transaction System Call Sandbox Auditor",
    "description": "A kernel-level security monitor utilizing Linux eBPF (Extended Berkeley Packet Filter) to audit and restrict system calls executed by banking payment processing daemons.",
    "category": "security",
    "projectType": "siwes",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "Python",
      "eBPF / libbpf",
      "Linux Kernel"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Write eBPF kernel probes tracing sys_enter and sys_exit events for target process PIDs.",
      "Enforce seccomp-BPF filters blocking unexpected system calls (e.g. execve) in payment daemons.",
      "Log system call security violations to user-space monitoring dashboard in real time.",
      "Measure microsecond overhead of eBPF tracepoints on banking transaction processing."
    ]
  },
  {
    "id": "web-fyp-1",
    "title": "Rural Primary Healthcare Patient Referral & Clinical Eligibility Validation Portal",
    "description": "A specialized healthcare web application that validates patient insurance coverage, tracks inter-hospital referral workflows, and verifies treatment eligibility across district clinics.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Design clinical referral creation forms with automated rule validation.",
      "Implement patient history timeline visualizer.",
      "Add referral status tracking dashboard.",
      "Export clinical summary PDF files."
    ],
    "problemStatement": "Existing paper-based referral logs in rural primary healthcare centers lead to lost patient histories, unverified insurance claims, and delayed emergency transfers; commercial hospital ERPs are too expensive and bandwidth-heavy for rural clinics.",
    "whySuitableForYou": "This project allows you to apply core full-stack web engineering concepts\u00c2\u0097such as multi-role access control, data validation, and responsive UI design\u00c2\u0097to a manageable academic problem with clear operational boundaries.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because improving primary healthcare referral efficiency addresses a critical public health infrastructure gap with measurable administrative outcomes.",
    "evaluationApproach": "System performance will be evaluated by comparing time required to process referral forms against manual paper workflows, alongside testing response latencies over simulated 2G mobile networks.",
    "defendingYourChoice": [
      "I identified manual paper referral auditing as a recurring cause of lost patient histories and delayed emergency transfers in rural health centers.",
      "The project applies role-based access control and client-side form validation to automate clinical eligibility checks and referral tracking cleanly.",
      "The scope focuses specifically on core referral validation and clinical history timelines rather than attempting to build an entire university or hospital ERP."
    ]
  },
  {
    "id": "web-fyp-2",
    "title": "Community Solar Mini-Grid Generation & Tariff Billing Web Dashboard",
    "description": "A web application for rural mini-grid operators to monitor solar PV generation telemetry, manage prepaid customer billing tariffs, and detect distribution line power losses.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Vue.js",
      "Chart.js",
      "Express",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain reactivity and state management in Vue.js compared to immutable state updates in other modern web frameworks.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build real-time solar generation chart visualizers.",
      "Implement customer tariff billing calculation engine.",
      "Create low-balance SMS alert dispatcher.",
      "Add mini-grid power loss reporting views."
    ],
    "problemStatement": "Off-grid solar mini-grids frequently suffer from unmonitored power theft and manual billing errors; while enterprise industrial SCADA systems exist, they are cost-prohibitive for small community utilities.",
    "whySuitableForYou": "This project provides a clean scope to showcase your ability to integrate charting libraries, REST APIs, and database transactions in a practical software solution.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because clean energy access and micro-grid sustainability represent high-priority socio-economic development goals with strong engineering relevance.",
    "evaluationApproach": "The application will be evaluated by benchmarking query rendering times for time-series power data and validating billing calculation accuracy against synthetic grid usage datasets.",
    "defendingYourChoice": [
      "I identified that off-grid solar mini-grids frequently suffer from unmonitored power theft and manual billing errors represents a critical operational gap in real-world deployments.",
      "The project applies Vue.js, Chart.js to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-3",
    "title": "Agricultural Warehousing Grain Storage Allocation & Pest Interleaving Optimizer",
    "description": "A web-based logistics optimization application that calculates optimal silo space allocation for harvested grains, preventing cross-contamination and organizing pest inspection cycles.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "What are the trade-offs between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) in Next.js?",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build interactive 3D/2D warehouse silo layout grid.",
      "Implement grain batch allocation algorithm minimizing pest risk.",
      "Add inspection schedule alerts.",
      "Generate warehouse receipt certificates."
    ],
    "problemStatement": "Post-harvest grain losses in developing regions exceed 20% due to improper silo allocation and delayed pest inspection; existing agricultural inventory tools lack spatial bin interleaving algorithms.",
    "whySuitableForYou": "This project demonstrates your intermediate competency in algorithm design, spatial layout visualization, and complex database relationships.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because post-harvest food loss reduction directly impacts national food security and agricultural supply chain resilience.",
    "evaluationApproach": "The solution will be evaluated by measuring storage capacity optimization efficiency against manual allocation baselines and executing load tests under multi-user warehouse operations.",
    "defendingYourChoice": [
      "I identified that post-harvest grain losses in developing regions exceed 20% due to improper silo allocation and delayed pest inspection represents a critical operational gap in real-world deployments.",
      "The project applies Next.js, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-4",
    "title": "National Medical Research & Disease Outbreak Surveillance Directory",
    "description": "A centralized web repository and analytical directory tracking published medical research papers, clinical trial outcomes, and regional epidemic surveillance reports across national institutes.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "Node.js",
      "Elasticsearch",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build full-text research document search index using Elasticsearch.",
      "Implement medical metadata taxonomy tagger.",
      "Create disease outbreak map visualization.",
      "Add researcher collaboration network views."
    ],
    "problemStatement": "Public health researchers currently rely on fragmented journal databases that lack real-time geographic outbreak indexing, hindering rapid evidence-based epidemic response.",
    "whySuitableForYou": "This project showcases your technical skill in integrating full-text search engines with relational databases to process complex document taxonomies.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because centralized disease surveillance and research accessibility directly strengthen national public health emergency preparedness.",
    "evaluationApproach": "The system will be evaluated by measuring search query retrieval precision/recall (F1-score) against standard SQL text queries across a dataset of 10,000 medical abstracts.",
    "defendingYourChoice": [
      "I identified that public health researchers currently rely on fragmented journal databases that lack real-time geographic outbreak indexing, hindering rapid evidence-based epidemic response represents a critical operational gap in real-world deployments.",
      "The project applies React, Node.js to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-5",
    "title": "Agricultural Extension Officer Field Performance & Peer Audit Platform",
    "description": "A multi-criteria web evaluation platform allowing agricultural ministries to assess extension officer field visit reports, calibrate farmer feedback scores, and track advisory outreach quality.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Vue.js",
      "Django",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain reactivity and state management in Vue.js compared to immutable state updates in other modern web frameworks.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build multi-criteria evaluation rubric builder.",
      "Implement peer review scoring calibration engine.",
      "Create extension worker performance analytics dashboard.",
      "Generate regional agricultural outreach reports."
    ],
    "problemStatement": "Agricultural extension services struggle with unverified field activity logs and subjective performance evaluations; conventional HR appraisal systems do not account for spatial farm visit verification.",
    "whySuitableForYou": "This project allows you to demonstrate full-stack Web proficiency using Django and Vue.js to solve a multi-stakeholder audit workflow.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because improving extension service accountability directly increases smallholder crop yields and government agricultural program impact.",
    "evaluationApproach": "Evaluation will focus on assessing scoring calibration algorithm consistency across peer reviews and conducting usability testing with simulated agricultural department supervisors.",
    "defendingYourChoice": [
      "I identified that agricultural extension services struggle with unverified field activity logs and subjective performance evaluations represents a critical operational gap in real-world deployments.",
      "The project applies Vue.js, Django to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-6",
    "title": "National Academic & Professional Credential Cryptographic Verification Engine",
    "description": "A web verification platform enabling employers and licensing boards to instantly verify university degree certificates and professional licenses via cryptographic digital signatures.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "TypeScript",
      "Node.js",
      "Crypto API"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build document hashing and digital signature generation portal.",
      "Implement public QR verification page.",
      "Create university registrar bulk certificate issuance dashboard.",
      "Add revocation list management."
    ],
    "problemStatement": "Widespread academic credential forgery undermines employment trust; existing manual verification requests take weeks and require physical university correspondence.",
    "whySuitableForYou": "This project demonstrates your mastery over modern web security principles, digital signatures, and public-key cryptography applied to a critical administrative issue.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because credential fraud prevention carries high institutional priority for accreditation boards and employers nationwide.",
    "evaluationApproach": "Verification performance will be evaluated by measuring cryptographic signature verification speed (ms per document) and testing resilience against document tampering attempts.",
    "defendingYourChoice": [
      "I identified that widespread academic credential forgery undermines employment trust represents a critical operational gap in real-world deployments.",
      "The project applies React, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-7",
    "title": "District Hospital Emergency Room Bed & Blood Bank Allocation Portal",
    "description": "A real-time web portal for district emergency rooms to track bed occupancy, monitor blood bank unit reserves by group, and coordinate emergency patient admissions across regional hospitals.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React",
      "WebSockets",
      "Express",
      "MongoDB"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between relational schemas and document-oriented (NoSQL) schemas for applications requiring flexible data structures?",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build live bed occupancy matrix with WebSocket updates.",
      "Implement blood bank inventory alert system.",
      "Create inter-hospital transfer request workflow.",
      "Generate hospital throughput analytics."
    ],
    "problemStatement": "Emergency medical dispatchers lack real-time visibility into neighboring hospital bed availability and blood bank reserves, leading to critical delays during trauma transfers.",
    "whySuitableForYou": "This project highlights your ability to build real-time event-driven web applications using WebSockets and state management libraries.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because real-time emergency healthcare resource management directly reduces avoidable mortality during acute medical crises.",
    "evaluationApproach": "The platform will be evaluated by measuring real-time WebSocket update propagation latencies under high concurrent browser connections and testing queue throughput.",
    "defendingYourChoice": [
      "I identified that emergency medical dispatchers lack real-time visibility into neighboring hospital bed availability and blood bank reserves, leading to critical delays during trauma transfers represents a critical operational gap in real-world deployments.",
      "The project applies React, WebSockets to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-8",
    "title": "Multi-Agency Disaster Emergency Response Spatial Planning Canvas",
    "description": "A real-time collaborative web application allowing emergency response agencies (fire, health, police) to annotate disaster evacuation maps, allocate rescue units, and track flood hazards.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React",
      "Leaflet.js",
      "WebSockets",
      "Yjs CRDT",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how Conflict-Free Replicated Data Types (CRDTs) achieve eventual consistency and conflict-free state synchronization in collaborative applications.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?"
    ],
    "milestones": [
      "Build spatial canvas with offline vector map tile support.",
      "Implement Yjs CRDT real-time collaborative annotation engine.",
      "Add emergency vehicle tracking layer.",
      "Export incident spatial maps to PDF/GeoJSON."
    ],
    "problemStatement": "During natural disasters, emergency agencies operate in silos using static paper maps; commercial GIS suites lack lightweight real-time multi-user collaborative drawing capabilities over weak networks.",
    "whySuitableForYou": "This project showcases advanced technical depth in Conflict-Free Replicated Data Types (CRDTs), spatial web mapping, and real-time state synchronization.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because multi-agency disaster coordination software represents a sophisticated engineering challenge with immense civic value.",
    "evaluationApproach": "Evaluation will measure CRDT state convergence latency across multi-user editing sessions under simulated high packet loss and network partition conditions.",
    "defendingYourChoice": [
      "I observed that multi-agency disaster response teams suffer from fragmented situational awareness due to static paper maps during emergency events.",
      "The project applies Yjs CRDTs over WebSockets to achieve conflict-free, real-time collaborative map annotation across mobile field units.",
      "The scope focuses specifically on core spatial vector layer annotation and unit tracking rather than attempting to build a full enterprise GIS suite."
    ]
  },
  {
    "id": "web-fyp-9",
    "title": "Public Sector Government Service Accessibility & Screen-Reader Compliance Evaluator",
    "description": "An automated web inspection platform that crawls public e-governance websites, evaluating HTML DOM trees for WCAG 2.1 AAA accessibility compliance and screen-reader usability for visually impaired citizens.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "Puppeteer",
      "TypeScript",
      "React",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build headless browser DOM crawler.",
      "Implement WCAG 2.1 accessibility rule evaluation engine.",
      "Generate interactive visual audit reports with screenshot overlays.",
      "Track historical portal accessibility compliance scores."
    ],
    "problemStatement": "Most public sector websites in developing nations fail basic web accessibility standards, excluding citizens with visual or motor disabilities from essential public services.",
    "whySuitableForYou": "This project demonstrates advanced expertise in headless browser automation, AST/DOM traversal, and web accessibility engineering standards.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because web accessibility for vulnerable populations aligns with international human rights standards and modern software engineering best practices.",
    "evaluationApproach": "The evaluator will be assessed by comparing automated audit findings against manual expert WCAG accessibility reviews across 50 public government web pages.",
    "defendingYourChoice": [
      "I identified that most public sector websites in developing nations fail basic web accessibility standards, excluding citizens with visual or motor disabilities from essential public services represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, Puppeteer to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-10",
    "title": "Off-Grid Mini-Grid Power Load & Battery Storage Simulation Workspace",
    "description": "An interactive browser-based simulation workspace allowing renewable energy engineers to model solar PV array sizes, battery bank degradation, and mini-grid load profiles under varying weather scenarios.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React",
      "TypeScript",
      "WebAssembly",
      "C++",
      "Canvas API"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain client-side state management patterns in React and when to choose local component state versus global context stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build interactive electrical component canvas.",
      "Implement C++ power flow simulation engine compiled to WebAssembly.",
      "Add solar irradiance time-series generator.",
      "Export technical mini-grid feasibility reports."
    ],
    "problemStatement": "Renewable energy engineers lack open-source web simulation tools for mini-grid design, relying on expensive desktop software that cannot be accessed easily by local technicians.",
    "whySuitableForYou": "This project highlights exceptional engineering capability by combining WebAssembly-compiled C++ simulation routines with a modern React canvas user interface.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because expanding rural electrification through optimized mini-grid engineering is a high-impact research area.",
    "evaluationApproach": "Simulation accuracy will be evaluated by comparing WebAssembly execution speed and power flow results against established desktop engineering simulation packages (e.g. HOMER).",
    "defendingYourChoice": [
      "I identified that renewable energy engineers lack open-source web simulation tools for mini-grid design, relying on expensive desktop software that cannot be accessed easily by local technicians represents a critical operational gap in real-world deployments.",
      "The project applies React, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-11",
    "title": "Multi-Tenant Agricultural Cooperative & Credit Union Web Engine",
    "description": "A multi-tenant web platform engine that provisions isolated management web portals for hundreds of smallholder farming cooperatives on custom subdomains.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Redis"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "What are the trade-offs between Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR) in Next.js?",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build multi-tenant database isolation architecture.",
      "Implement dynamic subdomain routing middleware.",
      "Create tenant administrative portal customization suite.",
      "Add centralized billing and dues collection."
    ],
    "problemStatement": "Individual agricultural cooperatives cannot afford custom software development, while single-tenant software instances incur unsustainable hosting and maintenance overhead.",
    "whySuitableForYou": "This project demonstrates advanced cloud software architecture skills in multi-tenancy design, dynamic routing, and database schema isolation.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because scaling digital access for agricultural credit unions directly fosters rural financial inclusion and cooperative growth.",
    "evaluationApproach": "The platform will be evaluated by testing tenant data isolation security and measuring server memory overhead when scaling up to 100 active virtual tenant domains.",
    "defendingYourChoice": [
      "I identified that individual agricultural cooperatives cannot afford custom software development, while single-tenant software instances incur unsustainable hosting and maintenance overhead represents a critical operational gap in real-world deployments.",
      "The project applies Next.js, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "web-fyp-12",
    "title": "Low-Bandwidth Rural E-Governance Portal Latency & Compression Benchmark Suite",
    "description": "An empirical software benchmarking suite designed to analyze, test, and optimize government web portals for low-bandwidth 2G/3G mobile networks in rural areas.",
    "category": "web",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "Puppeteer",
      "Chart.js",
      "Express"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build network throttling proxy simulating 2G/3G link conditions.",
      "Implement automated asset bundle size and compression analyzer.",
      "Create performance metric reporting dashboard.",
      "Generate web optimization recommendations."
    ],
    "problemStatement": "Government web portals are increasingly bloated with heavy JavaScript frameworks and uncompressed assets, making them unusable for citizens on slow rural mobile connections.",
    "whySuitableForYou": "This project showcases your ability to conduct rigorous empirical software benchmarking, network performance analysis, and web optimization.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because quantitative web performance optimization directly improves civic access to public digital infrastructure.",
    "evaluationApproach": "The benchmarking suite will be evaluated by demonstrating measurable load-time reductions on sample government web pages before and after applying recommended optimization passes.",
    "defendingYourChoice": [
      "I identified that government web portals are increasingly bloated with heavy javascript frameworks and uncompressed assets, making them unusable for citizens on slow rural mobile connections represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-1",
    "title": "Offline-First Primary Healthcare Diagnostic & Clinical Treatment Companion",
    "description": "An offline-first mobile app providing rural healthcare workers with clinical treatment decision trees, essential drug dosage calculators, and patient visit logs.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build clinical diagnostic decision tree interface.",
      "Implement drug dosage calculator.",
      "Create offline SQLite database for patient records.",
      "Add data sync when online."
    ],
    "problemStatement": "Health workers in remote clinics frequently lack internet access, making web-based medical portals inaccessible during critical patient consultations; physical handbooks are difficult to update.",
    "whySuitableForYou": "This project provides an achievable mobile engineering scope focusing on offline database persistence, form validation, and responsive mobile UI.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because empowering rural health workers with offline diagnostic tools directly improves maternal and child mortality outcomes.",
    "evaluationApproach": "The app will be evaluated by measuring offline database query response times and validating drug dosage calculator accuracy against standard clinical guidelines.",
    "defendingYourChoice": [
      "I identified that health workers in remote clinics frequently lack internet access, making web-based medical portals inaccessible during critical patient consultations represents a critical operational gap in real-world deployments.",
      "The project applies Flutter, Dart to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-2",
    "title": "Rural Community Tele-Pharmacy & Counterfeit Medicine Verification App",
    "description": "A mobile application enabling patients in rural villages to scan pharmaceutical barcode/QR scratch cards, verifying drug authenticity against national databases.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "Expo",
      "AsyncStorage"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently."
    ],
    "milestones": [
      "Integrate camera barcode/QR scanner.",
      "Implement drug verification API lookup.",
      "Add offline scan history log.",
      "Create counterfeit report dispatcher."
    ],
    "problemStatement": "Counterfeit pharmaceuticals cause thousands of avoidable deaths annually; existing verification systems rely heavily on SMS shortcodes that are often costly or unresponsive.",
    "whySuitableForYou": "This project allows you to build a practical mobile app incorporating hardware camera scanning, external API integration, and user-friendly design.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because combating fake drugs is a high-priority public health mandate with immediate consumer safety impact.",
    "evaluationApproach": "The system will be evaluated by measuring QR code scan decoding speed and testing verification response latency across simulated 3G mobile connections.",
    "defendingYourChoice": [
      "I identified that counterfeit pharmaceuticals cause thousands of avoidable deaths annually represents a critical operational gap in real-world deployments.",
      "The project applies React Native, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-3",
    "title": "Rural Health Worker Geofenced Vaccination Outreach & Field Visit Verifier",
    "description": "A mobile field app utilizing GPS geofencing and offline logging to track vaccination outreach visits in remote villages, ensuring complete ward coverage.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "SQLite",
      "Geolocator API"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build geofenced village arrival detection module.",
      "Implement child vaccination record entry forms.",
      "Create field worker coverage map visualizer.",
      "Add encrypted local database backup."
    ],
    "problemStatement": "Health ministries struggle to verify whether mobile immunization teams reach remote settlements, leading to unexcused missed visits and inaccurate coverage reports.",
    "whySuitableForYou": "This project demonstrates your intermediate mobile capabilities in location-based services, background GPS processing, and offline spatial data storage.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because verifiable vaccination coverage tracking directly supports national disease eradication campaigns.",
    "evaluationApproach": "Evaluation will focus on measuring GPS location accuracy in low-signal rural environments and assessing battery consumption during continuous background tracking.",
    "defendingYourChoice": [
      "I identified that health ministries struggle to verify whether mobile immunization teams reach remote settlements, leading to unexcused missed visits and inaccurate coverage reports represents a critical operational gap in real-world deployments.",
      "The project applies Flutter, Dart to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-4",
    "title": "Informal Urban Transit (Danfo/Matatu) GPS Route & Fleet Management App",
    "description": "A mobile passenger companion and driver app tracking informal public transit buses via crowdsourced smartphone GPS, estimating arrival times at unmapped bus stops.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "Firebase",
      "Mapbox SDK"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build real-time vehicle GPS tracking pipeline.",
      "Implement arrival time estimation algorithm for unmapped stops.",
      "Create passenger route map interface.",
      "Add driver delay reporting tools."
    ],
    "problemStatement": "Informal transit networks lack fixed timetables or official tracking systems, causing severe commuter uncertainty and urban traffic congestion.",
    "whySuitableForYou": "This project highlights your competency in mobile map SDK integration, real-time data streaming, and crowdsourced data processing.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because improving informal public transit efficiency directly reduces urban traffic congestion and commuter delays.",
    "evaluationApproach": "The application will be evaluated by comparing estimated arrival times against actual bus arrival data across 100 test transit trips.",
    "defendingYourChoice": [
      "I identified that informal transit networks lack fixed timetables or official tracking systems, causing severe commuter uncertainty and urban traffic congestion represents a critical operational gap in real-world deployments.",
      "The project applies React Native, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-5",
    "title": "Smallholder Farmer-to-Farmer Seed & Tool Exchange Marketplace",
    "description": "A mobile peer-to-peer marketplace app allowing smallholders to trade indigenous seeds, rent unutilized equipment, and organize shared agricultural haulage.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Supabase",
      "PostGIS"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build product listing creation flow with photo capture.",
      "Implement geo-proximity search filtering tools within 15km.",
      "Add in-app messaging interface.",
      "Create user trust rating system."
    ],
    "problemStatement": "Smallholders lack access to affordable machinery and certified seeds; commercial agricultural e-commerce apps target large commercial farms and require formal payment gateways.",
    "whySuitableForYou": "This project showcases your full-stack mobile development capabilities using Flutter and Supabase to solve local agricultural resource constraints.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because peer-to-peer equipment sharing increases agricultural mechanization among smallholder farmers.",
    "evaluationApproach": "The marketplace will be evaluated by testing geo-spatial query performance (PostGIS radius queries) and conducting usability testing with local farming cooperative members.",
    "defendingYourChoice": [
      "I identified that smallholders lack access to affordable machinery and certified seeds represents a critical operational gap in real-world deployments.",
      "The project applies Flutter, Dart to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-6",
    "title": "Encrypted Anonymous Maternal Health & Postpartum Care Companion",
    "description": "A privacy-focused mobile application offering expectant and new mothers confidential health tracking, postpartum depression self-assessments, and encrypted nurse consultation.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "React Native",
      "TypeScript",
      "SQLite",
      "CryptoJS"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build encrypted local journal and symptom log.",
      "Implement PHQ-9 postpartum depression assessment calculator.",
      "Create secure anonymous messaging channel.",
      "Add emergency maternal alert dispatcher."
    ],
    "problemStatement": "Social stigma and privacy concerns prevent many young mothers from seeking mental health or reproductive care at local health centers.",
    "whySuitableForYou": "This project highlights your mobile software skills in client-side encryption, secure local storage, and sensitive user interface design.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because addressing maternal postpartum health with strict privacy safeguards fills a major gap in community healthcare.",
    "evaluationApproach": "The application will be evaluated by conducting security audits of client-side encryption algorithms and evaluating UI usability with maternal care advocates.",
    "defendingYourChoice": [
      "I identified that social stigma and privacy concerns prevent many young mothers from seeking mental health or reproductive care at local health centers represents a critical operational gap in real-world deployments.",
      "The project applies React Native, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-7",
    "title": "Community Disaster Rescue SOS Beacon & First-Responder Locator",
    "description": "A mobile emergency SOS application that broadcasts location coordinates, medical emergency tags, and battery status to nearby community first-responders during disasters.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Firebase Cloud Messaging",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build low-power emergency SOS panic trigger.",
      "Implement first-responder incident dispatch dashboard.",
      "Create offline emergency contact beaconing.",
      "Add battery level and location broadcasting."
    ],
    "problemStatement": "During flood or fire emergencies, centralized emergency call centers become overwhelmed or unreachable, leaving victims unable to contact local rescue teams.",
    "whySuitableForYou": "This project demonstrates your intermediate skills in push notifications, emergency location services, and resilient mobile application architecture.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because localized emergency dispatch software enhances community disaster resilience and speeds up rescue response.",
    "evaluationApproach": "System performance will be evaluated by measuring panic alert delivery speed to nearby responder devices under high network traffic congestion.",
    "defendingYourChoice": [
      "I identified that during flood or fire emergencies, centralized emergency call centers become overwhelmed or unreachable, leaving victims unable to contact local rescue teams represents a critical operational gap in real-world deployments.",
      "The project applies Flutter, Dart to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-8",
    "title": "Extension Officer Multilingual Audio Crop Advisory & Disease Summarizer",
    "description": "A mobile application enabling agricultural extension officers to record field voice notes in regional languages, transcribing speech and generating structured crop disease advisories.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Flutter",
      "Dart",
      "Whisper API",
      "TensorFlow Lite",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how Flutter's widget tree and reactive state management work when building cross-platform mobile user interfaces.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build native audio recording pipeline with compression.",
      "Implement local/cloud speech-to-text integration.",
      "Extract crop disease entity tags using NLP.",
      "Generate formatted PDF advisory reports."
    ],
    "problemStatement": "Extension officers spend hours manually typing field reports after farm visits, creating documentation backlogs that delay urgent crop disease warnings.",
    "whySuitableForYou": "This project demonstrates advanced mobile engineering technical depth by integrating speech-to-text models, natural language processing, and automated report generation.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because accelerating crop pest identification and field advisory dissemination protects regional crop yields.",
    "evaluationApproach": "The system will be evaluated by measuring speech recognition accuracy across regional accents and timing automated report generation speeds.",
    "defendingYourChoice": [
      "I identified that extension officers spend hours manually typing field reports after farm visits, creating documentation backlogs that delay urgent crop disease warnings represents a critical operational gap in real-world deployments.",
      "The project applies Flutter, Dart to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-9",
    "title": "Mobile AR Utility Infrastructure Repair & Underground Pipe Navigation",
    "description": "An augmented reality mobile application overlays 3D subterranean utility pipe locations and electrical conduit maps onto smartphone camera views for municipal repair crews.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Unity",
      "C#",
      "AR Foundation",
      "ARCore",
      "GeoPandas"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build AR camera view rendering 3D utility pipes anchored to GPS coordinates.",
      "Implement GIS vector data parser.",
      "Create pipe depth and material inspection tool.",
      "Add offline 3D asset caching."
    ],
    "problemStatement": "Municipal excavation crews frequently rupture underground water pipes or power cables during repairs because they rely on static 2D paper blueprints.",
    "whySuitableForYou": "This project showcases exceptional technical sophistication in Augmented Reality (AR), 3D spatial alignment, and GIS data integration on mobile hardware.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because AR-assisted utility maintenance prevents costly infrastructure damage and reduces repair downtime.",
    "evaluationApproach": "The AR system will be evaluated by measuring 3D spatial alignment accuracy (drift in centimeters) across outdoor urban test sites.",
    "defendingYourChoice": [
      "I identified that municipal excavation crews frequently rupture underground water pipes or power cables during repairs because they rely on static 2d paper blueprints represents a critical operational gap in real-world deployments.",
      "The project applies Unity, C# to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-10",
    "title": "Offline Disaster Response Peer-to-Peer BLE Mesh Communication Network",
    "description": "A mobile peer-to-peer communications app that forms decentralized Bluetooth Low Energy (BLE) mesh networks, enabling text messaging and GPS location sharing when cell towers fail.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Android SDK",
      "Kotlin",
      "BLE Mesh API",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement BLE advertising and scanning discovery protocol.",
      "Build multi-hop store-and-forward mesh routing engine.",
      "Create encrypted local message store.",
      "Add battery-aware scanning duty cycles."
    ],
    "problemStatement": "When disaster events destroy cellular towers, disaster victims and search-and-rescue teams lose all mobile communications capability.",
    "whySuitableForYou": "This project demonstrates advanced systems-level mobile engineering mastery in low-level wireless protocols, mesh routing algorithms, and resource management.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because resilient mesh communications infrastructure represents a highly critical area of emergency response research.",
    "evaluationApproach": "Mesh performance will be evaluated by measuring multi-hop packet delivery ratios, latency per hop, and battery drain rates across a 10-device test mesh network.",
    "defendingYourChoice": [
      "I identified that when disaster events destroy cellular towers, disaster victims and search-and-rescue teams lose all mobile communications capability represents a critical operational gap in real-world deployments.",
      "The project applies Android SDK, Kotlin to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-11",
    "title": "Urban Freight Loading Dock Space Occupancy Detector using Computer Vision",
    "description": "A mobile computer vision app utilizing device camera streams and lightweight neural networks to detect available loading bay spaces and guide delivery truck drivers in real time.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "React Native",
      "TensorFlow Lite",
      "Python",
      "OpenCV"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "Explain how object detection algorithms perform real-time bounding box prediction and feature extraction on video frames.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Train lightweight mobile object detection model for loading bays.",
      "Implement TFLite camera stream inference on mobile device.",
      "Create loading dock availability indicator UI.",
      "Add driver slot reservation triggers."
    ],
    "problemStatement": "Delivery trucks idling while searching for open urban loading bays cause major city traffic congestion and increased logistics emissions.",
    "whySuitableForYou": "This project highlights your advanced competency in mobile edge AI, computer vision model quantization, and real-time video stream processing.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because smart urban logistics and computer vision edge applications are cutting-edge research topics.",
    "evaluationApproach": "Detection accuracy will be evaluated by measuring model mAP (mean Average Precision) and inference frame-rate (FPS) on mid-range smartphone hardware.",
    "defendingYourChoice": [
      "I identified that delivery trucks idling while searching for open urban loading bays cause major city traffic congestion and increased logistics emissions represents a critical operational gap in real-world deployments.",
      "The project applies React Native, TensorFlow Lite to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "mobile-fyp-12",
    "title": "Cross-Platform Mobile Framework Performance Benchmark for Low-End Smartphones",
    "description": "An empirical performance benchmarking suite that measures CPU, memory, frame rate, and battery utilization across React Native, Flutter, and Native Android apps on budget smartphones.",
    "category": "mobile",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Android SDK",
      "Kotlin",
      "Python",
      "Flutter",
      "React Native"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how React Native bridges JavaScript code with native mobile components and UI threads.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build standardized test application in Native, Flutter, and React Native.",
      "Implement automated UI interaction testing scripts.",
      "Measure CPU, RAM, and FPS performance metrics using Android Profiler.",
      "Generate comparative benchmark reports."
    ],
    "problemStatement": "Mobile developers lack rigorous empirical benchmark data regarding how cross-platform frameworks perform on low-cost budget smartphones common in developing regions.",
    "whySuitableForYou": "This project showcases your ability to conduct rigorous scientific software benchmarking, low-level OS profiling, and mobile architecture analysis.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because empirical mobile framework performance research provides valuable data for software engineers building apps for developing markets.",
    "evaluationApproach": "The benchmarking suite will be evaluated by demonstrating statistical significance in performance metric variance across multi-framework test runs on budget hardware.",
    "defendingYourChoice": [
      "I identified that mobile developers lack rigorous empirical benchmark data regarding how cross-platform frameworks perform on low-cost budget smartphones common in developing regions represents a critical operational gap in real-world deployments.",
      "The project applies Android SDK, Kotlin to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-1",
    "title": "Rural Health Center Patient Health Record & Treatment History API",
    "description": "A RESTful API backend service providing secure patient medical record creation, clinical visit logging, and prescription history queries for rural clinic network applications.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Design RESTful endpoints for patient medical history CRUD operations.",
      "Implement JWT authentication and RBAC authorization middleware.",
      "Add input validation using Joi schemas.",
      "Write automated API endpoint unit tests."
    ],
    "problemStatement": "Rural health posts currently maintain fragmented paper cards, leading to missing treatment histories when patients visit different district clinics; enterprise EMR backends are overly complex.",
    "whySuitableForYou": "This project provides an achievable backend engineering scope to demonstrate REST API design, relational database modeling, and authentication security.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because digitalizing rural health records establishes essential infrastructure for regional healthcare continuity.",
    "evaluationApproach": "The API will be evaluated by testing query execution performance on a database of 50,000 synthetic patient records and verifying 100% test coverage on authentication endpoints.",
    "defendingYourChoice": [
      "I identified that rural health posts currently maintain fragmented paper cards, leading to missing treatment histories when patients visit different district clinics represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, Express to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-2",
    "title": "Financial Inclusion Micro-Loan Credit Engine Feature Toggle Server",
    "description": "A backend microservice enabling micro-finance banks to dynamically enable, test, and roll out new credit risk evaluation algorithms to specific agent branches without downtime.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "FastAPI",
      "Redis",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build feature flag management REST API.",
      "Implement Redis-backed flag evaluation middleware.",
      "Create branch targeting rule engine.",
      "Add audit log tracking for feature toggle updates."
    ],
    "problemStatement": "Micro-finance institutions struggle to deploy experimental credit scoring rules safely, as modifying legacy core banking monoliths requires risky system restarts.",
    "whySuitableForYou": "This project provides a clean scope to demonstrate backend microservice design, Redis caching, and dynamic configuration management.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because feature flag infrastructure improves modern DevOps agility and software reliability in financial systems.",
    "evaluationApproach": "The server will be evaluated by measuring feature flag evaluation latencies under high request volumes and verifying zero downtime during flag updates.",
    "defendingYourChoice": [
      "I identified that micro-finance institutions struggle to deploy experimental credit scoring rules safely, as modifying legacy core banking monoliths requires risky system restarts represents a critical operational gap in real-world deployments.",
      "The project applies Python, FastAPI to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-3",
    "title": "Micro-Merchant SMS Transaction Link Shortening & Tracking Engine",
    "description": "A high-performance URL shortening and tracking backend API designed to generate micro-links for agricultural market price queries sent over low-cost SMS channels.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "Gorilla Mux",
      "Redis",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse."
    ],
    "milestones": [
      "Build Base62 link compression algorithm.",
      "Implement Redis caching layer for sub-5ms lookups.",
      "Create click analytics ingestion pipeline.",
      "Add rate limiting middleware protecting link endpoints."
    ],
    "problemStatement": "Standard URL shorteners (e.g. bit.ly) lack localized query analytics, custom domain branding, and low-latency throughput required for massive national SMS market information relays.",
    "whySuitableForYou": "This project highlights your backend capabilities in Go programming, high-throughput memory caching, and algorithmic string encoding.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because efficient SMS communication infrastructure lowers data costs for micro-merchants and smallholders.",
    "evaluationApproach": "System throughput will be evaluated by conducting load tests benchmarking requests per second (RPS) and latency distributions under simulated traffic spikes.",
    "defendingYourChoice": [
      "I identified that standard url shorteners (e represents a critical operational gap in real-world deployments.",
      "The project applies Go, Gorilla Mux to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-4",
    "title": "Perishable Agricultural Cold-Chain Sensor Telemetry Aggregation Queue",
    "description": "An asynchronous task processing backend that ingests temperature telemetry from cold-storage trucks, processing time-series data and triggering alerts upon thermal breaches.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "FastAPI",
      "Redis",
      "Celery",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build high-concurrency telemetry ingestion REST API.",
      "Implement Celery asynchronous task queue for sensor data processing.",
      "Create thermal breach alert dispatcher.",
      "Add time-series aggregation endpoints."
    ],
    "problemStatement": "Cold-storage logistics providers fail to prevent produce spoilage because sensor logs are processed in batch after trips end rather than asynchronously in real time.",
    "whySuitableForYou": "This project showcases your intermediate skill in building asynchronous task processing pipelines, queue management, and time-series data aggregation.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because real-time cold-chain telemetry processing directly reduces perishable food waste in agricultural supply chains.",
    "evaluationApproach": "The pipeline will be evaluated by measuring task processing throughput (events per second) and verifying alert delivery latency when temperature thresholds are exceeded.",
    "defendingYourChoice": [
      "I identified that cold-storage logistics providers fail to prevent produce spoilage because sensor logs are processed in batch after trips end rather than asynchronously in real time represents a critical operational gap in real-world deployments.",
      "The project applies Python, FastAPI to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-5",
    "title": "Open Banking API Gateway with Token Bucket Rate Limiting",
    "description": "A high-performance API gateway protecting core banking microservices, enforcing Token Bucket rate limiting, mutual TLS termination, and OAuth2 token validation.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "Redis",
      "Express"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build API reverse proxy routing layer.",
      "Implement Redis-backed Token Bucket rate limiting algorithm.",
      "Create OAuth2 token verification middleware.",
      "Add central logging and request metrics."
    ],
    "problemStatement": "Banks exposing Open Banking APIs face security and stability risks from unauthorized API scraping and traffic spikes that can crash legacy core banking servers.",
    "whySuitableForYou": "This project demonstrates your backend expertise in API gateway design, distributed rate limiting algorithms, and modern banking integration standards.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because secure API gateway infrastructure is fundamental to modern open banking regulations and financial fintech ecosystems.",
    "evaluationApproach": "Gateway performance will be evaluated by conducting stress tests to measure latency overhead introduced by the gateway and verifying accurate rate-limiting under high concurrency.",
    "defendingYourChoice": [
      "I identified that banks exposing open banking apis face security and stability risks from unauthorized api scraping and traffic spikes that can crash legacy core banking servers represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-6",
    "title": "Multi-Agency Disaster Relief Worker Federated Identity Provider",
    "description": "An OAuth2 / OpenID Connect single sign-on (SSO) identity provider enabling emergency responders from different NGOs and government agencies to access shared disaster portals.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Thymeleaf"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement OpenID Connect discovery and authorization endpoints.",
      "Build multi-factor authentication (MFA) module.",
      "Create federated user management portal.",
      "Add session revocation management."
    ],
    "problemStatement": "During emergency responses, rescue workers waste critical time registering separate user accounts across incompatible software portals managed by different responding agencies.",
    "whySuitableForYou": "This project showcases your technical depth in enterprise Java backend engineering, federated identity standards, and security protocol implementation.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because federated identity management simplifies inter-agency emergency response coordination during humanitarian crises.",
    "evaluationApproach": "The identity provider will be evaluated by verifying compliance with OIDC specification test suites and measuring authorization code exchange latency.",
    "defendingYourChoice": [
      "I identified that during emergency responses, rescue workers waste critical time registering separate user accounts across incompatible software portals managed by different responding agencies represents a critical operational gap in real-world deployments.",
      "The project applies Java, Spring Boot to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-7",
    "title": "International Freight & Maritime Logistics Event Webhook Delivery Engine",
    "description": "A fault-tolerant webhook delivery system that receives shipping container status updates and guarantees reliable HTTP event delivery to logistics subscriber endpoints.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "Redis",
      "BullMQ",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build webhook endpoint subscription management API.",
      "Implement distributed task queue for asynchronous HTTP POST delivery.",
      "Add exponential backoff retry logic for failed deliveries.",
      "Create HMAC payload signature generator."
    ],
    "problemStatement": "Logistics platforms frequently lose critical container delivery notifications because simple HTTP dispatchers lack persistent queues and automatic retry mechanisms during endpoint outages.",
    "whySuitableForYou": "This project highlights your backend software capability in building event-driven architectures, reliable messaging queues, and cryptographic payload verification.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because event-driven webhook delivery infrastructure powers modern global supply chain transparency.",
    "evaluationApproach": "The system will be evaluated by measuring webhook delivery throughput and testing recovery resilience when target endpoint servers undergo simulated 24-hour outages.",
    "defendingYourChoice": [
      "I identified that logistics platforms frequently lose critical container delivery notifications because simple http dispatchers lack persistent queues and automatic retry mechanisms during endpoint outages represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-8",
    "title": "Micro-Finance Bank Multi-Currency Event Sourced Ledger Engine",
    "description": "A high-reliability financial ledger backend utilizing Event Sourcing and CQRS to maintain immutable multi-currency transaction logs with complete historical auditability.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Design immutable event store for financial transactions.",
      "Implement CQRS read model projections.",
      "Build multi-currency balance calculation engine.",
      "Create audit log verification suite."
    ],
    "problemStatement": "Traditional CRUD database ledgers are vulnerable to silent record updates and lack complete historical audit trails required for micro-finance financial compliance.",
    "whySuitableForYou": "This project demonstrates advanced technical depth in distributed systems design, Event Sourcing, CQRS architecture, and financial software engineering.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because immutable event-sourced financial ledgers provide the highest standard of auditability and fraud prevention.",
    "evaluationApproach": "Ledger performance will be evaluated by measuring event append throughput (events/sec) and testing financial audit reconstruction speed across 1,000,000 recorded transactions.",
    "defendingYourChoice": [
      "I identified that traditional crud database ledgers are vulnerable to silent record updates and lack complete historical audit trails required for micro-finance financial compliance represents a critical operational gap in real-world deployments.",
      "The project applies Java, Spring Boot to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-9",
    "title": "Distributed Cache Stampede Mitigation Gateway for Emergency Health Systems",
    "description": "A high-performance caching proxy designed to prevent database crashes during public health emergencies by preventing Cache Stampede spikes on essential drug availability lookups.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Redis",
      "gRPC"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "How do asynchronous message queues decouple web request handlers from third-party SMS notification dispatchers?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build distributed proxy layer intercepting database queries.",
      "Implement Probabilistic Early Expiration (XFetch) algorithm.",
      "Create cache warming and mutex locking mechanisms.",
      "Benchmark query throughput under load."
    ],
    "problemStatement": "During health crises, thousands of concurrent requests for critical medical stock data cause Cache Stampede crashes, taking down central healthcare databases.",
    "whySuitableForYou": "This project showcases advanced technical capability in high-concurrency systems programming, distributed caching algorithms, and performance benchmarking.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because mitigating cache stampedes in critical public health systems ensures high availability when lives depend on system uptime.",
    "evaluationApproach": "The proxy will be evaluated by conducting load tests comparing database CPU load with and without Probabilistic Early Expiration under 10,000 requests/sec surges.",
    "defendingYourChoice": [
      "I identified that during health crises, thousands of concurrent requests for critical medical stock data cause cache stampede crashes, taking down central healthcare databases represents a critical operational gap in real-world deployments.",
      "The project applies Go, Redis to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-10",
    "title": "High-Performance Data Deduplication Engine for National Identity Records",
    "description": "A high-scale backend data engine that processes millions of identity records, executing parallelized string distance algorithms to detect duplicate registrations in national databases.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Rust",
      "Actix-web",
      "PostgreSQL",
      "Rayon"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain Rust's memory ownership model, borrowing rules, and lifetime annotations for memory-safe systems programming.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement parallelized Levenshtein and Jaro-Winkler algorithms in Rust.",
      "Build memory-efficient batch processing pipeline.",
      "Create duplicate match scoring REST API.",
      "Add candidate match queue management."
    ],
    "problemStatement": "National identity and voter registries suffer from massive duplicate entries due to spelling variations and fraud; standard SQL queries are far too slow to process millions of string pairs.",
    "whySuitableForYou": "This project demonstrates exceptional engineering depth in Rust systems programming, parallel computing, and high-performance data processing.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because automated identity deduplication is essential for election integrity and national civic administration.",
    "evaluationApproach": "Deduplication speed will be evaluated by comparing execution time against multi-threaded Python baselines over a dataset of 1,000,000 identity records.",
    "defendingYourChoice": [
      "I identified that national identity and voter registries suffer from massive duplicate entries due to spelling variations and fraud represents a critical operational gap in real-world deployments.",
      "The project applies Rust, Actix-web to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-11",
    "title": "Distributed Financial Micro-Transaction Rate Limiting System",
    "description": "A low-latency distributed rate-limiting microservice operating across multiple server nodes to prevent financial fraud and API abuse in mobile money processing networks.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "gRPC",
      "Redis",
      "Docker"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain how in-memory data structures in Redis operate as high-performance caching layers and session stores.",
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build gRPC rate limiting microservice.",
      "Implement Sliding Window Counter algorithm using Redis atomic scripts.",
      "Create multi-node synchronization protocol.",
      "Benchmark latency overhead under high concurrency."
    ],
    "problemStatement": "Single-node rate limiters become bottlenecks in distributed mobile money networks, while simple Redis counters suffer from race conditions under high concurrency.",
    "whySuitableForYou": "This project highlights your advanced skills in distributed systems engineering, gRPC communication protocols, and atomic Redis scripting.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because scalable distributed rate limiting is crucial for securing high-volume mobile payment processing networks.",
    "evaluationApproach": "The system will be evaluated by measuring rate limiter processing overhead (target < 2ms) and testing counter accuracy across multi-node deployment clusters.",
    "defendingYourChoice": [
      "I identified that single-node rate limiters become bottlenecks in distributed mobile money networks, while simple redis counters suffer from race conditions under high concurrency represents a critical operational gap in real-world deployments.",
      "The project applies Go, gRPC to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "backend-fyp-12",
    "title": "Inter-Cooperative Agricultural Produce Clearing & Settlement Ledger",
    "description": "A distributed consensus clearinghouse backend that reconciles inter-cooperative produce trades, calculates net daily financial balances, and dispatches automated bank settlements.",
    "category": "backend",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Go",
      "Raft Protocol",
      "PostgreSQL",
      "Docker"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement Raft consensus node engine for clearing transactions.",
      "Build net settlement accounting calculator.",
      "Create automated bank payout dispatcher.",
      "Add fault-tolerant node recovery logic."
    ],
    "problemStatement": "Inter-cooperative trade settlements currently take weeks due to manual paper reconciliation between independent farming associations, locking up farmer capital.",
    "whySuitableForYou": "This project showcases top-tier software engineering mastery in distributed consensus algorithms (Raft), financial clearing systems, and fault-tolerant architecture.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because automated trade clearing accelerates financial liquidity for smallholder agricultural cooperatives.",
    "evaluationApproach": "Clearing ledger performance will be evaluated by testing Raft consensus safety during simulated node failures and measuring financial reconciliation transaction throughput.",
    "defendingYourChoice": [
      "I identified that inter-cooperative trade settlements currently take weeks due to manual paper reconciliation between independent farming associations, locking up farmer capital represents a critical operational gap in real-world deployments.",
      "The project applies Go, Raft Protocol to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-1",
    "title": "Public Healthcare Service Delivery Patient Feedback NLP Sentiment Analyzer",
    "description": "A data processing and natural language processing application that classifies qualitative patient feedback from district clinics to identify service bottlenecks.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "scikit-learn",
      "NLTK"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Clean and preprocess patient feedback text data.",
      "Extract TF-IDF text features.",
      "Train Naive Bayes and Logistic Regression sentiment classifiers.",
      "Build Streamlit summary dashboard."
    ],
    "problemStatement": "Health ministries receive thousands of handwritten or typed patient feedback comments but lack automated NLP tools to categorize sentiment and identify clinical bottlenecks.",
    "whySuitableForYou": "This project provides an achievable data science scope to apply text preprocessing, TF-IDF vectorization, and supervised machine learning classification.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because automated patient sentiment analysis provides actionable data for improving public healthcare delivery.",
    "evaluationApproach": "Model performance will be evaluated using precision, recall, F1-score, and confusion matrix metrics against a manually annotated test set of patient feedback.",
    "defendingYourChoice": [
      "I identified that health ministries receive thousands of handwritten or typed patient feedback comments but lack automated nlp tools to categorize sentiment and identify clinical bottlenecks represents a critical operational gap in real-world deployments.",
      "The project applies Python, pandas to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-2",
    "title": "District Hospital Essential Medicine Demand & Stockout Forecasting Engine",
    "description": "A time-series forecasting application using historical pharmacy dispensing records to predict future essential drug demand and alert health officers before stockouts occur.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "pandas",
      "Prophet",
      "Matplotlib"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Preprocess daily drug dispensing time-series datasets.",
      "Train Facebook Prophet forecasting models for key medicines.",
      "Calculate stockout risk timelines.",
      "Plot interactive demand forecast visualizers."
    ],
    "problemStatement": "District hospital dispensaries frequently experience critical drug stockouts because procurement relies on static historical averages rather than predictive time-series forecasting.",
    "whySuitableForYou": "This project allows you to demonstrate practical time-series data analysis, trend decomposition, and predictive modeling using standard Python tools.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because accurate drug demand forecasting directly prevents life-threatening pharmaceutical stockouts in rural health systems.",
    "evaluationApproach": "Forecasting accuracy will be evaluated using Mean Absolute Percentage Error (MAPE) and Root Mean Squared Error (RMSE) against actual historical drug consumption records.",
    "defendingYourChoice": [
      "I identified that district hospital dispensaries frequently experience critical drug stockouts because procurement relies on static historical averages rather than predictive time-series forecasting represents a critical operational gap in real-world deployments.",
      "The project applies Python, pandas to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-3",
    "title": "Agro-Commodity Market Price & Supply Sentiment Mining Engine",
    "description": "A data analytics pipeline analyzing news headlines, market trader reports, and crop yield bulletins to mine commodity sentiment and predict short-term price movements.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "pandas",
      "spaCy",
      "scikit-learn",
      "Streamlit"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Scrape agricultural news feeds and commodity reports.",
      "Perform aspect-based sentiment extraction on crop availability text.",
      "Correlate sentiment scores with historical grain prices.",
      "Build interactive price sentiment dashboard."
    ],
    "problemStatement": "Smallholders and local grain traders lack access to market intelligence tools that analyze qualitative news and trade bulletins to forecast commodity price swings.",
    "whySuitableForYou": "This project showcases your intermediate data engineering skills in web scraping, natural language processing, feature engineering, and interactive web visualization.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because transparent market intelligence reduces price volatility and protects smallholder farm incomes.",
    "evaluationApproach": "The engine will be evaluated by measuring correlation coefficients between sentiment scores and actual market price changes, as well as classification accuracy.",
    "defendingYourChoice": [
      "I identified that smallholders and local grain traders lack access to market intelligence tools that analyze qualitative news and trade bulletins to forecast commodity price swings represents a critical operational gap in real-world deployments.",
      "The project applies Python, pandas to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-4",
    "title": "Informal Financial Credit Association (Esusu/ROSCA) Risk Network Graph Analyzer",
    "description": "A network science analytics tool mapping financial transaction relationships between informal thrift group members to detect default contagion risks and structural fraud.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "NetworkX",
      "pandas",
      "scikit-learn"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Construct directed network graphs of thrift group financial transactions.",
      "Calculate graph centrality and community detection metrics.",
      "Identify high-risk bridge nodes in credit circles.",
      "Visualize financial risk graphs using PyVis."
    ],
    "problemStatement": "Informal financial associations (Esusu/ROSCAs) lack formal credit scoring; when key members default, entire community savings pools collapse due to unmonitored network risk.",
    "whySuitableForYou": "This project highlights your data science capability in graph theory, network analytics, and financial risk modeling.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because network science analysis of informal credit systems provides novel insights for expanding rural financial inclusion.",
    "evaluationApproach": "Graph analytics will be evaluated by testing community detection algorithm (Louvain) accuracy and evaluating default risk prediction improvements over tabular baselines.",
    "defendingYourChoice": [
      "I identified that informal financial associations (esusu/roscas) lack formal credit scoring represents a critical operational gap in real-world deployments.",
      "The project applies Python, NetworkX to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-5",
    "title": "Micro-Loan Default Risk Early Warning Classifier using Machine Learning",
    "description": "A machine learning predictive model that evaluates borrower application data, mobile money cash flow metrics, and socio-economic indicators to classify default risk for micro-loans.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "scikit-learn",
      "XGBoost",
      "pandas",
      "SHAP"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Preprocess and impute missing values in micro-loan applicant dataset.",
      "Perform SMOTE class balancing on imbalanced default data.",
      "Train XGBoost and Random Forest risk classifiers.",
      "Generate SHAP feature explainability plots."
    ],
    "problemStatement": "Traditional credit scoring models rely on formal bank statements and collateral, excluding informal sector workers who lack conventional credit histories.",
    "whySuitableForYou": "This project demonstrates your intermediate proficiency in machine learning pipelines, handling imbalanced datasets, model evaluation, and feature explainability.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because machine-learning based micro-credit evaluation expands access to capital for underserved micro-entrepreneurs.",
    "evaluationApproach": "The classifier will be evaluated using ROC-AUC, Precision-Recall curves, and F1-scores, evaluating fairness metrics across demographic sub-groups.",
    "defendingYourChoice": [
      "I identified that traditional credit scoring models rely on formal bank statements and collateral, excluding informal sector workers who lack conventional credit histories represents a critical operational gap in real-world deployments.",
      "The project applies Python, scikit-learn to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-6",
    "title": "Agricultural Extension Worker Competency & Job Matching Engine",
    "description": "A data analytics engine parsing agricultural extension candidate CVs and district ministry requirements, computing semantic vector similarity scores for optimal deployment.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "sentence-transformers",
      "pandas",
      "scikit-learn"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build PDF resume text extraction pipeline.",
      "Generate dense vector embeddings using Sentence-BERT.",
      "Compute Cosine Similarity matching scores against job profiles.",
      "Create recruiter ranking web dashboard."
    ],
    "problemStatement": "Agricultural ministries struggle to deploy extension workers with specialized crop knowledge (e.g., cocoa, cassava) to the correct ecological zones due to manual resume screening.",
    "whySuitableForYou": "This project showcases your technical skill in modern Natural Language Processing (NLP), semantic embeddings, and vector similarity search.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because optimizing extension worker deployment ensures specialized technical support reaches the right farming communities.",
    "evaluationApproach": "Matching performance will be evaluated by comparing semantic embedding rank order against expert human recruiter candidate rankings using Normalized Discounted Cumulative Gain (NDCG).",
    "defendingYourChoice": [
      "I identified that agricultural ministries struggle to deploy extension workers with specialized crop knowledge (e represents a critical operational gap in real-world deployments.",
      "The project applies Python, sentence-transformers to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-7",
    "title": "Urban Arterial Road Traffic & Freight Density Estimator using YOLOv8",
    "description": "A computer vision data pipeline processing video streams from urban traffic cameras to count vehicle classes, estimate traffic density, and detect road bottlenecks.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "OpenCV",
      "YOLOv8",
      "pandas",
      "Matplotlib"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how object detection algorithms perform real-time bounding box prediction and feature extraction on video frames.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Train/fine-tune YOLOv8 model on urban vehicle classes (buses, trucks, cars, bikes).",
      "Implement virtual line-crossing vehicle counting logic.",
      "Calculate lane occupancy and traffic density metrics.",
      "Export hourly traffic density reports."
    ],
    "problemStatement": "Urban transport departments in developing cities lack automated traffic counting infrastructure, relying on manual tally counts that produce unreliable data for road planning.",
    "whySuitableForYou": "This project highlights your intermediate capabilities in computer vision, deep learning object detection, and automated video stream data extraction.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because automated computer-vision traffic analytics provides empirical data essential for urban infrastructure planning.",
    "evaluationApproach": "Counting accuracy will be evaluated by comparing YOLOv8 vehicle counts against manual ground-truth video tallies across different weather and lighting conditions.",
    "defendingYourChoice": [
      "I identified that urban transport departments in developing cities lack automated traffic counting infrastructure, relying on manual tally counts that produce unreliable data for road planning represents a critical operational gap in real-world deployments.",
      "The project applies Python, OpenCV to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-8",
    "title": "Land Registry Survey Map & Spatial Boundary Duplicate Claim Detector",
    "description": "A spatial data science application that analyzes cadastral survey maps and vector plot boundary coordinates, executing spatial intersection algorithms to flag overlapping land claims.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "GeoPandas",
      "Shapely",
      "PySal",
      "PostGIS"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Ingest GeoJSON cadastral land survey boundary polygons.",
      "Implement spatial indexing (R-Tree) for fast polygon intersection tests.",
      "Calculate exact overlapping surface area percentages.",
      "Generate interactive GIS land dispute risk maps."
    ],
    "problemStatement": "Land ownership disputes consume judicial resources because paper survey maps overlap silently, allowing unscrupulous sellers to register duplicate claims on the same plot.",
    "whySuitableForYou": "This project demonstrates advanced technical depth in Spatial Data Science, Computational Geometry algorithms, and Geographic Information Systems (GIS).",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because automated land boundary overlap detection directly reduces land disputes and protects property rights.",
    "evaluationApproach": "Algorithm efficiency will be evaluated by measuring R-Tree spatial indexing query speed improvements over brute-force polygon intersection checks across 50,000 land plots.",
    "defendingYourChoice": [
      "I identified that land ownership disputes consume judicial resources because paper survey maps overlap silently, allowing unscrupulous sellers to register duplicate claims on the same plot represents a critical operational gap in real-world deployments.",
      "The project applies Python, GeoPandas to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-9",
    "title": "Mini-Grid Solar PV Peak Load Forecasting & Battery Aging Model",
    "description": "A hybrid machine learning time-series model forecasting solar mini-grid power generation while predicting lithium-ion battery bank degradation under daily depth-of-discharge cycles.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "PyTorch",
      "LSTM",
      "pandas",
      "SciPy"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Construct time-series dataset of solar irradiance and load demand.",
      "Train LSTM neural network predicting 24-hour solar generation curves.",
      "Implement electro-chemical battery capacity fading degradation equations.",
      "Optimize battery charge/discharge thresholds."
    ],
    "problemStatement": "Solar mini-grid operators fail to balance daily battery state-of-charge with generation forecasts, causing premature battery failure\u00c2\u0097the single largest operational expense.",
    "whySuitableForYou": "This project showcases exceptional capability in deep learning time-series modeling, physical domain simulation, and multi-objective optimization.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because prolonging battery lifespan in rural solar mini-grids significantly improves clean energy economic viability.",
    "evaluationApproach": "Model performance will be evaluated by comparing LSTM forecast accuracy (RMSE) against traditional ARIMA models and validating battery aging predictions against empirical battery datasheets.",
    "defendingYourChoice": [
      "I identified unmonitored depth-of-discharge battery degradation as the leading cause of premature battery failure and economic loss in off-grid solar mini-grids.",
      "The project applies Long Short-Term Memory (LSTM) neural networks to forecast 24-hour power demand while modeling physical battery capacity fading.",
      "The scope focuses specifically on solar generation forecasting and battery degradation modeling rather than broad electrical grid hardware design."
    ]
  },
  {
    "id": "data-fyp-10",
    "title": "Mobile Money Cash-In Fraud & Agent Anomaly Streaming Engine",
    "description": "A real-time data streaming pipeline processing mobile money transaction event logs with Apache Kafka, executing online anomaly detection to freeze fraudulent agent accounts instantly.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "Apache Kafka",
      "PySpark",
      "scikit-learn"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the architectural trade-offs between WebSockets and HTTP Long-Polling for low-latency bi-directional communication?",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build Kafka transaction event streaming producer.",
      "Implement PySpark Structured Streaming windowed aggregations.",
      "Apply online Isolation Forest anomaly detection algorithm.",
      "Trigger real-time account freeze alerts."
    ],
    "problemStatement": "Batch fraud analysis runs hours after transactions occur, allowing fraudulent mobile money agents to withdraw stolen cash before security teams detect the anomaly.",
    "whySuitableForYou": "This project demonstrates advanced technical mastery in real-time big data processing architectures (Kafka, PySpark), streaming analytics, and machine learning.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because real-time financial fraud detection is a critical requirement for maintaining consumer trust in mobile payment systems.",
    "evaluationApproach": "The streaming pipeline will be evaluated by measuring end-to-end event processing latency (target < 500ms) and assessing anomaly detection precision on synthetic fraud benchmarks.",
    "defendingYourChoice": [
      "I identified that batch fraud analysis runs hours after transactions occur, allowing fraudulent mobile money agents to withdraw stolen cash before security teams detect the anomaly represents a critical operational gap in real-world deployments.",
      "The project applies Python, Apache Kafka to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-11",
    "title": "Smallholder Crop Leaf Disease & Pest Damage Classifier using MobileViT",
    "description": "A computer vision deep learning model utilizing lightweight Vision Transformer (MobileViT) architectures to classify cassava and maize leaf diseases on edge mobile devices.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "PyTorch",
      "MobileViT",
      "TorchVision",
      "TFLite"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "Explain how object detection algorithms perform real-time bounding box prediction and feature extraction on video frames.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Collect and augment crop leaf disease image dataset.",
      "Train MobileViT Vision Transformer model in PyTorch.",
      "Evaluate classification metrics against ResNet/MobileNet baselines.",
      "Quantize model to TFLite format for mobile edge execution."
    ],
    "problemStatement": "Existing plant disease classification models rely on massive Convolutional Neural Networks (CNNs) that are too heavy to run locally on low-cost smartphones without internet.",
    "whySuitableForYou": "This project highlights state-of-the-art deep learning research capabilities in Vision Transformers (ViT), model compression, and edge AI deployment.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because early mobile crop disease diagnosis empowers smallholder farmers to take rapid action before crop loss spreads.",
    "evaluationApproach": "Model performance will be evaluated by comparing accuracy, parameter count, and inference latency between MobileViT and conventional MobileNetV3 baselines.",
    "defendingYourChoice": [
      "I identified that existing plant disease classification models rely on massive convolutional neural networks (cnns) that are too heavy to run locally on low-cost smartphones without internet represents a critical operational gap in real-world deployments.",
      "The project applies Python, PyTorch to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "data-fyp-12",
    "title": "National Power Grid Substation Sensor Stream Anomaly Detector",
    "description": "An unsupervised deep learning anomaly detection system utilizing Autoencoders to analyze multi-channel sensor telemetry from power grid transformers, alerting engineers to grid instability.",
    "category": "data",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "PyTorch",
      "Autoencoder",
      "pandas",
      "SciPy"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Preprocess multi-channel voltage, current, and frequency sensor streams.",
      "Train Deep Autoencoder model on normal power grid operating data.",
      "Calculate reconstruction error threshold for anomaly detection.",
      "Visualize grid fault events on interactive dashboard."
    ],
    "problemStatement": "Power grid operators are overwhelmed by raw telemetry data, leading to missed warning signs prior to catastrophic grid collapses and regional blackouts.",
    "whySuitableForYou": "This project demonstrates advanced technical depth in deep learning autoencoders, signal processing, and industrial anomaly detection.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because preventing national power grid collapses carries massive economic and social importance.",
    "evaluationApproach": "Anomaly detection performance will be evaluated using ROC-AUC and F1-scores on benchmark power grid fault datasets, measuring lead time before simulated transformer failure.",
    "defendingYourChoice": [
      "I identified that power grid operators are overwhelmed by raw telemetry data, leading to missed warning signs prior to catastrophic grid collapses and regional blackouts represents a critical operational gap in real-world deployments.",
      "The project applies Python, PyTorch to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-1",
    "title": "High-Performance Static Web Server for Remote Community Health Posts",
    "description": "A lightweight static HTTP web server written in C, using POSIX sockets and non-blocking I/O to serve medical training videos and clinical documents from low-cost single-board computers.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C",
      "POSIX Sockets",
      "Make"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Implement HTTP/1.0 request parser in C.",
      "Build socket listener handling client connections.",
      "Add MIME-type file serving logic.",
      "Measure RAM and CPU usage under load."
    ],
    "problemStatement": "Commercial web servers (e.g. Apache, Nginx) have complex configuration overhead and memory footprints that strain low-power Raspberry Pi devices deployed in rural health posts.",
    "whySuitableForYou": "This project provides an achievable systems engineering scope to demonstrate low-level C programming, network socket APIs, and OS resource management.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because building low-footprint web servers for resource-constrained hardware enables offline digital medical access in off-grid communities.",
    "evaluationApproach": "Server efficiency will be evaluated by measuring memory footprint (target < 5MB RAM) and testing request throughput under concurrent client connections.",
    "defendingYourChoice": [
      "I identified that commercial web servers (e represents a critical operational gap in real-world deployments.",
      "The project applies C, POSIX Sockets to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-2",
    "title": "High-Throughput Key-Value Database Engine for Telecom Micro-Payments",
    "description": "A fast in-memory key-value storage engine in C++ designed to store subscriber session tokens and account balances with sub-millisecond query response times.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "C++",
      "STL",
      "Sockets",
      "Make"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build hash table data structure in C++.",
      "Implement custom TCP binary command protocol.",
      "Add key TTL expiration tracking.",
      "Benchmark query throughput."
    ],
    "problemStatement": "Relational databases introduce excessive disk I/O latency when processing millions of short-lived subscriber session tokens for telecom micro-payment verification.",
    "whySuitableForYou": "This project allows you to demonstrate intermediate C++ data structure implementation, network socket programming, and performance benchmarking.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because high-speed in-memory caching engines are essential components of modern telecommunications infrastructure.",
    "evaluationApproach": "Database performance will be evaluated by measuring query operations per second (QPS) and testing sub-millisecond response latency under synthetic benchmark loads.",
    "defendingYourChoice": [
      "I identified that relational databases introduce excessive disk i/o latency when processing millions of short-lived subscriber session tokens for telecom micro-payment verification represents a critical operational gap in real-world deployments.",
      "The project applies C++, STL to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-3",
    "title": "Multi-Threaded Low-Resource Community Mesh Network Gateway Engine",
    "description": "A multi-threaded web gateway engine in C utilizing thread pools to serve captive portal authentication and local network status pages on community wireless routers.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "pthreads",
      "POSIX Sockets",
      "Make"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement thread-pool architecture in C using pthreads.",
      "Build thread-safe request queue with mutexes.",
      "Serve dynamic system status pages reading /proc metrics.",
      "Benchmark request concurrency."
    ],
    "problemStatement": "Single-threaded embedded router scripts freeze when multiple users access local mesh portals simultaneously, while fork-per-request architectures exhaust router RAM.",
    "whySuitableForYou": "This project showcases your intermediate systems programming competency in POSIX multithreading, synchronization primitives, and memory efficiency.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because thread-pool software architectures maximize hardware efficiency on affordable community network routers.",
    "evaluationApproach": "Gateway efficiency will be evaluated by comparing response times and RAM utilization of the thread-pool architecture against process-forking baselines under 100 concurrent connections.",
    "defendingYourChoice": [
      "I identified that single-threaded embedded router scripts freeze when multiple users access local mesh portals simultaneously, while fork-per-request architectures exhaust router ram represents a critical operational gap in real-world deployments.",
      "The project applies C, pthreads to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-4",
    "title": "User-Space Encrypted Mobile Health Record File System Engine",
    "description": "A virtual file system driver written in C using FUSE that presents encrypted patient records on portable drives as transparent read/write files when unlocked with a clinical key.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "FUSE",
      "OpenSSL",
      "Make"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement FUSE filesystem callback functions (read, write, readdir, getattr).",
      "Integrate OpenSSL AES-256-GCM block encryption.",
      "Create passphrase key derivation setup.",
      "Verify zero unencrypted residual data on disk."
    ],
    "problemStatement": "Health workers carrying USB drives containing patient data risk catastrophic privacy breaches if drives are lost; standard full-disk encryption requires administrator privileges unavailable on field laptops.",
    "whySuitableForYou": "This project demonstrates your technical capabilities in operating system storage drivers, file system abstractions (FUSE), and cryptographic data protection.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because user-space transparent file system encryption protects patient privacy without requiring OS admin privileges on field laptops.",
    "evaluationApproach": "The file system will be evaluated by measuring read/write throughput overhead compared to raw disk I/O and verifying complete data confidentiality when unmounted.",
    "defendingYourChoice": [
      "I identified that health workers carrying usb drives containing patient data risk catastrophic privacy breaches if drives are lost represents a critical operational gap in real-world deployments.",
      "The project applies C, FUSE to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-5",
    "title": "Reverse Proxy Load Balancer with Health Checks for Field Hospitals",
    "description": "A Layer-7 reverse proxy load balancer written in Go that inspects HTTP headers, routes traffic across field hospital server nodes, and performs automated health probes.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Go",
      "net/http",
      "Goroutines",
      "Docker"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how Go's goroutines and channels implement CSP-style concurrency without heavy OS thread overhead.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build reverse proxy forwarding engine in Go.",
      "Implement health check probe worker routines.",
      "Support Round-Robin and Least-Connections routing algorithms.",
      "Add live traffic metrics dashboard."
    ],
    "problemStatement": "Field medical deployments lack redundant server infrastructure; when a primary medical records server crashes, field health workers lose access because manual failover is too slow.",
    "whySuitableForYou": "This project highlights your intermediate capabilities in Go concurrent systems programming, network proxies, and automated fault recovery.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because resilient load balancing software prevents single points of failure in field healthcare deployments.",
    "evaluationApproach": "The load balancer will be evaluated by measuring request forwarding latency overhead and demonstrating zero dropped requests during simulated backend server crashes.",
    "defendingYourChoice": [
      "I identified that field medical deployments lack redundant server infrastructure represents a critical operational gap in real-world deployments.",
      "The project applies Go, net/http to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-6",
    "title": "Real-Time Off-Grid Solar Telemetry Monitoring Daemon",
    "description": "A low-level system daemon in C that monitors CPU, temperature, and battery telemetry on solar-powered edge controllers, exporting metric streams over low-bandwidth channels.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "Linux sysinfo",
      "POSIX Threads",
      "Make"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how user-space process abstractions interact with kernel system calls and file system VFS layers.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Read Linux kernel system files (/proc/stat, /proc/meminfo, /sys/class).",
      "Build circular ring-buffer storing telemetry samples.",
      "Implement socket exporter for telemetry data.",
      "Minimize daemon CPU footprint."
    ],
    "problemStatement": "Off-grid solar system controllers suffer unmonitored hardware overheating and memory leaks because full enterprise monitoring agents (e.g., Prometheus) exceed hardware memory limits.",
    "whySuitableForYou": "This project demonstrates your intermediate competency in Linux system programming, kernel interface reading (/proc), and low-footprint daemon development.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because lightweight system monitoring software extends the operational life of remote solar micro-grid controllers.",
    "evaluationApproach": "Daemon efficiency will be evaluated by verifying CPU usage remains below 1% and RAM consumption stays under 2MB during continuous execution.",
    "defendingYourChoice": [
      "I identified that off-grid solar system controllers suffer unmonitored hardware overheating and memory leaks because full enterprise monitoring agents (e represents a critical operational gap in real-world deployments.",
      "The project applies C, Linux sysinfo to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-7",
    "title": "High-Performance Inverted Index Text Search Engine for Public Gazettes",
    "description": "A fast C/C++ search engine using inverted index data structures to execute sub-second boolean keyword searches across gigabytes of unindexed public gazettes and legal archives.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C++",
      "File I/O",
      "Hash Tables",
      "Make"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build text parser and word stemmer pipeline.",
      "Implement inverted index mapping words to document posting lists.",
      "Support boolean AND/OR search query evaluation.",
      "Benchmark search speed against raw grep scans."
    ],
    "problemStatement": "Legal researchers and citizens struggle to search thousands of scanned public gazettes because conventional text search tools (grep) perform slow, linear file scans.",
    "whySuitableForYou": "This project showcases your intermediate skill in information retrieval algorithms, index data structures, and file I/O optimization in C++.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because fast search access to public gazettes and legal records promotes judicial transparency and legal research efficiency.",
    "evaluationApproach": "Search performance will be evaluated by measuring query execution speed against raw grep searches over a 5GB corpus of public gazette documents.",
    "defendingYourChoice": [
      "I identified that legal researchers and citizens struggle to search thousands of scanned public gazettes because conventional text search tools (grep) perform slow, linear file scans represents a critical operational gap in real-world deployments.",
      "The project applies C++, File I/O to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-8",
    "title": "Telecommunication Base Station Remote Diagnostic Shell",
    "description": "A Unix command shell implementation in C designed for network maintenance technicians, supporting remote command execution, pipe redirection, job control, and diagnostic scripts.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "POSIX fork/exec",
      "Signals",
      "Make"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Implement REPL parsing command lines, flags, and environment variables.",
      "Use fork() and execvp() for process execution.",
      "Implement I/O redirection and inter-process piping (|).",
      "Handle signal management (SIGINT, SIGTSTP)."
    ],
    "problemStatement": "Remote telecom base station routers require lightweight diagnostic shell environments for emergency maintenance when full graphical or heavy web interfaces fail.",
    "whySuitableForYou": "This project demonstrates your solid foundation in OS process management, system calls (fork/exec), signal handling, and I/O redirection.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because robust command-line shell interfaces are essential tools for low-level network equipment administration.",
    "evaluationApproach": "Shell correctness will be evaluated by testing process isolation, pipe data flow accuracy, and signal handling resilience under stress testing.",
    "defendingYourChoice": [
      "I identified that remote telecom base station routers require lightweight diagnostic shell environments for emergency maintenance when full graphical or heavy web interfaces fail represents a critical operational gap in real-world deployments.",
      "The project applies C, POSIX fork/exec to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-9",
    "title": "Low-Level Network Packet Inspection & QoS Analyzer for Rural Wireless Links",
    "description": "A low-level network packet sniffer in C using raw sockets to capture Ethernet frames, decode TCP/IP headers, and analyze traffic Quality-of-Service (QoS) on community wireless networks.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "libpcap",
      "POSIX Sockets",
      "Make"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain how Bluetooth Low Energy (BLE) peripheral discovery and mesh advertising protocols relay peer-to-peer messages.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Capture raw Ethernet frames using libpcap/raw sockets.",
      "Implement packet decoders for IP, TCP, UDP, and ICMP headers.",
      "Build real-time bandwidth consumption table per IP address.",
      "Generate network protocol distribution statistics."
    ],
    "problemStatement": "Rural community networks struggle with congested wireless backhauls because admins lack low-overhead packet inspection tools to identify bandwidth-hogging applications.",
    "whySuitableForYou": "This project highlights your advanced systems-level understanding of network protocol stacks, raw packet capture, and binary header decoding.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because network packet inspection and bandwidth management tools ensure equitable internet access in rural community networks.",
    "evaluationApproach": "Analyzer performance will be evaluated by measuring packet processing throughput without packet drops under 1Gbps network traffic loads.",
    "defendingYourChoice": [
      "I identified that rural community networks struggle with congested wireless backhauls because admins lack low-overhead packet inspection tools to identify bandwidth-hogging applications represents a critical operational gap in real-world deployments.",
      "The project applies C, libpcap to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-10",
    "title": "Custom Dynamic Memory Allocator for Low-Power IoT Sensor Nodes",
    "description": "A custom dynamic memory allocator (malloc/free) in C engineered for microcontrollers in agricultural sensor nodes, featuring boundary tag coalescing to prevent heap fragmentation.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "Memory Architecture",
      "Pointers",
      "Make"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Implement explicit free-list memory management data structure.",
      "Support First-Fit and Best-Fit allocation strategies.",
      "Add boundary tag coalescing for freeing memory blocks.",
      "Benchmark fragmentation against standard C library malloc."
    ],
    "problemStatement": "Standard C library malloc causes severe heap fragmentation over weeks of operation on microcontrollers with tiny RAM, leading to sudden node crashes.",
    "whySuitableForYou": "This project demonstrates exceptional systems programming depth in low-level memory architecture, pointer arithmetic, and allocator optimization.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because custom zero-fragmentation memory allocators are essential for long-term software stability on remote IoT sensor hardware.",
    "evaluationApproach": "Allocator efficiency will be evaluated by measuring memory fragmentation ratios and allocation/deallocation execution cycles under synthetic stress benchmarks.",
    "defendingYourChoice": [
      "I identified that standard c library malloc causes severe heap fragmentation over weeks of operation on microcontrollers with tiny ram, leading to sudden node crashes represents a critical operational gap in real-world deployments.",
      "The project applies C, Memory Architecture to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-11",
    "title": "High-Speed Zero-Allocation C JSON Telemetry Serializer Library",
    "description": "A zero-allocation C JSON parsing and serialization library designed to parse sensor telemetry payloads on off-grid solar inverters without invoking dynamic memory allocation.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C",
      "String Parsing",
      "Pointer Arithmetic",
      "Make"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Build finite-state machine (FSM) JSON token parser.",
      "Implement zero-copy string extraction operating directly on input buffers.",
      "Support nested JSON objects and numeric telemetry arrays.",
      "Benchmark parsing speed against cJSON."
    ],
    "problemStatement": "Standard open-source JSON libraries (e.g. cJSON) make heavy use of malloc(), causing memory allocation failures on embedded solar inverter controllers.",
    "whySuitableForYou": "This project showcases advanced technical skill in C string parsing, zero-copy buffer management, and finite-state machine design.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because zero-allocation telemetry parsing libraries eliminate memory crashes in critical embedded energy hardware.",
    "evaluationApproach": "Library performance will be evaluated by measuring execution time per KB parsed and verifying zero dynamic memory allocations (0 calls to malloc) during execution.",
    "defendingYourChoice": [
      "I identified that standard open-source json libraries (e represents a critical operational gap in real-world deployments.",
      "The project applies C, String Parsing to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "systems-fyp-12",
    "title": "Empirical Low-Power Wide-Area Network (LPWAN) Agricultural IoT Benchmark Suite",
    "description": "An empirical network benchmark suite evaluating packet delivery ratios, latency, and power consumption across LoRaWAN, NB-IoT, and Sigfox protocols for agricultural field sensors.",
    "category": "systems",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C++",
      "Python",
      "Serial Communication",
      "Matplotlib"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "Explain how Service Workers intercept network requests and manage caching strategies in Progressive Web Apps.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build standardized telemetry transmission test firmware across LPWAN radio modules.",
      "Implement automated packet loss and latency logging server.",
      "Measure battery current draw using hardware data acquisition.",
      "Generate comparative protocol performance reports."
    ],
    "problemStatement": "Agricultural IoT deployment teams lack empirical field benchmark data comparing LPWAN protocol reliability and battery life under dense crop canopy conditions.",
    "whySuitableForYou": "This project demonstrates your capability to conduct rigorous empirical network profiling, hardware telemetry acquisition, and statistical performance analysis.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because empirical LPWAN network benchmarking provides critical data for designing large-scale smart agriculture sensor deployments.",
    "evaluationApproach": "The benchmark suite will be evaluated by demonstrating statistical rigor in packet delivery ratio (PDR) variance across multi-protocol field test runs.",
    "defendingYourChoice": [
      "I identified that agricultural iot deployment teams lack empirical field benchmark data comparing lpwan protocol reliability and battery life under dense crop canopy conditions represents a critical operational gap in real-world deployments.",
      "The project applies C++, Python to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-1",
    "title": "Enterprise Micro-Finance API Credentials & Encryption Key Vault",
    "description": "A secure command-line encryption vault application for micro-finance institutions to store API credentials, database passphrases, and private keys using master key derivation.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "cryptography",
      "SQLite"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "What are the trade-offs between local client-side storage (IndexedDB/SQLite) and remote server synchronization for offline-first applications?",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Implement AES-256-GCM symmetric encryption for secret storage.",
      "Derive encryption keys using PBKDF2 with salt.",
      "Build encrypted SQLite database storage engine.",
      "Add automated clipboard memory clearing."
    ],
    "problemStatement": "Micro-finance developers frequently hardcode API keys and database passwords in plain text source code files, leading to severe credential leaks.",
    "whySuitableForYou": "This project provides an achievable security software scope to demonstrate practical symmetric encryption, key derivation standards, and secure file handling.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because secure credential management is fundamental to protecting financial software infrastructure from unauthorized access.",
    "evaluationApproach": "The vault will be evaluated by conducting security code audits of key derivation parameters and verifying zero plaintext secret leakage in memory dumps.",
    "defendingYourChoice": [
      "I identified that micro-finance developers frequently hardcode api keys and database passwords in plain text source code files, leading to severe credential leaks represents a critical operational gap in real-world deployments.",
      "The project applies Python, cryptography to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-2",
    "title": "Public Health Portal Web Application Firewall for OWASP Top 10",
    "description": "A lightweight HTTP security proxy that inspects incoming web requests to public health portals, filtering out OWASP Top 10 attack vectors including SQL injection and XSS.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "beginner",
    "suggestedStack": [
      "Python",
      "Flask",
      "Regex"
    ],
    "estimatedTimeframeWeeks": 10,
    "timeframeLabel": "8-10 weeks (~2-2.5 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build HTTP request inspection middleware.",
      "Write regular expression rules for SQLi and XSS detection.",
      "Implement IP rate limiting and request blocking.",
      "Create security incident logging dashboard."
    ],
    "problemStatement": "Public health portals are increasingly targeted by automated web attacks; deploying heavy enterprise firewalls requires dedicated security teams unavailable in public health departments.",
    "whySuitableForYou": "This project allows you to demonstrate practical web security concepts, request inspection middleware, and attack signature pattern matching.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because protecting public health portals against OWASP Top 10 vulnerabilities safeguards sensitive citizen health data.",
    "evaluationApproach": "WAF effectiveness will be evaluated by testing detection accuracy against standard OWASP benchmark vulnerability attack payloads (SQLi, XSS, Path Traversal).",
    "defendingYourChoice": [
      "I identified that public health portals are increasingly targeted by automated web attacks represents a critical operational gap in real-world deployments.",
      "The project applies Python, Flask to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-3",
    "title": "Patient Medical Image AES-GCM Encrypted Storage Utility",
    "description": "A desktop security software utility enabling hospital staff to encrypt high-resolution patient X-rays and MRI scans using AES-GCM before uploading to cloud storage.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "PyQt",
      "cryptography"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do image compression algorithms and modern formats (such as WebP) optimize binary payload transfer over low-bandwidth networks?",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Build graphical user interface for batch medical image selection.",
      "Implement AES-256-GCM file encryption with random IVs.",
      "Add digital signature verification for sender authenticity.",
      "Verify secure unencrypted temporary file deletion."
    ],
    "problemStatement": "Hospitals storing diagnostic images on unencrypted cloud storage violate medical privacy laws, exposing sensitive patient diagnostic records to data breaches.",
    "whySuitableForYou": "This project showcases your intermediate security engineering capabilities in symmetric cryptography, authenticated encryption modes (GCM), and secure GUI desktop app design.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because authenticated medical image encryption enforces strict patient privacy compliance during cloud storage and transit.",
    "evaluationApproach": "Utility performance will be evaluated by measuring file encryption/decryption throughput (MB/sec) on large medical image files and verifying GCM authentication tag integrity checks.",
    "defendingYourChoice": [
      "I identified that hospitals storing diagnostic images on unencrypted cloud storage violate medical privacy laws, exposing sensitive patient diagnostic records to data breaches represents a critical operational gap in real-world deployments.",
      "The project applies Python, PyQt to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-4",
    "title": "Public Sector E-Governance Portal Security Posture Auditor",
    "description": "An automated security auditing tool that scans public sector government portals, evaluating HTTP security headers, SSL/TLS certificate configurations, and cookie flags.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Python",
      "requests",
      "sslyze",
      "BeautifulSoup"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build automated HTTP response header auditor.",
      "Implement SSL/TLS cipher suite and certificate validator.",
      "Inspect cookie security attributes (HttpOnly, Secure, SameSite).",
      "Generate letter-graded executive security reports."
    ],
    "problemStatement": "Many municipal government portals operate with missing security headers, outdated SSL ciphers, and insecure session cookies, exposing citizens to man-in-the-middle attacks.",
    "whySuitableForYou": "This project demonstrates your intermediate skills in automated security scanning, HTTP protocol analysis, SSL/TLS configuration auditing, and executive reporting.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because automated security posture auditing provides actionable intelligence to harden civic digital infrastructure against cyber threats.",
    "evaluationApproach": "The auditor will be evaluated by comparing automated security scan grades against manual penetration test findings across 20 public e-governance websites.",
    "defendingYourChoice": [
      "I identified that many municipal government portals operate with missing security headers, outdated ssl ciphers, and insecure session cookies, exposing citizens to man-in-the-middle attacks represents a critical operational gap in real-world deployments.",
      "The project applies Python, requests to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-5",
    "title": "Pharmaceutical Supply Chain QR Verification & Anti-Counterfeit System",
    "description": "A cryptographic anti-counterfeit system generating digital signatures on pharmaceutical packages, allowing pharmacy workers to verify authenticity via mobile QR scans.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "TypeScript",
      "Express",
      "qrcode",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?"
    ],
    "milestones": [
      "Build RSA digital signature generation engine for drug batches.",
      "Implement QR code payload format generator.",
      "Create public verification API endpoint.",
      "Add counterfeit scan location flagging."
    ],
    "problemStatement": "Counterfeit medications infiltrate pharmaceutical supply chains because visual package inspection cannot detect sophisticated fake packaging.",
    "whySuitableForYou": "This project showcases your intermediate technical skill in public-key cryptography, digital signatures, QR code payload design, and secure API verification.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because cryptographic pharmaceutical verification directly combats counterfeit drug distribution and protects public safety.",
    "evaluationApproach": "System security will be evaluated by demonstrating that signature verification fails on tampered drug batch numbers or forged public keys.",
    "defendingYourChoice": [
      "I identified that counterfeit medications infiltrate pharmaceutical supply chains because visual package inspection cannot detect sophisticated fake packaging represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, TypeScript to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-6",
    "title": "Banking & Payment Card Data Secure Erasure Utility",
    "description": "A storage sanitization tool that overwrites residual payment card data and financial records on decommissioned server drives according to DoD 5220.22-M sanitization standards.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "C",
      "POSIX File I/O",
      "OpenSSL"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Implement 3-pass sanitization algorithm (zeroes, ones, random bytes).",
      "Flush OS disk write caches after each pass.",
      "Obfuscate and un-link file metadata pointers.",
      "Generate cryptographic wipe verification certificates."
    ],
    "problemStatement": "Financial institutions replacing old server hard drives risk catastrophic data leaks if deleted payment records remain recoverable using raw disk forensics tools.",
    "whySuitableForYou": "This project demonstrates your intermediate understanding of low-level disk I/O, file system data persistence, data sanitization standards, and forensic security.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because certified storage sanitization software is mandatory for financial data compliance (PCI-DSS) prior to hardware disposal.",
    "evaluationApproach": "Sanitization effectiveness will be evaluated by attempting raw disk sector recovery of wiped test files using forensic recovery utilities (e.g. TestDisk, Autopsy).",
    "defendingYourChoice": [
      "I identified that financial institutions replacing old server hard drives risk catastrophic data leaks if deleted payment records remain recoverable using raw disk forensics tools represents a critical operational gap in real-world deployments.",
      "The project applies C, POSIX File I/O to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-7",
    "title": "Mobile Money Agent Transaction MFA Server",
    "description": "A multi-factor authentication (MFA) server issuing and validating Time-Based One-Time Passwords (TOTP) to authorize high-value cash-out requests at mobile money agent points.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "intermediate",
    "suggestedStack": [
      "Node.js",
      "speakeasy",
      "Express",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 12,
    "timeframeLabel": "10-12 weeks (~2.5-3 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Walk me through how rate-limiting algorithms (such as Token Bucket and Leaky Bucket) protect backend APIs against traffic spikes and denial-of-service abuse.",
      "Explain how QR code payload formats and barcode data scanning pipelines decode binary information efficiently."
    ],
    "milestones": [
      "Implement TOTP secret key generation and QR code provisioning.",
      "Build 6-digit TOTP verification endpoint with clock drift tolerance.",
      "Add rate limiting and account lockout on failed MFA attempts.",
      "Store encrypted TOTP secret keys in database."
    ],
    "problemStatement": "Mobile money agent fraud thrives on weak single-factor PIN authentication, enabling rogue agents to execute unauthorized withdrawals from customer accounts.",
    "whySuitableForYou": "This project highlights your intermediate security engineering capabilities in multi-factor authentication protocols (RFC 6238 TOTP), rate limiting, and secret key protection.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because multi-factor authentication infrastructure significantly reduces unauthorized account cash-out fraud in mobile money networks.",
    "evaluationApproach": "Server security will be evaluated by testing TOTP token window expiration accuracy, clock drift resilience, and brute-force lockout protections.",
    "defendingYourChoice": [
      "I identified that mobile money agent fraud thrives on weak single-factor pin authentication, enabling rogue agents to execute unauthorized withdrawals from customer accounts represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, speakeasy to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-8",
    "title": "Open-Source Financial Inclusion API Static Security Analyzer",
    "description": "A static application security testing (SAST) tool that parses Python and JavaScript financial codebases, detecting hardcoded credentials, SQL injection risks, and insecure crypto usage.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "ast",
      "Regex",
      "HTML/CSS"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "How do spatial data structures (such as R-Trees) index geospatial coordinates for fast radius and geofence proximity queries?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Build Python AST (Abstract Syntax Tree) parser identifying dangerous functions.",
      "Implement regular expression secret key scanners.",
      "Create vulnerability rule engine mapping findings to OWASP API Top 10.",
      "Generate interactive HTML security audit reports."
    ],
    "problemStatement": "Fintech startups building financial inclusion APIs often deploy code containing hardcoded secret keys and un-sanitized database queries due to lack of automated SAST tools.",
    "whySuitableForYou": "This project demonstrates advanced technical sophistication in static code analysis, Abstract Syntax Tree (AST) parsing, vulnerability rule engineering, and DevSecOps.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because automated static application security testing tools help developers fix critical vulnerabilities prior to deployment.",
    "evaluationApproach": "Analyzer accuracy will be evaluated by measuring detection precision and recall against a benchmark suite of intentionally vulnerable financial codebases.",
    "defendingYourChoice": [
      "I identified that fintech startups building financial inclusion apis often deploy code containing hardcoded secret keys and un-sanitized database queries due to lack of automated sast tools represents a critical operational gap in real-world deployments.",
      "The project applies Python, ast to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-9",
    "title": "Rural Telemedicine Network Anomaly Detection System",
    "description": "A network intrusion detection system (NIDS) utilizing machine learning anomaly detection to inspect packet traffic on rural telemedicine networks, flagging unauthorized access attempts.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Python",
      "scapy",
      "scikit-learn",
      "IsolationForest"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain asynchronous request handling and event loops in modern Python web frameworks like FastAPI.",
      "Explain how JSON Web Token (JWT) authentication works and why refresh token rotation is necessary for API security.",
      "Explain how feature scaling, cross-validation, and metrics like precision and recall evaluate machine learning models on tabular datasets.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services."
    ],
    "milestones": [
      "Capture raw network traffic packets using Scapy.",
      "Extract network flow features (packet size, protocol, connection rate).",
      "Train Isolation Forest unsupervised anomaly detection model.",
      "Trigger real-time alert notifications on suspicious flows."
    ],
    "problemStatement": "Rural telemedicine networks connecting remote clinics lack dedicated security teams, making them vulnerable to unnoticed network intrusions and ransomware propagation.",
    "whySuitableForYou": "This project showcases advanced engineering capability in network packet analysis, real-time feature extraction, and machine learning anomaly detection for cyber defense.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because securing rural telemedicine infrastructure against cyber intrusions protects sensitive clinical operations and patient privacy.",
    "evaluationApproach": "NIDS performance will be evaluated by measuring anomaly detection accuracy (ROC-AUC) and false positive rates on benchmark intrusion datasets (e.g., NSL-KDD).",
    "defendingYourChoice": [
      "I identified that rural telemedicine networks connecting remote clinics lack dedicated security teams, making them vulnerable to unnoticed network intrusions and ransomware propagation represents a critical operational gap in real-world deployments.",
      "The project applies Python, scapy to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-10",
    "title": "National e-ID & Digital Signature PKI Verification Gateway",
    "description": "A Public Key Infrastructure (PKI) verification gateway validating national e-ID digital signatures, checking X.509 certificate chains, and querying OCSP servers for revocation status.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Java",
      "Spring Boot",
      "Bouncy Castle",
      "PostgreSQL"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain relational database indexing strategies and how foreign key constraints maintain data integrity.",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems."
    ],
    "milestones": [
      "Build X.509 certificate chain validation engine using Bouncy Castle.",
      "Implement Online Certificate Status Protocol (OCSP) query client.",
      "Create digital signature verification REST API.",
      "Add CRL caching and revocation log tracking."
    ],
    "problemStatement": "Government agencies accepting digitally signed electronic documents struggle to verify digital certificate revocation status in real time, exposing portals to expired key fraud.",
    "whySuitableForYou": "This project demonstrates advanced technical depth in enterprise Java cryptography, Public Key Infrastructure (PKI) standards, X.509 certificate handling, and OCSP protocols.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because PKI digital signature verification infrastructure is essential for legal digital government services and e-ID authentication.",
    "evaluationApproach": "Gateway reliability will be evaluated by testing certificate chain validation accuracy and measuring OCSP verification response times under high concurrent requests.",
    "defendingYourChoice": [
      "I identified that government agencies accepting digitally signed electronic documents struggle to verify digital certificate revocation status in real time, exposing portals to expired key fraud represents a critical operational gap in real-world deployments.",
      "The project applies Java, Spring Boot to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-11",
    "title": "Privacy-Preserving Financial Creditworthiness ZKP Verifier",
    "description": "A zero-knowledge proof (ZKP) verification system allowing micro-loan applicants to prove their income or credit score satisfies minimum requirements without revealing exact financial values.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "Node.js",
      "circom",
      "snarkjs",
      "Express"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?",
      "Explain how asynchronous event-driven architecture prevents blocking I/O operations in high-concurrency systems.",
      "How do defensive input validation and data sanitization protect applications against injection vulnerabilities?"
    ],
    "milestones": [
      "Design ZKP arithmetic circuit in Circom for income range validation.",
      "Generate zero-knowledge proof and public signals on client.",
      "Build backend verifier verifying zk-SNARK proofs.",
      "Demonstrate complete financial privacy preservation."
    ],
    "problemStatement": "Loan applicants are forced to share sensitive full bank statements with micro-finance lenders, exposing personal financial transactions to data misuse.",
    "whySuitableForYou": "This project showcases cutting-edge cryptographic engineering capabilities in Zero-Knowledge Proofs (zk-SNARKs), arithmetic circuit design (Circom), and privacy-preserving protocol implementation.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because Zero-Knowledge Proof application in financial technology represents a state-of-the-art research frontier.",
    "evaluationApproach": "The system will be evaluated by measuring client-side proof generation time, proof file size, and backend verification speed (target < 100ms).",
    "defendingYourChoice": [
      "I identified that loan applicants are forced to share sensitive full bank statements with micro-finance lenders, exposing personal financial transactions to data misuse represents a critical operational gap in real-world deployments.",
      "The project applies Node.js, circom to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  },
  {
    "id": "security-fyp-12",
    "title": "Central Bank Micro-Payment Encryption HSM Interface Gateway",
    "description": "A cryptographic hardware security module (HSM) gateway interface in C/C++ providing PKCS#11 API abstractions for secure micro-payment transaction signing and key management.",
    "category": "security",
    "projectType": "final-year",
    "skillLevel": "advanced",
    "suggestedStack": [
      "C++",
      "PKCS#11",
      "OpenSSL",
      "Make"
    ],
    "estimatedTimeframeWeeks": 14,
    "timeframeLabel": "12-14 weeks (~3 months)",
    "learningPrompts": [
      "Explain manual memory management, pointer arithmetic, and allocation trade-offs in systems programming.",
      "What are the structural differences between symmetric encryption (e.g. AES-GCM) and asymmetric cryptography (e.g. RSA) for data protection?",
      "Explain the HTTP request-response lifecycle and how RESTful API design principles structure web services.",
      "What are the key security principles when storing session state in browser storage versus HTTP-only cookies?"
    ],
    "milestones": [
      "Implement PKCS#11 standard interface wrapper functions.",
      "Build secure key generation, storage, and usage boundaries.",
      "Perform AES-GCM and RSA cryptographic operations in isolated memory.",
      "Add secure audit logging for all cryptographic key operations."
    ],
    "problemStatement": "Central bank micro-payment switches require Hardware Security Modules (HSMs) for transaction signing, but developers lack software interface abstractions to integrate HSMs safely into payment codebases.",
    "whySuitableForYou": "This project demonstrates top-tier software engineering mastery in low-level cryptographic hardware standards (PKCS#11), memory safety, and secure payment processing architecture.",
    "whySupervisorMightApprove": "This topic is likely to be viewed favorably because HSM interface gateways provide critical security abstractions for central bank micro-payment switches and high-value financial transaction processing.",
    "evaluationApproach": "Gateway performance will be evaluated by measuring cryptographic signing throughput (signatures/sec) and testing memory protection against key extraction attempts.",
    "defendingYourChoice": [
      "I identified that central bank micro-payment switches require hardware security modules (hsms) for transaction signing, but developers lack software interface abstractions to integrate hsms safely into payment codebases represents a critical operational gap in real-world deployments.",
      "The project applies C++, PKCS#11 to implement a robust, tailored architecture that addresses this specific technical challenge directly.",
      "The scope focuses specifically on core domain functionality and verifiable performance metrics rather than attempting to build an unmanageable enterprise monolithic suite."
    ]
  }
];
