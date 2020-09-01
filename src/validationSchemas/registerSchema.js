import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email('Invalid email address'),
  password: Yup.string()
    .required()
    .matches(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$/, 'Invalid password'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  firstname: Yup.string()
    .required()
    .min(3, 'FirstName length is more than 3 characters'),
  lastname: Yup.string()
    .required()
    .min(3, 'FirstName length is more than 3 characters'),
  age: Yup.number()
    .required()
    .min(14, 'Invalid age')
})
