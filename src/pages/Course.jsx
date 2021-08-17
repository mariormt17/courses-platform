import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'
import { getCourse } from '../redux/actionCreators'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function Course({ course }) {
  useEffect(() => {
    store.dispatch(getCourse(1));
  }, [])

  return (
    <>
      {course &&
        <>
          <Banner
            color="dark-color-alt"
            imageBackground={{
              url: "https://media.istockphoto.com/photos/smiling-black-girl-with-headset-studying-online-using-laptop-picture-id1250195664?b=1&k=6&m=1250195664&s=170667a&w=0&h=hkBZVdZt68mxNuxcgpHxRHZgwarZ9ESzoCAG4vYGS3k=",
              alternative: course.name
            }}
            title={course.name}
            subtitle={course.subtitle}
            course
            poster={course.cover}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-features ed-grid lg-grid-1 s-border s-pxy-3 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div className="">
                  <h2 className="t3">Descripción</h2>
                  <p>{course.information}</p>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.classes.map(course => (
                    <div className="course-class l-section" key={course.class.id}>
                      <h3>{course.class.title} - {course.subject_count} videos</h3>
                      <p>{course.class.description}</p>
                      <ul className="data-list">
                      {
                        course.subjects.map(subjects => (
                          <li key={subjects.subject.id}>
                            <Link to={`/clases/${subjects.subject.id}`} className="color dark-color" >
                              {subjects.subject.title} ({subjects.subject.duration_string_format})
                            </Link>
                          </li>
                        ))
                      }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="lg-cols-3" >
              <div>
                <h3 className="t4">¿Qué aprenderás?</h3>
                <ul dangerouslySetInnerHTML={{__html: course.you_learn}} />
              </div>
              <div>
                <h3 className="t4">Cónocimientos previos</h3>
                <ul dangerouslySetInnerHTML={{__html: course.requirements}} />
              </div>
              <div>
                <h3 className="t4">Calificación</h3>
                <p>{course.rating} ⭐️</p>
              </div>
              <div>
                <h3 className="t4">Nivel</h3>
                <p>{course.level}</p>
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
      course: state.courseReducer.course
    }
  )
}

export default connect(mapStateToProps, {})(Course)
