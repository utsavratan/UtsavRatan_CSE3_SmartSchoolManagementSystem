
import React, { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userRole }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userRole={userRole} />
      <div className="flex flex-1">
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
