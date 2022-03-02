import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import DatePickerField from '../../FormFields/DatePickerField';
import InputField from '../../FormFields/InputField';



const studylevels = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'New York'
  },
  {
    value: '2',
    label: 'Chicago'
  },
  {
    value: '3',
    label: 'Saigon'
  }
];

const genders = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Florida'
  },
  {
    value: '22',
    label: 'Michigan'
  },
  {
    value: '33',
    label: 'Texas'
  }
];

export default function Contactinfo(props) {
  const {
    formField: {
      firstName,
      lastName,
      birthday,
      gender,
      studylevel,
      fathername,
      phonenumber,
      fatherphone,
      address,
      email,
      course,
      paymentmethod,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>

        <Grid container spacing={3} md={2}>
        </Grid>

        <Grid container spacing={3} md={8}>
          <Grid item xs={12} sm={6} md={6}>
            <InputField name={phonenumber.name} label={phonenumber.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <InputField name={fatherphone.name} label={fatherphone.label} fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputField name={address.name} label={address.label} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <InputField name={email.name} label={email.label} fullWidth />
          </Grid>
        </Grid>

        <Grid container spacing={3} md={2}>
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
