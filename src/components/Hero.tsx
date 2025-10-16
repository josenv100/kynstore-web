import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Tech Background with Red Accents */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Radial red glow spots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-500/8 rounded-full blur-[100px]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-60" />
          <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[60%] left-[35%] w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[30%] right-[20%] w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[50%] right-[30%] w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[70%] right-[15%] w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2.5s' }} />
          <div className="absolute bottom-[20%] left-[40%] w-1 h-1 bg-red-500 rounded-full animate-pulse opacity-50" style={{ animationDelay: '3s' }} />
          <div className="absolute bottom-[30%] right-[40%] w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '3.5s' }} />
        </div>
        
        {/* Diagonal light lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-left space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                Soluciones Digitales
              </span>
              <br />
              <span className="text-white/95">
                para Impulsar tu Negocio
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-light">
              Transformamos ideas en realidad digital con tecnología innovadora 
              y experiencia profesional
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Button 
              size="lg" 
              className="text-base shadow-glow hover:shadow-elegant hover:scale-105 transition-all duration-300 group bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contáctanos
            </Button>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('servicios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-base border border-red-500/60 text-red-400 bg-transparent backdrop-blur-sm hover:bg-red-500 hover:text-white hover:border-red-500 hover:scale-105 transition-all duration-300 group"
            >
              Ver Servicios
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => {
            const element = document.getElementById('servicios');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to services"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;