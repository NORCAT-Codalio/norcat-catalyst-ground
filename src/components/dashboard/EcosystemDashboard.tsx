import { useState } from 'react';
import { 
  Building2, TrendingUp, DollarSign, Globe, Users, 
  Lightbulb, Handshake, Award, Package, Clock,
  ChevronDown, Sparkles, Rocket
} from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  RadialBarChart, RadialBar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

// Ecosystem Data
const ecosystemStats = {
  totalCompanies: 187,
  newCompanies: 34,
  totalInvestment: 92.5,
  totalRevenue: 156,
  exportRevenue: 48.2,
  partnerships: 127,
  patents: 89,
  trademarks: 156,
  productsLaunched: 67,
  mentorshipHours: 12500,
};

const timelineData = [
  { year: '2019', companies: 95, investment: 28, revenue: 45, jobs: 850 },
  { year: '2020', companies: 112, investment: 38, revenue: 62, jobs: 1050 },
  { year: '2021', companies: 138, investment: 52, revenue: 89, jobs: 1380 },
  { year: '2022', companies: 158, investment: 71, revenue: 118, jobs: 1720 },
  { year: '2023', companies: 175, investment: 85, revenue: 142, jobs: 1950 },
  { year: '2024', companies: 187, investment: 92.5, revenue: 156, jobs: 2150 },
];

const sectorData = [
  { name: 'Mining Tech', value: 35, color: 'hsl(173, 83%, 44%)' },
  { name: 'Cleantech', value: 22, color: 'hsl(170, 80%, 55%)' },
  { name: 'Industrial IoT', value: 18, color: 'hsl(175, 70%, 65%)' },
  { name: 'AI & ML', value: 15, color: 'hsl(180, 65%, 45%)' },
  { name: 'Critical Minerals', value: 10, color: 'hsl(168, 75%, 35%)' },
];

const monthlyMetrics = [
  { month: 'Jan', mentorship: 980, partnerships: 8, products: 4 },
  { month: 'Feb', mentorship: 1120, partnerships: 12, products: 6 },
  { month: 'Mar', mentorship: 1340, partnerships: 15, products: 8 },
  { month: 'Apr', mentorship: 1150, partnerships: 10, products: 5 },
  { month: 'May', mentorship: 1480, partnerships: 18, products: 9 },
  { month: 'Jun', mentorship: 1620, partnerships: 22, products: 11 },
  { month: 'Jul', mentorship: 1380, partnerships: 14, products: 7 },
  { month: 'Aug', mentorship: 1520, partnerships: 16, products: 10 },
  { month: 'Sep', mentorship: 1680, partnerships: 20, products: 12 },
  { month: 'Oct', mentorship: 1450, partnerships: 12, products: 8 },
  { month: 'Nov', mentorship: 1580, partnerships: 15, products: 9 },
  { month: 'Dec', mentorship: 1200, partnerships: 11, products: 7 },
];

const ipMetrics = [
  { name: 'Patents Filed', value: 89, fill: 'hsl(173, 83%, 44%)' },
  { name: 'Trademarks', value: 156, fill: 'hsl(170, 80%, 55%)' },
  { name: 'Products', value: 67, fill: 'hsl(175, 70%, 65%)' },
];

const fundingStages = [
  { stage: 'Pre-Seed', companies: 45, avgRaise: 0.15 },
  { stage: 'Seed', companies: 68, avgRaise: 0.8 },
  { stage: 'Series A', companies: 42, avgRaise: 4.5 },
  { stage: 'Series B+', companies: 18, avgRaise: 15 },
  { stage: 'Growth', companies: 14, avgRaise: 25 },
];

type MetricFilter = 'all' | 'investment' | 'growth' | 'innovation';

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ value, prefix = '', suffix = '', decimals = 0 }: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useState(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  });

  return (
    <span className="tabular-nums">
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  );
};

