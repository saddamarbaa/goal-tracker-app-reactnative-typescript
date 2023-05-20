import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GoalType } from '../types'
import { Card } from './Card'
import { colors } from '../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface GoalItemsPropsType {
	onDelete: (id: string) => void
	onProgress: (id: string) => void
	onRedirect?: (id: string) => void
	isComplete?: boolean
	isProgress?: boolean
	isShowDeleteIcon?: boolean
}

type PropsType = GoalItemsPropsType & GoalType

export default function GoalItem({
	onDelete,
	id,
	title,
	timestamp,
	isComplete,
	description,
	isProgress,
	onProgress,
	onRedirect,
	isShowDeleteIcon = false,
}: PropsType) {
	return (
		<Card style={styles.shadowProp}>
			<Pressable
				onPress={() => {
					if (onRedirect) {
						onRedirect(id)
					}
				}}
				style={({ pressed }) => {
					// for IOS ripple effect
					return pressed && styles.pressedItem
				}}
				android_ripple={{ color: 'rgb(210, 230, 255)' }}>
				<View style={styles.item}>
					<Pressable
						onPress={() => onProgress(id)}
						style={styles.iconContainer}>
						{!isComplete ? (
							<MaterialCommunityIcons
								name="progress-clock"
								size={28}
								color={colors.warning}
							/>
						) : null}
					</Pressable>
					<Pressable
						style={styles.iconContainer}
						onPress={() => onProgress(id)}>
						{isComplete ? (
							<MaterialCommunityIcons
								name="check-circle-outline"
								size={28}
								color={colors.success}
							/>
						) : null}
					</Pressable>

					<View style={styles.content}>
						<Text style={[styles.title, isComplete && styles.completeText]}>
							{title}
						</Text>
						<Text
							style={[styles.description, isComplete && styles.completeText]}>
							{description}
						</Text>
					</View>

					<Pressable onPress={() => onDelete(id)} style={styles.iconContainer}>
						{isComplete || isShowDeleteIcon ? (
							<MaterialCommunityIcons
								name="archive-arrow-up-outline"
								size={28}
								color={colors.accent}
							/>
						) : null}
					</Pressable>
				</View>
			</Pressable>
		</Card>
	)
}

const styles = StyleSheet.create({
	shadowProp: {
		cursor: 'pointer',
		backgroundColor: colors.secondary,
		padding: 0,
	},
	content: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		color: 'white',
		flex: 1,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 7,
		color: 'white',
	},
	description: {
		fontSize: 18,
		fontStyle: 'italic',
		color: 'white',
	},
	completeText: {
		color: 'gray',
		textDecorationLine: 'line-through',
	},
	pressedItem: {
		opacity: 0.5,
		backgroundColor: colors.main,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		display: 'flex',
	},
	item: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		padding: 7,
		paddingLeft: 16,
	},
	iconContainer: {
		marginRight: 10,
	},
})
