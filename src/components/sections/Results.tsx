
import React, { useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';

export const Results = () => {
  const { results } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  
  console.log(`Rendering Results component with ${results.length} results for ${userRole} dashboard`);

  useEffect(() => {
    console.log("Results component mounted with data:", results);
  }, [results]);
  
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
              <TableCell colSpan={7} className="text-center py-4">
                {userRole === 'teacher' || userRole === 'admin' ? 
                  "No results available. Add results from the 'Add Result' button on the dashboard." :
                  "No results available yet."
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
