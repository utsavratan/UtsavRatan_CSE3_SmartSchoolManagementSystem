
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';

export const ParentsDetailsTable = () => {
  const { parents } = useData();

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
