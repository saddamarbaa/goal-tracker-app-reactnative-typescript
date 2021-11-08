/** @format */

import React from "react";

import { Modal, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = ({ onDelete, title, id }) => {
	return (
		<TouchableOpacity onPress={onDelete.bind(this, id)}>
			<View style={styles.listItem}>
				<Text> {title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	listItem: {
		backgroundColor: "#ccc",
		borderWidth: 1,
		padding: 10,
		marginVertical: 10,
		width: 520,
	},
});
