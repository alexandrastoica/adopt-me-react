import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>World</h2>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
