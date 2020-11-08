import React from "react"

export default function FeatureSection() {
  return (
    <section className="feature py-5 my-5">
      <div className="feature__headline">
        <div className="feature__headline__heading heading text-center text-capitalize h1 mb-3">
          We provide high quality toy
        </div>
        <div className="feature__headline__subheading text-center">
          Shipping good toys and ensuring your cat's health and happiness are
          what we love and so passionate about.
        </div>
      </div>

      <div className="feature__row row mt-5">
        <div className="feature__row__item col-md-3 all-center-column">
          {/* <img src="./images/feature_safe.png" alt="safe cat toy" className="feature__row__item__image"> */}
          <div className="feature__row__item__title heading mt-4 mb-2">
            Safe
          </div>
          <div className="feature__row__item__subtitle text-center">
            Designed to avoid hurting pets
          </div>
        </div>

        <div className="feature__row__item col-md-3 all-center-column">
          {/* <img src="./images/feature_xchemical.png" alt=""> */}
          <div className="feature__row__item__title heading mt-4 mb-2">
            Non-chemical
          </div>
          <div className="feature__row__item__subtitle text-center">
            Made with chewable materials
          </div>
        </div>

        <div className="feature__row__item col-md-3 all-center-column">
          {/* <img src="./images/feature_affordable.png" alt=""> */}
          <div className="feature__row__item__title heading mt-4 mb-2">
            Affordable
          </div>
          <div className="feature__row__item__subtitle text-center">
            Aligned with the best market prices
          </div>
        </div>

        <div className="feature__row__item col-md-3 all-center-column">
          {/* <img src="./images/feature_fast.png" alt=""> */}
          <div className="feature__row__item__title heading mt-4 mb-2">
            Fast Delivery
          </div>
          <div className="feature__row__item__subtitle text-center">
            Reach your place on time
          </div>
        </div>
      </div>
    </section>
  )
}
