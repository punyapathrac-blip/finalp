import { motion } from 'motion/react';
import { Character, Page } from '../types';
import { CHARACTERS } from '../constants';

interface CollectionProps {
  onSelectCharacter: (char: Character) => void;
  onGoToProcess: () => void;
}

export default function Collection({ onSelectCharacter, onGoToProcess }: CollectionProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-display font-black text-brand-brown uppercase tracking-tight mb-8">
          COLLECTION
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {CHARACTERS.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onSelectCharacter(char)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div 
                className="w-full aspect-[4/5] rounded-[2.5rem] flex items-center justify-center p-8 transition-all shadow-lg group-hover:shadow-2xl relative overflow-hidden border-8"
                style={{ 
                  backgroundColor: char.color + '10',
                  borderColor: char.color
                }}
              >
                {/* Decorative background element */}
                <div 
                  className="absolute inset-0 opacity-10 group-hover:scale-125 transition-transform duration-700"
                  style={{ 
                    background: `radial-gradient(circle at center, ${char.color}, transparent 80%)` 
                  }}
                />
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 opacity-50" style={{ borderColor: char.color }} />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 opacity-50" style={{ borderColor: char.color }} />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 opacity-50" style={{ borderColor: char.color }} />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 opacity-50" style={{ borderColor: char.color }} />
                
                <img 
                  src={char.image} 
                  alt={char.name}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-contain drop-shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300 ${char.id === 'Kappi' ? 'scale-150' : ''}`}
                />
              </div>
              <div className="mt-6 text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1 block" style={{ color: char.color }}>
                  {char.flavor} Spirit
                </span>
                <h3 className="font-display font-black text-2xl text-brand-brown uppercase tracking-tight">
                  {char.name}
                </h3>
                <div 
                  className="h-1.5 w-8 mx-auto mt-2 rounded-full transition-all group-hover:w-16"
                  style={{ backgroundColor: char.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onGoToProcess}
            className="bg-brand-teal text-white px-10 py-3 rounded-full font-bold shadow-md hover:bg-brand-brown transition-colors"
          >
            Process
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
