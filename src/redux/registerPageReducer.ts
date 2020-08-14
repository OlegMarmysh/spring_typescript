import {
  SET_LOGIN_ERROR,
  SET_PASS_ERROR,
  SET_ERROR_MESSAGE,
  setErrorMessage,
  setLoginError,
  setPassError,
  SET_FIRSTNAME_ERROR,
  SET_LASTNAME_ERROR,
  SET_AGE_ERROR,
  setFirstNameError,
  setLastNameError, setAgeError
} from './registerAction'
import { authAPI } from '../api'

export type RegisterErrorType = {
  value: string,
  msg: string,
  param: string,
  location: string
}

export type InitialStateType = {
  errorMessage: string,
  loginError: Error | Object,
  passError: Error | Object,
  firstNameError: Error | Object,
  lastNameError: Error | Object,
  ageError: Error | Object
}

const initialState = {
  errorMessage: '',
  loginError: {},
  passError: {},
  firstNameError: {},
  lastNameError: {},
  ageError: {}
}

const registerPageReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
    case SET_LOGIN_ERROR:
    case SET_PASS_ERROR:
    case SET_FIRSTNAME_ERROR:
    case SET_LASTNAME_ERROR:
    case SET_AGE_ERROR: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export const resetRegisterError = () => (dispatch: any) => {
  dispatch(setErrorMessage(''))
  dispatch(setLoginError({}))
  dispatch(setPassError({}))
  dispatch(setFirstNameError({}))
  dispatch(setLastNameError({}))
  dispatch(setAgeError({}))
}

export const register = (login: string, password: string, firstName: string, lastName: string, age: number) => async (dispatch: any) => {
  try {
    await authAPI.register(login, password, firstName, lastName, age)
    dispatch(resetRegisterError())
  } catch (error) {
    dispatch(resetRegisterError())
    dispatch(setErrorMessage(error.response.data.error))
    if (error.response.data.errors) {
      dispatch(setLoginError(error.response.data.errors.find((error: RegisterErrorType) => error.param === 'login') || { msg: '' }))
      dispatch(setPassError(error.response.data.errors.find((error: RegisterErrorType) => error.param === 'password') || { msg: '' }))
      dispatch(setFirstNameError(error.response.data.errors.find((error: RegisterErrorType) => error.param === 'firstName') || { msg: '' }))
      dispatch(setLastNameError(error.response.data.errors.find((error: RegisterErrorType) => error.param === 'lastName') || { msg: '' }))
      dispatch(setAgeError(error.response.data.errors.find((error: RegisterErrorType) => error.param === 'age') || { msg: '' }))
    }
    console.log(error)
    return error
  }
}

export default registerPageReducer
