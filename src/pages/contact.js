import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const ContactPage = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  async function handleSendMail(e) {
    e.preventDefault()
    const contactForm = document.getElementById("contactForm")

    //validation

    try {
      await axios.post("/.netlify/functions/mailing", {
        email,
        name: "testing",
      })

      contactForm.submit()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout currentPage="contact">
      <SEO title="Contact Us" description="Welcome to Catto Joy" />
      <main className="ContactPage">
        <form
          id="contactForm"
          name="Contact Form"
          method="POST"
          data-netlify="true"
          action="/success"
          onSubmit={handleSendMail}
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div className="form-group">
            <label htmlFor="contactEmail">Your Email:</label>
            <input
              id="contactEmail"
              type="email"
              name="Email"
              className="form-controls"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactMessage">Message:</label>
            <textarea
              id="contactMessage"
              name="Message"
              className="form-controls"
              value={message}
              onChange={e => {
                setMessage(e.target.value)
              }}
            />
          </div>
          <button className="btn btn-secondary btn-md" type="submit">
            Submit
          </button>
        </form>
      </main>
    </Layout>
  )
}

export default ContactPage
