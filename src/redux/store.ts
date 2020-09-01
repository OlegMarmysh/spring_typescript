import { Action, applyMiddleware, combineReducers, createStore } from 'redux'
import loginPageReducer from './loginPageReducer'
import thunk, { ThunkAction } from 'redux-thunk'
import projectPageReducer from './projectPageReducer'
import registerPageReducer from './registerPageReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  loginPage: loginPageReducer,
  projectPage: projectPageReducer,
  registerPage: registerPageReducer
})

type RootReducer = typeof rootReducer
export type AppStateType = ReturnType<RootReducer>

type PropertiesType<A> = A extends {[key: string]: infer U} ? U : never
export type ActionsType<A extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<A>>
export type BaseThunkType<T extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, T>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
