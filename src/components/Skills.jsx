import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import {
  ExternalLink,
  X,
  ZoomIn,
} from 'lucide-react';
import GlobalParallax from './GlobalParallax';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Tech stack with CDN logos
const techStack = [
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    darkInvert: false,
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    darkInvert: true,
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    darkInvert: false,
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    darkInvert: false,
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    darkInvert: false,
  },
  {
    name: 'Express',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    darkInvert: true,
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    darkInvert: false,
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    darkInvert: false,
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    darkInvert: false,
  },
  {
    name: 'Java',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    darkInvert: false,
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    darkInvert: false,
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    darkInvert: false,
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    darkInvert: false,
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    darkInvert: false,
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    darkInvert: false,
  },
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    darkInvert: false,
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    darkInvert: false,
  },
  {
    name: 'Flask',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    darkInvert: true,
  },
];

const achievements = [
  {
    title: 'Elite Hack 1.0 Finalist',
    subtitle: 'Top 100 / 7000+ Participants',
    description: 'Recognized for innovation and technical excellence among thousands of competitive developers.',
    image: '/achievements/elitehack.png',
    link: 'https://unstop.com/certificate-preview/9904e447-3326-4188-abbc-405cf05acd38',
    linkText: 'View Certificate',
  },
  {
    title: 'SIH Internals Winner',
    subtitle: '1st Position',
    description: 'Led the team to victory in the Smart India Hackathon internal rounds with a community-focused solution.',
    image: '/achievements/sih.png',
    link: 'https://github.com/mrdeyroy/cropifyai',
    linkText: 'Project Link',
  },
  {
    title: 'AWS Trained Professional',
    subtitle: 'Techno Main Salt Lake',
    description: 'Successfully completed intensive training on cloud architecture and decentralized systems.',
    image: '/achievements/aws.png',
    link: 'https://www.credly.com/badges/8d5d3c8f-8ea9-43b0-bf51-55f8d455c70d/print',
    linkText: 'View Certificate',
  },
  {
    title: 'Frontend Certified',
    subtitle: 'ICUBE Certification',
    description: 'Validated expertise in modern frontend development and responsive design principles.',
    image: '/achievements/frontend.png',
    link: 'https://drive.google.com/file/d/1QfNY4Y90uhbB821yxY-yVJNkJsiooNNJ/view?usp=drive_link',
    linkText: 'Credentials',
  },
];

