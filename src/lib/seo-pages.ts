export const SITE_URL = 'https://norcat-catalyst-ground.lovable.app';

export interface SearchPage {
  path: string;
  title: string;
  description: string;
  label: string;
}

export const searchPages: SearchPage[] = [
  { path: '/', label: 'Home', title: 'NORCAT Innovation | Startup Support in Sudbury & Northern Ontario', description: 'Build and grow your technology venture with NORCAT Innovation in Sudbury. Explore startup mentorship, funding, AI adoption, and real-world technology testing.' },
  { path: '/about', label: 'About', title: 'About NORCAT Innovation | Northern Ontario Startup Support', description: 'Meet the innovation engine supporting founders in Sudbury and Northern Ontario through mentorship, industry connections, and technology commercialization.' },
  { path: '/about/our-team', label: 'Our Team', title: 'Our Team & Mentor Network | NORCAT Innovation', description: 'Meet the NORCAT Innovation team and mentor network supporting entrepreneurs, technology ventures, and growing businesses across Northern Ontario.' },
  { path: '/mining-innovation', label: 'Mining Innovation', title: 'Mining Technology Innovation & Testing | NORCAT', description: 'Explore real-world mining technology testing, industry partnerships, and commercialization support at the NORCAT Underground Centre in Sudbury.' },
  { path: '/ecosystem', label: 'Ecosystem', title: 'Northern Ontario Innovation Ecosystem | NORCAT Innovation', description: 'Explore the founders, industry partners, research organizations, and funding networks helping technology ventures grow in Northern Ontario.' },
  { path: '/ecosystem/sudbury', label: 'Sudbury Directory', title: 'Sudbury Business & Innovation Directory | NORCAT Innovation', description: 'Find Sudbury organizations supporting business growth, funding, education, and research. Filter the ecosystem directory by category, services, and sector.' },
  { path: '/impact', label: 'Impact', title: 'Startup & Innovation Impact in Sudbury | NORCAT Innovation', description: 'Explore NORCAT Innovation portfolio highlights and ecosystem metrics, including venture growth, investment, jobs, and technology commercialization.' },
  { path: '/events', label: 'Events', title: 'Startup Events & Venture North PITCH | NORCAT Innovation', description: 'Discover NORCAT Innovation conferences, workshops, and pitch events in Sudbury, including Venture North PITCH, plus highlights from past events.' },
  { path: '/apply', label: 'Become a Client', title: 'Become a NORCAT Innovation Client | Startup Support', description: 'Connect with NORCAT Innovation and complete the discovery document to explore support for your startup, technology project, or growing business.' },
  { path: '/validate-idea', label: 'Validate Your Idea', title: 'Validate Your Startup Idea | NORCAT Innovation', description: 'Explore your startup idea with NORCAT Innovation and identify practical next steps for technology development, business growth, and commercialization.' },
  { path: '/contact', label: 'Contact', title: 'Contact NORCAT Innovation | Sudbury, Ontario', description: 'Contact NORCAT Innovation at 1545 Maley Drive in Sudbury to discuss startup support, funding, mentorship, technology testing, and program opportunities.' },
  { path: '/privacy', label: 'Privacy Policy', title: 'Privacy Policy | NORCAT Innovation', description: 'Read how NORCAT Innovation collects, uses, and safeguards information provided through its website, programs, and services, and how to contact the team.' },
  { path: '/programs', label: 'Programs', title: 'Startup Programs & Business Support | NORCAT Innovation', description: 'Explore NORCAT Innovation programs for entrepreneurs, including venture growth, mentorship, capital navigation, and technology commercialization support.' },
  { path: '/programs/venture-growth-services', label: 'Venture Growth Services', title: 'Venture Growth Services for Startups | NORCAT Innovation', description: 'Move your technology venture forward with NORCAT Innovation support for business planning, market readiness, commercialization, and growth.' },
  { path: '/programs/mentorship-services', label: 'Mentorship Services', title: 'Startup Mentorship in Northern Ontario | NORCAT Innovation', description: 'Connect with experienced mentors through NORCAT Innovation to work through startup challenges, strengthen your business, and move your venture forward.' },
  { path: '/programs/capital-navigation', label: 'Capital Navigation', title: 'Startup Funding & Capital Navigation | NORCAT Innovation', description: 'Navigate grants, investment, and capital opportunities with NORCAT Innovation. Find funding pathways suited to your technology venture and stage of growth.' },
  { path: '/programs/ai-seminar-series', label: 'AI Innovation Alliance', title: 'Greater Sudbury AI Innovation Alliance | NORCAT Innovation', description: 'Join the regional AI workshop and adoption series for business operators and technical builders. Explore practical AI use cases and regional grant support.' },
  { path: '/funding', label: 'Funding', title: 'Startup Grants & Funding in Northern Ontario | NORCAT Innovation', description: 'Explore NORCAT Innovation funding opportunities for Northern Ontario technology businesses, including AI adoption support and the Sudbury Catalyst Fund.' },
  { path: '/funding/sudbury-catalyst-fund', label: 'Sudbury Catalyst Fund', title: 'Sudbury Catalyst Fund | Startup Investment | NORCAT Innovation', description: 'Learn about the Sudbury Catalyst Fund and how it supports promising technology ventures through investment and connections in the Sudbury ecosystem.' },
  { path: '/funding/innovation-acceleration-program', label: 'Innovation Acceleration Program', title: 'Innovation Acceleration Program (IAP) | NORCAT Innovation', description: 'Explore the Innovation Acceleration Program, including eligibility, application steps, and support for developing and commercializing innovative technology.' },
  { path: '/funding/regional-ai-program', label: 'Regional AI Program', title: 'Regional AI Initiative (RAII) Grant | NORCAT Innovation', description: 'Explore RAII support for eligible Northern Ontario businesses adopting AI, with matching funding and advisor support for software and integration projects.' },
  { path: '/funding/investor-hub', label: 'Investor Hub', title: 'Investor Hub & Venture North PITCH | NORCAT Innovation', description: 'Connect with Northern Ontario technology ventures through NORCAT Innovation. Explore investor opportunities and the Venture North PITCH competition.' },
  { path: '/mining/norcat-underground', label: 'NORCAT Underground Centre', title: 'NORCAT Underground Centre | Mining Technology Testing', description: 'Test and demonstrate mining technologies at the NORCAT Underground Centre in Sudbury, a real-world environment for development and commercialization.' },
  { path: '/mining/core5', label: 'Core5', title: 'Core5 | Mobility Technology Development | NORCAT Innovation', description: 'Explore Core5 support for mobility technology development, testing, and commercialization through regional industry, research, and innovation partnerships.' },
  { path: '/mining/critical-industrial-tech', label: 'Critical Industrial Technologies', title: 'Critical Industrial Technologies (CIT) | NORCAT Innovation', description: 'Explore NORCAT as a Critical Industrial Technologies development site, supporting prototype testing, technology validation, and real-world industrial proof.' },
  { path: '/mining/labs', label: 'Innovation Space', title: 'Innovation Labs & Startup Workspace | NORCAT Innovation', description: 'Explore labs, prototyping facilities, and workspace at NORCAT headquarters in Sudbury for entrepreneurs developing and commercializing new technologies.' },
  { path: '/partners/rogers-cybersecure', label: 'Rogers Cybersecure Catalyst', title: 'Rogers Cybersecure Catalyst Partnership | NORCAT Innovation', description: 'Explore NORCAT Innovation and Rogers Cybersecure Catalyst programming supporting cybersecurity awareness, capabilities, and business resilience.' },
  { path: '/insights/news', label: 'News', title: 'Startup & Technology News | NORCAT Innovation', description: 'Read the latest NORCAT Innovation news on startup investment, technology partnerships, program announcements, and innovation in Northern Ontario.' },
  { path: '/insights/success-stories', label: 'Success Stories', title: 'Northern Ontario Startup Success Stories | NORCAT Innovation', description: 'Discover technology ventures supported by NORCAT Innovation and their journeys in mining, health technology, AI, industrial innovation, and business growth.' },
  { path: '/insights/reports', label: 'Reports', title: 'Innovation Insights & Reports | NORCAT Innovation', description: 'Explore NORCAT Innovation reports and insights on technology ventures, startup growth, and the innovation ecosystem in Sudbury and Northern Ontario.' },
];

export function normalizeSearchPath(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

export function getSearchPage(path: string) {
  return searchPages.find(page => page.path === normalizeSearchPath(path));
}