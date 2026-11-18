import brendanImage from '@/assets/team/brendan-skiffington.jpg.asset.json';
import shashankImage from '@/assets/team/shashank-metha.jpg.asset.json';
import kyleImage from '@/assets/team/kyle-joly-placeholder.jpg.asset.json';
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
    bio: 'As Core5 and Innovation Lead, Shashank Metha helps founders move from idea to market by breaking complex development barriers into clear, practical steps. He works directly with venture teams on workflow, execution and go-to-market priorities. A constant learner, he travels widely, builds knowledge across disciplines, and spends his time away from work with his family.',
    linkedin: 'https://linkedin.com/in/',
  },
  {
    name: 'Kyle Joly',
    role: 'COMING SOON',
    image: kyleImage.url,
    bio: "Kyle's title, bio, and photo are being finalized. His full profile will be published here before the page goes live.",
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
