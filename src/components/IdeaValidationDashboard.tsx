import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  TrendingUp,
  Target,
  Zap,
  Clock,
  DollarSign,
  Gauge,
  Rocket,
  Users,
  Building2,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Brain,
  Shield,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Banknote,
  Factory,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Mock data for the example dashboard
const mockData = {
  companyName: "MineGuard AI",
  elevatorPitch: "MineGuard AI uses computer vision and predictive analytics to detect equipment failures in underground mining operations 48 hours before they occur, reducing unplanned downtime by 40% and preventing costly safety incidents.",
  
  scores: {
    opportunity: 4.2,
    problem: 4.5,
    feasibility: 3.8,
    whyNow: 4.0,
  },
  
  businessFit: {
    revenuePotential: { score: 4, label: "High", description: "B2B SaaS with strong upsell potential" },
    executionDifficulty: { score: 3, label: "Moderate", description: "Requires domain expertise & hardware integration" },
    gtm: { score: 4, label: "Strong", description: "Clear buyer, established sales channels via mining suppliers" },
  },
  
  problemClarity: {
    score: 4,
    statement: "Mining operators lose $180K+ per hour during unplanned equipment failures. Current predictive maintenance solutions require extensive sensor retrofitting and don't work well in harsh underground conditions.",
    flag: "This problem is well-defined with clear economic impact — urgency is high in large mining operations.",
  },
  
  targetCustomer: {
    primary: "VP of Operations / Maintenance Director at mid-to-large mining companies",
    painPoint: "Maintenance Directors who are accountable for uptime KPIs and safety compliance",
    buyerVsUser: "VP Operations (buyer) vs. Maintenance Technicians (users)",
    earlyAdopter: "Forward-thinking mining operations already piloting IoT/automation solutions, likely in Canada, Australia, or Chile",
  },
  
  comparables: [
    { name: "Uptake", category: "Industrial AI" },
    { name: "Augury", category: "Predictive Maintenance" },
    { name: "Senseye", category: "Asset Performance" },
  ],
  comparableInsight: "Similar ideas exist in adjacent industries, which suggests market validation. Mining-specific positioning and harsh-environment capability will be your key differentiators.",
  
  founderReadiness: {
    strengths: [
      "10+ years mining industry experience",
      "Technical background in ML/computer vision",
      "Existing relationships with potential customers",
    ],
    gap: {
      area: "Enterprise Sales",
      recommendation: "Consider bringing on a co-founder or early hire with B2B enterprise sales experience, particularly in industrial/mining sectors. Long sales cycles will require dedicated attention.",
    },
  },
  
  appropriateFunding: [
    { name: "Innovation Acceleration Program (IAP)", provider: "NORCAT", fit: "High", description: "Non-dilutive funding for tech validation and market entry" },
    { name: "IRAP", provider: "NRC", fit: "High", description: "R&D funding for innovative technology development" },
    { name: "Ontario Together Fund", provider: "Government of Ontario", fit: "Medium", description: "Support for critical technology manufacturing" },
    { name: "Sudbury Catalyst Fund", provider: "NORCAT", fit: "Medium", description: "Equity investment for scaling operations" },
  ],
  
  idealCustomers: [
    { name: "Vale", industry: "Mining", reason: "Major Sudbury presence, active innovation programs" },
    { name: "Glencore", industry: "Mining", reason: "Large underground operations, digital transformation focus" },
    { name: "Newmont", industry: "Mining", reason: "Sustainability mandates driving tech adoption" },
    { name: "Agnico Eagle", industry: "Mining", reason: "Canadian HQ, proven early adopter of mining tech" },
    { name: "Teck Resources", industry: "Mining", reason: "Innovation-forward, investing in predictive tech" },
  ],
  
  keywordTrends: [
    { month: "Jan", volume: 45 },
    { month: "Feb", volume: 52 },
    { month: "Mar", volume: 48 },
    { month: "Apr", volume: 61 },
    { month: "May", volume: 58 },
    { month: "Jun", volume: 72 },
    { month: "Jul", volume: 85 },
    { month: "Aug", volume: 78 },
    { month: "Sep", volume: 92 },
    { month: "Oct", volume: 88 },
    { month: "Nov", volume: 95 },
    { month: "Dec", volume: 100 },
  ],
};

