import React from "react"
import axios from "axios"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const ContactPage = () => {
  async function fetchHello(data) {
    try {
      const res = await axios.post("/.netlify/functions/mailing", data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
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
          <button
            className="btn btn-secondary btn-md"
            type="button"
            onClick={() =>
              fetchHello({
                email: "",
                name: "yewyewxd",
              })
            }
          >
            Click me
          </button>
        </form>
      </main>
    </Layout>
  )
}

export default ContactPage
