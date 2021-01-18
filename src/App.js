import React from "react";
import { render } from "react-dom";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <h1>Adopt me!</h1>
      <SearchParams />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
