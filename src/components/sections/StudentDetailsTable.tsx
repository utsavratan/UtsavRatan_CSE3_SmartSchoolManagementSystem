
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const StudentDetailsTable = () => {
  // Generate 15 random students data
  const students = [
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

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Roll Number</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Parents' Names</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.rollNo}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student.parentsName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
