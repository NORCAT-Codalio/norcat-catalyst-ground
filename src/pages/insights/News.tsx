import { useState, useRef, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import { 
  Newspaper, Calendar, ArrowRight, TrendingUp, Rocket, 
  Building2, Users, DollarSign, Award, Zap, Globe, 
  ExternalLink, Clock, Sparkles, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import autonomousMiningVehicle from '@/assets/autonomous-mining-vehicle.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import signatureLines from '@/assets/signature-lines.png';
import newsHeroBg from '@/assets/news-hero-bg.png';

// ── Neumorphic icon container (matches homepage / VentureGrowth) ──
const iconContainerStyle: React.CSSProperties = {
  background: 'linear-gradient(145deg, hsla(220, 15%, 88%, 0.6) 0%, hsla(220, 15%, 82%, 0.3) 100%)',
  border: '1.5px solid hsla(220, 15%, 100%, 0.5)',
  boxShadow:
    'inset 0 2px 4px 0 hsla(0, 0%, 100%, 0.7), inset 0 -2px 4px 0 hsla(220, 15%, 50%, 0.15), 0 4px 8px -2px hsla(220, 15%, 30%, 0.15), 0 2px 4px -2px hsla(220, 15%, 30%, 0.1)',
};

// Featured/Breaking news
const featuredNews = {
  title: 'Sudbury Startup Raises $12M to Scale Autonomous Mining Fleet',
  excerpt: 'MineTech Robotics closes Series A round led by Northvolt Ventures, plans to deploy autonomous vehicles at 10 additional mine sites by 2027.',
  date: 'January 6, 2026',
  category: 'Breaking',
  image: autonomousMiningVehicle,
  readTime: '4 min read',
};

// Main news items
export const newsItems = [
  {
    id: 'ovin-core5-renewed-2026',
    title: 'OVIN Regional Technology Development Site in Northern Ontario renewed to Accelerate Mining Electrification and Critical Mineral Innovation',
    date: 'June 1, 2026',
    excerpt: 'The Ontario Vehicle Innovation Network is renewing its Northern Ontario Regional Technology Development Site, branded as Core5, backed by up to $8.74 million in combined investment.',
    category: 'Funding',
    icon: Zap,
    fullContent: `Greater Sudbury, ON - Monday, June 1, 2026 - The Ontario Vehicle Innovation Network is renewing its Northern Ontario Regional Technology Development Site (RTDS), branded as Core5, one of nine OVIN regional sites across Ontario.\n\nThe Government of Ontario, through OVIN, will invest up to $2.5 million, which is supported by $4.14 million in private-sector contributions and $2.1 million in public-sector contributions, bringing the total investment to $8.74 million.\n\nThis funding will help small- and medium-sized enterprises across Northern Ontario, including in Greater Sudbury, North Bay, Sault Ste. Marie, Temiskaming Shores, Timmins, and Thunder Bay to develop, test, and bring new electric vehicle, mining electrification, and smart mobility technologies to market.\n\nThe full RTDS network, announced on February 6 by the Honourable Victor Fedeli, Minister of Economic Development, Job Creation and Trade, is supported by a $17.5 million investment from the Government of Ontario through OVIN. This investment is matched by $32.8 million from industry and over $19.3 million from the broader public sector, bringing the total investment to nearly $70 million.\n\nCoordinating a network of more than 20 partners, Core5 brings together post-secondary institutions, regional innovation centres, incubators and accelerators, municipal and regional resources, industry and other regional collaborators to help businesses develop Ontario's EV supply chain, including initial critical minerals refining, downstream battery cell design, and EV powertrain, manufacturing, and other related EV technologies.\n\nWith access to more than 70,000 square feet of combined R&D space, over 3 kilometres of underground mine, and state-of-the-art testing equipment, the Core5 network unlocks unmatched opportunities for SMEs to validate and scale solutions. Supported by OVIN's RTDS initiative, Core5 helps SMEs reduce risk, accelerate time-to-market, and scale innovative electrification technologies across Northern Ontario. These investments are further positioning Ontario as a leader in sustainable mobility, advanced electrification, and smart transportation innovation.\n\n"In the face of global uncertainty, Ontario's automotive, tech, and critical minerals sectors continue to serve as foundational pillars of our province's economic resilience and future prosperity. By renewing funding for the Core5 Regional Technology Development Sites, our government is ensuring startups and SMEs from across Northern Ontario are equipped with the tools they need to commercialize Ontario-made solutions, compete globally, and create new economic opportunities close to home." - Vic Fedeli, MPP for Nipissing\n\n"NORCAT is proud to continue supporting Core5 and the Ontario Vehicle Innovation Network as we help accelerate the development, testing, and commercialization of technologies that are shaping the future of mining, mobility, and critical minerals. Northern Ontario offers a globally significant environment for innovation, with the talent, infrastructure, industry partnerships, and real-world testing conditions needed to help companies bring their solutions to market. This renewed investment strengthens our region's role in building Ontario's electric vehicle supply chain, advancing mining electrification, and creating meaningful economic opportunities for communities across the North." - Pejman Salehi, Chief Executive Officer, NORCAT\n\n"Greater Sudbury is proud to play a leading role in Ontario's growing mining electrification and critical minerals ecosystem. The renewal of Core5 through OVIN is a strong vote of confidence in Northern Ontario's innovation capacity, world-class mining expertise and growing clean technology sector. This investment will help local companies accelerate made-in-Ontario solutions, create high-quality jobs and further strengthen Greater Sudbury's position as a global hub for mining technology and advanced research." - Paul Lefebvre, Mayor, City of Greater Sudbury\n\n"Through Core5, local businesses and researchers have access to the tools, facilities, and partnerships they need to test ideas, grow, and compete globally. This investment helps ensure businesses in North Bay and other Northern Ontario communities continue to play a role in the clean transportation and critical minerals sector." - Peter Chirico, Mayor, North Bay\n\n"As a global leader in the automotive and mobility sector, Ontario is driving the transformation towards a connected, electric future. The OVIN Regional Technology Sites provide Ontario-based SMEs access to an extensive network of support and expertise and reduce barriers for start-ups and companies to create homegrown solutions to meet not only Ontario's needs, but those of customers all across the globe, to drive our economy forward." - Raed Kadri, Head of the Ontario Vehicle Innovation Network (OVIN) at OCI\n\n"Through OVIN, Ontario is creating a province-wide network that turns regional innovation into real economic impact. By establishing nine Regional Technology Development Sites, we're giving SMEs access to world-class infrastructure and expertise that helps them commercialize faster, strengthen supply chains, and compete globally. This investment ensures that made-in-Ontario mobility solutions drive jobs, growth, and long-term competitiveness across the province." - Claudia Krywiak, President and CEO of the Ontario Centre of Innovation\n\n"The continued support from OVIN is a powerful validation of the work our network has done and a signal of where we are headed. It equips Northern Ontario with the long-term stability to evolve alongside the industry and enables the ecosystem to continue championing specialized R&D capabilities. Ultimately, we are ensuring that innovation born in the North has a clear, accelerated path to succeed in the global market, all while creating jobs and driving economic resilience right here at home." - Brendan Skiffington, Manager, NORCAT Innovation\n\n"Through the work completed under the Ontario Vehicle Innovation Network (OVIN) and the Regional Technology Development Sites such as Core5, we've seen firsthand how strategic collaboration, world-class facilities, and targeted support accelerate innovation and competitiveness for companies right here in Northern Ontario. By connecting startups, SMEs, research institutions and industry partners with real R&D infrastructure, testing environments, and commercialization pathways, OVIN supports Ontario-made technologies to scale faster and compete globally, advancing economic growth, creating jobs, and strengthening our position in the future of smart mobility and clean transportation. Innovation Initiatives Ontario North (IION) are proud to have been part of this momentum and look forward to working with Core5 through OVIN 2.0 to deepen regional impact, expand opportunities for innovators, and continue driving northern and provincial prosperity." - Matthew Doherty, Executive Director of Innovation Initiatives Ontario North (IION)\n\n"Capitalizing on the success of the first Northern Regional Technology Development Site, Cambrian College's Centre for Smart Mining is poised to continue offering its cutting-edge services to critical mineral and mobility across the province. Funding like this from the Government of Ontario through OVIN, makes the province an attractive district for investment and innovation in this emerging and important sector." - Steve Gravel, Manager of the Centre for Smart Mining\n\n"Canadore College's ICAMP is proud to once again be a recognized partner in one of Ontario's nine OVIN Regional Technology Development Sites. We are grateful for the continued support of the Government of Ontario through OVIN, which enables us to expand our applied research capacity and help Northern Ontario innovators and manufacturers accelerate their automotive and mobility technology solutions." - Brad Gavan, Director of ICAMP, Corporate, Community and Partnership Development\n\nOVIN Media Inquiries: Alicia Pereira, apereira@oc-innovation.ca\n\nRTDS Media Contact: Cynthia Furlotte, cfurlotte@norcat.org`,
    aboutSections: [
      { title: 'About Core5', text: `Core5 is one of nine regional technology development sites within the Ontario Vehicle Innovation Network (OVIN), advancing next-generation electric, connected, and autonomous vehicle and mobility technologies. Serving Northern Ontario, Core5 brings together innovation centres, R&D and testing facilities, academic institutions, and municipal partners to provide companies with access to specialized expertise, advanced facilities, and real-world pilot opportunities that accelerate commercialization and strengthen Ontario's advanced manufacturing and critical minerals value chain.` },
      { title: 'About NORCAT', text: `NORCAT is a global leader in skilled labour training and innovation services, focused on enhancing productivity and safety in the resource sector while supporting the growth of technology-driven companies. As Sudbury's Regional Innovation Centre, NORCAT Innovation provides early-stage startups with mentorship, industry connections, and access to capital programs, including Core5. NORCAT is also home to the NORCAT Underground Centre, an operating mine and active laboratory where emerging technologies are developed, tested, and demonstrated in collaboration with global mining companies and innovative startups.` },
      { title: 'About Cambrian R&D', text: `Cambrian R&D is a leading applied research and development hub embedded within Cambrian College, offering companies access to faculty expertise, student talent, equipment, and funding supports to tackle complex R&D challenges. Focused on advancing innovation from idea through commercialization, Cambrian R&D supports small and medium enterprises, community partners, and industry projects that strengthen competitiveness and economic impact across Northern Ontario.` },
      { title: 'About Innovation Initiatives Ontario North (IION)', text: `Innovation Initiatives Ontario North is a Regional Innovation Centre that supports entrepreneurs, start-ups, and growing companies across Northern Ontario. IION provides business advisory services, funding navigation, in-house programs, access to subject-matter experts, and market intelligence to help companies develop, commercialize, and scale. Based in North Bay, IION serves the Nipissing, Timiskaming, Parry Sound, and Muskoka regions and plays a key role in strengthening the regional economy.` },
      { title: 'About Timmins Economic Development Corporation (TEDC)', text: `The Timmins Economic Development Corporation (TEDC) is the lead economic development agency for the City of Timmins, focused on attracting investment, supporting business growth, and strengthening the local economy. TEDC works collaboratively with industry, entrepreneurs, and community partners to promote Timmins as a competitive destination for businesses across key sectors including mining supply and services, manufacturing, forestry, and emerging technologies. Through strategic initiatives, business advisory services, and investment attraction efforts, TEDC drives sustainable economic growth and long-term prosperity for the region.` },
      { title: 'About OVIN', text: `OVIN is an initiative of the Government of Ontario, led by the Ontario Centre of Innovation (OCI), designed to reinforce Ontario's position as a North American leader in advanced automotive technology and smart mobility solutions such as connected vehicles, autonomous vehicles, and electric and low-carbon vehicle technologies. Through resources such as research and development (R&D) support, talent and skills development, technology acceleration, business and technical supports, and demonstration grounds, OVIN provides a competitive advantage to Ontario-made automotive and mobility technology companies. For more information: https://www.ovinhub.ca.` },
    ],

  },
  {
    id: 'mining-transformed-2026-sponsors',

    title: 'Becker Mining Systems Canada and Turnkey Communications Named Title Sponsors of Mining Transformed 2026',
    date: 'March 28, 2026',
    excerpt: 'The two industry leaders join forces to co-sponsor the world\'s only mining technology exhibition hosted within an operating underground mine, taking place May 25–27 at the NORCAT Underground Centre.',
    category: 'Event',
    icon: Award,
    fullContent: `Greater Sudbury, ON – Becker Mining Systems Canada and Turnkey Communications have joined forces as Title Sponsors of Mining Transformed 2026, taking place May 25–27, 2026, at the NORCAT Underground Centre in Sudbury, Ontario.\n\nNow in its third iteration, Mining Transformed remains the world's only mining technology exhibition hosted within an operating underground mine. The event will bring together more than 50 technology companies and 250 global mining leaders to demonstrate, evaluate, and accelerate the adoption of next-generation mining innovation.\n\nBy combining Becker's global leadership in underground energy, automation, and infrastructure systems with Turnkey's expertise in advanced connectivity and private LTE/5G integration, the partnership reinforces the critical role of infrastructure and communications as the backbone of modern digital mining operations.\n\nMining Transformed provides a secure, real-world environment for mining operators to de-risk procurement decisions, evaluate technologies under authentic underground conditions, and collaborate directly with technology builders.\n\nAs Title Sponsors, Becker and Turnkey will co-host "Doors Open NORCAT" on Monday, May 25 for an exclusive evening experience at NORCAT's headquarters. The event will feature guided tours of the innovation and training centre, curated technology activations, early attendee registration, and premium networking with leaders from across the mining ecosystem.\n\n"Reliable connectivity and resilient infrastructure are foundational to the future of mining," said Terry Joseph CEO, Turnkey Communications. "As operations advance toward full electrification and automation, the integration of communications, energy, and operational systems becomes mission-critical. Mining Transformed creates a platform where those systems can be validated in real-world environments."\n\n"The mining sector is undergoing one of the most significant transitions in its history," said Albert Becker CEO, Becker Mining Systems Canada. "Electrification, automation, and digital integration demand robust underground infrastructure. Mining Transformed allows the industry to see innovation operating where it matters most - underground."\n\n"Mining Transformed is built on collaboration," said Greg Major, NORCAT Underground Centre Director. "Through NORCAT's innovation ecosystem, we bring together operators, technology leaders, and global partners to accelerate meaningful progress. The leadership of Becker Mining Systems Canada and Turnkey Communications reflects the commitment required to advance the future of mining."\n\nIndustry leaders interested in participating in Mining Transformed 2026 are encouraged to register at miningtransformed.norcat.org`,
    aboutSections: [
      { title: 'About Becker Mining Systems Canada', text: 'Becker Mining Systems is the only worldwide supplier offering complete energy distribution, automation, communication, transportation, and infrastructure solutions for the mining industry. Founded in 1964, the company is recognized globally for engineering solutions designed to perform in demanding and explosive underground environments.' },
      { title: 'About Turnkey Communications', text: 'Turnkey Communications delivers end-to-end telecommunications and infrastructure solutions for industrial and mission-critical environments. From private LTE/5G networks and advanced connectivity platforms to fiber optic deployment and large-scale infrastructure integration, Turnkey enables secure, resilient communications that power digital transformation.' },
      { title: 'About NORCAT', text: 'NORCAT is a global leader in skilled labour training and mining technology development. It operates the world\'s only underground mine dedicated to enabling companies to develop, test, and showcase emerging technologies designed to transform mining operations.' },
      { title: 'About the Canadian Institute of Mining, Metallurgy and Petroleum (CIM)', text: 'CIM is the trusted authority advancing knowledge and leading practices across Canada\'s minerals and metals industry through conferences, professional development, publications, and a national network of technical societies.' },
    ],
  },
  {
    id: 'don-duval-honorary-chair',
    title: 'Don Duval Appointed Honorary Chair for Mining Transformed 2026',
    date: 'February 6, 2026',
    excerpt: 'NORCAT welcomes Don Duval, Principal at Evok Innovations, as the Honorary Chair for Mining Transformed 2026, bringing nearly three decades of venture capital and mining innovation experience.',
    category: 'Event',
    icon: Award,
    fullContent: `Greater Sudbury, ON | February 6, 2026 – NORCAT is pleased to announce Don Duval, Principal at Evok Innovations, as the Honorary Chair for Mining Transformed 2026 hosted at the NORCAT Underground Centre in Greater Sudbury on May 25th to 27th, 2026. Delivered in partnership with the Canadian Institute of Mining, Metallurgy and Petroleum (CIM), Mining Transformed remains the world's only exhibition in an underground operating mine providing a unique, hands-on opportunity for technology ventures and mining companies to engage amongst live demonstrations of emerging technologies poised to transform the global mining industry.\n\n"We are thrilled to welcome Don Duval as the Honorary Chair for Mining Transformed 2026. Given his longstanding commitment to mining technology and innovation, coupled with his industry knowledge and venture capital experience, he is a welcomed addition to support this one-of-a-kind exhibition," cited Greg Major, Director of the NORCAT Underground Centre.\n\nWith nearly three decades of experience spanning venture capital, technology commercialization, and innovation ecosystem development, Duval brings extensive experience to Mining Transformed – exemplified by his role as Principal, Head of Mining at Evok Innovations. Prior to Evok, Duval served as the CEO of NORCAT where he led the organization's evolution into a globally recognized mining innovation hub.\n\n"Industry collaboration is essential to accelerating the development, adoption, and broader diffusion of emerging technologies," said Don Duval. "This hands-on exhibition offers a unique opportunity to experience innovation firsthand within a world-class mining ecosystem. I am absolutely delighted to support Mining Transformed as Honorary Chair."\n\nTickets to Mining Transformed are limited and available by invitation only. To learn more about eligibility or to submit your interest in attending, please visit miningtransformed.norcat.org`,
    aboutSections: [
      { title: 'About the NORCAT Underground Centre', text: 'Located in the City of Greater Sudbury, the NORCAT Underground Centre serves as the global one-stop shop operating mine designed to enable start-ups, small/medium enterprises, and international companies to develop, test, and demonstrate emerging technologies that are poised to transform the global mining industry.' },
      { title: 'About CIM', text: 'The Canadian Institute of Mining, Metallurgy and Petroleum (CIM) is the trusted authority and collective source for advancing knowledge and leading practices within Canada\'s minerals and metals industry. Through conferences, publications, professional development, and a national network of members and technical societies, CIM cultivates expertise and innovation to support a safe, responsible, and competitive mining sector.' },
    ],
  },
  {
    id: 'pejman-salehi-ceo',
    title: 'NORCAT Appoints Pejman Salehi as Chief Executive Officer',
    date: 'March 2, 2026',
    excerpt: 'Pejman Salehi, formerly Vice President, Academic at Conestoga College, takes the helm as NORCAT CEO, succeeding Don Duval after thirteen years of leadership.',
    category: 'Leadership',
    icon: Users,
    fullContent: `Sudbury, Ontario - The Board of Directors of NORCAT is pleased to announce the appointment of Pejman Salehi as Chief Executive Officer, effective March 2, 2026.\n\nPejman brings more than fifteen years of senior leadership experience, most recently serving as Vice President, Academic at Conestoga College in Kitchener, Ontario. In this role, he provided strategic leadership to advance institutional excellence and student success through innovative academic programming and rigorous quality assurance. His portfolio included oversight of several key schools, including Computer Science & Information Technology, Engineering Technology, Trades, and Creative Industries.\n\nDuring his tenure at Conestoga College, Pejman led major expansions in program offerings, digital transformation, immersive technologies, and experiential learning.\n\nPejman holds a Ph.D. in Electrical and Computer Engineering from Concordia University and has eight years of industry experience in software development and model-driven software engineering research. As an advocate for educational innovation and AI-enhanced learning, he is committed to strengthening talent pipelines, supporting regional innovation capacity, and driving meaningful social and economic impact.\n\n"I am honoured to join NORCAT at such a pivotal moment for the industries we serve. NORCAT has a long-standing reputation as a catalyst for innovation and talent development," said incoming CEO Pejman Salehi. "I look forward to working with our team, partners, and global clients to expand the reach of our training, strengthen our innovation ecosystem, and help organizations prepare for the future of work."\n\nGreg Maybee, Chair of the NORCAT Board of Directors stated, "We are excited to welcome Pejman Salehi to NORCAT and look forward to leveraging his wealth of experience as we continue to grow and evolve the organization. The Board also extends its sincere gratitude to NORCAT's outgoing CEO, Don Duval who is stepping down after thirteen years of dedicated service and leadership."\n\n"It has been a profound privilege to serve as CEO of NORCAT," said Don Duval. "I am incredibly proud of the global organization we have built - one rooted in a culture of entrepreneurial spirit, resilience, and delivering customer success - all day, every day. I leave with deep gratitude for our amazing team, Board of Directors, and community, and with full confidence in the new leadership to carry NORCAT forward into its next chapter of growth and success."\n\nThis leadership transition marks an important milestone for NORCAT as it continues to expand its global impact, strengthen industry partnerships, and deliver innovation solutions that support the future of work.`,
    aboutSections: [],
  },
  {
    id: 'norcat-cim-mining-transformed',
    title: 'NORCAT and CIM Join Forces to Host Mining Transformed 2026',
    date: 'January 20, 2026',
    excerpt: 'NORCAT and the Canadian Institute of Mining, Metallurgy and Petroleum (CIM) partner to lead the world\'s only technology exhibition hosted in an operating underground mine, May 25–27, 2026.',
    category: 'Partnership',
    icon: Building2,
    fullContent: `Greater Sudbury, Ontario | January 20, 2026 – NORCAT and the Canadian Institute of Mining, Metallurgy and Petroleum (CIM) are joining forces to lead the next edition of Mining Transformed, the world's only technology exhibition hosted in an operating underground mine. Mining Transformed 2026 will take place May 25 to 27, 2026 at the NORCAT Underground Centre in Sudbury, Ontario connecting mining operators with emerging technology companies that are redefining the future of mining.\n\nOver three days, participants will experience live, hands-on technology demonstrations both underground and on surface, gaining a close look at solutions that improve safety, drive efficiency, and support more sustainable mining practices. Mining Transformed is designed to bring together the builders of innovation with the buyers seeking solutions for their operations.\n\nThe partnership combines NORCAT's unique underground innovation ecosystem with CIM's national community of mining professionals and technical experts.\n\n"Mining Transformed was created to showcase emerging technologies poised to transform the global mining industry," said Don Duval, CEO of NORCAT. "By partnering with CIM we expand our reach with the operators, engineers, and decision makers responsible for procuring, integrating, and deploying emerging technologies. Collectively, our goal is to expedite technology adoption in the global mining industry."\n\nThrough this partnership, CIM will contribute to industry engagement and professional development activities, including the CIM Operator Roundtable and short courses featured during the event. It's a global stage for innovation, where meaningful connections turn into transformative partnerships.\n\n"CIM's role is to bring people, knowledge, and innovation together so our industry can keep moving forward," said Angela Hamlyn, CEO of CIM. "Mining Transformed gives our members a rare opportunity to engage with emerging technologies in an operating mine, and assess application opportunities within their operations."\n\nThose interested in attending, exhibiting, or sponsoring Mining Transformed 2026 are encouraged to submit their interest via the official event site at miningtransformed.norcat.org. Please note that capacity is limited, early registration of interest is recommended.`,
    aboutSections: [
      { title: 'About the NORCAT Underground Centre', text: 'Located in the City of Greater Sudbury, the NORCAT Underground Centre serves as the global one-stop shop operating mine designed to enable start-ups, small/medium enterprises, and international companies to develop, test, and demonstrate emerging technologies that are poised to transform the global mining industry.' },
      { title: 'About CIM', text: 'The Canadian Institute of Mining, Metallurgy and Petroleum (CIM) is the trusted authority and collective source for advancing knowledge and leading practices within Canada\'s minerals and metals industry. Through conferences, publications, professional development, and a national network of members and technical societies, CIM cultivates expertise and innovation to support a safe, responsible, and competitive mining sector.' },
    ],
  },
  {
    id: 'norcat-30th-anniversary',
    title: 'NORCAT Marks 30 Years of Advancing Safety, Skilled Labour, and Innovation in Mining',
    date: 'January 15, 2026',
    excerpt: 'NORCAT celebrates three decades of growth and impact in advancing safety, skilled labour training, innovation and applied research in mining across Northern Ontario and internationally.',
    category: 'Milestone',
    icon: Sparkles,
    fullContent: `Greater Sudbury, Ontario - NORCAT marked its 30th anniversary this year, celebrating three decades of growth and impact in advancing safety, skilled labour training, innovation and applied research in mining across Northern Ontario and internationally.\n\nSince its establishment in 1995, NORCAT has continued to adapt to the evolving needs of industry, innovators and the communities it serves. Born out of Cambrian College as a regional initiative has since grown into a multi-national organization, supported by purpose-built infrastructure, specialised facilities and a world-class Advisory practice whose expertise reaches far beyond Northern Ontario.\n\nAs NORCAT expanded, it focused on building capacity where it could deliver the greatest value for workers and industry. In 1997, the transformation of the former Fecunis Mine into the NORCAT Underground Centre created an environment for hands-on training and more recently real-world technology testing, strengthening NORCAT's ability to support generations of workforce development and applied innovation. The move into NORCAT's headquarters on Maley Drive in 2009 further expanded the organization's ability to deliver programming, convene partners and scale services.\n\nOver three decades, NORCAT has evolved from offering traditional instructor-led and classroom training to e-learning, and now to a technology-first, blended learning approach that leverages tools such as virtual reality (VR) and augmented reality (AR). Today, trainees not only learn the theory but put their skills to the test in realistic, risk-free environments built in-house by Studio NORCAT's development team. These award-winning tools enable repeatable, measurable skills transfer at scale while keeping hands-on practice central.\n\n"When we started, there were five of us working out of the basement of Cambrian College, trying to solve problems that didn't yet have solutions," said Ed Wisnewski, Chief Technology Officer at NORCAT.\n\nIn 2012, after 17 years of leadership, Daryl Lake announced his retirement as CEO and Don Duval, former Vice President of Strategy & Operations at the MaRS Discovery District, became NORCAT's CEO. NORCAT then expanded its footprint across Ontario with operations in Timmins, Thunder Bay and the Greater Toronto Area, improving access to training and advisory services for more communities and employers.\n\nAs demand increased, NORCAT extended its presence beyond Greater Sudbury to improve access to training and innovation supports across Ontario, including operations in Timmins, Thunder Bay and the Greater Toronto Area. Last year, NORCAT expanded its reach internationally by establishing a presence in Elko, Nevada, reflecting the organization's growing role in supporting industry and workforce development in the global mining industry.\n\nAlongside its multi-site operations, NORCAT's Advisory department has worked with clients on nearly every continent, partnering with organisations across Europe, Asia, Africa, North and South America, to help reach health & safety and operational goals through strategy, workforce design, technology selection and implementation. NORCAT delivers advisory outcomes through a mix of on-site engagements and technology-enabled deployments, translating field experience into scalable solutions for partners worldwide.\n\n"Over time, those early ideas grew into technologies and programs that others around the world began to follow," Wisnewski said. "Thirty years later, the foundation is in place, and the next generation is building on that vision. The path forward is clear, and there is no reason to slow down."\n\nWhile NORCAT's footprint has grown, its focus on delivering practical value to the communities it serves has remained consistent. Across the six locations where NORCAT operates, its services contribute to workforce readiness, economic resilience, and job opportunities by helping employers access skilled talent and supporting individuals in building the capabilities required for safe, sustainable careers.\n\nAt the centre of that growth are the people, the people who built NORCAT, and the people who continue to provide exceptional services every day.\n\n"What has always set NORCAT apart is its people," said Jason Bubba, Chief Operating Officer of NORCAT. "From the very beginning, this organization was built by individuals who believed in working together, supporting one another, and solving real problems for industry. That sense of belonging and shared purpose has remained a constant over 30 years and continues to shape how we operate today."\n\nAs NORCAT begins its next chapter, it will be guided by a new CEO that will work with the NORCAT team, our customers, and key stakeholders to build on the incredible momentum and platform that has been established.`,
    aboutSections: [
      { title: 'About NORCAT', text: 'NORCAT is a global leader in developing and delivering training and technology solutions that enhance productivity, safety, and innovation in the skilled labour industries. Through its immersive learning platforms, innovation programs, and global training network, NORCAT empowers workers and organizations to thrive in the future of work.' },
    ],
  },
  {
    id: 'fednor-investment',
    title: 'Government of Canada Invests Over $1 Million in Innovation in Northern Ontario',
    date: 'August 27, 2025',
    excerpt: 'NORCAT Innovation, in partnership with FedNor, announces a $1.05 million investment to help Northern Ontario start-ups scale, adopt new technologies, and compete globally through the RAII and IAP programs.',
    category: 'Funding',
    icon: DollarSign,
    fullContent: `Greater Sudbury, Ontario - NORCAT Innovation, in partnership with FedNor, is pleased to announce a $1.05 million investment to help Northern Ontario's start-ups scale, adopt new technologies, and compete globally. The funding will support two key programs that give entrepreneurs the tools, resources, and confidence to bring technology-driven ideas from concept to market.\n\nThe [Regional Artificial Intelligence Initiative (RAII)](/funding/regional-ai-program) is a two-year program designed to accelerate the adoption and commercialization of artificial intelligence across Northern Ontario. Through advisory services, targeted training, cloud and server infrastructure, and micro-grants of up to $20,000, the initiative will support both start-ups building AI-driven technologies and established companies integrating AI into their operations. By helping companies develop in-house expertise and practical applications, RAII will strengthen efficiency, competitiveness, and long-term growth potential.\n\nThe [Innovation Acceleration Program (IAP)](/funding/innovation-acceleration-program), now in its third iteration, is a three-year micro-grant program that provides up to $20,000 in matching funding to support start-ups at critical stages of development. The program enables companies to invest in research and development, testing, prototyping, market expansion, and other commercialization activities. Over the years, IAP has supported dozens of local ventures, helping them scale faster, attract new customers, and compete on a larger stage.\n\nTogether, these two initiatives will support more than 35 small- and medium-sized enterprises across Northern Ontario, creating new jobs, advancing product development, and contributing to a more resilient regional innovation economy.\n\n"This investment from FedNor ensures that Northern Ontario entrepreneurs have access to the same opportunities and resources as their peers in larger centres. AI is evolving at an extraordinary pace, and the cost of adoption can put small companies at a disadvantage. With this support, local founders can experiment, integrate, and commercialize technologies that will help them grow and keep Northern Ontario on the map as a leader in innovation." - Brendan Skiffington, Manager of NORCAT Innovation\n\n"When we focus on innovation and new technologies, today's innovators become tomorrow's industry leaders. This investment will help ensure that Canadian opportunities benefit Canadians, and that the many enterprises that make Greater Sudbury an international hotspot for natural resource extraction will thrive for future generations." - Viviane Lapointe, Member of Parliament for Sudbury\n\nThese federally funded programs strengthen Northern Ontario's innovation ecosystem by advancing AI adoption, supporting commercialization, and equipping entrepreneurs with the resources and connections they need to succeed.`,
    aboutSections: [
      { title: 'About NORCAT', text: 'Headquartered in Sudbury, Ontario, NORCAT is the world\'s leading technology and innovation hub and skilled labour training and development organization collectively serving the global mining industry.' },
      { title: 'About FedNor', text: 'FedNor is the Government of Canada\'s economic development organization for Northern Ontario, dedicated to promoting innovation, supporting business growth, and fostering vibrant, sustainable communities. Through targeted investments and strategic partnerships, FedNor helps position Northern Ontario\'s economy to compete and thrive in the global marketplace.' },
    ],
  },
  {
    id: 'sudbury-catalyst-fund-codalio-2025',
    title: 'Sudbury Catalyst Fund Announces $250,000 Investment in Codalio',
    date: 'July 16, 2025',
    excerpt: 'The Sudbury Catalyst Fund invests $250,000 in Codalio, a Sudbury-based SaaS AI-powered startup that transforms software development by converting natural language into functional, scalable applications.',
    category: 'Funding',
    icon: DollarSign,
    fullContent: `Sudbury, Ontario – The Sudbury Catalyst Fund, a $5 million seed capital co-investment fund, proudly announces its investment of $250,000 in Codalio, an innovative Sudbury-based SaaS AI-powered startup transforming the software development process with fully customizable control. Codalio's SaaS-based platform enables project owners, business stakeholders as well as developers to convert natural language into functional applications, simplifying and streamlining the development cycle.

"Codalio empowers product owners and developers to rapidly prototype and construct scalable, enterprise-grade software applications while reducing development costs and time to market by up to 80%," says Ehsan Mirdamadi, CEO of Codalio. By leveraging the open-source Rhino platform – developed and owned by Codalio's founders – alongside the company's proprietary AI core engine, trained on best software development practices and expert-designed infrastructure blueprints, Codalio automates and augments the entire product and software development lifecycle. This integrated approach significantly reduces the time and cost associated with building enterprise-grade software applications.

With a focus on efficiency and quality, Codalio enables project managers to increase productivity and concentrate on higher-value tasks, all while maintaining full ownership of their projects. The platform offers the same benefits of the low-code and no-code platforms, while eliminating vendor lock-in, offering businesses greater flexibility. "We are incredibly grateful for the continued support from the Sudbury Catalyst Fund," adds Mirdamadi. "This investment allows us to continue growing our platform and drive even more innovation, as software development has historically been one of the biggest bottlenecks to innovation due to its high cost and complexity."

Codalio's full-stack development approach sets it apart from other generative AI tools, offering end-to-end support from ideation, scoping, coding to publishing, coupled with its abstraction layer (Rhino), Codalio distinguishes itself from other LLMs models like Copilot, ChatGPT or even platforms like Cursor, by providing full-cycle contextual control, high-quality application generation, and direct publishing. This results in the production of enterprise-grade "Full Applications" rather than limited code snippets.

"We are proud to invest in Codalio, a company that is reshaping how software is developed and managed," said Jason Sullivan, co-managing partner of the Sudbury Catalyst Fund and Executive Director of the Nickel Basin Federal Development Corporation. "Codalio's innovation is set to make a significant impact, not only in Sudbury's SME ecosystem but also in the global tech ecosystem."

Don Duval, CEO of NORCAT and co-managing partner of the Sudbury Catalyst Fund, sees Codalio's growth as a testament to the strength of Sudbury's tech ecosystem. "Codalio's success reflects the innovation and entrepreneurial spirit thriving in our community," he said. Their decision to relocate to Sudbury reinforces this momentum. "Our mission has always been to accelerate support for startups that drive meaningful change, create long-term value, and generate job opportunities within the region," Duval added.

---

MEDIA CONTACTS

Cynthia Furlotte | NORCAT | Marketing and Communications | cfurlotte@norcat.org

---

Version française

Le Fonds catalyseur de Sudbury annonce un investissement de 250 000 $ dans Codalio

Sudbury (Ontario) – Le Fonds catalyseur de Sudbury, un fonds de capital d'amorçage de 5 millions de dollars, est fier d'annoncer son investissement de 250 000 $ dans Codalio, une entreprise innovatrice de logiciel-service (SaaS – software as a service) installée à Sudbury qui fait appel à l'intelligence artificielle pour transformer le domaine du développement de logiciels en offrant le contrôle entièrement personnalisable du processus. La plateforme de Codalio permet aux propriétaires de projets, aux parties prenantes d'entreprises et aux développeurs de logiciels de convertir du langage naturel en applications fonctionnelles, de manière à simplifier et à accélérer le cycle du développement.

« Codalio donne aux propriétaires et aux développeurs de produits la capacité de mener rapidement le prototypage et la construction de logiciels de qualité entreprise tout en réduisant de jusqu'à 80 % les coûts et le temps qu'il faut pour développer un logiciel commercialisable », dit Ehsan Mirdamadi, le PDG de Codalio. En recourant à la plateforme à code source ouvert Rhino – développée et détenue par les fondateurs de Codalio – aux côtés de son moteur de programme propriétaire à intelligence artificielle entraînée sur des pratiques exemplaires du développement de logiciels et des plans d'infrastructure conçus par des experts, Codalio automatise et rehausse l'ensemble du cycle du développement de produits et de logiciels. Cette approche intégrée réduit considérablement le temps et les coûts associés à la création de logiciels de qualité entreprise.

En visant l'efficacité et la qualité, Codalio permet aux gestionnaires de projet d'augmenter leur productivité et de concentrer leurs efforts sur des tâches à valeur plus élevée, tout en gardant l'entière propriété de leurs projets. Cette plateforme fournit les mêmes avantages que les plateformes sans codage ou à faible codage, mais en éliminant l'asservissement à un fournisseur, ce qui donne plus de flexibilité aux entreprises. « Nous sommes profondément reconnaissants pour le soutien continu du Fonds catalyseur de Sudbury, ajoute Mirdamadi. Cet investissement nous permet de continuer de faire progresser notre plateforme et de poursuivre l'innovation encore plus loin, surtout que le développement de logiciels a longtemps été un frein à l'innovation à cause de ses coûts élevés et de sa complexité. »

L'approche de développement full-stack de Codalio la distingue d'autres outils de génération à intelligence artificielle en offrant le soutien de bout en bout à l'idéation, au cadrage, au codage et à la publication et en le jumelant à son palier d'abstraction (Rhino). Codalio se distingue d'autres grands modèles de langage comme Copilot, Chat GPT ou même des plateformes comme Cursor, parce qu'il permet le contrôle contextuel sur l'ensemble du cycle, la génération d'applications de haute qualité et la publication directe. Le résultat obtenu est donc la production « d'applications complètes » de niveau entreprise, plutôt que des extraits de code limités.

« Nous sommes fiers d'investir dans Codalio, une entreprise qui transforme le domaine de l'élaboration et de la gestion des logiciels », dit Jason Sullivan, associé codirecteur du Fonds catalyseur de Sudbury et directeur général de la Société fédérale de développement du Bassin du nickel. « L'innovation qu'apporte Codalio aura prochainement un impact important, non seulement dans l'écosystème des PME de Sudbury, mais aussi dans l'écosystème technologique international. »

Don Duval, PDG de NORCAT et associé codirecteur du Fonds catalyseur de Sudbury, voit la croissance de Codalio comme une manifestation de la force de l'écosystème technologique de Sudbury. « Le succès de Codalio est un reflet de l'esprit d'innovation et d'entrepreneuriat qui s'épanouit dans notre communauté », dit-il. Leur décision de déménager à Sudbury a renforcé cet élan. « Notre mission a toujours été d'accélérer le soutien des entreprises qui poursuivent des changements importants, qui créent de la valeur à long terme et qui génèrent des emplois dans notre région », ajoute Duval.

---

RENSEIGNEMENTS AUX MÉDIAS

Cynthia Furlotte | NORCAT | Marketing et communications | cfurlotte@norcat.org`,
    aboutSections: [
      { title: 'About the Sudbury Catalyst Fund', text: 'The Sudbury Catalyst Fund is a unique co-investment seed capital venture fund administered by the Nickel Basin Federal Development Corporation in collaboration with the City of Greater Sudbury, the Greater Sudbury Development Corporation, FedNor, and NORCAT. For more information, visit www.norcat.org/innovation/sudbury-catalyst-fund.html or www.nickelbasin.ca.' },
      { title: 'About Codalio', text: 'Codalio is an AI-powered software development platform that empowers entrepreneurs and businesses to build scalable, production-ready applications with remarkable speed and efficiency. By transforming natural language prompts into full-stack, secure, and customizable full applications, Codalio eliminates traditional development bottlenecks—enabling users to launch MVPs and iterate quickly to eventually build enterprise-grade solutions up to 80% faster. With built-in DevOps, modern architecture, and no vendor lock-in, Codalio bridges the gap between no-code simplicity and professional-grade software development. To learn more, visit https://www.codalio.com.' },
    ],
  },
  {
    id: 'turnkey-norcat-partnership-2025',
    title: 'Turnkey Communications Selects NORCAT as Innovation Partner to Advance Telecom Integration in Mining',
    date: 'May 6, 2025',
    excerpt: 'Turnkey Communications, one of Canada\'s leading telecommunications infrastructure providers, has selected NORCAT to accelerate the adoption and commercialization of advanced communications technologies across the global mining industry.',
    category: 'Partnership',
    icon: Building2,
    fullContent: `Turnkey Communications, one of Canada\'s leading providers of telecommunications infrastructure and systems integration, has selected NORCAT to accelerate the adoption and commercialization of advanced communications technologies across the global mining industry.

As part of NORCAT\'s dynamic ecosystem, Turnkey will leverage its deep field experience to help mining companies and technology developers bring cutting-edge solutions to life. With a track record of deploying complex communications systems in challenging environments, Turnkey brings valuable real-world insight that will help other companies scale and integrate their innovations effectively. "NORCAT has long been recognized as a catalyst for mining innovation, and we\'re honoured to be part of that journey," said Terry Joseph, President & CEO of Turnkey Communications. "We selected NORCAT because they offer a unique environment to help us, and the broader innovation community, close that gap. Their support, facilities, and global network of mining partners make them an ideal choice."

As part of this collaboration, Turnkey Communications will:

- Showcase advanced telecom solutions at [NORCAT\'s Underground Centre](/mining/underground-centre), including mining communication networks, fiber optics, and underground wireless systems-offering live demonstrations to mining stakeholders and decision-makers.
- Collaborate with technology developers by offering field-proven deployment support and system integration expertise, helping innovators bring solutions to market with greater speed and confidence.
- Advance safety and operational readiness by building communication systems that improve real-time control, remote monitoring, and emergency responsiveness in underground and remote environments.
- Contribute to training and workforce development by engaging in NORCAT\'s education and training programs, helping the next generation of skilled workers gain hands-on experience with modern telecom infrastructure.

"We are excited to welcome Turnkey Communications to the NORCAT ecosystem," said Don Duval, CEO of NORCAT. "Our Underground Centre serves as the global hub for mining innovation and supporting Turnkey underscores our commitment to expedite the adoption and diffusion of technologies that will shape the future of mining."`,
    aboutSections: [
      { title: 'About Turnkey Communications', text: 'Turnkey Communications is Canada\'s trusted systems integrator for telecommunications infrastructure, offering more than 25 years of experience in delivering reliable, future-proof solutions including private/public cellular networks, fiber optics, and enterprise-grade networking. Turnkey serves industrial sectors across Canada with a focus on operational efficiency, safety, and performance.' },
      { title: 'About the NORCAT Underground Centre', text: 'Located in the City of Greater Sudbury, the NORCAT Underground Centre serves as the global one-stop shop operating mine designed to enable start-ups, small / medium enterprises, and international companies to develop, test, and demonstrate emerging technologies that are poised to transform the global mining industry.' },
    ],
  },
];

// Helper to render markdown-style links in news content
const renderMarkdownLinks = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, url] = match;
      return (
        <a
          key={i}
          href={url}
          className="underline hover:text-[#00B398] transition-colors"
          style={{ color: '#003DA5' }}
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

// Activity feed
const activityFeed = [
  { text: 'VentFlow Systems expanded to South Africa', time: '2 hours ago', type: 'expansion' },
  { text: 'New mentor joined: Sarah Chen, ex-Google', time: '5 hours ago', type: 'team' },
  { text: 'RockSense AI accepted into accelerator', time: '8 hours ago', type: 'program' },
  { text: 'GeoVision closed $2.5M seed round', time: '12 hours ago', type: 'funding' },
  { text: 'MineTech demo at CIM Conference', time: '1 day ago', type: 'event' },
  { text: 'Underground AI pilot at Garson Mine', time: '1 day ago', type: 'pilot' },
];

// Stats ticker
const ecosystemStats = [
  { label: 'Active Startups', value: '47' },
  { label: 'Capital Raised This Year', value: '$89M' },
  { label: 'Jobs Created', value: '340+' },
  { label: 'Pilot Programs', value: '23' },
];

// Categories - derived from actual news items
const categories = ['All', ...Array.from(new Set(newsItems.map(item => item.category)))];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  const filteredNews = activeCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  // Brand tokens (mirrors About)
  const NAVY = '#001A4D';
  const BLUE = '#003DA5';
  const TEAL = '#00B398';
  const PAPER = '#F2F3F6';
  const FONT = "'Open Sans', system-ui, sans-serif";

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO (About-style) ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                <Sparkles className="w-3.5 h-3.5" />
                News & Updates
              </p>
              <h1 className="font-black uppercase leading-[0.95] tracking-tight text-white text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                Ecosystem<br /><span style={{ color: TEAL }}>Newsroom.</span>
              </h1>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                The latest from NORCAT Innovation and our portfolio companies-funding rounds,
                partnerships, program launches, and ecosystem milestones.
              </p>
            </div>
          </div>
        </section>

        {/* ── Category Filters ── */}
        <section className="sticky top-16 z-30 backdrop-blur-xl" style={{ background: 'rgba(242,243,246,0.92)', borderBottom: '1px solid rgba(0,26,77,0.08)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all whitespace-nowrap relative"
                  style={{ color: activeCategory === cat ? NAVY : '#5b6478' }}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="news-cat-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: TEAL }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── News Grid ── */}
        <section className="py-20 md:py-28 relative" style={{ background: PAPER, color: NAVY }}>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex items-end justify-between mb-12 md:mb-16">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                   style={{ fontFamily: FONT, color: TEAL }}>
                  <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                  Latest Stories
                </p>
                <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl"
                    style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
                  Fresh from <span style={{ color: TEAL }}>the North.</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg" style={{ color: '#475068' }}>
                  {filteredNews.length} {filteredNews.length === 1 ? 'story' : 'stories'}
                </p>
              </div>
            </div>

            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => {
              const Icon = item.icon;
              const isExpanded = selectedNews === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ layout: { type: 'spring', stiffness: 350, damping: 30 } }}
                  className={`cursor-pointer ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
                  style={{ zIndex: isExpanded ? 10 : 1 }}
                  onClick={() => !isExpanded && setSelectedNews(item.id)}
                >
                  <motion.div
                    layout
                    className="rounded-[20px] overflow-hidden"
                    style={{
                      background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
                      borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
                      borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
                      borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
                      boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                    }}
                    animate={{
                      scale: selectedNews && !isExpanded ? 0.95 : 1,
                      opacity: selectedNews && !isExpanded ? 0.4 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  >
                    {/* ── Collapsed Card ── */}
                    {!isExpanded && (
                      <motion.div layout="position" className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-11 h-11 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                            <Icon className="w-5 h-5" style={{ color: 'hsl(168, 100%, 35%)' }} />
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'hsl(168, 100%, 28%)' }}>{item.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs mb-3" style={{ color: 'hsl(220, 15%, 50%)' }}>
                          <Calendar className="w-3.5 h-3.5" />
                          {item.date}
                        </div>
                        <h3 className="text-lg font-bold mb-3 leading-snug line-clamp-2" style={{ color: 'hsl(220, 15%, 20%)', fontFamily: "'Open Sans', sans-serif" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm font-light line-clamp-3 mb-4" style={{ color: 'hsl(220, 15%, 40%)' }}>
                          {item.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium" style={{ color: 'hsl(168, 100%, 28%)' }}>
                          Read More <ArrowRight className="h-4 w-4" />
                        </span>
                      </motion.div>
                    )}

                    {/* ── Expanded Card ── */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                      >
                        {/* Header bar */}
                        <div className="relative p-8 md:p-12 pb-0">
                          {/* Close button */}
                          <button
                            onClick={(e) => { e.stopPropagation(); setSelectedNews(null); }}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-20 transition-transform hover:scale-110"
                            style={{
                              background: 'hsla(220, 15%, 85%, 0.5)',
                              border: '1px solid hsla(220, 15%, 80%, 0.4)',
                            }}
                          >
                            <X className="w-5 h-5" style={{ color: 'hsl(220, 15%, 30%)' }} />
                          </button>

                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={iconContainerStyle}>
                              <Icon className="w-6 h-6" style={{ color: 'hsl(168, 100%, 35%)' }} />
                            </div>
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{
                              background: 'hsl(168 100% 35% / 0.1)',
                              color: 'hsl(168, 100%, 28%)',
                              border: '0.5px solid hsl(168 100% 35% / 0.2)',
                            }}>
                              {item.category}
                            </span>
                            <span className="text-xs" style={{ color: 'hsl(220, 15%, 50%)' }}>{item.date}</span>
                          </div>

                          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-3xl" style={{ color: 'hsl(220, 15%, 15%)', fontFamily: "'Open Sans', sans-serif" }}>
                            {item.title}
                          </h2>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 pt-4">
                          <div className="max-w-3xl">
                            {item.fullContent.split('\n\n').map((paragraph, idx) => (
                              <p key={idx} className="text-base leading-relaxed mb-4 last:mb-0" style={{ color: 'hsl(220, 15%, 25%)', fontFamily: "'Open Sans', sans-serif" }}>
                                {renderMarkdownLinks(paragraph)}
                              </p>
                            ))}

                            {/* About Sections */}
                            {item.aboutSections && item.aboutSections.length > 0 && (
                              <>
                                <div className="my-8" style={{ borderTop: '1px solid hsla(220, 15%, 75%, 0.4)' }} />
                                {item.aboutSections.map((about, idx) => (
                                  <div key={idx} className="mb-6 last:mb-0">
                                    <h4 className="text-lg font-bold mb-2" style={{ color: 'hsl(220, 15%, 15%)', fontFamily: "'Open Sans', sans-serif" }}>
                                      {about.title}
                                    </h4>
                                    <p className="text-base leading-relaxed" style={{ color: 'hsl(220, 15%, 25%)', fontFamily: "'Open Sans', sans-serif" }}>
                                      {about.text}
                                    </p>
                                  </div>
                                ))}
                              </>
                            )}
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

        {/* ───── Newsletter CTA (paper) ───── */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
               style={{ fontFamily: FONT, color: TEAL }}>
              <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
              Stay in the Loop
            </p>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                style={{ fontFamily: FONT, letterSpacing: '-0.02em', color: NAVY }}>
              Never Miss<br /><span style={{ color: TEAL }}>an Update.</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#475068' }}>
              Get weekly insights on Sudbury's innovation ecosystem delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full text-sm focus:outline-none focus:ring-2"
                style={{ background: 'white', border: '1px solid rgba(0,26,77,0.12)', color: NAVY }}
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 pl-6 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                style={{ background: TEAL, color: NAVY, fontFamily: FONT }}
              >
                Subscribe
                <span className="inline-flex items-center justify-center size-9 rounded-full" style={{ background: NAVY, color: 'white' }}>
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
                </span>
              </button>
            </form>
          </div>
        </section>

        {/* ── External Links ── */}
        <section className="py-12" style={{ background: PAPER, borderTop: '1px solid rgba(0,26,77,0.08)' }}>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm" style={{ color: '#5b6478' }}>
              <span className="font-bold uppercase tracking-[0.14em] text-xs" style={{ color: NAVY }}>Also Featured In</span>
              {['Northern Ontario Business', 'Mining.com', 'BetaKit', 'Sudbury Star', 'CBC North'].map((pub) => (
                <a key={pub} href="#" className="hover:text-foreground transition-colors flex items-center gap-1" style={{ color: NAVY }}>
                  {pub} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};


export default News;
