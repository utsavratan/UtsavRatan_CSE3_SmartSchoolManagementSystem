
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const ParentsDetailsTable = () => {
  // Generate 15 random parents data
  const parents = [
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
