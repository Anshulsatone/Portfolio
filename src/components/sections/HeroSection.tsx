import React from 'react';
import { motion } from 'framer-motion';
import SocialIcons from '../ui/SocialIcons';
import MetricItem from '../ui/MetricItem';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white leading-tight">
              Anshul Satone
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-4 mb-8">
              Crafting Web Experiences at Scale
            </p>
            
            <div className="flex space-x-4 mb-12">
              <SocialIcons />
            </div>
            
            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-4 text-white bg-black dark:bg-white dark:text-black rounded-full font-medium hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-colors"
            >
              Download Resume
            </a>
            
            <div className="flex flex-wrap gap-12 mt-16">
              <MetricItem
                value="+10"
                label="full-stack projects"
                delay={0.2}
              />
              <MetricItem
                value="+200"
                label="Data structures and algorithms solved"
                delay={0.4}
              />
            </div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-full bg-accent rounded-3xl overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/d7/8a/2a/d78a2a007af4ef31fc5681f2e2284e1d.jpg"
                  alt="Anshul Satone"
                  className="w-full h-full object-cover mix-blend-multiply"

                />
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 text-black dark:text-white"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;