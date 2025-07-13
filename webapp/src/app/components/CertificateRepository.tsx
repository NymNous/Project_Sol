
'use client';

import { useState, useEffect } from 'react';
import { Button, Modal, Pagination } from 'react-bootstrap';
import { CertificateUploadForm } from './CertificateUploadForm';

export const CertificateRepository = () => {
  const [certificates, setCertificates] = useState([]);
  const [filteredCertificates, setFilteredCertificates] = useState([]);
  const [filter, setFilter] = useState({ bank: '', branch: '', date: '' });
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const initialCertificates = [
      { id: 1, bank: 'Bank A', branch: 'Branch 1', date: '2025-01-01', details: 'Details about certificate 1' },
      { id: 2, bank: 'Bank B', branch: 'Branch 2', date: '2025-02-15', details: 'Details about certificate 2' },
      { id: 3, bank: 'Bank C', branch: 'Branch 3', date: '2025-03-20', details: 'Details about certificate 3' },
      { id: 4, bank: 'Bank A', branch: 'Branch 4', date: '2025-04-10', details: 'Details about certificate 4' },
      { id: 5, bank: 'Bank D', branch: 'Branch 5', date: '2025-05-05', details: 'Details about certificate 5' },
      { id: 6, bank: 'Bank B', branch: 'Branch 6', date: '2025-06-12', details: 'Details about certificate 6' },
      { id: 7, bank: 'Bank E', branch: 'Branch 7', date: '2025-07-18', details: 'Details about certificate 7' },
    ];
    setCertificates(initialCertificates);
    setFilteredCertificates(initialCertificates);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleSearch = () => {
    let filtered = certificates;
    if (filter.bank) {
      filtered = filtered.filter(cert => cert.bank.toLowerCase().includes(filter.bank.toLowerCase()));
    }
    if (filter.branch) {
      filtered = filtered.filter(cert => cert.branch.toLowerCase().includes(filter.branch.toLowerCase()));
    }
    if (filter.date) {
      filtered = filtered.filter(cert => cert.date === filter.date);
    }
    setFilteredCertificates(filtered);
    setCurrentPage(1);
  };

  const handleAddCertificate = (newCertificate) => {
    const updatedCertificates = [...certificates, { ...newCertificate, id: certificates.length + 1 }];
    setCertificates(updatedCertificates);
    setFilteredCertificates(updatedCertificates);
    setShowModal(false);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCertificates.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        העלאת אישור חדש
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>העלאת אישור חדש</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CertificateUploadForm onAddCertificate={handleAddCertificate} />
        </Modal.Body>
      </Modal>

      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">סינון וחיפוש במאגר</h5>
          <div className="row">
            <div className="col-md-4">
              <input type="text" name="bank" className="form-control" placeholder="בנק" onChange={handleFilterChange} />
            </div>
            <div className="col-md-4">
              <input type="text" name="branch" className="form-control" placeholder="סניף" onChange={handleFilterChange} />
            </div>
            <div className="col-md-4">
              <input type="date" name="date" className="form-control" onChange={handleFilterChange} />
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={handleSearch}>חיפוש</button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span>נמצאו {filteredCertificates.length} תוצאות</span>
      </div>

      <div className="row">
        {currentItems.map(cert => (
          <div key={cert.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{cert.bank}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{cert.branch}</h6>
                <p className="card-text">{cert.date}</p>
                <p className="card-text">{cert.details}</p>
                <a href="#" className="btn btn-primary">פרטי קשר</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination>
        {[...Array(totalPages).keys()].map(number => (
          <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
