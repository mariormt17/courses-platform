import React from 'react'
import Banner from '../components/Banner'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import store from '../redux/store'
import { getAllPosts } from '../redux/actionCreators'
import Publication from '../components/Publication'

function Home({ posts }) {
  useEffect(() => {
    store.dispatch(getAllPosts());
  }, [])

  return (
    <>
      <Banner
        color="fourth-color"
        image={{
          url: "https://cdn.pixabay.com/photo/2017/09/05/10/20/business-2717066_960_720.jpg",
          alternative: "banner-home"
        }}
        title="Bienvenido a la experiencia más increíble en educación online. Comienza hoy mismo a aprender."
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrarás"
        home
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Últimas publicaciones</h2>
          {
            posts ?
              <div>
                {
                  posts.map(post => {
                    return (
                      <Publication
                        post={post}
                        key={post.id}
                      />
                    )
                  })
                }
              </div>
            :
              <p>No hay publicaciones en la base de datos</p>
          }
        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className="feature-list">
            <li><span>Programación y tecnología</span></li>
            <li><span>Diseño y audiovisual</span></li>
            <li><span>Negocios y emprendimiento</span></li>
            <li><span>Desarrollo personal y profesional</span></li>
            <li><span>Inglés</span></li>
            <li><span>Kids</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}

function mapStateToProps(state) {
  return(
    {
      posts: state.postReducer.posts
    }
  )
}

export default connect(mapStateToProps, {})(Home)
