import { useState } from 'react';
import { 
  Building2, TrendingUp, DollarSign, Globe, Users, 
  Lightbulb, Handshake, Award, Package, Clock,
  Sparkles, Rocket
} from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { ScrollReveal } from '@/components/ScrollReveal';
import { cn } from '@/lib/utils';

// ── Shared glassmorphic card style ──
const glassCardStyle: React.CSSProperties = {
  background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
  borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
  borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
  borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
  boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
};

// ── Neumorphic icon container style ──
const neumorphicIconStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow: 'inset 0 2px 4px 0 hsla(220, 15%, 100%, 0.4), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.08), 0 4px 12px hsla(220, 15%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
};

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
  { name: 'Mining Tech', value: 35, color: 'hsl(168, 100%, 28%)' },
  { name: 'Cleantech', value: 22, color: 'hsl(168, 100%, 35%)' },
  { name: 'Industrial IoT', value: 18, color: 'hsl(168, 80%, 45%)' },
  { name: 'AI & ML', value: 15, color: 'hsl(168, 60%, 55%)' },
  { name: 'Critical Minerals', value: 10, color: 'hsl(168, 45%, 65%)' },
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
  delay = 0 
}: { 
  icon: any; 
  value: number; 
  label: string; 
  prefix?: string; 
  suffix?: string; 
  trend?: number;
  delay?: number;
}) => {
  return (
    <ScrollReveal delay={delay}>
      <div 
        className="rounded-[20px] p-7 text-center hover:scale-[1.03] transition-transform duration-300"
        style={glassCardStyle}
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={neumorphicIconStyle}>
          <Icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
        </div>
        <div className="text-3xl md:text-4xl font-black mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>
          <AnimatedCounter value={value} prefix={prefix} suffix={suffix} decimals={prefix === '$' ? 1 : 0} />
        </div>
        {trend && (
          <div className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full mb-2" style={{
            background: 'hsl(168 100% 35% / 0.1)',
            color: 'hsl(168, 100%, 28%)',
          }}>
            <TrendingUp className="h-3 w-3" />
            +{Math.abs(trend)}%
          </div>
        )}
        <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 30%)' }}>{label}</p>
      </div>
    </ScrollReveal>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl p-3 shadow-xl" style={{
        background: 'hsla(220, 15%, 95%, 0.95)',
        backdropFilter: 'blur(12px)',
        border: '1px solid hsla(168, 30%, 90%, 0.5)',
      }}>
        <p className="font-semibold mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>{label}</p>
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={activeFilter === filter.key ? {
                background: 'linear-gradient(135deg, hsl(168 100% 28%) 0%, hsl(168 80% 22%) 100%)',
                color: 'white',
                boxShadow: '0 4px 16px hsla(168, 100%, 20%, 0.3)',
              } : {
                ...glassCardStyle,
                color: 'hsl(220, 15%, 30%)',
                cursor: 'pointer',
              }}
            >
              <filter.icon className="h-4 w-4" />
              {filter.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <StatCard icon={Building2} value={ecosystemStats.totalCompanies} label="Total Companies" trend={12} delay={0} />
        <StatCard icon={Rocket} value={ecosystemStats.newCompanies} label="New This Year" trend={18} delay={50} />
        <StatCard icon={DollarSign} value={ecosystemStats.totalInvestment} label="Total Investment" prefix="$" suffix="M" trend={15} delay={100} />
        <StatCard icon={Globe} value={ecosystemStats.exportRevenue} label="Export Revenue" prefix="$" suffix="M" trend={22} delay={150} />
        <StatCard icon={Users} value={2150} label="Jobs Created" trend={10} delay={200} />
      </div>

      {/* Charts Row 1 */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Growth Timeline */}
        <ScrollReveal delay={100}>
          <div className="rounded-[20px] p-7 h-[400px]" style={glassCardStyle}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-lg" style={{ color: 'hsl(220, 15%, 20%)' }}>Ecosystem Growth</h3>
                <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>Investment & Revenue over time</p>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(168, 100%, 35%)' }} />
                  <span style={{ color: 'hsl(220, 15%, 40%)' }}>Investment ($M)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: 'hsl(168, 60%, 55%)' }} />
                  <span style={{ color: 'hsl(220, 15%, 40%)' }}>Revenue ($M)</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(168, 100%, 35%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(168, 100%, 35%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(168, 60%, 55%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(168, 60%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsla(220, 13%, 70%, 0.3)" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: 'hsl(220, 15%, 40%)' }} stroke="hsla(220, 13%, 70%, 0.3)" />
                <YAxis tick={{ fontSize: 12, fill: 'hsl(220, 15%, 40%)' }} stroke="hsla(220, 13%, 70%, 0.3)" />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="investment" 
                  stroke="hsl(168, 100%, 35%)" 
                  strokeWidth={2}
                  fill="url(#investmentGradient)" 
                  name="Investment ($M)"
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(168, 60%, 55%)" 
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
          <div className="rounded-[20px] p-7 h-[400px]" style={glassCardStyle}>
            <div className="mb-6">
              <h3 className="font-bold text-lg" style={{ color: 'hsl(220, 15%, 20%)' }}>Portfolio by Sector</h3>
              <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>Distribution of companies across industries</p>
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
                            <div className="rounded-xl p-3 shadow-xl" style={{
                              background: 'hsla(220, 15%, 95%, 0.95)',
                              backdropFilter: 'blur(12px)',
                              border: '1px solid hsla(168, 30%, 90%, 0.5)',
                            }}>
                              <p className="font-semibold" style={{ color: 'hsl(220, 15%, 20%)' }}>{payload[0].name}</p>
                              <p className="font-bold" style={{ color: 'hsl(168, 100%, 28%)' }}>{payload[0].value}%</p>
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
                      hoveredSector === sector.name ? "scale-105" : ""
                    )}
                    style={hoveredSector === sector.name ? {
                      background: 'hsla(168, 25%, 85%, 0.3)',
                    } : undefined}
                    onMouseEnter={() => setHoveredSector(sector.name)}
                    onMouseLeave={() => setHoveredSector(null)}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }} />
                    <span className="text-sm font-medium" style={{ color: 'hsl(220, 15%, 20%)' }}>{sector.name}</span>
                    <span className="text-sm ml-auto" style={{ color: 'hsl(220, 15%, 40%)' }}>{sector.value}%</span>
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
          <div className="rounded-[20px] p-7 h-[350px]" style={glassCardStyle}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-lg" style={{ color: 'hsl(220, 15%, 20%)' }}>Monthly Activity</h3>
                <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>Mentorship hours & partnerships</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={monthlyMetrics} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsla(220, 13%, 70%, 0.3)" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'hsl(220, 15%, 40%)' }} stroke="hsla(220, 13%, 70%, 0.3)" />
                <YAxis yAxisId="left" tick={{ fontSize: 11, fill: 'hsl(220, 15%, 40%)' }} stroke="hsla(220, 13%, 70%, 0.3)" />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11, fill: 'hsl(220, 15%, 40%)' }} stroke="hsla(220, 13%, 70%, 0.3)" />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  yAxisId="left"
                  dataKey="mentorship" 
                  fill="hsl(168, 100%, 35%)" 
                  radius={[4, 4, 0, 0]}
                  name="Mentorship Hours"
                />
                <Bar 
                  yAxisId="right"
                  dataKey="partnerships" 
                  fill="hsl(168, 60%, 55%)" 
                  radius={[4, 4, 0, 0]}
                  name="New Partnerships"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ScrollReveal>

        {/* IP & Innovation Stats */}
        <ScrollReveal delay={150}>
          <div className="rounded-[20px] p-7 h-[350px]" style={glassCardStyle}>
            <div className="mb-4">
              <h3 className="font-bold text-lg" style={{ color: 'hsl(220, 15%, 20%)' }}>IP Portfolio</h3>
              <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>Intellectual property assets</p>
            </div>
            <div className="space-y-6 mt-8">
              {[
                { icon: Award, label: 'Patents Filed', value: ecosystemStats.patents, width: '75%' },
                { icon: Lightbulb, label: 'Trademarks', value: ecosystemStats.trademarks, width: '90%' },
                { icon: Package, label: 'Products Launched', value: ecosystemStats.productsLaunched, width: '55%' },
                { icon: Clock, label: 'Mentorship Hours', value: ecosystemStats.mentorshipHours.toLocaleString(), width: '85%' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center" style={neumorphicIconStyle}>
                        <item.icon className="h-3.5 w-3.5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                      </div>
                      <span className="text-sm" style={{ color: 'hsl(220, 15%, 30%)' }}>{item.label}</span>
                    </div>
                    <span className="font-bold text-sm" style={{ color: 'hsl(168, 100%, 28%)' }}>{item.value}</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'hsla(220, 15%, 80%, 0.4)' }}>
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: item.width, background: 'linear-gradient(90deg, hsl(168, 100%, 35%), hsl(168, 80%, 50%))' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Funding Stages */}
      <ScrollReveal delay={100}>
        <div className="rounded-[20px] p-7" style={glassCardStyle}>
          <div className="mb-6">
            <h3 className="font-bold text-lg" style={{ color: 'hsl(220, 15%, 20%)' }}>Companies by Funding Stage</h3>
            <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>Distribution across investment stages</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {fundingStages.map((stage, index) => (
              <div 
                key={stage.stage}
                className="relative rounded-[16px] p-5 hover:scale-[1.03] transition-transform duration-300"
                style={glassCardStyle}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center absolute top-3 right-3 text-xs font-bold" style={{
                  ...neumorphicIconStyle,
                  color: 'hsl(168, 100%, 35%)',
                }}>
                  {index + 1}
                </div>
                <div className="text-2xl font-black mb-1" style={{ color: 'hsl(220, 15%, 20%)' }}>{stage.companies}</div>
                <div className="text-sm font-medium mb-2" style={{ color: 'hsl(220, 15%, 25%)' }}>{stage.stage}</div>
                <div className="text-xs font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>
                  Avg raise: <span className="font-medium" style={{ color: 'hsl(168, 100%, 28%)' }}>${stage.avgRaise}M</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Bottom Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <StatCard icon={Handshake} value={ecosystemStats.partnerships} label="Total Partnerships" trend={28} delay={0} />
        <StatCard icon={DollarSign} value={ecosystemStats.totalRevenue} label="Total Revenue" prefix="$" suffix="M" trend={10} delay={50} />
        <StatCard icon={Award} value={ecosystemStats.patents + ecosystemStats.trademarks} label="IP Assets" trend={15} delay={100} />
        <StatCard icon={Clock} value={ecosystemStats.mentorshipHours} label="Mentorship Hours" delay={150} />
      </div>
    </div>
  );
}
