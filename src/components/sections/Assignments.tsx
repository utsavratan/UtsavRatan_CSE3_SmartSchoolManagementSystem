
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export const Assignments = () => {
  const { data: assignments, isLoading } = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('assignments')
        .select('*')
        .order('due_date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading assignments...</div>;
  }

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
          {assignments?.map((assignment) => (
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
