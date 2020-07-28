import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Button from '../../components/Button/button';
import Input from '../../components/Input/input';
import OptionInput from '../../components/OptionInput/optionInput';
import Card from '../../components/Card/card';
import colors from '../../constants/color';

const Patient_Diet_screen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={{ width: 80, height: 80 }}
					source={require('../../assets/images/SolidAfricaLogo.png')}
					resizeMode="contain"
				/>
			</View>
			<View>
				<Text style={styles.personal}>Diet information</Text>
			</View>
			<Card>
				<View style={styles.Inputs}>
					<OptionInput
						placeholder={{ label: 'Regular Diet', value: null }}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>

					<OptionInput
						placeholder={{ label: 'Medical Diet', value: null }}
						placeholderTextColor={colors.red}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>
					<OptionInput
						placeholder={{ label: 'Religious diet', value: null }}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>

					<OptionInput
						placeholder={{ label: 'vegeterian', value: null }}
						placeholderTextColor={colors.red}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>
				</View>

				<View style={styles.buttonView}>
					<Button
						text="send"
						buttonStyle={styles.buttonStyle}
						textStyle={styles.textStyle}
						onPress={() => navigation.replace('userType')}
					/>
				</View>
			</Card>
		</View>
	);
};

Patient_Diet_screen.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	container: {},
	buttonText: {},
	logoContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerElements: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: colors.headerColor,
		paddingVertical: 15
	},
	buttonOne: {
		paddingVertical: 5,
		paddingHorizontal: 7,
		backgroundColor: colors.white
	},
	textStyleone: {
		color: colors.headerColor
	},
	text: {
		fontSize: 20,
		color: colors.white,
		marginTop: 15
	},
	InputStyles: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		width: '80%'
	},
	ViewStyle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 5
	},
	TextStyle: {
		// marginTop: 15
	},
	personal: {
		fontWeight: 'bold',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginHorizontal: 30
	},
	buttonStyle: {
		marginTop: 6
	},
	textStyle: {
		paddingHorizontal: 30
	}
});

export default Patient_Diet_screen;
