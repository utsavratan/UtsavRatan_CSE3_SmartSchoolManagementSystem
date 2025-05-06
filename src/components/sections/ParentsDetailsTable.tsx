
import React, { useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';

export const ParentsDetailsTable = () => {
  const { parents } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  
  console.log(`Rendering ParentsDetailsTable with ${parents?.length || 0} parents for ${userRole} dashboard`);
  
  useEffect(() => {
    console.log("ParentsDetailsTable mounted with data:", parents);
  }, [parents]);

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
          {parents && parents.length > 0 ? (
            parents.map((parent, index) => (
              <TableRow key={`parent-${parent.childName}-${index}`}>
                <TableCell className="font-medium">{parent.childName}</TableCell>
                <TableCell>{parent.fatherName}</TableCell>
                <TableCell>{parent.motherName}</TableCell>
                <TableCell>{parent.phone}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                {userRole === 'admin' ? 
                  "No parents data available. Add parents using the 'Add User' button on the dashboard." : 
                  "No parents data available yet."
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
