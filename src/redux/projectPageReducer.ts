import { projectsAPI } from '../api'
import { SET_PROJECTS, setProjects } from './projectAction'

type Projects = {
  id: string,
  img: string,
  title: string,
  body: string
}

export type InitialStateType = {
  springProjects: Array<Projects>,
  springAtticProjects: Array<Projects>
}

const initialState: InitialStateType = {
  springProjects: [],
  springAtticProjects: []
}

const projectPageReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_PROJECTS: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

export const getProjects = () => async (dispatch: any) => {
  try {
    const projects = await projectsAPI.getProjects()
    dispatch(setProjects(projects.data))
  } catch (error) {
    console.log(error)
  }
}

export const searchProjects = (inputValue: string) => async (dispatch: any) => {
  try {
    const projects = await projectsAPI.searchProjects(inputValue)
    dispatch(setProjects(projects.data))
  } catch (error) {
    console.log(error)
  }
}

export default projectPageReducer
