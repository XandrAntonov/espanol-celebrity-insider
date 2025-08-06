import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookies-accepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in">
      <Card className="shadow-elegant bg-card/95 backdrop-blur-sm border border-border">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <Cookie className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-foreground mb-2">
                Uso de Cookies
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Utilizamos cookies para mejorar tu experiencia de navegación y analizar el tráfico. 
                Al continuar navegando, aceptas nuestro uso de cookies.{' '}
                <Link 
                  to="/cookies" 
                  className="text-primary hover:underline"
                >
                  Más información
                </Link>
              </p>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  onClick={acceptCookies}
                >
                  Aceptar todas
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={rejectCookies}
                >
                  Solo necesarias
                </Button>
                <Link to="/cookies">
                  <Button variant="ghost" size="sm">
                    Configurar
                  </Button>
                </Link>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={rejectCookies}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;