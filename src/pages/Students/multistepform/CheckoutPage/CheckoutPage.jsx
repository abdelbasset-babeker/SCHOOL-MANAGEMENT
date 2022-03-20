import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import PersonalInformation from './Forms/PersonalInformation';
import Contactinfo from './Forms/Contactinfo';
import Courses from './Forms/Courses';
import Tearms from './Forms/Tearms';
import CheckoutSuccess from './CheckoutSuccess';
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import useStyles from './styles';


const steps = ['Personal Information', 'Contact info', 'Courses', 'Tearm & Condition'];
const { formId, formField } = checkoutFormModel;



function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInformation formField={formField} />;
    case 1:
      return <Contactinfo formField={formField} />;
    case 2:
      return <Courses formField={formField}/>;
    case 3:
      return <Tearms formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}




export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(2);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    
    alert(JSON.stringify(values, null, 9));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment >
      <Typography component="h1" variant="h5" align="center">
        Please Make Sure To Full Everything Right 
      </Typography>
      <Typography  component="P" variant="P" align="center">
        Please Make Sure To Full Everything Right 
      </Typography>

      <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => ( 

              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep > 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper} >
                      {isLastStep ? 
                      <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Submit
                    </Button> : <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                   Next
                    </Button>}
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                      
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
