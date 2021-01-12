import React from "react";
import { render } from "react-dom";

import Footer from "./components/Footer";
import Main from "./components/Main";


const App = () => {
  return (
    <div>
      <Main />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
