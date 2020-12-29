import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import PageBanner from "../components/ReusableComponents/PageBanner"
import ContactForm from "../components/ContactComponents/ContactForm"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      iconFile: file(relativePath: { eq: "ContactImages/cat.png" }) {
        image: childImageSharp {
          fixed(quality: 70, width: 90) {
            src
          }
        }
      }

      socialMediaFile: allFile(
        filter: { relativeDirectory: { eq: "SocialMedia" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            image: childImageSharp {
              fixed(quality: 50, width: 60) {
                src
              }
            }
          }
        }
      }
    }
  `)

  const socialMedias = [
    {
      name: "Catto Joy Facebook",
      link: "https://www.facebook.com/cattojoy",
    },
    {
      name: "Catto Joy Instagram",
      link: "https://www.instagram.com/catto_joy/",
    },
    {
      name: "Catto Joy LinkedIn",
      link: "https://www.linkedin.com/company/cattojoy",
    },

    {
      name: "Catto Joy Twitter",
      link: "https://twitter.com/cattojoy",
    },

    {
      name: "Catto Joy TikTok",
      link: "https://www.tiktok.com/@cattojoy",
    },
  ]

  return (
    <Layout currentPage="contact">
      <SEO title="Contact Us" description="Welcome to Catto Joy" />
      <main className="ContactPage">
        {/* banner */}
        <PageBanner
          icon={data.iconFile.image.fixed.src}
          title="Contact Us"
          description="Feel free to let us know if you have any problems, questions, or
          suggestions. You can even submit ideas or examples about the cat toys
          you want us to launch!"
        />

        {/* content */}
        <div className="container my-lg-5 my-sm-3 py-5">
          <div className="row">
            {/* social media */}
            <div className="SocialMedia | col-lg-5 mb-lg-0 mb-md-4 mb-5">
              <h1 className="SocialMedia__Title mb-xl-5 mb-4">
                Reach us out in other ways
              </h1>

              <div className="all-center justify-content-lg-start flex-wrap">
                {socialMedias.map((socialMedia, index) => (
                  <a
                    href={socialMedia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`contactSocialMedia-${index}`}
                  >
                    <img
                      className="SocialMedia__Icon mr-lg-5 mr-md-4 mb-md-4 mx-md-0 mx-sm-3 mx-2"
                      alt={socialMedia.name}
                      src={
                        data.socialMediaFile.edges[index].node.image.fixed.src
                      }
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* form fields */}
            <div className="col-lg-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ContactPage
