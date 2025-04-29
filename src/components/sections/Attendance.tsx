
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

// Define a type for the attendance records to avoid TypeScript errors
interface AttendanceRecord {
  id: string;
  student_id: string;
  class_date: string;
  status: 'Present' | 'Absent' | 'Late';
  class_level: string;
  subject: string;
  created_at: string;
}

export const Attendance = () => {
  // Use explicit typing for the data returned by the query
  const { data: attendance, isLoading } = useQuery({
    queryKey: ['attendance'],
    queryFn: async () => {
      // Use the generic query method since the types don't include the attendance table yet
      const { data, error } = await supabase.rpc('select_all_from_attendance') as { data: AttendanceRecord[] | null, error: any };
      
      if (error) throw error;
      return data || [];
    }
  });

  if (isLoading) {
    return <div>Loading attendance data...</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendance && attendance.length > 0 ? (
            attendance.map((record: AttendanceRecord) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{new Date(record.class_date).toLocaleDateString()}</TableCell>
                <TableCell>{record.subject}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    record.status === 'Present' ? 'bg-green-100 text-green-800' : 
                    record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {record.status}
                  </span>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                No attendance records found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
