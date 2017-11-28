// Import libraries for making a registerComponent
import React from 'react';
import { Text, View } from 'react-native';

// Make a registerComponent
const Header = () => {
  const { textStyle } = styles;

  return (
    <View>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8'
  },
  textStyle: {
    fontSize: 100
  }
};

// Make the component available to other parts of the app
export default Header;
