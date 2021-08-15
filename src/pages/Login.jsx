import React from 'react'
import './styles/Login.scss'
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

function authentication(e) {
  e.preventDefault()
  const form = e.target
  const data = {
    "email": form.email.value,
    "password": form.password.value
  }
  Axios
    .post('https://api-edteam.alejogs4.now.sh/login', data)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      window.location = "/"
    })
    .catch(error => {
      console.log(error);
      alert("Hubo un error en el inicio de sesión");
    });
}

function Login() {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <div className="login-header-container">
          <img
            src="https://ed.team/static/images/logo.svg"
            alt="logo-login"
            className="img-login"
          />
          <h1>Iniciar Sesión</h1>
        </div>
        <form onSubmit={authentication.bind()}>
          <div className="form__item">
            <label htmlFor="email">
              Correo Electrónico
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu e-mail"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Ingresa tu contraseña"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <input
              type="submit"
              className="button full"
              value="Iniciar Sesión"
            />
          </div>
          <NavLink
            exact
            to="/registro"
            className="button full ghost"
          >
            Registro
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default Login
