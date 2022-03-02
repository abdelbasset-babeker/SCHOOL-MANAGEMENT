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
  }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [birthday.name]: '',
  [gender.name]: '',
  [studylevel.name]: '',
  [fathername.name]: '',
  [phonenumber.name]: '',
  [fatherphone.name]: '',
  [address.name]: '',
  [email.name]: '',
};
