import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Banner from '../components/Banner'
import store from '../redux/store'
import { getAllCourses, getAllSpecialties } from '../redux/actionCreators'
import SpecialtyCard from '../components/SpecialtyCard'

function Specialties({ specialties, courses }) {
  useEffect(() => {
    store.dispatch(getAllSpecialties());
    store.dispatch(getAllCourses());
  }, [])

  return (
    <>
      <Banner
        color="second-color"
        image={{
          url: "https://media.istockphoto.com/photos/business-people-working-in-the-office-picture-id1085389362?k=6&m=1085389362&s=612x612&w=0&h=Bnzvk6HStsJ22Vi58PBFV5xlJUD3Wa9MB-C7Jwkt61U=",
          alternative: "banner-specialties"
        }}
        title="Especialidades"
        subtitle="Domina la tecnología con las rutas de aprendizaje que te ofrecemos"
      />
      {specialties &&
        <main className="ed-grid m-grid-3">
          {
            specialties.map(specialty => {
              return (
                <SpecialtyCard
                  specialty={specialty}
                  courses={courses}
                  key={specialty.id}
                />
              )
            })
          }
        </main>
      }
    </>
  )
}

function mapStateToProps(state) {
  return (
    {
      specialties: state.specialtyReducer.specialties,
      courses: state.courseReducer.courses
    }
  )
}

export default connect(mapStateToProps, {})(Specialties)
