import jsPDF from 'jspdf';
import { exportToCsv } from 'papaparse';

export const exportToPDF = (data) => {
  const doc = new jsPDF();
  doc.text(JSON.stringify(data, null, 2), 10, 10);
  doc.save('payouts.pdf');
};

export const exportToCSV = (data) => {
  const csv = data.map(row => Object.values(row));
  exportToCsv(csv, 'payouts.csv');
};