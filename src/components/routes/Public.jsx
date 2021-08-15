import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function Public({ component: Component, ...rest }) {
  const userLogged = localStorage.getItem('token');
  if (userLogged) {
    return <Redirect to="/" />
  }
  return <Route {...rest} component={Component} />
}

export default Public
