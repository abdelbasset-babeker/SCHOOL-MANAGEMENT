import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckoutPage from './multistepform/CheckoutPage/CheckoutPage'
import student from './student.css';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  page_title: {
    fontWeight: '600',
    marginLeft: '3rem',
  },
  page_subtitle: {
    marginLeft: '3rem',
  },
}));


export default function Newstudent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.page_title} variant="h3" color="initial">Submit New Student</Typography>
      <Typography className={classes.page_subtitle} variant="" color="initial">Welcom to our foundition </Typography>

      <Paper className='paperilement'>
        <div className='aaaa'>
          <CheckoutPage />
        </div>
      </Paper>
    </div>

  );
}



