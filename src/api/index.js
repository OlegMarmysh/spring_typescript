import axios from 'axios'

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

export const projectsAPI = {
  getProjects () {
    return instance.get('projects')
  },
  searchProjects (inputValue) {
    return instance.get(`projects?value=${inputValue}`)
  }
}

export const authAPI = {
  login (login, password) {
    return instance.post('login', { login, password })
  },
  register (login, password, firstName, lastName, age) {
    return instance.post('register', { login, password, firstName, lastName, age })
  }
}
