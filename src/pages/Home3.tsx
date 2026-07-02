import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Calendar, MapPin, Users, Rocket, Building2, Handshake, Sparkles, Quote, Trophy, Star, TrendingUp, Activity, Cpu, Leaf, Brain, Stethoscope, Cog, ChevronRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import SectionEyebrow from '@/components/SectionEyebrow';
import signatureLines from '@/assets/signature-lines.png';
import miningUndergroundHero from '@/assets/mining-underground-hero.jpg';
import ctaPhoto4 from '@/assets/cta-photo-4.jpg';
import ctaPhoto5 from '@/assets/cta-photo-5.png';

import ctaPhoto1 from '@/assets/cta-photo-1.jpg';
import ctaPhoto2 from '@/assets/cta-photo-2.jpg';
import ctaPhoto3 from '@/assets/cta-photo-3.jpg';
import loopxTeam from '@/assets/loopx-team.jpg';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import norcatHalfLogoSquare from '@/assets/norcat-half-logo-square-v2.png.asset.json';
import heroModel from '@/assets/hero-model.png.asset.json';
import founderSpotlight from '@/assets/underground-centre-v3.png.asset.json';
import norcatWhiteLogo from '@/assets/logos/norcat-white.png';


// Portfolio logos
import turnkeyLogo from '@/assets/logos/turnkey.png';
import rogersLogo from '@/assets/logos/rogers.png';
import hardlineLogo from '@/assets/logos/hardline.png';
import waiveLogo from '@/assets/logos/waive.png';
import symxLogo from '@/assets/logos/symx.png';
import codalioLogo from '@/assets/logos/codalio.png';
import flosonicsLogo from '@/assets/logos/flosonics.png';
import kinmetrixLogo from '@/assets/logos/kinmetrix.png';
import loopxLogo from '@/assets/logos/loopx.png';
import circuitiqLogo from '@/assets/logos/circuitiq.webp';
import rephealthLogo from '@/assets/logos/rephealth.png';
import rnaLogo from '@/assets/logos/rna-diagnostics.png';

// Partner logos
import fednorLogo from '@/assets/logos/fednor.png';
import ontarioLogo from '@/assets/logos/ontario.png';
import sudburyLogo from '@/assets/logos/sudbury.png';
import noaLogoAsset from '@/assets/logos/noa.png.asset.json';

const noaLogo = noaLogoAsset.url;

const FONT = "'Open Sans', system-ui, sans-serif";

const audiences = [
  { icon: Rocket, title: 'Founders', body: 'World-class mentorship, hands-on support, and access to the capital and infrastructure to scale your tech-enabled, IP-driven startup.' },
  { icon: Building2, title: 'Industry', body: 'Test, validate, and de-risk new technologies in the only operating mine on the planet built for innovation: the NORCAT Underground Centre.' },
  { icon: Handshake, title: 'Investors', body: 'Discover high-potential companies across mining tech, clean tech, AI, and health sciences - all curated through the NORCAT pipeline.' },
];

const highlights = [
  { icon: Sparkles, label: 'Engage a Mentor', desc: 'Work 1-on-1 with experienced tech advisors to bulletproof your business model, refine your IP strategy, and capture initial micro-grants.', img: circuitiqTeam },
  { icon: Cpu, label: 'Validate Your Solution', desc: 'De-risk your product and build market validation in our specialized software labs, prototyping facilities, and active field-testing environments.', img: ctaPhoto2 },
  { icon: TrendingUp, label: 'Navigate Investment', desc: 'Get dedicated support navigating dilutive venture capital, matching program grants, and regional funding opportunities.', img: loopxTeam },
];

const stats = [
  { stat: '$75M+', label: 'Capital raised by NORCAT-backed startups' },
  { stat: '150+', label: 'Startups supported across Northern Ontario' },
  { stat: '2,000+', label: 'Jobs created across the ecosystem' },
];

const sectors = [
  { icon: Cpu, label: 'Mining Tech' },
  { icon: Leaf, label: 'Clean Tech' },
  { icon: Brain, label: 'AI / ML' },
  { icon: Stethoscope, label: 'Med Tech' },
  { icon: Cog, label: 'Robotics' },
  { icon: Rocket, label: 'and more' },
];

