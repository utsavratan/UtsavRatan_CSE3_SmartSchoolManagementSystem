
import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  delay?: number;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ 
  icon, 
  title, 
  link,
  delay = 0 
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
      <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="rounded-full bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-primary">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
