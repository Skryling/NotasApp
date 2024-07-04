import React from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../css/footer.css";
const Footer = () => {
  return (
    <div className="fixed-bottom">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div>
            <span className="navbar-brand mb-0 text-secondary">
              NotasApp, tus notas a mano
              </span>
          </div>
          <div>
            <CiInstagram className="mx-2 h4" />
            <FaGithub className="mx-2 h4"/>
            <CiLinkedin className="mx-2 h4"/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
