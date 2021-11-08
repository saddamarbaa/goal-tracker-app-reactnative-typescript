/** @format */

import React, { useState } from "react";
import { Modal, StyleSheet, View, Button, TextInput } from "react-native";

const GoalInput = ({ onAddGoal, modalVisible, setIsAddGoal }) => {
	const [enteredGoal, setEnteredGoal] = React.useState("");

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	return (
		<Modal animationType='slide' transparent={true} visible={modalVisible}>
			<View style={styles.wrapper}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						onChangeText={goalInputHandler}
						value={enteredGoal}
						placeholder='Life goals'
					/>

					<View style={styles.button}>
						<Button
							title='ADD'
							style={styles.button}
							onPress={() => {
								{
									onAddGoal(enteredGoal);
									setEnteredGoal("");
								}
							}}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title='Cancel'
							color='red'
							onPress={() => {
								{
									setIsAddGoal(false);
								}
							}}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "center",
		justifyContent: "center",
		width: 520,
		flex: 1,
	},

	inputContainer: {
		justifyContent: "center",
		justifyContent: "center",
		flex: 1,
	},

	button: {
		marginBottom: 10,
	},

	input: {
		borderColor: "black",
		borderWidth: 1,
		marginBottom: 16,
		padding: 10,
		outlineColor: "orange",
		web: {
			outlineStyle: "none",
		},
	},
});

export default GoalInput;
