import React from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from '../ui/PortfolioItem';
import { portfolioItems } from '../../data/portfolio';

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-black dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          portfolio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={item.id}
              image={item.image}
              title={item.title}
              category={item.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;