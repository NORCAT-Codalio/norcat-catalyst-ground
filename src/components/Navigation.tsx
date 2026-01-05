import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown, Rocket, DollarSign, Mountain, Handshake, Globe, Lightbulb, Calendar, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

// Menu structure
const programsMenu = {
  programs: {
    title: 'Programs',
    icon: Rocket,
    items: [
      { name: 'Venture Growth Services', href: '/programs/venture-growth-services' },
      { name: 'Mentorship Services', href: '/programs/mentorship-services' },
      { name: 'Capital Navigation', href: '/programs/capital-navigation' },
    ],
  },
  funding: {
    title: 'Funding & Capital',
    icon: DollarSign,
    items: [
      { name: 'Sudbury Catalyst Fund', href: '/funding/sudbury-catalyst-fund' },
      { name: 'Innovation Acceleration Program', href: '/funding/innovation-acceleration-program' },
      { name: 'Regional AI Program', href: '/funding/regional-ai-program' },
      { name: 'Investor Hub', href: '/funding/investor-hub' },
    ],
  },
  mining: {
    title: 'Mining & Tough Tech',
    icon: Mountain,
    items: [
      { name: 'NORCAT Underground Centre', href: '/mining/norcat-underground' },
      { name: 'Core5', href: '/mining/core5' },
      { name: 'Critical Industrial Technologies Initiative', href: '/mining/critical-industrial-tech' },
      { name: 'Labs', href: '/mining/labs' },
    ],
  },
  partners: {
    title: 'Partner Programs',
    icon: Handshake,
    items: [
      { name: 'Innovation Quarters', href: '/partners/innovation-quarters' },
      { name: 'MICA Network', href: '/partners/mica-network' },
      { name: 'MineConnect', href: '/partners/mineconnect' },
      { name: 'Rogers Cybersecure Catalyst', href: '/partners/rogers-cybersecure' },
    ],
  },
};

const ecosystemItems = [
  { name: 'Sudbury Innovation Ecosystem', href: '/ecosystem/sudbury' },
  { name: 'Impact', href: '/impact' },
];

const insightsItems = [
  { name: 'News', href: '/insights/news' },
  { name: 'Success Stories', href: '/insights/success-stories' },
  { name: 'Reports', href: '/insights/reports' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Liquid glass animation variants
  const megaMenuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      filter: 'blur(10px)',
      transition: {
        duration: 0.2,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      filter: 'blur(8px)',
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between" ref={dropdownRef}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-teal flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-display font-bold text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight text-foreground">
                NORCAT
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* About */}
            <Link
              to="/about"
              className={cn(
                'px-4 py-2 text-sm font-medium transition-colors rounded-md',
                location.pathname === '/about'
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              About
            </Link>

            {/* Programs Mega Menu */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('programs')}
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  activeDropdown === 'programs'
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Programs
                <ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'programs' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'programs' && (
                  <motion.div
                    variants={megaMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] p-6 rounded-2xl border border-white/20 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    }}
                  >
                    {/* Liquid glass overlay effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                    </div>

                    <div className="relative grid grid-cols-4 gap-6">
                      {Object.entries(programsMenu).map(([key, section], i) => (
                        <motion.div key={key} variants={columnVariants}>
                          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/50">
                            <section.icon className="w-4 h-4 text-primary" />
                            <span className="font-semibold text-sm text-foreground">{section.title}</span>
                          </div>
                          <ul className="space-y-1">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Ecosystem Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('ecosystem')}
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  activeDropdown === 'ecosystem'
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Ecosystem
                <ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'ecosystem' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'ecosystem' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-64 p-3 rounded-xl border border-white/20 shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                    </div>
                    <ul className="relative space-y-1">
                      {ecosystemItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                          >
                            <Globe className="w-4 h-4" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Insights Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('insights')}
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                  activeDropdown === 'insights'
                    ? 'text-primary bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                Insights
                <ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'insights' && 'rotate-180')} />
              </button>

              <AnimatePresence>
                {activeDropdown === 'insights' && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 mt-2 w-56 p-3 rounded-xl border border-white/20 shadow-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    }}
                  >
                    <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
                    </div>
                    <ul className="relative space-y-1">
                      {insightsItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                          >
                            <Lightbulb className="w-4 h-4" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Events */}
            <Link
              to="/events"
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                location.pathname === '/events'
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              Events
            </Link>

            {/* Client Portal */}
            <Link
              to="/portal/auth"
              className={cn(
                'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-md',
                location.pathname.startsWith('/portal')
                  ? 'text-primary bg-secondary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              <LogIn className="w-4 h-4 mr-1" />
              Client Portal
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="default" className="btn-primary text-sm px-6 py-2.5">
              <Link to="/apply">
                Work With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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

                {/* Mobile Programs Accordion */}
                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-programs')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Programs
                    <ChevronDown className={cn('w-5 h-5 transition-transform', activeDropdown === 'mobile-programs' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-programs' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-4">
                          {Object.entries(programsMenu).map(([key, section]) => (
                            <div key={key}>
                              <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                {section.title}
                              </p>
                              {section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Ecosystem */}
                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-ecosystem')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Ecosystem
                    <ChevronDown className={cn('w-5 h-5 transition-transform', activeDropdown === 'mobile-ecosystem' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-ecosystem' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2">
                          {ecosystemItems.map((item) => (
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

                {/* Mobile Insights */}
                <div>
                  <button
                    onClick={() => toggleDropdown('mobile-insights')}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    Insights
                    <ChevronDown className={cn('w-5 h-5 transition-transform', activeDropdown === 'mobile-insights' && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-insights' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2">
                          {insightsItems.map((item) => (
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

                <Link
                  to="/events"
                  className="block px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Events
                </Link>

                <Link
                  to="/portal/auth"
                  className="block px-4 py-3 text-base font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Client Portal
                </Link>

                <div className="pt-4 border-t border-border mt-4">
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
  );
}
