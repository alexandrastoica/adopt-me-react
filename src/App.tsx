import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';
import Details from './pages/Details';
import SearchParams from './components/SearchParams';
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('rebeccapurple');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
