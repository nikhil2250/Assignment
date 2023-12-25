import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const OCRTable = ({ data }) => {
    // const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');

  // Filter function based on status
//   const filteredData = data.filter((item) => {
//     if (filterStatus === 'all') {
//       return true; // Show all records
//     } else {
//       return item.status === filterStatus; // Filter by status
//     }
//   });

    const [filter, setFilter] = useState('');

    const myfunction = (event) => {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("TableRow");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("TableCell")[1];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }       
        }
    };    

  return (
    <div>
        {/* <p>{data.identificationNumber}</p> */}
      {/* Filter dropdown */}
      {/* <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="success">Success</option>
        <option value="failure">Failure</option>
      </select> */}

      {/* Table to display OCR operations */}
      <input
        type="text"
        id="myInput"
        onKeyUp={myfunction}
        placeholder="Search for names.."
        title="Type in a name"
      />
      <Table id="myTable">
        <TableHeader>
          <TableRow>
            <TableHead>Identification Number</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Date of Birth</TableHead>
            <TableHead>Date of Issue</TableHead>
            <TableHead>Date of Expiry</TableHead>
            <TableHead>Status</TableHead>
            {/* Add more columns for other fields */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.identificationNumber || 'null'}>
              <TableCell>{item.identificationNumber || 'null'}</TableCell>
              <TableCell>{item.name || 'null'}</TableCell>
              <TableCell>{item.lastName || 'null'}</TableCell>
              <TableCell>{item.dateOfBirth || 'null'}</TableCell>
              <TableCell>{item.dateOfIssue || 'null'}</TableCell>
              <TableCell>{item.dateOfExpiry || 'null'}</TableCell>
              <TableCell>{item.status || 'null'}</TableCell>
              {/* Add more cells for other fields */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OCRTable;
