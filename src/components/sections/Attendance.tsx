import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Attendance = () => {
  // Generate one week of attendance data with 4 classes per day
  const generateAttendanceData = () => {
    const data = [];
    const startDate = new Date('2024-03-11'); // Starting from a Monday
    const statuses = ['Present', 'Absent', 'Late'];
    
    for (let day = 0; day < 7; day++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + day);
      
      // 4 classes per day
      for (let classNum = 1; classNum <= 4; classNum++) {
        data.push({
          id: `${day}-${classNum}`,
          date: currentDate,
          student_id: `STU${Math.floor(1000 + Math.random() * 9000)}`, // Random 4-digit student ID
          status: statuses[Math.floor(Math.random() * statuses.length)]
        });
      }
    }
    return data;
  };

  const attendance = generateAttendanceData();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Student ID</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendance.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.date.toLocaleDateString()}</TableCell>
              <TableCell>{record.student_id}</TableCell>
              <TableCell>{record.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
