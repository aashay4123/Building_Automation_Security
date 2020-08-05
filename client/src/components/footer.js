import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerhot">
      <ul className="navi">
        <li className="navi__item">
          <Link to="/products" className="navi__link">
            find your dream home
          </Link>
        </li>
        <li className="navi__item">
          <Link to="#" className="navi__link">
            Request Proposal
          </Link>
        </li>
        <li className="navi__item">
          <Link to="#" className="navi__link">
            Download home planner
          </Link>
        </li>
        <li className="navi__item">
          <Link to="#" className="navi__link">
            contact us
          </Link>
        </li>

        <li className="navi__item">
          <Link to="#" className="navi__link">
            work with us
          </Link>
        </li>
      </ul>
      <p className="copy">
        This Webpage was created by Building Security and Automation .
      </p>
    </footer>
  );
};

export default Footer;
