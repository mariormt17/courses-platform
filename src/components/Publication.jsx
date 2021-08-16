import React from 'react'

function Publication({ post }) {
  return (
    <article className="publication l-block">
      <div className="publication__container">
        <h2 className="publication__title t3">{post.title}</h2>
        <span><b>{post.author}</b> el {post.date}</span>
        <div className="publication__content">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  )
}

export default Publication
