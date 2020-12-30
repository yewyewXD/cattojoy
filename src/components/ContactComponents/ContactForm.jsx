import React, { useState } from "react"
import axios from "axios"

const ContactForm = () => {
  const [name, setName] = useState({ content: "" })
  const [email, setEmail] = useState({ content: "" })
  const [message, setMessage] = useState({ content: "" })

  const [isValidating, setIsValidating] = useState(false)

  function handleTextChange(setField, target) {
    setField({
      content: target.value,
      isValid: target.value.trim().length > 0,
    })
  }

  function handleEmailChange(setField, target) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    setField({
      content: target.value,
      isValid:
        target.value.trim().length > 0 &&
        regex.test(String(target.value).toLowerCase()),
    })
  }

  async function handleSendMail(e) {
    e.preventDefault()
    if (!isValidating) setIsValidating(true)

    if (name.isValid && email.isValid && message.isValid) {
      try {
        await axios.post("/.netlify/functions/mailing", {
          email: email.content,
          name: name.content,
          type: "contact",
        })

        document.getElementById("contactForm").submit()
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <form
      className="ContactForm"
      id="contactForm"
      name="Contact Form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success"
      noValidate={true}
      onSubmit={handleSendMail}
    >
      <input type="hidden" name="form-name" value="Contact Form" />

      <div className="form-group">
        <label className="d-block" htmlFor="contactName">
          Your Name:
        </label>
        <input
          id="contactName"
          type="text"
          name="Name"
          className="form-control"
          value={name.content}
          onChange={e => {
            handleTextChange(setName, e.target)
          }}
        />

        {isValidating && !name.isValid && (
          <small className="text-danger">Please enter your name</small>
        )}
      </div>

      <div className="form-group">
        <label className="d-block" htmlFor="contactEmail">
          Your Email:
        </label>
        <input
          id="contactEmail"
          type="email"
          name="Email"
          className="form-control"
          value={email.content}
          onChange={e => {
            handleEmailChange(setEmail, e.target)
          }}
        />

        {isValidating && !email.isValid && (
          <small className="text-danger">Please enter a valid email</small>
        )}
      </div>

      <div className="form-group">
        <label className="d-block" htmlFor="contactMessage">
          Message:
        </label>
        <textarea
          id="contactMessage"
          rows="5"
          name="Message"
          className="form-control"
          value={message.content}
          onChange={e => {
            handleTextChange(setMessage, e.target)
          }}
        />

        {isValidating && !message.isValid && (
          <small className="text-danger">Please enter your message</small>
        )}
      </div>

      <button
        className="ActionButton | btn btn-secondary btn-md mt-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default ContactForm
