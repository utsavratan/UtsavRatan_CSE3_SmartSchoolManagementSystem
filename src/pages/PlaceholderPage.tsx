
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';
import { StudentDetails } from '@/components/sections/StudentDetails';
import { ExamDatesheet } from '@/components/sections/ExamDatesheet';
import { Results } from '@/components/sections/Results';
import { Fees } from '@/components/sections/Fees';
import { Assignments } from '@/components/sections/Assignments';
import { Timetable } from '@/components/sections/Timetable';
import { Holidays } from '@/components/sections/Holidays';
import { Attendance } from '@/components/sections/Attendance';
import { Chatbot } from '@/components/sections/chatbot';

const PlaceholderPage = () => {
  const { section } = useParams<{ section: string }>();
  const location = useLocation();
  const role = location.pathname.split('/')[1];
  
  const getPageTitle = () => {
    const path = location.pathname.split('/').pop();
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Unknown';
  };

  const renderSection = () => {
    switch(section) {
      case 'student-details':
        return <StudentDetails />;
      case 'exams':
        return <ExamDatesheet />;
      case 'results':
        return <Results />;
      case 'fees':
        return <Fees />;
      case 'assignments':
        return <Assignments />;
      case 'timetable':
        return <Timetable />;
      case 'holidays':
        return <Holidays />;
      case 'attendance':
        return <Attendance />;
      case 'chatbot':
        return <chatbot />;
      default:
        return (
          <div className="text-center">
            <h3 className="mt-4 text-lg font-semibold">
              {getPageTitle()} Content Coming Soon
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This section is under development.
            </p>
          </div>
        );
    }
  };
  
  return (
    <DashboardLayout userRole={role}>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">{getPageTitle()}</h2>
        </div>
        <div className="container mx-auto py-6">
          {renderSection()}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlaceholderPage;
