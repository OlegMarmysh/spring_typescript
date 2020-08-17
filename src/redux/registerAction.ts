import { RegisterErrorType } from './registerPageReducer'

export const registerActions = {
  setErrorMessage: (errorMessage: string) => ({
    type: 'spring/registerPage/SET_ERROR_MESSAGE',
    payload: { errorMessage }
  } as const),
  setLoginError: (loginError: RegisterErrorType | Object) => ({
    type: 'spring/registerPage/SET_LOGIN_ERROR',
    payload: { loginError }
  } as const),
  setPassError: (passError: RegisterErrorType | Object) => ({
    type: 'spring/registerPage/SET_PASS_ERROR',
    payload: { passError }
  } as const),
  setFirstNameError: (firstNameError: RegisterErrorType | Object) => ({
    type: 'spring/registerPage/SET_FIRSTNAME_ERROR',
    payload: { firstNameError }
  } as const),
  setLastNameError: (lastNameError: RegisterErrorType | Object) => ({
    type: 'spring/registerPage/SET_LASTNAME_ERROR',
    payload: { lastNameError }
  } as const),
  setAgeError: (ageError: RegisterErrorType | Object) => ({
    type: 'spring/registerPage/SET_AGE_ERROR',
    payload: { ageError }
  } as const)
}
