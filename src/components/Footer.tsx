import { Link } from 'react-router-dom';
import { ArrowRight, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import norcatLogoBlack from '@/assets/logos/norcat-black.png';

const footerLinks = {
  programs: [
    { name: 'Venture Growth Services', href: '/programs#venture-growth' },
    { name: 'Capital Navigation', href: '/programs#capital' },
    { name: 'Non-Dilutive Funding', href: '/programs#funding' },
    { name: 'Sudbury Catalyst Fund', href: '/programs#catalyst' },
  ],
  resources: [
    { name: 'Mining Innovation', href: '/mining-innovation' },
    { name: 'Underground Centre', href: '/mining-innovation#underground' },
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
  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                src={norcatLogoBlack}
                alt="NORCAT Innovation"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Sudbury's Regional Innovation Centre. Helping founders start, grow, 
              and scale tech-enabled, IP-driven startups.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Greater Sudbury, Ontario</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:innovation@norcat.org" className="hover:text-primary transition-colors">
                  innovation@norcat.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+17056717797" className="hover:text-primary transition-colors">
                  (705) 671-7797
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-semibold text-slate-50 mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-slate-50 mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-display font-semibold text-slate-50 mb-4">Events</h4>
            <ul className="space-y-3">
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-slate-50 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>© {new Date().getFullYear()} NORCAT Innovation</span>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-500">Funded by the Government of Ontario</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
