import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'
import { getAllCourses, getSpecialty } from '../redux/actionCreators'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Specialty({ specialty, courses }) {
  let specialtyCourses = [];
  if (courses && specialty) {
    specialtyCourses = courses.filter(course => {
      return (
        course.specialty_id === specialty.id
      )
    })
  }

  useEffect(() => {
    store.dispatch(getSpecialty(1));
    store.dispatch(getAllCourses());
  }, [])

  return (
    <>
      {specialty &&
        <>
          <Banner
            color="dark-color-alt"
            imageBackground={{
              url: "https://media.istockphoto.com/photos/asian-woman-video-call-online-via-the-internet-tutor-on-a-computer-picture-id1312818451?b=1&k=6&m=1312818451&s=170667a&w=0&h=6jRJKlClfVmnW2X-6br_QPkvN_VezfczfoYlOTsbDyE=",
              alternative: specialty.name
            }}
            title={specialty.name}
            subtitle={specialty.subtitle}
            course
            poster={specialty.cover}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-1 s-border s-pxy-3 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div className="">
                  <h2 className="t3">Descripción</h2>
                  <p>{specialty.description}</p>
                </div>
              </div>
              <h2>Cursos de la especialidad</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  specialtyCourses.map(course => {
                    return (
                      <Link to={`/cursos/${course.id}`}>
                        <div className="course-class l-section" key={course.id}>
                          <div className="ed-grid m-grid-3">
                            <img src={course.cover} alt={course.name} />
                            <div className="m-cols-2">
                              <h3>{course.name}</h3>
                              <p>{course.information}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
            <div className="lg-cols-3" >
              <div>
                <h3 className="t4">¿Qué aprenderás?</h3>
                <ul>
                  {
                    specialty.abilities.map(ability => {
                      return (
                        <li key={ability.id}>{ability.description}</li>
                      )
                    })
                  }
                </ul>
              </div>
              <div>
                <h3 className="t4">Cónocimientos previos</h3>
                <ul>
                  {
                    specialty.knowledge.map(know => {
                      return (
                        <li key={know.id}><a href={know.url}>{know.description}</a></li>
                      )
                    })
                  }
                </ul>
              </div>
              <div>
                <h3 className="t4">Calificación</h3>
                <p>{specialty.rating} ⭐️</p>
              </div>
              <div>
                <h3 className="t4">Nivel</h3>
                <p>{specialty.level}</p>
              </div>
              <div>
                <h3 className="t4">Profesor</h3>
                <p>Beto Quiroga</p>
              </div>
            </div>
          </main>
        </>
      }
    </>
  )
}

function mapStateToProps(state) {
  return (
    {
      specialty: state.specialtyReducer.specialty,
      courses: state.courseReducer.courses
    }
  )
}

export default connect(mapStateToProps, {})(Specialty)
