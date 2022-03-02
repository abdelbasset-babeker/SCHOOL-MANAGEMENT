import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect, useState } from 'react'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(Course, paymentMethod) {
    return { Course, paymentMethod };
}

export default function Atendedcourses() {
    const classes = useStyles();
    const [data, setdata] = useState([]);




    useEffect(() => {
        fetch('http://localhost:800/atendedcourse')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell flex
                        >Course</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right" style={{marginRight : 5 }}>Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell >{row.course}</TableCell>
                            <TableCell >{row.paymentMethod}</TableCell>
                            <TableCell align="right" >
                                <IconButton aria-label="delete" className={classes.margin}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}