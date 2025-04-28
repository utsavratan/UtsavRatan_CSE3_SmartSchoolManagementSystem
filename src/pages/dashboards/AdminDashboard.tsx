
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

const AdminDashboard = () => {
  return (
    <DashboardLayout userRole="admin">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <p className="text-muted-foreground">
            Manage your school's digital ecosystem
          </p>
        </div>
        
        <div className="dashboard-grid">
          <DashboardCard
            icon={<Users size={32} />}
            title="Student Details"
            link="/admin/students"
            delay={1}
          />
          <DashboardCard
            icon={<Users size={32} />}
            title="Parents Details"
            link="/admin/parents"
            delay={2}
          />
          <DashboardCard
            icon={<Calendar size={32} />}
            title="Holidays"
            link="/admin/holidays"
            delay={3}
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Exams Datesheet"
            link="/admin/exams"
            delay={4}
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Results"
            link="/admin/results"
            delay={5}
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Fees"
            link="/admin/fees"
            delay={6}
          />
          <DashboardCard
            icon={<Calendar size={32} />}
            title="Assignments"
            link="/admin/assignments"
            delay={7}
          />
          <DashboardCard
            icon={<Clock size={32} />}
            title="TimeTable"
            link="/admin/timetable"
            delay={8}
          />
          <DashboardCard
            icon={<MessageSquare size={32} />}
            title="ChatBot"
            link="/admin/chat"
            delay={9}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
