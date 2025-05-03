
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

interface NavbarProps {
  userRole?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ userRole }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, handle logout logic here
    navigate("/login");
  };

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to={userRole ? `/${userRole}/dashboard` : "/"} className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-bold">
              Edu<span className="text-edutrack">Track</span>
            </h1>
          </Link>
        </div>
        
        {userRole && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:inline-block capitalize">
              {userRole} Dashboard
            </span>
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="bg-edutrack hover:bg-edutrack/90 text-white px-4 py-2 rounded-md flex items-center"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
