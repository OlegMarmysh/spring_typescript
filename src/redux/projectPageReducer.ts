import { projectsAPI } from '../api'
import { projectsAction } from './projectAction'
import { ActionsType, BaseThunkType } from './store'

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

type ProjectsPageActionsType = ActionsType<typeof projectsAction>

const projectPageReducer = (state = initialState, action: ProjectsPageActionsType): InitialStateType => {
  switch (action.type) {
    case 'spring/projectsPage/SET_PROJECTS': {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}

const { setProjects } = projectsAction

type ProjectsThunkType = BaseThunkType<ProjectsPageActionsType>

export const getProjects = (): ProjectsThunkType => async dispatch => {
  try {
    const projects = await projectsAPI.getProjects()
    dispatch(setProjects(projects.data))
  } catch (error) {
    console.log(error)
  }
}

export const searchProjects = (inputValue: string): ProjectsThunkType => async dispatch => {
  try {
    const projects = await projectsAPI.searchProjects(inputValue)
    dispatch(setProjects(projects.data))
  } catch (error) {
    console.log(error)
  }
}

export default projectPageReducer