const ScoreRing = ({ score, maxScore = 5, size = "md", color = "amber" }: { score: number; maxScore?: number; size?: "sm" | "md" | "lg"; color?: string }) => {
  const percentage = (score / maxScore) * 100;
  const radius = size === "lg" ? 45 : size === "md" ? 35 : 25;
  const strokeWidth = size === "lg" ? 8 : size === "md" ? 6 : 4;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };
  
  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };
  
  return (
    <div className={cn("relative", sizeClasses[size])}>
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted/20"
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("font-bold text-foreground", textSizes[size])}>{score.toFixed(1)}</span>
      </div>
    </div>
  );
};

const ScoreBar = ({ score, maxScore = 5, label }: { score: number; maxScore?: number; label: string }) => {
  const percentage = (score / maxScore) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-semibold">{score}/{maxScore}</span>
      </div>
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-teal rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const TrendGraph = ({ data }: { data: typeof mockData.keywordTrends }) => {
  const maxVolume = Math.max(...data.map(d => d.volume));
  
  return (
    <div className="h-40 flex items-end gap-1">
      {data.map((point, i) => (
        <motion.div
          key={point.month}
          className="flex-1 flex flex-col items-center gap-1"
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <motion.div
            className="w-full bg-gradient-to-t from-primary to-accent rounded-t"
            initial={{ height: 0 }}
            animate={{ height: `${(point.volume / maxVolume) * 100}%` }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            style={{ minHeight: 4 }}
          />
          <span className="text-[10px] text-muted-foreground">{point.month}</span>
        </motion.div>
      ))}
    </div>
  );
};

export function IdeaValidationDashboard() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    scores: true,
    businessFit: true,
    problem: true,
    customer: true,
    comparables: true,
    founder: true,
    funding: true,
    idealCustomers: true,
  });
  
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };
  
  const SectionHeader = ({ id, icon: Icon, title, subtitle }: { id: string; icon: any; title: string; subtitle?: string }) => (
    <button
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors rounded-t-xl"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-foreground">{title}</h3>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      {expandedSections[id] ? (
        <ChevronUp className="w-5 h-5 text-muted-foreground" />
      ) : (
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Example Output
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Here's What You'll Get
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive snapshot of your startup idea — market signals, problem clarity, customer fit, and founder readiness — all in one quick sanity check.
          </p>
        </motion.div>

        {/* Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Company Header Card */}
          <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 border-b border-border">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-teal flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{mockData.companyName}</h3>
                      <p className="text-sm text-muted-foreground">Idea Validation Report</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground mb-1">Overall Score</div>
                  <div className="text-3xl font-bold text-gradient-teal">
                    4.1/5
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elevator Pitch */}
            <div className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Rocket className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-2">Elevator Pitch</h4>
                  <p className="text-muted-foreground leading-relaxed">{mockData.elevatorPitch}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Opportunity Scores */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="scores" icon={BarChart3} title="Opportunity Ranking" subtitle="Key validation metrics" />
                {expandedSections.scores && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0 space-y-4"
                  >
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      {Object.entries(mockData.scores).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <ScoreRing score={value} size="sm" />
                          <p className="text-xs text-muted-foreground mt-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Keyword Trends */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Search Interest Trend</h3>
                    <p className="text-xs text-muted-foreground">"Mining predictive maintenance" — 12 months</p>
                  </div>
                </div>
                <TrendGraph data={mockData.keywordTrends} />
                <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-green-600 font-medium">+122%</span> growth over 12 months
                </p>
              </div>

              {/* Business Fit */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="businessFit" icon={DollarSign} title="Business Fit" subtitle="Revenue & execution assessment" />
                {expandedSections.businessFit && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0 space-y-4"
                  >
                    {Object.entries(mockData.businessFit).map(([key, value]) => (
                      <div key={key} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                          value.score >= 4 ? "bg-green-500/20 text-green-600" :
                          value.score >= 3 ? "bg-primary/20 text-primary" :
                          "bg-red-500/20 text-red-600"
                        )}>
                          {value.score}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className={cn(
                              "text-xs font-medium px-2 py-0.5 rounded-full",
                              value.score >= 4 ? "bg-green-500/10 text-green-600" :
                              value.score >= 3 ? "bg-primary/10 text-primary" :
                              "bg-red-500/10 text-red-600"
                            )}>
                              {value.label}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Appropriate Funding - moved to left column */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="funding" icon={Banknote} title="Appropriate Funding" subtitle="Matched funding opportunities" />
                {expandedSections.funding && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0 space-y-3"
                  >
                    {mockData.appropriateFunding.map((fund, i) => (
                      <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm text-foreground">{fund.name}</span>
                          <span className={cn(
                            "text-xs font-medium px-2 py-0.5 rounded-full",
                            fund.fit === "High" ? "bg-green-500/10 text-green-600" : "bg-primary/10 text-primary"
                          )}>
                            {fund.fit} Fit
                          </span>
                        </div>
                        <div className="text-xs text-primary mb-1">{fund.provider}</div>
                        <p className="text-xs text-muted-foreground">{fund.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Founder Readiness - moved to left column under Appropriate Funding */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="founder" icon={Brain} title="Founder Readiness" subtitle="Strengths & gaps" />
                {expandedSections.founder && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0"
                  >
                    <div className="mb-4">
                      <div className="text-xs font-medium text-green-600 mb-2 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Strengths Aligned to Idea
                      </div>
                      <ul className="space-y-2">
                        {mockData.founderReadiness.strengths.map((strength, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="text-xs font-medium text-primary mb-2 flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Gap to Address: {mockData.founderReadiness.gap.area}
                      </div>
                      <p className="text-sm text-foreground">{mockData.founderReadiness.gap.recommendation}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Problem Clarity */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="problem" icon={Target} title="Problem Clarity" subtitle="Is the problem well-defined?" />
                {expandedSections.problem && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <ScoreRing score={mockData.problemClarity.score} size="md" />
                      <div className="flex-1">
                        <ScoreBar score={mockData.problemClarity.score} label="Clarity Score" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary">
                        <p className="text-sm text-foreground leading-relaxed">{mockData.problemClarity.statement}</p>
                      </div>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-700">{mockData.problemClarity.flag}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Target Customer */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="customer" icon={Users} title="Target Customer Snapshot" subtitle="Who feels this pain?" />
                {expandedSections.customer && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0 space-y-3"
                  >
                    {[
                      { label: "Primary Customer", value: mockData.targetCustomer.primary },
                      { label: "Feels Pain Most", value: mockData.targetCustomer.painPoint },
                      { label: "Buyer vs User", value: mockData.targetCustomer.buyerVsUser },
                      { label: "Early Adopter Profile", value: mockData.targetCustomer.earlyAdopter },
                    ].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-muted/30">
                        <div className="text-xs font-medium text-primary mb-1">{item.label}</div>
                        <p className="text-sm text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Comparables */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="comparables" icon={Building2} title="Market Analogues" subtitle="Comparable companies" />
                {expandedSections.comparables && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0"
                  >
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mockData.comparables.map((comp, i) => (
                        <div key={i} className="px-3 py-2 rounded-lg bg-muted/50 border border-border">
                          <div className="font-medium text-sm">{comp.name}</div>
                          <div className="text-xs text-muted-foreground">{comp.category}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-700">{mockData.comparableInsight}</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Ideal Customers - moved to be after Market Analogues */}
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <SectionHeader id="idealCustomers" icon={Factory} title="Ideal Customers" subtitle="Target companies to pursue" />
                {expandedSections.idealCustomers && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="p-6 pt-0"
                  >
                    <div className="space-y-2">
                      {mockData.idealCustomers.map((customer, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm text-foreground">{customer.name}</span>
                              <span className="text-xs text-muted-foreground">• {customer.industry}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-0.5">{customer.reason}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                <Zap className="w-3 h-3" />
                Ready for the Full Picture?
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Get Your Complete Report & Action Plan
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                This is just a preview. Apply to NORCAT Innovation to get a comprehensive validation report, personalized action plan, and 1-on-1 guidance from our team.
              </p>
              <Button asChild size="lg" className="btn-primary px-8">
                <Link to="/apply">
                  Get the Full Report & Action Plan — It's Free!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">Funded by the Government of Ontario</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
