import React from 'react'

function TeacherCard({ teacher }) {
  return (
    <article>
      <div className="s-px-4">
        <div className="img-container circle s-mb-2">
          <img src={teacher.avatar} alt={teacher.name} />
        </div>
      </div>
      <div className="s-center">
        <p className="t3 s-mb-1">{teacher.name}</p>
        <p>{teacher.country}</p>
      </div>
    </article>
  )
}

export default TeacherCard
