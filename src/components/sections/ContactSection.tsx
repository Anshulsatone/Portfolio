import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-6xl md:text-7xl font-bold text-black dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          contact
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Get in touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center text-black dark:text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mail me at</p>
                  <a href="mailto:hello@anshulsatone.com" className="text-black dark:text-white hover:text-accent dark:hover:text-accent transition-colors">
                    anshulsatone@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center text-black dark:text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Call me at</p>
                  <a href="tel:+1234567890" className="text-black dark:text-white hover:text-accent dark:hover:text-accent transition-colors">
                    +91 6268437188
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center text-black dark:text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Based in</p>
                  <p className="text-black dark:text-white">Raipur, INDIA</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-card border-0 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-accent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-card border-0 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-accent outline-none transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-dark-card border-0 rounded-lg text-black dark:text-white focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;