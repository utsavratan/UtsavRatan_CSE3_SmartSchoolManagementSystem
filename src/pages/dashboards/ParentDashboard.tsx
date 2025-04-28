
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

const ParentDashboard = () => {
  return (
    <DashboardLayout userRole="parent">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Parent Dashboard</h2>
          <p className="text-muted-foreground">
            Monitor your child's academic progress
          </p>
        </div>
        
        <div className="dashboard-grid">
          <DashboardCard
            icon={<Users size={32} />}
            title="Children"
            link="/parent/children"
            delay={1}
            count={2}
            description="Enrolled"
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Results"
            link="/parent/results"
            delay={2}
            count={12}
            description="Total Subjects"
          />
          <DashboardCard
            icon={<FileText size={32} />}
            title="Fees"
            link="/parent/fees"
            delay={3}
            count={2}
            description="Pending Payments"
          />
          <DashboardCard
            icon={<Calendar size={32} />}
            title="Assignments"
            link="/parent/assignments"
            delay={4}
            count={8}
            description="Due This Week"
          />
          <DashboardCard
            icon={<Clock size={32} />}
            title="Attendance"
            link="/parent/attendance"
            delay={5}
            count={92}
            description="Average Attendance %"
          />
          <DashboardCard
            icon={<Calendar size={32} />}
            title="Holidays"
            link="/parent/holidays"
            delay={6}
            count={12}
            description="This Year"
          />
          <DashboardCard
            icon={<MessageSquare size={32} />}
            title="ChatBot"
            link="/parent/chat"
            delay={7}
            count={5}
            description="New Messages"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ParentDashboard;
