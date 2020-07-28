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
		screen: WelcomeScreen
	},
	userType: {
		screen: userTypeScreen
	},
	patientInfo: {
		screen: PatientPersonalScreen
	},
	personlAdress: {
		screen: PatientAddressScreen
	},
	personalDiet: {
		screen: PatientDietScreen
	},
	careGiver: {
		screen: CareGiverScreen
	},
	hospital: {
		screen: HospitalScreen
	}
});

export default createAppContainer(MainNavigator);
