import React from "react";

export default function StickyBreadcrumb({ name, pageTitle }) {
  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <a href="/">{name}</a>
          <span className="material-icons md-18">chevron_right</span>
        </li>
        <li>{pageTitle}</li>
      </ul>
    </nav>
  );
}