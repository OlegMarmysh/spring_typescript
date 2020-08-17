import { projectsAPI } from '../api'
import { projectsActions } from './projectAction'
import { ActionsType, CommonThunkType } from './store'

type Projects = {
  id: string,
  img: string,
  title: string,
  body: string
}

const initialState = {
  springProjects: [] as Array<Projects>,
  springAtticProjects: [] as Array<Projects>
}

export type ProjectInitialState = typeof initialState

type ProjectsActionsType = ActionsType<typeof projectsActions>

const projectPageReducer = (state = initialState,
  action: ProjectsActionsType): ProjectInitialState => {
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

type ProjectsThunkType = CommonThunkType<ProjectsActionsType>

const { setProjects } = projectsActions

export const getProjects = (): ProjectsThunkType => async dispatch => {
  try {
    const data = await projectsAPI.getProjects()
    dispatch(setProjects(data))
  } catch (error) {
    console.log(error)
  }
}

export const searchProjects = (inputValue: string): ProjectsThunkType => async dispatch => {
  try {
    const data = await projectsAPI.searchProjects(inputValue)
    dispatch(setProjects(data))
  } catch (error) {
    console.log(error)
  }
}

export default projectPageReducer
