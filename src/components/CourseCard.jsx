import React from 'react'
import { Link } from 'react-router-dom'

function CourseCard({ course }) {
  return (
    <article className="card s-border">
      <div className="img-container s-ratio-16-9">
        <Link to={`/cursos/${course.id}`}>
          <img src={course.cover} alt={course.name} />
        </Link>
      </div>
      <div className="card__data s-py-2 s-px-1">
        <h3 className="t4 center">{course.name}</h3>
      </div>
    </article>
  )
}

export default CourseCard
