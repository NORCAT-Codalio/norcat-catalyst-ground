import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Youtube, Mail, MapPin, Phone, Send, Facebook, Instagram } from 'lucide-react';
import norcatLogoBlack from '@/assets/logos/norcat-black.png';
import skylineAsset from '@/assets/sudbury-skyline.png.asset.json';
import ontarioLogoAsset from '@/assets/ontario-logo.png.asset.json';
import { useState } from 'react';


const footerLinks = {
  programs: [
    { name: 'Venture Growth Services', href: '/programs/venture-growth-services' },
    { name: 'Mentorship', href: '/programs/mentorship-services' },
    { name: 'Critical Industrial Technologies', href: '/mining/critical-industrial-tech' },
    { name: 'Core5', href: '/mining/core5' },
    { name: 'Underground Centre', href: '/mining/norcat-underground' },
    { name: 'Rogers Cybersecure Catalyst', href: '/partners/rogers-cybersecure' },
    { name: 'Innovation Space', href: '/mining/labs' },
  ],
  funding: [
    { name: 'Innovation Acceleration Program', href: '/funding/innovation-acceleration-program' },
    { name: 'Regional Artificial Intelligence Program', href: '/funding/regional-ai-program' },
    { name: 'Sudbury Catalyst Fund', href: '/funding/sudbury-catalyst-fund' },
  ],
  resources: [
    { name: 'Ecosystem', href: '/ecosystem/sudbury' },
    { name: 'Impact', href: '/impact' },
    { name: 'Stories', href: '/insights/success-stories' },
    { name: 'News', href: '/insights/news' },
    { name: 'Events', href: '/events' },
  ],
  company: [
    { name: 'NORCAT.org', href: 'https://norcat.org', external: true },
    { name: 'About Us', href: '/about' },
    { name: 'Client Portal', href: '/portal/auth' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <>
      <div style={{ background: '#F2F3F6' }} className="pt-16">
        {/* Ontario Funding Banner */}
        <div className="w-full py-5 md:py-6" style={{ background: '#F2F3F6' }}>
          <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <span className="text-sm md:text-base font-bold tracking-wide" style={{ color: '#001A4D' }}>
              Funded by the Government of Ontario
            </span>
            <img
              src={ontarioLogoAsset.url}
              alt="Government of Ontario"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
        </div>
        <img src={skylineAsset.url} alt="Sudbury skyline" className="w-full h-auto block" />
      </div>
      <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>



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
          <form
            action="https://manage.kmail-lists.com/subscriptions/subscribe?a=WyGW3p&g=RMnA3j"
            method="POST"
            target="_blank"
            className="w-full flex flex-col items-start lg:items-end gap-5"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-white">
              Join Our Mailing List
            </span>
            <div className="flex items-center gap-2">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="h-11 w-64 rounded-md border border-white/30 bg-transparent px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="h-11 px-5 rounded-full inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                style={{
                  background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                  color: 'white',
                  boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 16px hsla(168, 20%, 30%, 0.15), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                }}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
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
      <nav className="container mx-auto px-4 lg:px-8 py-12" aria-label="Footer Menu">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase mb-5">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/80 hover:text-teal-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase mb-5">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/80 hover:text-teal-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Funding */}
          <div>
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase mb-5">Funding</h4>
            <ul className="space-y-3">
              {footerLinks.funding.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/80 hover:text-teal-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white text-base tracking-wider uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-teal-300 transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-white/80 hover:text-teal-300 transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 lg:px-8 pb-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-white/40">
            <span>© {new Date().getFullYear()} NORCAT Innovation</span>
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/70 transition-colors">Terms of Use</Link>
          </div>
          <div className="flex items-center gap-3">
            <img src={norcatLogoBlack} alt="NORCAT" className="h-6 w-auto brightness-0 invert opacity-60" />
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
