import { registerActions } from './registerAction'
import { authAPI } from '../api'
import { ActionsType, CommonThunkType } from './store'

export type RegisterErrorType = {
  value: string,
  msg: string,
  param: string,
  location: string
}

const initialState = {
  errorMessage: '',
  loginError: {} as RegisterErrorType | Object,
  passError: {} as RegisterErrorType | Object,
  firstNameError: {} as RegisterErrorType | Object,
  lastNameError: {} as RegisterErrorType | Object,
  ageError: {} as RegisterErrorType | Object
}

export type RegisterInitialState = typeof initialState

type RegisterActionsType = ActionsType<typeof registerActions>

const registerPageReducer = (state = initialState,
  action: RegisterActionsType): RegisterInitialState => {
  switch (action.type) {
    case 'spring/registerPage/SET_ERROR_MESSAGE':
    case 'spring/registerPage/SET_LOGIN_ERROR':
    case 'spring/registerPage/SET_PASS_ERROR':
    case 'spring/registerPage/SET_FIRSTNAME_ERROR':
    case 'spring/registerPage/SET_LASTNAME_ERROR':
    case 'spring/registerPage/SET_AGE_ERROR': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

const {
  setAgeError, setErrorMessage, setFirstNameError,
  setLastNameError, setLoginError, setPassError
} = registerActions

type RegisterThunkType = CommonThunkType<RegisterActionsType>

export const resetRegisterError = (): CommonThunkType<RegisterActionsType, void> => dispatch => {
  dispatch(setErrorMessage(''))
  dispatch(setLoginError({}))
  dispatch(setPassError({}))
  dispatch(setFirstNameError({}))
  dispatch(setLastNameError({}))
  dispatch(setAgeError({}))
}

export const register = (login: string, password: string, firstName: string,
  lastName: string, age: number): RegisterThunkType => async dispatch => {
  try {
    await authAPI.register(login, password, firstName, lastName, age)
    dispatch(resetRegisterError())
  } catch (error) {
    dispatch(resetRegisterError())
    dispatch(setErrorMessage(error.response.data.error))
    if (error.response.data.errors) {
      dispatch(setLoginError(error.response.data.errors.find(
        (error: RegisterErrorType) => error.param === 'login') || { msg: '' }))
      dispatch(setPassError(error.response.data.errors.find(
        (error: RegisterErrorType) => error.param === 'password') || { msg: '' }))
      dispatch(setFirstNameError(error.response.data.errors.find(
        (error: RegisterErrorType) => error.param === 'firstName') || { msg: '' }))
      dispatch(setLastNameError(error.response.data.errors.find(
        (error: RegisterErrorType) => error.param === 'lastName') || { msg: '' }))
      dispatch(setAgeError(error.response.data.errors.find(
        (error: RegisterErrorType) => error.param === 'age') || { msg: '' }))
    }
    console.log(error)
    return error
  }
}

export default registerPageReducer
