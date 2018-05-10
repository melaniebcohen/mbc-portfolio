import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';
import { white, grey300, grey800, blueGrey900, amber800, transparent } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  fontFamily: 'Avenir',
  appBar: {
    color: transparent,
    textColor: blueGrey900,
    titleFontWeight: 500,
  },
  drawer: {
    color: grey300,
  },
  dropDownMenu: {
    accentColor: grey800,
  },
  menuItem: {
    padding: 0,
  },
  raisedButton: {
    primaryColor: amber800,
  },
  subheader: {
    fontSize: 40,
  },
});

export default muiTheme;