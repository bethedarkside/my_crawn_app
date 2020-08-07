import React from "react";

import "./custom-buttom.styles.scss";

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => (
  <button
    className={`${isGoogleSignin ? "googleSignin" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
