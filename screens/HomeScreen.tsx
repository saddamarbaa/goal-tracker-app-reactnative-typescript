import {
	StyleSheet,
	Text,
	View,
	Button,
	FlatList,
	SafeAreaView,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

import { RootTabScreenProps, GoalType } from '../types'
import GoalItem from '../components/GoalItem'
import GoalInput from '../components/GoalInput'

const myItemSeparator = () => {
	return <View style={{ backgroundColor: 'grey' }} />
}

const myListEmpty = () => {
	return (
		<View style={styles.emptyList}>
			<Text style={styles.item}>No goals found</Text>
		</View>
	)
}

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const [refreshing, setRefreshing] = useState(false)
	const [goals, setGoals] = useState<GoalType[]>([])
	const [isAddGoal, setIsAddGoal] = useState(false)

	const addGoalHandler = (enteredGoal: string) => {
		if (!enteredGoal || enteredGoal.trim() === '') {
		} else {
			// update state based on the previous sate with best practices
			setGoals((previousGoals) => [
				{
					timestamp: new Date(),
					key: Math.random().toString(),
					id: Math.random().toString(),
					value: enteredGoal,
				},
				...previousGoals,
			])
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Your Goals',
			headerStyle: { backgroundColor: '#1e085a', borderWidth: 0 },
			headerTintColor: 'white',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
				color: 'white',
			},
			headerTitleAlign: 'center',
			headerLeft: () => <View style={{ marginLeft: 20 }}></View>,
		})
	}, [navigation])

	const deleteGoalHandler = (goalId: string) => {
		// Fist solution
		// const updatedGoals = lifeGoals.filter((goal, index) => {
		// 	return goal.id !== goalId;
		// });
		// setLifeGoals(updatedGoals);

		// second solution
		setGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId)
		})
	}

	const handleRefresh = () => {
		setRefreshing((prevState) => !prevState)
	}

	return (
		<SafeAreaView style={styles.container}>
			{!isAddGoal && (
				<View style={styles.button}>
					<Button title="Add New Goal" onPress={() => setIsAddGoal(true)} />
				</View>
			)}

			<GoalInput
				onAddGoal={addGoalHandler}
				modalVisible={isAddGoal}
				setIsAddGoal={setIsAddGoal}
			/>

			<FlatList
				contentContainerStyle={styles.flatList}
				data={goals}
				renderItem={({ item }) => (
					<GoalItem
						value={item.value}
						timestamp={item.timestamp}
						key={item.key}
						id={item.id}
						onDelete={deleteGoalHandler}
					/>
				)}
				ItemSeparatorComponent={myItemSeparator}
				// ListEmptyComponent={myListEmpty}
				refreshing={refreshing}
				onRefresh={handleRefresh}
			/>

			{/* <Footer /> */}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1e085a',
		color: '#FFF',
		flex: 1,
	},
	flatList: {
		flex: 3,
		marginTop: 25,
	},
	emptyList: {
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.4,
		shadowRadius: 2,
		width: '100%',
		maxWidth: '90%',
		margin: 10,
		fontSize: 22,
		fontWeight: 'bold',
		marginLeft: 'auto',
		marginRight: 'auto',
		textAlign: 'center',
		cursor: 'pointer',
		borderRadius: 6,
		backgroundColor: '#5e0acc',
		color: '#FFFF',
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	item: {
		marginTop: 5,
		fontSize: 15,
		flex: 1,
		color: 'white',
	},
	button: {
		width: '100%',
		maxWidth: '90%',
		margin: 10,
		cursor: 'pointer',
		fontSize: 22,
		marginTop: 50,
		marginLeft: 'auto',
		marginRight: 'auto',
	},
})
