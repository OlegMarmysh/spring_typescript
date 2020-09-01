import React from 'react'
import { ErrorMessage } from 'formik'

export const ErrorMsg = (props) => {
  return (
    <ErrorMessage name={props.name}>
      {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
    </ErrorMessage>
  )
}
