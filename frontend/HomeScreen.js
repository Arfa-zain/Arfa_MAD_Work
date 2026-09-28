import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from './styles/GlobalStyles';

export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={{ uri: 'https://picsum.photos/800/1200' }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={GlobalStyles.overlay}>
        <Text style={GlobalStyles.titleText}>Student App</Text>

        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => props.navigation.navigate('Profile')}
        >
          <Text style={GlobalStyles.buttonText}>Go to Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => props.navigation.navigate('Settings')}
        >
          <Text style={GlobalStyles.buttonText}>Go to Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={GlobalStyles.button}
          onPress={() => props.navigation.navigate('Contact')}
        >
          <Text style={GlobalStyles.buttonText}>Go to Contact</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}