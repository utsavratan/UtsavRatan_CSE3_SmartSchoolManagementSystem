
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
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  
  // Subjects for attendance
  const subjects = ['Mathematics', 'Science', 'English', 'Computer'];

  useEffect(() => {
    // Initialize student attendance statuses
    const initialAttendance: Record<string, string> = {};
    students.forEach(student => {
      // Check if there's an existing attendance record for this student on this date and subject
      const existingRecord = attendance.find(
        record => record.student_name === student.name && 
        new Date(record.date).toISOString().split('T')[0] === selectedDate &&
        record.subject === selectedSubject
      );
      
      initialAttendance[student.name] = existingRecord ? existingRecord.status : 'Present';
    });
    
    setStudentAttendance(initialAttendance);
  }, [students, attendance, selectedDate, selectedSubject]);

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
      const attendanceId = `${student.name}-${selectedDate}-${selectedSubject}`;
      
      // Create or update attendance record
      updateAttendance({
        id: attendanceId,
        date: selectedDateObj,
        student_name: student.name,
        status: status,
        subject: selectedSubject,
        teacher: 'Dr. Pankaj Sharma',
        room: '101',
        grade: status !== 'Absent' ? Math.floor(Math.random() * 31) + 70 : null,
        notes: status === 'Absent' ? 'Absent' : status === 'Late' ? 'Arrived late' : 'Present'
      });
    });
    
    toast({
      title: "Attendance Saved",
      description: `Attendance for ${selectedDate} (${selectedSubject}) has been updated successfully.`,
    });
    
    setEditMode(false);
  };

  // Filter attendance based on selected date or all dates for non-teachers
  const filteredAttendance = userRole !== 'teacher' 
    ? attendance 
    : attendance.filter(record => 
        new Date(record.date).toISOString().split('T')[0] === selectedDate &&
        record.subject === selectedSubject
      );

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

          <div className="mb-4">
            <label htmlFor="subject-select" className="block text-sm font-medium mb-1">
              Subject:
            </label>
            <Select 
              value={selectedSubject}
              onValueChange={setSelectedSubject}
            >
              <SelectTrigger className="w-full md:w-48" id="subject-select">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {subjects.map(subject => (
                  <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
              <div className="flex flex-col gap-1">
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
              
              <div className="flex flex-col gap-1">
                <label htmlFor="subject-select" className="text-sm font-medium">
                  Subject:
                </label>
                <Select 
                  value={selectedSubject}
                  onValueChange={setSelectedSubject}
                >
                  <SelectTrigger className="w-full md:w-48" id="subject-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map(subject => (
                      <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={() => setEditMode(true)} className="bg-primary mt-4 md:mt-0">
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
              {filteredAttendance.map((record) => (
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
