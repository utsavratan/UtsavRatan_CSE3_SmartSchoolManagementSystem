
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const ParentsDetailsTable = () => {
  // Generate 15 random parents data
  const parents = [
    { childName: "Aisha Sharma", fatherName: "Rahul Sharma", motherName: "Priya Sharma", phone: "91-9876543210" },
    { childName: "Rahul Kapoor", fatherName: "Vikram Kapoor", motherName: "Meera Kapoor", phone: "91-9876543211" },
    { childName: "Priya Singh", fatherName: "Ajay Singh", motherName: "Sunita Singh", phone: "91-9876543212" },
    { childName: "Arjun Patel", fatherName: "Nikhil Patel", motherName: "Anjali Patel", phone: "91-9876543213" },
    { childName: "Neha Gupta", fatherName: "Sanjay Gupta", motherName: "Pooja Gupta", phone: "91-9876543214" },
    { childName: "Vikram Malhotra", fatherName: "Raj Malhotra", motherName: "Anita Malhotra", phone: "91-9876543215" },
    { childName: "Ananya Reddy", fatherName: "Krishna Reddy", motherName: "Lakshmi Reddy", phone: "91-9876543216" },
    { childName: "Rohan Joshi", fatherName: "Mohan Joshi", motherName: "Radha Joshi", phone: "91-9876543217" },
    { childName: "Meera Choudhary", fatherName: "Suresh Choudhary", motherName: "Geeta Choudhary", phone: "91-9876543218" },
    { childName: "Karan Mehta", fatherName: "Dinesh Mehta", motherName: "Kavita Mehta", phone: "91-9876543219" },
    { childName: "Divya Sharma", fatherName: "Rajesh Sharma", motherName: "Sunita Sharma", phone: "91-9876543220" },
    { childName: "Sanjay Kumar", fatherName: "Vinod Kumar", motherName: "Radha Kumar", phone: "91-9876543221" },
    { childName: "Pooja Verma", fatherName: "Rakesh Verma", motherName: "Neeta Verma", phone: "91-9876543222" },
    { childName: "Rajat Khanna", fatherName: "Vikash Khanna", motherName: "Seema Khanna", phone: "91-9876543223" },
    { childName: "Anjali Desai", fatherName: "Prakash Desai", motherName: "Meena Desai", phone: "91-9876543224" },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Child Name</TableHead>
            <TableHead>Father's Name</TableHead>
            <TableHead>Mother's Name</TableHead>
            <TableHead>Phone Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parents.map((parent, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{parent.childName}</TableCell>
              <TableCell>{parent.fatherName}</TableCell>
              <TableCell>{parent.motherName}</TableCell>
              <TableCell>{parent.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
