import { Layout } from '@/components/Layout';
import SectionEyebrow from '@/components/SectionEyebrow';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Users,
  Shield,
  Target,
  Handshake,
  X,
  ExternalLink,
  CheckCircle,
  Quote,
} from 'lucide-react';

import signatureLines from '@/assets/signature-lines.png';
import mentorshipHeroBg from '@/assets/mentorship-hero-bg.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// Mentor headshots
import tomFortinImg from '@/assets/mentors/tom-fortin.png';
import cathyNadjiwonImg from '@/assets/mentors/cathy-nadjiwon.png';
import peterDalBiancoImg from '@/assets/mentors/peter-dal-bianco.png';
import jamieDewarImg from '@/assets/mentors/jamie-dewar.png';
import bernieAhoImg from '@/assets/mentors/bernie-aho.png';
import barbWardDagnonImg from '@/assets/mentors/barb-ward-dagnon.png';
import jeffFullerImg from '@/assets/mentors/jeff-fuller.png';
import dennisReichImg from '@/assets/mentors/dennis-reich.jpg';
import donDuvalImg from '@/assets/mentors/don-duval.jpg';
import ianLaneImg from '@/assets/mentors/ian-lane.png';
import ehsanMirdamadiImg from '@/assets/mentors/ehsan-mirdamadi.png';
import emilyMantleImg from '@/assets/mentors/emily-mantle.png';
import sheriTomchickImg from '@/assets/mentors/sheri-tomchick.png';
import chadPallopsonImg from '@/assets/mentors/chad-pallopson.png';
import michaelDolinarImg from '@/assets/mentors/michael-dolinar.png';
import davidPasiekaImg from '@/assets/mentors/david-pasieka.png';
import peyvandMelatiImg from '@/assets/mentors/peyvand-melati.png';

// ── Brand tokens (mirrors Home2 / About) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";


export default MentorshipServices;
