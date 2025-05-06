
import React, { useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';

export const ExamDatesheet = () => {
  const { examDatesheets } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  
  console.log(`Rendering ExamDatesheet with ${examDatesheets?.length || 0} datesheets for ${userRole} dashboard`);
  
  useEffect(() => {
    console.log("ExamDatesheet mounted with data:", examDatesheets);
  }, [examDatesheets]);

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
          {examDatesheets && examDatesheets.length > 0 ? (
            examDatesheets.map((exam) => (
              <TableRow key={exam.id}>
                <TableCell className="font-medium">{exam.subject}</TableCell>
                <TableCell>{new Date(exam.exam_date).toLocaleDateString()}</TableCell>
                <TableCell>{exam.duration_minutes} minutes</TableCell>
                <TableCell>{exam.exam_type}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                {userRole === 'teacher' || userRole === 'admin' ? 
                  "No exam datesheets available. Add datesheets from the 'Add Datesheet' button on the dashboard." : 
                  "No exam datesheets available yet."
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
