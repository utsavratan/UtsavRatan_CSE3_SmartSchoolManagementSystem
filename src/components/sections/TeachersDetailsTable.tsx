
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';

export const TeachersDetailsTable = () => {
  const { teachers } = useData();

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
