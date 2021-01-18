import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Details from "./pages/Details";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <h1>Adopt me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
