import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { CHARACTERS } from '../constants';

interface ProcessProps {
  onBack: () => void;
}

export default function Process({ onBack }: ProcessProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-brown font-bold mb-8 hover:text-brand-orange transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Collection
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-display font-black text-brand-brown text-center mb-12 uppercase tracking-tight">
            Process
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-brand-orange mb-4 border-b-2 border-brand-yellow pb-2 inline-block">
                Concept
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                โปรเจกต์ Six Flavors Spirits มีเป้าหมายเพื่อนำเสนอตัวตนของรสชาติต่างๆ ที่เราสัมผัสในชีวิตประจำวัน 
                โดยตัวละครแต่ละตัวถูกออกแบบด้วยพาเลทสีและบุคลิกที่สะท้อนถึงเอกลักษณ์ของรสชาตินั้นๆ อย่างชัดเจน
              </p>

              <h3 className="text-xl font-bold text-brand-orange mb-4 border-b-2 border-brand-yellow pb-2 inline-block">
                Sketch
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['ตูน.png', 'ตูน2.png', 'ตูน3.png', 'ตูน4.png'].map((img, i) => (
                  <div key={i} className="aspect-square bg-gray-50 rounded-xl overflow-hidden border-2 border-brand-yellow/20 shadow-sm p-2 flex items-center justify-center">
                    <img 
                      src={`/sketch/${img}`} 
                      alt={`Sketch ${i + 1}`} 
                      className="max-w-full max-h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-yellow/10 rounded-3xl p-6 border-2 border-brand-yellow/20">
              <h3 className="text-xl font-bold text-brand-brown mb-6">Character Lineup</h3>
              <div className="grid grid-cols-3 gap-4">
                {CHARACTERS.map((char) => (
                  <div key={char.id} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center p-2 mb-2 overflow-hidden">
                      <img 
                        src={char.image} 
                        alt={char.name} 
                        className={`w-full h-full object-contain ${
                          char.id === 'Kappi' ? 'scale-150' : 'scale-110'
                        }`} 
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase text-gray-500">{char.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
