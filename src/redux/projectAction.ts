import { InitialStateType } from './projectPageReducer'

export const projectsAction = {
  setProjects: (projects: InitialStateType) => ({
    type: 'spring/projectsPage/SET_PROJECTS',
    payload: projects
  } as const)
}
