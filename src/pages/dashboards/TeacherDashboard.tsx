
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardCard } from '@/components/DashboardCard';
import { 
  Users, 
  FileText, 
  Calendar, 
  Clock, 
  MessageSquare 
} from "lucide-react";

const TeacherDashboard = () => {
  return (
    <DashboardLayout userRole="teacher">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
          <p className="text-muted-foreground">
            Manage your classes and student information
          </p>
        </div>
        
        <div className="dashboard-grid">
          <DashboardCard
            icon={<Users size={32} />}
            title="Student Details"
            link="/teacher/students"
            delay={1}
          />
          <DashboardCard
            icon={<Clock size={32} />}
            title="Attendance"
            link="/teacher/attendance"
            delay={2}
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Exams Datesheet"
            link="/teacher/exams"
            delay={3}
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Results"
            link="/teacher/results"
            delay={4}
          />
          <DashboardCard
            icon={<Calendar size={32} />}
            title="Assignments"
            link="/teacher/assignments"
            delay={5}
          />
          <DashboardCard
            icon={<Clock size={32} />}
            title="TimeTable"
            link="/teacher/timetable"
            delay={6}
          />
          <DashboardCard
            icon={<MessageSquare size={32} />}
            title="ChatBot"
            link="/teacher/chat"
            delay={7}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
