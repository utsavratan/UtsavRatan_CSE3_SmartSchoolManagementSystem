
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';

const PlaceholderPage = () => {
  const { role } = useParams<{ role: string }>();
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Unknown';
  };
  
  return (
    <DashboardLayout userRole={role || "student"}>
      <div className="flex min-h-[80vh] flex-col items-center justify-center text-center animate-fade-in">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {getPageTitle()} Module
          </h1>
          <p className="text-muted-foreground">
            This is a placeholder for the {getPageTitle()} module. 
            In the complete application, specific functionality for {getPageTitle().toLowerCase()} 
            would be implemented here.
          </p>
          <div className="rounded-md border border-dashed p-12">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-auto h-12 w-12 text-muted-foreground"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
              <h3 className="mt-4 text-lg font-semibold">
                {getPageTitle()} Content Coming Soon
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The complete {getPageTitle().toLowerCase()} module will be implemented in future updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlaceholderPage;
