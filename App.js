import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import WelcomeScreen from './APP/screens/welcomeScreen';

const App = () => {
	return (
		<View style={styles.container}>
			<WelcomeScreen />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {}
});

export default App;
