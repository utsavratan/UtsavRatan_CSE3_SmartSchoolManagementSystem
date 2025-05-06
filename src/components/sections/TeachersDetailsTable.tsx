
import React, { useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';

export const TeachersDetailsTable = () => {
  const { teachers } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  
  console.log(`Rendering TeachersDetailsTable with ${teachers.length} teachers for ${userRole} dashboard`);
  
  useEffect(() => {
    console.log("TeachersDetailsTable mounted with data:", teachers);
  }, [teachers]);

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
          {teachers && teachers.length > 0 ? (
            teachers.map((teacher, index) => (
              <TableRow key={`teacher-${teacher.name}-${index}`}>
                <TableCell className="font-medium">{teacher.name}</TableCell>
                <TableCell>{teacher.qualification}</TableCell>
                <TableCell>{teacher.specialization}</TableCell>
                <TableCell>{teacher.phone}</TableCell>
                <TableCell>{teacher.address}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                {userRole === 'admin' ? 
                  "No teachers available. Add teachers using the 'Add User' button on the dashboard." : 
                  "No teachers available yet."
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
