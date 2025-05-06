
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { useLocation } from 'react-router-dom';

export const Timetable = () => {
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  
  // Fixed timetable data, but could be moved to DataContext in the future
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
      id: 2,
      subject: 'Science',
      day_of_week: 'Monday',
      start_time: '10:00',
      end_time: '11:00',
      room_number: '101',
    },
    {
      id: 3,
      subject: 'English',
      day_of_week: 'Monday',
      start_time: '12:00',
      end_time: '01:00',
      room_number: '101',
    },
    {
      id: 4,
      subject: 'Computer',
      day_of_week: 'Monday',
      start_time: '01:00',
      end_time: '02:00',
      room_number: '101',
    },
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
          {timetable.length > 0 ? (
            timetable.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.subject}</TableCell>
                <TableCell>{entry.day_of_week}</TableCell>
                <TableCell>{entry.start_time}</TableCell>
                <TableCell>{entry.end_time}</TableCell>
                <TableCell>{entry.room_number}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-4">
                {userRole === 'admin' ? 
                  "No timetable entries available. Add timetable entries from the admin dashboard." : 
                  "No timetable entries available yet."
                }
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
