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
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro provident similique ipsa at, deserunt distinctio illo illum magnam dolores corrupti maxime natus dolorem praesentium sint? Ratione, quaerat libero vero quo neque odio nemo illo eaque commodi molestias? Eaque, nulla tempore? Facilis perferendis commodi porro, voluptatibus numquam fugit at repudiandae, eius voluptas ducimus, consectetur similique quas quam. Enim quia, inventore deserunt odio iure, nesciunt numquam facere cum nam laudantium voluptate quam! Incidunt nam consequatur accusantium distinctio. Quod dicta modi porro, similique repudiandae omnis quaerat, ea amet autem pariatur debitis numquam non beatae nihil maiores minus itaque, rerum sapiente tempore reiciendis iusto?
            </Typography>
             <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsam deserunt quia eveniet quae quod ipsum est illo dolorem facere, soluta odit beatae rerum deleniti velit tempore quibusdam ipsa possimus autem debitis molestiae culpa repellat aliquam! Hic dolorem alias blanditiis perspiciatis quos, rem quas molestias provident et, mollitia odio deleniti.
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
