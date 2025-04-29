
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const ExamDatesheet = () => {
  const exams = [
    {
      id: 1,
      subject: 'Mathematics',
      exam_date: '2023-12-01',
      duration_minutes: 90,
      exam_type: 'Final',
    },
    // Add more sample exams if needed
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam) => (
            <TableRow key={exam.id}>
              <TableCell className="font-medium">{exam.subject}</TableCell>
              <TableCell>{new Date(exam.exam_date).toLocaleDateString()}</TableCell>
              <TableCell>{exam.duration_minutes} minutes</TableCell>
              <TableCell>{exam.exam_type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
