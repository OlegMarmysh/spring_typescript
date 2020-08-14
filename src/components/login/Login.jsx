import React, { useState } from 'react'
import style from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { signIn } from '../../redux/loginPageReducer'
import { setErrorMessage } from '../../redux/loginAction'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const errorMessage = useSelector(state => state.loginPage.errorMessage)
  const history = useHistory()

  const onLoginChange = (e) => {
    setLogin(e.currentTarget.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn(login, password)).then(() => {
      if (localStorage.getItem('token')) {
        history.push('/spring')
      }
    })
  }
  const onRegistration = () => {
    dispatch(setErrorMessage(''))
  }
  return (
    <div className={style.wrapper}>
      <form onSubmit={onSubmit} className={style.loginForm}>
        <h2>Sign in</h2>
        <input type="text" placeholder="login" value={login} onChange={onLoginChange}/>
        <input type="password" placeholder="password" value={password} onChange={onPasswordChange}/>
        <div>
          <span>{errorMessage}</span>
        </div>
        <div>
          <button className={style.loginBtn}>Sign in</button>
          <NavLink to='/register' className={style.registerLink} onClick={onRegistration}>Registration</NavLink>
        </div>
      </form>
    </div>
  )
}

export default Login
