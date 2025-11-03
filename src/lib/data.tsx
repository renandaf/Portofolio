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
import LogoUnreal from '/public/images/logos/icon-unreal.svg';
import LogoAseprite from '/public/images/logos/icon-aseprite.svg';

//import Video1 from '/public/videos/aa.mp4';

import LogoPCR from '/public/images/logos/Logo_pcr.png';
import LogoPharos from '/public/images/logos/Logo_Pharos.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetailsData,
  ToolsDetails,
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
    label: 'Games',
    href: '#games',
  },
    {
    label: 'Tools/Shaders',
    href: '#tools',
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

export const TECHNOLOGIES: TechDetailsData[] = [
    {
    label: 'Unity',
    logo: LogoUnity,
    url: 'https://unity.com/',
  },
  {
    label: 'Unreal Engine',
    logo: LogoUnreal,
    url: 'https://www.unrealengine.com/en-US',
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
    description:'A simple two-player badminton game where the player with the highest score wins. Players can perform two types of swings regular swings and smashes.',
    list:['Swing mechanic that uses the velocity of the rigid body of the ball.','Simple AI system that follows the landing point of the ball, with the ability to choose between two kinds of swings.','Game manager script that controls the flow of the game'],
    url: 'https://renand-studio.itch.io/racket-mania',
    youtube:"https://youtu.be/95Sg0Vx6SBE"
  },
  {
    name: 'Night Ride',
    description:
      'This is an endless runner game in which you drive a car and collect as many points as possible while avoiding obstacles.',
      list:["This is the first time I've used pre-processing to create an ominous nighttime atmosphere.","A road script that spawns obstacles and coins in random positions.", "I also use a ScriptableObject to define the data of each type of car."],
    url: 'https://renand-studio.itch.io/night-ride',
    youtube:"https://youtu.be/g7LkJ-Q6fsM"
  },
  {
    name: 'Deep Sea Quest',
    description:
      "It's an adventure game where you swim and catch a type of fish based on the quest's description.",
      list:["State system that organizes the player's animation and control when on the ground or in the water.","Spawner script that spawns a fish in a specific area, as well as a fish behavior script that controls how the fish behaves.","Simple quest system with save and continue options."],
    url: 'https://renand-studio.itch.io/deep-sea-quest',
    youtube:"https://youtu.be/Xqqt-EDYfIU"
  },
  {
    name: 'Siak Palace Virtual Reality',
    description:
      'Simulation game where you can explore every corner of the siak palace, interact with unique objects, and uncover fascinating information about its history.',
      list:["It was created using the Unity XR Interaction Toolkit plugin.", "Custom interaction with the player's hand when inspecting the object.", "Create a system for saving data that stores information in a file."],
    url: 'https://renand-studio.itch.io/siak-palace-tour',
    youtube:"https://youtu.be/_l12_Q5bXRc"
  },
   {
    name: '2D Platformer Prototype',
    description:
      'Just some prototype i make for my upcoming 2D Platformer',
      list:["Include some advanced movement for 2D Platformer like Apex modifier, Jump Buffer, Coyote time, Fall modifier, Wall slide, and Wall jumping.", "Simple sprite animation and Tilemap."],
    url: 'https://renand-studio.itch.io/2d-platformer-movement',
    youtube:""
  },

];

export const TOOLS: ToolsDetails[] = [
  {
    id:1,
    title: 'Dynamic Fish Spawner',
    video:'https://res.cloudinary.com/dkhybgtzm/video/upload/v1757948677/Unity_Vm2qES0WlM_ykcjhk.mp4',
    tools:
      'This is a custom fish spawner where you can use gizmos in the editor to adjust the size of the spawner. Also, the spawned fish will not swim past the spawner area.',
    update : "Add option to change the shape of the spawner, Add fish schooling behavior",
    reference:"",
  },
  {
     id:2,
    title: 'Holographic Glitch Effect Shader',
     video:'https://res.cloudinary.com/dkhybgtzm/video/upload/v1757938925/Unity_OkIaTdw8Z1_v2u5uy.mp4',
    tools:
      'I made this while learning how to create a CG/HLSL unlit shader. The chromatic aberration effect is created by slightly shifting the UV coordinates of the textures R, G, and B channels.',
      update : "",
      reference:"https://youtube.com/playlist?list=PLX2vGYjWbI0RS_lkb68ApE2YPcZMC4Ohz&si=WJ_-rnEwlW64gAeh",
  },
  {
     id:3,
    title: ' PBR Setup + Dissolve Effect Shader',
     video:'https://res.cloudinary.com/dkhybgtzm/video/upload/v1758026689/Unity_eS765jvOio_okmdcy.mp4',
    tools:
      'The dissolve effect was created using a noise texture for the material alpha and by changing the alpha threshold value. The glowing line was created using a step node to obtain the value between black and white in the noise texture. ',
      update : "",
        reference:"https://youtu.be/we406Hc_WrM?si=yywndqGS-7gMUlta",
  },
  {
     id:4,
    title: 'Procedural Building Generation',
    video:"https://res.cloudinary.com/dkhybgtzm/video/upload/v1758026674/Unity_kpSGXYFUis_xlsswl.mp4",
    tools:'This procedural building generator uses spline tools in Unity to generate a mesh based on its size by following a list of points in a spline. The generated mesh will be combined based on its material.',
      update : "Add different mesh for door and window, Add roof generator, Fix the little gap between mesh",
        reference:"https://youtu.be/FYmudT12NcI?si=gdu6yNeFTa_AS0jL",
  },
  {
     id:5,
    title: 'Water Shader',
    video:"https://res.cloudinary.com/dkhybgtzm/video/upload/v1758027049/Unity_u1HUh1QfEo_tdinvd.mp4",
    tools:"Water shaders are created by calculating the depth of objects within the material based on their position on the screen. The depth texture is then colored with two colors to create the surface color and the depth color of the water.",
      update : "Add buoyancy movement, Add horizon color, Add surface texture for cartoonist look, Fix water normal reflection",
        reference:"https://youtu.be/1yevpCAA_rU?si=wzuvuvG5xRqTFX5x",
  },
  {
     id:6,
    title: 'List of tools and shaders I want to learn to create',
    video:"",
    tools:"",
      update : "",
        reference:"",
  },
];
