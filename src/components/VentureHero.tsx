import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Sparkles, 
  Rocket, 
  Users, 
  FileText, 
  Building2, 
  DollarSign, 
  Target, 
  Lightbulb,
  Scale,
  Globe,
  Briefcase,
  PresentationIcon,
  UserPlus,
  TrendingUp,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const supportItems = [
  { icon: PresentationIcon, label: 'Build my pitch deck' },
  { icon: Users, label: 'Find a co-founder' },
  { icon: UserPlus, label: 'Hire my first employee' },
  { icon: Building2, label: 'Register my business' },
  { icon: DollarSign, label: 'Raise funding' },
  { icon: Target, label: 'Find product-market fit' },
  { icon: FileText, label: 'Draft investor documents' },
  { icon: Globe, label: 'Expand internationally' },
  { icon: Lightbulb, label: 'Validate my idea' },
  { icon: Scale, label: 'Legal & IP strategy' },
  { icon: Briefcase, label: 'Connect with mentors' },
  { icon: TrendingUp, label: 'Scale my operations' },
];

const typingExamples = [
  "How do I build a compelling pitch deck?",
  "What grants are available for cleantech startups?",
  "How do I find a technical co-founder?",
  "What's the best way to validate my idea?",
  "How do I protect my intellectual property?",
  "What funding options exist for early-stage startups?",
  "How do I hire my first employee?",
  "What mentorship programs do you offer?",
];

export function VentureHero() {
  const [chatInput, setChatInput] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [exampleIndex, setExampleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    const currentExample = typingExamples[exampleIndex];
    
    if (isTyping) {
      if (charIndex < currentExample.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentExample.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 50 + Math.random() * 30); // Variable typing speed for realism
        return () => clearTimeout(timeout);
      } else {
        // Pause at end of typing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting phase
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentExample.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 25); // Faster deletion
        return () => clearTimeout(timeout);
      } else {
        // Move to next example
        const timeout = setTimeout(() => {
          setExampleIndex((prev) => (prev + 1) % typingExamples.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, exampleIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      console.log('Chat input:', chatInput);
      setChatInput('');
    }
  };

  const handleItemClick = (label: string) => {
    setChatInput(`Help me ${label.toLowerCase()}`);
  };

  const handleInputFocus = () => {
    // Stop the typing animation when user focuses
  };

  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Logo / Brand */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase">
            <Rocket className="h-5 w-5" />
            <span>NORCAT Innovation</span>
          </div>
        </motion.div>

        {/* Sub-header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-muted-foreground text-sm md:text-base mb-4"
        >
          Your Venture's Unfair Advantage
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          How can we help you{' '}
          <span className="text-gradient-teal">scale your venture?</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Access the resources you need to grow and scale
        </motion.p>

        {/* Static Support Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {supportItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  onClick={() => handleItemClick(item.label)}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm text-foreground/80 group-hover:text-foreground whitespace-nowrap">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* AI Chat Input with Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative rounded-2xl border-2 border-border bg-background/90 backdrop-blur-sm shadow-lg hover:border-primary/30 focus-within:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="relative">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onFocus={handleInputFocus}
                  className="w-full py-6 px-5 pr-14 text-base border-0 bg-transparent focus:outline-none focus:ring-0"
                  placeholder=""
                />
                {/* Typing animation overlay - only shows when input is empty */}
                {!chatInput && (
                  <div className="absolute inset-0 flex items-center px-5 pointer-events-none">
                    <span className="text-muted-foreground/60 text-base">
                      {displayText}
                      <span className="inline-block w-0.5 h-5 bg-primary/60 ml-0.5 animate-pulse" />
                    </span>
                  </div>
                )}
              </div>
              
              {/* Bottom toolbar */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-border/50 bg-secondary/30">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                    title="AI Suggestions"
                  >
                    <Sparkles className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-muted-foreground">
                    Powered by AI
                  </span>
                </div>
                
                <Button
                  type="submit"
                  size="sm"
                  className="rounded-full h-9 w-9 p-0 bg-primary hover:bg-primary/90"
                  disabled={!chatInput.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
          
          <p className="text-center text-xs text-muted-foreground mt-4">
            Get personalized guidance for your startup journey
          </p>
        </motion.div>
      </div>
    </section>
  );
}
