import React from 'react';
import SleeperUserSearch from '../SleeperUserSearch/SleeperUserSearch';
//import Footer from "../Footer/Footer";
import { motion } from 'motion/react'; // Import updated for new Motion version

const LandingPage: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen items-center justify-center px-4"
      initial="hidden"
      animate="visible"
    >
      {/* Main Heading: Fades up and in first */}
      <motion.h1
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.0, ease: 'easeOut' }}
      >
        Welcome to DreamView
      </motion.h1>

      {/* Subheading & Search: Appear after the main heading lands */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.0, ease: 'easeOut' }} // Delayed start
      >
        <h2 className="text-lg text-gray-600">Powered by Sleeper API</h2>
        <div className="mt-6">
          <SleeperUserSearch />
        </div>
      </motion.div>

      {/* Footer (No animation needed, but could be added) */}
    </motion.div>
  );
};

export default LandingPage;
