import React from "react";
import { render } from "react-dom";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "World"),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
