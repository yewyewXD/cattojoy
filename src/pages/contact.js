import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import PageBanner from "../components/ReusableComponents/PageBanner"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ContactImages/cat.png" }) {
        childImageSharp {
          fixed(quality: 70, width: 90) {
            src
          }
        }
      }
    }
  `)

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
        {/* banner */}
        <PageBanner
          icon={data.file.childImageSharp.fixed.src}
          title="Contact Us"
          description="Feel free to let us know if you have any problems, questions, or
          suggestions. You can even submit ideas or examples about the cat toys
          you want us to launch!"
        />

        {/* content */}
        <div className="container my-lg-5 my-3 py-5">
          <div className="row">
            {/* social media */}
            <div className="col-lg-4 mb-lg-0 mb-4">
              <h1 className="mb-lg-5 mb-3">Reach us out in other ways</h1>

              <div className="all-center justify-content-lg-start">
                <img
                  className="Banner__Icon mr-lg-5 mr-4"
                  alt="Contact Us"
                  src={data.file.childImageSharp.fixed.src}
                />

                <img
                  className="Banner__Icon"
                  alt="Contact Us"
                  src={data.file.childImageSharp.fixed.src}
                />
              </div>
            </div>

            {/* form fields */}
            <div className="col-lg-8 all-center justify-content-lg-end">
              <form
                style={{ width: "80%" }}
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
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContactPage
