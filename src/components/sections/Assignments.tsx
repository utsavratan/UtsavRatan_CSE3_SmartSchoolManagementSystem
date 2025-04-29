
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Assignments = () => {
  const assignments = [
    {
      id: 1,
      title: 'Chapter 5 Exercises',
      subject: 'Mathematics',
      due_date: '2023-11-15',
      description: 'Complete the exercises on page 42',
    },
    // Add more sample assignments if needed
  ];

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
          {assignments.map((assignment) => (
            <TableRow key={assignment.id}>
              <TableCell className="font-medium">{assignment.title}</TableCell>
              <TableCell>{assignment.subject}</TableCell>
              <TableCell>{new Date(assignment.due_date).toLocaleString()}</TableCell>
              <TableCell>{assignment.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
