import React from 'react'

import { useFormik } from 'formik'

import s from './ContactFormBlock.module.scss'

export const ContactFormBlock = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: values => {
      const errors = {}

      if (!values.email) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.message) {
        errors.message = 'Required'
      } else if (values.message.length < 5) {
        errors.password = 'Why so short message?'
      }

      return errors
    },
    onSubmit: values => {
      console.log(values)
      formik.resetForm()
    },
  })

  return (
    <div className={s.contactBox}>
      <div>
        <h3 className={s.formTitle}>FEEL FREE TO DROP ME A LINE</h3>
        <p className={s.formText}>
          If you have any suggestion, project or even you want to say Hello.. Please fill out the
          form below and I will reply you shortly.
        </p>
      </div>
      <div className={s.formBox}>
        <form onSubmit={formik.handleSubmit} className={s.group}>
          <input
            className={s.input}
            placeholder="Your name"
            type="text"
            required
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          )}
          <input
            className={s.input}
            placeholder="Your email"
            type="email"
            required
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
          <input
            className={s.input}
            placeholder="Your message"
            type="text"
            required
            {...formik.getFieldProps('message')}
          />
          {formik.touched.message && formik.errors.message && (
            <div style={{ color: 'red' }}>{formik.errors.message}</div>
          )}
          <button type="submit" className={s.formBtn}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
