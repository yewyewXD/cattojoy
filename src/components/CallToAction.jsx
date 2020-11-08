import React from "react"

export default function CallToAction() {
  return (
    <section className="cta py-5">
      <div className="container all-center">
        <div className="cta__caption col-md-6 text-center">
          <div className="cta__caption__title heading text-capitalize mb-3">
            let's build a healthy relationship with your cats
          </div>
          <div className="cta__caption__subtitle mb-3">
            We know how important your pets are to you. We've created the most
            innovative toys to provide you with everything you need to keep your
            furry friends happy.
          </div>
          <button className="btn btn-secondary btn-lg text-capitalize">
            join now
          </button>
        </div>
      </div>
    </section>
  )
}
