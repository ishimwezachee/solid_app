import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/color';

const Button = ({ text, onPress, buttonStyle, textStyle }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[ styles.btnContainerStyle, buttonStyle ]}>
				<Text style={[ styles.btnTextStyle, textStyle ]}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btnContainerStyle: {
		backgroundColor: colors.red,
		paddingVertical: 10,
		borderRadius: 5,
		marginHorizontal: 6,
		paddingHorizontal: 4
	},
	btnTextStyle: {
		color: '#ffffff',
		paddingHorizontal: 5,
		fontSize: 14,
		textAlign: 'center',
		fontFamily: 'Quicksand-Medium'
	}
});

export default Button;
