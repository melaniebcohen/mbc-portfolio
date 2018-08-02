import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from './style/mui-theme.js';

import './style/main.scss';

import HomeView from './components/home/index.js';

const App = () => {
  return (
    <main>
      <MuiThemeProvider muiTheme={muiTheme}>
        <HomeView />
      </MuiThemeProvider>
    </main>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById('root'));