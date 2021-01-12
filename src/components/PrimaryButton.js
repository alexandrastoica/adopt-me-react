import React from "react";

export default function PrimaryButton({ title, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="primary-button">{title}</a>
  );
}