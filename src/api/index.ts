import axios from 'axios'
import { RegisterErrorType } from '../redux/registerPageReducer'
import { ProjectInitialState } from '../redux/projectPageReducer'

const instance = axios.create({
  baseURL: 'https://limitless-river-86970.herokuapp.com//'
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  }
)

type GetProjectsResponseType = {
  token: string
}

export const projectsAPI = {
  getProjects () {
    return instance.get<ProjectInitialState>('projects').then(res => res.data)
  },
  searchProjects (inputValue: string) {
    return instance.get<ProjectInitialState>(`projects?value=${inputValue}`)
      .then(res => res.data)
  }
}

export const authAPI = {
  login (login: string, password: string) {
    return instance.post<GetProjectsResponseType>('login', { login, password })
      .then(res => res.data)
  },
  register (login: string, password: string, firstName: string, lastName: string, age: number) {
    return instance.post('register',
      { login, password, firstName, lastName, age })
  }
}
