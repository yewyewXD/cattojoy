import React from "react"
import { Link } from "gatsby"

const CallToAction = () => {
  return (
    <section className="CallToAction | py-5">
      <div className="container all-center">
        <div className="col-md-6 text-center">
          <h3 className="CallToAction__Title | heading mb-4">
            <b>We</b> can save countless of cats and their owners from obesity
            &amp; depression <b>together</b>.
          </h3>
          <div className="mb-4">
            <p>
              We believe playing with cats can dramatically help humans and cats
              improve their physical &amp; mental health.
            </p>
            <p>
              Submit your interactive cat toy ideas / examples now and we will
              manufacture it at the most favorable price possible!
            </p>
          </div>
          <Link to="/shop" className="ActionButton | btn btn-secondary btn-lg">
            Submit idea now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
