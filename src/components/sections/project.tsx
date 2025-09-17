import { PROJECTS } from '@/lib/data';
import ProjectDetails from '@/components/data-display/project-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const ProjectSection = () => {
  return (
    <Container id="games" className='bg-gray-1000'>
      <div className="flex flex-col items-center gap-1">
        <div className="self-center">
          <Tag label="Games" classFont='text-black'/>
        </div>
          <Typography variant="subtitle" className="max-w-xl text-center text-gray-200">
          Some of the games I have built:
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </Container>
  );
};

export default ProjectSection;
