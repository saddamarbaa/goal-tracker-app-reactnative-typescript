const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export const colors = {
	main: '#344FA1',
	secondary: '#031A56',
	accent: '#f31282',
	success: 'green',
	warning: 'yellow',
	activeIconColor: '#f31282',
	white: '#FFFFFF',
}

export default {
	light: {
		text: '#000',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: '#fff',
		background: '#000',
		tint: tintColorDark,
		tabIconDefault: '#ccc',
		tabIconSelected: tintColorDark,
	},
}
