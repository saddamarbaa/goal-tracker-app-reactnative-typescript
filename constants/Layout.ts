import { Dimensions } from 'react-native'
import { colors } from './Colors'

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
	headerStyle: { backgroundColor: colors.main },
	headerTitleStyle: { color: '#fff' },
	headerTintColor: '#fff',
}
