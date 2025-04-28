
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export const ExamDatesheet = () => {
  const { data: exams, isLoading } = useQuery({
    queryKey: ['exams'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('exam_datesheets')
        .select('*')
        .order('exam_date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading exam schedule...</div>;
  }

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
          {exams?.map((exam) => (
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
