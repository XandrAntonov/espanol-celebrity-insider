import { useParams } from 'react-router-dom';
import Footer from '@/components/Footer';
import SubscriptionForm from '@/components/SubscriptionForm';
import CookieBanner from '@/components/CookieBanner';
import { Calendar, Clock, User, Share2, Heart, MessageCircle, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rosaliaImage from '@/assets/rosalia-portrait.jpg';
import penelopeImage from '@/assets/penelope-cruz-venice.jpg';
import enriqueImage from '@/assets/enrique-iglesias-concert.jpg';
import esterImage from '@/assets/ester-exposito-fashion.jpg';
import antonioImage from '@/assets/antonio-banderas-theater.jpg';

const Article = () => {
  const { slug } = useParams();

  const articles: Record<string, any> = {
    'rosalia-alex-baena-nueva-pareja': {
      title: 'Nueva pareja: Rosalía y el futbolista Álex Baena - ¿Amor real o estrategia de marketing?',
      image: rosaliaImage,
      date: '15 Agosto 2025',
      readTime: '4 min',
      category: 'Parejas',
      content: `
        <p>Las redes sociales han explotado en las últimas horas tras filtrarse unas imágenes exclusivas que muestran a Rosalía y al futbolista del Villarreal Álex Baena en una actitud muy cariñosa en una terraza de Barcelona. ¿Estamos ante el romance del año o se trata de una estrategia de marketing perfectamente orquestada?</p>

        <p>Según fuentes cercanas al entorno de la cantante catalana, la relación habría comenzado hace aproximadamente dos meses, coincidiendo con el final de la gira europea de Rosalía. "Se conocieron en una fiesta privada en Ibiza y desde entonces no se han separado", nos confía una fuente que prefiere mantener el anonimato.</p>

        <p>Sin embargo, algunos expertos en comunicación apuntan a que el timing de esta revelación es demasiado perfecto. Rosalía está a punto de lanzar su nuevo álbum en septiembre, mientras que Baena busca aumentar su perfil mediático tras su paso por la Eurocopa. "Es una colaboración que beneficia a ambos", opina el analista de tendencias mediáticas, Carlos Mendoza.</p>

        <p>Lo que sí es innegable es la química que muestran en las fotografías filtradas. Cenas románticas, paseos por la playa y miradas cómplices que han conquistado a sus fans. El hashtag #RosaBaena ya acumula más de 2 millones de menciones en TikTok.</p>

        <p>Por ahora, ninguno de los dos ha confirmado oficialmente la relación, pero las pistas siguen acumulándose. ¿Será este el amor que tanto había esperado Rosalía después de su mediática ruptura? El tiempo dirá si estamos ante un amor verdadero o la estrategia de marketing más brillante del año.</p>

        <p>Mientras tanto, los fans seguirán atentos a cada movimiento de esta posible nueva pareja dorada del panorama español. Una cosa es segura: han conseguido acaparar toda la atención mediática.</p>
      `
    },
    'penelope-cruz-venecia-2025': {
      title: 'Penélope Cruz deslumbra en Venecia: Su nueva película y el momento más emotivo en la alfombra roja',
      image: penelopeImage,
      date: '14 Agosto 2025',
      readTime: '5 min',
      category: 'Cine',
      content: `
        <p>Penélope Cruz vuelve a demostrar por qué es una de las actrices más respetadas del panorama internacional. Su llegada al Festival de Cine de Venecia 2025 no solo ha sido espectacular por su impecable elección de vestuario, sino por la emotiva presentación de su nueva película "Luna de Agosto".</p>

        <p>La actriz madrileña, de 51 años, ha protagonizado uno de los momentos más conmovedores de esta edición del festival cuando, visiblemente emocionada, dedicó el estreno a su madre fallecida el año pasado. "Esta película habla de madres e hijas, y no puedo evitar pensar en la mía cada vez que interpreto estos personajes", confesó entre lágrimas durante la rueda de prensa.</p>

        <p>"Luna de Agosto", dirigida por el aclamado realizador italiano Luca Guadagnino, presenta a Cruz en un papel completamente diferente: una mujer de mediana edad que redescubre el amor tras la pérdida de su esposo. La actuación ha sido calificada por la crítica como "magistral" y ya suenan las primeras quinielas para los Oscar 2026.</p>

        <p>En la alfombra roja, Cruz eligió un diseño de alta costura de Chanel que renderizaba homenaje a la estética española de los años 60. El vestido, de seda negra con bordados dorados, fue completado con joyas de la casa Cartier que pertenecieron a la realeza española.</p>

        <p>Durante la gala, la actriz estuvo acompañada por su esposo Javier Bardem y sus dos hijos, Leo y Luna, en una rara aparición pública de la familia al completo. "Mis hijos están creciendo y quería que vieran a su madre en este momento tan especial de su carrera", explicó Cruz en exclusiva para nuestro medio.</p>

        <p>El festival continúa hasta el domingo, pero ya se habla de "Luna de Agosto" como una de las favoritas para llevarse el León de Oro. Penélope Cruz, una vez más, ha demostrado que sigue siendo la embajadora perfecta del cine español en el mundo.</p>
      `
    },
    'enrique-iglesias-nuevo-album-2025': {
      title: 'Enrique Iglesias regresa con fuerza: Su nuevo álbum revoluciona el panorama musical',
      image: enriqueImage,
      date: '13 Agosto 2025',
      readTime: '6 min',
      category: 'Música',
      content: `
        <p>Después de tres años de silencio musical, Enrique Iglesias ha vuelto por todo lo alto con "Corazón Digital", un álbum que fusiona sus raíces latinas con sonidos completamente innovadores. El Rey del Pop Latino presenta su trabajo más personal y arriesgado hasta la fecha.</p>

        <p>El álbum, que salió a la venta esta semana, incluye 14 tracks que exploran desde el reggaetón experimental hasta baladas íntimas grabadas en colaboración con artistas emergentes. "Quería hacer algo diferente, algo que representara realmente dónde estoy en mi vida ahora", explica Iglesias en una entrevista exclusiva desde su estudio en Miami.</p>

        <p>La primera pista, "Madrugada Artificial", ha arrasado en todas las plataformas digitales, acumulando más de 50 millones de reproducciones en su primera semana. La canción, que cuenta con la colaboración de Rosalía y Bad Bunny, aborda temas de amor en la era digital con una profundidad emocional que ha sorprendido tanto a fans como a críticos.</p>

        <p>Uno de los aspectos más llamativos del álbum es la incorporación de elementos de inteligencia artificial en la producción. Iglesias trabajó con un equipo de tecnólogos musicales para crear texturas sonoras nunca antes escuchadas. "La tecnología no reemplaza la emoción humana, la amplifica", reflexiona el artista.</p>

        <p>Las reacciones de los fans han sido abrumadoramente positivas. En las redes sociales, #CorazónDigital se ha convertido en trending topic mundial, con miles de fans compartiendo sus canciones favoritas y creando contenido viral inspirado en las nuevas melodías.</p>

        <p>El tour mundial que acompañará al álbum promete ser espectacular, con fechas confirmadas en 45 ciudades de cuatro continentes. Madrid, Barcelona y Valencia ya han agotado las entradas en tiempo récord, demostrando que el público español sigue siendo incondicional del artista madrileño.</p>

        <p>Con "Corazón Digital", Enrique Iglesias no solo regresa, sino que redefine lo que significa ser un artista latino en 2025. Una apuesta valiente que está dando sus frutos.</p>
      `
    },
    'ester-exposito-icono-estilo-espana': {
      title: 'Ester Expósito: Cómo se convirtió en el icono de estilo más influyente de España',
      image: esterImage,
      date: '12 Agosto 2025',
      readTime: '7 min',
      category: 'Moda',
      content: `
        <p>A los 24 años, Ester Expósito se ha consolidado como la referente de moda más influyente de España y una de las it-girls más seguidas de Europa. Su evolución estilística desde los primeros capítulos de "Élite" hasta convertirse en embajadora de las firmas de lujo más prestigiosas del mundo es, sin duda, uno de los fenómenos más fascinantes del panorama fashion actual.</p>

        <p>Todo comenzó en 2018 cuando Netflix lanzó "Élite" y el personaje de Carla Rosón Caleruega, interpretado por Expósito, se convirtió en una obsesión para millones de jóvenes. Pero lo que realmente capturó la atención del público no fueron solo sus líneas de diálogo, sino su impecable vestuario tanto dentro como fuera de la serie.</p>

        <p>"Ester tenía algo especial desde el primer día", recuerda Cristina Rodríguez, estilista de la serie. "Entendía intuitivamente cómo llevar cada prenda, cómo posar, cómo hacer que hasta la ropa más sencilla pareciera haute couture". Esta capacidad natural no pasó desapercibida para las grandes casas de moda.</p>

        <p>En 2020, Dior la eligió como embajadora global, convirtiéndola en la española más joven en ostentar este título. Desde entonces, ha desfilado en las front rows de París, Milán y Nueva York, siempre captando la atención de fotógrafos y fashion bloggers internacionales.</p>

        <p>Su estilo se caracteriza por una mezcla sofisticada de elegancia clásica y toques modernos. "No sigo tendencias, las siento", explica Expósito en una entrevista para Vogue España. "Mi armario es una extensión de mi personalidad: versátil, auténtico y siempre con un punto de sorpresa".</p>

        <p>Las cifras hablan por sí solas: cada outfit que publica en Instagram genera una media de 2.3 millones de likes y provoca agotamientos inmediatos en las tiendas online. El "efecto Ester" se ha convertido en un fenómeno estudiado por analistas de marketing fashion de todo el mundo.</p>

        <p>Pero más allá de las cifras, Expósito ha sabido utilizar su influencia para promover la moda sostenible y el talento emergente español. Su reciente colaboración con diseñadores independientes ha puesto el foco en una nueva generación de creadores nacionales.</p>

        <p>Con proyectos cinematográficos internacionales en el horizonte y su primera línea de perfumes en desarrollo, Ester Expósito demuestra que su influencia trasciende las pantallas para convertirse en un auténtico fenómeno cultural.</p>
      `
    },
    'antonio-banderas-academia-teatro-malaga': {
      title: 'Antonio Banderas abre las puertas de su academia teatral en Málaga: "Un sueño hecho realidad"',
      image: antonioImage,
      date: '11 Agosto 2025',
      readTime: '5 min',
      category: 'Teatro',
      content: `
        <p>Con los ojos húmedos de emoción y la voz ligeramente quebrada, Antonio Banderas inauguró ayer oficialmente la Academia de Artes Escénicas de Málaga, un proyecto que define como "el sueño de toda mi vida hecho realidad". El actor malagueño, de 64 años, ha invertido más de 15 millones de euros en este ambicioso centro de formación artística.</p>

        <p>La academia, ubicada en el corazón histórico de Málaga, ocupará un edificio completamente restaurado del siglo XVIII que cuenta con cinco aulas de interpretación, dos estudios de danza, una sala de música y un teatro con capacidad para 200 espectadores. "Quería que los jóvenes andaluces tuvieran las mismas oportunidades que yo nunca tuve aquí", explicó Banderas durante la ceremonia inaugural.</p>

        <p>El centro ofrecerá programas de formación integral en interpretación, danza, canto, dirección escénica y producción teatral. Entre los profesores confirmados se encuentran nombres de prestigio internacional como la directora de casting Kathryn Bostic, el coreógrafo Nacho Duato y la actriz Carmen Maura, amiga personal de Banderas desde hace décadas.</p>

        <p>Durante la presentación, el actor presentó a los primeros 60 alumnos becados, seleccionados entre más de 2,000 candidatos de toda España. "Hemos buscado talento, pero sobre todo pasión y hambre de aprender", explicó la directora académica, María José Goyanes.</p>

        <p>La inauguración contó con la presencia de personalidades del mundo de la cultura como Pedro Almodóvar, quien llegó especialmente desde Madrid para acompañar a su colaborador habitual. "Antonio siempre ha tenido claro que quería devolver algo a su tierra. Esta academia es su legado más hermoso", declaró el director manchego.</p>

        <p>El proyecto incluye también un programa de intercambio con academias internacionales de Nueva York, Londres y Buenos Aires, así como masterclasses con profesionales de Hollywood. "Queremos que Málaga se convierta en un referente europeo de formación artística", ambiciona Banderas.</p>

        <p>Las clases comenzarán oficialmente en septiembre, y ya se trabaja en la primera producción estudiantil: una versión moderna de "La Casa de Bernarda Alba" que se estrenará en marzo de 2026. Un sueño que, después de años de preparación, finalmente se hace realidad.</p>
      `
    }
  };

  const article = articles[slug!] || articles['rosalia-alex-baena-nueva-pareja'];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {article.title}
              </h1>
            </div>
            
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Clara Morales</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} de lectura</span>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                126
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                23
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Subscribe CTA */}
          <div className="my-12">
            <SubscriptionForm 
              variant="article"
              title="¿Te ha gustado este artículo exclusivo?"
              description="Suscríbete para recibir contenido premium todas las semanas directamente en tu email"
            />
          </div>

          {/* Author bio */}
          <div className="bg-gradient-card rounded-lg p-6 shadow-card">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-hero rounded-full p-3">
                <User className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Clara Morales</h3>
                <p className="text-muted-foreground">
                  Periodista especializada en el mundo de las celebridades españolas con más de 10 años de experiencia. 
                  Sus exclusivas han aparecido en las principales revistas del corazón de España.
                </p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>Madrid, España</span>
                  <a href="https://instagram.com/claraceleb" className="text-primary hover:underline">
                    @claraceleb
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Article;