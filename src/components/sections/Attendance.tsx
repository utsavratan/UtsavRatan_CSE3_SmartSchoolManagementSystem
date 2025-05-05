
import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

export const Attendance = () => {
  // Get students from context
  const { students, attendance, updateAttendance } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  const isTeacher = userRole === 'teacher';
  const today = new Date();
  
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);
  const [editMode, setEditMode] = useState(false);
  const [studentAttendance, setStudentAttendance] = useState<Record<string, string>>({});
  
  // Subjects for attendance
  const subjects = ['Mathematics', 'Science', 'English', 'Computer'];

  useEffect(() => {
    // Initialize student attendance statuses
    const initialAttendance: Record<string, string> = {};
    students.forEach(student => {
      // Check if there's an existing attendance record for this student on this date
      const existingRecord = attendance.find(
        record => record.student_name === student.name && 
        new Date(record.date).toISOString().split('T')[0] === selectedDate
      );
      
      initialAttendance[student.name] = existingRecord ? existingRecord.status : 'Present';
    });
    
    setStudentAttendance(initialAttendance);
  }, [students, attendance, selectedDate]);

  const handleStatusChange = (studentName: string, status: string) => {
    setStudentAttendance(prev => ({
      ...prev,
      [studentName]: status
    }));
  };

  const handleSaveAttendance = () => {
    // Save attendance records for each student
    students.forEach(student => {
      const status = studentAttendance[student.name] || 'Present';
      const selectedDateObj = new Date(selectedDate);
      
      // Create or update attendance record
      updateAttendance({
        id: `${student.name}-${selectedDate}`,
        date: selectedDateObj,
        student_name: student.name,
        status: status,
        subject: subjects[0], // Default to first subject
        teacher: 'Dr. Pankaj Sharma',
        room: '101',
        grade: status !== 'Absent' ? Math.floor(Math.random() * 31) + 70 : null,
        notes: status === 'Absent' ? 'Absent' : status === 'Late' ? 'Arrived late' : 'Present'
      });
    });
    
    toast({
      title: "Attendance Saved",
      description: `Attendance for ${selectedDate} has been updated successfully.`,
    });
    
    setEditMode(false);
  };

  const renderAttendanceTable = () => {
    if (isTeacher && editMode) {
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Mark Attendance for {selectedDate}</h3>
            <Button onClick={handleSaveAttendance} className="bg-green-600 hover:bg-green-700">
              Save Attendance
            </Button>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.name}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>
                    <Select 
                      value={studentAttendance[student.name] || 'Present'}
                      onValueChange={(value) => handleStatusChange(student.name, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Present">Present</SelectItem>
                        <SelectItem value="Absent">Absent</SelectItem>
                        <SelectItem value="Late">Late</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      );
    } else {
      // Display the attendance data
      return (
        <div className="space-y-4">
          {isTeacher && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <label htmlFor="attendance-date" className="text-sm font-medium">
                  Date:
                </label>
                <input
                  id="attendance-date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-2 py-1 border rounded"
                />
              </div>
              <Button onClick={() => setEditMode(true)} className="bg-primary">
                Edit Attendance
              </Button>
            </div>
          )}
          
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
                  <TableCell className="font-medium">{new Date(record.date).toLocaleDateString()}</TableCell>
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
    }
  };

  return (
    <div className="rounded-md border">
      {renderAttendanceTable()}
    </div>
  );
};
