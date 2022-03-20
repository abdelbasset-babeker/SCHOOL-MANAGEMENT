import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from 'react'
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles({
    table: {
        Width: '50%',
    },
});

let i = 0;

function createData(Course, paymentMethod) {
    return { Course, paymentMethod };
}

export default function Atendedcourses({ info, handleDelete }) {
    const classes = useStyles()

    return (
        <TableContainer >
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell flex >id</TableCell>
                        <TableCell flex >Course</TableCell>
                        <TableCell>Payment Method</TableCell>
                        <TableCell align="right" >Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {info.map((row) => (                        
                        <TableRow key={row.course}>
                            <TableCell >{row.id}</TableCell>
                            <TableCell >{row.course}</TableCell>
                            <TableCell >{row.paymentmethod}</TableCell>
                            <TableCell align="right" >
                                <IconButton aria-label="delete" className={classes.margin} onClick={() => handleDelete(row.id)} >
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