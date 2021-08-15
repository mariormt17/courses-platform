import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { connect } from 'react-redux'
import store from '../redux/store'
import { getAllCourses } from '../redux/actionCreators'
import CourseCard from '../components/CourseCard'

function Courses({ courses }) {
  useEffect(() => {
    store.dispatch(getAllCourses());
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          url: "https://www.cwjobs.co.uk/advice/wp-content/uploads/programmer-job-description-1024x576.jpg",
          alternative: "banner-courses"
        }}
        title="Cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
      />
      {courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(course => {
              return (
                <CourseCard
                  course={course}
                  key={course.id}
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
      courses: state.courseReducer.courses
    }
  )
}

export default connect(mapStateToProps, {})(Courses)
