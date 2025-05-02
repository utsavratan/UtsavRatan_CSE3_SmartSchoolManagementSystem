import React from 'react';
import QRCode from 'qrcode.react';

export const Fees = () => {
  const fees = [
    {
      id: 1,
      type: 'Tuition',
      amount: 5000,
      due_date: '2023-11-01',
      status: 'Unpaid',
    },
    // Add more sample fees if needed
  ];

  const calculateUnpaidFees = () => {
    return fees.reduce((total, fee) => fee.status === 'Unpaid' ? total + fee.amount : total, 0);
  };

  const handlePayNow = (amount) => {
    const upiUrl = `upi://pay?pa=misterutsav@fam&pn=Utsav Ratan&am=${amount}&cu=INR`;
    console.log(`Initiate payment for amount: ${amount}`);
    return upiUrl;
  };

  return (
    <div className="rounded-md border">
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee) => (
            <tr key={fee.id}>
              <td className="font-medium">{fee.type}</td>
              <td>{fee.amount}</td>
              <td>{new Date(fee.due_date).toLocaleDateString()}</td>
              <td>{fee.status}</td>
              <td>
                {fee.status === 'Unpaid' && (
                  <div>
                    <button onClick={() => handlePayNow(fee.amount)} className="bg-blue-500 text-white px-4 py-2 rounded">
                      Pay Now
                    </button>
                    <QRCode value={handlePayNow(fee.amount)} size={128} />
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Total Unpaid: {calculateUnpaidFees()}</div>
    </div>
  );
};
