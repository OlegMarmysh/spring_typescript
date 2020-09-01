import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  login: Yup.string()
    .required()
    .email('Invalid email address'),
  password: Yup.string()
    .required()
    .matches(/^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,}$/, 'Invalid password')
})
