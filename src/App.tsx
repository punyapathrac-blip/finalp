import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Page, Character } from './types';
import Header from './components/Header';
import Home from './components/Home';
import Collection from './components/Collection';
import CharacterDetail from './components/CharacterDetail';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedCharacter(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    if (selectedCharacter) {
      return (
        <motion.div
          key="detail"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <CharacterDetail 
            character={selectedCharacter} 
            onBack={() => setSelectedCharacter(null)} 
          />
        </motion.div>
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Home onStart={() => handleNavigate('collection')} />
          </motion.div>
        );
      case 'collection':
        return (
          <motion.div
            key="collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Collection 
              onSelectCharacter={handleSelectCharacter} 
              onGoToProcess={() => setCurrentPage('process')}
            />
          </motion.div>
        );
      case 'process':
        return (
          <motion.div
            key="process"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Process onBack={() => setCurrentPage('collection')} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <About />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Contact />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-brand-brown/50 text-sm font-medium">
        <p>© 2026 Six Flavors Spirits. All rights reserved.</p>
      </footer>
    </div>
  );
}

