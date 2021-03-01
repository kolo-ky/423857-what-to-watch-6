import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// routes
import {getRoute} from "../../routes/routes";

const AppHeader = ({children}) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to={getRoute(`home`)} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
    </header>
  );
};

AppHeader.propTypes = {
  children: PropTypes.node,
};

export default AppHeader;
