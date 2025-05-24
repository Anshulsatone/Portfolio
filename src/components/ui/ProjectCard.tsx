import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  date: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  title,
  description,
  date,
  liveUrl,
  githubUrl,
  index,
}) => {
  return (
    <motion.div
      className="py-8 border-t border-gray-200 dark:border-dark-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <span className="text-lg font-bold text-gray-400 dark:text-gray-500">
            {number}
          </span>
        </div>
        
        <div className="md:w-2/4 mb-4 md:mb-0">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">{date}</p>
        </div>
        
        <div className="md:w-1/4 flex justify-start md:justify-end space-x-4">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black dark:text-white hover:text-accent dark:hover:text-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View GitHub repository"
            >
              <Github size={20} />
            </motion.a>
          )}
          
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View Project</span>
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;