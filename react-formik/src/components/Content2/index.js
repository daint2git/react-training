import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().required('Required'),
  // .email('Invalid email')
})

const objError = {
  firstName: 'error 1',
  lastName: 'error 2',
  email: 'error 3',
}

const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, formikBag) => {
        Object.keys(objError).forEach(key => {
          formikBag.setFieldError(key, objError[key])

          // console.log(formikBag)
        })
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? <div>{errors.firstName}</div> : null}
          <br />
          <Field name="lastName" />
          {errors.lastName && touched.lastName ? <div>{errors.lastName}</div> : null}
          <br />
          <Field name="email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)

export default ValidationSchemaExample
