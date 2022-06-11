import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { GoalType } from '../types'

interface GoalItemsPropsType {
	onDelete: (value: string) => void
}

type PropsType = GoalItemsPropsType & GoalType

export default function GoalItem(
	this: any,
	{ onDelete, id, value, timestamp }: PropsType,
) {
	return (
		<TouchableOpacity onPress={onDelete.bind(this, id)}>
			<View style={styles.shadowProp}>
				<Text style={styles.text}>{value}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	shadowProp: {
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		cursor: 'pointer',
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		color: '#FFFF',
		paddingHorizontal: 10,
		paddingVertical: 20,
		width: '100%',
		maxWidth: '90%',
		margin: 10,
		fontSize: 22,
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
	},

	text: {
		fontSize: 22,
		lineHeight: 21,
		letterSpacing: 0.25,
		color: 'white',
	},
})
