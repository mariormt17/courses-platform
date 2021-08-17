import React, { useEffect } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import { getClass, getCourse } from '../redux/actionCreators'
import store from '../redux/store'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Class({ classData, course }) {
  useEffect(() => {
    store.dispatch(getCourse(1));
    store.dispatch(getClass(123));
  }, [])

  return (
    <>
      {(classData && course) &&
        <div className="class-page-container background dark-color s-pxy-4">
          <div className="ed-grid lg-grid-12">
            <div className="lg-cols-8">
              <div>
                <Vimeo
                  video={classData.video}
                  width={780}
                />
              </div>
              <div>
                <h1 className="color light-color s-mb-0">{classData.name}</h1>
                <span className="color light-color">{course.name}</span>
              </div>
            </div>
            <div className="lg-cols-4">
              <div>
                <h2 className="color light-color">Temario del curso</h2>
                <h1 className="color light-color">{course.name}</h1>
                {
                  course.classes.map(class_data => (
                    <div className="course-class l-section" key={class_data.class.id}>
                      <h3 className="color light-color">{class_data.class.title} - {class_data.subject_count} videos</h3>
                      <ul className="data-list">
                      {
                        class_data.subjects.map(subjects => (
                          <li key={subjects.subject.id}>
                            <Link to={`/clases/${subjects.subject.id}`} className="color light-color" >
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
          </div>
        </div>
      }
    </>
  )
}

function mapStateToProps(state) {
  return (
    {
      classData: state.classReducer.class_data,
      course: state.courseReducer.course
    }
  )
}

export default connect(mapStateToProps, {})(Class)
