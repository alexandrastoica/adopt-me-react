import { Link } from "@reach/router";
import React from "react";

export default function Card({ label, title, description, link }) {
  return (
    <li className="card">
      <span className="card--corner"></span>
      <div className="card--label">{label}</div>
      <div className="card--title">{title}</div>
      <div className="card--description">{description}</div>
      <Link to={link} className="card--cta">
        Enter
      </Link>
    </li>
  );
}
