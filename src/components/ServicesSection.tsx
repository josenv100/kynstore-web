import { Briefcase, Lightbulb, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Briefcase,
    title: 'Nuestra Experiencia',
    description:
      'Más de 10 años desarrollando soluciones tecnológicas para empresas de diversos sectores. Equipo experto en las últimas tecnologías y metodologías ágiles.',
    features: [
      'Desarrollo Web y Móvil',
      'Cloud Computing',
      'Metodologías Ágiles',
      'Equipo Certificado',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Nuestras Soluciones',
    description:
      'Ofrecemos un portafolio completo de servicios digitales diseñados para impulsar tu negocio y optimizar tus procesos empresariales.',
    features: [
      'Transformación Digital',
      'Desarrollo a Medida',
      'Integración de Sistemas',
      'Consultoría IT',
    ],
  },
  {
    icon: Building2,
    title: 'Nuestra Empresa',
    description:
      'KynStore S.A.C. es una empresa peruana líder en soluciones digitales, comprometida con la innovación y la excelencia en cada proyecto.',
    features: [
      'Empresa Peruana',
      'Soporte 24/7',
      'Garantía de Calidad',
      'Enfoque en Resultados',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Por Qué Elegirnos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo podemos ayudarte a alcanzar tus objetivos digitales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;