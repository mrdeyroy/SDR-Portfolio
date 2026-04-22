import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Building2,
  MapPin,
} from 'lucide-react';
import GlobalParallax from './GlobalParallax';

const workExperiences = [
  {
    title: 'GSSoC Contributor',
    company: 'GirlScript Summer of Code',
    location: 'Remote',
    period: 'April 2026 – Present',
    description: 'Fixed bugs and improved UI components across various repositories. Enhanced frontend functionality and collaborated via GitHub PR workflow.',
    achievements: [
      'Contributed to multiple high-impact repositories',
      'Improved component reusability and performance',
      'Collaborated with global maintainers',
    ],
    icon: Briefcase,
  },
  {
    title: 'Open Source Contributor',
    company: 'Open Source Connect Program',
    location: 'Remote',
    period: 'July 2025 – August 2025',
    description: 'Fixed bugs and improved UI components across various repositories. Enhanced frontend functionality and collaborated via GitHub PR workflow.',
    achievements: [
      'Contributed to multiple high-impact repositories',
      'Improved component reusability and performance',
      'Collaborated with global maintainers',
    ],
    icon: Briefcase,
  },
  {
    title: 'AWS Training Program',
    company: 'Techno Main Salt Lake',
    location: 'Kolkata, India',
    period: 'July 2025 – Dec 2025',
    description: 'Intensive training on cloud architecture and services. Built and deployed projects using various AWS services.',
    achievements: [
      'Hands-on with EC2, Lambda, S3, RDS, DynamoDB',
      'Built and deployed \'Personify\' app using Flask on EC2',
      'Mastered VPC configuration and IAM management',
    ],
    icon: Award,
  },
];

const educationHistory = [
  {
    title: 'Bachelor of Computer Application',
    institution: 'Techno India Institute of Technology',
    location: 'Kolkata, India',
    period: '2023 - 2027',
    description: 'Currently pursuing BCA with a focus on computer science fundamentals and application development.',
    highlights: [
      'CGPA: 8.2/10',
      'Active member of the tech community',
      'Participated in multiple hackathons',
    ],
    icon: GraduationCap,
  },
  {
    title: 'Higher Secondary (Science)',
    institution: 'Dumdum Kishore Bharati High School',
    location: 'Kolkata, India',
    period: 'Graduated 2023',
    description: 'Completed Schooling with a focus on Science stream.',
    highlights: [
      'Grade: 80%',
      'Active in extracurricular activities',
    ],
    icon: GraduationCap,
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="px-4 sm:px-6 lg:px-8 xl:px-12 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12 relative overflow-hidden">
      <GlobalParallax />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ───────── EXPERIENCE SECTION ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Professional
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            My professional journey and hands-on contributions to real-world projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative mb-24"
        >
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-purple-500 to-pink-500 md:-translate-x-1/2" />

          {workExperiences.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center z-10 md:-translate-x-1/2 ring-4 ring-white dark:ring-slate-900"
              >
                <item.icon className="w-5 h-5 text-white" />
              </motion.div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-[45%] ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 hoverable"
                >
                  <div className={`flex flex-col gap-2 ${
                    index % 2 === 0 ? 'md:items-end' : 'md:items-start'
                  }`}>
                    <div className={`flex items-center gap-2 text-sm text-primary-500 font-medium ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <div className={`flex items-center gap-2 text-slate-600 dark:text-slate-400 ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <Building2 className="w-4 h-4" />
                      {item.company} • {item.location}
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      {item.description}
                    </p>

                    {item.achievements && (
                      <ul className={`mt-4 space-y-1 ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}>
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className={`text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2 ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[45%]" />
            </motion.div>
          ))}
        </motion.div>

        {/* ───────── EDUCATION SECTION ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Academic
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            My academic background and the institutions that shaped my foundation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationHistory.map((edu, index) => (
            <motion.div
              key={`edu-${index}`}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative p-1 rounded-[2rem] bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 hover:from-primary-500/40 hover:via-purple-500/40 hover:to-pink-500/40 transition-all duration-500"
            >
              <div className="h-full p-8 rounded-[1.9rem] bg-white dark:bg-slate-900">
                {/* Header row */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
                    <edu.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {edu.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mt-1 text-sm">
                      <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{edu.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Period & Location */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                {edu.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent group-hover:border-primary-500/30 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Timeline;
