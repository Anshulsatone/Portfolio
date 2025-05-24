import React from 'react';
import SocialIcons from '../ui/SocialIcons';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-dark-bg py-12 border-t border-gray-200 dark:border-dark-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-black dark:text-white">
              A<span className="text-accent">.</span>S
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Crafting Web Experiences at Scale
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <motion.button
              onClick={scrollToTop}
              className="mb-6 p-3 rounded-full bg-accent text-black hover:bg-opacity-80 transition-all"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
            
            <nav className="mb-6">
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            <SocialIcons />
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-border text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Anshul Satone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;