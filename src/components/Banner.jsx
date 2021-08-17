import React from 'react'
import { Link } from 'react-router-dom'

function Banner({ color, imageBackground, title, subtitle, home, course, poster }) {
  return (
    <div className={`main-banner img-container l-block ${color}`}>
      <div className="ed-grid">
        <div>
          <img
            src={imageBackground.url}
            alt={imageBackground.alternative}
            className="main-banner__img"
          />
          {
            home ?
              <div className="ed-grid m-grid-2">
                <div className="main-banner__data s-cross-center">
                  <h1 className="main-banner__title">{title}</h1>
                  <p>{subtitle}</p>
                  <Link to="/cursos" className="button fourth-color-alt">Ver Cursos</Link>
                </div>
                <div className="img-container s-ratio-4-3">
                  <img
                    src={poster}
                    alt="banner-home"
                  />
                </div>
              </div>
            : course ?
              <div className="ed-grid m-grid-2">
              <div className="main-banner__data s-cross-center">
                <h1 className="main-banner__title">{title}</h1>
                <p>{subtitle}</p>
                <Link to="/" className="button accent-color">Comprar</Link>
              </div>
              <div className="img-container s-ratio-16-9">
                <img
                  src={poster}
                  alt="banner-course"
                />
              </div>
            </div>
            :
              <div className="main-banner__data s-center">
                <h1 className="main-banner__title">{title}</h1>
                <p>{subtitle}</p>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Banner
