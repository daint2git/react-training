import React from 'react'
import * as yup from 'yup'

const Component = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    age1: yup
      .number()
      .positive()
      .integer(),
    age2: yup
      .number()
      .positive()
      .integer(),
    order: yup
      .number()
      .min(2)
      .max(5),
    email: yup.string().email(),
  })

  schema
    .validate(
      { name: 'data', age1: 'dsds1', age2: 'dsds2', email: 'adsadas', order: 'dsdsds' },
      { abortEarly: false },
    )
    .then(valid => console.log(valid))
    .catch(invalid => {
      console.log(invalid)
      console.log('name', invalid.name)
      console.log('errors', invalid.errors)
    })

  return <div />
}

export default Component
