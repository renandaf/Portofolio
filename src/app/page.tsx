
import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import ToolsSection from '@/components/sections/project';
import TestimonialsSection from '@/components/sections/tools';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection /> 
      <ToolsSection />
      <hr  className='border-gray-700'/>
      <TestimonialsSection />    
      <ContactSection />
    </>
  );
}
