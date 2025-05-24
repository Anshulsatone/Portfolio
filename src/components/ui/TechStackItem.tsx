import React from 'react';
import { motion } from 'framer-motion';

interface TechStackItemProps {
  name: string;
  icon: React.ReactNode;
  level?: 'Beginner' | 'Intermediate' | 'Proficient';
  index: number;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ name, icon, level, index }) => {
  return (
    <motion.div
      className="p-4 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="w-16 h-16 flex items-center justify-center text-black dark:text-white mb-3">
        {icon}
      </div>
      <h3 className="text-black dark:text-white font-medium">{name}</h3>
      {level && (
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{level}</span>
      )}
    </motion.div>
  );
};

export default TechStackItem;