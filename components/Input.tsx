import React, { useState } from 'react'
import { Modal, StyleSheet, View, TextInput, Image } from 'react-native'
import FormButton from './FormButton'

type GoalInputType = {
	onAddGoal: (value: string) => void
	modalVisible: boolean
	setIsAddGoal: (value: boolean) => void
}

export function Input({
	onAddGoal,
	modalVisible,
	setIsAddGoal,
}: GoalInputType) {
	const [enteredGoal, setEnteredGoal] = useState('')

	const goalInputChangeHandler = (
		enteredText: React.SetStateAction<string>,
	) => {
		setEnteredGoal(enteredText)
	}

	const closeModalHandler = () => setIsAddGoal(false)

	const onAddNewGoal = () => {
		if (!enteredGoal || enteredGoal.trim() === '') return
		onAddGoal(enteredGoal)
		setEnteredGoal('')
		closeModalHandler()
	}

	return (
		<Modal animationType="slide" transparent={false} visible={modalVisible}>
			<View style={styles.modalWrapper}>
				<View style={styles.inputContainer}>
					<Image
						source={require('../assets/images/goal.png')}
						style={styles.goalImage}
					/>
					<TextInput
						style={styles.input}
						onChangeText={goalInputChangeHandler}
						value={enteredGoal}
						placeholder="Type your goal!"
						placeholderTextColor="#333"
					/>

					<FormButton
						buttonTitle="ADD"
						onPress={onAddNewGoal}
						buttonContainerStyle={{ backgroundColor: '#5e0acc' }}
					/>

					<FormButton
						buttonTitle="Cancel"
						onPress={closeModalHandler}
						buttonContainerStyle={{ backgroundColor: '#f31282' }}
					/>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modalWrapper: {
		justifyContent: 'center',
		width: '100%',
		flex: 1,
		backgroundColor: '#311b6b',
	},

	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'column',
		padding: 20,
	},
	goalImage: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		padding: 14,
		borderRadius: 8,
		flexDirection: 'row',
		backgroundColor: '#e4d0ff',
		borderColor: '#e4d0ff',
		marginVertical: 10,
		color: '#120438',
		width: '100%',
		fontSize: 17,
		// web: {
		// 	outlineStyle: 'none',
		// },
	},
})

export default Input
