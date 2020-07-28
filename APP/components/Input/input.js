import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input = ({ text, value, TextStyle, InputStyles, ViewStyle, placeholder }) => {
	return (
		<View style={ViewStyle}>
			{/* <Text style={TextStyle}>{text}</Text> */}
			<TextInput style={InputStyles} placeholder={placeholder} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default Input;
