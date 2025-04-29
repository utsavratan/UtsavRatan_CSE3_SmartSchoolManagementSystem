import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface Result {
  id: number;
  subject: string;
  score: number;
  grade: string;
  remarks: string;
}

export const Result: React.FC = () => {
  const results: Result[] = [
    {
      id: 1,
      subject: 'Mathematics',
      score: 95,
      grade: 'A',
      remarks: 'Excellent',
    },
    {
      id: 2,
      subject: 'Science',
      score: 95,
      grade: 'A',
      remarks: 'Excellent',
    },
    {
      id: 3,
      subject: 'English',
      score: 92,
      grade: 'A',
      remarks: 'Excellent',
    },
    {
      id: 4,
      subject: 'Hindi',
      score: 90,
      grade: 'A',
      remarks: 'Excellent',
    },
    {
      id: 5,
      subject: 'Computer',
      score: 99,
      grade: 'A',
      remarks: 'Excellent',
    },
    {
      id: 6,
      subject: 'Social Science',
      score: 98,
      grade: 'A',
      remarks: 'Excellent',
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Subject</TableHead>
            <TableHead className="w-[100px]">Score</TableHead>
            <TableHead className="w-[100px]">Grade</TableHead>
            <TableHead className="w-[200px]">Remarks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-medium">{result.subject}</TableCell>
              <TableCell>{result.score}</TableCell>
              <TableCell>{result.grade}</TableCell>
              <TableCell>{result.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
