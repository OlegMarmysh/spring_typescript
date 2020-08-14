import { RegisterErrorType } from "./registerPageReducer"

export const SET_ERROR_MESSAGE = 'spring/registerPage/SET_ERROR_MESSAGE'
export const SET_LOGIN_ERROR = 'spring/registerPage/SET_LOGIN_ERROR'
export const SET_PASS_ERROR = 'spring/registerPage/SET_PASS_ERROR'
export const SET_FIRSTNAME_ERROR = 'spring/registerPage/SET_FIRSTNAME_ERROR'
export const SET_LASTNAME_ERROR = 'spring/registerPage/SET_LASTNAME_ERROR'
export const SET_AGE_ERROR = 'spring/registerPage/SET_AGE_ERROR'

type SetErrorMessageActionType = {
  type: typeof SET_ERROR_MESSAGE,
  payload: { errorMessage: string}
}

export const setErrorMessage = (errorMessage: string): SetErrorMessageActionType => ({
  type: SET_ERROR_MESSAGE,
  payload: { errorMessage }
})

type SetLoginErrorActionType = {
  type: typeof SET_LOGIN_ERROR,
  payload: { loginError: RegisterErrorType | Object }
}

export const setLoginError = (loginError: RegisterErrorType | Object): SetLoginErrorActionType => ({
  type: SET_LOGIN_ERROR,
  payload: { loginError }
})

type SetPassErrorActionType = {
  type: typeof SET_PASS_ERROR,
  payload: { passError: RegisterErrorType | Object }
}

export const setPassError = (passError: RegisterErrorType | Object): SetPassErrorActionType => ({
  type: SET_PASS_ERROR,
  payload: { passError }
})

type SetFirstNameErrorActionType = {
  type: typeof SET_FIRSTNAME_ERROR,
  payload: { firstNameError: RegisterErrorType | Object }
}

export const setFirstNameError = (firstNameError: RegisterErrorType | Object): SetFirstNameErrorActionType => ({
  type: SET_FIRSTNAME_ERROR,
  payload: { firstNameError }
})

type SetLastNameErrorActionType = {
  type: typeof SET_LASTNAME_ERROR,
  payload: { lastNameError: RegisterErrorType | Object }
}

export const setLastNameError = (lastNameError: RegisterErrorType  | Object): SetLastNameErrorActionType => ({
  type: SET_LASTNAME_ERROR,
  payload: { lastNameError }
})

type SetAgeErrorActionType = {
  type: typeof SET_AGE_ERROR,
  payload: { ageError: RegisterErrorType | Object}
}

export const setAgeError = (ageError: RegisterErrorType | Object): SetAgeErrorActionType => ({
  type: SET_AGE_ERROR,
  payload: { ageError }
})
