import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { DetailScreenProps, GoalType } from '../types'
import { colors } from '../constants/Colors'
import GoalItem from '../components/GoalItem'
import { Card } from '../components'
import { MaterialIcons } from '@expo/vector-icons'

export default function DetailScreen({
	goals,
	setGoals,
	navigation,
	route,
}: DetailScreenProps) {
	const [filteredGoal, setFilteredGoal] = useState<GoalType | null>(null)

	useLayoutEffect(() => {
		const { id } = route.params
		const goal = goals.find((goal) => goal.id === id) || null
		setFilteredGoal(goal)
	}, [goals, route.params])

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Goal detail',
			headerTintColor: 'white',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
				color: 'white',
			},
			headerTitleAlign: 'center',
			headerLeft: () => (
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}>
					<MaterialIcons name="arrow-back" size={24} color="white" />
				</TouchableOpacity>
			),
		})
	}, [navigation])

	const onProgressHandler = (goalId: string) => {
		setGoals((currentGoals) =>
			currentGoals.map((goal) => {
				if (goal.id === goalId) {
					return { ...goal, isComplete: true, inProgress: false }
				}
				return goal
			}),
		)
	}

	const onDeleteHandler = (goalId: string) => {
		setGoals((currentGoals) => {
			const updatedGoals = currentGoals.filter((goal) => goal.id !== goalId)
			return updatedGoals
		})
		// navigation.navigate('Home')
	}

	return (
		<SafeAreaView style={styles.appContainer}>
			<View style={styles.innerWrapper}>
				<View style={styles.goalsContainer}>
					{filteredGoal ? (
						<GoalItem
							title={filteredGoal.title}
							description={filteredGoal.description}
							timestamp={filteredGoal.timestamp}
							id={filteredGoal.id}
							onDelete={onDeleteHandler}
							onProgress={onProgressHandler}
							isComplete={filteredGoal.isComplete}
							isProgress={filteredGoal.inProgress}
							isShowDeleteIcon
						/>
					) : (
						<Card style={styles.emptyCard}>
							<Text style={styles.message}>No goals found</Text>
							<Text style={styles.addMessage}>
								Click the + icon to add goals
							</Text>
						</Card>
					)}
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		color: '#FFF',
		flex: 1,
	},
	innerWrapper: {
		marginTop: 15,
		width: '100%',
		maxWidth: '90%',
		marginLeft: 'auto',
		marginRight: 'auto',
		flex: 1,
	},
	goalsContainer: {
		flex: 4,
		marginTop: 150,
	},
	emptyCard: {
		backgroundColor: colors?.secondary,
		padding: 24,
	},

	message: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		lineHeight: 21,
		letterSpacing: 0.25,
		marginBottom: 10,
	},
	addMessage: {
		color: 'white',
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 19,
		letterSpacing: 0.15,
	},
	backButton: {
		marginLeft: 10,
		padding: 5,
	},
})
