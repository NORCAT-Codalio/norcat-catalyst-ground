import { useState, useEffect } from 'react';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Send, 
  Sparkles, 
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  DollarSign,
  Globe,
  Zap,
  BarChart3,
  MessageSquare,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";

const validationItems = [
  { icon: Target, label: 'Is my market big enough?' },
  { icon: Users, label: 'Who is my ideal customer?' },
  { icon: TrendingUp, label: 'How do I test demand?' },
  { icon: DollarSign, label: 'Can this be profitable?' },
  { icon: Globe, label: 'Does this solve a real problem?' },
  { icon: Zap, label: 'What makes this unique?' },
  { icon: BarChart3, label: 'How do I measure traction?' },
  { icon: MessageSquare, label: 'How do I talk to customers?' },
  { icon: Search, label: 'Who are my competitors?' },
  { icon: Lightbulb, label: 'Is this the right timing?' },
];

const typingExamples = [
  "Is my startup idea solving a real problem?",
  "How do I know if people will pay for this?",
  "What's the best way to test my idea quickly?",
  "How big is my potential market?",
  "What makes my idea different from competitors?",
  "How do I find my first 10 customers?",
  "Should I pivot or persevere?",
  "What metrics should I track early on?",
];

const ValidateIdea = () => {
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
        }, 50 + Math.random() * 30);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentExample.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 25);
        return () => clearTimeout(timeout);
      } else {
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
    setChatInput(label);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with AI Chat */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-background via-amber-500/5 to-background">
        {/* Subtle background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Logo / Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 font-semibold text-sm tracking-wider uppercase">
              <Lightbulb className="h-5 w-5" />
              <span>Idea Validation</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Validate Your{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Startup Idea</span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Get instant AI-powered feedback on your startup idea. Ask questions, explore your market, and discover if you're onto something big.
          </motion.p>

          {/* Scrolling Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 overflow-hidden"
          >
            <div className="relative">
              {/* Gradient fades on edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-marquee gap-4">
                {[...validationItems, ...validationItems].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => handleItemClick(item.label)}
                      className="group flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-amber-500/20 bg-background/80 backdrop-blur-sm hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <Icon className="h-4 w-4 text-amber-600/70 group-hover:text-amber-600 transition-colors" />
                      <span className="text-sm text-foreground/80 group-hover:text-foreground whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
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
              <div className="relative rounded-2xl border-2 border-amber-500/20 bg-background/90 backdrop-blur-sm shadow-lg hover:border-amber-500/40 focus-within:border-amber-500/60 transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="w-full py-6 px-5 pr-14 text-base border-0 bg-transparent focus:outline-none focus:ring-0"
                    placeholder=""
                  />
                  {/* Typing animation overlay - only shows when input is empty */}
                  {!chatInput && (
                    <div className="absolute inset-0 flex items-center px-5 pointer-events-none">
                      <span className="text-muted-foreground/60 text-base">
                        {displayText}
                        <span className="inline-block w-0.5 h-5 bg-amber-500/60 ml-0.5 animate-pulse" />
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Bottom toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-amber-500/10 bg-amber-500/5">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="p-2 rounded-lg hover:bg-amber-500/10 transition-colors text-amber-600/70 hover:text-amber-600"
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
                    className="rounded-full h-9 w-9 p-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                    disabled={!chatInput.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
            
            <p className="text-center text-xs text-muted-foreground mt-4">
              Ask anything about validating your startup idea
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ValidateIdea;
