
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';

export const ParentsDetailsTable = () => {
  const { parents } = useData();
  
  console.log("Rendering ParentsDetailsTable with data:", parents);

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
              <TableCell colSpan={4} className="text-center py-4">No parents data available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
