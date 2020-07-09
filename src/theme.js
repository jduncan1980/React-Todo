import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { teal, green } from '@material-ui/core/colors';

let theme = createMuiTheme({
	palette: {
		primary: teal,
		secondary: green,
	},
});

theme = responsiveFontSizes(theme, { factor: 7 });

export default theme;
