import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
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
    courseData
  }
} = checkoutFormModel

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [birthday.name]: Yup.string().required(`${birthday.requiredErrorMsg}`),
    [gender.name]: Yup.string()
      .nullable()
      .required(`${gender.requiredErrorMsg}`),
    [studylevel.name]: Yup.string()
      .nullable()
      .required(`${studylevel.requiredErrorMsg}`),
    [fathername.name]: Yup.string().required(`${fathername.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [phonenumber.name]: Yup.string().required(`${phonenumber.requiredErrorMsg}`),
    [fatherphone.name]: Yup.string().required(`${fatherphone.requiredErrorMsg}`),
    [address.name]: Yup.string().required(`${address.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
  })
 
];
