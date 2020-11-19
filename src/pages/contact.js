import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout currentPage="contact">
    <SEO title="Contact Us" description="Welcome to Catto Joy" />
    <main className="ContactPage">
      <form
        name="Contact Form"
        method="POST"
        data-netlify="true"
        action="/success"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className="form-group">
          <label htmlFor="contactEmail">Your Email:</label>
          <input
            id="contactEmail"
            type="email"
            name="Email"
            className="form-controls"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactMessage">Message:</label>
          <textarea
            id="contactMessage"
            name="Message"
            className="form-controls"
          />
        </div>
        <button className="btn btn-secondary btn-md" type="submit">
          Send
        </button>
      </form>
    </main>
  </Layout>
)

export default ContactPage
