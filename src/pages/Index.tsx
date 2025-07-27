import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Passions from '@/components/Passions';
import Homelab from '@/components/Homelab';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Ajout de la classe dark par défaut pour le thème cyber
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Passions />
      <Homelab />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
