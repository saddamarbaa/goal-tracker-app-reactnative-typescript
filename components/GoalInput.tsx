import React, { useState } from 'react'
import { Modal, StyleSheet, View, Button, TextInput } from 'react-native'

type GoalInputType = {
	onAddGoal: (value: string) => void
	modalVisible: boolean
	setIsAddGoal: (value: boolean) => void
}

export default function GoalInput({
	onAddGoal,
	modalVisible,
	setIsAddGoal,
}: GoalInputType) {
	const [enteredGoal, setEnteredGoal] = useState('')

	const goalInputHandler = (enteredText: React.SetStateAction<string>) => {
		setEnteredGoal(enteredText)
	}

	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={styles.wrapper}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						onChangeText={goalInputHandler}
						value={enteredGoal}
						placeholder="Life goals"
					/>

					<View style={styles.button}>
						<Button
							title="ADD"
							onPress={() => {
								{
									onAddGoal(enteredGoal)
									setEnteredGoal('')
								}
							}}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="Cancel"
							color="red"
							onPress={() => {
								{
									setIsAddGoal(false)
								}
							}}
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		padding: 10,
		marginLeft: 'auto',
		marginRight: 'auto',
		justifyContent: 'center',
		width: '90%',
		maxWidth: 500,
		flex: 1,
	},

	inputContainer: {
		justifyContent: 'center',
		flex: 1,
	},

	button: {
		marginBottom: 10,
	},

	input: {
		height: 40,
		borderWidth: 1,
		padding: 10,
		borderColor: 'black',
		borderRadius: 10,
		flexDirection: 'row',
		backgroundColor: 'white',
		outlineStyle: 'none',
		marginBottom: 16,
		web: {
			outlineStyle: 'none',
		},
	},
})
