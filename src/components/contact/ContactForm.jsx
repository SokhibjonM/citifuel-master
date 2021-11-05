import React, { useState } from 'react'
import { DottedBackgroundSmall } from '../DottedBackgroundSmall'
import cls from './contact.module.scss'
import axios from 'axios'

function ContactForm() {
  const [formValues, setFormValues] = useState({
    full_name: '',
    email: '',
    message: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://159.89.30.129/request/', {
      full_name: formValues.full_name,
      email: formValues.email,
      massage: formValues.message
    }).then(res => {
      console.log(res.formValues)
    }).catch(err => {
      console.log(err)
    })
  }
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
  }
  return (
    <div className={cls.container} id='contacts'>
      {/* <DottedBackgroundSmall />
      <DottedBackgroundSmall /> */}
      <div className='wrapper'>
        <div className={cls.inner}>
          <form action='/' method='post' onSubmit={handleSubmit}>
            <p className={cls.title}>Contact us</p>
            <div className={cls.input}>
              <label htmlFor='fullname'>Full Name:</label>
              <input
                id='fullname'
                value={formValues.full_name}
                onChange={handleChange}
                name='full_name'
                type='text'
                placeholder='Sam Smith'
              />
            </div>
            <div className={cls.input}>
              <label htmlFor='email'>Email:</label>
              <input
                id='email'
                value={formValues.email}
                onChange={handleChange}
                name='email'
                placeholder='samsmith@gmail.com'
                type='email'
              />
            </div>
            <div className={cls.input}>
              <label htmlFor='message'>Your message:</label>
              <textarea
                id='message'
                rows='4'
                value={formValues.message}
                onChange={handleChange}
                name='message'
                placeholder='Type your message...'
              ></textarea>
            </div>
            <div className={cls.actions}>
              <button type="submit" className='btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