const StatCard = ({ 
  icon: Icon, 
  value, 
  label, 
  prefix = '', 
  suffix = '', 
  trend,
  color = 'primary',
  delay = 0 
}: { 
  icon: any; 
  value: number; 
  label: string; 
  prefix?: string; 
  suffix?: string; 
  trend?: number;
  color?: 'primary' | 'teal' | 'emerald';
  delay?: number;
}) => {
  const colorClasses = {
    primary: 'from-primary/20 to-primary/5 border-primary/30',
    teal: 'from-teal-500/20 to-teal-500/5 border-teal-500/30',
    emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
  };

  return (
    <ScrollReveal delay={delay}>
      <div className={cn(
        "relative group p-6 rounded-2xl bg-gradient-to-br border backdrop-blur-sm",
        "hover:scale-[1.02] transition-all duration-300 cursor-default",
        colorClasses[color]
      )}>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            {trend && (
              <div className={cn(
                "flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full",
                trend > 0 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
              )}>
                <TrendingUp className={cn("h-3 w-3", trend < 0 && "rotate-180")} />
                {Math.abs(trend)}%
              </div>
            )}
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">
            <AnimatedCounter value={value} prefix={prefix} suffix={suffix} decimals={prefix === '$' ? 1 : 0} />
          </div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl">
        <p className="font-semibold text-foreground mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.name.includes('$') || entry.dataKey === 'investment' || entry.dataKey === 'revenue' 
              ? `$${entry.value}M` 
              : entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function EcosystemDashboard() {
  const [activeFilter, setActiveFilter] = useState<MetricFilter>('all');
  const [hoveredSector, setHoveredSector] = useState<string | null>(null);

  const filters: { key: MetricFilter; label: string; icon: any }[] = [
    { key: 'all', label: 'Overview', icon: Sparkles },
    { key: 'investment', label: 'Investment', icon: DollarSign },
    { key: 'growth', label: 'Growth', icon: TrendingUp },
    { key: 'innovation', label: 'Innovation', icon: Lightbulb },
  ];

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              )}
            >
              <filter.icon className="h-4 w-4" />
              {filter.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard icon={Building2} value={ecosystemStats.totalCompanies} label="Total Companies" trend={12} delay={0} />
        <StatCard icon={Rocket} value={ecosystemStats.newCompanies} label="New This Year" trend={18} delay={50} color="teal" />
        <StatCard icon={DollarSign} value={ecosystemStats.totalInvestment} label="Total Investment" prefix="$" suffix="M" trend={15} delay={100} />
        <StatCard icon={Globe} value={ecosystemStats.exportRevenue} label="Export Revenue" prefix="$" suffix="M" trend={22} delay={150} color="emerald" />
        <StatCard icon={Users} value={2150} label="Jobs Created" trend={10} delay={200} />
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Growth Timeline */}
        <ScrollReveal delay={100}>
          <div className="bg-background rounded-2xl border border-border p-6 h-[400px]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-lg">Ecosystem Growth</h3>
                <p className="text-sm text-muted-foreground">Investment & Revenue over time</p>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span>Investment ($M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-300" />
                  <span>Revenue ($M)</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(173, 83%, 44%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(173, 83%, 44%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(170, 80%, 72%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(170, 80%, 72%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
                <XAxis dataKey="year" tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 9%, 46%)" />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="investment" 
                  stroke="hsl(173, 83%, 44%)" 
                  strokeWidth={2}
                  fill="url(#investmentGradient)" 
                  name="Investment ($M)"
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(170, 80%, 72%)" 
                  strokeWidth={2}
                  fill="url(#revenueGradient)" 
                  name="Revenue ($M)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        {/* Sector Distribution */}
        <ScrollReveal delay={150}>
          <div className="bg-background rounded-2xl border border-border p-6 h-[400px]">
            <div className="mb-6">
              <h3 className="font-bold text-lg">Portfolio by Sector</h3>
              <p className="text-sm text-muted-foreground">Distribution of companies across industries</p>
            </div>
            <div className="flex items-center gap-8 h-[calc(100%-80px)]">
              <div className="flex-1 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={3}
                      dataKey="value"
                      onMouseEnter={(_, index) => setHoveredSector(sectorData[index].name)}
                      onMouseLeave={() => setHoveredSector(null)}
                    >
                      {sectorData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          opacity={hoveredSector === null || hoveredSector === entry.name ? 1 : 0.3}
                          style={{ transition: 'opacity 0.3s ease' }}
                        />
                      ))}
                    </Pie>
                    <Tooltip 
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl">
                              <p className="font-semibold">{payload[0].name}</p>
                              <p className="text-primary font-bold">{payload[0].value}%</p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {sectorData.map((sector) => (
                  <div 
                    key={sector.name}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 cursor-default",
                      hoveredSector === sector.name ? "bg-secondary scale-105" : "hover:bg-secondary/50"
                    )}
                    onMouseEnter={() => setHoveredSector(sector.name)}
                    onMouseLeave={() => setHoveredSector(null)}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }} />
                    <span className="text-sm font-medium">{sector.name}</span>
                    <span className="text-sm text-muted-foreground ml-auto">{sector.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Charts Row 2 - Innovation Metrics */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Monthly Activity */}
        <ScrollReveal delay={100} className="lg:col-span-2">
          <div className="bg-background rounded-2xl border border-border p-6 h-[350px]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-lg">Monthly Activity</h3>
                <p className="text-sm text-muted-foreground">Mentorship hours & partnerships</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={monthlyMetrics} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(220, 9%, 46%)" />
                <YAxis yAxisId="left" tick={{ fontSize: 11 }} stroke="hsl(220, 9%, 46%)" />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} stroke="hsl(220, 9%, 46%)" />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  yAxisId="left"
                  dataKey="mentorship" 
                  fill="hsl(173, 83%, 44%)" 
                  radius={[4, 4, 0, 0]}
                  name="Mentorship Hours"
                />
                <Bar 
                  yAxisId="right"
                  dataKey="partnerships" 
                  fill="hsl(170, 80%, 72%)" 
                  radius={[4, 4, 0, 0]}
                  name="New Partnerships"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        {/* IP & Innovation Stats */}
        <ScrollReveal delay={150}>
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl border border-white/10 p-6 h-[350px] text-white">
            <div className="mb-4">
              <h3 className="font-bold text-lg">IP Portfolio</h3>
              <p className="text-sm text-white/60">Intellectual property assets</p>
            </div>
            <div className="space-y-6 mt-8">
              <div className="group">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-teal-400" />
                    <span className="text-sm">Patents Filed</span>
                  </div>
                  <span className="font-bold text-teal-400">{ecosystemStats.patents}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-teal-300 rounded-full transition-all duration-1000"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-teal-300" />
                    <span className="text-sm">Trademarks</span>
                  </div>
                  <span className="font-bold text-teal-300">{ecosystemStats.trademarks}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-400 to-teal-200 rounded-full transition-all duration-1000"
                    style={{ width: '90%' }}
                  />
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-teal-200" />
                    <span className="text-sm">Products Launched</span>
                  </div>
                  <span className="font-bold text-teal-200">{ecosystemStats.productsLaunched}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-300 to-teal-100 rounded-full transition-all duration-1000"
                    style={{ width: '55%' }}
                  />
                </div>
              </div>
              <div className="group">
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-white/80" />
                    <span className="text-sm">Mentorship Hours</span>
                  </div>
                  <span className="font-bold text-white/80">{ecosystemStats.mentorshipHours.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-white/60 to-white/40 rounded-full transition-all duration-1000"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Funding Stages */}
      <ScrollReveal delay={100}>
        <div className="bg-background rounded-2xl border border-border p-6">
          <div className="mb-6">
            <h3 className="font-bold text-lg">Companies by Funding Stage</h3>
            <p className="text-sm text-muted-foreground">Distribution across investment stages</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {fundingStages.map((stage, index) => (
              <div 
                key={stage.stage}
                className="relative p-5 rounded-xl bg-gradient-to-br from-secondary to-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  {index + 1}
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stage.companies}</div>
                <div className="text-sm font-medium text-foreground/80 mb-2">{stage.stage}</div>
                <div className="text-xs text-muted-foreground">
                  Avg raise: <span className="text-primary font-medium">${stage.avgRaise}M</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={Handshake} value={ecosystemStats.partnerships} label="Total Partnerships" trend={28} delay={0} color="teal" />
        <StatCard icon={DollarSign} value={ecosystemStats.totalRevenue} label="Total Revenue" prefix="$" suffix="M" trend={10} delay={50} />
        <StatCard icon={Award} value={ecosystemStats.patents + ecosystemStats.trademarks} label="IP Assets" trend={15} delay={100} color="emerald" />
        <StatCard icon={Clock} value={ecosystemStats.mentorshipHours} label="Mentorship Hours" delay={150} />
      </div>
    </div>
  );
}
