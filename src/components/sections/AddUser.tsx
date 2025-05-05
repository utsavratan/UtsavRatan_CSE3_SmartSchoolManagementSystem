
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { useData } from '@/context/DataContext';

interface StudentFormData {
  name: string;
  rollNo: string;
  course: string;
  phone: string;
  address: string;
  parentsName: string;
}

interface ParentFormData {
  childName: string;
  fatherName: string;
  motherName: string;
  phone: string;
}

interface TeacherFormData {
  name: string;
  qualification: string;
  specialization: string;
  phone: string;
  address: string;
}

export const AddUser = () => {
  const { addStudent, addParent, addTeacher } = useData();
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("student");
  
  const studentForm = useForm<StudentFormData>({
    defaultValues: {
      name: "",
      rollNo: "",
      course: "Science",
      phone: "",
      address: "",
      parentsName: "",
    },
  });
  
  const parentForm = useForm<ParentFormData>({
    defaultValues: {
      childName: "",
      fatherName: "",
      motherName: "",
      phone: "",
    },
  });
  
  const teacherForm = useForm<TeacherFormData>({
    defaultValues: {
      name: "",
      qualification: "",
      specialization: "",
      phone: "",
      address: "",
    },
  });

  const handleAddStudent = (data: StudentFormData) => {
    addStudent({
      name: data.name,
      rollNo: String(Math.max(16, Math.floor(Math.random() * 100))), // Generate roll number if not provided
      course: data.course || "Science",
      phone: data.phone || "91-98XXXXXXXX",
      address: data.address || "New Delhi, India",
      parentsName: data.parentsName,
    });
    
    toast({
      title: "Student Added",
      description: `${data.name} has been added successfully`,
    });
    
    studentForm.reset();
    setOpen(false);
  };

  const handleAddParent = (data: ParentFormData) => {
    addParent({
      childName: data.childName,
      fatherName: data.fatherName,
      motherName: data.motherName,
      phone: data.phone || "91-98XXXXXXXX",
    });
    
    toast({
      title: "Parent Added",
      description: `Parent for ${data.childName} has been added successfully`,
    });
    
    parentForm.reset();
    setOpen(false);
  };

  const handleAddTeacher = (data: TeacherFormData) => {
    addTeacher({
      name: data.name,
      qualification: data.qualification,
      specialization: data.specialization,
      phone: data.phone || "91-98XXXXXXXX",
      address: data.address || "Staff Housing, Campus",
    });
    
    toast({
      title: "Teacher Added",
      description: `${data.name} has been added successfully`,
    });
    
    teacherForm.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <UserPlus size={16} />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Add a new student, parent, or teacher to the system
          </DialogDescription>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="student">Student</TabsTrigger>
            <TabsTrigger value="parent">Parent</TabsTrigger>
            <TabsTrigger value="teacher">Teacher</TabsTrigger>
          </TabsList>
          
          <TabsContent value="student">
            <form onSubmit={studentForm.handleSubmit(handleAddStudent)} className="space-y-3">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="student-name">Full Name *</label>
                <Input
                  id="student-name"
                  placeholder="Enter student name"
                  required
                  {...studentForm.register("name")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="student-roll">Roll Number</label>
                <Input
                  id="student-roll"
                  placeholder="Enter roll number (optional)"
                  {...studentForm.register("rollNo")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="student-course">Course</label>
                <Input
                  id="student-course"
                  placeholder="Science"
                  {...studentForm.register("course")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="student-phone">Phone Number</label>
                <Input
                  id="student-phone"
                  placeholder="91-98XXXXXXXX"
                  {...studentForm.register("phone")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="student-address">Address</label>
                <Input
                  id="student-address"
                  placeholder="Enter address"
                  {...studentForm.register("address")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="student-parents">Parents' Names</label>
                <Input
                  id="student-parents"
                  placeholder="Father & Mother Name"
                  {...studentForm.register("parentsName")}
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit">Add Student</Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="parent">
            <form onSubmit={parentForm.handleSubmit(handleAddParent)} className="space-y-3">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="child-name">Child's Name *</label>
                <Input
                  id="child-name"
                  placeholder="Enter child's name"
                  required
                  {...parentForm.register("childName")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="father-name">Father's Name *</label>
                <Input
                  id="father-name"
                  placeholder="Enter father's name"
                  required
                  {...parentForm.register("fatherName")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="mother-name">Mother's Name *</label>
                <Input
                  id="mother-name"
                  placeholder="Enter mother's name"
                  required
                  {...parentForm.register("motherName")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="parent-phone">Phone Number</label>
                <Input
                  id="parent-phone"
                  placeholder="91-98XXXXXXXX"
                  {...parentForm.register("phone")}
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit">Add Parent</Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="teacher">
            <form onSubmit={teacherForm.handleSubmit(handleAddTeacher)} className="space-y-3">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="teacher-name">Full Name *</label>
                <Input
                  id="teacher-name"
                  placeholder="Enter teacher name"
                  required
                  {...teacherForm.register("name")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="qualification">Qualification *</label>
                <Input
                  id="qualification"
                  placeholder="Ph.D., M.Tech., etc."
                  required
                  {...teacherForm.register("qualification")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="specialization">Specialization</label>
                <Input
                  id="specialization"
                  placeholder="Subject specialization"
                  {...teacherForm.register("specialization")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="teacher-phone">Phone Number</label>
                <Input
                  id="teacher-phone"
                  placeholder="91-98XXXXXXXX"
                  {...teacherForm.register("phone")}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="teacher-address">Address</label>
                <Input
                  id="teacher-address"
                  placeholder="Enter address"
                  {...teacherForm.register("address")}
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit">Add Teacher</Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
