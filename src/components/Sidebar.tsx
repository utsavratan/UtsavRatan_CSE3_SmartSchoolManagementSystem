
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  FileText, 
  Clock, 
  MessageSquare 
} from "lucide-react";

interface SidebarProps {
  userRole: string;
}

interface SidebarLink {
  icon: React.ElementType;
  label: string;
  href: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const location = useLocation();
  
  const adminLinks: SidebarLink[] = [
    { icon: Users, label: "Students", href: "/admin/students" },
    { icon: Users, label: "Parents", href: "/admin/parents" },
    { icon: Users, label: "Teachers", href: "/admin/teachers" },
    { icon: FileText, label: "Exams", href: "/admin/exams" },
    { icon: FileText, label: "Results", href: "/admin/results" },
    { icon: FileText, label: "Fees", href: "/admin/fees" },
    { icon: Calendar, label: "Assignments", href: "/admin/assignments" },
    { icon: Clock, label: "Attendance", href: "/admin/attendance" },
    { icon: Calendar, label: "Holidays", href: "/admin/holidays" },
    { icon: MessageSquare, label: "Chat", href: "/admin/chat" },
  ];
  
  const teacherLinks: SidebarLink[] = [
    { icon: Users, label: "Students", href: "/teacher/students" },
    { icon: FileText, label: "Exams", href: "/teacher/exams" },
    { icon: FileText, label: "Results", href: "/teacher/results" },
    { icon: Calendar, label: "Assignments", href: "/teacher/assignments" },
    { icon: Clock, label: "Attendance", href: "/teacher/attendance" },
    { icon: MessageSquare, label: "Chat", href: "/teacher/chat" },
  ];
  
  const studentLinks: SidebarLink[] = [
    { icon: FileText, label: "Exams", href: "/student/exams" },
    { icon: FileText, label: "Results", href: "/student/results" },
    { icon: FileText, label: "Fees", href: "/student/fees" },
    { icon: Calendar, label: "Assignments", href: "/student/assignments" },
    { icon: Clock, label: "Attendance", href: "/student/attendance" },
    { icon: Calendar, label: "Holidays", href: "/student/holidays" },
    { icon: MessageSquare, label: "Chat", href: "/student/chat" },
  ];
  
  const parentLinks: SidebarLink[] = [
    { icon: Users, label: "Children", href: "/parent/children" },
    { icon: FileText, label: "Results", href: "/parent/results" },
    { icon: FileText, label: "Fees", href: "/parent/fees" },
    { icon: Calendar, label: "Assignments", href: "/parent/assignments" },
    { icon: Clock, label: "Attendance", href: "/parent/attendance" },
    { icon: Calendar, label: "Holidays", href: "/parent/holidays" },
    { icon: MessageSquare, label: "Chat", href: "/parent/chat" },
  ];
  
  let links: SidebarLink[] = [];
  
  switch(userRole) {
    case 'admin':
      links = adminLinks;
      break;
    case 'teacher':
      links = teacherLinks;
      break;
    case 'student':
      links = studentLinks;
      break;
    case 'parent':
      links = parentLinks;
      break;
    default:
      links = [];
  }
  
  return (
    <div className="w-64 bg-sidebar h-screen flex flex-col border-r">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-lg font-semibold text-white">Navigation</h2>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          <Link 
            to={`/${userRole}/dashboard`} 
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-white/10 ${
              location.pathname === `/${userRole}/dashboard` ? "bg-white/10" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-white"
            >
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            <span className="text-white">Dashboard</span>
          </Link>
          
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-white/10 ${
                location.pathname === link.href ? "bg-white/10" : ""
              }`}
            >
              <link.icon className="h-4 w-4 text-white" />
              <span className="text-white">{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
