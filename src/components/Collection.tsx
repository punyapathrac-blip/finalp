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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {CHARACTERS.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onSelectCharacter(char)}
              className="cursor-pointer group"
            >
              <div 
                className="aspect-square rounded-[2.5rem] flex items-center justify-center p-6 transition-all shadow-md group-hover:shadow-xl border-8"
                style={{ 
                  backgroundColor: char.color + '11',
                  borderColor: char.color
                }}
              >
                <img 
                  src={char.image} 
                  alt={char.name}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-contain drop-shadow-2xl transition-transform ${
                    char.id === 'Kappi' ? 'scale-150' : 'scale-110'
                  }`}
                />
              </div>
              <h3 className="mt-4 font-display font-bold text-xl text-brand-brown">
                {char.name}
              </h3>
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
