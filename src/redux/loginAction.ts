export const loginActions = {
  setUserData: (login: string | null) => ({
    type: 'spring/loginPage/SET_USER_DATA',
    payload: { login }
  } as const),
  setErrorMessage: (errorMessage: string) => ({
    type: 'spring/loginPage/SET_ERROR_MESSAGE',
    payload: { errorMessage }
  } as const)
}
