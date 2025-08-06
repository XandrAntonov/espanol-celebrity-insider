import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Users, Star, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionFormProps {
  variant?: 'hero' | 'sidebar' | 'article';
  title?: string;
  description?: string;
}

const SubscriptionForm = ({ 
  variant = 'hero', 
  title, 
  description 
}: SubscriptionFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate subscription process
    setTimeout(() => {
      toast({
        title: "¡Suscripción exitosa!",
        description: "Te hemos enviado un email de confirmación.",
      });
      setEmail('');
      setIsLoading(false);
      
      // Redirect to thank you page
      window.location.href = '/thank-you';
    }, 2000);
  };

  const defaultTitles = {
    hero: "¡Recibe las noticias más exclusivas!",
    sidebar: "Newsletter exclusivo",
    article: "¿Te gustó este artículo?"
  };

  const defaultDescriptions = {
    hero: "Suscríbete y sé el primero en conocer los secretos mejor guardados de las estrellas españolas",
    sidebar: "Noticias exclusivas cada semana",
    article: "Suscríbete para más contenido exclusivo"
  };

  const formTitle = title || defaultTitles[variant];
  const formDescription = description || defaultDescriptions[variant];

  if (variant === 'sidebar') {
    return (
      <Card className="shadow-card">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-cta p-2 rounded-full">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-semibold text-foreground">{formTitle}</h3>
            </div>
            
            <p className="text-sm text-muted-foreground">{formDescription}</p>
            
            <div className="flex items-center justify-center space-x-4 py-2">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">10K+</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">VIP</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="transition-smooth focus:ring-primary"
              />
              <Button 
                type="submit" 
                variant="cta" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? "Procesando..." : "¡Suscríbete!"}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center">
              Sin spam. Cancela cuando quieras.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'article') {
    return (
      <Card className="bg-gradient-card shadow-elegant">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <Zap className="h-8 w-8 text-primary mx-auto" />
            <h3 className="text-lg font-semibold text-foreground">{formTitle}</h3>
            <p className="text-muted-foreground">{formDescription}</p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-smooth focus:ring-primary"
                />
                <Button 
                  type="submit" 
                  variant="cta"
                  disabled={isLoading}
                >
                  {isLoading ? "..." : "¡Sí!"}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Hero variant
  return (
    <Card className="bg-gradient-card shadow-elegant">
      <CardContent className="p-8 text-center">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {formTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{formDescription}</p>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-xl font-bold text-foreground">10,000+</span>
              </div>
              <p className="text-sm text-muted-foreground">Suscriptores</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-xl font-bold text-foreground">VIP</span>
              </div>
              <p className="text-sm text-muted-foreground">Acceso exclusivo</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Introduce tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-lg py-3 transition-smooth focus:ring-primary"
              />
              <Button 
                type="submit" 
                variant="cta" 
                size="lg"
                disabled={isLoading}
                className="px-8"
              >
                {isLoading ? "Procesando..." : "¡Suscríbete!"}
              </Button>
            </div>
          </form>

          <p className="text-sm text-muted-foreground">
            Sin spam. Solo noticias exclusivas. Cancela cuando quieras.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriptionForm;