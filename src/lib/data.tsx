import { Github, Linkedin, Instagram, Gamepad2 } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoUnity from '/public/images/logos/icon-unity.svg';
import LogoCsharp from '/public/images/logos/icon-csharp.svg';
import LogoPhotoshop from '/public/images/logos/icon-photoshop.svg';
import LogoFlutter from '/public/images/logos/icon-flutter.svg';
import LogoAndroid from '/public/images/logos/icon-android.svg';
import LogoAseprite from '/public/images/logos/icon-aseprite.svg';

import LogoPCR from '/public/images/logos/Logo_pcr.png';
import LogoPharos from '/public/images/logos/Logo_Pharos.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
} from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/renandaf',
  },
  {
    icon: Linkedin,
    url: 'www.linkedin.com/in/mrenandaf',
  },
  {
    icon: Instagram,
    url: 'https://www.instagram.com/rennd_f/',
  },
  {
    icon: Gamepad2,
    url: 'https://renand-studio.itch.io/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
    {
    label: 'Unity',
    logo: LogoUnity,
    url: 'https://unity.com/',
  },
  {
    label: 'C#',
    logo: LogoCsharp,
    url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url: 'https://flutter.dev/',
  },
    {
    label: 'Android Studio',
    logo: LogoAndroid,
    url: 'https://developer.android.com/studio',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
    {
    label: 'Photoshop',
    logo: LogoPhotoshop,
    url: 'https://www.adobe.com/id_en/products/photoshop.html',
  },
    {
    label: 'Aseprite',
    logo: LogoAseprite,
    url: 'https://www.aseprite.org/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  { 
    logo: LogoPCR,
    logoAlt: 'Logo PCR',
    position: 'Apllied Bachelor Student in Informatics Engineering',
    place: "Polytechnic Caltex Riau",
    startDate: new Date(2021, 8),
    endDate: new Date(2025, 8),
    summary: [
      'Graduated with a GPA 3.95 / 4',
      'Active in organizations and have participated in several event committees.',
    ],
  },
  {
    logo: LogoPharos,
    darkModeLogo: LogoPharos,
    logoAlt: 'Greenapex logo',
    position: 'Front-end Developer Intern',
    place: "Pharos Indonesia",
    startDate: new Date(2024, 1),
    endDate: new Date(2024, 6),
    summary: [
      'Developed and improved internal web-based systems using React with Next.js Framework for the frontend and Golang for the backend.',
      'Assisted in adding new features to the company’s internal website to enhance functionality and user experience.',
      'Helped identify and fix bugs to improve website stability and performance.',
      'Collaborated with cross-functional teams to resolve issues and implement enhancements across multiple divisions.',
      'Gained hands-on experience in building scalable enterprise-level applications within a corporate environment.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Racket Mania',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://renand-studio.itch.io/racket-mania',
    youtube:"https://youtu.be/95Sg0Vx6SBE"
  },
  {
    name: 'Night Ride',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://renand-studio.itch.io/night-ride',
    youtube:"https://youtu.be/g7LkJ-Q6fsM"
  },
  {
    name: 'Deep Sea Quest',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://renand-studio.itch.io/deep-sea-quest',
    youtube:"https://youtu.be/Xqqt-EDYfIU"
  },
  {
    name: 'Siak Palace Virtual Reality',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://renand-studio.itch.io/siak-palace-tour',
    youtube:"https://youtu.be/_l12_Q5bXRc"
  },
];
