import { registerActions } from './registerAction'
import { authAPI } from '../api'
import { ActionsType, AppStateType } from './store'
import { ThunkAction } from 'redux-thunk'

export type InitialStateType = {
  errorMessage: string,
}

const initialState = {
  errorMessage: ''
}

type RegisterActionsType = ActionsType<typeof registerActions>

const registerPageReducer = (state = initialState, action: RegisterActionsType): InitialStateType => {
  switch (action.type) {
    case 'spring/registerPage/SET_ERROR_MESSAGE': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

type RegisterThunkType = ThunkAction<Promise<void>, AppStateType, unknown, RegisterActionsType>

export const register = (login: string, password: string, firstName: string, lastName: string, age: number): RegisterThunkType => async dispatch => {
  try {
    await authAPI.register(login, password, firstName, lastName, age)
    dispatch(registerActions.setErrorMessage(''))
  } catch (error) {
    dispatch(registerActions.setErrorMessage(''))
    dispatch(registerActions.setErrorMessage(error.response.data.error))
    console.log(error)
    return error
  }
}

export default registerPageReducer
