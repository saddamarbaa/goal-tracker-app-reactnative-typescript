import React from 'react'
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	View,
	StyleProp,
	ViewStyle,
} from 'react-native'

import { windowHeight } from '../utils'

type ButtonType = {
	buttonTitle: string
	onPress?: () => void
	btnType?: string
	buttonTexStyle?: StyleProp<ViewStyle>
	buttonContainerStyle?: StyleProp<ViewStyle>
}

export function FormButton({
	buttonTitle,
	btnType,
	buttonTexStyle,
	buttonContainerStyle,
	...rest
}: ButtonType) {
	return (
		<TouchableOpacity
			style={[styles.buttonContainer, buttonContainerStyle]}
			{...rest}>
			<View style={styles.btnTxtWrapper}>
				<Text style={[styles.buttonText, buttonTexStyle]}>{buttonTitle}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 16,
		width: '100%',
		height: windowHeight / 15,
		maxHeight: 45,
		backgroundColor: '#2e64e5',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 5,
		cursor: 'pointer',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#ffffff',
		// fontFamily: 'Lato-Regular',
	},
	btnTxtWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default FormButton
