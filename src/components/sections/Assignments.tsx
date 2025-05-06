
import React, { useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';

export const Assignments = () => {
  const { assignments } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  
  console.log(`Rendering Assignments component with ${assignments?.length || 0} assignments for ${userRole} dashboard`);
  
  useEffect(() => {
    console.log("Assignments component mounted with data:", assignments);
  }, [assignments]);

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
          {assignments && assignments.length > 0 ? (
            assignments.map((assignment) => (
              <TableRow key={assignment.id}>
                <TableCell className="font-medium">{assignment.title}</TableCell>
                <TableCell>{assignment.subject}</TableCell>
                <TableCell>{new Date(assignment.due_date).toLocaleDateString()}</TableCell>
                <TableCell>{assignment.description}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4">
                {userRole === 'teacher' || userRole === 'admin' ? 
                  "No assignments available. Add assignments from the 'Add Assignment' button on the dashboard." : 
                  "No assignments available yet."
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
