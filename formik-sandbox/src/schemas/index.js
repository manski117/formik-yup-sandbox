import * as yup from "yup";

//setup regex variables
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

//schema is equal to an object that we setup with this chained shape method
export const basicSchema = yup.object().shape({
    //put the different values here you want to validate for
    email: yup.string().email('please enter a valid email, man').required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string().min(5).matches(passwordRules, {message: 'Please create a stronger password'}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'passwords must match').required("Required"),
});