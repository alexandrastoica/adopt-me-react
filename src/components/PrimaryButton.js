import { Link } from "@reach/router";
import React from "react";

export default function PrimaryButton({ title, link }) {
  return (
    <Link to={link} target="_blank" rel="noreferrer" className="primary-button">
      {title}
    </Link>
  );
}
