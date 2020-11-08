import React from "react"
import { Link } from "gatsby"

export default function BlogSection() {
  return (
    <section className="blog py-5 my-5">
      <div className="blog__headline">
        <div className="blog__headline__heading heading text-center text-capitalize h1 mb-3">
          from our blog
        </div>
        <div className="blog__headline__subheading text-center">
          Here are some extra tips to teach you how to build a healthy
          relationship with your cats.
        </div>
      </div>

      <div className="container">
        <div className="blog__row row mt-5">
          <div className="blog__row__item col-lg-4 all-center">
            <div className="card">
              {/* <img className="card-img-top card__image" src="./images/feature_fast.png" alt="How to Get Your Cat to Play By Itself"> */}
              <div className="blog__card card-body p-4">
                <div className="blog__row__item__title mb-3">
                  How to Get Your Cat to Play By Itself
                </div>
                <div className="blog__row__item__subtitle mb-3">something</div>
                <Link to="/" className="btn btn-secondary btn-md">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="blog__row__item col-lg-4 all-center">
            <div className="card">
              {/* <img className="card-img-top card__image" src="./images/feature_fast.png" alt="How to Get Your Cat to Play By Itself"> */}
              <div className="blog__card card-body p-4">
                <div className="blog__row__item__title mb-3">
                  How to Get Your Cat to Play By Itself
                </div>
                <div className="blog__row__item__subtitle mb-3">something</div>
                <Link to="/" className="btn btn-secondary btn-md">
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="blog__row__item col-lg-4 all-center">
            <div className="card">
              {/* <img className="card-img-top card__image" src="./images/feature_fast.png" alt="How to Get Your Cat to Play By Itself"> */}
              <div className="blog__card card-body p-4">
                <div className="blog__row__item__title mb-3">
                  How to Get Your Cat to Play By Itself
                </div>
                <div className="blog__row__item__subtitle mb-3">something</div>
                <Link to="/" className="btn btn-secondary btn-md">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// {
//   coffeeItem: allContentfulCoffeeItem {
//     edges {
//       node {
//         id
//         title
//         category
//         image {
//           description
//           fixed(width: 50, height: 50) {
//             src
//           }
//         }
//       }
//     }
//   }
// }