// ─────────────── 3D GLOBE COMPONENT ───────────────
const TechGlobe = ({ items }) => {
  const globeRef = useRef(null);
  const animationRef = useRef(null);
  const rotationRef = useRef({ x: -15, y: 0 });
  const velocityRef = useRef({ x: 0.15, y: 0.4 });
  const isHoveringRef = useRef(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  // Distribute items on a sphere using Fibonacci spiral
  const positions = useCallback(() => {
    const pts = [];
    const n = items.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      pts.push({ x, y, z });
    }
    return pts;
  }, [items.length]);

  const spherePoints = positions();
  const RADIUS = 180;
  const ICON_SIZE = 48;

  useEffect(() => {
    const animate = () => {
      if (isHoveringRef.current) {
        // When hovering, smoothly steer rotation based on mouse position
        const targetVx = mouseRef.current.y * 0.8;
        const targetVy = mouseRef.current.x * 0.8;
        velocityRef.current.x += (targetVx - velocityRef.current.x) * 0.03;
        velocityRef.current.y += (targetVy - velocityRef.current.y) * 0.03;
      } else {
        // Auto-rotation: gently return to default speed
        velocityRef.current.x += (0.15 - velocityRef.current.x) * 0.02;
        velocityRef.current.y += (0.4 - velocityRef.current.y) * 0.02;
      }

      rotationRef.current.x += velocityRef.current.x;
      rotationRef.current.y += velocityRef.current.y;

      if (globeRef.current) {
        const container = globeRef.current;
        const cosX = Math.cos((rotationRef.current.x * Math.PI) / 180);
        const sinX = Math.sin((rotationRef.current.x * Math.PI) / 180);
        const cosY = Math.cos((rotationRef.current.y * Math.PI) / 180);
        const sinY = Math.sin((rotationRef.current.y * Math.PI) / 180);

        const iconEls = container.querySelectorAll('.globe-icon');

        spherePoints.forEach((pt, i) => {
          if (!iconEls[i]) return;

          // Rotate point
          let x1 = pt.x;
          let y1 = pt.y * cosX - pt.z * sinX;
          let z1 = pt.y * sinX + pt.z * cosX;

          let x2 = x1 * cosY + z1 * sinY;
          let y2 = y1;
          let z2 = -x1 * sinY + z1 * cosY;

          // Project to 2D
          const scale = (z2 + 2) / 3; // depth: 0.33 to 1.0
          const px = x2 * RADIUS;
          const py = y2 * RADIUS;

          const el = iconEls[i];
          const opacity = Math.max(0.15, Math.min(1, (z2 + 1) / 1.5));
          const blur = z2 < -0.3 ? Math.abs(z2 + 0.3) * 2 : 0;

          el.style.transform = `translate(${px}px, ${py}px) scale(${0.5 + scale * 0.6})`;
          el.style.opacity = opacity;
          el.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
          el.style.zIndex = Math.round(z2 * 100) + 100;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [spherePoints]);

  const handleMouseMove = useCallback((e) => {
    if (!globeRef.current) return;
    const rect = globeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseRef.current = {
      x: (e.clientX - centerX) / (rect.width / 2),
      y: (e.clientY - centerY) / (rect.height / 2),
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHoveringRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveringRef.current = false;
    setHoveredIndex(-1);
  }, []);

  return (
    <div className="flex justify-center">
      {/* ── 3D Globe ── */}
      <div className="relative flex-shrink-0">
        {/* Ambient glow behind globe */}
        <div className="absolute inset-0 m-auto w-[300px] h-[300px] bg-gradient-to-br from-primary-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-[60px] animate-pulse" />

        {/* Globe wireframe rings for depth */}
        <div className="absolute inset-0 m-auto w-[360px] h-[360px] rounded-full border border-dashed border-slate-300/20 dark:border-slate-600/20" />
        <div className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full border border-slate-300/10 dark:border-slate-600/10" />
        <div className="absolute inset-0 m-auto w-[240px] h-[240px] rounded-full border border-dashed border-slate-300/10 dark:border-slate-600/10" />

        <div
          ref={globeRef}
          className="relative w-[400px] h-[400px] cursor-grab active:cursor-grabbing"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 800 }}
        >
          {/* Center point */}
          <div className="absolute top-1/2 left-1/2 w-0 h-0">
            {items.map((tech, i) => (
              <div
                key={tech.name}
                className="globe-icon absolute will-change-transform transition-none"
                style={{
                  width: ICON_SIZE,
                  height: ICON_SIZE,
                  marginLeft: -ICON_SIZE / 2,
                  marginTop: -ICON_SIZE / 2,
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <div className={`w-full h-full rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg flex items-center justify-center hover:scale-125 hover:shadow-xl hover:border-primary-500/50 transition-all duration-200 ${hoveredIndex === i ? 'ring-2 ring-primary-500/50' : ''}`}>
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`w-7 h-7 object-contain ${tech.darkInvert ? 'dark:invert' : ''}`}
                    loading="lazy"
                    draggable={false}
                  />
                </div>
                {/* Tooltip */}
                {hoveredIndex === i && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold rounded-md whitespace-nowrap z-50 shadow-lg pointer-events-none">
                    {tech.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────── MAIN SKILLS COMPONENT ───────────────
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxImage, setLightboxImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" ref={ref} className="section-padding bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      <GlobalParallax />
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ───────── TECHNICAL STACK HEADER ───────── */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Technical <span className="text-gradient">Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 italic mb-8"
          >
            "Mastery is a journey, not a destination. Collecting knowledge points..."
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '80px' } : {}}
            className="h-1.5 bg-primary-500 mx-auto rounded-full"
          />
        </div>

        {/* ───────── 3D GLOBE + TECH LIST ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-32"
        >
          <TechGlobe items={techStack} />
        </motion.div>

        {/* ───────── ACHIEVEMENTS SECTION ───────── */}
        <div className="relative">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4"
            >
              Milestones & <span className="text-gradient">Achievements</span>
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="pb-12"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="achievements-swiper !pb-12"
            >
              {achievements.map((achievement) => (
                <SwiperSlide key={achievement.title}>
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="h-full rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-lg shadow-slate-200/50 dark:shadow-none"
                  >
                    {/* Image area – clickable to open lightbox */}
                    <div
                      className="relative h-44 sm:h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 cursor-pointer group/img"
                      onClick={() => setLightboxImage({ src: achievement.image, alt: achievement.title })}
                    >
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('achievement-placeholder');
                        }}
                      />
                      {/* Zoom hint overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/img:opacity-80 transition-opacity duration-300 drop-shadow-lg" />
                      </div>
                      {/* Fallback gradient overlay when no image */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                        <span className="text-6xl font-black text-slate-400 dark:text-slate-600 select-none">
                          {achievement.title.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col text-center">
                      <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1.5">
                        {achievement.title}
                      </h4>
                      <span className="text-primary-500 text-xs font-bold uppercase tracking-widest mb-3">
                        {achievement.subtitle}
                      </span>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                        {achievement.description}
                      </p>

                      <motion.a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 text-primary-500 font-bold text-sm group/link hover:opacity-80 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        {achievement.linkText}
                        <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* ───────── LIGHTBOX MODAL ───────── */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              onClick={() => setLightboxImage(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
