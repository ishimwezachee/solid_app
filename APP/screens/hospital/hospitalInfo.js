import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Button from '../../components/Button/button';
import Input from '../../components/Input/input';
import OptionInput from '../../components/OptionInput/optionInput';
import Card from '../../components/Card/card';
import colors from '../../constants/color';

const HospitalInfoScreen = ({ navigation }) => {
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
				<Text style={styles.personal}>Hospital information</Text>
			</View>
			<Card>
				<View style={styles.Inputs}>
					<OptionInput
						placeholder={{ label: 'Hospital Name', value: null }}
						itemSelect={[
							{ label:'CHUK Refral Hospital' ,value: 'CHUK' },
							{ label: 'Kibagabaga hosptial', value: 'Kibagabaga hosptial' },
							{ label: 'Masaka hospitla', value: 'hockey' },
							{ label: 'Masaka hospitla', value: 'hockey' },
							{ label: 'Masaka hospitla', value: 'hockey' },
							{ label: 'Muhima hospitla', value: 'hockey' },
							{ label: 'Nyarugenge hospitla', value: 'hockey' }

						]}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>

					<OptionInput
						placeholder={{ label: 'Clinical services', value: null }}
						itemSelect={[
							{ label: 'Covid-19 ward', value: 'football' },
							{ label: 'Dentist', value: 'baseball' },
							{ label: 'Pediatric', value: 'hockey' },
							{ label: 'Neoratology', value: 'hockey' },
						]}
						placeholderTextColor={colors.red}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>
					<Input
						placeholder="Phone"
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>

					<OptionInput
						placeholder={{ label: 'Room number', value: null }}
						itemSelect={[
							{ label: '1', value: 'football' },
							{ label: '2', value: 'baseball' },
							{ label: '3', value: 'hockey' },
							{ label: '4', value: 'hockey' },
							{ label: '5', value: 'hockey' },
							{ label: '6', value: 'hockey' },
						]}
						placeholderTextColor={colors.red}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>

					<OptionInput
						placeholder={{ label: 'Bed number', value: null }}
						itemSelect={[
							{ label: 'Football', value: 'football' },
							{ label: 'Baseball', value: 'baseball' },
							{ label: 'Hockey', value: 'hockey' }
						]}
						placeholderTextColor={colors.red}
						InputStyles={styles.InputStyles}
						ViewStyle={styles.ViewStyle}
						TextStyle={styles.TextStyle}
					/>
				</View>

				<View style={styles.buttonView}>
					<Button
						text="Send"
						buttonStyle={styles.buttonStyle}
						textStyle={styles.textStyle}
						onPress={() => navigation.navigate('userType')}
					/>
				</View>
			</Card>
		</View>
	);
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

export default HospitalInfoScreen;
