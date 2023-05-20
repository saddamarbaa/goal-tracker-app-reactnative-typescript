import React, { useState } from 'react'
import { StyleSheet, Modal, View, Image } from 'react-native'

import FormButton from './FormButton'
import { colors } from '../constants/Colors'
import CustomInput from './CustomInput'

type PropType = {
	onAddGoal: (goal: { title: string; description: string }) => void
	modalVisible: boolean
	onCloseModal: () => void
}

export function CustomModal({
	onAddGoal,
	modalVisible,
	onCloseModal,
}: PropType) {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleTitleChange = (text: string) => {
		setTitle(text)
	}

	const handleDescriptionChange = (text: string) => {
		setDescription(text)
	}

	const onAddNewGoal = () => {
		if (
			!title ||
			title.trim() === '' ||
			!description ||
			description.trim() === ''
		)
			return
		onAddGoal({
			title: title,
			description: description,
		})
		setDescription('')
		setTitle('')
	}

	return (
		<Modal animationType="slide" transparent={false} visible={modalVisible}>
			<View style={styles.modalWrapper}>
				<View style={styles.container}>
					<Image
						source={require('../assets/images/goal.png')}
						style={styles.goalImage}
					/>

					<CustomInput
						value={title}
						onChangeText={handleTitleChange}
						placeholder="Enter title"
					/>

					<CustomInput
						value={description}
						onChangeText={handleDescriptionChange}
						placeholder="Type your goal!"
						inputStyle={{ minHeight: 70 }}
					/>

					<FormButton
						buttonTitle="ADD"
						onPress={onAddNewGoal}
						buttonContainerStyle={{ backgroundColor: colors?.secondary }}
					/>

					<FormButton
						buttonTitle="Cancel"
						onPress={onCloseModal}
						buttonContainerStyle={{ backgroundColor: colors?.accent }}
					/>
				</View>
			</View>
		</Modal>
	)
}

export default CustomModal

const styles = StyleSheet.create({
	modalWrapper: {
		justifyContent: 'center',
		width: '100%',
		flex: 1,
		backgroundColor: colors.main,
	},

	container: {
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
})
