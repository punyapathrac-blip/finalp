import { motion } from 'motion/react';

interface HomeProps {
  onStart: () => void;
}

export default function Home({ onStart }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 overflow-hidden relative bg-[#FFF9E6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <div className="mb-4">
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img 
              src="/image/4b05ea2d-2672-4def-a800-e3c2585a3473__1_-removebg-preview.png" 
              alt="Six Flavors Spirits Logo" 
              className="w-64 h-64 md:w-80 md:h-80 object-contain mx-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-black text-brand-orange mb-8 tracking-tight">
          Six Flavors Spirits
        </h2>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-[#F5A623] text-brand-brown px-16 py-3 rounded-2xl font-black text-2xl shadow-[0_8px_0_rgb(0,0,0,0.1)] hover:shadow-none hover:translate-y-1 transition-all"
        >
          ดูสินค้า
        </motion.button>
      </motion.div>

      {/* Floating Bubbles */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-[40%] right-[10%] w-20 h-20 bg-[#FFD25A] rounded-full opacity-40 blur-sm"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-[60%] right-[2%] w-28 h-28 bg-[#FFD25A] rounded-full opacity-30 blur-md"
      />
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[30%] w-12 h-12 bg-[#FFD25A] rounded-full opacity-40"
      />
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-[35%] right-[30%] w-10 h-10 bg-[#FFD25A] rounded-full opacity-20"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-14 h-14 bg-[#FFD25A] rounded-full opacity-30"
      />

      {/* Large Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path 
            fill="#FFD25A" 
            fillOpacity="1" 
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
