import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Play, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import SectionEyebrow from '@/components/SectionEyebrow';
import EcosystemDashboard from '@/components/dashboard/EcosystemDashboard';
import { StoryModal, storyData } from '@/components/StoryModal';


import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

