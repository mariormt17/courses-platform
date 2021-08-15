import React from 'react'
import Banner from '../components/Banner'

function Courses() {
  return (
    <Banner
      color="dark-color"
      image={{
        url: "https://www.cwjobs.co.uk/advice/wp-content/uploads/programmer-job-description-1024x576.jpg",
        alternative: "banner-courses"
      }}
      title="Cursos"
      subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
    />
  )
}

export default Courses
