
import React, { useState } from 'react';
import { Grid, IconButton, MenuItem, TextField, Typography } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import Atendedcourses from './Atendedcourses';
import Button from '@material-ui/core/Button';
import { Field, FieldArray, Formik } from 'formik';
import Style from './Style.css'
import { InputField } from '../../FormFields';





const coursesList = [
  {
    value: 'math',
    label: 'Math'
  },
  {
    value: 'arabic',
    label: 'Arabic'
  },
  {
    value: 'english',
    label: 'English'
  },
  {
    value: 'phisq',
    label: 'Phisq'
  }
];

const paymentmethods = [

  {
    value: 'monthly',
    label: 'Monthly'
  },
  {
    value: 'semastrial',
    label: 'Semastrial'
  },
  {
    value: 'yearly',
    label: 'Yearly'
  },
  {
    value: 'level',
    label: 'Level'
  }
];


export default function Courses(props) {

  const {
    formField: {
      courseData,   
    }
  } = props;

  const [handelerror1, setHandelerror1] = useState(false)
  const [handelerror2, setHandelerror2] = useState(false)
  const [info, setinfo] = useState([])


  const [courses, setCourses1] = useState([])
  const [payments, setPayments1] = useState([])



  const pushToArry = () => {

    let pickedCourse = document.getElementsByName('course')[0].value
    let pickedPayment = document.getElementsByName('paymentmethod')[0].value


    setCourses1([...courses, pickedCourse])
    setPayments1([...payments, pickedPayment])

    console.log(courses);
    console.log(payments);



    setHandelerror1(false)
    setHandelerror2(false)

    if (pickedCourse === "") {
      setHandelerror1(true)
    }
    if (pickedPayment === "") {
      setHandelerror2(true)
    }

    if (pickedCourse !== "" && pickedPayment !== "") {
      setinfo([...info, 
        {
        course: pickedCourse,
        paymentmethod: pickedPayment,
        id: info.length + 1
      }
    ])

    }
  }

  const handleDelete = (id) => {
    const newarry = info.filter(info => info.id !== id)
    setinfo(newarry)
  }


  const submitValues = () => {

    if (info.length !== 0 ){
      let mylist = [
        ...new Map(info.map((item) => [item["course"] , item])).values()
      ];
      alert(JSON.stringify(info, null, 2));
    }

  }



  return (
    <React.Fragment>
      <div className='tabelarea' >
        <Grid container spacing={3}>

        <Grid item xs={12} sm={12} lg={2} xl={2}>
        </Grid>
        
        </Grid>
      </div>
    </React.Fragment >
  );
}


