import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type GoalType = {
	title: string
	description: string
	timestamp?: unknown
	key?: string
	id: string
	isComplete?: boolean
	inProgress?: boolean
	startDate?: Date
	endDate?: Date
	category?: string
	priority?: 'low' | 'medium' | 'high'
}

export type RootStackParamList = {
	Home: undefined
	Detail: { id: string }
	New: undefined
}

export type HomeScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<RootStackParamList>,
	NativeStackNavigationProp<RootStackParamList, 'Home'>
>

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

export interface HomeScreenProps {
	navigation: HomeScreenNavigationProp
	route: HomeScreenRouteProp
	goals: GoalType[]
	setGoals: React.Dispatch<React.SetStateAction<GoalType[]>>
}

export type AddNewGoalScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<RootStackParamList>,
	NativeStackNavigationProp<RootStackParamList, 'New'>
>

export type AddNewGoalScreenRouteProp = RouteProp<RootStackParamList, 'New'>

export type AddNewGoalScreenProps = {
	navigation: AddNewGoalScreenNavigationProp
	route: AddNewGoalScreenRouteProp
	goals: GoalType[]
	setGoals: React.Dispatch<React.SetStateAction<GoalType[]>>
}

export type DetailScreenNavigationProp = CompositeNavigationProp<
	BottomTabNavigationProp<RootStackParamList>,
	NativeStackNavigationProp<RootStackParamList, 'Detail'>
>

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>

export interface DetailScreenProps {
	navigation: DetailScreenNavigationProp
	route: DetailScreenRouteProp
	goals: GoalType[]
	setGoals: React.Dispatch<React.SetStateAction<GoalType[]>>
}
