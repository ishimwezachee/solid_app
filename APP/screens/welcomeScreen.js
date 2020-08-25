import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../constants/color';

const WelcomingScreen = ({ navigation }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate('userType')}>
			<View style={styles.iconView} />
			<View style={styles.ImageContainer}>
				<Image
					style={{ width: 300, height: 300 }}
					source={require('../assets/images/SolidAfricaLogo.png')}
					resizeMode="contain"
				/>
			</View>
		</TouchableOpacity>
	);
};

WelcomingScreen.navigationOptions = (navigationData) => {
	return {
		header: () => null
		// headerTitle: () => (
		// 	<AntDesign
		// 		name="rightcircle"
		// 		style={{ fontSize: 30, color: colors.red, marginLeft: '90%' }}
		// 		onPress={() => navigationData.navigation.navigate('userType')}
		// 	/>
		// ),
		// headerStyle: {
		// 	backgroundColor: 'black'
		// }
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black
	},
	ImageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100
	}
});

export default WelcomingScreen;
