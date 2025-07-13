
'use client';

import { useState } from 'react';

export const CertificateUploadForm = ({ onAddCertificate }) => {
  const [bank, setBank] = useState('');
  const [branch, setBranch] = useState('');
  const [date, setDate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCertificate({ bank, branch, date, details: `File: ${file ? file.name : 'No file selected'}` });
    setBank('');
    setBranch('');
    setDate('');
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="bank" className="form-label">בנק</label>
        <select id="bank" className="form-select" value={bank} onChange={(e) => setBank(e.target.value)} required>
          <option value="">בחר בנק</option>
          <option value="Bank A">Bank A</option>
          <option value="Bank B">Bank B</option>
          <option value="Bank C">Bank C</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="branch" className="form-label">סניף</label>
        <select id="branch" className="form-select" value={branch} onChange={(e) => setBranch(e.target.value)} required>
          <option value="">בחר סניף</option>
          <option value="Branch 1">Branch 1</option>
          <option value="Branch 2">Branch 2</option>
          <option value="Branch 3">Branch 3</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">תאריך</label>
        <input type="date" id="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="file" className="form-label">קובץ האישור</label>
        <input type="file" id="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <div className="border p-3 text-center mb-3">
        <p>גרור לכאן את הקובץ או לחץ לבחירה</p>
      </div>
      <button type="submit" className="btn btn-primary">העלאת אישור</button>
    </form>
  );
};
