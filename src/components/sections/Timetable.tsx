
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Timetable = () => {
  const timetable = [
    {
      id: 1,
      subject: 'Mathematics',
      day_of_week: 'Monday',
      start_time: '09:00',
      end_time: '10:00',
      room_number: '101',
    },
    {
      id: 1,
      subject: 'Science',
      day_of_week: 'Monday',
      start_time: '10:00',
      end_time: '11:00',
      room_number: '101',
    },
    {
      id: 1,
      subject: 'English',
      day_of_week: 'Monday',
      start_time: '12:00',
      end_time: '01:00',
      room_number: '101',
    },
    {
      id: 1,
      subject: 'Computer',
      day_of_week: 'Monday',
      start_time: '01:00',
      end_time: '02:00',
      room_number: '101',
    },
    // Add more sample timetable entries if needed
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Day</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Room</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timetable.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell className="font-medium">{entry.subject}</TableCell>
              <TableCell>{entry.day_of_week}</TableCell>
              <TableCell>{entry.start_time}</TableCell>
              <TableCell>{entry.end_time}</TableCell>
              <TableCell>{entry.room_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
