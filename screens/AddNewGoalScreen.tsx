import { useLayoutEffect, useState } from 'react'
import uuid from 'react-native-uuid'

import { AddNewGoalScreenProps, GoalType } from '../types'
import { CustomModal } from '../components'

export default function AddNewGoalScreen({
	goals,
	setGoals,
	navigation,
	route,
}: AddNewGoalScreenProps) {
	const [isAddGoal, setIsAddGoal] = useState(false)

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})

		const unsubscribe = navigation.addListener('focus', () => {
			setIsAddGoal(true)
		})

		return () => {
			unsubscribe()
		}
	}, [navigation])

	const handleRedirect = () => {
		// Navigate back to the Home screen
		setIsAddGoal(false)
		navigation.navigate('Home')
	}

	const addGoalHandler = (enteredGoal: {
		title: string
		description: string
	}) => {
		const newGoal: GoalType = {
			timestamp: new Date(),
			key: uuid.v4() as string,
			id: uuid.v4() as string,
			title: enteredGoal.title,
			description: enteredGoal.description,
			isComplete: false,
			inProgress: true,
		}

		setGoals((previousGoals) => [newGoal, ...previousGoals])
		handleRedirect()
	}

	return (
		<CustomModal
			onAddGoal={addGoalHandler}
			modalVisible={isAddGoal}
			onCloseModal={handleRedirect}
		/>
	)
}
