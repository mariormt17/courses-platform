import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import store from '../redux/store'
import { getAllTeachers } from '../redux/actionCreators'
import { connect } from 'react-redux'
import TeacherCard from '../components/TeacherCard'

function Teachers({ match, teachers }) {
  useEffect(() => {
    store.dispatch(getAllTeachers());
  }, [match])

  return (
    <>
      <Banner
        color="primary-color"
        imageBackground={{
          url: "https://www.ucn.edu.co/apoyo-inclusion/PublishingImages/banner_apoyoinclusion-equipo-trabajo.jpg",
          alternative: "banner-teachers"
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente está altamente calificado para guiarte en tu camino del aprendizaje."
      />
      {teachers &&
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          {
            teachers.map(teacher => {
              return (
                <TeacherCard
                  teacher={teacher}
                  key={teacher.id}
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
      teachers: state.teacherReducer.teachers
    }
  )
}

export default connect(mapStateToProps, {})(Teachers)
