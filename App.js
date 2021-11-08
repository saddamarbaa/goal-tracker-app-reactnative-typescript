/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
import GoalInput from "./component/GoalInput";
import GoalItem from "./component/GoalItem";

export default function App() {
	const [lifeGoals, setLifeGoals] = useState([]);
	const [isAddGoal, setIsAddGoal] = useState(false);

	const addGoalHandler = (enteredGoal) => {
		if (!enteredGoal || enteredGoal.trim() === "") {
		} else {
			// update state based on the previous sate with best practices
			setLifeGoals((currentGoals) => {
				return [
					...currentGoals,
					{
						key: Math.random().toString(),
						id: Math.random().toString(),
						value: enteredGoal,
					},
				];
			});
			setIsAddGoal(false);
		}
	};

	const deleteGoalHandler = (goalId) => {
		// Fist solution
		// const updatedGoals = lifeGoals.filter((goal, index) => {
		// 	return goal.id !== goalId;
		// });
		// setLifeGoals(updatedGoals);

		// second solution
		setLifeGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	return (
		<View style={styles.container}>
			{!isAddGoal && (
				<Button title='Add New Goal' onPress={() => setIsAddGoal(true)} />
			)}
			<GoalInput
				onAddGoal={addGoalHandler}
				modalVisible={isAddGoal}
				setIsAddGoal={setIsAddGoal}
			/>

			<View>
				<FlatList
					data={lifeGoals}
					renderItem={(goal, index) => (
						<GoalItem
							title={goal.item.value}
							onDelete={deleteGoalHandler}
							id={goal.item.id}
						/>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		alignItems: "center",
	},
});
