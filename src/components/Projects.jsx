import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  Code2,
  Globe,
  Cpu,
  Brain,
} from 'lucide-react';
import GlobalParallax from './GlobalParallax';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    title: 'Ghoroa Bazar',
    description: 'A full-stack grocery e-commerce web application featuring user authentication, cart system, and real-time updates.',
    image: '/ghoroabazar.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    category: 'Full Stack',
    demoUrl: 'ghoroa-bazar.vercel.app',
    githubUrl: 'https://github.com/mrdeyroy/ghoroa-bazar',
    featured: true,
    icon: Globe,
  },
  {
    id: 2,
    title: 'SevaLink',
    description: 'A community issue reporter with role-based access, complaint submission with image uploads, and real-time tracking.',
    image: '/sevalink.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    category: 'Full Stack',
    demoUrl: 'https://sevalink-frontend.onrender.com',
    githubUrl: 'https://github.com/mrdeyroy/sevalink',
    featured: true,
    icon: Code2,
  },
  {
    id: 3,
    title: 'CropifyAI',
    description: 'AI-powered crop advisory app featuring plant disease detection via image upload and a multilingual AI chatbot.',
    image: 'cropifyai.png',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Firebase'],
    category: 'AI',
    demoUrl: 'cropifyai.vercel.app',
    githubUrl: 'https://github.com/mrdeyroy/cropifyai',
    featured: true,
    icon: Brain,
  },
];

const categories = ['All', 'Full Stack', 'AI'];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-24 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
      <GlobalParallax />
      <div className="max-w-7xl mx-auto">
        { /* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold tracking-wider uppercase text-sm">
            Projects
          </span>
          <h2 className="heading-lg mt-4 text-slate-900 dark:text-white">
            Featured Work
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            A selection of projects I've worked on. Each project represents a unique
            challenge and learning opportunity.
          </p>
        </motion.div>

        { /* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all hoverable ${activeFilter === category
                ? 'bg-gradient-to-r from-primary-500 to-purple-500 text-white'
                : 'glass text-slate-600 dark:text-slate-300 hover:bg-primary-500/10'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        { /* Projects Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="pb-12"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="projects-swiper !pb-12"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide key={project.id} className="h-auto">
                  <motion.div
                    variants={itemVariants}
                    layout
                    className="group relative glass-card overflow-hidden hoverable h-full flex flex-col border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-500/40 dark:hover:border-primary-500/30 transition-colors duration-300"
                  >
                    { /* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      { /* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                      { /* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium text-white bg-primary-500/90 backdrop-blur-sm rounded-full">
                          {project.category}
                        </span>
                      </div>

                      { /* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <project.icon className="w-5 h-5 text-yellow-400" />
                          </motion.div>
                        </div>
                      )}

                      { /* Links */}
                      <div
                        className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-white text-slate-900 text-xs font-medium rounded-full hover:bg-primary-50 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-full hover:bg-slate-700 transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      </div>
                    </div>

                    { /* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      { /* Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>


                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
