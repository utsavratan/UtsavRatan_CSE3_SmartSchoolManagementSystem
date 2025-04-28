
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export const Timetable = () => {
  const { data: schedule, isLoading } = useQuery({
    queryKey: ['timetable'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('timetable')
        .select('*')
        .order('day_of_week', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading timetable...</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule?.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell className="font-medium">{entry.day_of_week}</TableCell>
              <TableCell>{entry.subject}</TableCell>
              <TableCell>{`${entry.start_time} - ${entry.end_time}`}</TableCell>
              <TableCell>{entry.room_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
