
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for our data
interface Student {
  name: string;
  rollNo: string;
  course: string;
  phone: string;
  address: string;
  parentsName: string;
}

interface Parent {
  childName: string;
  fatherName: string;
  motherName: string;
  phone: string;
}

interface Teacher {
  name: string;
  qualification: string;
  specialization: string;
  phone: string;
  address: string;
}

interface DataContextType {
  students: Student[];
  parents: Parent[];
  teachers: Teacher[];
  addStudent: (student: Student) => void;
  addParent: (parent: Parent) => void;
  addTeacher: (teacher: Teacher) => void;
}

// Create the context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Initial data
const initialStudents: Student[] = [
  { name: "Utsav Ratan", rollNo: "1", course: "Science", phone: "91-98XXXXXXXX", address: "123 Park Street, Delhi", parentsName: "Rajeev & Priyanka Kumar" },
  { name: "Rahul Kapoor", rollNo: "2", course: "Science", phone: "91-98XXXXXXXX", address: "456 Lake Road, Delhi", parentsName: "Vikram & Meera Kapoor" },
  { name: "Priya Singh", rollNo: "3", course: "Science", phone: "91-98XXXXXXXX", address: "789 Hill Avenue, Delhi", parentsName: "Ajay & Sunita Singh" },
  { name: "Arjun Patel", rollNo: "4", course: "Science", phone: "91-98XXXXXXXX", address: "101 River Lane, Delhi", parentsName: "Nikhil & Anjali Patel" },
  { name: "Neha Gupta", rollNo: "5", course: "Science", phone: "91-98XXXXXXXX", address: "202 Valley Drive, Delhi", parentsName: "Sanjay & Pooja Gupta" },
  { name: "Vikram Malhotra", rollNo: "6", course: "Science", phone: "91-98XXXXXXXX", address: "303 Mountain View, Delhi", parentsName: "Raj & Anita Malhotra" },
  { name: "Ananya Reddy", rollNo: "7", course: "Science", phone: "91-98XXXXXXXX", address: "404 Beach Road, Delhi", parentsName: "Krishna & Lakshmi Reddy" },
  { name: "Rohan Joshi", rollNo: "8", course: "Science", phone: "91-98XXXXXXXX", address: "505 Forest Path, Delhi", parentsName: "Mohan & Radha Joshi" },
  { name: "Meera Choudhary", rollNo: "9", course: "Science", phone: "91-98XXXXXXXX", address: "606 Garden Street, Delhi", parentsName: "Suresh & Geeta Choudhary" },
  { name: "Karan Mehta", rollNo: "10", course: "Science", phone: "91-98XXXXXXXX", address: "707 Sky Avenue, Delhi", parentsName: "Dinesh & Kavita Mehta" },
  { name: "Divya Sharma", rollNo: "11", course: "Science", phone: "91-98XXXXXXXX", address: "808 Star Road, Delhi", parentsName: "Rajesh & Sunita Sharma" },
  { name: "Sanjay Kumar", rollNo: "12", course: "Science", phone: "91-98XXXXXXXX", address: "909 Moon Lane, Delhi", parentsName: "Vinod & Radha Kumar" },
  { name: "Pooja Verma", rollNo: "13", course: "Science", phone: "91-98XXXXXXXX", address: "110 Sun Street, Delhi", parentsName: "Rakesh & Neeta Verma" },
  { name: "Rajat Khanna", rollNo: "14", course: "Science", phone: "91-98XXXXXXXX", address: "211 Cloud Drive, Delhi", parentsName: "Vikash & Seema Khanna" },
  { name: "Anjali Desai", rollNo: "15", course: "Science", phone: "91-98XXXXXXXX", address: "312 Rain Avenue, Delhi", parentsName: "Prakash & Meena Desai" },
];

