import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

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

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'United States'
  },
  {
    value: '222',
    label: 'Italy'
  },
  {
    value: '333',
    label: 'Vietnam'
  }
];

export default function PersonalInformation(props) {
  const {
    formField: {
      firstName,
      lastName,
      birthday,
      gender,
      studylevel,
      fathername,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={12} >
        </Grid>

        <Grid item xs={12} sm={12} md={6} >
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <InputField name={birthday.name} label={birthday.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <InputField name={fathername.name} label={fathername.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <SelectField
            name={studylevel.name}
            label={studylevel.label}
            data={studylevels}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <SelectField
            name={gender.name}
            label={gender.label}
            data={genders}
            fullWidth
          />
        </Grid>



      </Grid>
    </React.Fragment>
  );
}
