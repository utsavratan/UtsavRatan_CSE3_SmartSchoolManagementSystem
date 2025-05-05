
import React from 'react';
import { useData } from '@/context/DataContext';

export const StudentDetails = () => {
  const { students } = useData();
  const student = students[0]; // Display the first student's details
  
  if (!student) {
    return <div>No student data available</div>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img
        src="/lovable-uploads/utsav.jpeg"
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        <div className="p-4 border rounded">
          <strong>Name:</strong> {student.name}
        </div>
        <div className="p-4 border rounded">
          <strong>Roll Number:</strong> {student.rollNo}
        </div>
        <div className="p-4 border rounded">
          <strong>Phone Number:</strong> {student.phone}
        </div>
        <div className="p-4 border rounded">
          <strong>Email:</strong> {student.name.toLowerCase().replace(' ', '.') + '@example.com'}
        </div>
        <div className="p-4 border rounded">
          <strong>Course:</strong> {student.course}
        </div>
        <div className="p-4 border rounded">
          <strong>Address:</strong> {student.address}
        </div>
        <div className="p-4 border rounded">
          <strong>Parents Details:</strong> {student.parentsName}
        </div>
      </div>
    </div>
  );
};
