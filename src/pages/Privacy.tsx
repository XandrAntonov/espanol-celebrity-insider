import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Mail, Clock } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Política de Privacidad
            </h1>
            <p className="text-muted-foreground">
              Última actualización: 15 de agosto de 2025
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <div className="text-foreground space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Información que recopilamos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    En Clara Celeb, recopilamos únicamente la información necesaria para proporcionarte 
                    nuestro servicio de newsletter y mejorar tu experiencia:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Dirección de email:</strong> Para enviarte nuestro newsletter semanal</li>
                    <li><strong>Nombre (opcional):</strong> Para personalizar nuestras comunicaciones</li>
                    <li><strong>Datos de navegación:</strong> A través de cookies para mejorar la experiencia web</li>
                    <li><strong>Información de contacto:</strong> Cuando nos escribes voluntariamente</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Cómo utilizamos tu información</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos tus datos personales únicamente para los siguientes propósitos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Enviarte nuestro newsletter con contenido exclusivo sobre celebrities españolas</li>
                    <li>Responder a tus consultas y comentarios</li>
                    <li>Mejorar nuestro contenido y servicios</li>
                    <li>Cumplir con nuestras obligaciones legales</li>
                    <li>Analizar el tráfico web de forma anónima</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Base legal para el tratamiento</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conforme al Reglamento General de Protección de Datos (RGPD), tratamos tus datos basándonos en:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Consentimiento:</strong> Al suscribirte voluntariamente a nuestro newsletter</li>
                    <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicarnos contigo</li>
                    <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por la ley española</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartir información con terceros</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>No vendemos, alquilamos ni compartimos tu información personal con terceros</strong> 
                    excepto en las siguientes circunstancias limitadas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Proveedores de servicios:</strong> Como plataformas de email marketing (bajo estrictos acuerdos de confidencialidad)</li>
                    <li><strong>Obligaciones legales:</strong> Cuando sea requerido por autoridades competentes</li>
                    <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos legales o los de terceros</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Tus derechos bajo el RGPD</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Como residente de la UE, tienes los siguientes derechos sobre tus datos personales:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Derecho de Acceso</h4>
                      <p className="text-sm text-muted-foreground">Solicitar una copia de tus datos personales</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Derecho de Rectificación</h4>
                      <p className="text-sm text-muted-foreground">Corregir datos inexactos o incompletos</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Derecho de Supresión</h4>
                      <p className="text-sm text-muted-foreground">Solicitar la eliminación de tus datos</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Derecho de Portabilidad</h4>
                      <p className="text-sm text-muted-foreground">Recibir tus datos en formato estructurado</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Seguridad de los datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                    tus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Cifrado SSL/TLS para todas las transmisiones de datos</li>
                    <li>Acceso restringido a los datos personales</li>
                    <li>Copias de seguridad regulares y seguras</li>
                    <li>Revisiones periódicas de nuestras medidas de seguridad</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Retención de datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conservamos tus datos personales únicamente durante el tiempo necesario para cumplir 
                    con los propósitos para los que fueron recopilados:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Datos de suscripción:</strong> Hasta que canceles tu suscripción</li>
                    <li><strong>Datos de contacto:</strong> Hasta 2 años después de la última comunicación</li>
                    <li><strong>Datos web:</strong> Según se especifica en nuestra Política de Cookies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Transferencias internacionales</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Espacio 
                    Económico Europeo (EEE). En tales casos, nos aseguramos de que existan garantías 
                    adecuadas para proteger tus datos personales conforme al RGPD.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Menores de edad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestros servicios están dirigidos a personas mayores de 16 años. No recopilamos 
                    conscientemente información personal de menores de 16 años sin el consentimiento 
                    parental verificable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Cambios en esta política</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos 
                    cualquier cambio significativo a través de nuestro newsletter o mediante un aviso 
                    prominente en nuestro sitio web.
                  </p>
                </section>

                <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    Contacto
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer alguno de 
                    tus derechos, puedes contactarme:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Responsable:</strong> Clara Morales</p>
                    <p><strong>Email:</strong> contacto@claraceleb.es</p>
                    <p><strong>Dirección:</strong> Calle del Príncipe 14, 28012 Madrid, España</p>
                    <p><strong>Teléfono:</strong> +34 644 123 456</p>
                  </div>
                  
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      Tiempo de respuesta: 72 horas máximo
                    </p>
                  </div>
                </section>
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

export default Privacy;