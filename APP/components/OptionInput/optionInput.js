import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({ ViewStyle, InputStyles, placeholder, itemSelect }) => {
	return (
		<View style={ViewStyle}>
			<View style={InputStyles}>
				<RNPickerSelect
					style={{ color: 'red' }}
					placeholder={placeholder}
					onValueChange={(value) => console.log(value)}
					items={itemSelect}
				/>
			</View>
		</View>
	);
};

export default Dropdown;
