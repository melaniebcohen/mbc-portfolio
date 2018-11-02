import React from 'react';
import ReactDOM from 'react-dom';

import './style/main.scss';

import HomeView from './components/home/index.js';

const App = () => {
  return (
    <main>
      {/* <MuiThemeProvider muiTheme={muiTheme}> */}
        <HomeView />
      {/* </MuiThemeProvider> */}
    </main>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));