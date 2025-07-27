import { useEffect, useState } from 'react';
import { ChevronDown, Terminal, Code, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import backgroundImage from '@/assets/background.jpg';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec effet parallaxe */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            filter: 'brightness(0.3) blur(1px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-cyber opacity-20 animate-gradient" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Icônes flottantes */}
        <div className="absolute -top-20 -left-20 opacity-20">
          <Terminal className="h-32 w-32 text-primary animate-float" />
        </div>
        <div className="absolute -top-10 -right-10 opacity-20">
          <Code className="h-24 w-24 text-secondary animate-float" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute -bottom-16 left-10 opacity-20">
          <Shield className="h-28 w-28 text-accent animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Titre principal */}
        <h1 className="font-cyber text-5xl md:text-7xl font-black mb-6 animate-fade-in">
          <span className="text-glow animate-text-glow text-primary">EXPERT</span>
          <br />
          <span className="text-foreground">CYBERSÉCURITÉ</span>
        </h1>

        {/* Sous-titre */}
        <p className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Infrastructure • Sécurité • Open Source
        </p>

        {/* Description */}
        <p className="font-mono text-lg max-w-2xl mx-auto text-foreground/80 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          Passionné par les technologies émergentes, l'architecture système et la cybersécurité. 
          Je conçois et sécurise des infrastructures robustes dans un monde numérique en constante évolution.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button 
            size="lg"
            onClick={() => scrollToNext()}
            className="bg-gradient-primary text-primary-foreground font-cyber font-bold px-8 py-6 text-lg hover:shadow-primary transition-all duration-300 animate-pulse-glow"
          >
            <Terminal className="mr-2 h-5 w-5" />
            Découvrir mon univers
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="cyber-border font-cyber font-bold px-8 py-6 text-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
          >
            Me contacter
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="h-8 w-8 text-primary mx-auto cursor-pointer animate-pulse-glow" 
            onClick={scrollToNext}
          />
        </div>
      </div>

      {/* Grille cyber en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>
    </section>
  );
};

export default Hero;