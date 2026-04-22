import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Rocket,
  Heart,
  MapPin,
  Sparkles,
  Terminal,
  Layers,
  Zap,
  GitBranch,
  Brain,
  Gamepad2,
} from 'lucide-react';
import GlobalParallax from './GlobalParallax';

const stats = [
  { value: '3+', label: 'Years of Learning', icon: Sparkles },
  { value: '10+', label: 'Projects Built', icon: Layers },
  { value: '2+', label: 'Open Source Orgs', icon: GitBranch },
  { value: 'Top 100', label: 'Hackathon Finalist', icon: Zap },
];

const highlights = [
  {
    icon: Code2,
    title: 'Scalable Systems',
    description: 'I design and build applications that can handle real-world traffic and data with efficiency that boosts the perfermance 3x.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Rocket,
    title: 'Modern Stack',
    description: 'Expertise in MERN stack and integrating AI capabilities into web applications.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Heart,
    title: 'Community Focused',
    description: 'Active contributor to open-source projects and passionate about solving community issues.',
    gradient: 'from-rose-500 to-orange-500',
  },
];

const currentFocus = [
  { icon: Terminal, label: 'MERN Stack', color: 'text-green-500' },
  { icon: Layers, label: 'Clean UI/UX with React', color: 'text-blue-500' },
  { icon: Code2, label: 'Scalable APIs', color: 'text-purple-500' },
  { icon: Zap, label: 'Backend architecture', color: 'text-yellow-500' },
  { icon: Brain, label: 'AI-powered apps', color: 'text-pink-500' },
  { icon: GitBranch, label: 'System Design', color: 'text-cyan-500' },
  { icon: Gamepad2, label: 'DSA in Java', color: 'text-orange-500' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding relative overflow-hidden"
    >
      <GlobalParallax />

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Let me <span className="text-gradient">introduce myself</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            className="h-1.5 bg-primary-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* ───────── TOP: Profile + Intro Row ───────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-16"
        >
          {/* Profile Card — Left Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 flex flex-col items-center"
          >
            <div className="relative mb-8" style={{ width: 300, height: 300 }}>

              {/* ── Layer 1: Outermost dashed orbit ring ── */}
              <motion.div
                className="absolute inset-[-30px] rounded-full border-2 border-dashed border-primary-500/20 dark:border-primary-400/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />

              {/* ── Layer 2: Animated conic gradient ring ── */}
              <motion.div
                className="absolute inset-[-6px] rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #0ea5e9, #a855f7, #ec4899, #f59e0b, #10b981, #0ea5e9)',
                  padding: 3,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-900" />
              </motion.div>

              {/* ── Layer 3: Glow pulse ring ── */}
              <motion.div
                className="absolute inset-[-12px] rounded-full"
                style={{
                  background: 'conic-gradient(from 180deg, transparent 60%, rgba(14,165,233,0.3) 80%, transparent 100%)',
                }}
                animate={{ rotate: -360, scale: [1, 1.03, 1] }}
                transition={{
                  rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              />

              {/* ── Layer 4: Profile photo ── */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden shadow-2xl shadow-primary-500/20"
              >
                <img
                  src="/pfpp.png"
                  alt="Shibam Dey Roy"
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
                {/* Subtle inner vignette */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.15)]" />
              </div>

              {/* ── Layer 5: Floating particle sparkles ── */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`sparkle-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: ['#0ea5e9', '#a855f7', '#ec4899', '#10b981', '#f59e0b', '#ef4444'][i],
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, (i % 2 === 0 ? 10 : -10), 0],
                    opacity: [0, 0.8, 0],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Profile info below circle */}
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1">
                Shibam Dey Roy
              </h3>
              <p className="text-primary-500 font-semibold text-sm mb-2">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                Kolkata, India
              </div>
            </motion.div>
          </motion.div>

          {/* Story + Focus — Right Column */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
            {/* Intro paragraphs in a glass card */}
            <div className="p-8 rounded-[2rem] bg-white/80 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
                Hello! I'm a passionate Full Stack Developer who specializes in building
                scalable, real-world applications that solve practical problems using modern
                web technologies.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                When I'm not coding, you'll find me on the football field, contributing to
                open-source repositories, or sharpening my logical thinking through
                competitive programming. I believe in building technology that makes a
                tangible difference in people's lives.
              </p>
            </div>

            {/* Current Focus chips */}
            <div>
              <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                Currently Working With
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentFocus.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary-500/40 transition-all duration-300"
                  >
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ───────── STATS BAR ───────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center overflow-hidden hover:border-primary-500/40 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

              <div className="relative z-10">
                <stat.icon className="w-6 h-6 text-primary-500/50 mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ───────── HIGHLIGHTS / WHAT I DO ───────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500"
            >
              {/* Background gradient on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