const initialParents: Parent[] = [
  { childName: "Utsav Ratan", fatherName: "Rajeev Kumar", motherName: "Priyanka Kumari", phone: "91-98XXXXXXXX" },
  { childName: "Rahul Kapoor", fatherName: "Vikram Kapoor", motherName: "Meera Kapoor", phone: "91-98XXXXXXXX" },
  { childName: "Priya Singh", fatherName: "Ajay Singh", motherName: "Sunita Singh", phone: "91-98XXXXXXXX" },
  { childName: "Arjun Patel", fatherName: "Nikhil Patel", motherName: "Anjali Patel", phone: "91-98XXXXXXXX" },
  { childName: "Neha Gupta", fatherName: "Sanjay Gupta", motherName: "Pooja Gupta", phone: "91-98XXXXXXXX" },
  { childName: "Vikram Malhotra", fatherName: "Raj Malhotra", motherName: "Anita Malhotra", phone: "91-98XXXXXXXX" },
  { childName: "Ananya Reddy", fatherName: "Krishna Reddy", motherName: "Lakshmi Reddy", phone: "91-98XXXXXXXX" },
  { childName: "Rohan Joshi", fatherName: "Mohan Joshi", motherName: "Radha Joshi", phone: "91-98XXXXXXXX" },
  { childName: "Meera Choudhary", fatherName: "Suresh Choudhary", motherName: "Geeta Choudhary", phone: "91-98XXXXXXXX" },
  { childName: "Karan Mehta", fatherName: "Dinesh Mehta", motherName: "Kavita Mehta", phone: "91-98XXXXXXXX" },
  { childName: "Divya Sharma", fatherName: "Rajesh Sharma", motherName: "Sunita Sharma", phone: "91-98XXXXXXXX" },
  { childName: "Sanjay Kumar", fatherName: "Vinod Kumar", motherName: "Radha Kumar", phone: "91-98XXXXXXXX" },
  { childName: "Pooja Verma", fatherName: "Rakesh Verma", motherName: "Neeta Verma", phone: "91-98XXXXXXXX" },
  { childName: "Rajat Khanna", fatherName: "Vikash Khanna", motherName: "Seema Khanna", phone: "91-98XXXXXXXX" },
  { childName: "Anjali Desai", fatherName: "Prakash Desai", motherName: "Meena Desai", phone: "91-98XXXXXXXX" },
];

const initialTeachers: Teacher[] = [
  { name: "Dr. Pankaj Sharma", qualification: "Ph.D in Mathematics", specialization: "Calculus, Linear Algebra", phone: "91-98XXXXXXXX", address: "123 Faculty Housing, Delhi" },
  { name: "Prof. Rupesh Kumar", qualification: "M.Tech, Computer Science", specialization: "Data Structures, Algorithms", phone: "91-98XXXXXXXX", address: "456 Teacher Colony, Mumbai" },
  { name: "Dr. Mayank Singh", qualification: "Ph.D in English Literature", specialization: "Modern Poetry, Creative Writing", phone: "91-98XXXXXXXX", address: "789 Professor Lane, Bangalore" },
  { name: "Prof. Rahul Gupta", qualification: "M.Sc in Physics", specialization: "Quantum Mechanics, Optics", phone: "91-98XXXXXXXX", address: "101 Science Block, Chennai" },
  { name: "Dr. Anita Verma", qualification: "Ph.D in Chemistry", specialization: "Organic Chemistry, Biochemistry", phone: "91-98XXXXXXXX", address: "202 Research Park, Hyderabad" },
  { name: "Prof. Sunita Reddy", qualification: "M.A in Economics", specialization: "Macroeconomics, Public Finance", phone: "91-98XXXXXXXX", address: "303 Scholar Avenue, Pune" },
  { name: "Dr. Vikram Malhotra", qualification: "Ph.D in History", specialization: "Ancient India, World History", phone: "91-98XXXXXXXX", address: "404 Heritage Lane, Jaipur" },
  { name: "Prof. Meena Patel", qualification: "M.Sc in Biology", specialization: "Molecular Biology, Genetics", phone: "91-98XXXXXXXX", address: "505 Life Science Park, Ahmedabad" },
  { name: "Dr. Rajesh Khanna", qualification: "Ph.D in Psychology", specialization: "Clinical Psychology, Child Development", phone: "91-98XXXXXXXX", address: "606 Mind Center, Kolkata" },
  { name: "Prof. Seema Choudhary", qualification: "M.Tech in Electronics", specialization: "Digital Systems, Microprocessors", phone: "91-98XXXXXXXX", address: "707 Tech Tower, Lucknow" },
];

// Create the provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [parents, setParents] = useState<Parent[]>(initialParents);
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);

  const addStudent = (student: Student) => {
    setStudents((prev) => [...prev, student]);
  };

  const addParent = (parent: Parent) => {
    setParents((prev) => [...prev, parent]);
  };

  const addTeacher = (teacher: Teacher) => {
    setTeachers((prev) => [...prev, teacher]);
  };

  return (
    <DataContext.Provider value={{
      students,
      parents,
      teachers,
      addStudent,
      addParent,
      addTeacher,
    }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a hook for using the context
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
