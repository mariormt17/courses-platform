import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../redux/store'
import { getCourse } from '../redux/actionCreators'
import Banner from '../components/Banner'

function Course({ course }) {
  useEffect(() => {
    store.dispatch(getCourse(1));
  }, [])

  return (
    <>
      {course &&
        <Banner
          color="dark-color-alt"
          image={{
            url: "https://media.istockphoto.com/photos/smiling-black-girl-with-headset-studying-online-using-laptop-picture-id1250195664?b=1&k=6&m=1250195664&s=170667a&w=0&h=hkBZVdZt68mxNuxcgpHxRHZgwarZ9ESzoCAG4vYGS3k=",
            alternative: course.name
          }}
          title={course.name}
          subtitle={course.subtitle}
          course
          poster={course.cover}
          level={course.level}
        />
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
