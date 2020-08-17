import { ProjectInitialState } from './projectPageReducer'

export const projectsActions = {
  setProjects: (projects: ProjectInitialState) => ({
    type: 'spring/projectsPage/SET_PROJECTS',
    payload: projects
  } as const)
}
