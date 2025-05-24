import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: <Github size={20} />, 
    url: 'https://github.com/Anshulsatone' 
  },
  { 
    name: 'LinkedIn', 
    icon: <Linkedin size={20} />, 
    url: 'https://www.linkedin.com/in/anshul-satone-504423259/' 
  },
  { 
    name: 'Twitter', 
    icon: <Twitter size={20} />, 
    url: 'https://x.com/AnshulSatone' 
  },
];

const SocialIcons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-black dark:text-white hover:text-accent dark:hover:text-accent transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;