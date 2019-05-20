import React, { Component } from "react";
import { FormErrors } from "./FormErrors";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    var fieldValidationErrors = this.state.formErrors;
    var emailValid = this.state.emailValid;
    var passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 10;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  state = {};
  render() {
    return (
      <div className="bcgc">
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                  Login to continue
                </span>

                <div className="panel panel-default">
                  <FormErrors formErrors={this.state.formErrors} />
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleUserInput}
                  />
                  <span className="focus-input100" />
                  <span className="label-input100">Email</span>
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleUserInput}
                  />
                  <span className="focus-input100" />
                  <span className="label-input100">Password</span>
                </div>

                <div className="flex-sb-m w-full p-t-3 p-b-32">
                  <div>
                    <a href="#" className="txt1">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <div className="container-login100-form-btn">
                  <button
                    className="login100-form-btn"
                    type="submit"
                    disabled={!this.state.formValid}
                  >
                    Login
                  </button>
                </div>

                <div className="text-center p-t-46 p-b-20">
                  <a href="#" className="txt1">
                    Don't have an account? SIGN-UP here
                  </a>
                </div>
              </form>

              <div className="login100-more" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
