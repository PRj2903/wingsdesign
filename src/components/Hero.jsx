import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Cinematic Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const textVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.4, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const imageMaskVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
    visible: { 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 2, ease: [0.25, 1, 0.5, 1], delay: 0.2 } 
    }
  };

  const imageScaleVariants = {
    hidden: { scale: 1.15 },
    visible: {
      scale: 1,
      transition: { duration: 3, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 0.6 } 
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[850px] bg-[#FAF9F6] overflow-hidden flex items-center pt-24 pb-12 lg:py-0">
      {/* Subtle Depth Background Light */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F3F0E6]/60 to-transparent pointer-events-none" />
      
      {/* Grid Container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 h-full items-center">
        
        {/* Left Editorial Content (5 Columns) */}
        <motion.div 
          className="col-span-1 lg:col-span-5 flex flex-col justify-center h-full pt-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Tagline */}
          <motion.div className="flex items-center gap-4 mb-8" variants={textVariants}>
            <motion.div 
              className="w-12 h-[1px] bg-[#C5A059] origin-left" 
              variants={lineVariants}
            />
            <span className="text-[11px] tracking-[0.35em] uppercase text-[#C5A059] font-medium" style={{ fontFamily: 'var(--font-sans)' }}>Est. 2020</span>
          </motion.div>

          {/* Staggered Heading */}
          <div className="space-y-1 mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
            <div className="overflow-hidden pb-2">
              <motion.h1 
                variants={textVariants}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#1A1A1A] tracking-tight leading-[1.05]"
              >
                Curators of
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-2">
              <motion.h1 
                variants={textVariants}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#1A1A1A] tracking-tight leading-[1.05]"
              >
                <span className="italic text-[#C5A059] font-light pr-3">Atmosphere</span>&
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-2">
              <motion.h1 
                variants={textVariants}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#1A1A1A] tracking-tight leading-[1.05]"
              >
                Modern Living
              </motion.h1>
            </div>
          </div>

          {/* Elegant Description */}
          <motion.div variants={textVariants} className="mb-14 relative pl-6 border-l border-[#C5A059]/30">
            <p className="text-[#5C5C5C] text-lg font-light leading-relaxed max-w-[420px]" style={{ fontFamily: 'var(--font-sans)' }}>
              Wings Design Studio crafts high-end residential and commercial interiors that balance fluent utility with unparalleled bespoke elegance.
            </p>
          </motion.div>

          {/* Premium Call-to-Actions */}
          <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5" style={{ fontFamily: 'var(--font-sans)' }}>
            <button className="group relative px-10 py-[18px] bg-[#1A1A1A] overflow-hidden rounded-[2px] transition-all shadow-xl shadow-[#1A1A1A]/10 hover:shadow-[#C5A059]/20" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              <div className="absolute inset-0 w-full h-full bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1]" />
              <span className="relative z-10 text-[11px] tracking-[0.25em] uppercase text-white font-medium transition-colors duration-500">
                Explore Portfolio
              </span>
            </button>
            <button className="group relative px-8 py-[18px] bg-transparent border border-[#E5E0D8] rounded-[2px] transition-colors duration-300 hover:border-[#C5A059] text-center" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="relative z-10 text-[11px] tracking-[0.25em] uppercase text-[#1A1A1A] font-medium transition-colors duration-300 group-hover:text-[#C5A059]">
                Our Expertise
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Layout: Asymmetrical Layered Image (7 Columns) */}
        <div className="col-span-1 lg:col-span-7 relative h-[60vh] lg:h-[82vh] w-full flex items-center lg:items-end justify-end mt-12 lg:mt-0">
          
          {/* Main Hero Visual block */}
          <motion.div 
            className="relative w-full lg:w-[90%] h-full lg:h-[92%] overflow-hidden rounded-[2px] bg-[#EAE8E3] shadow-2xl shadow-black/5"
            variants={imageMaskVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.img 
              variants={imageScaleVariants}
              src="/hero.png" 
              alt="Premium Interior Architecture"
              className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-[1500ms]"
            />
            {/* Soft inner Vignette / Frame overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-[#1A1A1A]/5 pointer-events-none" />
            <div className="absolute inset-4 border border-white/20 pointer-events-none hidden md:block" />
          </motion.div>

          {/* Overlapping Small Accent Detail Image (Brings depth & scale) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 1.2 }}
            className="absolute bottom-[-5%] lg:bottom-16 left-0 lg:left-4 w-[55%] lg:w-[42%] bg-white p-3 lg:p-4 shadow-2xl shadow-[#1A1A1A]/10 rounded-[2px] z-20"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F5F5F5]">
              <img 
                src="/project2/7.jpeg" 
                alt="Material Details"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="pt-5 pb-2 px-2 flex justify-between items-end">
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#C5A059] mb-1.5" style={{ fontFamily: 'var(--font-sans)' }}>Material Integrity</p>
                <p className="italic text-[15px] leading-none text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)' }}>Curated Textures</p>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#A0A0A0] tabular-nums" style={{ fontFamily: 'var(--font-sans)' }}>01</div>
            </div>
          </motion.div>

          {/* Vertical Decor Line & Subtle Brand Stamp */}
          <motion.div 
            className="absolute right-0 top-[15%] hidden xl:flex flex-col items-center gap-8 translate-x-12"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <div className="w-[1px] h-24 bg-gradient-to-b from-[#C5A059]/60 to-transparent" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#8A8A8A]" style={{ writingMode: 'vertical-rl', fontFamily: 'var(--font-sans)' }}>
              Wings Design Studio
            </span>
          </motion.div>

        </div>
      </div>

      {/* Global Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden lg:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.2 }}
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#C5A059] opacity-70" style={{ fontFamily: 'var(--font-sans)' }}>Scroll</span>
        <motion.div 
          className="w-[1px] bg-gradient-to-b from-[#C5A059] to-transparent origin-top"
          animate={{ height: ["0px", "50px", "50px"], y: [0, 0, 50], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
