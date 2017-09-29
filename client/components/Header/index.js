import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="nav-header">
          <Link to="/" className="navbar-brand">Shop</Link>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <Link to="/signup">Sign Up</Link>
              <Link to="/login">Login</Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
