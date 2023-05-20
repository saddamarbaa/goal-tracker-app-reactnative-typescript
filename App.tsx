import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './navigation'
import { GoalType } from './types'

export default function App() {
	const [goals, setGoals] = React.useState<GoalType[]>([])
	return (
		<SafeAreaProvider>
			<Navigation goals={goals} setGoals={setGoals} />
		</SafeAreaProvider>
	)
}
