
import React, { useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';

export const StudentDetailsTable = () => {
  const { students } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  
  console.log(`Rendering StudentDetailsTable with ${students.length} students for ${userRole} dashboard`);
  
  useEffect(() => {
    console.log("StudentDetailsTable mounted with data:", students);
  }, [students]);

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
          {students && students.length > 0 ? (
            students.map((student) => (
              <TableRow key={`student-${student.name}-${student.rollNo}`}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.rollNo}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{student.parentsName}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                {userRole === 'admin' ? 
                  "No students available. Add students using the 'Add User' button on the dashboard." : 
                  "No students available yet."
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
