import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from "react-redux";

//
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value })
  }


  return (
    <div className="sign-in">
      <h2> Já tenho conta </h2>
      <span> Entre com seu email e senha! </span>
      <form onSubmit={handleSubmit}>
        <FormInput type="email"
          handleChange={handleChange}
          name="email"
          label="email"
          value={email}
          required />

        <FormInput
          label="password"
          type="password"
          handleChange={handleChange}
          name="password"
          value={password}
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

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);