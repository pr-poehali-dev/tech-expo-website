import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'tickets', label: 'Tickets', icon: 'Ticket' },
    { id: 'news', label: 'News', icon: 'Newspaper' },
    { id: 'participants', label: 'Participants', icon: 'Users' },
    { id: 'partners', label: 'Partners', icon: 'Handshake' },
    { id: 'contacts', label: 'Contact', icon: 'Mail' }
  ];

  const infoCards = [
    {
      icon: 'Sparkles',
      title: 'About the Expo',
      description: 'The Tech Innovation Expo is the premier event for cutting-edge technology, bringing together over 10,000 industry leaders, innovators, and enthusiasts from around the globe to shape the future.',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: 'Building2',
      title: 'Exhibition Space',
      description: 'Our expansive venue features over 300 stands where leading companies and startups showcase groundbreaking products in AI, robotics, IoT, and more. Secure your stand by April 15th to be at the forefront of innovation.',
      gradient: 'from-secondary to-accent'
    },
    {
      icon: 'Train',
      title: 'Travel Information',
      description: 'We highly recommend using public transport due to limited parking. A dedicated tech shuttle service operates continuously between the central station, the airport, and the exhibition center. The service is complimentary for all registered attendees.',
      gradient: 'from-accent to-primary'
    },
    {
      icon: 'BadgeCheck',
      title: 'Registration',
      description: 'All visitors and participants must check in at the registration desk upon arrival to receive their access badge and a digital guide to the event.',
      gradient: 'from-primary/80 to-secondary/80'
    }
  ];

  const renderHome = () => (
    <div className="space-y-16">
      <div className="text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
          Tech Innovation Expo
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          The Premier Event for Cutting-Edge Technology 2025
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8" onClick={() => setActiveSection('tickets')}>
            Get Tickets
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
            Learn More
            <Icon name="Info" className="ml-2" size={20} />
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
        {infoCards.map((card, index) => (
          <Card 
            key={index} 
            className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            style={{ 
              animationDelay: `${0.3 + index * 0.1}s`,
              animationFillMode: 'backwards'
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
            <div className="relative p-8 space-y-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                <Icon name={card.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 text-center space-y-6 border-2 border-primary/20 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}>
        <h2 className="text-4xl font-bold">10,000+ Attendees | 300+ Stands | 50+ Countries</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Be Part of the Biggest Tech Event of the Year
        </p>
      </div>
    </div>
  );

  const renderTickets = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tickets</h2>
        <p className="text-xl text-muted-foreground">Choose Your Pass</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'Standard', price: '50€', features: ['Exhibition access', 'Digital guide', 'Free shuttle service'] },
          { name: 'VIP', price: '150€', features: ['All standard features', 'VIP lounge access', 'Meet the speakers', 'Coffee breaks included'] },
          { name: 'Exhibitor', price: '300€', features: ['All VIP features', 'Own exhibition stand', 'Marketing materials', 'Priority support'] }
        ].map((ticket, i) => (
          <Card key={i} className="p-8 space-y-6 hover:scale-105 transition-transform border-2 border-primary/20 hover:border-primary/50">
            <div>
              <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
              <p className="text-4xl font-bold text-primary">{ticket.price}</p>
            </div>
            <ul className="space-y-3">
              {ticket.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary">Buy Now</Button>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">News</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: 'Registration Now Open', date: 'March 15, 2025', icon: 'Megaphone' },
          { title: 'Conference Speakers Announced', date: 'March 10, 2025', icon: 'Mic' },
          { title: 'New AI Technologies at Expo', date: 'March 5, 2025', icon: 'Brain' },
          { title: 'Partnership with Leading Companies', date: 'March 1, 2025', icon: 'Handshake' }
        ].map((news, i) => (
          <Card key={i} className="p-6 hover:scale-105 transition-transform border-2 border-secondary/20 hover:border-secondary/50 group">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon name={news.icon as any} size={24} className="text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{news.title}</h3>
                <p className="text-sm text-muted-foreground">{news.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderParticipants = () => (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Participants</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['TechCorp', 'InnovateLab', 'RoboSystems', 'AI Solutions', 'Future Tech', 'SmartDevices', 'CloudNine', 'DataHub'].map((company, i) => (
          <Card key={i} className="aspect-square flex items-center justify-center p-8 hover:scale-105 transition-transform border-2 border-accent/20 hover:border-accent/50 group">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="Building" size={32} className="text-white" />
              </div>
              <p className="font-bold">{company}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderPartners = () => (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Partners</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'Global Tech Foundation', type: 'General Partner', icon: 'Award' },
          { name: 'Innovation Fund', type: 'Official Partner', icon: 'TrendingUp' },
          { name: 'Tech Media Group', type: 'Media Partner', icon: 'Radio' }
        ].map((partner, i) => (
          <Card key={i} className="p-8 text-center space-y-4 hover:scale-105 transition-transform border-2 border-primary/20 hover:border-primary/50 group">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon name={partner.icon as any} size={36} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.type}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact</h2>
      <Card className="p-8 space-y-6 border-2 border-primary/20">
        {[
          { icon: 'MapPin', label: 'Address', value: 'Innovation Center, Berlin, Germany' },
          { icon: 'Phone', label: 'Phone', value: '+49 30 1234 5678' },
          { icon: 'Mail', label: 'Email', value: 'info@techinnoexpo.com' },
          { icon: 'Clock', label: 'Working Hours', value: 'Mon-Fri 9:00-18:00' }
        ].map((contact, i) => (
          <div key={i} className="flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Icon name={contact.icon as any} size={24} className="text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{contact.label}</p>
              <p className="text-lg font-semibold">{contact.value}</p>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return renderHome();
      case 'tickets': return renderTickets();
      case 'news': return renderNews();
      case 'participants': return renderParticipants();
      case 'partners': return renderPartners();
      case 'contacts': return renderContacts();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="font-bold text-xl hidden md:block">Tech Expo</span>
            </div>
            
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 transition-all ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-r from-primary to-secondary' 
                      : 'hover:bg-primary/10'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {renderContent()}
      </main>

      <footer className="border-t border-primary/20 mt-24 py-12">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="font-bold text-lg">Tech Innovation Expo 2025</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;