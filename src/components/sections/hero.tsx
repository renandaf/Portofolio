import Image from 'next/image';
import { MapPin } from 'lucide-react';

import Profil from '/public/images/PP.png';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const HeroSection = () => {
  return (
    <Container id="about">
      <div className="flex flex-col gap-12 md:flex-row items-center justify-center">
        {/* Image */}
        <div className="flex flex-col items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src={Profil}
              alt="Headshot of Sagar"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray bg-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[300px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-100 max-md:top-5 md:bottom-5 md:right-0 md:h-[320px] md:w-[340px]"></div>        
          </div>
           <div><SocialIcons /></div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Renanda
            </Typography>
            <Typography>
              I’m M.Renanda Firdhausa, a fresh graduate student in Informatics Engineering with a strong interest in game development. I love games and enjoy bringing ideas to life by creating experiences that captivate and delight players. During my studies, I have gained foundational skills in programming and software development. I am eager to apply these skills in real-world challenges and continuously learning new technologies and tools to grow as a developer. 
             </Typography>
              <Typography>
              I have developed several simple games mainly using Unity, which has allowed me to gain valuable practical experience in the game development process. My main focus is implementing interesting ideas into the main mechanics of the game through coding, as well as creating shaders and effects to enhance the visual quality and atmosphere of the game.
              In my final year, I also have experience in Virtual Reality by creating a VR application simulating the Siak Palace as part of my thesis project. This simulation allows users to explore the Siak Palace virtually, providing a realistic and immersive tour.
             </Typography>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-600" />
              <Typography>Riau, Indonesia</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <Typography>Available for work</Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
