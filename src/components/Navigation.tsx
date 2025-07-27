import { useState, useEffect } from 'react';
import { Menu, X, Terminal, User, Heart, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'À propos', icon: User },
    { id: 'passions', label: 'Passions', icon: Heart },
    { id: 'homelab', label: 'Homelab', icon: Server },
    { id: 'contact', label: 'Contact', icon: Terminal },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md cyber-border border-b' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-primary animate-pulse-glow" />
            <span className="font-cyber text-xl font-bold text-glow animate-text-glow">
              CYBER.DEV
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-all duration-300 hover:text-glow"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-mono">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md cyber-border border-t animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full text-left text-foreground hover:text-primary transition-all duration-300 p-2 rounded cyber-bg"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-mono">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;