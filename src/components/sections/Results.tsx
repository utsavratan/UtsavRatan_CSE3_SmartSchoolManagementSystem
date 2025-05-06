
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';

export const Results = () => {
  const { results } = useData();
  
  console.log("Rendering Results component with data:", results);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Marks Obtained</TableHead>
            <TableHead>Total Marks</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead>Exam Type</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results && results.length > 0 ? (
            results.map((result) => (
              <TableRow key={result.id}>
                <TableCell className="font-medium">{result.student_name}</TableCell>
                <TableCell>{result.subject}</TableCell>
                <TableCell>{result.marks}</TableCell>
                <TableCell>{result.total_marks}</TableCell>
                <TableCell>
                  {((result.marks / result.total_marks) * 100).toFixed(2)}%
                </TableCell>
                <TableCell>{result.exam_type}</TableCell>
                <TableCell>{new Date(result.exam_date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-4">No results available</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
