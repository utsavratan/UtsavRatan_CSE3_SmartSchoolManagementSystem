
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

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
  const animationDelay = `${delay * 0.05}s`;
  
  return (
    <Link 
      to={link} 
      className="block"
      style={{ 
        opacity: 0, 
        animation: `fade-in 0.3s ease-out ${animationDelay} forwards` 
      }}
    >
      <div className="dashboard-card">
        <div className="dashboard-card-icon">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      </div>
    </Link>
  );
};
