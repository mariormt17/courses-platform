import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Class from './pages/Class';
import Course from './pages/Course';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import Specialties from './pages/Specialties';
import Specialty from './pages/Specialty';
import Teachers from './pages/Teachers';
import Protected from './routes/Protected';
import Public from './routes/Public';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Home Route */}
        <Route path="/" exact component={Home} />

        {/* Protected Routes */}
        <Protected path="/especialidades" exact component={Specialties} />
        <Protected path="/especialidades/:id" component={Specialty} />
        <Protected path="/cursos" exact component={Courses} />
        <Protected path="/cursos/:id" component={Course} />
        <Protected path="/profesores" exact component={Teachers} />
        <Protected path="/clases/:id" component={Class} />

        {/* Public Routes */}
        <Public path="/login" exact component={Login} />
        <Public path="/registro" exact component={Register} />

        {/* Default Route */}
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
