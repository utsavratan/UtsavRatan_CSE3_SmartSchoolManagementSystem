
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';

export const ExamDatesheet = () => {
  const { examDatesheets } = useData();

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
          {examDatesheets.map((exam) => (
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
