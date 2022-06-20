import React, { useState } from "react";

const UserForm = (props) => {
  const{inputs, setInputs} = props;

  const [firstNameError, setFirstNameError] = useState({});
  const [lastNameError, setLastNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const onChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const formValidation  = () => {
    const firstNameError = {};
    const lastNameError = {};
    const emailError = {};
    const passwordError = {};

    if(inputs.firstName.trim().length < 2){
      firstNameError.firstNameMinLength = "First Name must be at leat 2 characters";
    }

    if(inputs.lastName.trim().length < 2){
      lastNameError.lastNameMinLength = "Last Name must be at leat 2 characters";
    }

    if(inputs.email.trim().length < 5){
      emailError.emailMinLength = "Email must be at leat 5 characters";
    }

    if(inputs.password.length < 8){
      passwordError.passwordMinLength = "Password must be at leat 8 characters";
    }

    if(inputs.password !== inputs.passwordConfirmation){
      passwordError.passwordMustMatch = "Password must match";
    }

    setFirstNameError(firstNameError);
    setLastNameError(lastNameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
  }

  const onSubmit = e => {
    e.preventDefault();
    formValidation();
  }

  return(
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input onChange={onChange} type="text" name="firstName" />
        {Object.keys(firstNameError).map((key) => {
          return <div style={{color: "red"}}>{firstNameError[key]}</div>
        })}
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input onChange={onChange} type="text" name="lastName" />
        {Object.keys(lastNameError).map((key) => {
          return <div style={{color: "red"}}>{lastNameError[key]}</div>
        })}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input onChange={onChange} type="text" name="email" />
        {Object.keys(emailError).map((key) => {
          return <div style={{color: "red"}}>{emailError[key]}</div>
        })}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input onChange={onChange} type="text" name="password" />
      </div>

      <div>
        <label htmlFor="passwordConfirmation">Confirm Password:</label>
        <input onChange={onChange} type="text" name="passwordConfirmation" />
        {Object.keys(passwordError).map((key) => {
          return <div style={{color: "red"}}>{passwordError[key]}</div>
        })}
      </div>

      <input type="submit" value="Create User" />
    </form>
  );
};

export default UserForm;
