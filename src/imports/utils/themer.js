import createPalette from 'material-ui/styles/palette';
import { createMuiTheme, MuiThemeProvider, } from 'material-ui/styles/';
import teal from 'material-ui/colors/teal';
import pink from 'material-ui/colors/pink';
import grey from 'material-ui/colors/grey';

const palette = createPalette({ primary: teal, accent: pink, type: 'dark', });

export const styleManager = {};

export const theme = createMuiTheme({ palette, });
