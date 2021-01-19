import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./pages/Details";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
