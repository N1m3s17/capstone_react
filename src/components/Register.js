import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './registerstyles.css';

class Register extends Component {
  render (){
  return (
        <div id="register">
            <div class="container">
                <div id="register-row" class="row justify-content-center align-items-center">
                    <div id="register-column" class="col-md-6">
                        <div id="register-box" class="col-md-12">
                            <form id="register-form" class="form" action="" method="post">
                                <h3 class="text-center mytext">Register</h3>
                                <div class="form-group">
                                    <label for="username" class="mytext">First Name:</label><br />
                                    <input type="text" name="firstname" id="username" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="username" class="mytext">Last Name:</label><br />
                                    <input type="text" name="lastname" id="username" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="username" class="mytext">Email:</label><br />
                                    <input type="text" name="email" id="email" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="username" class="mytext">Username:</label><br />
                                    <input type="text" name="username" id="username" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label for="password" class="mytext">Password:</label><br />
                                    <input type="text" name="password" id="password" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" class="registerbutton btn btn-md" value="Register" />
                                </div>
                                <div id="login-link" class="text-right">
                                    <a href="/Register" class="mytext">Already Registered?</a>
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

export default Register;
