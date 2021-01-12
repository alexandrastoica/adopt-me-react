import React from "react";
import { render } from "react-dom";
import { Router } from '@reach/router';

import Footer from "./components/Footer";
import Main from "./components/Main";
import Article from "./pages/Article";


const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Main path="/" />
        <Article path="/articles/:title" />
      </Router>
      <Footer />
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
