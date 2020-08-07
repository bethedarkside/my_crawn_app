import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";

const HomePage = ({ user }) => (
  <div className="homepage">
    <h3>{user ? user.displayName : null}</h3>
    <Directory />
  </div>
);

export default HomePage;
