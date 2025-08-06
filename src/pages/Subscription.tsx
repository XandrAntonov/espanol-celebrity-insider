import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscriptionForm from '@/components/SubscriptionForm';
import CookieBanner from '@/components/CookieBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, Zap, Heart, Users, Clock } from 'lucide-react';

const Subscription = () => {
  const benefits = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Exclusivas antes que nadie",
      description: "Sé el primero en conocer los secretos mejor guardados de las estrellas españolas"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Contenido VIP semanal",
      description: "Análisis profundos, entrevistas exclusivas y rumores verificados cada semana"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Acceso directo a Clara",
      description: "Respuestas personales a tus preguntas y sugerencias de temas"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Comunidad exclusiva",
      description: "Únete a más de 10,000 suscriptores que comparten tu pasión por las celebrities"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Las exclusivas de Clara son increíbles. Siempre se adelanta a las grandes revistas.",
      rating: 5
    },
    {
      name: "Carlos Ruiz",
      text: "Contenido de calidad sin sensacionalismo. Exactamente lo que buscaba.",
      rating: 5
    },
    {
      name: "Ana Martín",
      text: "Me encanta cómo respeta a las celebrities mientras nos cuenta sus historias.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Hero */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Newsletter Exclusivo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Únete a la comunidad más exclusiva de amantes de las celebrities españolas. 
              Recibe contenido premium que no encontrarás en ningún otro lugar.
            </p>
            
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Suscriptores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Exclusivas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">Valoración</div>
              </div>
            </div>
          </div>

          {/* Subscription form */}
          <div className="max-w-2xl mx-auto">
            <SubscriptionForm variant="hero" />
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">
              ¿Qué incluye tu suscripción?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* What you get */}
          <div className="bg-gradient-card rounded-lg p-8 shadow-elegant">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Contenido Exclusivo Cada Semana
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-primary rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Lunes</h3>
                <p className="text-muted-foreground">
                  <strong>Exclusivas de la Semana:</strong> Las noticias más impactantes 
                  con análisis detallado y fuentes verificadas.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-accent rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Miércoles</h3>
                <p className="text-muted-foreground">
                  <strong>Análisis VIP:</strong> Reportajes profundos sobre tendencias, 
                  relaciones y proyectos de nuestras celebrities favoritas.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-primary-glow rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Viernes</h3>
                <p className="text-muted-foreground">
                  <strong>Confidencias:</strong> Los rumores más candentes y 
                  exclusivas que están por salir a la luz.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Lo que dicen nuestros suscriptores
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">
                        "{testimonial.text}"
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        - {testimonial.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    ¿Cuánto cuesta la suscripción?
                  </h3>
                  <p className="text-muted-foreground">
                    El newsletter es completamente gratuito. Mi objetivo es compartir mi pasión 
                    por el mundo de las celebrities españolas con la mayor audiencia posible.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    ¿Con qué frecuencia recibiré emails?
                  </h3>
                  <p className="text-muted-foreground">
                    Envío 3 newsletters por semana: lunes, miércoles y viernes. 
                    Nunca recibirás spam ni emails promocionales de terceros.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    ¿Puedo cancelar cuando quiera?
                  </h3>
                  <p className="text-muted-foreground">
                    Por supuesto. Cada email incluye un enlace para darte de baja 
                    instantáneamente. Sin preguntas, sin complicaciones.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    ¿Cómo verificas tus exclusivas?
                  </h3>
                  <p className="text-muted-foreground">
                    Cada noticia pasa por un riguroso proceso de verificación con múltiples fuentes. 
                    Nunca publico rumores sin confirmar. La credibilidad es mi mayor activo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              ¿Listo para las mejores exclusivas?
            </h2>
            <p className="text-lg text-muted-foreground">
              Únete ahora y recibe tu primera exclusiva esta misma semana
            </p>
            <div className="max-w-md mx-auto">
              <SubscriptionForm variant="hero" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Subscription;