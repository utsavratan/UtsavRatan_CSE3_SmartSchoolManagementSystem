
import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useData } from '@/context/DataContext';
import { useLocation } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react'; // Fixed import
import { DollarSign, CreditCard, AlertTriangle, FileText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FeeReceipt } from './FeeReceipt';
import { toast } from '@/hooks/use-toast';

interface Fee {
  id: number;
  type: string;
  amount: number;
  due_date: string;
  status: string;
  payment_date?: string;
  transaction_id?: string;
}

export const Fees = () => {
  const { students } = useData();
  const location = useLocation();
  const userRole = location.pathname.split('/')[1];
  const [showQR, setShowQR] = useState(false);
  const [totalUnpaid, setTotalUnpaid] = useState(0);
  const [showReceipt, setShowReceipt] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<string>("Utsav Ratan");
  const [currentRollNo, setCurrentRollNo] = useState<string>("1");
  
  console.log(`Rendering Fees component for ${userRole} dashboard`);
  
  // Sample fees data - in a real app, this would come from Supabase
  const [studentFees, setStudentFees] = useState<Fee[]>([
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
      payment_date: '2025-03-15',
      transaction_id: 'TXN7890123'
    },
    {
      id:4,
      type: 'Check',
      amount : 1,
      due_date : 'Na/-',
      status:'Unpaid',
    },
  ]);

  useEffect(() => {
    // Calculate total unpaid amount
    const unpaidTotal = studentFees.reduce((total, fee) => 
      fee.status === 'Unpaid' ? total + fee.amount : total, 0
    );
    setTotalUnpaid(unpaidTotal);
    console.log(`Total unpaid fees: ${unpaidTotal}`);
  }, [studentFees]);

  const handlePayNow = () => {
    console.log("Pay now button clicked for amount:", totalUnpaid);
    setShowQR(true);
  };

  const generateUpiUrl = (amount: number) => {
    // UPI URL format for UPI apps
    return `upi://pay?pa=misterutsav@fam&pn=School Fees&am=${amount}&cu=INR`;
  };

  const simulatePayment = () => {
    // In a real app, this would be handled by a webhook from the payment provider
    const currentDate = new Date().toISOString();
    const transactionId = 'TXN' + Math.floor(Math.random() * 10000000);
    
    // Update all unpaid fees to paid
    const updatedFees = studentFees.map(fee => {
      if (fee.status === 'Unpaid') {
        return {
          ...fee,
          status: 'Paid',
          payment_date: currentDate,
          transaction_id: transactionId
        };
      }
      return fee;
    });
    
    setStudentFees(updatedFees);
    setTotalUnpaid(0);
    setShowQR(false);
    setShowReceipt(true);
    
    toast({
      title: "Payment Successful",
      description: `Payment of ₹${totalUnpaid} completed successfully.`,
    });
  };

  // View for students and parents
  if (userRole === 'student' || userRole === 'parent') {
    return (
      <div className="space-y-6">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentFees.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell className="font-medium">{fee.type}</TableCell>
                  <TableCell>₹{fee.amount}</TableCell>
                  <TableCell>{new Date(fee.due_date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {fee.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    {fee.status === 'Paid' && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            Receipt
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Fee Receipt</DialogTitle>
                          </DialogHeader>
                          <FeeReceipt 
                            studentName={currentStudent}
                            rollNo={currentRollNo}
                            paymentDate={fee.payment_date || new Date().toISOString()}
                            amount={fee.amount}
                            transactionId={fee.transaction_id || "N/A"}
                            fees={[fee]}
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {totalUnpaid > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <h3 className="text-amber-700 font-semibold">Unpaid Fees</h3>
            </div>
            <p className="mt-2 text-sm text-amber-600">
              You have ₹{totalUnpaid} in unpaid fees. Please clear your dues at your earliest convenience.
            </p>
            
            <Dialog open={showQR} onOpenChange={setShowQR}>
              <DialogTrigger asChild>
                <Button 
                  onClick={handlePayNow} 
                  className="mt-3 bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  Pay Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Pay with UPI</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <QRCodeSVG 
                      value={generateUpiUrl(totalUnpaid)} 
                      size={200} 
                      level="H" 
                      includeMargin={true}
                    />
                  </div>
                  <p className="mt-4 text-sm text-center text-gray-500">
                    Scan this QR code with any UPI app to pay ₹{totalUnpaid}
                  </p>
                  <p className="text-xs text-center text-gray-400 mt-2">
                    Payment will be processed immediately
                  </p>
                  
                  {/* For demo purposes only - in a real app this would be handled by a webhook */}
                  <Button 
                    onClick={simulatePayment}
                    className="mt-6"
                  >
                    Simulate Successful Payment
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={showReceipt} onOpenChange={setShowReceipt}>
              <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle>Payment Receipt</DialogTitle>
                </DialogHeader>
                <FeeReceipt 
                  studentName={currentStudent}
                  rollNo={currentRollNo}
                  paymentDate={new Date().toISOString()}
                  amount={totalUnpaid}
                  transactionId={'TXN' + Math.floor(Math.random() * 10000000)}
                  fees={studentFees.filter(fee => fee.status === 'Paid' && fee.payment_date)}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}

        {totalUnpaid === 0 && studentFees.some(fee => fee.status === 'Paid') && (
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                className="w-full flex items-center gap-2"
                variant="outline"
              >
                <FileText className="h-4 w-4" />
                View All Payment Receipts
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>Fee Payment Receipts</DialogTitle>
              </DialogHeader>
              <FeeReceipt 
                studentName={currentStudent}
                rollNo={currentRollNo}
                paymentDate={new Date().toISOString()}
                amount={studentFees.reduce((total, fee) => fee.status === 'Paid' ? total + fee.amount : total, 0)}
                transactionId={studentFees.find(fee => fee.status === 'Paid')?.transaction_id || "Multiple"}
                fees={studentFees.filter(fee => fee.status === 'Paid')}
              />
            </DialogContent>
          </Dialog>
        )}
      </div>
    );
  }
  
  // View for teachers and admin
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-4 border border-green-200">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-700">Total Fees Collected</h3>
            <DollarSign className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold mt-2">₹{studentFees
            .filter(fee => fee.status === 'Paid')
            .reduce((total, fee) => total + fee.amount, 0)}</p>
          <div className="text-xs text-gray-500 mt-1">
            From {studentFees.filter(fee => fee.status === 'Paid').length} payments
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 border border-red-200">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-700">Total Pending</h3>
            <AlertTriangle className="h-5 w-5 text-red-500" />
          </div>
          <p className="text-2xl font-bold mt-2">₹{studentFees
            .filter(fee => fee.status === 'Unpaid')
            .reduce((total, fee) => total + fee.amount, 0)}</p>
          <div className="text-xs text-gray-500 mt-1">
            From {studentFees.filter(fee => fee.status === 'Unpaid').length} pending payments
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 border border-blue-200">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-700">Total Fees</h3>
            <CreditCard className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold mt-2">₹{studentFees
            .reduce((total, fee) => total + fee.amount, 0)}</p>
          <div className="text-xs text-gray-500 mt-1">For all students</div>
        </div>
      </div>
    
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Fee Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students && students.slice(0, 3).map((student, index) => (
              <React.Fragment key={`student-${index}`}>
                {studentFees.map((fee) => {
                  const isPaid = index === 2 || fee.status === 'Paid';
                  const paymentDate = fee.payment_date || (isPaid ? '2025-03-15' : undefined);
                  const txnId = fee.transaction_id || (isPaid ? 'TXN7890123' : undefined);
                  
                  return (
                    <TableRow key={`${student.name}-${fee.id}`}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{fee.type}</TableCell>
                      <TableCell>₹{fee.amount}</TableCell>
                      <TableCell>{new Date(fee.due_date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {isPaid ? 'Paid' : 'Unpaid'}
                        </span>
                      </TableCell>
                      <TableCell>
                        {isPaid ? new Date(paymentDate || '').toLocaleDateString() : '-'}
                      </TableCell>
                      <TableCell>
                        {isPaid && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                Receipt
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>Fee Receipt</DialogTitle>
                              </DialogHeader>
                              <FeeReceipt 
                                studentName={student.name}
                                rollNo={student.rollNo}
                                paymentDate={paymentDate || new Date().toISOString()}
                                amount={fee.amount}
                                transactionId={txnId || "N/A"}
                                fees={[{...fee, status: 'Paid'}]}
                              />
                            </DialogContent>
                          </Dialog>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </React.Fragment>
            ))}
            {(!students || students.length === 0) && (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-4">
                  No student fee data available yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
