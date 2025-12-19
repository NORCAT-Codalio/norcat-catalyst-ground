import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, HelpCircle, Rocket, Users, Target, FileCheck } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { VentureHero } from '@/components/VentureHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
const eligibilityCriteria = [
  'Tech-enabled startup with IP potential',
  'Canadian-incorporated or willing to incorporate',
  'Early-stage (pre-seed to Series A)',
  'Committed founder(s) working full-time on the company',
  'Willingness to engage with mentorship and programming',
];

const whatHappensNext = [
  {
    step: '1',
    title: 'Application Review',
    description: 'Our team reviews your application within 5 business days.',
  },
  {
    step: '2',
    title: 'Discovery Call',
    description: 'If there\'s a fit, we\'ll schedule a call to learn more about your startup.',
  },
  {
    step: '3',
    title: 'Program Matching',
    description: 'We identify the best combination of programs for your stage and goals.',
  },
  {
    step: '4',
    title: 'Onboarding',
    description: 'Welcome to the ecosystem! You\'ll be matched with mentors and resources.',
  },
];

const faqs = [
  {
    question: 'Is there a cost to participate?',
    answer: 'No. NORCAT Innovation programs are free for accepted startups. We\'re funded by the Government of Ontario to support founders.',
  },
  {
    question: 'Do I need to be located in Sudbury?',
    answer: 'No. While we\'re based in Sudbury, we support startups across Ontario. Many of our programs are available virtually.',
  },
  {
    question: 'What stage do you accept?',
    answer: 'We work with startups from pre-seed through Series A. If you have an idea but haven\'t incorporated yet, we can help with that too.',
  },
  {
    question: 'Do you take equity?',
    answer: 'Our core programs do not require equity. The Sudbury Catalyst Fund makes equity investments, but that\'s a separate, optional program.',
  },
];

export default function Apply() {
  const [formData, setFormData] = useState({
    founderName: '',
    email: '',
    companyName: '',
    website: '',
    stage: '',
    sector: '',
    description: '',
    challenge: '',
    hearAbout: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch within 5 business days.",
    });
    setFormData({
      founderName: '',
      email: '',
      companyName: '',
      website: '',
      stage: '',
      sector: '',
      description: '',
      challenge: '',
      hearAbout: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* New Interactive Hero */}
      <VentureHero />

      {/* Main Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-background rounded-2xl border border-border p-8">
                  <h2 className="headline-sm mb-6">Your Application</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="founderName">Your Name *</Label>
                        <Input
                          id="founderName"
                          name="founderName"
                          value={formData.founderName}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@yourcompany.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Your Startup Inc."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="stage">Stage *</Label>
                        <select
                          id="stage"
                          name="stage"
                          value={formData.stage}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          required
                        >
                          <option value="">Select stage</option>
                          <option value="idea">Idea Stage</option>
                          <option value="pre-seed">Pre-Seed</option>
                          <option value="seed">Seed</option>
                          <option value="series-a">Series A</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sector">Sector *</Label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          required
                        >
                          <option value="">Select sector</option>
                          <option value="mining-tech">Mining Technology</option>
                          <option value="cleantech">Cleantech / BEV</option>
                          <option value="industrial">Industrial IoT</option>
                          <option value="ai-software">AI / Software</option>
                          <option value="critical-minerals">Critical Minerals</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">
                        Tell us about your startup *
                        <span className="text-muted-foreground font-normal ml-2">(2-3 sentences)</span>
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="What does your company do? What problem are you solving?"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="challenge">
                        What's your biggest challenge right now?
                        <span className="text-muted-foreground font-normal ml-2">(optional)</span>
                      </Label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        placeholder="Funding, product-market fit, hiring, technical challenges..."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="hearAbout">How did you hear about us?</Label>
                      <Input
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        placeholder="Event, referral, search..."
                      />
                    </div>

                    <Button type="submit" className="w-full btn-hero">
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Eligibility */}
              <ScrollReveal delay={100}>
                <div className="bg-secondary rounded-2xl p-6">
                  <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Who Should Apply
                  </h3>
                  <ul className="space-y-3">
                    {eligibilityCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* What Happens Next */}
              <ScrollReveal delay={200}>
                <div className="bg-background rounded-2xl border border-border p-6">
                  <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    What Happens Next
                  </h3>
                  <div className="space-y-4">
                    {whatHappensNext.map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-semibold text-sm">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="headline-lg mb-6">
                Common <span className="text-gradient-teal">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-background rounded-xl border border-border p-6 h-full">
                  <h3 className="font-semibold mb-2 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
