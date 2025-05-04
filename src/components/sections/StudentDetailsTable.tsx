
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const StudentDetailsTable = () => {
  // Generate 15 random students data
  const students = [
    { name: "Aisha Sharma", rollNo: "2023001", course: "Science", phone: "91-9876543210", address: "123 Park Street, Delhi", parentsName: "Rahul & Priya Sharma" },
    { name: "Rahul Kapoor", rollNo: "2023002", course: "Commerce", phone: "91-9876543211", address: "456 Lake Road, Mumbai", parentsName: "Vikram & Meera Kapoor" },
    { name: "Priya Singh", rollNo: "2023003", course: "Arts", phone: "91-9876543212", address: "789 Hill Avenue, Bangalore", parentsName: "Ajay & Sunita Singh" },
    { name: "Arjun Patel", rollNo: "2023004", course: "Science", phone: "91-9876543213", address: "101 River Lane, Ahmedabad", parentsName: "Nikhil & Anjali Patel" },
    { name: "Neha Gupta", rollNo: "2023005", course: "Commerce", phone: "91-9876543214", address: "202 Valley Drive, Jaipur", parentsName: "Sanjay & Pooja Gupta" },
    { name: "Vikram Malhotra", rollNo: "2023006", course: "Science", phone: "91-9876543215", address: "303 Mountain View, Chennai", parentsName: "Raj & Anita Malhotra" },
    { name: "Ananya Reddy", rollNo: "2023007", course: "Arts", phone: "91-9876543216", address: "404 Beach Road, Hyderabad", parentsName: "Krishna & Lakshmi Reddy" },
    { name: "Rohan Joshi", rollNo: "2023008", course: "Science", phone: "91-9876543217", address: "505 Forest Path, Pune", parentsName: "Mohan & Radha Joshi" },
    { name: "Meera Choudhary", rollNo: "2023009", course: "Commerce", phone: "91-9876543218", address: "606 Garden Street, Kolkata", parentsName: "Suresh & Geeta Choudhary" },
    { name: "Karan Mehta", rollNo: "2023010", course: "Arts", phone: "91-9876543219", address: "707 Sky Avenue, Lucknow", parentsName: "Dinesh & Kavita Mehta" },
    { name: "Divya Sharma", rollNo: "2023011", course: "Science", phone: "91-9876543220", address: "808 Star Road, Chandigarh", parentsName: "Rajesh & Sunita Sharma" },
    { name: "Sanjay Kumar", rollNo: "2023012", course: "Commerce", phone: "91-9876543221", address: "909 Moon Lane, Bhopal", parentsName: "Vinod & Radha Kumar" },
    { name: "Pooja Verma", rollNo: "2023013", course: "Arts", phone: "91-9876543222", address: "110 Sun Street, Indore", parentsName: "Rakesh & Neeta Verma" },
    { name: "Rajat Khanna", rollNo: "2023014", course: "Science", phone: "91-9876543223", address: "211 Cloud Drive, Nagpur", parentsName: "Vikash & Seema Khanna" },
    { name: "Anjali Desai", rollNo: "2023015", course: "Commerce", phone: "91-9876543224", address: "312 Rain Avenue, Surat", parentsName: "Prakash & Meena Desai" },
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
