import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const NAVY = '#001A4D';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

type FAQ = { q: string; a: string };

const SHARED_FAQS: FAQ[] = [
  {
    q: 'How much funding can I receive?',
    a: 'The program provides a 1:1 matching grant covering up to 50% of approved Total Eligible Project Costs, to a maximum of $20,000 per SME in any given fiscal year.',
  },
  {
    q: 'Do I have to be a NORCAT Innovation client to apply?',
    a: 'Yes. You must be a registered NORCAT Innovation client. If you are not currently a client, complete the Discovery Document Form to begin the intake process before applying.',
  },
  {
    q: 'When are applications open?',
    a: 'Applications are open from 2025 through 2027. Approved projects must reach completion within 6 months of the date of approval.',
  },
  {
    q: 'How does reimbursement work?',
    a: 'SMEs are required to pay project service providers 100% of invoiced costs, including all applicable HST, prior to submitting for reimbursement under the program.',
  },
  {
    q: 'Do I need to submit quotes?',
    a: 'Yes. With the exception of IP Research and Protection projects, applicants must submit a minimum of two competitive quotes from independent and unrelated service providers. Each quote must include scope of work, hourly rate or total cost, and estimated hours required.',
  },
  {
    q: 'What reporting is required after the project?',
    a: 'Recipients submit formal feedback on the project\'s impact and complete a final survey capturing key success metrics. Applicants may also be contacted for follow-up feedback for up to five years post-completion.',
  },
];

export const IAP_FAQS: FAQ[] = [
  {
    q: 'Who is eligible for IAP?',
    a: 'Growth-oriented, for-profit SMEs (sole proprietorship, partnership, or corporation) located within NORCAT Innovation\'s service area of Greater Sudbury, Ontario, developing or commercializing an innovative tech-based service, product, or process.',
  },
  {
    q: 'Is IAP available outside of Greater Sudbury?',
    a: 'No. The IAP program is not available to applicants outside of the Greater Sudbury Region.',
  },
  {
    q: 'What project costs are eligible?',
    a: 'Planning & Development (business planning, market research, product development and testing, feasibility analysis, certifications, in-market licenses, IP research and protection, market entry fees), Sales & Marketing (trade show exhibiting and travel, sales training, marketing tests, e-commerce and promotions, export market development), and Business Management & Enhancement (management support and training, business capacity development, productivity or lean production).',
  },
  {
    q: 'What activities are NOT eligible?',
    a: 'Resellers or distributors are not supported. Ineligible costs include capital and ongoing operational costs, existing staff wages, administration, and rolling stock.',
  },
  {
    q: 'Can I use IAP for a project already underway?',
    a: 'No. The proposed project must represent a new, high-impact strategic initiative. It cannot duplicate any project funded in previous fiscal years and cannot be an initiative already underway.',
  },
  ...SHARED_FAQS,
  {
    q: 'How do I apply?',
    a: 'Confirm eligibility (current NORCAT Innovation client, or complete the Discovery Document Form), connect with your assigned mentor or advisor to request the official IAP application form, submit your completed application through them for review, and the NORCAT Innovation team will follow up with next steps.',
  },
];

export const RAII_FAQS: FAQ[] = [
  {
    q: 'Who is eligible for RAII?',
    a: 'Growth-oriented, for-profit Northern Ontario SMEs operating primarily in Mining Supply, Health Sciences, Advanced Manufacturing, Forestry, or Agriculture, demonstrating a clear need for AI integration with a project at Technology Readiness Level (TRL) 4 or higher.',
  },
  {
    q: 'What does TRL 4+ mean?',
    a: 'TRL 4 indicates the technology is at prototype stage or beyond. Your AI commercialization or integration proposal should be past initial concept and able to demonstrate component-level validation in a relevant environment.',
  },
  {
    q: 'What are the two eligible pillars?',
    a: 'Pillar 1 - AI Productization & Commercialization (demonstration and commercialization of Canadian-made AI technologies; scale-up and capacity development). Pillar 2 - AI Adoption (strategic integration of AI technologies that drive innovation, growth, and productivity; process re-engineering and capacity development).',
  },
  {
    q: 'What project costs are eligible?',
    a: 'Technology and capital (AI servers, GPUs, cloud infrastructure, software licenses, subscriptions, data platforms); training and commercialization (specialized AI training, market validation, compliance preparation); and professional services (AI solution design and development, consulting, benchmarking, prototyping, system testing).',
  },
  {
    q: 'What activities are NOT eligible?',
    a: 'Ongoing operating costs, administration, staff salaries or internal overhead, and any activities unrelated to AI integration or commercialization.',
  },
  ...SHARED_FAQS,
];

type Props = {
  program: 'iap' | 'raii';
  eyebrow?: string;
  heading?: string;
};

const GrantFAQSection = ({ program, eyebrow = 'FAQ', heading }: Props) => {
  const faqs = program === 'iap' ? IAP_FAQS : RAII_FAQS;
  const title =
    heading ??
    (program === 'iap' ? 'IAP - Frequently Asked Questions' : 'RAII - Frequently Asked Questions');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28" style={{ background: PAPER, fontFamily: FONT }}>
      <div className="mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10">
        <div className="text-center mb-12">
          <p
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-4 justify-center"
            style={{ color: TEAL }}
          >
            <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
            {eyebrow}
          </p>
          <HelpCircle className="w-10 h-10 mx-auto mb-5" style={{ color: TEAL }} />
          <h2
            className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl"
            style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}
          >
            {title.split('-')[0]}-
            <span style={{ color: TEAL }}>{title.split('-')[1]?.trim()}</span>
          </h2>
        </div>

        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const open = openIdx === i;
            return (
              <li
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ background: 'white', border: '1px solid #d9dde5' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 md:px-8 py-5 md:py-6"
                  aria-expanded={open}
                >
                  <span
                    className="font-bold text-base md:text-lg"
                    style={{ color: NAVY, fontFamily: FONT }}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{ color: TEAL, transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {open && (
                  <div
                    className="px-6 md:px-8 pb-6 md:pb-7 text-sm md:text-base leading-relaxed"
                    style={{ color: '#475068' }}
                  >
                    {item.a}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default GrantFAQSection;
