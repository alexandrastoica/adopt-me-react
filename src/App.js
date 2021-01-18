import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

const App = () => {
  return (
    <React.StrictMode>
      <Router></Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
