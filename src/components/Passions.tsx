import { Shield, Code, Network, Server, BookOpen, Users, Cpu, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Passions = () => {
  const passions = [
    {
      icon: Shield,
      title: 'Cybersécurité',
      description: 'Protection des infrastructures critiques, analyse de menaces et réponse aux incidents.',
      gradient: 'bg-gradient-primary',
      color: 'text-primary'
    },
    {
      icon: Network,
      title: 'Architecture Réseau',
      description: 'Conception de réseaux sécurisés, segmentation et micro-segmentation avancée.',
      gradient: 'bg-gradient-secondary',
      color: 'text-secondary'
    },
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'Virtualisation, conteneurisation et orchestration de services haute disponibilité.',
      gradient: 'bg-gradient-accent',
      color: 'text-accent'
    },
    {
      icon: Code,
      title: 'Développement SecOps',
      description: 'Automatisation de la sécurité, scripts d\'analyse et outils de monitoring.',
      gradient: 'bg-gradient-primary',
      color: 'text-primary'
    },
    {
      icon: BookOpen,
      title: 'Open Source',
      description: 'Contribution active aux projets communautaires et développement d\'outils libres.',
      gradient: 'bg-gradient-secondary',
      color: 'text-secondary'
    },
    {
      icon: Cpu,
      title: 'Hardware Hacking',
      description: 'Sécurité matérielle, reverse engineering et analyse de composants électroniques.',
      gradient: 'bg-gradient-accent',
      color: 'text-accent'
    },
    {
      icon: Lock,
      title: 'Cryptographie',
      description: 'Implémentation d\'algorithmes cryptographiques et gestion de PKI enterprise.',
      gradient: 'bg-gradient-primary',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Formation & Veille',
      description: 'Partage de connaissances, formation d\'équipes et veille technologique continue.',
      gradient: 'bg-gradient-secondary',
      color: 'text-secondary'
    }
  ];

  return (
    <section id="passions" className="py-20 px-4 min-h-screen flex items-center cyber-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl md:text-5xl font-black mb-6">
            <span className="text-secondary text-glow animate-text-glow">MES</span>
            <span className="text-foreground"> PASSIONS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8 animate-pulse-glow" />
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Les domaines qui me passionnent et dans lesquels j'excelle au quotidien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {passions.map((passion, index) => {
            const Icon = passion.icon;
            return (
              <Card 
                key={index}
                className="group cyber-border hover:cyber-glow bg-card/50 backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center space-y-4">
                  {/* Icône avec effet de glow */}
                  <div className="relative">
                    <div className={`${passion.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse-glow transition-all duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    {/* Effet de halo */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-full mx-auto opacity-0 group-hover:opacity-50 ${passion.gradient} blur-xl transition-all duration-500`} />
                  </div>

                  {/* Titre */}
                  <h3 className={`font-cyber text-lg font-bold ${passion.color} text-glow group-hover:animate-text-glow transition-all duration-300`}>
                    {passion.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-all duration-300">
                    {passion.description}
                  </p>

                  {/* Indicateur de niveau */}
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div 
                        key={level}
                        className={`w-2 h-2 rounded-full transition-all duration-300 delay-${level * 100} ${
                          level <= 4 
                            ? `${passion.gradient} group-hover:animate-pulse-glow` 
                            : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Effet de ligne de connexion */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
              </Card>
            );
          })}
        </div>

        {/* Section citations/philosophie */}
        <div className="mt-20 text-center">
          <div className="cyber-bg cyber-border rounded-lg p-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="font-cyber text-2xl font-bold text-accent mb-6 text-glow">
              Ma philosophie technologique
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-primary font-cyber text-xl font-bold">SÉCURITÉ</div>
                <p className="font-mono text-sm text-muted-foreground">
                  "Security by design, pas security by chance"
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-secondary font-cyber text-xl font-bold">INNOVATION</div>
                <p className="font-mono text-sm text-muted-foreground">
                  "Toujours explorer les nouvelles technologies"
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-accent font-cyber text-xl font-bold">PARTAGE</div>
                <p className="font-mono text-sm text-muted-foreground">
                  "Le savoir se multiplie quand on le partage"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions;