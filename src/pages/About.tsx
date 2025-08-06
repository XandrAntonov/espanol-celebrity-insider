import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SubscriptionForm from '@/components/SubscriptionForm';
import CookieBanner from '@/components/CookieBanner';
import { User, Award, Mail, Instagram, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Hero section */}
          <div className="text-center space-y-6">
            <div className="bg-gradient-hero rounded-full w-32 h-32 mx-auto flex items-center justify-center">
              <User className="h-16 w-16 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Clara Morales
              </h1>
              <p className="text-xl text-muted-foreground">
                Periodista especializada en celebridades españolas
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-card rounded-lg p-8 shadow-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-6">Mi Historia</h2>
              <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                  Hola, soy Clara Morales, y durante los últimos 10 años me he dedicado a descubrir y contar 
                  las historias más fascinantes del mundo de las celebridades españolas. Mi pasión por el 
                  periodismo de entretenimiento nació cuando, siendo estudiante de Ciencias de la Comunicación 
                  en la Universidad Complutense de Madrid, tuve la oportunidad de entrevistar a Penélope Cruz 
                  para el periódico universitario.
                </p>
                
                <p>
                  Esa entrevista cambió mi vida. No solo por la calidez y profesionalidad de Penélope, sino 
                  porque me di cuenta de que detrás de cada celebrity hay historias humanas reales, vulnerabilidades, 
                  sueños y luchas que el público merece conocer de forma respetuosa y veraz.
                </p>

                <p>
                  Desde entonces, he trabajado para las principales revistas del corazón de España, he cubierto 
                  festivales de cine internacionales, galas de premios y eventos exclusivos. Pero siempre sentí 
                  que faltaba algo: un espacio donde poder contar estas historias sin las limitaciones editoriales 
                  tradicionales, donde la calidad del contenido fuera más importante que el sensacionalismo.
                </p>

                <p>
                  Así nació <strong>Clara Celeb</strong>. Un proyecto personal donde puedo compartir las exclusivas 
                  más interesantes, los análisis más profundos y las historias que realmente importan sobre nuestras 
                  celebridades españolas favoritas.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 text-center shadow-card">
              <Award className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">10+ Años</h3>
              <p className="text-sm text-muted-foreground">de experiencia en periodismo del entretenimiento</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-card">
              <User className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">500+ Entrevistas</h3>
              <p className="text-sm text-muted-foreground">con celebrities españolas e internacionales</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center shadow-card">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">10,000+ Suscriptores</h3>
              <p className="text-sm text-muted-foreground">confían en mis exclusivas cada semana</p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-card rounded-lg p-8 shadow-elegant">
            <h2 className="text-2xl font-bold text-foreground mb-6">Mi Misión</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Creo firmemente que el periodismo del entretenimiento puede ser ético, respetuoso y de calidad. 
                Mi objetivo es ofrecer contenido exclusivo que satisfaga la curiosidad natural sobre nuestras 
                celebridades favoritas, pero siempre desde el respeto y la veracidad.
              </p>
              
              <p>
                En Clara Celeb no encontrarás rumores infundados ni contenido sensacionalista. Todo lo que publico 
                está verificado con múltiples fuentes y presentado de forma que honre tanto a los protagonistas 
                como a los lectores que confían en mi trabajo.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-4 mt-6">
                <p className="text-foreground font-medium italic">
                  "Mi compromiso es contarte la verdad sobre el mundo del entretenimiento español, 
                  con exclusivas reales y análisis profundos que no encontrarás en ningún otro lugar."
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-lg p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Conecta Conmigo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Información de Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:contacto@claraceleb.es" className="text-muted-foreground hover:text-primary">
                      contacto@claraceleb.es
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+34644123456" className="text-muted-foreground hover:text-primary">
                      +34 644 123 456
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-primary" />
                    <a 
                      href="https://instagram.com/claraceleb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      @claraceleb
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-4">¿Tienes una exclusiva?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Si tienes información verificada sobre celebridades españolas, me encantaría escucharte. 
                  Garantizo total confidencialidad y protección de fuentes.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:contacto@claraceleb.es?subject=Exclusiva para Clara Celeb">
                    Contactar en privado
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <SubscriptionForm 
            variant="hero"
            title="¿Quieres formar parte de la familia Clara Celeb?"
            description="Únete a más de 10,000 lectores que ya reciben mis exclusivas cada semana"
          />
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default About;