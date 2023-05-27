import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { IconButton } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


{/* the data will be fitched from data base */ }
const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

export default function ApplicationsTable() {
  return (
    <div
    id="form container"
    className="flex flex-col items-center justify-center rounded-lg"
    style={{ backgroundColor: '#f8e5ee' }}>
    <div style={{ paddingRight: '40%' }}>
      <div>
      <TableContainer component={Paper} style={{ marginRight: '-40%' }}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: '#B370B0' }} sx={{ minWidth: 450 }} >
            <TableRow sx={{ minWidth: 11750 }}>
              <TableCell style={{ color: 'white' }} >Applicant</TableCell>
              
              <TableCell style={{ color: 'white',paddingLeft:'11%' }} >Phone number</TableCell>
              
              <TableCell style={{ color: 'white', paddingLeft:'7%'  }} >Email</TableCell>
              <TableCell style={{ color: '#B370B0' }} >Eml</TableCell>
              


            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ paddingRight: '50%' }}>
                <a href="url" sx={{ color: '#B370B0' }} style={{ color: '#B370B0' }}>
                  {row.name} </a>
                </TableCell>

                <TableCell align="right">
                  PhoneNumber
                  </TableCell>
                  <TableCell align="right">
                  Email
                  </TableCell>

                
                <TableCell align="right"><a href="url" sx={{ color: '#B370B0' }} style={{ color: '#B370B0' }}> accept for interview</a></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
    </div>
  );
}