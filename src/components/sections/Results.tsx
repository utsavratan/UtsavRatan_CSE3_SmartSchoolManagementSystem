
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Results = () => {
  const results = [
    {
      id: 1,
      subject: 'Mathematics',
      marks_obtained: 95,
      total_marks: 100,
      exam_type: 'Final',
      exam_date: '2025-05-01',
    },
    {
      id: 2,
      subject: 'Science',
      marks_obtained: 90,
      total_marks: 100,
      exam_type: 'Final',
      exam_date: '2025-05-02',
    },
    {
      id: 3,
      subject: 'English',
      marks_obtained: 92,
      total_marks: 100,
      exam_type: 'Final',
      exam_date: '2025-05-03',
    },
    {
      id: 4,
      subject: 'Hindi',
      marks_obtained: 99,
      total_marks: 100,
      exam_type: 'Final',
      exam_date: '2025-05-04',
    },
    {
      id: 5,
      subject: 'Computer',
      marks_obtained: 97,
      total_marks: 100,
      exam_type: 'Final',
      exam_date: '2025-05-05',
    },
    {
      id: 6,
      subject: 'Social Science',
      marks_obtained: 100,
      total_marks: 100,
      exam_type: 'Final',
      exam_date: '2025-05-06',
    },
    // Add more sample results if needed
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Marks Obtained</TableHead>
            <TableHead>Total Marks</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead>Exam Type</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-medium">{result.subject}</TableCell>
              <TableCell>{result.marks_obtained}</TableCell>
              <TableCell>{result.total_marks}</TableCell>
              <TableCell>
                {((result.marks_obtained / result.total_marks) * 100).toFixed(2)}%
              </TableCell>
              <TableCell>{result.exam_type}</TableCell>
              <TableCell>{new Date(result.exam_date).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
