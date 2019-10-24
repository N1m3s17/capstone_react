import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './navstyles.css';
class Navbar extends Component {
  render (){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="textstyles navbar-brand" href="/">2TR-Now</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
          <ul className ="navbar-nav">
            <li className="nav-item">
              <a className="textstyles nav-link" href="/Login">Login</a>
            </li>
            <li className="nav-item">
              <a className="textstyles nav-link" href="/Register">Register</a>
            </li>
          </ul>
      </div>
    </nav>
  );
  }
}

export default Navbar;
