import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Facebook, Instagram } from 'lucide-react';
import norcatLogoBlack from '@/assets/logos/norcat-black.png';
import skylineAsset from '@/assets/sudbury-skyline.png.asset.json';
import ontarioLogoAsset from '@/assets/logos/ontario-logo.png.asset.json';

const footerLinks = {
  programs: [
    { name: 'Funding Programs', href: '/funding' },
    { name: 'Programs Overview', href: '/programs' },
    { name: 'Critical Industrial Technologies', href: '/mining/critical-industrial-tech' },
    { name: 'Core5', href: '/mining/core5' },
    { name: 'Rogers Cybersecure Catalyst', href: '/partners/rogers-cybersecure' },
  ],
  services: [
    { name: 'Venture Growth Services', href: '/programs/venture-growth-services' },
    { name: 'Mentorship Services', href: '/programs/mentorship-services' },
    { name: 'Innovation Space', href: '/mining/labs' },
    { name: 'Underground Centre', href: '/mining/norcat-underground' },
  ],
  insights: [
    { name: 'Success Stories', href: '/insights/success-stories' },
    { name: 'News', href: '/insights/news' },
    { name: 'Impact', href: '/impact' },
    { name: 'Events', href: '/events' },
  ],
  company: [
    { name: 'NORCAT.org', href: 'https://norcat.org', external: true },
    { name: 'About Us', href: '/about' },
    { name: 'Ecosystem Partners', href: '/ecosystem/sudbury' },
    { name: 'Client Portal', href: '/portal/auth' },
  ],
};

export function Footer() {
  return (
    <>
      <div style={{ background: '#F2F3F6' }}>
        <img src={skylineAsset.url} alt="Sudbury skyline" className="w-full h-auto block" />
      </div>
      <footer className="relative overflow-hidden bg-gradient-to-b from-[#003da5] to-[#001a4d]">
        {/* Main Footer */}
        <div className="container mx-auto px-4 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div>
                <img src={norcatLogoBlack} alt="NORCAT" className="h-7 w-auto brightness-0 invert" />
                <p className="mt-4 text-sm text-white/80 leading-relaxed max-w-sm">
                  Sudbury's Regional Innovation Centre - helping tech and mining ventures start, scale, and succeed.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            <nav className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-6" aria-label="Footer Menu">
              {/* Programs */}
              <div>
                <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">Programs</h4>
                <ul className="space-y-2.5">
                  {footerLinks.programs.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-sm text-white/75 hover:text-teal-300 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">Services</h4>
                <ul className="space-y-2.5">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-sm text-white/75 hover:text-teal-300 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insights */}
              <div>
                <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">Insights</h4>
                <ul className="space-y-2.5">
                  {footerLinks.insights.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-sm text-white/75 hover:text-teal-300 transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-display font-bold text-white text-sm tracking-wider uppercase mb-4">Company</h4>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      {'external' in link && link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/75 hover:text-teal-300 transition-colors">
                          {link.name}
                        </a>
                      ) : (
                        <Link to={link.href} className="text-sm text-white/75 hover:text-teal-300 transition-colors">
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="h-px bg-white/15" />
        </div>

        {/* Legal + Ontario Funding */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Legal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-white/50">
              <span>© {new Date().getFullYear()} NORCAT Innovation</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
                <a href="https://www.norcat.org/aoda-policy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">AODA Policy</a>
              </div>
            </div>

            {/* Ontario Funding */}
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-xs md:text-sm font-semibold tracking-wide text-white/90 leading-none">
                Funded by the Government of Ontario
              </span>
              <img
                src={ontarioLogoAsset.url}
                alt="Government of Ontario"
                className="h-5 md:h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
