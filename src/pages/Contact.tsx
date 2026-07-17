import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Send,
  Clock,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  Instagram,
} from 'lucide-react';

const TEAL = '#00B398';
const BLUE = '#003DA5';
const NAVY = '#001A4D';
const FONT = "'Open Sans', system-ui, sans-serif";

const contactTopics = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'programs', label: 'Programs & Services' },
  { value: 'funding', label: 'Funding & Capital' },
  { value: 'mentorship', label: 'Mentorship' },
  { value: 'facilities', label: 'Innovation Space & Labs' },
  { value: 'partnerships', label: 'Partnerships & Media' },
];

const locations = [
  {
    name: 'NORCAT Innovation Headquarters',
    address: '1547 Maley Drive, Sudbury, ON P3A 4R7',
    phone: '705-521-6600',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    topic: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.topic || !formData.message) {
      toast({
        title: 'Missing information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.consent) {
      toast({
        title: 'Consent required',
        description: 'Please agree to our privacy policy before submitting.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('contact_submissions').insert({
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      topic: formData.topic,
      message: formData.message,
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: 'Submission failed',
        description: error.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Message sent',
      description: "Thanks for reaching out. We'll be in touch within 2 business days.",
    });

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      topic: '',
      message: '',
      consent: false,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, #ffffff 0%, transparent 70%)` }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: `radial-gradient(circle, #ffffff 0%, transparent 70%)` }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
          <div className="max-w-3xl">
            <p
              className="text-xs font-semibold tracking-[0.25em] uppercase mb-5"
              style={{ color: '#FFFFFF' }}

            >
              START THE CONVERSATION
            </p>
            <h1
              className="font-black uppercase leading-[0.9] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: FONT, color: 'white' }}
            >
              GET IN TOUCH.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl">
              Have a question, partnership idea, or just want to learn more about how we can help?
              Reach out — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="rounded-[28px] border border-gray-100 bg-white p-8 md:p-10 shadow-xl shadow-gray-900/5">
                  <h2
                    className="font-black uppercase leading-[0.95] tracking-tight text-2xl md:text-3xl mb-2"
                    style={{ fontFamily: FONT, color: NAVY }}
                  >
                    SEND US A MESSAGE
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: '#475068' }}>
                    Fill out the form below and a member of our team will respond within two business days.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleChange('firstName', e.target.value)}
                          placeholder="Jane"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleChange('lastName', e.target.value)}
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="jane@company.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="(705) 555-0123"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company / Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="topic">Topic *</Label>
                        <Select
                          value={formData.topic}
                          onValueChange={(value) => handleChange('topic', value)}
                        >
                          <SelectTrigger id="topic" className="w-full">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            {contactTopics.map((topic) => (
                              <SelectItem key={topic.value} value={topic.value}>
                                {topic.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us how we can help..."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleChange('consent', checked === true)}
                        className="mt-1"
                      />
                      <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
                        I agree to NORCAT Innovation collecting and storing my information so we can respond to my inquiry. See our <Link to="/privacy" className="underline hover:no-underline" style={{ color: BLUE }}>Privacy Policy</Link>.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center gap-3 px-8 py-6 h-auto rounded-full text-base font-bold transition-transform hover:scale-[1.02]"
                      style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <span
                        className="inline-flex items-center justify-center size-8 rounded-full"
                        style={{ background: NAVY, color: 'white' }}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                      </span>
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={100}>
                <div className="rounded-[28px] p-8 md:p-10 text-white" style={{ background: `linear-gradient(160deg, ${BLUE} 0%, ${TEAL} 100%)` }}>
                  <h3
                    className="font-black uppercase leading-[0.95] tracking-tight text-xl md:text-2xl mb-6"
                    style={{ fontFamily: FONT }}
                  >
                    CONTACT INFO
                  </h3>
                  <div className="space-y-5">
                    <a
                      href="mailto:info@norcat.org"
                      className="flex items-start gap-4 group"
                    >
                      <div
                        className="inline-flex items-center justify-center size-10 rounded-full shrink-0"
                        style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
                      >
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-white/80 group-hover:text-white transition-colors">
                          info@norcat.org
                        </p>
                      </div>
                    </a>
                    <a href="tel:17055216600" className="flex items-start gap-4 group">
                      <div
                        className="inline-flex items-center justify-center size-10 rounded-full shrink-0"
                        style={{ background: TEAL, color: NAVY }}
                      >
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-white/80 group-hover:text-white transition-colors">
                          705-521-6600
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div
                        className="inline-flex items-center justify-center size-10 rounded-full shrink-0"
                        style={{ background: TEAL, color: NAVY }}
                      >
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Hours</p>
                        <p className="text-white/80">Monday – Friday, 8:30 AM – 4:30 PM EST</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/15">
                    <p className="font-semibold text-white mb-4">Follow us</p>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.linkedin.com/company/norcat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://twitter.com/norcat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.youtube.com/user/NORCAT1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label="YouTube"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="rounded-[28px] border border-gray-100 bg-white p-8 md:p-10 shadow-xl shadow-gray-900/5">
                  <h3
                    className="font-black uppercase leading-[0.95] tracking-tight text-xl md:text-2xl mb-6"
                    style={{ fontFamily: FONT, color: NAVY }}
                  >
                    VISIT US
                  </h3>
                  <div className="space-y-6">
                    {locations.map((location) => (
                      <div key={location.name} className="flex items-start gap-4">
                        <div
                          className="inline-flex items-center justify-center size-10 rounded-full shrink-0"
                          style={{ background: `${TEAL}15`, color: TEAL }}
                        >
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold" style={{ color: NAVY }}>
                            {location.name}
                          </p>
                          <p className="text-sm leading-relaxed mt-1" style={{ color: '#475068' }}>
                            {location.address}
                          </p>
                          <a
                            href={`tel:${location.phone.replace(/-/g, '')}`}
                            className="text-sm font-medium hover:underline mt-1 inline-block"
                            style={{ color: TEAL }}
                          >
                            {location.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
                    <iframe
                      title="NORCAT Innovation Headquarters map"
                      src="https://www.google.com/maps?q=1547+Maley+Drive,+Sudbury,+ON+P3A+4R7&output=embed"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
