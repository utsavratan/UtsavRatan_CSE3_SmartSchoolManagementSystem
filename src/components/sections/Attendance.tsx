
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Attendance = () => {
  // Generate attendance data for all 15 students
  const generateAttendanceData = () => {
    const data = [];
    const startDate = new Date('2024-03-11'); // Starting from a Monday
    const statuses = ['Present', 'Absent', 'Late'];
    const subjects = ['Mathematics', 'Science', 'English', 'Computer'];
    const teachers = ['Dr. Pankaj Sharma', 'Prof. Rupesh Kumar', 'Dr. Mayank Singh', 'Prof. Rahul Gupta'];
    const rooms = ['101', '101', '101', '101'];
    
    // Student names from StudentDetailsTable
    const students = [
      "Utsav Ratan", "Rahul Kapoor", "Priya Singh", "Arjun Patel", "Neha Gupta",
      "Vikram Malhotra", "Ananya Reddy", "Rohan Joshi", "Meera Choudhary", "Karan Mehta",
      "Divya Sharma", "Sanjay Kumar", "Pooja Verma", "Rajat Khanna", "Anjali Desai"
    ];
    
    // Generate one day of attendance data for all students
    students.forEach((student, studentIndex) => {
      // Each student has 1-4 classes per day with random attendance
      const classesCount = Math.floor(Math.random() * 4) + 1;
      for (let classNum = 0; classNum < classesCount; classNum++) {
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        data.push({
          id: `${studentIndex}-${classNum}`,
          date: new Date(startDate),
          student_name: student,
          status: status,
          subject: subjects[classNum % subjects.length],
          teacher: teachers[classNum % teachers.length],
          room: rooms[classNum % rooms.length],
          grade: status !== 'Absent' ? Math.floor(Math.random() * 31) + 70 : null, // Assign grade only if not absent
          notes: status === 'Absent' ? 'Needs improvement' : 'Good performance' // Set notes based on status
        });
      }
    });
    
    return data.sort((a, b) => a.student_name.localeCompare(b.student_name));
  };

  const attendance = generateAttendanceData();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendance.map((record) => (
            <TableRow key={record.id} className={
              record.status === 'Absent' ? 'bg-red-100' : 
              record.status === 'Present' ? 'bg-green-100' : 
              record.status === 'Late' ? 'bg-yellow-100' : ''
            }>
              <TableCell className="font-medium">{record.date.toLocaleDateString()}</TableCell>
              <TableCell>{record.student_name}</TableCell>
              <TableCell>{record.subject}</TableCell>
              <TableCell>{record.teacher}</TableCell>
              <TableCell>{record.room}</TableCell>
              <TableCell>{record.status}</TableCell>
              <TableCell>{record.grade}</TableCell>
              <TableCell>{record.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
