import React from "react";

export default function Sidebar() {
  return (
    <aside>
      <dl>
        <dt className="article--label"><span className="material-icons">filter_none</span>Extended abstract</dt>
        <dt>Date</dt>
        <dd>08 April 2018</dd>
        <dt>Context</dt>
        <dd>MSc Human-Computer Interaction, UCL, London, UK</dd>
        <dt>Links</dt>
        <dd><a href="https://drive.google.com/file/d/1tZSYdIx2HKhR60WtpyIBmzVYOvf9tQin/view?usp=sharing" target="_blank" rel="noreferrer" className="primary-button">
          <span className="material-icons">open_in_new</span>View paper </a></dd>
        <dt>Type</dt>
        <dd className="pill">extended abstract</dd>
        <dd className="pill">individual assignment</dd>
        <dd className="pill">university assignment</dd>
        <dt>Methods</dt>
        <dd className="pill">app review</dd>
        <dd className="pill">autoethnography</dd>
        <dd className="pill">contextual inquiry</dd>
        <dd className="pill">surveys</dd>
      </dl>
    </aside>
  );
}