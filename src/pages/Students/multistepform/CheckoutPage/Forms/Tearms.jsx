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

export default function Tearms(props) {
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
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
        </Grid>
        <Grid item xs={12} sm={6} md={4} >
          
          <Typography variant="P" color="initial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores earum quo possimus porro, optio similique corrupti magni, assumenda autem officia, delectus sint necessitatibus et? Ratione dignissimos repudiandae voluptatibus quidem?
          </Typography>
          <br />
          <CheckboxField
            name={email.name}
            label={email.label}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
