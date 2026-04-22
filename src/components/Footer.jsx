import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 text-slate-400 text-sm order-2 md:order-1"
          >
            <span className="whitespace-nowrap">© {currentYear} Shibam Dey Roy.</span>
            <span className="flex items-center gap-1.5">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />
              and lots of coffee
            </span>
          </motion.div>

          {/* Back to top Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={scrollToTop}
            className="flex items-center justify-center gap-2 text-slate-400 hover:text-white transition-colors text-sm hoverable group order-1 md:order-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
