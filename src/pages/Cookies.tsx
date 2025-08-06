import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import { useState } from 'react';

const Cookies = () => {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Necessary cookies can't be disabled
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('cookies-accepted', 'custom');
    alert('Preferencias guardadas correctamente');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Cookie className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Política de Cookies
            </h1>
            <p className="text-muted-foreground">
              Última actualización: 15 de agosto de 2025
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">¿Qué son las cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
                    visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación, 
                    recordar tus preferencias y analizar cómo utilizas nuestro sitio.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Tipos de cookies que utilizamos</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Shield className="h-6 w-6 text-success" />
                        <h3 className="text-lg font-semibold text-foreground">Cookies Necesarias</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Esenciales para el funcionamiento básico del sitio web. No se pueden desactivar.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Mantenimiento de sesión</li>
                        <li>• Preferencias de idioma</li>
                        <li>• Seguridad del sitio</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <BarChart className="h-6 w-6 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Cookies Analíticas</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Estadísticas de tráfico</li>
                        <li>• Análisis de comportamiento</li>
                      </ul>
                    </div>

                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Settings className="h-6 w-6 text-accent" />
                        <h3 className="text-lg font-semibold text-foreground">Cookies Funcionales</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Mejoran la funcionalidad y personalización del sitio web.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Preferencias de usuario</li>
                        <li>• Configuración personalizada</li>
                        <li>• Funciones avanzadas</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Cookie className="h-6 w-6 text-orange-600" />
                        <h3 className="text-lg font-semibold text-foreground">Cookies de Marketing</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas.
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Publicidad personalizada</li>
                        <li>• Seguimiento de conversiones</li>
                        <li>• Remarketing</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Cookies de terceros</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Algunos servicios de terceros que utilizamos pueden establecer sus propias cookies:
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left text-sm font-semibold text-foreground">Servicio</th>
                          <th className="border border-border p-3 text-left text-sm font-semibold text-foreground">Propósito</th>
                          <th className="border border-border p-3 text-left text-sm font-semibold text-foreground">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-3 text-sm text-muted-foreground">Google Analytics</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">Análisis de tráfico web</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">2 años</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 text-sm text-muted-foreground">YouTube</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">Reproducción de videos</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">Sesión</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-3 text-sm text-muted-foreground">Instagram Embed</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">Integración social</td>
                          <td className="border border-border p-3 text-sm text-muted-foreground">1 año</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>

          {/* Cookie preferences */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Gestionar Preferencias de Cookies</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-foreground">Cookies Necesarias</h3>
                    <p className="text-sm text-muted-foreground">Requeridas para el funcionamiento básico</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Siempre activas</span>
                    <div className="w-12 h-6 bg-success rounded-full flex items-center">
                      <div className="w-5 h-5 bg-white rounded-full ml-1 transform translate-x-5"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-semibold text-foreground">Cookies Analíticas</h3>
                    <p className="text-sm text-muted-foreground">Ayudan a mejorar nuestro sitio web</p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('analytics')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.analytics ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-semibold text-foreground">Cookies Funcionales</h3>
                    <p className="text-sm text-muted-foreground">Mejoran la experiencia personalizada</p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('functional')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.functional ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.functional ? 'translate-x-6' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h3 className="font-semibold text-foreground">Cookies de Marketing</h3>
                    <p className="text-sm text-muted-foreground">Para publicidad personalizada</p>
                  </div>
                  <button
                    onClick={() => handlePreferenceChange('marketing')}
                    className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                      preferences.marketing ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                    }`}></div>
                  </button>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button variant="cta" onClick={savePreferences}>
                    Guardar Preferencias
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setPreferences({ necessary: true, analytics: true, marketing: true, functional: true })}
                  >
                    Aceptar Todas
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setPreferences({ necessary: true, analytics: false, marketing: false, functional: false })}
                  >
                    Solo Necesarias
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional information */}
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cómo gestionar cookies en tu navegador</h2>
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  También puedes gestionar las cookies directamente desde tu navegador. Aquí tienes enlaces 
                  a las instrucciones para los navegadores más populares:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Google Chrome</h4>
                    <p className="text-sm text-muted-foreground">
                      Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Mozilla Firefox</h4>
                    <p className="text-sm text-muted-foreground">
                      Preferencias → Privacidad y seguridad → Cookies y datos del sitio
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Safari</h4>
                    <p className="text-sm text-muted-foreground">
                      Preferencias → Privacidad → Gestionar datos de sitios web
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Microsoft Edge</h4>
                    <p className="text-sm text-muted-foreground">
                      Configuración → Privacidad, búsqueda y servicios → Cookies
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">¿Tienes preguntas?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si tienes dudas sobre nuestra Política de Cookies o necesitas ayuda para configurar 
                tus preferencias, no dudes en contactarme:
              </p>
              <div className="text-muted-foreground">
                <p><strong>Email:</strong> contacto@claraceleb.es</p>
                <p><strong>Teléfono:</strong> +34 644 123 456</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Cookies;