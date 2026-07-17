import brendanImage from '@/assets/team/brendan.png';
import shashankImage from '@/assets/team/shashank.png';
import bartImage from '@/assets/team/bart.png';
import jieImage from '@/assets/team/jie-new.png';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: 'Brendan Skiffington',
    role: 'INNOVATION MANAGER',
    image: brendanImage,
    bio: "Born right here in Sudbury and now leading Innovation, I am fully committed to the growth of my hometown. I focus on unlocking our capacity for innovation and am always making new network connections to sustain and expand our mission and impact. Outside of work, I am an avid hockey and sports fan, and I love keeping up with F1!",
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'SHASHANK METHA',
    role: 'INNOVATION COORDINATOR',
    image: shashankImage,
    bio: "As the Core5 and innovation lead, I specialize in breaking down complex workflow barriers with practical, step-by-step steps that help founders get their products to market. In my spare time, I am a constant learner who loves to travel, build up diverse knowledge, and spend quality time with my family.",
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Bart Streppel',
    role: 'Content Specialist',
    image: bartImage,
    bio: "I help early-stage startups and academic research teams translate complex technical ideas into clear, compelling stories that drive commercialization forward. When I'm off the clock, I'm usually writing and playing music as a singer-songwriter, tackling hands-on home renovation projects, or diving deep into video game mechanics.",
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Jie Chen',
    role: 'INNOVATION ASSOCIATE',
    image: jieImage,
    bio: "With an incredible attention to detail, I help clients break down the innovation landscape into successive, tangible steps that get founders in touch with funding, industry connections, and momentum-building partnerships. In my spare time, I love nothing more than to be with my family and dissecting the latest wave-making tech; otherwise, you'll find me cycling!",
    linkedin: 'https://linkedin.com/in/',
  },
];
