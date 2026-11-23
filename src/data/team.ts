import brendanImage from '@/assets/team/brendan-skiffington.jpg.asset.json';
import shashankImage from '@/assets/team/shashank-metha.jpg.asset.json';
import kyleImage from '@/assets/team/kyle-joly-2.jpg.asset.json';
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
    image: brendanImage.url,
    bio: 'Born and raised in Sudbury, Brendan Skiffington is passionate about his community and helping Northern Ontario grow. As the Manager of NORCAT Innovation, he works closely with entrepreneurs, businesses and industry partners to bring new ideas to life, support emerging technologies and create opportunities across the region. Outside of work, Brendan is an avid sports fan who enjoys cheering on his favourite hockey team and keeping up with the latest Formula 1 race.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'SHASHANK METHA',
    role: 'INNOVATION COORDINATOR',
    image: shashankImage.url,
    bio: 'As Innovation Coordinator at NORCAT, Shashank Metha is passionate about helping entrepreneurs turn their ideas into reality. Working closely with startups and growing businesses through NORCAT Innovation and Core5, he helps founders navigate challenges, develop their technologies and bring new solutions to market. Outside of work, Shashank enjoys travelling, learning new things and spending quality time with his family.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Kyle Joly',
    role: 'CONTENT SPECIALIST',
    image: kyleImage.url,
    bio: 'Kyle supports communications, events, and community outreach as part of the NORCAT Innovation team. He is completing his Business Administration advanced diploma at Cambrian College, with a strong interest in entrepreneurship, business development, and emerging technologies. Outside of work, he enjoys exploring new business ideas and discovering practical ways technology can help businesses grow.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Jie Chen',
    role: 'INNOVATION ASSOCIATE',
    image: jieImage,
    bio: 'Jie Chen brings sharp attention to detail to client work, helping founders break the innovation landscape into clear, tangible next steps that connect them with funding, industry relationships and momentum-building partnerships. Outside of work, Jie is with family, tracking the latest in emerging technology, or out cycling.',
    linkedin: 'https://linkedin.com/in/',
  },
];
