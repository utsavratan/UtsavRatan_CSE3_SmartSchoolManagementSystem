
import React from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { DashboardCard } from '@/components/DashboardCard';
import { DataProvider, useData } from '@/context/DataContext';
import { AddUser } from '@/components/sections/AddUser';
import { 
  Users, 
  FileText, 
  Calendar, 
  Clock, 
  MessageSquare 
} from "lucide-react";

const AdminDashboardContent = () => {
  const { addStudent, addParent, addTeacher } = useData();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
        <div className="flex items-center mt-4 md:mt-0">
          <p className="text-muted-foreground mr-4">
            Manage your school's digital ecosystem
          </p>
          <AddUser 
            onAddStudent={addStudent}
            onAddParent={addParent}
            onAddTeacher={addTeacher}
          />
        </div>
      </div>
      
      <div className="dashboard-grid">
        <DashboardCard
          icon={<Users size={32} />}
          title="Student Details"
          link="/admin/students"
          delay={1}
          count={15}
          description="Total Students"
        />
        <DashboardCard
          icon={<Users size={32} />}
          title="Parents Details"
          link="/admin/parents"
          delay={2}
          count={15}
          description="Total Parents"
        />
        <DashboardCard
          icon={<Users size={32} />}
          title="Teachers Details"
          link="/admin/teachers"
          delay={3}
          count={10}
          description="Total Faculty"
        />
        <DashboardCard
          icon={<Calendar size={32} />}
          title="Holidays"
          link="/admin/holidays"
          delay={4}
          count={45}
          description="This Year"
        />
        <DashboardCard
          icon={<FileText size={32} />}
          title="Exams Datesheet"
          link="/admin/exams"
          delay={5}
          count={6}
          description="Upcoming Exams"
        />
        <DashboardCard
          icon={<FileText size={32} />}
          title="Results"
          link="/admin/results"
          delay={6}
          count={6}
          description="Classes Published"
        />
        <DashboardCard
          icon={<FileText size={32} />}
          title="Fees"
          link="/admin/fees"
          delay={7}
          count={3}
          description="Total Payment Complete"
        />
        <DashboardCard
          icon={<Calendar size={32} />}
          title="Assignments"
          link="/admin/assignments"
          delay={8}
          count={6}
          description="This Week"
        />
        <DashboardCard
          icon={<Clock size={32} />}
          title="TimeTable"
          link="/admin/timetable"
          delay={9}
          count={4}
          description="Classes Per Day"
        />
        <DashboardCard
          icon={<MessageSquare size={32} />}
          title="ChatBot"
          link="/admin/chat"
          delay={10}
          count={0}
          description="Active Chats"
        />
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <DashboardLayout userRole="admin">
      <DataProvider>
        <AdminDashboardContent />
      </DataProvider>
    </DashboardLayout>
  );
};

export default AdminDashboard;
