import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Users,
  Shield,
  Target,
  Handshake,
  X,
  ExternalLink,
  CheckCircle,
  Quote,
} from 'lucide-react';

import signatureLines from '@/assets/signature-lines.png';
import mentorshipHeroBg from '@/assets/mentorship-hero-bg.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// Mentor headshots
import tomFortinImg from '@/assets/mentors/tom-fortin.png';
import cathyNadjiwonImg from '@/assets/mentors/cathy-nadjiwon.png';
import peterDalBiancoImg from '@/assets/mentors/peter-dal-bianco.png';
import jamieDewarImg from '@/assets/mentors/jamie-dewar.png';
import bernieAhoImg from '@/assets/mentors/bernie-aho.png.asset.json';
import barbWardDagnonImg from '@/assets/mentors/barb-ward-dagnon.png';
import jeffFullerImg from '@/assets/mentors/jeff-fuller.png';
import dennisReichImg from '@/assets/mentors/dennis-reich.jpg';
import donDuvalImg from '@/assets/mentors/don-duval.jpg';
import ianLaneImg from '@/assets/mentors/ian-lane.png';
import ehsanMirdamadiImg from '@/assets/mentors/ehsan-mirdamadi.png';
import emilyMantleImg from '@/assets/mentors/emily-mantle.png.asset.json';
import sheriTomchickImg from '@/assets/mentors/sheri-tomchick.png';
import chadPallopsonImg from '@/assets/mentors/chad-pallopson.png';
import michaelDolinarImg from '@/assets/mentors/michael-dolinar.png';
import davidPasiekaImg from '@/assets/mentors/david-pasieka.png';
import peyvandMelatiImg from '@/assets/mentors/peyvand-melati.png';

// ── Brand tokens (mirrors Home2 / About) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const BORDER = 'rgba(255,255,255,0.10)';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, center = false }: { children: React.ReactNode; center?: boolean }) => (
  <p
    className={`${center ? 'inline-flex justify-center' : 'inline-flex'} items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5`}
    style={{ fontFamily: FONT, color: TEAL }}
  >
    <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As
    className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}
  >
    {children}
  </As>
);

