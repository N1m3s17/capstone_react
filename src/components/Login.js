import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './authstyles.css';

class Login extends Component {
  render (){
  return (
    <div id="login">
    <div className="container">
        <div id="login-row" className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form" action="" method="post">
                        <h3 className="mytext text-center">Login</h3>
                        <div className="form-group">
                            <label for="username" className="mytext">Username:</label><br />
                            <input type="text" name="username" id="username" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="password" className="mytext">Password:</label><br />
                            <input type="text" name="password" id="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="remember-me" className="mytext"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                            <input type="submit" name="submit" className="loginbutton btn btn-md" value="submit" />
                        </div>
                        <div id="register-link" className="text-right">
                            <a href="/Register" className="mytext">Register here</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  );
  }
}

export default Login;
