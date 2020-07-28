import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IconTesting = () => {
	return (
		<View>
			<Icon name="angle-right" style={{ color: 'red', fontSize: 30 }} />
			<Text>Icons</Text>
		</View>
	);
};

export default IconTesting;
