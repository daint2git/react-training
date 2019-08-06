import React from 'react'
import Joi from '@hapi/joi'

const Component = () => {
  const schema = Joi.object()
    .keys({
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
      access_token: [Joi.string(), Joi.number()],
      birthyear: Joi.number()
        .integer()
        .min(1900)
        .max(2013),
      email: Joi.string().email({ minDomainSegments: 2 }),
    })
    .with('username', 'birthyear')
    .without('password', 'access_token')

  // Return result.
  const result = schema.validate({ username: 'abc', birthyear: 1994 })
  console.log('result', result)
  return <div />
}

export default Component
