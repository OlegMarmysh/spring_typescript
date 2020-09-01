export const registerActions = {
  setErrorMessage: (errorMessage: string) => ({
    type: 'spring/registerPage/SET_ERROR_MESSAGE',
    payload: { errorMessage }
  } as const)
}
