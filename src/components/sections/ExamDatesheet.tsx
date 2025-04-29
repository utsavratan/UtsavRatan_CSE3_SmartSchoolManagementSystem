
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const ExamDatesheet = () => {
  const exams = [
    {
      id: 1,
      subject: 'Mathematics',
      exam_date: '2025-06-01',
      duration_minutes: 90,
      exam_type: 'Final',
    },
    {
      id: 2,
      subject: 'Science',
      exam_date: '2025-06-02',
      duration_minutes: 90,
      exam_type: 'Final',
    },
    {
      id: 3,
      subject: 'Computer',
      exam_date: '2025-06-03',
      duration_minutes: 90,
      exam_type: 'Final',
    },
    {
      id: 4,
      subject: 'Hindi',
      exam_date: '2025-06-04',
      duration_minutes: 90,
      exam_type: 'Final',
    },
    {
      id: 5,
      subject: 'English',
      exam_date: '2025-06-05',
      duration_minutes: 90,
      exam_type: 'Final',
    },
    {
      id: 6,
      subject: 'Social Science',
      exam_date: '2025-06-06',
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
