import React from "react";

import Card from "./Card";
import Header from "./Header";
import PrimaryButton from "./PrimaryButton";

export default function Main() {
  return (
    <div className="main">
      <Header
        name="Alexandra Stoica"
        description="UX/Frontend Enginner @Potato London. MSc Human-Computer
        Interaction (Distinction) at UCL, London, UK. BSc Web Development
        (1:1 Hons) at WorcUni, UK. Interested in all things frontend and
        human-computer interaction. 🧠👩🏻‍💻"
      />
      <PrimaryButton link="/" title="See my work" />
      <PrimaryButton link="/" title="See leadership and awards" />
      <h2>Work</h2>
      <ul>
        <Card label="test" title="test" description="test" link="/" />
      </ul>
    </div>
  );
}