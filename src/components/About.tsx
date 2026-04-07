import { motion } from 'motion/react';
import { CHARACTERS } from '../constants';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] p-12 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-4 bg-brand-orange" />
          
          <h2 className="text-3xl md:text-5xl font-display font-black text-brand-brown mb-12 uppercase tracking-tight">
            ABOUT SIX FLAVORS
          </h2>

          <div className="space-y-8 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            <p>
              ในโลกของรสชาติที่แสนวิเศษ มีเหล่าวิญญาณตัวน้อยที่คอยดูแลและปรุงแต่งทุกรสสัมผัสให้มีความหมาย 
              Six Flavors Spirits คือเรื่องราวของเหล่าผู้พิทักษ์รสชาติทั้ง 6 ที่จะพาคุณไปสัมผัสกับความลึกซึ้งของอาหาร
            </p>
            <p>
              โปรเจกต์นี้สร้างสรรค์ขึ้นเพื่อถ่ายทอดอารมณ์และความรู้สึกผ่านงานออกแบบตัวละครที่สดใส 
              โดยใช้ศาสตร์ของสีและรูปทรงในการสื่อสารเอกลักษณ์ของแต่ละรสชาติออกมาอย่างชัดเจน
            </p>
          </div>

          <div className="mt-16 flex justify-center flex-wrap gap-4 md:gap-6">
            {CHARACTERS.map((char) => (
              <motion.div
                key={char.id}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full shadow-md border-4 border-white"
                style={{ backgroundColor: char.color }}
                title={char.name}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
