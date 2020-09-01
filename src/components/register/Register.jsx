import React from 'react'
import style from './Register.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { register } from '../../redux/registerPageReducer'
import { Field, Form, Formik } from 'formik'
import { registerSchema } from '../../validationSchemas/registerSchema'
import { ErrorMsg } from '../../helpers/ErrorMsgFormik'
import { registerActions } from '../../redux/registerAction'

const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const errorMsg = useSelector(state => state.registerPage.errorMessage)

  const onSubmit = async ({ email, password, firstname, lastname, age }) => {
    try {
      const res = await dispatch(register(email, password, firstname, lastname, age))
      if (!res) {
        history.push('/login')
      }
    } catch (e) {
      console.log(e)
    }
  }
  const onCancelRegistration = () => {
    dispatch(registerActions.setErrorMessage(''))
  }

  return (
    <div className={style.wrapper}>
      <div className={style.loginForm}>
        <h2>Registration</h2>
        <Formik onSubmit={onSubmit}
          validationSchema={registerSchema}
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            age: ''
          }}>
          {() => (
            <Form>
              <Field name='email' placeholder='email' type='email'/>
              <ErrorMsg name='email'/>
              <Field name='password' placeholder='password' type='password'/>
              <ErrorMsg name='password'/>
              <Field name='confirmPassword' placeholder='confirm password' type='password'/>
              <ErrorMsg name='confirmPassword'/>
              <Field name='firstname' placeholder='firstname' type='text'/>
              <ErrorMsg name='firstname'/>
              <Field name='lastname' placeholder='lastname' type='text'/>
              <ErrorMsg name='lastname'/>
              <Field name='age' placeholder='age' type='text'/>
              <ErrorMsg name='age'/>
              {<div style={{ color: 'red' }}>{errorMsg}</div>}
              <div>
                <button className={style.loginBtn}>Registration</button>
                <NavLink to='/login'><button className={style.loginBtn} onClick={onCancelRegistration}>Cancel</button></NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Register
