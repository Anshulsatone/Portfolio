import type { ReactElement } from 'react';

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiSolidity,
  SiWeb3Dotjs,
  SiEthereum,
  SiFlask,
  SiDocker,
} from 'react-icons/si';

export interface TechItem {
  name: string;
  icon: () => ReactElement;
  level?: 'Beginner' | 'Intermediate' | 'Proficient';
}

export const techStack: TechItem[] = [
  {
    name: 'React.js',
    icon: () => <FaReact size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Tailwind CSS',
    icon: () => <SiTailwindcss size={40} />,
    level: 'Proficient',
  },
  {
    name: 'TypeScript',
    icon: () => <SiTypescript size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Node.js',
    icon: () => <FaNodeJs size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Express.js',
    icon: () => <SiExpress size={40} />,
    level: 'Proficient',
  },
  {
    name: 'MongoDB',
    icon: () => <SiMongodb size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Redux',
    icon: () => <SiRedux size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Firebase',
    icon: () => <SiFirebase size={40} />,
    level: 'Intermediate',
  },
  {
    name: 'Git',
    icon: () => <FaGitAlt size={40} />,
    level: 'Intermediate',
  },
  {
    name: 'GitHub',
    icon: () => <FaGithub size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Vercel',
    icon: () => <SiVercel size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Postman',
    icon: () => <SiPostman size={40} />,
    level: 'Proficient',
  },
  {
    name: 'Solidity',
    icon: () => <SiSolidity size={40} />,
    level: 'Intermediate',
  },
  {
    name: 'Web3.js',
    icon: () => <SiWeb3Dotjs size={40} />,
    level: 'Intermediate',
  },
  {
    name: 'Ethereum',
    icon: () => <SiEthereum size={40} />,
    level: 'Intermediate',
  },
  {
    name: 'Flask',
    icon: () => <SiFlask size={40} />,
    level: 'Intermediate',
  },
  {
    name: 'Docker',
    icon: () => <SiDocker size={40} />,
    level: 'Proficient',
  },
];
