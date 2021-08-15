import React from 'react'
import './styles/Login.scss'
import Axios from 'axios';

function registration(e) {
  e.preventDefault();
  const form = e.target;
  if (form.password.value === form.repeatedPassword.value) {
    const data = {
      "email": form.email.value,
      "name": form.name.value,
      "password": form.password.value
    }
    Axios
      .post('https://api-edteam.alejogs4.now.sh/signup', data)
      .then(response => {
        alert("Usuario creado con éxito");
        window.location = "/login";
      })
      .catch(error => {
        console.log(error);
        alert("Error al crear el usuario");
      })
  } else {
    alert("Las contraseñas no coinciden");
  }
}

function Register() {
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
          <h1>Crear cuenta</h1>
        </div>
        <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="name">
              Nombre Completo
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ingresa tu nombre"
                required
              />
            </label>
          </div>
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
            <label htmlFor="password">
              Repetir contraseña
              <input
                type="password"
                name="repeatedPassword"
                id="repeatedPassword"
                placeholder="Repite tu contraseña"
                required
              />
            </label>
          </div>
          <div className="form__item">
            <input
              type="submit"
              className="button full"
              value="Crear cuenta"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
