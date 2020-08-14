import React, { useState } from 'react'
import style from './Register.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { register, resetRegisterError } from '../../redux/registerPageReducer'
import { setErrorMessage } from '../../redux/registerAction'

const Register = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const errorMessage = useSelector(state => state.registerPage.errorMessage)
  const loginError = useSelector(state => state.registerPage.loginError)
  const passError = useSelector(state => state.registerPage.passError)
  const firstNameError = useSelector(state => state.registerPage.firstNameError)
  const lastNameError = useSelector(state => state.registerPage.lastNameError)
  const ageError = useSelector(state => state.registerPage.ageError)

  const onLoginChange = (e) => {
    setLogin(e.currentTarget.value)
  }
  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value)
  }
  const onPasswordRepeatChange = (e) => {
    setPasswordRepeat(e.currentTarget.value)
  }
  const onFirstNameChange = (e) => {
    setFirstName(e.currentTarget.value)
  }
  const onLastNameChange = (e) => {
    setLastName(e.currentTarget.value)
  }
  const onAgeChange = (e) => {
    setAge(e.currentTarget.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      if (password !== passwordRepeat) {
        dispatch(setErrorMessage('Passwords must match'))
      } else {
        const res = await dispatch(register(login, password, firstName, lastName, age))
        if (!res) {
          history.push('/login')
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  const onCancelRegistration = () => {
    dispatch(resetRegisterError())
  }

  return (
    <div className={style.wrapper}>
      <form onSubmit={onSubmit} className={style.loginForm}>
        <h2>Registration</h2>
        <input type="text" placeholder="login" value={login} onChange={onLoginChange} required/>
        <div>
          <span>{loginError.msg}</span>
        </div>
        <input type="password" placeholder="password" value={password} onChange={onPasswordChange} required/>
        <div>
          <span>{passError.msg}</span>
        </div>
        <input type="password" placeholder="confirm password" value={passwordRepeat} onChange={onPasswordRepeatChange} required/>
        <input type="text" placeholder="firstName" value={firstName} onChange={onFirstNameChange} required/>
        <div>
          <span>{firstNameError.msg}</span>
        </div>
        <input type="text" placeholder="lastName" value={lastName} onChange={onLastNameChange} required/>
        <div>
          <span>{lastNameError.msg}</span>
        </div>
        <input type="text" placeholder="age" value={age} onChange={onAgeChange} required/>
        <div>
          <span>{ageError.msg}</span>
        </div>
        <div>
          <span>{errorMessage}</span>
        </div>
        <div>
          <button className={style.loginBtn}>Registration</button>
          <NavLink to='/login'><button className={style.loginBtn} onClick={onCancelRegistration}>Cancel</button></NavLink>
        </div>
      </form>
    </div>
  )
}

export default Register
