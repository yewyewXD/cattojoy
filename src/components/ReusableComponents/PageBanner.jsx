import React from "react"

const PageBanner = ({ icon, title, description }) => {
  return (
    <div className="PageBanner | py-5">
      <div className="container all-center-column">
        <div className="all-center mb-md-0 mb-sm-1 mb-2">
          {icon && <img className="PageBanner__Icon" alt={title} src={icon} />}
          <h1 className="heading m-0">{title}</h1>
        </div>

        <div className="mediumSize text-center">{description}</div>
      </div>
    </div>
  )
}

export default PageBanner
