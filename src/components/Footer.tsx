import { Link } from 'react-router-dom';
import { Mail, Instagram, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-full">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Clara Celeb</h3>
                <p className="text-xs text-muted-foreground">Noticias exclusivas</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Las noticias más exclusivas del mundo de las celebridades españolas, 
              directamente en tu inbox.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Navegación</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Inicio
              </Link>
              <Link to="/articles" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Artículos
              </Link>
              <Link to="/subscription" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Suscripción
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Sobre Clara
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Política de Privacidad
              </Link>
              <Link to="/cookies" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Política de Cookies
              </Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Términos de Uso
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:contacto@claraceleb.es" 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  contacto@claraceleb.es
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="tel:+34644123456" 
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  +34 644 123 456
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Madrid, España
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="https://instagram.com/claraceleb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  @claraceleb
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Clara Celeb. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;