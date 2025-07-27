import { Mail, Github, Linkedin, Terminal, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Pro',
      value: 'contact@cyber-expert.dev',
      link: 'mailto:contact@cyber-expert.dev',
      color: 'text-primary',
      gradient: 'bg-gradient-primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@cyber-expert',
      link: 'https://github.com',
      color: 'text-secondary',
      gradient: 'bg-gradient-secondary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Cyber Expert',
      link: 'https://linkedin.com',
      color: 'text-accent',
      gradient: 'bg-gradient-accent'
    },
    {
      icon: Terminal,
      label: 'Blog Tech',
      value: 'cyber-expert.dev',
      link: 'https://cyber-expert.dev',
      color: 'text-primary',
      gradient: 'bg-gradient-primary'
    }
  ];

  const quickStats = [
    { label: 'Réponse moyenne', value: '< 24h', icon: MessageSquare },
    { label: 'Disponibilité', value: '24/7', icon: Terminal },
    { label: 'Langues', value: 'FR/EN', icon: ExternalLink },
  ];

  return (
    <section id="contact" className="py-20 px-4 min-h-screen flex items-center cyber-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl md:text-5xl font-black mb-6">
            <span className="text-primary text-glow animate-text-glow">CONTACT</span>
            <span className="text-foreground"> & COLLABORATION</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-pulse-glow" />
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à discuter cybersécurité, infrastructure ou collaboration ? Contactez-moi !
          </p>
        </div>

        {/* Section principale de contact */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Méthodes de contact */}
          <div className="space-y-6">
            <h3 className="font-cyber text-2xl font-bold text-secondary mb-6 text-glow">
              Restons connectés
            </h3>
            
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index}
                  className="cyber-bg cyber-border p-6 group hover:shadow-primary transition-all duration-300 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(method.link, '_blank')}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${method.gradient} w-12 h-12 rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-cyber text-sm font-bold text-muted-foreground">
                        {method.label}
                      </div>
                      <div className={`font-mono text-lg font-bold ${method.color} group-hover:text-glow transition-all duration-300`}>
                        {method.value}
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-300" />
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-6">
            <h3 className="font-cyber text-2xl font-bold text-accent mb-6 text-glow">
              Informations pratiques
            </h3>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index}
                    className="cyber-bg cyber-border p-4 text-center group animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="h-6 w-6 text-accent mx-auto mb-2 group-hover:animate-pulse-glow" />
                    <div className="font-cyber text-lg font-bold text-accent text-glow">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Services proposés */}
            <Card className="cyber-bg cyber-border p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h4 className="font-cyber text-lg font-bold text-secondary mb-4 text-glow">
                Services & Collaborations
              </h4>
              <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Audit de sécurité & Pentest</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                  <span>Architecture d'infrastructure sécurisée</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                  <span>Formation & coaching en cybersécurité</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                  <span>Développement d'outils sécurisés</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
                  <span>Consulting en DevSecOps</span>
                </li>
              </ul>
            </Card>

            {/* Disponibilité */}
            <Card className="cyber-bg cyber-border p-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h4 className="font-cyber text-lg font-bold text-accent mb-4 text-glow">
                Disponibilité & Fuseaux
              </h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Timezone principale</span>
                  <span className="text-primary font-bold">UTC+1 (CET)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Heures préférées</span>
                  <span className="text-secondary font-bold">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Urgences</span>
                  <span className="text-accent font-bold">24/7 disponible</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center">
          <Card className="cyber-bg cyber-border p-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="font-cyber text-2xl font-bold text-primary mb-4 text-glow">
              Prêt à sécuriser votre infrastructure ?
            </h3>
            <p className="font-mono text-muted-foreground mb-8 max-w-2xl mx-auto">
              Que ce soit pour un audit de sécurité, une architecture robuste ou un projet innovant, 
              je serais ravi de collaborer avec vous. Discutons de vos besoins !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('mailto:contact@cyber-expert.dev', '_blank')}
                className="bg-gradient-primary text-primary-foreground font-cyber font-bold px-8 py-6 text-lg hover:shadow-primary transition-all duration-300 animate-pulse-glow"
              >
                <Mail className="mr-2 h-5 w-5" />
                Envoyer un email
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="cyber-border font-cyber font-bold px-8 py-6 text-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Se connecter
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;