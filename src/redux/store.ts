import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import loginPageReducer from './loginPageReducer'
import thunk from 'redux-thunk'
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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store