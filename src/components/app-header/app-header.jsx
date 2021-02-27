import React from 'react';
import {Link} from 'react-router-dom';

// routes
import {getRoute} from "../../routes/routes";

// components
import User from "./user/user";

const AppHeader = () => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to={getRoute(`home`)} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      <User />
    </header>
  );
};

export default AppHeader;
