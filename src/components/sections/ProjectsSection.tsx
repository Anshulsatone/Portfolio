import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <motion.div
              className="whitespace-nowrap text-6xl font-bold text-gray-200 dark:text-gray-800"
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: 'linear',
              }}
            >
              projects · projects · projects · projects · projects · projects · projects · projects · projects · projects · projects ·
            </motion.div>
          </div>
        </div>
        
        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              number={project.number}
              title={project.title}
              description={project.description}
              date={project.date}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;