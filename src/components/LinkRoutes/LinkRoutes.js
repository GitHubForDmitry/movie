import React from "react";
import { Link } from "react-router-dom";
import "./link-routes.css";
import PropTypes from "prop-types";

const LinkRoutes = ({isHeaderMoved}) => {

  return (
    <nav>
      <ul className="nav">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Movies
          </Link>
        </li>
        <li className="nav__item">
          <Link  className="nav__link" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

LinkRoutes.propTypes = {
  isHeaderMoved: PropTypes.bool
};

export default LinkRoutes;
