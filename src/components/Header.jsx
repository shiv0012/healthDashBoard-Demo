import React from "react";

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <h1 className="logo">Health Dashboard</h1>
      <div className="logo"></div>
      <div className="login-info">
        {loggedIn ? <span>Welcome, User</span> : ""}
      </div>
    </header>
  );
};

export default Header;
