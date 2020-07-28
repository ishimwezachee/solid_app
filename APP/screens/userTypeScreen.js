import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../components/Button/button';
import colors from '../constants/color';

const UserTypeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.patient}>
				<Button
					text="Patient"
					onPress={() => navigation.navigate('patientInfo')}
					buttonStyle={styles.buttonStyle}
					textStyle={styles.textStyle}
				/>
			</View>
			<View style={styles.nurse}>
				<Button
					text="Hospital"
					onPress={() => navigation.navigate('hospital')}
					buttonStyle={styles.buttonStyle}
					textStyle={styles.textStyle}
				/>
			</View>
			<View style={styles.caregiver}>
				<Button
					text="care giver"
					onPress={() => navigation.navigate('careGiver')}
					buttonStyle={styles.buttonStyle}
					textStyle={styles.textStyle}
				/>
			</View>
		</View>
	);
};

UserTypeScreen.navigationOptions = (navigationData) => {
	return {
		header: () => null
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black
	},
	buttonStyle: {
		marginVertical: 20,
		marginHorizontal: 25,
		borderRadius: 40
	},
	textStyle: {
		fontSize: 20,
		paddingVertical: 20,
		marginHorizontal: 10
	},
	patient: {
		marginTop: 100
	}
});

export default UserTypeScreen;
