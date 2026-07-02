import { Link } from 'react-router-dom';

import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Compass,
  Zap,
  Quote,
  DollarSign,
} from 'lucide-react';

import { Layout } from '@/components/Layout';
import SectionEyebrow from '@/components/SectionEyebrow';
import { ServicesExplorer } from '@/components/ServicesExplorer';
import lukeBegleyPhoto from '@/assets/testimonials/luke-begley.png';
import signatureLines from '@/assets/signature-lines.png';
import circuitiqTeam from '@/assets/circuitiq-team.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About / Home2) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";


const programStructure = [
  { phase: '01', title: 'Onboarding', description: 'Deep dive into your business, assign your advisor, and create a tailored growth plan.' },
  { phase: '02', title: 'Build & Validate', description: 'Work with your mentorship team on product-market fit and early traction.' },
  { phase: '03', title: 'Scale & Raise', description: 'Focus on growth metrics, team building, and fundraising preparation.' },
  { phase: '04', title: 'Ongoing Support', description: 'Continued access to network, resources, and advisor support as you scale.' },
];


const differentiators = [
  { icon: Compass, title: 'Hands-On, Not Hands-Off', description: "We roll up our sleeves and work alongside you. This isn't passive mentorship - it's active partnership in your success." },
  { icon: Target, title: 'Industry-Connected', description: 'Deep relationships with mining, industrial, and technology sectors mean real customer introductions, not just advice.' },
  { icon: Zap, title: 'Northern Advantage', description: "Access to unique infrastructure like the NORCAT Underground Centre, embedded within one of Canada's most established mining ecosystems." },
];

