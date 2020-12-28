import React from "react"
import { Link } from "gatsby"

const CallToAction = () => {
  return (
    <section className="CallToAction | py-5">
      <div className="container all-center">
        <div className="col-md-6 text-center">
          <h3 className="CallToAction__Title | heading mb-3">
            Let's Build A Healthy Relationship With Your Cats
          </h3>
          <div className="mb-3">
            We know how important your pets are to you. We've created the most
            innovative toys to provide you with everything you need to keep your
            furry friends happy.
          </div>
          <Link to="/shop" className="ActionButton | btn btn-secondary btn-lg">
            Join Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
