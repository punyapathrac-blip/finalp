import { motion } from 'motion/react';
import { Character } from '../types';
import { ArrowLeft } from 'lucide-react';

interface CharacterDetailProps {
  character: Character;
  onBack: () => void;
}

export default function CharacterDetail({ character, onBack }: CharacterDetailProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-brown font-bold mb-8 hover:text-brand-orange transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Collection
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
        >
          <div 
            className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
            style={{ backgroundColor: character.color }}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.img 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={character.image} 
                alt={character.name}
                referrerPolicy="no-referrer"
                className={`max-w-full max-h-[400px] object-contain drop-shadow-2xl ${
                  character.id === 'Kappi' ? 'scale-150' : 'scale-110'
                }`}
              />
            </div>
            <div className="w-full md:w-1/2 text-white">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-5xl md:text-7xl font-display font-black mb-2">
                  {character.name}
                </h2>
                <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                  {character.flavor} Spirit
                </div>
              </motion.div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-white">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-12 bg-brand-orange rounded-full" />
                <h3 className="text-2xl font-display font-bold text-brand-brown uppercase tracking-wider">
                  LORE
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 font-medium">
                {character.lore}
              </p>
              
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange w-3/4" />
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-green w-1/2" />
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-teal w-2/3" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
