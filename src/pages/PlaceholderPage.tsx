import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';
import { ExamDatesheet } from '@/components/sections/ExamDatesheet';
import { Results } from '@/components/sections/Results';
import { Fees } from '@/components/sections/Fees';
import { Assignments } from '@/components/sections/Assignments';
import { Timetable } from '@/components/sections/Timetable';
import { Holidays } from '@/components/sections/Holidays';

type SectionComponentKey = 'exams' | 'results' | 'fees' | 'assignments' | 'timetable' | 'holidays';

const SECTION_COMPONENTS: Record<SectionComponentKey, React.ComponentType> = {
  exams: ExamDatesheet,
  results: Results,
  fees: Fees,
  assignments: Assignments,
  timetable: Timetable,
  holidays: Holidays,
} as const;

const PlaceholderPage: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const location = useLocation();
  const role = location.pathname.split('/')[1];
  
  const getPageTitle = (): string => {
    const path = location.pathname.split('/').pop();
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Unknown';
  };

  const renderSection = (): JSX.Element => {
    if (section && section in SECTION_COMPONENTS) {
      const Component = SECTION_COMPONENTS[section as SectionComponentKey];
      return <Component />;
    }

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
