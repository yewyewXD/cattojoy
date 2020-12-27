import React from "react"
import { Link } from "gatsby"

export default function CallToAction() {
  return (
    <section className="CallToAction | py-5">
      <div className="container all-center">
        <div className="col-md-6 text-center">
          <h3 className="CallToAction__Title | heading text-capitalize mb-3">
            let's build a healthy relationship with your cats
          </h3>
          <div className="mb-3">
            We know how important your pets are to you. We've created the most
            innovative toys to provide you with everything you need to keep your
            furry friends happy.
          </div>
          <Link
            to="/shop"
            className="ActionButton | btn btn-secondary btn-lg text-capitalize"
          >
            join now
          </Link>
        </div>
      </div>
    </section>
  )
}
