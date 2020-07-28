import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../constants/color';

const WelcomingScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.iconView}>
				{/* <Icon name="angle-right" style={styles.icon} onPress={() => console.log('button clicked')} /> */}
			</View>
			<View style={styles.ImageContainer}>
				<Image
					style={{ width: 300, height: 300 }}
					source={require('../assets/images/SolidAfricaLogo.png')}
					resizeMode="contain"
				/>
			</View>
		</View>
	);
};

WelcomingScreen.navigationOptions = (navigationData) => {
	return {
		headerTitle: () => (
			<Icon
				name="angle-right"
				style={{ fontSize: 30, color: colors.red, marginLeft: '90%' }}
				onPress={() => navigationData.navigation.navigate('userType')}
			/>
		),
		headerStyle: {
			backgroundColor: 'black'
		}
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
