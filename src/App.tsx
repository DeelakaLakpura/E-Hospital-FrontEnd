import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import RequestSummary from './components/Requests';
import Table from './components/Table';
import SearchFilter from './components/SearchFilter';

function App() {
  const handleDownload = () => {
    console.log('Download initiated');
  };

  return (
    <div className="App">
      <Navbar />
      <RequestSummary />
     <SearchFilter onSearch={function (filters: { searchTerm: string; startDate: Date | null; status: string; department: string; }): void {
        throw new Error('Function not implemented.');
      } } onDownload={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Table />
    </div>
  );
}

export default App;
