import React from 'react';

export const StudentDetails = () => {
  const student = {
    name: 'Utsav Ratan',
    rollNumber: '2401010046',
    phoneNumber: '98*******5',
    email: 'ratan.utsav1@gmail.com',
    course: 'B.Tech CSE',
    address: 'New Delhi , India',
    parentsDetails: 'Mr. Rajeev Kumar and Mrs. Priyanka Kumari',
    profileImage: '/lovable-uploads/utsav.jpeg', // Replace with actual image path
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <img
        src={student.profileImage}
        alt="Profile"
        className="w-32 h-32 rounded-full mb-4"
      />
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        <div className="p-4 border rounded">
          <strong>Name:</strong> {student.name}
        </div>
        <div className="p-4 border rounded">
          <strong>Roll Number:</strong> {student.rollNumber}
        </div>
        <div className="p-4 border rounded">
          <strong>Phone Number:</strong> {student.phoneNumber}
        </div>
        <div className="p-4 border rounded">
          <strong>Email:</strong> {student.email}
        </div>
        <div className="p-4 border rounded">
          <strong>Course:</strong> {student.course}
        </div>
        <div className="p-4 border rounded">
          <strong>Address:</strong> {student.address}
        </div>
        <div className="p-4 border rounded">
          <strong>Parents Details:</strong> {student.parentsDetails}
        </div>
      </div>
    </div>
  );
};