const mentors = [
  { name: 'Don Duval', image: donDuvalImg, tags: ['Entrepreneur in Residence', 'Leadership'], bio: 'Don brings more than two decades of leadership experience across Canada\'s innovation ecosystem. He is currently Principal, Head of Mining at Evok Innovations, and serves as NORCAT\'s Entrepreneur in Residence. Previously, Don served as CEO of NORCAT, where he advanced mining innovation, technology adoption, and industry–academic collaboration. Earlier in his career, he held senior roles at MaRS Discovery District, supporting the growth and commercialization of technology-based ventures. He is also an active mentor in the Creative Destruction Lab Minerals program. A former tech entrepreneur and engineering adjunct professor, Don is an active angel investor and was a Top 40 under 40 recipient and two-time TEDx speaker. He holds degrees from Queen\'s University and the University of Toronto.', expertfile: 'http://expertfile.com/experts/don.duval' },
  { name: 'Bernie Aho', image: bernieAhoImg.url, tags: ['Product Development', 'UX Design'], bio: "Bernie has over 20 years of entrepreneurship experience in innovative tech. As CEO and Co-Founder of Critiq, he provides insight, strategy, and leadership. An avid photographer, designer, and gamer, he previously co-founded TimeHero and ConceptShare, an award-winning leader in Creative Operations management.\u00a0\n\nBernie also serves as an Advisor and Board Member for Kinmetrix, having previously guided the vision for the Kinmetrix Arc as VP of Product. Dedicated to the local ecosystem, Bernie is a mentor at the Innovation Quarters (coordinated by the Regional Business Centre), guiding startups in product development, UX design, and business strategy.", expertfile: 'http://expertfile.com/experts/bernie.aho' },
  { name: 'Peter Dal Bianco', image: peterDalBiancoImg, tags: ['Branding', 'Franchising'], bio: "Peter launched his Sudbury business career in 1975, helping take National Video public on Nasdaq and evolving Bianco's into a top recognized Northern brand. As a dedicated NORCAT mentor, he leverages his branding and franchising expertise to coach clients. Through Bianco's Management Consulting Group (BMCG) and as a Venture Partner in the Axion Fund, Peter has helped raise millions in startup capital, recently establishing the Axion North Initiative.\u00a0\n\nPeter is a two-time Entrepreneur of the Year recipient for both Northern Ontario Business and Bell Business Excellence. In honour of his enduring commitment to entrepreneurship and innovation, the Venture North PITCH People's Choice Award has been officially renamed the Peter Dal Bianco Award, cementing his legacy at the upcoming October 1st showcase at Collège Boréal.", expertfile: 'http://expertfile.com/experts/peter.dalbianco' },
  { name: 'Jamie Dewar', image: jamieDewarImg, tags: ['Marketing', 'Strategic Thinking'], bio: 'Jamie graduated from Wilfrid Laurier University in 2005 with dual degrees in Business and Physics and Computing and has combined his two passions to grow his family business, Legend Boats. Since joining the company, Jamie has helped Legend grow into one of the best-known aluminum boat brands in Canada, now distributing through nearly 60 dealers across the country and selling direct through 3 of their own retail stores. His strategic vision has played a pivotal role in establishing strong partnerships and expanding the company\'s reach into new markets. Jamie is also an active Angel Investor who has had the pleasure of working with over 20 different startups including Storefront, BoatSetter, Videopixie, SeamlessDocs, Plastiq and PageCloud.', expertfile: 'http://expertfile.com/experts/jamie.dewar' },
  { name: 'Michael Dolinar', image: michaelDolinarImg, tags: ['Software Development', 'Product Development'], bio: 'Michael brings 25 years of technical expertise spanning the financial, defense, and industrial sectors. In 2015, he founded AdvanceWorx Inc., providing specialized software development internationally. Today, as Manager of SafeBox at Ionic Mechatronics, Michael spearheads the deployment of a revolutionary automated lockout-tagout system. Concurrently, he serves as Chief Technology Officer at IRegained Inc., leading the engineering of next-generation digital neurotherapeutics and MedTech solutions. A dedicated NORCAT mentor, Michael leverages his deep expertise in software and product development to actively guide and support emerging innovators.', expertfile: 'http://expertfile.com/experts/michael.dolinar' },
  { name: 'Tom Fortin', image: tomFortinImg, tags: ['Manufacturing', 'Engineering & Design'], bio: "Tom is the owner of a Sudbury-based electronics design and manufacturing company, Ontrak Control Systems. Ontrak specializes in the design and manufacture of serial data acquisition interface devices used in industrial, medical and retail automation applications. Ontrak contains a complete product design center with in-house, PCB and enclosure manufacturing, safety and EMC certification, CNC machining, and injection mold design.\n\nAfter graduating from Cambrian in 1984 from the Electronics Engineering Technology program, Tom started his career installing process control systems for paper machines in various Northern Ontario communities. He returned to Sudbury in 1985 and with a partner, opened a computer repair and installation business which evolved into Ontrak. He also taught electronics technology at Cambrian College for 12 years, resigning in 1998 to focus solely on Ontrak.\n\nTom is passionate about manufacturing in Canada and has helped start many technology companies producing medical devices, lasers, and automation products. The Fortin Foundation, created in 2004, promotes efforts by youth in manufacturing through free consultation and sponsorship of events such as the annual Ontrak 2X4 Innovation Design Challenge.", expertfile: 'http://expertfile.com/experts/tom.fortin' },
  { name: 'Jeff Fuller', image: jeffFullerImg, tags: ['Entrepreneurial Leadership', 'Business Development'], bio: 'Jeff Fuller combines deep Northern roots with a global entrepreneurial vision. Carrying forward a mining-supply legacy started by his father\'s company, Abraflex, in the 1970s, Jeff founded Fuller Industrial in 2004. A landmark contract for Madagascar\'s Ambatovy Mine propelled the Lively-based company onto the world stage, specializing in high-performance, abrasion-resistant piping. Celebrating over two decades of international growth, Fuller operates North America\'s most advanced robotic welding pipe shop, featuring patented leak detection. Today, the business stands as a proud multi-generational success, with Jeff\'s sons, Steve and Liam, actively leading day-to-day operations. A committed NORCAT mentor, Jeff is a Laurentian alumnus, Past President of SAMSSA, and sits on the Yves Landry Foundation board.', expertfile: 'http://expertfile.com/experts/jeff.fuller' },
  { name: 'Ian Lane', image: ianLaneImg, tags: ['Angel Investment', 'Fundraising'], bio: 'Ian Lane is the Executive Director of the Northern Ontario Angels. With a diverse career, he is enjoys fostering connections between entrepreneurs and Angel investors across Northern Ontario.\n\nPrior to moving back to Ontario, Ian was the Manager of Policy Development and Settlement in the Ministry of Innovation and Advanced Learning with the Government of Prince Edward Island. He was responsible for developing policies to attract and retain youth, newcomers, temporary foreign workers, and international students. This role allowed Ian to connect with local businesses and entrepreneurs in strategic innovation sectors to help grow the economy of PEI.\n\nIn Sudbury, Ian was the Manager of Research Capacity and Health Innovation at Health Sciences North Research Institute (HSNRI) where he helped researchers and clinicians attract funding and provided strategic planning support. He helped facilitate the attraction of over $10 million in external funding.\n\nHe was the Business Manager of ICES North and appointed the Project Manager for the Northern Ontario Health Innovation Cluster, which binds the research activities of seven health research-centric organizations across the region. This role also connected with industry sponsors and local biotech and innovation companies trying to answer the unique health care delivery challenges of Northern Ontario while also stimulating regional economic development opportunities.\n\nIan holds a MA from Ryerson University in Immigration and Settlement Studies, a BA in Canadian History from the University of Prince Edward Island, and a Diploma in Commercial Music from Humber College. He is a proud Rotarian and has volunteered his grant writing skills to various community and non-for-profit organizations in Ontario and Prince Edward Island. He still enjoys playing music, skiing, hockey, golf, tennis, and the odd sail.', expertfile: 'http://expertfile.com/experts/ian.lane' },
  { name: 'Emily Mantle', image: emilyMantleImg.url, tags: ['Financial Reporting', 'Canadian Taxation'], bio: 'Named one of Sudbury\'s Top 40 Under Forty by Northern Ontario Business, Emily Mantle is the Founder of Compass CPA and a recognized voice in Canadian business and tax. Since launching her Sudbury-based firm in 2022, she has built a modern practice that brings a fresh, entrepreneurial approach to accounting, tax, and advisory services. A former Big4 partner with a passion for numbers, Emily specializes in empowering owner-managed private businesses. She holds an Honours B.Com (cum laude) from Laurentian University, CPA and CA designations, and a post-designation specialization in Canadian income taxation. As a dedicated NORCAT mentor, Emily leverages her deep financial expertise to serve as a forward-thinking thought leader and trusted business advisor for the region\'s emerging innovators.', expertfile: 'http://expertfile.com/experts/emily.mantle' },
  { name: 'Peyvand Melati', image: peyvandMelatiImg, tags: ['Angel Investing', 'AI/IIoT'], bio: 'A highly accomplished entrepreneur and angel investor, Peyvand Melati specializes in launching and scaling startups from concept to successful exit strategy. He possesses deep expertise across major verticals, including IoT, electronic design, medical technologies, and renewable energy. Currently, Peyvand serves as the CEO of QEA Tech, an innovative company utilizing AI-driven software, drones, and thermography to conduct precise building envelope energy audits. He is also a General Partner at the Archangel Network of Funds, actively investing capital and mentorship into early-stage Canadian technology startups. Armed with a Kellogg-Schulich Executive MBA, Peyvand is a result-oriented NORCAT mentor with an excellent track record of building teams, opening international markets, and guiding founders in commercializing their technologies.', expertfile: 'http://expertfile.com/experts/peyvand.melati' },
  { name: 'Ehsan Mirdamadi', image: ehsanMirdamadiImg, tags: ['Investor Relations', 'AI'], bio: 'Recognized as a prominent AI leader in Northern Ontario, Ehsan Mirdamadi is a technologist, founder, and investor with over two decades of experience building and scaling complex technology companies across cloud infrastructure, enterprise software, and AI. He is the Co-Founder and CEO of Codalio, an AI-driven platform that eliminates software development failure points by rapidly transforming raw concepts into production-ready MVPs. Ehsan also serves as a General Partner at Axion and a Board Member for both the ArchAngel Network of Funds and OrderEase. Holding a B.Sc. in Computer Science from York University, he leverages his deep technical and venture capital expertise to mentor high-tech startups navigating product-market fit and scale.', expertfile: 'http://expertfile.com/experts/ehsan.mirdamadi' },
  { name: 'Cathy Nadjiwon', image: cathyNadjiwonImg, tags: ['Business Development', 'Strategic Planning'], bio: 'Cathy is a surveyor and geomatics professional specializing in the mineral exploration and mining sectors. Currently president of UnderCover Innovations Inc., she previously co-owned and operated two GIS services and spatial application development companies and recently retired as Business Development Manager for CAE Mining Canada. She was recognized as the first ever Entrepreneur of the Year (1-50 Employees) by the Greater Sudbury Chamber of Commerce, as an Influential Woman of Northern Ontario by NOB, and has received a Professional Leadership Award. Cathy has served on many volunteer boards including the Laurentian University Board of Governors and was appointed the first ever female Treasurer of the Ontario Trillium Foundation, overseeing a $100M+ annual budget.', expertfile: 'http://expertfile.com/experts/cathy.nadjiwon' },
  { name: 'Chad Pallopson', image: chadPallopsonImg, tags: ['Finance', 'US Markets'], bio: 'Chad Pallopson has over 20 years of capital markets experience at some of Wall Street\'s largest firms including J.P. Morgan, Lazard, and SVB Leerink. Chad has also been a Managing Partner and Portfolio Manager at a Connecticut-based long/short equity hedge fund. After more than 2 decades in the New York City area, Chad recently moved back home to Canada. He is currently a Partner with Archangel-Axion Fund and a consultant for the Northern Ontario Angels group. He is a member of the NORCAT mentor advisory board and serves on the board of directors for IRegained Inc. He is a graduate of the Wharton School of the University of Pennsylvania.', expertfile: 'http://expertfile.com/experts/chad.pallopson' },
  { name: 'David Pasieka', image: davidPasiekaImg, tags: ['M&A', 'Cybersecurity'], bio: 'David is a C-Suite executive with deep Technology, Operations, Innovation, Regulatory, Safety, IT, Risk and M&A background. With extensive Renewable Power and Utility experience, his teams completed over 40 Utility acquisitions in Gas, Water and Electricity throughout North America. Other industry sector expertise includes Financial Services, Start-up, Innovation, Sustainability, Telecom and Enterprise Software. David has served on the Board of several private, public and municipal owned companies and is a graduate of McMaster University\'s Director College. He was the founding chair of Algonquin\'s Diversity and Inclusion council. David recently completed programs at Royal Roads University in Executive Coaching, at the University of Oxford in Sustainability, and at Harvard in Cybersecurity.', expertfile: 'http://expertfile.com/experts/david.pasieka' },
  { name: 'Sheri Tomchick', image: sheriTomchickImg, tags: ['Leadership', 'Scalability'], bio: 'Sheri Tomchick is the Founder and President of both Plan A and StaffStat. Together her companies make up a groundbreaking staffing strategy for seniors\' care across Canada. Under Sheri\'s leadership, the company has grown to over 50 locations across Canada and has helped countless senior care organizations improve their operations and provide better care for their residents. Her passion for improving the lives of seniors and frontline workers has been the driving force behind Plan A\'s and StaffStat\'s success. Her commitment to excellence and belief in the power of people and culture have made Plan A an industry leader.', expertfile: 'http://expertfile.com/experts/sheri.tomchick' },
  { name: 'Gideon Uchihara', image: dennisReichImg, tags: ['AI/ML', 'Quantum'], bio: 'Gideon is an experienced professional with expertise in healthcare and medical technology. He brings valuable insights to startups navigating the healthcare industry and developing innovative medical solutions.', expertfile: 'http://expertfile.com/experts/gideon.uchihara' },
  { name: 'Barb Ward-Dagnon', image: barbWardDagnonImg, tags: ['Clinical Trials', 'Regulatory Compliance'], bio: 'Barb Ward-Dagnon is the founder and owner of Medicor Research Inc. Within three years of starting Medicor, Barb gained global recognition among several top pharmaceutical companies for excellence in clinical research. She has set the standard for quality and compliance among North American clinical research sites and received outstanding feedback from the FDA for her work in vaccine development. Barb\'s flair for sales, marketing and branding have allowed her to build her customer base to over sixty pharmaceutical and academic clients. Her background is in both business administration and nursing, bringing the two careers together to form a successful medical research company.', expertfile: 'http://expertfile.com/experts/barb.ward-dagnon' },
];

