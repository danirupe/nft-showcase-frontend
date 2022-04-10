import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  return [values, setValues, onChange]
}
