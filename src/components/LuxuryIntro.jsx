import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LuxuryIntro.css";

export default function LuxuryIntro() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // At 3.4 seconds, trigger the curtain reveal to match the main app reveal
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          className="dada-intro" 
          exit={{ opacity: 1, transition: { duration: 1.5 } }} // Parent waits for children
        >
          
          {/* Top Panel */}
          <motion.div 
            className="dada-panel dada-panel-top"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="dada-ambient dada-ambient-top" />
          </motion.div>

          {/* Bottom Panel */}
          <motion.div 
            className="dada-panel dada-panel-bottom"
            initial={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="dada-ambient dada-ambient-bottom" />
          </motion.div>

          {/* Content layer inside the intro */}
          <motion.div 
            className="dada-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            transition={{ duration: 2.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >

            <div className="dada-text-mask">
              <motion.h1 
                className="dada-company-name"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
              >
                Wings Design
              </motion.h1>
            </div>

            <div className="dada-gold-line-wrap">
              <motion.div 
                className="dada-gold-line"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
              />
            </div>

            <div className="dada-text-mask">
              <motion.p 
                className="dada-subtitle"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 1.6, ease: [0.25, 1, 0.5, 1] }}
              >
                Architecture & Interior Design
              </motion.p>
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
