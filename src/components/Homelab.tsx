import { Server, HardDrive, Wifi, Shield, Monitor, Database, Cloud, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Homelab = () => {
  const infrastructure = [
    {
      category: 'Serveurs Physiques',
      icon: Server,
      color: 'text-primary',
      gradient: 'bg-gradient-primary',
      items: [
        { name: 'Dell PowerEdge R720', specs: '2x Xeon E5-2670, 128GB RAM, 6TB RAID10', status: 'online' },
        { name: 'HP ProLiant DL380', specs: '2x Xeon E5-2690, 256GB RAM, 12TB ZFS', status: 'online' },
        { name: 'Intel NUC Cluster', specs: '4x i7-8559U, 32GB RAM chacun', status: 'online' }
      ]
    },
    {
      category: 'Stockage & Backup',
      icon: HardDrive,
      color: 'text-secondary',
      gradient: 'bg-gradient-secondary',
      items: [
        { name: 'Synology DS1821+', specs: '8x 4TB WD Red Pro, RAID6', status: 'online' },
        { name: 'TrueNAS Scale', specs: '12x 8TB Enterprise, ZFS', status: 'online' },
        { name: 'Backup Offsite', specs: 'Réplication cloud chiffrée', status: 'syncing' }
      ]
    },
    {
      category: 'Réseau & Sécurité',
      icon: Wifi,
      color: 'text-accent',
      gradient: 'bg-gradient-accent',
      items: [
        { name: 'pfSense Firewall', specs: 'Multi-WAN, VPN, IDS/IPS', status: 'online' },
        { name: 'UniFi Network', specs: 'Switches 48P, WiFi 6E APs', status: 'online' },
        { name: 'Security Onion', specs: 'SIEM, NSM, Threat Hunting', status: 'monitoring' }
      ]
    }
  ];

  const services = [
    { name: 'Kubernetes Cluster', description: 'Orchestration conteneurs', icon: Cloud, status: 'Actif' },
    { name: 'Monitoring Stack', description: 'Prometheus + Grafana', icon: Monitor, status: 'Actif' },
    { name: 'GitLab CE', description: 'DevOps & CI/CD', icon: Database, status: 'Actif' },
    { name: 'Security Lab', description: 'Environnement de test', icon: Shield, status: 'Sandbox' },
    { name: 'Media Center', description: 'Plex + Jellyfin', icon: Monitor, status: 'Actif' },
    { name: 'VPN Gateway', description: 'Accès sécurisé externe', icon: Shield, status: 'Actif' },
    { name: 'DNS over HTTPS', description: 'Pi-hole + Unbound', icon: Wifi, status: 'Actif' },
    { name: 'Backup Solution', description: 'Restic + Duplicati', icon: HardDrive, status: 'Automatique' }
  ];

  const metrics = [
    { label: 'Uptime Moyen', value: '99.8%', icon: Zap },
    { label: 'Services Hébergés', value: '42', icon: Server },
    { label: 'Données Stockées', value: '156TB', icon: HardDrive },
    { label: 'Consommation', value: '850W', icon: Zap }
  ];

  return (
    <section id="homelab" className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-4xl md:text-5xl font-black mb-6">
            <span className="text-accent text-glow animate-text-glow">MON</span>
            <span className="text-foreground"> HOMELAB</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8 animate-pulse-glow" />
          <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
            Infrastructure personnelle pour l'expérimentation, le développement et la production de services
          </p>
        </div>

        {/* Métriques principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={index}
                className="cyber-bg cyber-border p-6 text-center group hover:shadow-accent transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="h-8 w-8 text-accent mx-auto mb-3 group-hover:animate-pulse-glow" />
                <div className="font-cyber text-2xl font-black text-accent text-glow">
                  {metric.value}
                </div>
                <div className="font-mono text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Infrastructure physique */}
        <div className="space-y-12">
          {infrastructure.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.3}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`${category.gradient} w-12 h-12 rounded-lg flex items-center justify-center animate-pulse-glow`}>
                    <CategoryIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className={`font-cyber text-2xl font-bold ${category.color} text-glow`}>
                    {category.category}
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card 
                      key={itemIndex}
                      className="cyber-bg cyber-border p-6 group hover:shadow-primary transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-cyber font-bold text-foreground">{item.name}</h4>
                        <div className={`px-2 py-1 rounded-full text-xs font-mono font-bold ${
                          item.status === 'online' ? 'bg-accent/20 text-accent' :
                          item.status === 'syncing' ? 'bg-secondary/20 text-secondary' :
                          'bg-primary/20 text-primary'
                        }`}>
                          {item.status.toUpperCase()}
                        </div>
                      </div>
                      <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                        {item.specs}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Services hébergés */}
        <div className="mt-20">
          <h3 className="font-cyber text-3xl font-bold text-center text-secondary mb-12 text-glow">
            Services & Applications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="cyber-bg cyber-border p-4 group hover:shadow-secondary transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon className="h-5 w-5 text-secondary group-hover:animate-pulse-glow" />
                    <h4 className="font-cyber font-bold text-sm text-foreground">{service.name}</h4>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  <div className={`text-xs font-mono font-bold ${
                    service.status === 'Actif' ? 'text-accent' :
                    service.status === 'Automatique' ? 'text-primary' :
                    'text-secondary'
                  }`}>
                    ● {service.status}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Architecture et projets */}
        <div className="mt-20 text-center">
          <div className="cyber-bg cyber-border rounded-lg p-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="font-cyber text-2xl font-bold text-primary mb-6 text-glow">
              Projets & Expérimentations
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-cyber text-lg font-bold text-secondary mb-4">Projets Actuels</h4>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                  <li>• Déploiement Kubernetes multi-nœuds avec Cilium CNI</li>
                  <li>• Implémentation d'un SOC personnel avec Wazuh</li>
                  <li>• Lab de malware analysis avec VMware vSphere</li>
                  <li>• Pipeline CI/CD sécurisé avec GitLab & Harbor</li>
                  <li>• Mesh VPN avec WireGuard et consul</li>
                </ul>
              </div>
              <div>
                <h4 className="font-cyber text-lg font-bold text-secondary mb-4">Technologies Testées</h4>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                  <li>• Istio Service Mesh pour micro-services</li>
                  <li>• HashiCorp Vault pour la gestion de secrets</li>
                  <li>• Falco pour la détection d'anomalies runtime</li>
                  <li>• Longhorn pour le stockage distribué</li>
                  <li>• Jaeger pour le tracing distribué</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-accent text-accent-foreground font-cyber font-bold hover:shadow-accent transition-all duration-300"
              >
                <Monitor className="mr-2 h-4 w-4" />
                Voir l'architecture
              </Button>
              <Button 
                variant="outline"
                className="cyber-border font-cyber font-bold hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Database className="mr-2 h-4 w-4" />
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homelab;