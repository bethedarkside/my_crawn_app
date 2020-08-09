import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { auth, createUserProfile } from "../../firebase/firebase.utils";

import "./sign-up-component.scss";

function SignUpComponent() {
  let initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(initialState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };
  const { displayName, email, password, confirmPassword } = user;
  const hanldeSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords didn't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName: displayName });
      setUser(initialState);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-up">
      <h1 className="title">Sign Up</h1>
      <span>Sign in with your email and password</span>

      <form onSubmit={hanldeSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          required
          onChange={handleChange}
        />{" "}
        <FormInput
          type="email"
          name="email"
          value={email}
          label="email"
          required
          onChange={handleChange}
        />{" "}
        <FormInput
          type="password"
          name="password"
          value={password}
          label="password"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sing up</CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignUpComponent;
