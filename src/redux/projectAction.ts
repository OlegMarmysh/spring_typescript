import { InitialStateType } from "./projectPageReducer"

export const SET_PROJECTS = 'spring/projectsPage/SET_PROJECTS'

type SetProjectsActionType = {
  type: typeof SET_PROJECTS,
  payload: InitialStateType
}

export const setProjects = (projects: InitialStateType): SetProjectsActionType => ({
  type: SET_PROJECTS,
  payload: projects
})
