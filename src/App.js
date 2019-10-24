import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import './App.css';
import Student_Profile from './components/Student_Profile';
import Teacher_Profile from './components/Teacher_Profile';

class App extends Component {
  render (){
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/Student_Profile' component={Student_Profile} />
        <Route exact path='/Teacher_Profile' component={Teacher_Profile} />
      </Switch>
    </div>
  );
  }
}

export default App;