const testimonials = [
  {
    quote: "My first PITCH with NORCAT Innovation was a night I'll never forget. The investment that followed changed everything. Since then, our company has relocated to Sudbury, secured $2M in seed funding, and today our team has grown from 7 to 60 in just four years.",
    name: 'Luke Begley',
    role: 'Founder, CircuitIQ',
  },
  {
    quote: "Sudbury's been amazing; we've already raised over $300,000 in angel investment and expect a match from the Sudbury Catalyst Fund, which brings us to over half a million-and we haven't even moved in yet.",
    name: 'Ryan Marshall',
    role: 'COO, Myomar Molecular',
  },
  {
    quote: 'The exceptional mentorship, guidance, and unwavering support from the NORCAT team were instrumental in refining our business strategy. We have since expanded our team and extended our reach across Canada.',
    name: 'Karen Hastie',
    role: 'Founder/CEO, Chamber Perks App',
  },
  {
    quote: "It surprised me how much high technology there actually is in Sudbury… it is possible to be successful in building a technology company in Northern Ontario, which I think a lot of people don't realize.",
    name: 'Matthew Gougeon',
    role: 'CEO and Founder, Perspic',
  },
  {
    quote: "We had a lot of references for work through the Fortin Discovery Lab and NORCAT, and such strong support turned out to be invaluable, especially when first getting started! You need get involved with your local ecosystem.",
    name: 'Stephen Podrucky',
    role: 'CEO and Founder, Podco',
  },
  {
    quote: "At some point I realised the need to shake hands of the people in the mining sector, and that's more than just a virtual conversation. NORCAT was the place that we find a very high density of end users, companies, and a network that has helped a lot to accelerate the process from having an idea to having a technology.",
    name: 'Mashoud Aali',
    role: 'Founder and CEO, Scient Analytic',
  },
  {
    quote: "As a nurse at Health Sciences North, I got to see firsthand what worked, what didn't, and where the gaps were, while support from NORCAT helped me navigate the startup landscape, opened doors and remained incredibly supportive.",
    name: 'Avalon Lupini',
    role: 'CEO and Founder, SmartyPrints',
  },
  {
    quote: "I got involved with NORCAT as a really passionate business owner, but I was running on a dream, a positive attitude, and a belief I was going to get this done. However, once I was paired with Mr. Peter Dal Bianco, things really changed for my company. I don't think I'd be where I am today without the mentorship of Peter.",
    name: 'Sheri Tomchick',
    role: 'CEO and Founder, PlanA & StaffStat',
  },
  {
    quote: "From a small business perspective, being part of a larger high-end innovation centre and team is invaluable to a start-up innovation firm. Working with NORCAT and its connections, has taught us about what we don't know, and we learned how to do what we don't know.",
    name: 'Clara Steele',
    role: 'Co-Founder, TesMan',
  },
  {
    quote: "Support from NORCAT was critical in our decision to relocate our company to Sudbury, and Venture North PITCH really launched us into the ecosystem that led us to our first angel investor.",
    name: 'Tabassum Pasha',
    role: 'Co-Founder, Waive',
  },
];

const portfolio = [
  { name: 'Turnkey', logo: turnkeyLogo }, { name: 'Rogers', logo: rogersLogo },
  { name: 'Hard-Line', logo: hardlineLogo }, { name: 'Waive', logo: waiveLogo },
  { name: 'Symx AI', logo: symxLogo }, { name: 'Codalio', logo: codalioLogo },
  { name: 'Flosonics', logo: flosonicsLogo }, { name: 'Kinmetrix', logo: kinmetrixLogo },
  { name: 'LoopX', logo: loopxLogo }, { name: 'CircuitIQ', logo: circuitiqLogo },
  { name: 'Rep Health', logo: rephealthLogo }, { name: 'RNA Diagnostics', logo: rnaLogo },
];

const partners = [
  { name: 'FedNor', logo: fednorLogo },
  { name: 'Ontario', logo: ontarioLogo },
  { name: 'Northern Ontario Angels', logo: noaLogo },
  { name: 'City of Greater Sudbury', logo: sudburyLogo },
  { name: 'Rogers', logo: rogersLogo },
];

// Style tokens - NORCAT Innovation Brand V1.0 (2026)
const NAVY = '#001A4D';          // Deep Navy
const NAVY_SURFACE = '#001233';  // deeper navy surface
const NAVY_ELEV = '#002766';     // elevated navy card
const BLUE = '#003DA5';          // Innovation Blue
const SKY = '#2F6FD6';           // Sky
const TEAL = '#00B398';          // Momentum Teal (accent)
const MINT = '#7FE3D3';          // Mint
const PAPER = '#F2F3F6';         // Paper (surface)
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const SIGNATURE_GRADIENT = `linear-gradient(135deg, ${TEAL} 0%, ${BLUE} 55%, ${NAVY} 100%)`;

