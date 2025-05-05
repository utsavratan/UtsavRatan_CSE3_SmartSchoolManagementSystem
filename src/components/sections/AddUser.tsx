
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
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";

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

interface AddUserProps {
  onAddStudent: (student: any) => void;
  onAddParent: (parent: any) => void;
  onAddTeacher: (teacher: any) => void;
}

export const AddUser = ({ onAddStudent, onAddParent, onAddTeacher }: AddUserProps) => {
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
    onAddStudent({
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
    const [firstName, lastName] = data.fatherName.split(' ');
    
    onAddParent({
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
    onAddTeacher({
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
              <FormField
                control={studentForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter student name" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={studentForm.control}
                name="rollNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roll Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter roll number (optional)" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={studentForm.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course</FormLabel>
                    <FormControl>
                      <Input placeholder="Science" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={studentForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="91-98XXXXXXXX" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={studentForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={studentForm.control}
                name="parentsName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parents' Names</FormLabel>
                    <FormControl>
                      <Input placeholder="Father & Mother Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button type="submit">Add Student</Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="parent">
            <form onSubmit={parentForm.handleSubmit(handleAddParent)} className="space-y-3">
              <FormField
                control={parentForm.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Child's Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter child's name" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={parentForm.control}
                name="fatherName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Father's Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter father's name" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={parentForm.control}
                name="motherName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mother's Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter mother's name" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={parentForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="91-98XXXXXXXX" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end">
                <Button type="submit">Add Parent</Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="teacher">
            <form onSubmit={teacherForm.handleSubmit(handleAddTeacher)} className="space-y-3">
              <FormField
                control={teacherForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter teacher name" required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={teacherForm.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualification *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ph.D., M.Tech., etc." required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={teacherForm.control}
                name="specialization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specialization</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject specialization" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={teacherForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="91-98XXXXXXXX" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={teacherForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              
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
