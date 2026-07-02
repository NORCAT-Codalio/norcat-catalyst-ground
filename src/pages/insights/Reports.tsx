import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { FileText, Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const reports = [
  {
    title: '2025 Annual Impact Report',
    date: 'December 2025',
    description: 'A comprehensive look at our ecosystem impact and portfolio performance.',
    type: 'Annual Report',
  },
  {
    title: 'Northern Ontario Tech Ecosystem',
    date: 'November 2025',
    description: 'Analysis of the innovation landscape in Northern Ontario.',
    type: 'Research',
  },
  {
    title: 'Mining Technology Trends 2026',
    date: 'October 2025',
    description: 'Key trends shaping the future of mining technology.',
    type: 'Industry Report',
  },
  {
    title: 'Q3 2025 Portfolio Update',
    date: 'September 2025',
    description: 'Quarterly update on portfolio company performance.',
    type: 'Quarterly Update',
  },
];

const InsightsReports = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-glow opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 badge-dark mb-8">
              <FileText className="w-4 h-4" />
              Insights
            </div>
            <h1 className="headline-hero text-white mb-6">
              <span className="text-gradient">Reports</span>
            </h1>
            <p className="body-xl text-white/70 max-w-2xl">
              Research, analysis, and insights from our team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="relative card-modern p-8 h-full flex flex-col">
                  <span className="absolute top-4 left-4 badge text-xs">{report.type}</span>
                  <div className="flex items-center gap-4 mb-4 mt-8">
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </span>
                  </div>
                  <h2 className="headline-sm mb-3">{report.title}</h2>
                  <p className="body-md flex-grow">{report.description}</p>
                  <Button variant="outline" className="mt-4 self-start">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsReports;
