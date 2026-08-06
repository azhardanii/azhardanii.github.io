// FIREBASE CONFIGURATION ADAPTER FOR SYAUQI'S PORTFOLIO & CMS
// -------------------------------------------------------------
// Paste your actual Firebase API credentials from Firebase Console here:

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDl1veqZPTiMin0NuutrdsXcvp9nKAjTJY",
  authDomain: "syauqi-portfolio.firebaseapp.com",
  projectId: "syauqi-portfolio",
  storageBucket: "syauqi-portfolio.firebasestorage.app",
  messagingSenderId: "596167413672",
  appId: "1:596167413672:web:5f127ebc039bc868d7d79d",
  measurementId: "G-VQM4RSQQPB"
};

// Check if Firebase is configured with real API keys
window.isFirebaseConfigured = function () {
  return window.FIREBASE_CONFIG &&
    window.FIREBASE_CONFIG.apiKey &&
    window.FIREBASE_CONFIG.apiKey.length > 5;
};

// Default Fallback Projects Data (Includes rich demonstration thumbnails)
window.DEFAULT_PROJECTS = [
  {
    id: "proj_1",
    title: "DIGITAL INVITATION & EVENT SAAS",
    subtitle: "Web Invitation SaaS Platform",
    category: "saas",
    badge: "SAAS PLATFORM",
    metric: "+180% Sales Conversion",
    problemSolution: "Problem: Old client website took 10+ seconds to load on mobile and crashed during high-traffic sales events. Solution: Rebuilt architecture with React & Tailwind CSS. Added instant WhatsApp order routing and automated guest analytics.",
    tags: ["React / Next.js", "Tailwind CSS", "Supabase", "Node.js"],
    demoUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    updatedAt: Date.now()
  },
  {
    id: "proj_2",
    title: "SEKOLAH WFA PLATFORM & COMMUNITY HUB",
    subtitle: "Digital Learning & Membership Portal",
    category: "website",
    badge: "MEMBERSHIP PLATFORM",
    metric: "10,000+ Active Students",
    problemSolution: "Problem: Needed a unified high-speed platform to handle student course access, live webinars, and automated community onboarding. Solution: Developed custom web hub with interactive dashboards and automated student progress tracking.",
    tags: ["Webflow", "React", "Python", "Tools AI Integration"],
    demoUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    updatedAt: Date.now()
  },
  {
    id: "proj_3",
    title: "AUTOMATED AI CONTENT ENGINE & WORKFLOW",
    subtitle: "Custom Tools AI Pipeline",
    category: "automation",
    badge: "TOOLS AI WORKFLOW",
    metric: "Saved 25+ Hrs/Week",
    problemSolution: "Problem: Client spent hours manually drafting, re-formatting, and posting social media content across platforms. Solution: Built an automated Tools AI workflow integrating Claude 3.5 API and n8n to generate, schedule, and publish content hands-free.",
    tags: ["Claude 3.5 API", "Python", "n8n", "Make"],
    demoUrl: "https://example.com",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    updatedAt: Date.now()
  }
];

// Default Fallback Certificates Data (Includes rich demonstration images)
window.DEFAULT_CERTIFICATES = [
  {
    id: "cert_1",
    title: "FULL-STACK WEB DEVELOPMENT MASTERY",
    issuer: "Digital Engineering Institute",
    issueDate: "2024",
    description: "Advanced certification covering modern full-stack web engineering, React architecture, database optimization, and cloud deployment.",
    credentialUrl: "https://credential-link.com",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    updatedAt: Date.now()
  },
  {
    id: "cert_2",
    title: "TOOLS AI INTEGRATION & WORKFLOW ENGINEERING",
    issuer: "AI Automation Academy",
    issueDate: "2024",
    description: "Specialized accreditation in deploying Large Language Models (LLMs), prompt engineering, and automated API workflows.",
    credentialUrl: "https://credential-link.com",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    updatedAt: Date.now()
  },
  {
    id: "cert_3",
    title: "HIGH-CONVERTING UI/UX & WEB DESIGN",
    issuer: "Design Systems Guild",
    issueDate: "2023",
    description: "Professional certification focused on conversion-centered web design, mobile accessibility, and interactive web performance.",
    credentialUrl: "https://credential-link.com",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    updatedAt: Date.now()
  }
];
