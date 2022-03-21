import React, { useState, useEffect, useRef } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import style from './Contact.module.css'

function Contact() {
    const initForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
    const [form, setForm] = useState(initForm)
    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)
    const nameField = useRef(null)
    const emailField = useRef(null)
    const subjectField = useRef(null)
    const messageField = useRef(null)
    const fields = [nameField, emailField, subjectField, messageField]

    const focusHandler = (e) => {
        e.target.parentNode.parentNode.classList.add(`${style.focused}`)
        e.target.classList.remove(`${style.error}`)
    }
    const blurHandler = (e) => {
        if (e.target.value === '') {
            e.target.parentNode.parentNode.classList.remove(`${style.focused}`)
        }
    }
    const handleChange = (e) => {
        const { id, value } = e.target
        setForm({ ...form, [id]: value })

        if (!value) {
            e.target.parentNode.parentNode.classList.remove(`${style.focused}`)
        }
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        setErrors(validate(form))
        setSubmit(true)
    }

    useEffect(() => {
        if(submit) {
            if (Object.keys(errors).length === 0) {
                //console.log('form:', form)
                toast.success('Sent sucessfully', {
                    position: 'top-center',
                    theme: 'light'
                })

                setForm(initForm)
                for (let field of fields) {
                    field.current.parentNode.parentNode.classList.remove(`${style.focused}`)
                }
            } else {
                //console.log('errors:', errors)
                for (let e in errors) {
                    toast.error(errors[e])
                }
                
                for (let field of fields) {
                    if (Object.keys(errors).includes(field.current.getAttribute('id'))) {
                        field.current.classList.add(`${style.error}`)
                    }
                }
            }
            setSubmit(false)
        }
    }, [errors])

    const validate = (form) => {
        const errors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!form.name) {
            errors.name = "Name is required!"
        } else if (form.name.length < 4) {
            errors.name = "Name must be 4 or more characters"
        }

        if (!form.email) {
            errors.email = "Email is required!"
        }

        if (!form.email) {
          errors.email = "Email is required!";
        } else if (!emailRegex.test(form.email)) {
          errors.email = "invalid email format!";
        }

        if (!form.subject) {
            errors.subject = "Subject is required"
        } else if (form.subject.length < 4) {
            errors.subject = "Subject must be 4 or more characters"
        }
        
        if (!form.message) {
            errors.message = "Message is required"
        }

        return errors
    }

    return (
        <section className={style.contact_page}>
            
            <div className={style.info}></div>
            <div className={style.form_section}>

                <h1 className={style.heading}>Send a message</h1>
                <form onSubmit={submitHandler} className={style.form}>
                    <div className={`${style.area}`}>
                        <label htmlFor="name">Your Name</label>
                        <div className={style.field}>
                            <input id="name" 
                                name="name"
                                type="text" 
                                ref={nameField}
                                onChange={handleChange}
                                onFocus={focusHandler}
                                onBlur={blurHandler}
                                value={form.name}
                                className={`${style.data_field} a`}
                            />
                            <div className={style.border_line}>
                                <div className={`${style.line} ${style.unfocused} ${style.active}`}></div>
                                <div className={`${style.line} ${style.focused}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.area}`}>
                        <label htmlFor='email'>Your Email</label>
                        <div className={style.field}>
                            <input id="email"
                                name="email" 
                                type="email" 
                                ref={emailField}
                                onChange={handleChange}
                                onFocus={focusHandler}
                                onBlur={blurHandler}
                                value={form.email}
                                className={`${style.data_field}`}
                            />
                            <div className={style.border_line}>
                                <div className={`${style.line} ${style.unfocused} ${style.active}`}></div>
                                <div className={`${style.line} ${style.focused}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='subject'>Subject</label>
                        <div className={style.field}>
                            <input id="subject"
                                name="subject" 
                                type="text" 
                                ref={subjectField}
                                onChange={handleChange}
                                onFocus={focusHandler}
                                onBlur={blurHandler}
                                value={form.subject}
                                className={`${style.data_field}`}
                            />
                            <div className={style.border_line}>
                                <div className={`${style.line} ${style.unfocused} ${style.active}`}></div>
                                <div className={`${style.line} ${style.focused}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.area}>
                        <label htmlFor='message'>Message</label>
                        <div className={style.field}>
                            <textarea id="message"
                                name="message"
                                ref={messageField}
                                onChange={handleChange}
                                onFocus={focusHandler}
                                onBlur={blurHandler}
                                value={form.message}
                                className={`${style.data_field}`}
                            ></textarea>
                            <div className={style.border_line}>
                                <div className={`${style.line} ${style.unfocused} ${style.active}`}></div>
                                <div className={`${style.line} ${style.focused}`}></div>
                            </div>
                        </div>
                    </div>

                    <button type="submit">SUBMIT</button>
                </form>

            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                closeOnClick
                pauseOnHover
                draggable={false}
                theme='dark'
            />
        </section>
    )
}



export default Contact