const principles = [
  { icon: Users, title: 'Team-Based Mentoring', description: 'Work with a team of 2-4 mentors who bring diverse perspectives and expertise to help you tackle complex challenges.' },
  { icon: Shield, title: 'Confidential & Inclusive', description: 'All sessions are confidential. Mentors provide guidance without judgment, creating a safe space to discuss challenges.' },
  { icon: Handshake, title: 'No Equity, No Fees', description: 'Our mentors volunteer their time. They take no equity and charge no fees-their only motivation is helping you succeed.' },
  { icon: Target, title: 'Founder-Driven Agenda', description: 'You set the agenda for each session. Mentors are here to support your goals, not impose their own.' },
];

const benefits = [
  'Access to experienced entrepreneurs and industry executives',
  'Diverse perspectives from a team of mentors',
  'Confidential, inclusive guidance',
  'Flexible scheduling that works for you',
  'Long-term relationships, not one-off advice',
  'Connections to our broader network of investors and partners',
];

const process = [
  { step: '01', title: 'Apply & Match', desc: 'Tell us about your venture and goals. We carefully match you with 2-4 mentors whose experience aligns with your needs.' },
  { step: '02', title: 'Orientation', desc: 'Meet your mentor team and establish ground rules. Learn how to make the most of your sessions.' },
  { step: '03', title: 'Regular Sessions', desc: 'Flexible recurring meetings with your mentor team. You set the agenda based on your current challenges and opportunities.' },
  { step: '04', title: 'Grow & Evolve', desc: 'As your needs change, your mentor team can evolve. Access our full network of mentors and resources.' },
];

