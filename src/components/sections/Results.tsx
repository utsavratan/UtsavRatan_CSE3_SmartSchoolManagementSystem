
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export const Results = () => {
  const { data: results, isLoading } = useQuery({
    queryKey: ['results'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('results')
        .select('*')
        .order('exam_date', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading results...</div>;
  }

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
          {results?.map((result) => (
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
