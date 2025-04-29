
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
  {
    id: 2,
    title: 'Chapter 3 Review',
    subject: 'Science',
    due_date: '2023-11-16',
    description: 'Write answers for the review questions at the end of Chapter 3',
  },
  {
    id: 3,
    title: 'Chapter 2 Summary',
    subject: 'Hindi',
    due_date: '2023-11-17',
    description: 'Summarize the poem from Chapter 2 in your own words',
  },
  {
    id: 4,
    title: 'Grammar Worksheet',
    subject: 'English',
    due_date: '2023-11-18',
    description: 'Complete the grammar worksheet on tenses',
  },
  {
    id: 5,
    title: 'Basic Programming Task',
    subject: 'Computer',
    due_date: '2023-11-19',
    description: 'Write a simple program to add two numbers in Python',
  },
  {
    id: 6,
    title: 'Map Work Assignment',
    subject: 'Social Science',
    due_date: '2023-11-20',
    description: 'Mark major rivers of India on the provided map',
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
