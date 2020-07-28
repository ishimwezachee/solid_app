import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Separator = () => {
	return (
		<View>
			<Text>hello there</Text>
			{/* <View style={styles.separator} />; */}
		</View>
	);
};

const styles = StyleSheet.create({
	separator: {
		borderBottomColor: 'black',
		borderBottomWidth: 1
	}
});

export default Separator;
