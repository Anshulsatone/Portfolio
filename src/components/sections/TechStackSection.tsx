import React from 'react';
import { motion } from 'framer-motion';
import TechStackItem from '../ui/TechStackItem';
import { techStack } from '../../data/techStack';

const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-dark-bg overflow-hidden">
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
              tech stack · tech stack · tech stack · tech stack · tech stack · tech stack · tech stack · tech stack · tech stack · tech stack ·
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <TechStackItem
              key={tech.name}
              name={tech.name}
              icon={tech.icon()}
              level={tech.level}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;