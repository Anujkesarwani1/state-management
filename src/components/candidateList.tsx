import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { create } from 'domain';

function createData(
  id: number,
  name: string,
  adjudication: string,
  status: string,
  location: string,
  date: string,
) {
  return { id, name, adjudication, status, location, date };
}

export default function CandidateList() {

//   const [filteredData, setFilteredData] = useState(rows);
//   const [stat, setStat] = useState("All");
//   useEffect(() => {
//     if (stat === "All") {
//       setFilteredData(rows);
//       // filteredData = filteredRows;
//     } else if (stat === "CLEAR" || stat === "CONSIDER") {
//       setFilteredData(rows.filter((dt) => dt.status === stat));
//     } else {
//       setFilteredData(rows.filter((dt) => dt.adjudication === stat));
//     }
//     /*setFilteredData(
//       stat === "All" ? rows : rows.filter((dt) => dt.s
// /*setFilteredData(
//       stat === "All" ? rows : rows.filter((dt) => dt.status === stat)
//     );*/
//   }, [stat]);


  const [nameId, setNameId] = useState(0);
  useEffect(() => setNameId(1), []);

  const location = useLocation();
  const [myData, setMyData] = useState('-');
  useEffect(() => {
    // if (location.state.engage === true && nameId === 1) {
    //   // setMyData(rows.filter((dt) => dt.id === stat));
    //   // console.log(location.state.engage);
    //   // console.log(name);
    //   setMyData('ENGAGE');
    // }
    // console.log(nameId);
  }, [location.state, nameId]);
  const rows = [
    createData(1, 'John Smith', '-', 'CLEAR', 'Barrouallie', '2/22/2022'),
    createData(2, 'Serene', '-', 'CLEAR', 'Vanrsborg', '3/13/2022'),

    // createData(
    //   2,
    //   <Link to='/candidateInfo' style={{ color: 'darkblue', textDecoration: 'none'}} state={{name}}>Serene</Link>,
    //   <Typography variant='body2' color='green'>{myData}</Typography>,
    //   <Typography variant='body2' color='green'>CLEAR</Typography>,
    //   <Typography variant='body2'>Vanersborg</Typography>,
    //   <Typography variant='body2'>2/12/2022</Typography>,
    // ),
  ];

  return (
    <Paper component={Container}>
      <h2>Candidate Information</h2>
      <Divider />
      {/* <CandidateInfo/> */}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size='small' aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>NAME</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>ADJUDICATION</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>STATUS</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>LOCATION</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>DATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                <Link to='/candidateInfo' style={{ color: 'darkblue', textDecoration: 'none'}} state={{nameId}}>{row.name}</Link>
                </TableCell>
                {/* <TableCell align="right">{row.id}</TableCell> */}
                <TableCell align="right">{myData}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.location}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            ))}
            {/* {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" >{row.name}</TableCell>
                <TableCell>{row.adjudication}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

