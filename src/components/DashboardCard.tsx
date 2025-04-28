
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  delay?: number;
  count?: number;
  description?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ 
  icon, 
  title, 
  link,
  delay = 0,
  count = 0,
  description = ''
}) => {
  const animationDelay = `${delay * 0.1}s`;
  
  return (
    <Link 
      to={link} 
      className="block"
      style={{ 
        opacity: 0,
        animation: `fade-in 0.5s ease-out ${animationDelay} forwards` 
      }}
    >
      <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <CardHeader className="relative z-10 flex flex-col items-center gap-4 pb-2">
          <div className="rounded-full bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
          <CardTitle className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-primary">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 text-center">
          {count > 0 && (
            <p className="text-2xl font-bold text-primary mb-1">{count}</p>
          )}
          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
