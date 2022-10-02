import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

import { RootTabScreenProps, GoalType } from '../types'
import GoalItem from '../components/GoalItem'
import { FormButton, Card, Input } from '../components'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const [refreshing, setRefreshing] = useState(false)
	const [goals, setGoals] = useState<GoalType[]>([])
	const [isAddGoal, setIsAddGoal] = useState(false)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Your Goals',
			headerStyle: { backgroundColor: '#1e085a' },
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

	const addGoalHandler = (enteredGoal: string) => {
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

	const myItemSeparator = () => {
		return <View style={{ backgroundColor: 'grey' }} />
	}

	const myListEmpty = () => {
		return (
			<Card style={{ backgroundColor: '#5e0acc' }}>
				<Text style={styles.item}>No goals found</Text>
			</Card>
		)
	}

	return (
		<SafeAreaView style={styles.appContainer}>
			<View style={styles.innerWrapper}>
				{!isAddGoal && (
					<FormButton
						buttonTitle={`${goals.length === 0 ? 'Add Goal' : 'Add New Goal'}`}
						onPress={() => setIsAddGoal(true)}
					/>
				)}

				<Input
					onAddGoal={addGoalHandler}
					modalVisible={isAddGoal}
					setIsAddGoal={setIsAddGoal}
				/>

				<View style={styles.goalsContainer}>
					<FlatList
						alwaysBounceVertical={false}
						data={goals}
						renderItem={({ item, index, separators }) => (
							<GoalItem
								value={item.value}
								timestamp={item.timestamp}
								id={item.id}
								onDelete={deleteGoalHandler}
							/>
						)}
						keyExtractor={(item, index) => item.id}
						ItemSeparatorComponent={myItemSeparator}
						ListEmptyComponent={myListEmpty}
						refreshing={refreshing}
						onRefresh={handleRefresh}
					/>
				</View>
				{/* <Footer /> */}
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		backgroundColor: '#1e085a',
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
		marginTop: 15,
	},
	item: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		lineHeight: 21,
		letterSpacing: 0.25,
	},
})
