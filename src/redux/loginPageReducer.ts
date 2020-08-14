import { loginActions } from './loginAction'
import { authAPI } from '../api'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, ActionsType } from './store'

const initialState = {
  login: null as string | null,
  errorMessage: ''
}

export type LoginInitialState = typeof initialState

type LoginActionsType = ActionsType<typeof loginActions>

const loginPageReducer = (state = initialState, action: LoginActionsType): LoginInitialState => {
  switch (action.type) {
    case 'spring/loginPage/SET_USER_DATA':
    case 'spring/loginPage/SET_ERROR_MESSAGE': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, LoginActionsType>

const { setUserData, setErrorMessage } = loginActions

export const signIn = (login: string, password: string): ThunkType => async dispatch => {
  try {
    const response = await authAPI.login(login, password)
    localStorage.setItem('token', response.data.token)
    dispatch(setUserData(login))
    dispatch(setErrorMessage(''))
  } catch (error) {
    dispatch(setErrorMessage(error.response.data.error))
    console.log(error)
  }
}

export const logOut = () => (dispatch: any) => {
  dispatch(setUserData(null))
}

export default loginPageReducer
