import React from 'react';

//components
import Header from './components/Header';

// styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <div className="App">
      <Header />
      Start here.
      <GlobalStyle />
    </div>
  );
};

export default App;
