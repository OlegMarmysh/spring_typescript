import React from 'react'
import style from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { signIn } from '../../redux/loginPageReducer'
import { loginActions } from '../../redux/loginAction'
import { Field, Form, Formik } from 'formik'
import { loginSchema } from '../../validationSchemas/loginSchema'
import { ErrorMsg } from '../../helpers/ErrorMsgFormik'

const Login = () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(state => state.loginPage.errorMessage)
  const history = useHistory()

  const onSubmit = ({ login, password }) => {
    dispatch(signIn(login, password)).then(() => {
      if (localStorage.getItem('token')) {
        history.push('/spring')
      }
    })
  }
  const onRegistration = () => {
    dispatch(loginActions.setErrorMessage(''))
  }
  return (
    <div className={style.wrapper}>
      <div className={style.loginForm}>
        <h2>Sign in</h2>
        <Formik onSubmit={onSubmit}
          validationSchema={loginSchema}
          initialValues={{
            login: '',
            password: ''
          }}>
          {() => (
            <Form>
              <Field name='login' placeholder='login' type='text'/>
              <ErrorMsg name='login'/>
              <Field name='password' placeholder='password' type='password'/>
              <ErrorMsg name='password'/>
              <div>
                <span>{errorMessage}</span>
              </div>
              <div>
                <button className={style.loginBtn}>Sign in</button>
                <NavLink to='/register' className={style.registerLink} onClick={onRegistration}>Registration</NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
