import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Mail, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Términos de Uso
            </h1>
            <p className="text-muted-foreground">
              Última actualización: 15 de agosto de 2025
            </p>
          </div>

          <Card className="shadow-elegant">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <div className="text-foreground space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceptación de los términos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Al acceder y utilizar el sitio web Clara Celeb (claraceleb.es), aceptas cumplir con estos 
                    Términos de Uso y todas las leyes aplicables. Si no estás de acuerdo con alguno de estos 
                    términos, no utilices este sitio web.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Descripción del servicio</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Clara Celeb es un blog de entretenimiento y newsletter que ofrece:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Artículos sobre celebridades españolas</li>
                    <li>Newsletter semanal con contenido exclusivo</li>
                    <li>Análisis y comentarios sobre el mundo del entretenimiento</li>
                    <li>Noticias verificadas y exclusivas del sector</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Uso aceptable</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Está permitido:</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Leer y compartir nuestro contenido de forma personal</li>
                        <li>Suscribirse a nuestro newsletter</li>
                        <li>Contactarnos con sugerencias o información</li>
                        <li>Citar nuestros artículos con la debida atribución</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Está prohibido:</h3>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Copiar, reproducir o distribuir nuestro contenido sin autorización</li>
                        <li>Utilizar el sitio para actividades ilegales o no autorizadas</li>
                        <li>Interferir con el funcionamiento del sitio web</li>
                        <li>Intentar acceder a áreas restringidas del sitio</li>
                        <li>Enviar spam o contenido malicioso</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Propiedad intelectual</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Todo el contenido de este sitio web, incluyendo textos, imágenes, logos, diseños y código, 
                    está protegido por derechos de autor y otras leyes de propiedad intelectual.
                  </p>
                  
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Derechos de autor:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                      <li>Los artículos y contenido editorial son propiedad de Clara Morales</li>
                      <li>Las imágenes pueden estar sujetas a derechos de terceros</li>
                      <li>El diseño y código del sitio web están protegidos</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Contenido de usuario</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Al enviar comentarios, sugerencias o información a través de nuestros formularios de contacto:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Garantizas que tienes derecho a compartir dicha información</li>
                    <li>Nos otorgas permiso para usar la información con fines editoriales</li>
                    <li>Mantenemos la confidencialidad de nuestras fuentes</li>
                    <li>Nos reservamos el derecho de verificar toda la información recibida</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">6. Privacidad y protección de datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    El tratamiento de tus datos personales se rige por nuestra 
                    <a href="/privacy" className="text-primary hover:underline"> Política de Privacidad</a>, 
                    que forma parte integral de estos Términos de Uso. Te recomendamos leerla detenidamente.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">7. Disclaimer sobre el contenido</h2>
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Importante sobre nuestro contenido:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
                          <li>El contenido es para entretenimiento e información general</li>
                          <li>Verificamos nuestras fuentes, pero no podemos garantizar la exactitud absoluta</li>
                          <li>Las opiniones expresadas son propias y no necesariamente hechos</li>
                          <li>No somos responsables de decisiones tomadas basándose en nuestro contenido</li>
                          <li>Respetamos la privacidad de las personas públicas dentro de los límites legales</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitación de responsabilidad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Clara Celeb y Clara Morales no serán responsables por:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Daños directos o indirectos derivados del uso del sitio web</li>
                    <li>Interrupciones en el servicio o errores técnicos</li>
                    <li>Pérdida de datos o información</li>
                    <li>Contenido de sitios web de terceros enlazados</li>
                    <li>Decisiones tomadas basándose en nuestro contenido</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">9. Enlaces a terceros</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro sitio web puede contener enlaces a sitios web de terceros. No tenemos control 
                    sobre el contenido, políticas de privacidad o prácticas de estos sitios externos. 
                    Te recomendamos revisar las políticas de privacidad de cualquier sitio que visites.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">10. Modificaciones del servicio</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nos reservamos el derecho de:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Modificar o discontinuar el servicio en cualquier momento</li>
                    <li>Actualizar estos Términos de Uso cuando sea necesario</li>
                    <li>Cambiar la frecuencia o formato del newsletter</li>
                    <li>Modificar el diseño o funcionalidad del sitio web</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">11. Suspensión de acceso</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Podemos suspender o terminar tu acceso al sitio web si:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Violas estos Términos de Uso</li>
                    <li>Participas en actividades que dañen nuestro servicio</li>
                    <li>Utilizas el sitio de manera que perjudique a otros usuarios</li>
                    <li>Por razones técnicas o de seguridad</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">12. Ley aplicable y jurisdicción</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estos Términos de Uso se rigen por la legislación española. Cualquier disputa se 
                    resolverá en los tribunales competentes de Madrid, España.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">13. Divisibilidad</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Si alguna disposición de estos términos se considera inválida o inaplicable, 
                    las disposiciones restantes seguirán siendo válidas y aplicables.
                  </p>
                </section>

                <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <Mail className="h-6 w-6 mr-2" />
                    Contacto
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Si tienes preguntas sobre estos Términos de Uso, puedes contactarme en:
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Clara Morales</strong></p>
                    <p><strong>Email:</strong> contacto@claraceleb.es</p>
                    <p><strong>Dirección:</strong> Calle del Príncipe 14, 28012 Madrid, España</p>
                    <p><strong>Teléfono:</strong> +34 644 123 456</p>
                  </div>
                </section>

                <section className="text-center pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Al continuar utilizando Clara Celeb, confirmas que has leído, entendido y aceptado 
                    estos Términos de Uso en su totalidad.
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

    </div>
  );
};

export default Terms;