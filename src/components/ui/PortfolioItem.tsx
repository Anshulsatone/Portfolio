import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, category, index }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-square">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-300 text-sm">{category}</p>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;