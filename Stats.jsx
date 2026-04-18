import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const Stats = () => {
  const stats = [
    { number: '500+', label: 'Clientes Satisfechos' },
    { number: '99.9%', label: 'Uptime Garantizado' },
    { number: '<2min', label: 'Tiempo Promedio' }
  ];

  return (
    <motion.div 
      className="stats"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        offscreen: { opacity: 0 },
        onscreen: { opacity: 1 }
      }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          className="stat-item"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
