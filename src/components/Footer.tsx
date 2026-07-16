import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Send } from 'lucide-react';
import { useState } from 'react';
import ontarioLogoAsset from '@/assets/logos/ontario-rev-logo.png.asset.json';
import norcatInnovationLogo from '@/assets/logos/norcat-white.png';
import trianglesAsset from '@/assets/white-triangles-lines.png.asset.json';

const footerLinks = {
  funding: [
    { name: 'Innovation Acceleration Program', href: '/funding/innovation-acceleration-program' },
    { name: 'Regional Artificial Intelligence', href: '/funding/regional-ai-program' },
    { name: 'Sudbury Catalyst Fund', href: '/funding/sudbury-catalyst-fund' },
  ],
  programs: [
    { name: 'Core5', href: '/mining/core5' },
    { name: 'Rogers Cybersecure Catalyst', href: '/partners/rogers-cybersecure' },
    { name: 'Critical Industrial Technologies', href: '/mining/critical-industrial-tech' },
  ],
  services: [
    { name: 'Mentorship', href: '/programs/mentorship-services' },
    { name: 'Venture Growth', href: '/programs/venture-growth-services' },
    { name: 'Innovation Space', href: '/mining/labs' },
    { name: 'Underground Centre', href: '/mining/norcat-underground' },
  ],
  insights: [
    { name: 'News', href: '/insights/news' },
    { name: 'Events', href: '/events' },
    { name: 'Impact', href: '/impact' },
    { name: 'Success Stories', href: '/insights/success-stories' },
  ],
  company: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Client Portal', href: '/portal/auth' },
    { name: 'NORCAT.org', href: 'https://norcat.org', external: true },
    { name: 'Ecosystem Partners', href: '/ecosystem/sudbury' },
    { name: 'About NORCAT Innovation', href: '/about' },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="relative overflow-hidden font-sans text-white bg-[radial-gradient(120%_90%_at_0%_100%,#0FA88C_0%,#0a5aa8_28%,#003da5_55%,#001a4d_100%)]">
      {/* Triangles decoration bottom-left (flipped to point up/right per design) */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[46%] max-w-2xl opacity-70 -scale-y-100"
      >
        <img src={trianglesAsset.url} alt="" className="w-full h-auto object-contain" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10 pt-16 pb-10 relative">
        {/* Top row: brand / mailing list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Brand */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/90 inline-block border-b border-white/30 pb-3">
              Explore More of NORCAT Innovation
            </p>

            <h2 className="mt-6 font-sans font-semibold text-4xl md:text-5xl leading-[1.05] text-white">
              Sudbury's Regional<br />Innovation Centre
            </h2>


            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <img
                src={ontarioLogoAsset.url}
                alt="Government of Ontario"
                className="h-12 w-auto object-contain shrink-0"
              />
              <p className="text-xs md:text-sm text-white/85 leading-relaxed max-w-sm">
                Funded by the Ministry of Economic Development, Job Creation and Trade,
                enabling free and subsidized services for Northern Ontario entrepreneurs.
              </p>
            </div>
          </div>

          {/* Right: Mailing list + social */}
          <div className="lg:pl-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/90">
              Join Our Mailing List
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 h-12 rounded-md bg-white/5 border border-white/25 px-4 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-12 w-12 shrink-0 rounded-md bg-[#0a2f7a] border border-white/25 flex items-center justify-center hover:bg-[#123f9a] transition-colors"
              >
                <Send className="h-5 w-5 text-white" />
              </button>
            </form>

            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { Icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/20" />

        {/* Link columns */}
        <nav
          aria-label="Footer navigation"
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10"
        >
          {[
            { title: 'Funding', links: footerLinks.funding },
            { title: 'Programs', links: footerLinks.programs },
            { title: 'Services', links: footerLinks.services },
            { title: 'Insights', links: footerLinks.insights },
            { title: 'Company', links: footerLinks.company },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans font-semibold text-white text-sm tracking-[0.15em] uppercase mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link: any) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/85 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-white/85 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* NORCAT Innovation lockup (right) */}
        <div className="mt-20 flex justify-center lg:justify-end relative">
          <img
            src={norcatInnovationLogo}
            alt="NORCAT Innovation"
            className="h-7 md:h-8 lg:h-9 w-auto object-contain"
          />
        </div>

        {/* Legal row: all right-aligned per design */}
        <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-end gap-x-8 gap-y-2 text-xs text-white/75 relative">
          <span>© {new Date().getFullYear()} NORCAT Innovation</span>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <a
            href="https://www.norcat.org/aoda-policy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            AODA Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
