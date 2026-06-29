import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Rocket, DollarSign, Mountain, Handshake, Globe, Lightbulb, Calendar, LogIn, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Menu structure
const programsItems = [
  { name: 'Venture Growth Services', href: '/programs/venture-growth-services' },
  { name: 'Mentorship', href: '/programs/mentorship-services' },
  { name: 'Critical Industrial Technologies', href: '/mining/critical-industrial-tech' },
  { name: 'Core5', href: '/mining/core5' },
  { name: 'Underground Centre', href: '/mining/norcat-underground' },
  { name: 'Rogers Cybersecure Catalyst', href: '/partners/rogers-cybersecure' },
  { name: 'Innovation Space', href: '/mining/labs' },
];

const fundingItems = [
  { name: 'Innovation Acceleration Program', href: '/funding/innovation-acceleration-program' },
  { name: 'Regional Artificial Intelligence Program', href: '/funding/regional-ai-program' },
  { name: 'Sudbury Catalyst Fund', href: '/funding/sudbury-catalyst-fund' },
];

const resourcesItems = [
  { name: 'Ecosystem', href: '/ecosystem/sudbury' },
  { name: 'Impact', href: '/impact' },
  { name: 'Stories', href: '/insights/success-stories' },
  { name: 'News', href: '/insights/news' },
  { name: 'Events', href: '/events' },
];


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  
  // Check if we're on home page and should use light text
  const isHomePage = location.pathname === '/';
  const useLightText = false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileAccordion(null);
  }, [location]);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (accordion: string) => {
    setMobileAccordion(mobileAccordion === accordion ? null : accordion);
  };

  // Blob liquid animation - expands from center like a droplet
  const blobVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: -20,
      borderRadius: '50%',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      borderRadius: '1rem',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.8,
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: -10,
      borderRadius: '50%',
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const smallBlobVariants = {
    hidden: {
      opacity: 0,
      scale: 0.2,
      y: -15,
      borderRadius: '50%',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      borderRadius: '0.75rem',
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 22,
        mass: 0.6,
        staggerChildren: 0.02,
        delayChildren: 0.03,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.3,
      y: -10,
      borderRadius: '50%',
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <>
      {/* Top info bar - visible only at top */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-[51] transition-all duration-300 bg-[#001a4d] border-b border-white/10 overflow-hidden',
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100'
        )}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-1 text-[11px] text-white/80">
          <a href="https://www.norcat.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Globe className="h-3 w-3" />
            norcat.org
          </a>
          <a href="tel:7055218324" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone className="h-3 w-3" />
            705-521-8324
          </a>
        </div>
      </div>

      <header
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-border/50',
          isScrolled
            ? 'top-0 shadow-lg py-3'
            : 'top-[34px] py-5'
        )}
      >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Menu">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/norcat-innovation-logo.png"
              alt="NORCAT Innovation"
              className="h-16 w-auto rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* About */}
            <Link
              to="/about"
              className={cn(
                'px-4 py-2 text-base font-medium transition-colors rounded-md',
                location.pathname === '/about'
                  ? 'text-primary bg-secondary'
                  : useLightText 
                    ? 'text-white hover:text-white/80 hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              About
            </Link>

            {/* Programs / Funding / Resources Dropdowns */}
            {([
              { key: 'programs', label: 'Programs', items: programsItems, icon: Rocket },
              { key: 'funding', label: 'Funding', items: fundingItems, icon: DollarSign },
              { key: 'resources', label: 'Resources', items: resourcesItems, icon: Lightbulb },
            ] as const).map((menu) => (
              <div
                key={menu.key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors rounded-md',
                    activeDropdown === menu.key
                      ? 'text-primary bg-secondary'
                      : useLightText
                        ? 'text-white hover:text-white/80 hover:bg-white/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  {menu.label}
                  <ChevronDown className={cn('w-4 h-4 transition-transform duration-300', activeDropdown === menu.key && 'rotate-180')} />
                </button>

                <AnimatePresence>
                  {activeDropdown === menu.key && (
                    <motion.div
                      variants={smallBlobVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-2 w-72 p-3 shadow-xl overflow-hidden"
                      style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 50%, rgba(240,253,250,0.95) 100%)',
                        backdropFilter: 'blur(24px) saturate(200%)',
                        WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                        border: '1px solid rgba(255,255,255,0.6)',
                        boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset',
                      }}
                    >
                      <motion.div
                        className="absolute -top-16 -right-16 w-32 h-32 rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)' }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      />
                      <ul className="relative space-y-0.5">
                        {menu.items.map((item) => (
                          <motion.li key={item.name} variants={itemVariants}>
                            <Link
                              to={item.href}
                              className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                            >
                              <menu.icon className="w-4 h-4" />
                              {item.name}
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Client Portal */}
            <Link
              to="/portal/auth"
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors rounded-md',
                location.pathname.startsWith('/portal')
                  ? 'text-primary bg-secondary'
                  : useLightText 
                    ? 'text-white hover:text-white/80 hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <LogIn className={cn("w-4 h-4 mr-1", useLightText && "text-white")} />
              Client Portal
            </Link>
          </div>



          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Validate Idea - Glass Button */}
            <Link
              to="/validate-idea"
              className="group relative flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-white/40 backdrop-blur-[18px] border border-white/60 shadow-[0_2px_12px_-2px_hsl(var(--primary)/0.15)] text-primary transition-all duration-300 hover:bg-white/55 hover:shadow-[0_4px_18px_-2px_hsl(var(--primary)/0.25)] hover:border-white/80"
              style={{ borderTop: '1px solid hsla(0,0%,100%,0.7)' }}
            >
              <Lightbulb className="h-4 w-4 group-hover:animate-bounce" />
              Validate My Idea
            </Link>

            {/* Work With Us - Sage Green Glass Button */}
            <Link
              to="/apply"
              className="group relative flex items-center gap-2 text-sm font-bold px-6 py-2.5 rounded-xl border border-white/20 text-white transition-all duration-300 shadow-[0_4px_20px_-4px_hsla(168,100%,35%,0.4)] hover:shadow-[0_6px_28px_-4px_hsla(168,100%,35%,0.55)] hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #00b398 0%, #003da5 100%)',
              }}
            >
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-lg overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-2">
                <Link
                  to="/about"
                  className="block px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  About
                </Link>

                {/* Mobile Programs / Funding / Resources */}
                {([
                  { key: 'mobile-programs', label: 'Programs', items: programsItems },
                  { key: 'mobile-funding', label: 'Funding', items: fundingItems },
                  { key: 'mobile-resources', label: 'Resources', items: resourcesItems },
                ] as const).map((menu) => (
                  <div key={menu.key}>
                    <button
                      onClick={() => toggleMobileAccordion(menu.key)}
                      className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      {menu.label}
                      <ChevronDown className={cn('w-5 h-5 transition-transform', mobileAccordion === menu.key && 'rotate-180')} />
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === menu.key && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2">
                            {menu.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}



                <Link
                  to="/portal/auth"
                  className="block px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Client Portal
                </Link>

                <div className="pt-4 border-t border-border mt-4 space-y-3">
                  <Button asChild variant="outline" className="w-full relative border-primary/50 text-primary hover:text-primary hover:bg-primary/5 overflow-hidden">
                    <Link to="/validate-idea">
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-pulse" />
                      <Lightbulb className="mr-2 h-4 w-4" />
                      <span className="relative">Validate My Idea</span>
                    </Link>
                  </Button>
                  <Button asChild variant="default" className="w-full btn-primary">
                    <Link to="/apply">
                      Work With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
    </>
  );
}
