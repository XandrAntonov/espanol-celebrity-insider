import SubscriptionForm from '@/components/SubscriptionForm';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { Star, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';
import rosaliaImage from '@/assets/rosalia-portrait.jpg';
import penelopeImage from '@/assets/penelope-cruz-venice.jpg';
import enriqueImage from '@/assets/enrique-iglesias-concert.jpg';

const Index = () => {
  const featuredArticles = [
    {
      slug: 'rosalia-alex-baena-nueva-pareja',
      title: 'Nueva pareja: Rosalía y el futbolista Álex Baena - ¿Amor real o estrategia de marketing?',
      excerpt: 'Las redes sociales se han vuelto locas tras las imágenes exclusivas que revelan una posible relación entre la cantante catalana y el jugador del Villarreal.',
      image: rosaliaImage,
      date: '15 Ago 2025',
      readTime: '4 min',
      category: 'Parejas',
      featured: true
    },
    {
      slug: 'penelope-cruz-venecia-2025',
      title: 'Penélope Cruz deslumbra en Venecia con su nueva película',
      excerpt: 'La actriz española vuelve a ser protagonista en el Festival de Cine de Venecia con una actuación que ya suena a Oscar.',
      image: penelopeImage,
      date: '14 Ago 2025',
      readTime: '5 min',
      category: 'Cine'
    },
    {
      slug: 'enrique-iglesias-nuevo-album-2025',
      title: 'Enrique Iglesias regresa con su nuevo álbum revolucionario',
      excerpt: 'Después de tres años de silencio, el Rey del Pop Latino presenta su trabajo más personal y arriesgado.',
      image: enriqueImage,
      date: '13 Ago 2025',
      readTime: '6 min',
      category: 'Música'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute inset-0">
          <img src={heroBackground} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Exclusivas verificadas</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Las <span className="text-primary">mejores exclusivas</span> del mundo celebrity español
                </h1>
                <p className="text-xl text-muted-foreground">
                  Suscríbete a mi newsletter y recibe cada semana las noticias más candentes, 
                  análisis profundos y secretos que no encontrarás en ningún otro lugar.
                </p>
              </div>
              
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">10,000+</div>
                  <div className="text-sm text-muted-foreground">Suscriptores VIP</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Exclusivas publicadas</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/subscription">
                  <Button variant="cta" size="lg" className="w-full sm:w-auto">
                    <Zap className="h-5 w-5 mr-2" />
                    ¡Suscríbete Gratis!
                  </Button>
                </Link>
                <Link to="/articles">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Ver artículos
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <SubscriptionForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Últimas Exclusivas
          </h2>
          <p className="text-lg text-muted-foreground">
            Las noticias más candentes del mundo celebrity español
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/articles">
            <Button variant="outline" size="lg">
              Ver todos los artículos
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-card py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SubscriptionForm 
            variant="hero"
            title="¿Listo para las mejores exclusivas?"
            description="Únete a más de 10,000 lectores que ya reciben contenido VIP cada semana"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;
