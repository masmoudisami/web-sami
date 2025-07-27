import { User, Award, Target, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, label: 'Années d\'expérience', value: '8+' },
    { icon: Target, label: 'Projets réalisés', value: '50+' },
    { icon: Zap, label: 'Systèmes sécurisés', value: '100+' },
    { icon: User, label: 'Certifications', value: '12' },
  ];

  return (
    <section id="about" className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl md:text-5xl font-black mb-6">
            <span className="text-primary text-glow animate-text-glow">À PROPOS</span>
            <span className="text-foreground"> DE MOI</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 animate-pulse-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <div className="space-y-6">
            <div className="cyber-bg p-8 rounded-lg cyber-border animate-fade-in">
              <h3 className="font-cyber text-2xl font-bold text-secondary mb-4 text-glow">
                Expert en Cybersécurité & Infrastructure
              </h3>
              <p className="font-mono text-foreground/90 leading-relaxed mb-6">
                Passionné par l'univers de la cybersécurité depuis plus de 8 ans, je me spécialise 
                dans la conception d'architectures sécurisées et la protection des infrastructures critiques.
              </p>
              <p className="font-mono text-foreground/90 leading-relaxed mb-6">
                Mon expertise couvre l'ensemble du spectre de la sécurité informatique : de l'analyse 
                de vulnérabilités à la mise en place de SOC, en passant par l'architecture de réseaux 
                sécurisés et la réponse aux incidents.
              </p>
              <p className="font-mono text-foreground/90 leading-relaxed">
                Fervent défenseur de l'open source, je contribue activement à la communauté et 
                maintiens un homelab avancé pour tester les dernières technologies et solutions de sécurité.
              </p>
            </div>

            {/* Compétences principales */}
            <div className="grid grid-cols-2 gap-4">
              <div className="cyber-bg p-4 rounded cyber-border text-center">
                <div className="text-primary text-2xl font-cyber font-bold">SECOPS</div>
                <div className="text-sm font-mono text-muted-foreground">Security Operations</div>
              </div>
              <div className="cyber-bg p-4 rounded cyber-border text-center">
                <div className="text-secondary text-2xl font-cyber font-bold">DEVOPS</div>
                <div className="text-sm font-mono text-muted-foreground">Infrastructure as Code</div>
              </div>
              <div className="cyber-bg p-4 rounded cyber-border text-center">
                <div className="text-accent text-2xl font-cyber font-bold">PENTEST</div>
                <div className="text-sm font-mono text-muted-foreground">Ethical Hacking</div>
              </div>
              <div className="cyber-bg p-4 rounded cyber-border text-center">
                <div className="text-primary text-2xl font-cyber font-bold">FORENSICS</div>
                <div className="text-sm font-mono text-muted-foreground">Digital Investigation</div>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card 
                    key={index} 
                    className="cyber-bg cyber-border p-6 text-center group hover:shadow-primary transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:animate-pulse-glow transition-all duration-300" />
                    <div className="font-cyber text-3xl font-black text-primary text-glow">
                      {stat.value}
                    </div>
                    <div className="font-mono text-sm text-muted-foreground mt-2">
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Quote inspirante */}
            <div className="cyber-bg p-6 rounded-lg cyber-border relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-6xl text-primary/20 font-cyber absolute top-2 left-4">"</div>
              <p className="font-mono text-foreground/90 italic pl-8 pr-4">
                La sécurité n'est pas un produit, mais un processus continu d'amélioration et d'adaptation.
              </p>
              <div className="text-right mt-4">
                <span className="text-primary font-cyber font-bold">— Ma philosophie</span>
              </div>
            </div>

            {/* Technologies favorites */}
            <div className="cyber-bg p-6 rounded-lg cyber-border animate-fade-in" style={{ animationDelay: '1s' }}>
              <h4 className="font-cyber text-lg font-bold text-secondary mb-4 text-glow">
                Stack Technologique
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'Docker', 'Kubernetes', 'Ansible', 'Python', 'Go', 'Rust', 'Terraform'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gradient-primary text-primary-foreground rounded-full text-xs font-mono font-bold hover:shadow-primary transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;