const stats = [
  { number: '18', label: 'Active Mentors' },
  { number: '1000+', label: 'Hours Mentored in 2025' },
  { number: '100', label: 'NPS Score' },
  { number: '$0', label: 'To Access Mentorship' },
];

const MentorshipServices = () => {
  const [expandedMentor, setExpandedMentor] = useState<string | null>(null);

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />

          {/* logo background */}
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />

          {/* radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />

          {/* signature lines */}
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />


          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow>Venture Mentoring Service</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Team-Based<br /><span style={{ color: TEAL }}>Mentorship.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                A proven mentoring model that pairs founders with teams of experienced volunteers
                who provide confidential, inclusive guidance - at no cost.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link to="/apply"
                      className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                      style={{ fontFamily: FONT, background: TEAL, color: NAVY }}>
                  Apply to NORCAT Innovation
                  <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ───── STATS STRIP ───── */}
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="pl-4" style={{ borderLeft: `2px solid ${TEAL}` }}>
                  <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: NAVY }}>{s.number}</p>
                  <p className="text-xs mt-1 font-bold uppercase tracking-[0.16em]" style={{ color: '#5b6478' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── A DIFFERENT KIND OF MENTORING (principles) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Our Approach
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                A different kind<br /><span style={{ color: TEAL }}>of mentoring.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: '#475068' }}>
                Our Venture Mentoring Service is built on principles that put founders first
                and create lasting, meaningful relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {principles.map((p) => (
                <div key={p.title} className="relative p-7 md:p-8 rounded-2xl bg-white"
                     style={{ border: '1px solid #d9dde5' }}>
                  <div className="size-12 rounded-lg flex items-center justify-center mb-5"
                       style={{ background: 'rgba(0,179,152,0.12)', color: TEAL }}>
                    <p.icon className="size-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-black uppercase text-lg md:text-xl mb-3" style={{ fontFamily: FONT, color: NAVY }}>{p.title}</h3>
                  <p className="leading-relaxed text-sm md:text-base" style={{ color: '#475068' }}>{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── HOW IT WORKS (dark) ───── */}
        <section className="py-20 md:py-32 relative overflow-hidden"
                 style={{ background: 'linear-gradient(180deg, #003da5 0%, #001a4d 100%)' }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.15), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid gap-12 lg:gap-16 lg:grid-cols-12 items-start">
              <div className="lg:col-span-6">
                <Eyebrow>Process</Eyebrow>
                <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  How it<br /><span style={{ color: TEAL }}>works.</span>
                </Display>
                <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-xl" style={{ color: FG_MUTED }}>
                  Our structured approach ensures you get the most out of every mentoring session
                  while building long-term relationships with your mentors.
                </p>

                <div className="mt-10 space-y-7">
                  {process.map((item) => (
                    <div key={item.step} className="flex gap-5">
                      <div className="text-2xl font-black shrink-0" style={{ fontFamily: FONT, color: TEAL }}>{item.step}</div>
                      <div>
                        <h4 className="font-black uppercase text-base md:text-lg text-white mb-1" style={{ fontFamily: FONT }}>{item.title}</h4>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: FG_MUTED }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 lg:pt-4">
                <div className="rounded-2xl p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}` }}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] mb-6" style={{ color: TEAL, fontFamily: FONT }}>
                    What You Get
                  </p>
                  <ul className="space-y-4">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: TEAL }} />
                        <span className="text-sm md:text-base leading-relaxed text-white">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pull quote */}
                <div className="mt-6 rounded-2xl p-7 md:p-9 relative overflow-hidden"
                     style={{ background: `linear-gradient(135deg, ${TEAL} 0%, #0b6fb8 45%, #0a3a8c 100%)` }}>
                  <div className="absolute inset-0 pointer-events-none opacity-40"
                       style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 18px)' }} />
                  <Quote className="relative w-7 h-7 mb-3 text-white/90" />
                  <p className="relative text-lg md:text-xl leading-snug font-semibold text-white">
                    "Our mentors share the drive of our founders. They've challenged convention,
                    built real businesses, and expanded what's possible through experience."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── MENTORS GRID (light) ───── */}
        <section className="py-20 md:py-32" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Our Network
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                  Meet our<br /><span style={{ color: TEAL }}>mentors.</span>
                </h2>
              </div>
              <p className="text-sm md:text-base md:max-w-sm leading-relaxed" style={{ color: '#5b6478' }}>
                Our volunteer mentors are accomplished entrepreneurs, executives, and experts
                who are passionate about helping the next generation succeed.
              </p>
            </div>

            <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mentors.map((mentor) => {
                const isExpanded = expandedMentor === mentor.name;
                return (
                  <motion.div
                    key={mentor.name}
                    layout
                    transition={{ layout: { type: 'spring', stiffness: 350, damping: 30 } }}
                    className={`cursor-pointer ${isExpanded ? 'sm:col-span-2 md:col-span-3 lg:col-span-4' : ''}`}
                    style={{ zIndex: isExpanded ? 10 : 1 }}
                    onClick={() => setExpandedMentor(isExpanded ? null : mentor.name)}
                  >
                    <motion.div
                      layout
                      className="rounded-2xl overflow-hidden"
                      style={{ background: 'white', border: '1px solid #d9dde5' }}
                      animate={{
                        scale: expandedMentor && !isExpanded ? 0.96 : 1,
                        opacity: expandedMentor && !isExpanded ? 0.55 : 1,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    >
                      {!isExpanded && (
                        <motion.div className="p-5" layout="position">
                          <div className="flex items-center gap-4">
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                              style={{ border: `2px solid ${TEAL}` }}
                            />
                            <div className="min-w-0">
                              <div className="font-black uppercase text-sm truncate" style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                                {mentor.name}
                              </div>
                              <div className="flex flex-wrap gap-1 mt-1.5">
                                {mentor.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-[0.08em]"
                                    style={{
                                      background: 'rgba(0,179,152,0.10)',
                                      color: TEAL,
                                      border: `1px solid rgba(0,179,152,0.25)`,
                                      fontFamily: FONT,
                                    }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {isExpanded && (
                        <motion.div
                          className="p-8 md:p-10 relative"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.15, duration: 0.3 }}
                        >
                          <button
                            onClick={(e) => { e.stopPropagation(); setExpandedMentor(null); }}
                            className="absolute top-4 right-4 size-9 rounded-full flex items-center justify-center transition-colors"
                            style={{ background: PAPER, color: NAVY }}
                            aria-label="Close"
                          >
                            <X className="w-4 h-4" />
                          </button>

                          <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex flex-col items-center md:items-start shrink-0">
                              <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-28 h-28 rounded-full object-cover mb-4"
                                style={{ border: `3px solid ${TEAL}` }}
                              />
                              <div className="flex flex-wrap gap-2 justify-center md:justify-start max-w-[12rem]">
                                {mentor.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-[0.08em]"
                                    style={{
                                      background: 'rgba(0,179,152,0.10)',
                                      color: TEAL,
                                      border: `1px solid rgba(0,179,152,0.25)`,
                                      fontFamily: FONT,
                                    }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-black uppercase text-2xl md:text-3xl mb-2 pr-12"
                                  style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.01em' }}>
                                {mentor.name}
                              </h3>
                              <p className="text-xs font-bold uppercase tracking-[0.18em] mb-5" style={{ color: TEAL, fontFamily: FONT }}>
                                NORCAT Mentor
                              </p>
                              <p className="leading-relaxed text-sm md:text-base mb-7 whitespace-pre-line" style={{ color: '#475068' }}>
                                {mentor.bio}
                              </p>
                              <a
                                href={mentor.expertfile}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                                style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
                              >
                                <ExternalLink className="w-4 h-4" /> View Full Profile
                                <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ───── FINAL CTA ───── */}
        <section className="pt-10 md:pt-12 pb-20 md:pb-32 relative overflow-hidden" style={{ background: PAPER }}>
          <div className="relative mx-auto w-full max-w-4xl px-5 sm:px-6 md:px-10 text-center">
            <p className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
               style={{ fontFamily: FONT, color: TEAL }}>
              <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
              Your Move
            </p>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
              Ready to get<br /><span style={{ color: TEAL }}>matched?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: '#475068' }}>
              Join our Venture Mentoring Service and get matched with experienced mentors
              who can help you navigate the challenges of building a successful company.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/apply"
                    className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                    style={{ fontFamily: FONT, background: TEAL, color: 'white' }}>
                Apply to NORCAT Innovation
                <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: 'white', color: TEAL }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
              <Link to="/about"
                    className="group inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                    style={{ background: 'white', color: NAVY, border: `1px solid ${NAVY}`, fontFamily: FONT }}>
                Learn more
                <span className="inline-flex items-center justify-center size-7 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:rotate-[360deg]" />
                </span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default MentorshipServices;
