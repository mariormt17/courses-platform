import React from 'react'

function CourseCard({ course }) {
  return (
    <article className="card">
      <div className="img-container s-ratio-16-9">
        <img src={course.cover} alt={course.name} />
      </div>
      <div className="card__data">
        <h3 className="t4 center">{course.name}</h3>
      </div>
    </article>
  )
}

export default CourseCard
