import React from 'react'
import {
	StyleSheet,
	TextInput,
	TextInputProps,
	StyleProp,
	ViewStyle,
} from 'react-native'

interface CustomInputProps extends TextInputProps {
	placeholder: string
	label?: string
	value: string
	onChangeText: (text: string) => void
	inputStyle?: StyleProp<ViewStyle>
}

export function CustomInput({
	inputStyle,
	placeholder,
	...rest
}: CustomInputProps) {
	return (
		<TextInput
			style={[styles.input, inputStyle]}
			placeholder={placeholder}
			{...rest}
			placeholderTextColor="#333"
		/>
	)
}

export default CustomInput

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		padding: 14,
		borderRadius: 8,
		flexDirection: 'row',
		backgroundColor: '#e4d0ff',
		borderColor: '#e4d0ff',
		marginVertical: 10,
		color: '#120438',
		width: '100%',
		fontSize: 17,
	},
})
