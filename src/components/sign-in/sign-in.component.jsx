import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from "react-redux";

//
class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email,password)

  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2> Já tenho conta </h2>
        <span> Entre com seu email e senha! </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email"
            handleChange={this.handleChange}
            name="email"
            label="email"
            value={this.state.email}
            required />

          <FormInput
            label="password"
            type="password"
            handleChange={this.handleChange}
            name="password"
            value={this.state.password}
            required />
          <div className="buttons">
            <CustomButton type="submit">Entre</CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn>Entre com Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);