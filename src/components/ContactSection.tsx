import { Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  const email = 'kynstore.soluciones@gmail.com';
  const whatsapp = '+51987654321'; // Número de ejemplo

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsapp.replace('+', '')}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Hablemos de Tu Proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte a llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Mail className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-2xl">Email</CardTitle>
              <CardDescription className="text-base">
                Escríbenos y te responderemos en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 break-all">{email}</p>
              <Button onClick={handleEmailClick} className="w-full shadow-soft">
                Enviar Email
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
              </div>
              <CardTitle className="text-2xl">WhatsApp Business</CardTitle>
              <CardDescription className="text-base">
                Chatea con nosotros y obtén respuestas inmediatas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{whatsapp}</p>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-accent hover:bg-accent/90 shadow-soft"
              >
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;