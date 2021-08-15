import React from 'react'
import Banner from '../components/Banner'

function Specialties() {
  return (
    <Banner
      color="second-color"
      image={{
        url: "https://media.istockphoto.com/photos/business-people-working-in-the-office-picture-id1085389362?k=6&m=1085389362&s=612x612&w=0&h=Bnzvk6HStsJ22Vi58PBFV5xlJUD3Wa9MB-C7Jwkt61U=",
        alternative: "banner-specialties"
      }}
      title="Especialidades"
      subtitle="Domina la tecnología con las rutas de aprendizaje que te ofrecemos"
    />
  )
}

export default Specialties
