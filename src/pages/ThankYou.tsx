import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Mail, Instagram, ArrowLeft, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  useEffect(() => {
    // Track successful subscription
    console.log('Subscription completed successfully');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-12">
          {/* Success message */}
          <div className="space-y-6">
            <div className="bg-success/10 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-success" />
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¡Bienvenido/a a la familia Clara Celeb!
              </h1>
              <p className="text-xl text-muted-foreground">
                Tu suscripción se ha completado exitosamente
              </p>
            </div>
          </div>

          {/* What happens next */}
          <Card className="shadow-elegant max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                ¿Qué pasa ahora?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      Revisa tu email
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Te he enviado un email de bienvenida con tu primera exclusiva. 
                      Si no lo ves, revisa tu carpeta de spam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      Regalo de bienvenida
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Como nuevo suscriptor, recibirás acceso a mi archivo exclusivo: 
                      "Los 10 secretos mejor guardados de las celebrities españolas".
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground mb-1">
                      Sígueme en Instagram
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Para contenido diario y detrás de cámaras de mis investigaciones.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Tu agenda de exclusivas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="bg-primary rounded-lg p-4">
                    <h3 className="text-white font-semibold">Lunes</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Exclusivas de la Semana
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-accent rounded-lg p-4">
                    <h3 className="text-white font-semibold">Miércoles</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Análisis VIP
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="bg-primary-glow rounded-lg p-4">
                    <h3 className="text-white font-semibold">Viernes</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Confidencias
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social proof */}
          <div className="bg-gradient-card rounded-lg p-8 shadow-elegant max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Te has unido a una comunidad increíble
            </h2>
            <p className="text-muted-foreground mb-6">
              Más de 10,000 personas confían en mis exclusivas cada semana
            </p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Suscriptores</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Exclusivas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <Card className="shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                ¿Tienes alguna pregunta?
              </h2>
              <p className="text-muted-foreground mb-6">
                Estoy aquí para ayudarte. No dudes en contactarme si necesitas algo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href="mailto:contacto@claraceleb.es">
                    <Mail className="h-4 w-4 mr-2" />
                    Enviar email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://instagram.com/claraceleb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Seguir en Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Mientras tanto, puedes explorar más contenido en el blog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/articles">
                <Button variant="cta">
                  Ver todos los artículos
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </div>

          {/* Thank you note */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <p className="text-foreground italic">
                "Gracias por confiar en mi trabajo. Prometo darte las mejores exclusivas 
                del mundo de las celebrities españolas, siempre con respeto y veracidad. 
                ¡Bienvenido/a a esta aventura!"
              </p>
              <p className="text-primary font-semibold mt-3">
                - Clara Morales
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default ThankYou;