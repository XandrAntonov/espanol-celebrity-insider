import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User } from 'lucide-react';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category?: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  slug, 
  title, 
  excerpt, 
  image, 
  date, 
  readTime, 
  category,
  featured = false 
}: ArticleCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-smooth hover:shadow-elegant ${
      featured ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      <Link to={`/article/${slug}`}>
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className={`w-full object-cover transition-smooth group-hover:scale-105 ${
              featured ? 'h-48 md:h-64' : 'h-48'
            }`}
          />
          {category && (
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                {category}
              </span>
            </div>
          )}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                Destacado
              </span>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-3">
            <h3 className={`font-bold text-foreground group-hover:text-primary transition-smooth line-clamp-2 ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}>
              {title}
            </h3>
            
            <p className={`text-muted-foreground line-clamp-3 ${
              featured ? 'text-base' : 'text-sm'
            }`}>
              {excerpt}
            </p>
            
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{readTime}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <User className="h-3 w-3" />
                <span>Clara Morales</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ArticleCard;