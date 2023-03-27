import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Divider, Button, Typography } from '@mui/material';
import React from 'react';

function createData(
    search: string | any,
    status: any,
    date: any,
) {
    return { search, status, date };
}

const CourtSearch = () => {
    const rows = [
        createData(
            <Button sx={{ color: 'darkblue', textTransform: 'capitalize' }}>John Smith</Button>,
            <Button color='success'>Clear</Button>,
            <Typography variant='body1'>2/22/2022</Typography>,
        ),
    ];

    return (
        <Paper component={Container}>
            <Typography variant='h6'>Court Search</Typography>
            <Divider />
            <TableContainer>
                <Table sx={{ minWidth: 250 }} size='small' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>SEARCH</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>STATUS</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.search}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.search}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>{row.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default CourtSearch;