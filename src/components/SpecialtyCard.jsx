import React from 'react'
import { Link } from 'react-router-dom';

function SpecialtyCard({ specialty, courses }) {
  let specialtyCourses = [];
  if (courses) {
    specialtyCourses = courses.filter(course => {
      return (
        course.specialty_id === specialty.id
      )
    })
  }

  return (
    <article className="card s-border">
      <div className="img-container s-ratio-16-9">
        <Link to={`/especialidades/${specialty.id}`}>
          <img src={specialty.cover} alt={specialty.name} />
        </Link>
      </div>
      <div className="card__data s-pxy-2">
        <h3 className="t4 center">{specialty.name}</h3>
        <ul>
          {specialtyCourses &&
            specialtyCourses.map(course => {
              return (
                <li key={course.id}>{course.name}</li>
              )
            })
          }
        </ul>
      </div>
    </article>
  )
}

export default SpecialtyCard
