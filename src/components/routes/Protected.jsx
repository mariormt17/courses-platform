import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function Protected({ component: Component, ...rest }) {
  const userLogged = false;
  if (userLogged) {
    return <Route {...rest} component={Component} />
  }
  return <Redirect to="/login" />
}

export default Protected
