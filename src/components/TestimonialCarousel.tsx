import { useState, useEffect, CSSProperties } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "NORCAT was a true partner and instrumental in helping us launch our company. They provided us with the experience, know-how, and credibility we needed to develop a world-class startup here in the North.",
    name: "Dr. Joe Eibl",
    role: "CEO and Co-founder, FloSonics Medical",
    initials: "JE",
  },
  {
    quote: "Tom Fortin provided me with invaluable, direct support—giving me time, resources, and the space to complete my critical first production run of 250 or 300 units. Tom coached me on purchasing the right equipment and instilled a foundational principle: 'We want to have the high-skilled labour and the high-skilled jobs here... keep that value chain mostly here.'",
    name: "Matthew Gougeon",
    role: "Founder & CEO, Perspic",
    initials: "MG",
  },
  {
    quote: "While the science was strong, the start-up world was unfamiliar; we are not trained for that space. Mentors like Peter Dal Bianco were vital for attracting many investors to the company—he has a tremendous attitude; you can't say no to the guy.",
    name: "Dr. Amadeo Parissenti",
    role: "Co-Founder & CSO, RNA Diagnostics",
    initials: "AP",
  },
  {
    quote: "Once I was paired with Mr. Peter Dal Bianco, things really changed for my company. I don't think I'd be where I am today without somebody like Peter.",
    name: "Sheri Tomchick",
    role: "Founder and CEO, Plan A and StaffStat",
    initials: "ST",
  },
  {
    quote: "As a startup founder, you need brutally honest feedback, and that is exactly what the mentors provided, and offered crucial credibility with new investors.",
    name: "Vineet Johnson",
    role: "Founder & CEO, iRegained",
    initials: "VJ",
  },
  {
    quote: "The support from NORCAT was critical in our decision to relocate to Sudbury. And the mentorship board was instrumental in our success, helping launch us into the ecosystem and leading us to our first Sudbury-based angel investor.",
    name: "Tabassum Pasha",
    role: "COO & Co-Founder, Waive",
    initials: "TP",
  },
  {
    quote: "The NORCAT team was great, professional, and everything we needed. They provided very supportive follow-ups throughout our time testing at the Underground Centre.",
    name: "ThinkRF",
    role: "Founder/Representative",
    initials: "TR",
  },
  {
    quote: "In the Tom Fortin Discovery Centre, a space built for experimentation and practical innovation that is sovereign to Canada, and Tom's support played a significant role in providing the environment and the materials we required to test, refine, and prove out our prototypes.",
    name: "Michael Gribbons",
    role: "Founder & CEO, Maestro Digital Mine",
    initials: "MG",
  },
];

interface TestimonialCarouselProps {
  glassCardStyle: CSSProperties;
  iconContainerStyle: CSSProperties;
}

export function TestimonialCarousel({ glassCardStyle, iconContainerStyle }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <div className="rounded-[20px] p-8" style={glassCardStyle}>
      <Quote className="w-8 h-8 mb-4 opacity-40" style={{ color: 'hsl(168, 100%, 35%)' }} />
      <div
        className="transition-opacity duration-400"
        style={{ opacity: fade ? 1 : 0, transitionDuration: '400ms' }}
      >
        <p className="text-lg italic font-light leading-relaxed mb-6" style={{ color: 'hsl(220, 15%, 30%)' }}>
          "{t.quote}"
        </p>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={iconContainerStyle}>
            <span style={{ color: 'hsl(168, 100%, 35%)' }} className="text-lg font-bold">{t.initials}</span>
          </div>
          <div>
            <p className="font-semibold" style={{ color: 'hsl(220, 15%, 20%)' }}>{t.name}</p>
            <p className="text-sm font-light" style={{ color: 'hsl(220, 15%, 40%)' }}>{t.role}</p>
          </div>
        </div>
      </div>
      {/* Dots */}
      <div className="flex gap-1.5 mt-6 justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFade(false); setTimeout(() => { setCurrent(i); setFade(true); }, 400); }}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: i === current ? 'hsl(168, 100%, 35%)' : 'hsl(220, 15%, 75%)',
              transform: i === current ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
