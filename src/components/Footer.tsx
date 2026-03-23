import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Youtube, Mail, MapPin, Phone, Send, Facebook, Instagram } from 'lucide-react';
import norcatLogoBlack from '@/assets/logos/norcat-black.png';
import signatureLines from '@/assets/signature-lines.png';
import { useState } from 'react';

const footerLinks = {
  programs: [
    { name: 'Venture Growth Services', href: '/programs/venture-growth-services' },
    { name: 'Capital Navigation', href: '/programs/capital-navigation' },
    { name: 'Non-Dilutive Funding', href: '/funding/innovation-acceleration-program' },
    { name: 'Sudbury Catalyst Fund', href: '/funding/sudbury-catalyst-fund' },
  ],
  resources: [
    { name: 'Mining Innovation', href: '/mining-innovation' },
    { name: 'Underground Centre', href: '/mining/norcat-underground' },
    { name: 'Ecosystem Map', href: '/ecosystem' },
    { name: 'Impact Dashboard', href: '/impact' },
  ],
  events: [
    { name: 'Mining Transformed', href: '/events#mining-transformed' },
    { name: 'Venture North PITCH', href: '/events#venture-north' },
    { name: 'Demo Days', href: '/events#demo-days' },
    { name: 'All Events', href: '/events' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>
      {/* Signature lines - bottom left */}
      <img 
        src={signatureLines} 
        alt="" 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 w-[400px] opacity-80 pointer-events-none rotate-180"
      />

      {/* Top Section - CTA + Newsletter */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 pb-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Left - Heading */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-teal-300 mb-4 block">
              Explore More of NORCAT
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight" style={{ fontWeight: 400 }}>
              Sudbury's Regional<br />
              Innovation Centre
            </h2>
          </div>

          {/* Right - Newsletter + Social */}
          <div className="flex flex-col items-start lg:items-end gap-5">
            <span className="text-sm font-semibold tracking-widest uppercase text-white">
              Join Our Mailing List
            </span>
            <div className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-11 w-64 rounded-md border border-white/30 bg-transparent px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
              />
              <button className="h-11 w-11 rounded-md bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Send className="h-5 w-5 text-white" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="h-px bg-white/15" />
      </div>

      {/* Link Columns */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-teal-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-teal-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5">Events</h4>
            <ul className="space-y-3">
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-teal-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-teal-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 lg:px-8 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span>© {new Date().getFullYear()} NORCAT Innovation</span>
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30">Funded by the Government of Ontario</span>
            <img src={norcatLogoBlack} alt="NORCAT" className="h-6 w-auto brightness-0 invert opacity-60" />
          </div>
        </div>
      </div>
    </footer>
  );
}
