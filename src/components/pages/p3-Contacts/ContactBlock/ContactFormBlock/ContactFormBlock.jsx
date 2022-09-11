import React, { useState } from 'react'

import { useFormik } from 'formik'

import { messagesAPI } from '../../../../../api/sendMessage'

import s from './ContactFormBlock.module.scss'

export const ContactFormBlock = () => {
  const [messageSent, useMessageSent] = useState(false)

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
      }

      return errors
    },
    onSubmit: async values => {
      const { name, email, message } = values

      useMessageSent(true)
      try {
        const res = await messagesAPI.sendMessage({ name, email, message })

        if (res.data === 'ok') {
          console.log('message has been sent')
        }
      } catch (err) {
        console.log(err)
      } finally {
        formik.resetForm()
      }
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
        {messageSent ? (
          <div className={s.submitMessage}>MESSAGE SENT :)</div>
        ) : (
          <form onSubmit={formik.handleSubmit} className={s.group}>
            <input
              className={s.input}
              placeholder="Your name"
              type="text"
              required
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <div className={s.inputError}>{formik.errors.name}</div>
            )}
            <input
              className={s.input}
              placeholder="Your email"
              type="email"
              required
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <div className={s.inputError}>{formik.errors.email}</div>
            )}
            <input
              className={s.input}
              placeholder="Your message"
              type="text"
              required
              {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message && (
              <div className={s.inputError}>{formik.errors.message}</div>
            )}
            <button type="submit" className={s.formBtn}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
