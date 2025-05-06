
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { formatDate } from '@/lib/utils';

interface FeeReceiptProps {
  studentName: string;
  rollNo: string;
  paymentDate: string;
  amount: number;
  transactionId: string;
  fees: Array<{
    type: string;
    amount: number;
    due_date: string;
    status?: string; // Make status optional
  }>;
}

export const FeeReceipt: React.FC<FeeReceiptProps> = ({
  studentName,
  rollNo,
  paymentDate,
  amount,
  transactionId,
  fees
}) => {
  // Function to generate PDF content
  const generatePdf = () => {
    const element = document.getElementById('receipt-content');
    if (!element) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Please enable pop-ups to download the receipt");
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Fee Receipt - ${studentName}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              color: #333;
            }
            .receipt {
              max-width: 800px;
              margin: 0 auto;
              border: 1px solid #ddd;
              padding: 20px;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            .header h1 {
              margin: 0;
              color: #2563eb;
            }
            .info-section {
              display: flex;
              justify-content: space-between;
              margin-bottom: 20px;
            }
            .info-box {
              width: 48%;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px 12px;
              text-align: left;
            }
            th {
              background-color: #f3f4f6;
            }
            .total {
              font-weight: bold;
              text-align: right;
              margin-top: 20px;
              font-size: 1.2em;
            }
            .footer {
              margin-top: 30px;
              text-align: center;
              font-size: 0.8em;
              color: #666;
              border-top: 1px solid #ddd;
              padding-top: 10px;
            }
            .stamp {
              margin-top: 40px;
              text-align: right;
            }
            .digital-note {
              font-size: 0.8em;
              font-style: italic;
              text-align: center;
              margin-top: 20px;
              color: #666;
            }
            .signature-img {
              width: 150px;
              height: auto;
              margin-top: 10px;
            }
            @media print {
              .no-print {
                display: none;
              }
              body {
                padding: 0;
                print-color-adjust: exact;
                -webkit-print-color-adjust: exact;
              }
            }
          </style>
        </head>
        <body>
          ${element.innerHTML}
          <div class="footer no-print">
            <button onclick="window.print()">Print Receipt</button>
            <button onclick="window.close()">Close</button>
          </div>
        </body>
      </html>
    `);
    
    printWindow.document.close();
  };

  return (
    <div className="w-full">
      <div id="receipt-content" className="bg-white rounded-lg shadow-md p-6 mb-4">
        <div className="header text-center border-b-2 border-gray-800 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-blue-600">EduTrack School</h1>
          <p className="text-gray-500">123 Education Lane, Knowledge City</p>
          <h2 className="text-xl font-semibold mt-2">FEE RECEIPT</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-600">STUDENT DETAILS</h3>
            <p className="font-medium">Name: {studentName}</p>
            <p>Roll No: {rollNo}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600">PAYMENT DETAILS</h3>
            <p>Transaction ID: {transactionId}</p>
            <p>Payment Date: {formatDate(new Date(paymentDate))}</p>
            <p>Payment Method: UPI</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Fee Type</th>
                <th className="border px-4 py-2 text-left">Due Date</th>
                <th className="border px-4 py-2 text-right">Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="border px-4 py-2">{fee.type}</td>
                  <td className="border px-4 py-2">{formatDate(new Date(fee.due_date))}</td>
                  <td className="border px-4 py-2 text-right">{fee.amount.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="bg-blue-50">
                <td className="border px-4 py-2 font-bold" colSpan={2}>Total</td>
                <td className="border px-4 py-2 text-right font-bold">₹{amount.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Payment Status: <span className="text-green-600 font-semibold">PAID</span></p>
          </div>
          <div className="text-right">
            <p className="font-bold">Authorized Signature</p>
            <img 
              src="/lovable-uploads/1b7856cf-887e-42ab-864f-1465e0f50e39.png" 
              alt="Digital Signature" 
              className="ml-auto mt-2 h-16 w-auto"
            />
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm italic">
          <p>This is a digitally generated receipt. No physical signature required.</p>
        </div>
      </div>
      
      <Button
        onClick={generatePdf}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <FileText size={18} />
        Download Receipt
      </Button>
    </div>
  );
};
