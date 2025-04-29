
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export const Holidays = () => {
  const holidays = [
  { id: 1, name: 'New Year\'s Day', date: '2025-01-01', description: 'New Year\'s Day' },
  { id: 2, name: 'Guru Gobind Singh Jayanti', date: '2025-01-06', description: 'Guru Gobind Singh Jayanti' },
  { id: 3, name: 'Makar Sankranti', date: '2025-01-14', description: 'Makar Sankranti' },
  { id: 4, name: 'Pongal', date: '2025-01-14', description: 'Pongal' },
  { id: 5, name: 'Republic Day', date: '2025-01-26', description: 'Republic Day' },
  { id: 6, name: 'Vasant Panchami', date: '2025-02-02', description: 'Vasant Panchami' },
  { id: 7, name: 'Guru Ravidas Jayanti', date: '2025-02-12', description: 'Guru Ravidas Jayanti' },
  { id: 8, name: 'Shivaji Jayanti', date: '2025-02-19', description: 'Shivaji Jayanti' },
  { id: 9, name: 'Maha Shivaratri', date: '2025-02-26', description: 'Maha Shivaratri' },
  { id: 10, name: 'Holika Dahan', date: '2025-03-13', description: 'Holika Dahan' },
  { id: 11, name: 'Holi', date: '2025-03-14', description: 'Holi' },
  { id: 12, name: 'Ramzan Id/Eid-ul-Fitr', date: '2025-03-31', description: 'Ramzan Id/Eid-ul-Fitr' },
  { id: 13, name: 'Rama Navami', date: '2025-04-06', description: 'Rama Navami' },
  { id: 14, name: 'Mahavir Jayanti', date: '2025-04-10', description: 'Mahavir Jayanti' },
  { id: 15, name: 'Vaisakhi', date: '2025-04-13', description: 'Vaisakhi' },
  { id: 16, name: 'Ambedkar Jayanti', date: '2025-04-14', description: 'Ambedkar Jayanti' },
  { id: 17, name: 'Good Friday', date: '2025-04-18', description: 'Good Friday' },
  { id: 18, name: 'Easter Day', date: '2025-04-20', description: 'Easter Day' },
  { id: 19, name: 'Birthday of Rabindranath Tagore', date: '2025-05-09', description: 'Birthday of Rabindranath Tagore' },
  { id: 20, name: 'Buddha Purnima', date: '2025-05-12', description: 'Buddha Purnima' },
  { id: 21, name: 'Bakrid/Eid ul-Adha', date: '2025-06-07', description: 'Bakrid/Eid ul-Adha' },
  { id: 22, name: 'Rath Yatra', date: '2025-06-27', description: 'Rath Yatra' },
  { id: 23, name: 'Muharram', date: '2025-07-06', description: 'Muharram' },
  { id: 24, name: 'Raksha Bandhan', date: '2025-08-09', description: 'Raksha Bandhan' },
  { id: 25, name: 'Independence Day', date: '2025-08-15', description: 'Independence Day' },
  { id: 26, name: 'Janmashtami', date: '2025-08-16', description: 'Janmashtami' },
  { id: 27, name: 'Ganesh Chaturthi', date: '2025-08-27', description: 'Ganesh Chaturthi' },
  { id: 28, name: 'Onam', date: '2025-09-05', description: 'Onam' },
  { id: 29, name: 'Milad un-Nabi', date: '2025-09-05', description: 'Milad un-Nabi' },
  { id: 30, name: 'Maha Saptami', date: '2025-09-29', description: 'Maha Saptami' },
  { id: 31, name: 'Maha Ashtami', date: '2025-09-30', description: 'Maha Ashtami' },
  { id: 32, name: 'Maha Navami', date: '2025-10-01', description: 'Maha Navami' },
  { id: 33, name: 'Mahatma Gandhi Jayanti', date: '2025-10-02', description: 'Mahatma Gandhi Jayanti' },
  { id: 34, name: 'Dussehra', date: '2025-10-02', description: 'Dussehra' },
  { id: 35, name: 'Maharishi Valmiki Jayanti', date: '2025-10-07', description: 'Maharishi Valmiki Jayanti' },
  { id: 36, name: 'Karva Chauth', date: '2025-10-10', description: 'Karva Chauth' },
  { id: 37, name: 'Naraka Chaturdasi', date: '2025-10-20', description: 'Naraka Chaturdasi' },
  { id: 38, name: 'Diwali', date: '2025-10-20', description: 'Diwali' },
  { id: 39, name: 'Govardhan Puja', date: '2025-10-22', description: 'Govardhan Puja' },
  { id: 40, name: 'Bhai Duj', date: '2025-10-23', description: 'Bhai Duj' },
  { id: 41, name: 'Chhat Puja', date: '2025-10-28', description: 'Chhat Puja' },
  { id: 42, name: 'Guru Nanak Jayanti', date: '2025-11-05', description: 'Guru Nanak Jayanti' },
  { id: 43, name: 'Guru Tegh Bahadur\'s Martyrdom Day', date: '2025-11-24', description: 'Guru Tegh Bahadur\'s Martyrdom Day' },
  { id: 44, name: 'Christmas Eve', date: '2025-12-24', description: 'Christmas Eve' },
  { id: 45, name: 'Christmas Day', date: '2025-12-25', description: 'Christmas Day' }
];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holidays.map((holiday) => (
            <TableRow key={holiday.id}>
              <TableCell className="font-medium">{holiday.name}</TableCell>
              <TableCell>{new Date(holiday.date).toLocaleDateString()}</TableCell>
              <TableCell>{holiday.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
