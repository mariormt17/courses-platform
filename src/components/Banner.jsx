import React from 'react'

function Banner({ color, image, title, subtitle }) {
  return (
    <div className={`main-banner img-container l-block ${color}`}>
      <div className="ed-grid">
        <div>
          <img
            src={image.url}
            alt={image.alternative}
            className="main-banner__img"
          />
          <div className="main-banner__data s-center">
            <h1 className="main-banner__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
