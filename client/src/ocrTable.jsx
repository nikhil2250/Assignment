import React, { useState } from 'react';
import Loader from './components/Loader.jsx';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

const OCRTable = ({ data, generatingImg }) => {
    const [search, setSearch] = useState('');

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {generatingImg && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default OCRTable;
