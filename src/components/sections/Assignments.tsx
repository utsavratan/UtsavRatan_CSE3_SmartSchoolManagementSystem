
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';

export const Assignments = () => {
  const { assignments } = useData();
  
  console.log("Rendering Assignments component with data:", assignments);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assignments && assignments.length > 0 ? (
            assignments.map((assignment) => (
              <TableRow key={assignment.id}>
                <TableCell className="font-medium">{assignment.title}</TableCell>
                <TableCell>{assignment.subject}</TableCell>
                <TableCell>{new Date(assignment.due_date).toLocaleDateString()}</TableCell>
                <TableCell>{assignment.description}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">No assignments available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
