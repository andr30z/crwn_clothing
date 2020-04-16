import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from "../../redux/user/user.action";
import { connect } from 'react-redux';
import { selectError, SelectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      displayName: "",
      password: "",
      confirmPassword: "",
      errorMessage: undefined
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, displayName, password, confirmPassword } = this.state;
    const { signUpStart, error } = this.props;

    if (password !== confirmPassword) {
      alert("Senhas não correspondem!");
      return;
    }

    await signUpStart({ displayName, email, password });

    if (error) {
      this.setState({ errorMessage: error.message });
    }

  };

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })

  }

  render() {
    const { email, displayName, confirmPassword, password, errorMessage } = this.state;

    return (
      <div className="sign-up">
        <h2 className='tile'>Não tem conta?</h2>
        <span>Cadastre-se com seu email e senha</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
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
}


const mapStateToProps = createStructuredSelector({
  error: selectError,
  user: SelectCurrentUser
});


const mapDispatchToProps = dispatch => ({
  signUpStart: (userData) => dispatch(signUpStart(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
