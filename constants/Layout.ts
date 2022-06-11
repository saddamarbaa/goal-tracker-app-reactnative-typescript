import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
}

export const GlobalScreenOption = {
	headerStyle: { backgroundColor: '#1e085a' },
	headerTitleStyle: { color: '#fff' },
	headerTintColor: '#fff',
}
