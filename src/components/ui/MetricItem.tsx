import React from 'react';
import { motion } from 'framer-motion';

interface MetricItemProps {
  value: string;
  label: string;
  delay?: number;
}

const MetricItem: React.FC<MetricItemProps> = ({ value, label, delay = 0 }) => {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <h3 className="text-4xl font-bold text-black dark:text-white">{value}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-[140px]">{label}</p>
    </motion.div>
  );
};

export default MetricItem;