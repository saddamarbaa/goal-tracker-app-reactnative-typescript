import { Pressable, StyleSheet, Text } from 'react-native'

import { GoalType } from '../types'
import { Card } from './Card'

interface GoalItemsPropsType {
	onDelete: (value: string) => void
}

type PropsType = GoalItemsPropsType & GoalType

export default function GoalItem(
	this: any,
	{ onDelete, id, value, timestamp }: PropsType,
) {
	return (
		<Card style={styles.shadowProp}>
			<Pressable
				onPress={onDelete.bind(this, id)}
				// Ios feedback
				style={({ pressed }) => pressed && styles.pressedItem}
				// android feedback
				android_ripple={{ color: 'rgb(210, 230, 255)' }}>
				<Text style={styles.goalText}>{value}</Text>
			</Pressable>
		</Card>
	)
}

const styles = StyleSheet.create({
	shadowProp: {
		cursor: 'pointer',
		backgroundColor: '#5e0acc',
		padding: 0,
	},
	goalText: {
		fontSize: 18,
		lineHeight: 21,
		letterSpacing: 0.25,
		color: 'white',
		paddingHorizontal: 10,
		paddingVertical: 20,
		textAlign: 'center',
	},
	pressedItem: {
		opacity: 0.5,
		backgroundColor: '#210644',
	},
})
