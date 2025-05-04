import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 text-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed z-50 bottom-8 right-8 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Layout;