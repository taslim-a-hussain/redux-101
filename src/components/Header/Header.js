import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './Header.scss';

const Header = () => {

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="container">
      <h1 className="brand" onClick={handleClick}>Expensify</h1>
      <div className="navBar">
          <NavLink exact activeClassName="is-active" to="/">Dashboard</NavLink>
          <NavLink activeClassName="is-active" to="/create">Create</NavLink>
          <NavLink activeClassName="is-active" to="/help">Help</NavLink>
      </div>
    </div>
  );
};

export default Header;