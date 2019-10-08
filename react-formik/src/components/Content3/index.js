import React from 'react'
import { Formik, Form, Field, connect } from 'formik'
import _toPath from 'lodash-es/toPath'

const FormExample = () => (
  <>
    <Formik
      initialValues={{ email: '', password: '' }}
      // validate={values => {
      //   const errors = {}
      //   if (!values.email) {
      //     errors.email = 'Required'
      //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      //     errors.email = 'Invalid email address'
      //   }
      //   return errors
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="email" />
          <EnhancedErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <EnhancedErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <button type="reset">Reset</button>
        </Form>
      )}
    </Formik>
  </>
)

// {
//   "name": "email",
//   "component": "div",
//   "formik": {
//     "values": {
//       "email": "",
//       "password": ""
//     },
//     "errors": {
//       "email": "Required"
//     },
//     "touched": {
//       "email": true,
//       "password": true
//     },
//     "isSubmitting": false,
//     "isValidating": false,
//     "submitCount": 5,
//     "dirty": false,
//     "isValid": false,
//     "initialValues": {
//       "email": "",
//       "password": ""
//     },
//     "validateOnChange": true,
//     "validateOnBlur": true
//   }
// }

const ErrorMessage = props => {
  console.log(JSON.stringify(props, null, 2))
  console.log(getIn(props.formik.errors, props.name))

  return <div />
}

const EnhancedErrorMessage = connect(ErrorMessage)

const data = {
  name: 'email',
  component: 'div',
  formik: {
    values: {
      name: {
        first: 'firstfirst',
        last: 'lastlast',
      },
      email: 'emailemail',
      password: 'passwordpassword',
    },
    errors: {
      email: 'Required',
    },
    touched: {
      email: true,
      password: true,
    },
    isSubmitting: false,
    isValidating: false,
    submitCount: 5,
    dirty: false,
    isValid: false,
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: true,
    validateOnBlur: true,
  },
}

/* eslint-disable */
function getIn(obj, key, def, p = 0) {
  const path = _toPath(key)
  // console.log('path', path)
  while (obj && p < path.length) {
    // console.log('path', path[p++])
    obj = obj[path[p++]]
  }
  console.log('obj', obj)
  return obj === undefined ? def : obj
}
/* eslint-enable */

console.log(getIn(data.formik, ['values', 'name', 'first']))
console.log(getIn(data.formik, 'values.name.first'))
console.log(getIn(data, 'formik.values.name.first'))

export default () => (
  <>
    <FormExample />
  </>
)
