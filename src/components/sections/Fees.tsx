
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export const Fees = () => {
  const { data: fees, isLoading } = useQuery({
    queryKey: ['fees'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('fees')
        .select('*')
        .order('due_date', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading fees information...</div>;
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fee Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fees?.map((fee) => (
            <TableRow key={fee.id}>
              <TableCell className="font-medium">{fee.fee_type}</TableCell>
              <TableCell>${fee.amount}</TableCell>
              <TableCell>{new Date(fee.due_date).toLocaleDateString()}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {fee.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
