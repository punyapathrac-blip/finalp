import { motion } from 'motion/react';
import { Mail, Phone, Globe, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-12 shadow-xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-brand-brown mb-12 uppercase tracking-tight">
            CONTACT
          </h2>

          <div className="space-y-8 max-w-md mx-auto">
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 hover:bg-brand-yellow/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase">Email</p>
                <p className="font-bold text-brand-brown">phopza2547@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 hover:bg-brand-yellow/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white">
                <Phone size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase">Phone</p>
                <p className="font-bold text-brand-brown">+66943334168</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-2xl bg-gray-50 hover:bg-brand-yellow/10 transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center text-white">
                <Globe size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase">Website</p>
                <p className="font-bold text-brand-brown">www.sixflavors.com</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-8">
            <a 
              href="https://www.facebook.com/punyapath.rachawong/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-brown hover:text-brand-orange transition-colors"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="https://www.instagram.com/punyapath_p/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-brown hover:text-brand-orange transition-colors"
            >
              <Instagram size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
