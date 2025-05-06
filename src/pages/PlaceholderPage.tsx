
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
import Chatbot from '@/components/sections/Chatbot';
import { StudentDetailsTable } from '@/components/sections/StudentDetailsTable';
import { ParentsDetailsTable } from '@/components/sections/ParentsDetailsTable';
import { TeachersDetailsTable } from '@/components/sections/TeachersDetailsTable';
import { AddAssignmentForm } from '@/components/sections/AddAssignmentForm';
import { AddDatesheetForm } from '@/components/sections/AddDatesheetForm';
import { AddResultForm } from '@/components/sections/AddResultForm';
import { DataProvider } from '@/context/DataContext';

const PlaceholderPage = () => {
  const { section } = useParams<{ section: string }>();
  const location = useLocation();
  const role = location.pathname.split('/')[1];
  
  console.log(`Rendering PlaceholderPage with section: ${section}, role: ${role}`);
  
  const getPageTitle = () => {
    switch(section) {
      case 'student-details':
      case 'students':
        return 'Student Details';
      case 'exams':
        return 'Exams Datesheet';
      case 'results':
        return 'Results';
      case 'fees':
        return 'Fees';
      case 'assignments':
        return 'Assignments';
      case 'timetable':
        return 'Timetable';
      case 'holidays':
        return 'Holidays';
      case 'attendance':
        return 'Attendance';
      case 'chatbot':
        return 'Chatbot';
      case 'chat':
        return 'Chatbot';
      case 'parents':
        return 'Parents Details';
      case 'teachers':
        return 'Teachers Details';
      case 'add-assignment':
        return 'Add Assignment';
      case 'add-datesheet':
        return 'Add Datesheet';
      case 'add-result':
        return 'Add Result';
      default:
        return section ? section.charAt(0).toUpperCase() + section.slice(1) : 'Unknown';
    }
  };

  // Always wrap the content in DataProvider to ensure data is available
  const renderSection = () => {
    switch(section) {
      case 'student-details':
        return <StudentDetails />;
      case 'students':
        return <StudentDetailsTable />;
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
      case 'chat':
        return <Chatbot />;
      case 'parents':
        return <ParentsDetailsTable />;
      case 'teachers':
        return <TeachersDetailsTable />;
      case 'add-assignment':
        return <AddAssignmentForm />;
      case 'add-datesheet':
        return <AddDatesheetForm />;
      case 'add-result':
        return <AddResultForm />;
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
      <DataProvider>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-bold tracking-tight">{getPageTitle()}</h2>
          </div>
          {renderSection()}
        </div>
      </DataProvider>
    </DashboardLayout>
  );
};

export default PlaceholderPage;
