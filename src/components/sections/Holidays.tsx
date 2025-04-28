
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export const Holidays = () => {
  const { data: holidays, isLoading } = useQuery({
    queryKey: ['holidays'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('holidays')
        .select('*')
        .order('start_date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading holiday calendar...</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Holiday</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holidays?.map((holiday) => (
            <TableRow key={holiday.id}>
              <TableCell className="font-medium">{holiday.holiday_name}</TableCell>
              <TableCell>{new Date(holiday.start_date).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(holiday.end_date).toLocaleDateString()}</TableCell>
              <TableCell>{holiday.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
