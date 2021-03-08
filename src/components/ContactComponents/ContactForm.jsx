import React, { useState } from "react"
import axios from "axios"
import { handleEmailChange, handleTextChange } from "../../utils/fieldChange"
import Spinner from "react-loader-spinner"

const ContactForm = () => {
  const [name, setName] = useState({ content: "" })
  const [email, setEmail] = useState({ content: "" })
  const [message, setMessage] = useState({ content: "" })

  const [isValidating, setIsValidating] = useState(false)
  const [isSendingMail, setIsSendingMail] = useState(false)

  async function handleSendMail(e) {
    e.preventDefault()
    setIsSendingMail(true)
    if (!isValidating) setIsValidating(true)

    if (name.isValid && email.isValid && message.isValid) {
      try {
        await axios.post("/.netlify/functions/mailing", {
          email: email.content,
          name: name.content,
          type: "contact",
        })
        setIsSendingMail(false)

        document.getElementById("contactForm").submit()
      } catch (err) {
        console.log(err)
        setIsSendingMail(false)
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
            handleTextChange(setName, e)
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
            handleEmailChange(setEmail, e)
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
            handleTextChange(setMessage, e)
          }}
        />

        {isValidating && !message.isValid && (
          <small className="text-danger">Please enter your message</small>
        )}
      </div>

      <button
        className="actionButton btn btn-secondary btn-md mt-4"
        type="submit"
      >
        {isSendingMail ? (
          <Spinner type="ThreeDots" color="#ffffff" height={10} width={70} />
        ) : (
          <>Submit</>
        )}
      </button>
    </form>
  )
}

export default ContactForm
