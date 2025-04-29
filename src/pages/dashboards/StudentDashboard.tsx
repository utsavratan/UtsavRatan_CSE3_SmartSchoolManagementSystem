
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardCard } from '@/components/DashboardCard';
import { 
  FileText, 
  Calendar, 
  Clock, 
  MessageSquare 
} from "lucide-react";

const StudentDashboard = () => {
  return (
    <DashboardLayout userRole="student">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
          <p className="text-muted-foreground">
            Access your academic information and resources
          </p>
        </div>
        
        <div className="dashboard-grid">
          <DashboardCard
            icon={<FileText size={32} />}
            title="Exams Datesheet"
            link="/student/exams"
            delay={1}
            count={6}
            description="Upcoming Exams"
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Results"
            link="/student/results"
            delay={2}
            count={6}
            description="Subjects"
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Fees"
            link="/student/fees"
            delay={3}
            count={3}
            description="Total Payments"
          />
          <DashboardCard
            icon={<Calendar size={32} />}
            title="Assignments"
            link="/student/assignments"
            delay={4}
            count={6}
            description="Total Assignmnets"
          />
          <DashboardCard
            icon={<Clock size={32} />}
            title="TimeTable"
            link="/student/timetable"
            delay={5}
            count={6}
            description="Classes Today"
          />
          <DashboardCard
            icon={<Calendar size={32} />}
            title="Holidays"
            link="/student/holidays"
            delay={6}
            count={45}
            description="This Year"
          />
          <DashboardCard
            icon={<Clock size={32} />}
            title="Attendance"
            link="/student/attendance"
            delay={7}
            count={95}
            description="Attendance %"
          />
          <DashboardCard
            icon={<MessageSquare size={32} />}
            title="ChatBot"
            link="/student/chat"
            delay={8}
            count={0}
            description="New Messages"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
