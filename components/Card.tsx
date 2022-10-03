import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'

type CardDType = {
	children: React.ReactNode
	style: ViewStyle
}

export function Card({ children, style }: CardDType) {
	return <View style={[cardStyles.card, style]}>{children}</View>
}

const cardStyles = StyleSheet.create({
	card: {
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		borderRadius: 6,
		shadowColor: 'black',
		backgroundColor: 'white',
		width: '100%',
		margin: 10,
		fontSize: 22,
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		elevation: 8,
		padding: 20,
	},
})

export default Card
