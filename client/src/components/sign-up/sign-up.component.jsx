import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from "../../redux/user/user.action";
import { connect } from 'react-redux';
import { selectError, SelectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const SignUp = ({ signUpStart, error }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    errorMessage: undefined
  });

  const { email, displayName, password, confirmPassword, errorMessage } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();


    if (password !== confirmPassword) {
      alert("Senhas não correspondem!");
      return;
    }

    await signUpStart({ displayName, email, password });

    if (error) {
      setUserCredentials({ ...userCredentials, errorMessage: error.message });
    }

  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    })

  }

  return (
    <div className="sign-up">
      <h2 className='tile'>Não tem conta?</h2>
      <span>Cadastre-se com seu email e senha</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Se inscreva</CustomButton>

      </form>
      {
        errorMessage && <h3 className="error" style={{ color: 'red' }}> {errorMessage} </h3>
      }

    </div>
  )

}


const mapStateToProps = createStructuredSelector({
  error: selectError,
  user: SelectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  signUpStart: (userData) => dispatch(signUpStart(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
