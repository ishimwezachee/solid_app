import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from '../screens/welcomeScreen';
import userTypeScreen from '../screens/userTypeScreen';
import PatientPersonalScreen from '../screens/patient/patient_personl_screen';
import PatientAddressScreen from '../screens/patient/patient_address_screen';
import PatientDietScreen from '../screens/patient/patient_diet_screen';
import CareGiverScreen from '../screens/caregiver/careGiverScreen';
import HospitalScreen from '../screens/hospital/hospitalInfo';

const MainNavigator = createStackNavigator({
	welcome: {
		screen: WelcomeScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	userType: {
		screen: userTypeScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	patientInfo: {
		screen: PatientPersonalScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	personlAdress: {
		screen: PatientAddressScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	personalDiet: {
		screen: PatientDietScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	careGiver: {
		screen: CareGiverScreen,
		navigationOptions: {
			headerShown: null
		}
	},
	Hospital: {
		screen: HospitalScreen,
		navigationOptions: {
			headerShown: null
		}
	}
});

export default createAppContainer(MainNavigator);
