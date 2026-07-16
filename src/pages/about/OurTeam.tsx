import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Linkedin, X } from 'lucide-react';
import { team, type TeamMember } from '@/data/team';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import signatureLines from '@/assets/signature-lines.png';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
     style={{ fontFamily: FONT, color: TEAL }}>
    <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
     style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
    {children}
  </As>
);

function TeamModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  if (!member) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="rounded-2xl max-w-md w-full p-8 relative"
          style={{ background: 'white', border: '1px solid #d9dde5' }}
          initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose}
                  deleteLines: [31, 34, 65, 70, 88, 138, 141, 280, 390],
            addLines: [
              "import { team, type TeamMember } from '@/data/team';",
              "const [expandedMember, setExpandedMember] = useState<string | null>(null);",
              "{/* ───── TEAM TEASER (light) ───── */}",
              "<section className=\"py-20 md:py-32\" style={{ background: PAPER, color: NAVY }}>",
              "  <div className=\"mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10\">",
              "    <div className=\"flex flex-col md:flex-row md:items-stretch justify-between gap-8 mb-12 md:mb-16\">",
              "      <div className=\"flex-1 flex flex-col justify-center\">",
              "        <p className=\"inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5\"",
              "           style={{ fontFamily: FONT, color: TEAL }}>",
              "          <span className=\"size-1.5 rounded-full inline-block\" style={{ background: TEAL }} />",
              "          THE INNOVATION TEAM",
              "        </p>",
              "        <h2 className=\"font-black uppercase leading-[0.9] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl\"",
              "            style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>",
              "          MEET THE INNOVATION TEAM!<br /><span style={{ color: TEAL }}>&nbsp;</span>",
              "        </h2>",
              "      </div>",
              "      <p className=\"flex-1 flex items-center text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-relaxed\"",
              "         style={{ color: '#5b6478' }}>",
              "        Whether it's your first time jotting a business idea down on the back of a napkin",
              "        or you're scaling and ready to demonstrate your technology to the world,",
              "        we are here to help you scale success!&nbsp;",
              "      </p>",
              "    </div>",
              "    <div className=\"grid grid-cols-2 lg:grid-cols-4 gap-5\">",
              "      {team.map((member) => (",
              "        <div key={member.name} className=\"rounded-2xl overflow-hidden\" style={{ background: 'white', border: '1px solid #d9dde5' }}>",
              "          <div className=\"relative w-full aspect-square overflow-hidden\">",
              "            <img src={member.image} alt={member.name} className=\"w-full h-full object-cover\" />",
              "          </div>",
              "          <div className=\"p-5\">",
              "            <h3 className=\"font-black uppercase text-base md:text-lg mb-1\" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>",
              "              {member.name}",
              "            </h3>",
              "            <p className=\"text-xs font-bold uppercase tracking-[0.18em]\" style={{ color: TEAL, fontFamily: FONT }}>",
              "              {member.role}",
              "            </p>",
              "          </div>",
              "        </div>",
              "      ))}",
              "    </div>",
              "    <div className=\"mt-12 md:mt-14 flex justify-center\">",
              "      <Link",
              "        to=\"/about/our-team\"",
              "        className=\"group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm md:text-base transition-transform hover:scale-[1.02]\"",
              "        style={{ background: TEAL, color: NAVY, fontFamily: FONT }}",
              "      >",
              "        Meet the Full Team",
              "        <span className=\"inline-flex items-center justify-center size-8 rounded-full transition-colors\"",
              "              style={{ background: NAVY, color: 'white' }}>",
              "          <ArrowRight className=\"w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5\" />",
              "        </span>",
              "      </Link>",
              "    </div>",
              "  </div>",
              "</section>"
            ]
          }
        }
      }
    }
  }
}
