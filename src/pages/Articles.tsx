import ArticleCard from '@/components/ArticleCard';
import SubscriptionForm from '@/components/SubscriptionForm';
import rosaliaImage from '@/assets/rosalia-portrait.jpg';
import penelopeImage from '@/assets/penelope-cruz-venice.jpg';
import enriqueImage from '@/assets/enrique-iglesias-concert.jpg';
import esterImage from '@/assets/ester-exposito-fashion.jpg';
import antonioImage from '@/assets/antonio-banderas-theater.jpg';

const Articles = () => {
  const articles = [
    {
      slug: 'rosalia-alex-baena-nueva-pareja',
      title: 'Nueva pareja: Rosalía y el futbolista Álex Baena - ¿Amor real o estrategia de marketing?',
      excerpt: 'Las redes sociales se han vuelto locas tras las imágenes exclusivas que revelan una posible relación entre la cantante catalana y el jugador del Villarreal.',
      image: rosaliaImage,
      date: '15 Ago 2025',
      readTime: '4 min',
      category: 'Parejas'
    },
    {
      slug: 'penelope-cruz-venecia-2025',
      title: 'Penélope Cruz deslumbra en Venecia: Su nueva película y el momento más emotivo en la alfombra roja',
      excerpt: 'La actriz española vuelve a ser protagonista en el Festival de Cine de Venecia con una actuación que ya suena a Oscar.',
      image: penelopeImage,
      date: '14 Ago 2025',
      readTime: '5 min',
      category: 'Cine'
    },
    {
      slug: 'enrique-iglesias-nuevo-album-2025',
      title: 'Enrique Iglesias regresa con fuerza: Su nuevo álbum revoluciona el panorama musical',
      excerpt: 'Después de tres años de silencio, el Rey del Pop Latino presenta su trabajo más personal y arriesgado hasta la fecha.',
      image: enriqueImage,
      date: '13 Ago 2025',
      readTime: '6 min',
      category: 'Música'
    },
    {
      slug: 'ester-exposito-icono-estilo-espana',
      title: 'Ester Expósito: Cómo se convirtió en el icono de estilo más influyente de España',
      excerpt: 'Analizamos el fenómeno de moda que ha conquistado no solo España, sino el mundo entero con su estilo único.',
      image: esterImage,
      date: '12 Ago 2025',
      readTime: '7 min',
      category: 'Moda'
    },
    {
      slug: 'antonio-banderas-academia-teatro-malaga',
      title: 'Antonio Banderas abre las puertas de su academia teatral en Málaga: "Un sueño hecho realidad"',
      excerpt: 'El actor malagueño inaugura oficialmente su proyecto más ambicioso: formar a la próxima generación de artistas españoles.',
      image: antonioImage,
      date: '11 Ago 2025',
      readTime: '5 min',
      category: 'Teatro'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Todos los Artículos
              </h1>
              <p className="text-lg text-muted-foreground">
                Las últimas noticias y exclusivas del mundo de las celebridades españolas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} {...article} />
              ))}
            </div>

            {/* Load more button */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                ¿Quieres acceder a más artículos exclusivos?
              </p>
              <SubscriptionForm 
                variant="article"
                title="Suscríbete para contenido VIP"
                description="Accede a artículos exclusivos, análisis profundos y contenido que no encontrarás en ningún otro lugar"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <SubscriptionForm variant="sidebar" />
              
              {/* Categories */}
              <div className="bg-card rounded-lg p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-4">Categorías</h3>
                <div className="space-y-2">
                  {['Parejas', 'Cine', 'Música', 'Moda', 'Teatro', 'Televisión'].map((category) => (
                    <button 
                      key={category}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-smooth py-1"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular this week */}
              <div className="bg-card rounded-lg p-6 shadow-card">
                <h3 className="font-semibold text-foreground mb-4">Popular esta semana</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <a href="#" className="text-foreground hover:text-primary transition-smooth line-clamp-2">
                      Los secretos del éxito de Rosalía en Estados Unidos
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">5.2K lecturas</p>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-foreground hover:text-primary transition-smooth line-clamp-2">
                      ¿Qué celebrities españolas estarán en los Oscar 2026?
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">4.8K lecturas</p>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-foreground hover:text-primary transition-smooth line-clamp-2">
                      La nueva generación de actores españoles que conquista Hollywood
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">4.1K lecturas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Articles;