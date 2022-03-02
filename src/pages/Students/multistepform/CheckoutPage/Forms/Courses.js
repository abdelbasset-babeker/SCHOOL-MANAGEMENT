import React, { useEffect, useState,Component } from 'react';
import { Button, Grid, IconButton, MenuItem, TextField, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';
import AddCircle from '@material-ui/icons/AddCircle';
import Atendedcourses from './Atendedcourses';




export default function Courses(props) {
  const [Cours, setCours] = useState('');
  const [Paymenetmathod, setPaymenetmathod] = useState('');



 const  handleSubmit = (e) => {
    e.preventDefault();
    alert('Your name is: ' +Cours+ '\nYour age is: ' + Paymenetmathod);
  }



  return (
    <form noValidate onSubmit={handleSubmit} >
      <TextField
        name='pay'
        label="Payment"
        onChange={(e) => setCours(e.target.value)}
        helperText="Please select your courses"
        variant="outlined"
        fullWidth
      ></TextField>
      <TextField
        name='cours'
        label="Course"
        onChange={(e) => setPaymenetmathod(e.target.value)}
        helperText="Please select your Paymenet Mathod"
        variant="outlined"
        fullWidth
      ></TextField>
      <Button type="submit">submit</Button>
    </form>
  )
}

