import React, { useState } from "react"
import axios from "axios"

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  async function handleSendMail(e) {
    e.preventDefault()
    console.log(e.target)

    //validation
    try {
      await axios.post("/.netlify/functions/mailing", {
        email,
        name: "testing",
      })

      e.target.submit()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      className="ContactForm"
      id="contactForm"
      name="Contact Form"
      method="POST"
      data-netlify="true"
      action="/success"
      onSubmit={handleSendMail}
    >
      <input type="hidden" name="form-name" value="Contact Form" />

      <div className="form-group">
        <label className="d-block" htmlFor="contactEmail">
          Your Email:
        </label>
        <input
          id="contactEmail"
          type="email"
          name="Email"
          className="form-control"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
        />
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
          value={message}
          onChange={e => {
            setMessage(e.target.value)
          }}
        />
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
