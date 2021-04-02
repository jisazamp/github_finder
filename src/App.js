import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';

import './App.css';

const App = () => {
  // Estado
  const [alert, setAlert] = useState(null);

  // Método que muestra una alerta cuando no se ingresa nada en el campo de búsqueda.
  const alertSet = (msg, type) => {
    setAlert({ msg, type });
    // Usamos setTimeout() para mostrar la alerta durante 5 segundos
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  // Trigger que cierra el Alert
  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} closeAlert={closeAlert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search alertSet={alertSet} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
