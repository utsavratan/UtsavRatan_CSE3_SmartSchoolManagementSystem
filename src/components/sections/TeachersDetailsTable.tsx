
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const TeachersDetailsTable = () => {
  // Generate 10 random teachers data
  const teachers = [
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

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Qualification</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Address</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{teacher.name}</TableCell>
              <TableCell>{teacher.qualification}</TableCell>
              <TableCell>{teacher.specialization}</TableCell>
              <TableCell>{teacher.phone}</TableCell>
              <TableCell>{teacher.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
