import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Instagram, Send, Clock } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Te responderé en las próximas 24 horas.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Contacta Conmigo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes una exclusiva? ¿Quieres colaborar? ¿Necesitas más información? 
              Estoy aquí para escucharte. Tu mensaje es importante para mí.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact form */}
            <div className="lg:col-span-2">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Envíame un Mensaje</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nombre *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="tu@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Asunto *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="¿De qué quieres hablar?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Mensaje *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntame todos los detalles..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Enviando..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Confidencialidad garantizada:</strong> Si tienes información sensible o exclusivas, 
                      puedes estar seguro/a de que protegeré tu identidad y la información que compartas conmigo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {/* Contact details */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Información de Contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a 
                          href="mailto:contacto@claraceleb.es"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          contacto@claraceleb.es
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Teléfono</p>
                        <a 
                          href="tel:+34644123456"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          +34 644 123 456
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Ubicación</p>
                        <p className="text-sm text-muted-foreground">
                          Calle del Príncipe 14<br />
                          28012 Madrid, España
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Instagram className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Instagram</p>
                        <a 
                          href="https://instagram.com/claraceleb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          @claraceleb
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response time */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Tiempo de Respuesta
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Consultas generales</p>
                        <p className="text-sm text-muted-foreground">24-48 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Exclusivas urgentes</p>
                        <p className="text-sm text-muted-foreground">2-6 horas</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Preguntas Frecuentes
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        ¿Aceptas colaboraciones?
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sí, siempre estoy abierta a colaboraciones éticas y de calidad.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        ¿Puedo enviar tips anónimos?
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Absolutamente. Respeto la confidencialidad de mis fuentes.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        ¿Verificas la información?
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Siempre. No publico nada sin verificar con múltiples fuentes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Contact;