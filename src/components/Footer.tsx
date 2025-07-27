import { Terminal, Heart, Code, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'À propos', href: '#about' },
    { label: 'Passions', href: '#passions' },
    { label: 'Homelab', href: '#homelab' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com', icon: Code },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: Shield },
    { label: 'Blog', href: 'https://cyber-expert.dev', icon: Terminal },
  ];

  return (
    <footer className="bg-background/95 backdrop-blur-md border-t cyber-border py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Terminal className="h-8 w-8 text-primary animate-pulse-glow" />
              <span className="font-cyber text-2xl font-black text-glow animate-text-glow">
                CYBER.DEV
              </span>
            </div>
            <p className="font-mono text-muted-foreground leading-relaxed mb-6 max-w-md">
              Expert en cybersécurité passionné par l'innovation technologique, 
              l'architecture d'infrastructure et la protection des systèmes critiques.
            </p>
            <div className="flex items-center space-x-2 text-sm font-mono">
              <span className="text-muted-foreground">Fait avec</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="text-muted-foreground">et beaucoup de</span>
              <Terminal className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="font-cyber text-lg font-bold text-secondary mb-4 text-glow">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-mono text-muted-foreground hover:text-primary transition-all duration-300 hover:text-glow block"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="font-cyber text-lg font-bold text-accent mb-4 text-glow">
              Réseaux
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 font-mono text-muted-foreground hover:text-accent transition-all duration-300 hover:text-glow group"
                    >
                      <Icon className="h-4 w-4 group-hover:animate-pulse-glow" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t cyber-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="font-mono text-sm text-muted-foreground">
              © {currentYear} CYBER.DEV - Tous droits réservés
            </div>

            {/* Status */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground">
                  Homelab Online
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground">
                  Disponible pour projets
                </span>
              </div>
            </div>

            {/* Version */}
            <div className="font-mono text-xs text-muted-foreground cyber-border px-3 py-1 rounded">
              v2024.1.0
            </div>
          </div>
        </div>

        {/* Easter egg pour les développeurs */}
        <div className="mt-8 text-center">
          <details className="inline-block">
            <summary className="font-mono text-xs text-muted-foreground cursor-pointer hover:text-primary transition-colors">
              🔐 Développeurs curieux ?
            </summary>
            <div className="mt-4 p-4 cyber-bg cyber-border rounded-lg inline-block">
              <code className="font-mono text-xs text-accent block">
                console.log("Salut fellow hacker! 👨‍💻");
                <br />
                <span className="text-secondary">// Ce site utilise React + TypeScript</span>
                <br />
                <span className="text-primary">// Stack: Vite + Tailwind + Lucide</span>
                <br />
                <span className="text-muted-foreground">// Intéressé par le code ? Contactez-moi !</span>
              </code>
            </div>
          </details>
        </div>
      </div>
    </footer>
  );
};

export default Footer;