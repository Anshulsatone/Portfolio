import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-bg overflow-hidden">
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
              about · about · about · about · about · about · about · about · about · about · about · about · about · about · about · about ·
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black dark:bg-white rounded-3xl overflow-hidden aspect-square">
            <img
                src="https://i.pinimg.com/736x/0c/08/a3/0c08a3564cafc0a02cbdf436cd4e1ef1.jpg"
                alt="About Anshul"
                className="w-full h-full object-cover dark:mix-blend-difference"
                />
              </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Aspiring Full-Stack Developer | Passionate About Building Scalable & User-Centric Web Applications
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a Computer Science undergraduate at NIT Raipur with a strong interest in full-stack and blockchain development. I'm currently building hands-on skills in React.js, Node.js, and modern web technologies, while exploring the world of Web3 through smart contracts, dApps, and cryptographic applications.
                </p>
                With a foundation in DSA, problem-solving, and academic projects like a full-stack bookstore app, I focus on creating efficient, scalable, and user-friendly digital experiences. I'm passionate about continuous learning and often dive into DevOps, competitive programming, and open-source contributions to grow my technical depth.
                <p>
                When I'm not coding, I enjoy mentoring peers, writing technical notes, and experimenting with emerging technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;