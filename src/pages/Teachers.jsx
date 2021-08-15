import React from 'react'
import Banner from '../components/Banner'

function Teachers() {
  return (
    <Banner
      color="primary-color"
      image={{
        url: "https://www.ucn.edu.co/apoyo-inclusion/PublishingImages/banner_apoyoinclusion-equipo-trabajo.jpg",
        alternative: "banner-teachers"
      }}
      title="Nuestros profesores"
      subtitle="Este plantel docente está altamente calificado para guiarte en tu camino del aprendizaje."
    />
  )
}

export default Teachers
