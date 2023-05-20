import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	DefaultTheme,
	NavigationContainer,
	useNavigation,
	useRoute,
} from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import AntDesignIcon from '@expo/vector-icons/AntDesign'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import DetailScreen from '../screens/DetailScreen'
import HomeScreen from '../screens/HomeScreen'
import { colors } from '../constants/Colors'
import { GlobalScreenOption } from '../constants'
import AddNewGoalScreen from '../screens/AddNewGoalScreen'
import {
	AddNewGoalScreenNavigationProp,
	AddNewGoalScreenRouteProp,
	DetailScreenNavigationProp,
	DetailScreenRouteProp,
	GoalType,
	HomeScreenNavigationProp,
	HomeScreenRouteProp,
} from '../types'
import { Text } from 'react-native'

const Tab = createBottomTabNavigator()

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: 'rgb(255, 45, 85)',
		background: colors.main,
	},
}

type NavigationProps = {
	goals: GoalType[]
	setGoals: React.Dispatch<React.SetStateAction<GoalType[]>>
}

export default function RootNavigation({ goals, setGoals }: NavigationProps) {
	return (
		<NavigationContainer theme={MyTheme}>
			<StatusBar style="light" />
			<Tab.Navigator
				screenOptions={({ route }) => ({
					...GlobalScreenOption,
					tabBarIcon: ({ focused, color, size }) => {
						let iconColor = focused ? colors.accent : colors.accent
						if (route.name === 'Home') {
							return (
								<MaterialCommunityIcons
									name="home-minus"
									size={30}
									color={iconColor}
								/>
							)
						} else if (route.name === 'New') {
							return (
								<AntDesignIcon name="pluscircle" size={30} color={iconColor} />
							)
						}

						return null // Return null if no icon is found
					},
					tabBarStyle: {
						// backgroundColor: colors.main,
					},
					tabBarLabel: ({ focused, color }) => {
						let labelColor = focused ? colors.accent : colors.accent
						return (
							<Text
								style={{ color: labelColor, fontSize: 14, fontWeight: 'bold' }}>
								{route.name}
							</Text>
						)
					},
					// Set the background color of the bottom tab bar
					tabBarActiveTintColor: colors.accent, // Set the active tab icon color
					tabBarInactiveTintColor: colors.accent, // Set the inactive tab icon color
				})}>
				<Tab.Screen name="Home">
					{(props) => {
						const navigation = useNavigation<HomeScreenNavigationProp>()
						const route = useRoute<HomeScreenRouteProp>()
						return (
							<HomeScreen
								{...props}
								goals={goals}
								setGoals={setGoals}
								navigation={navigation}
								route={route}
							/>
						)
					}}
				</Tab.Screen>
				<Tab.Screen
					name="New"
					// options={{
					// 	tabBarButton: () => null,
					// }}
				>
					{(props) => {
						const navigation = useNavigation<AddNewGoalScreenNavigationProp>()
						const route = useRoute<AddNewGoalScreenRouteProp>()
						return (
							<AddNewGoalScreen
								{...props}
								goals={goals}
								setGoals={setGoals}
								navigation={navigation}
								route={route}
							/>
						)
					}}
				</Tab.Screen>

				<Tab.Screen
					name="Detail"
					options={{
						tabBarButton: () => null,
					}}>
					{(props) => {
						const navigation = useNavigation<DetailScreenNavigationProp>()
						const route = useRoute<DetailScreenRouteProp>()
						return (
							<DetailScreen
								{...props}
								goals={goals}
								setGoals={setGoals}
								navigation={navigation}
								route={route}
							/>
						)
					}}
				</Tab.Screen>

				{/* <Tab.Screen
					name="Detail"
					component={DetailScreen}
					initialParams={{ id: 'your-id' }}
					options={{
						tabBarButton: () => null,
					}}
				/> */}
			</Tab.Navigator>
		</NavigationContainer>
	)
}
