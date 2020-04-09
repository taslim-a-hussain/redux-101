import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';

const Header = () => {

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div>
      <h1 onClick={handleClick}>Expensify</h1>
      <div>
         <NavLink activeClassName="is-active" to="/">Dashboard</NavLink>
         <NavLink activeClassName="is-active" to="/create">Create</NavLink>
         <NavLink activeClassName="is-active" to="/expense">Expense</NavLink>
         <NavLink activeClassName="is-active" to="/help">Help</NavLink>
      </div>
    </div>
  );
};

export default Header;