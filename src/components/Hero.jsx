import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Code2 } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const roles = [
  'Full Stack Developer',
  'Always Learning & Improving',
  'Problem Solver',
  'Open Source Contributor',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(role.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      <ParticleBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        {/* Profile Picture */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="relative cursor-pointer"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary-500 to-purple-500 shadow-xl shadow-primary-500/20">
              <div className="w-full h-full rounded-full border-4 border-white dark:border-slate-900 overflow-hidden bg-slate-200">
                <img
                  src='/hero-avatar.png'
                  alt="Shibam Dey Roy - Cartoon Avatar"
                  className="w-full h-full object-cover scale-[1.15] translate-y-[6%]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="heading-xl mb-6"
        >
          <span className="text-slate-900 dark:text-white">Hi, I'm</span><br />
          <span className="text-gradient">Shibam Dey Roy</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="h-12 sm:h-16 mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-slate-600 dark:text-slate-300">
            {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block w-0.5 h-6 sm:h-8 bg-primary-500 ml-1"
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-body max-w-2xl mx-auto mb-10"
        >
          I am a passionate Full Stack Developer focused on building scalable,
          real-world applications. I enjoy solving practical problems using
          modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full"
        >
          <motion.a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/25 transition-all hoverable"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-full hover:border-primary-500 hover:text-primary-500 transition-all hoverable"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 md:gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/mrdeyroy', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/shibamdeyroy/', label: 'LinkedIn' },
            { icon: Twitter, href: 'https://x.com/mr_deyroy_', label: 'Twitter' },
            { icon: Code2, href: 'https://leetcode.com/u/vkvYb82StR/', label: 'LeetCode' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:bg-primary-500/10 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-all hoverable"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 mb-8"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-primary-500 transition-colors hoverable mx-auto"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
