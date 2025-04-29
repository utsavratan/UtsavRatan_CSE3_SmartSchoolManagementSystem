
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Fees = () => {
  const fees = [
    {
      id: 1,
      type: 'Tuition',
      amount: 5000,
      due_date: '2025-04-01',
      status: 'Paid',
    },
    {
      id: 2,
      type: 'Bus',
      amount: 3000,
      due_date: '2025-04-01',
      status: 'Paid',
    },
    {
      id: 3,
      type: 'Library',
      amount: 500,
      due_date: '2025-04-01',
      status: 'Paid',
    },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fees.map((fee) => (
            <TableRow key={fee.id}>
              <TableCell className="font-medium">{fee.type}</TableCell>
              <TableCell>{fee.amount}</TableCell>
              <TableCell>{new Date(fee.due_date).toLocaleDateString()}</TableCell>
              <TableCell>{fee.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
