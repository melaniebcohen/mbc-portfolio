import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.scss';

import Home from './components/home/Home.js';

const App = () => {
  return <main>
    <Home />
  </main>;
};

export default App;
ReactDOM.render(<App />, document.getElementById('root'));