import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
	HomeScreenNavigationProp,
	HomeScreenProps,
	HomeScreenRouteProp,
} from '../types'
import { Card } from '../components'
import { colors } from '../constants/Colors'
import GoalItem from '../components/GoalItem'

export default function HomeScreen({ goals, setGoals }: HomeScreenProps) {
	const navigation = useNavigation<HomeScreenNavigationProp>()
	const route = useRoute<HomeScreenRouteProp>()
	const [refreshing, setRefreshing] = useState(false)

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Goals',
			//  headerStyle: { backgroundColor: '#1e085a' },
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
	}

	const onRedirectHandler = (goalId: string) => {
		// Navigate to the goal detail page and pass the id as a parameter
		navigation.navigate('Detail', { id: goalId })
	}

	const handleRefresh = () => {
		setRefreshing((prevState) => !prevState)
	}

	const myItemSeparator = () => {
		return <View style={{ backgroundColor: 'grey' }} />
	}

	const myListEmpty = () => {
		return (
			<Card style={styles.emptyCard}>
				<Text style={styles.message}>No goals found</Text>
				<Text style={styles.addMessage}>Click the + icon to add goals</Text>
			</Card>
		)
	}

	return (
		<SafeAreaView style={styles.appContainer}>
			<View style={styles.innerWrapper}>
				<View style={styles.goalsContainer}>
					<FlatList
						alwaysBounceVertical={false}
						data={goals}
						renderItem={({ item, index, separators }) => (
							<GoalItem
								title={item.title}
								description={item.description}
								timestamp={item.timestamp}
								id={item.id}
								onDelete={onDeleteHandler}
								onProgress={onProgressHandler}
								onRedirect={onRedirectHandler}
								isComplete={item?.isComplete}
								inProgress={item.inProgress}
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
		// backgroundColor: '#1e085a',
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
	emptyCard: {
		backgroundColor: colors?.secondary,
		padding: 24,
		marginTop: 120,
	},
	item: {
		flex: 1,
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		lineHeight: 21,
		letterSpacing: 0.25,
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
})
