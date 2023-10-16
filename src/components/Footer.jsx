import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return <p>Copywright {currentYear} </p>;
}

export default Footer;
