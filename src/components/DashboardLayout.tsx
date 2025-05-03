
import React, { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from "lucide-react";
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userRole }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar userRole={userRole} />
      <div className="flex flex-1">
        {/* Mobile Sidebar */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="flex md:hidden ml-2 mt-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar userRole={userRole} />
          </SheetContent>
        </Sheet>
        
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar userRole={userRole} />
        </div>
        
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
