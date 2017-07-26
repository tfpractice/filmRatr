import createPalette from 'material-ui/styles/palette';
import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles/';
import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import grey from 'material-ui/colors/grey';

// import red from 'material-ui/colors/red';

// import { pink, teal, } from 'material-ui/styles/colors';
// import { pink, } from 'material-ui/colors/pink';
// import { teal, } from 'material-ui/colors/teal';
const palette = createPalette({ primary: teal, accent: pink, type: 'dark', });

// const { styleManager, theme, } = MuiThemeProvider.createDefaultContext({ theme: createMuiTheme({ palette, }), });

export const styleManager = {};

export const theme = createMuiTheme({ palette, });
