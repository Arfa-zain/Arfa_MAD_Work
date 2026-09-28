import React, { useState } from 'react';
import { StatusBar, Switch, Text, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from './styles/GlobalStyles';

export default function SettingsScreen(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View
      style={[
        GlobalStyles.overlay,
        { backgroundColor: isDarkMode ? '#121212' : '#ffffff' },
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000' : '#fff'}
      />

      <Text style={[GlobalStyles.titleText, { color: isDarkMode ? '#fff' : '#222' }]}>
        Settings
      </Text>

      <Text style={{ color: isDarkMode ? '#ccc' : '#333', fontSize: 16, marginBottom: 10 }}>
        {isDarkMode ? 'Dark Mode ON 🌙' : 'Light Mode ON ☀️'}
      </Text>

      <Switch value={isDarkMode} onValueChange={(value) => setIsDarkMode(value)} />

      <TouchableOpacity
        style={[GlobalStyles.button, { marginTop: 30 }]}
        onPress={() => props.navigation.navigate('Home')}
        // onPress={() => (props.navigation ? props.navigation.goBack() : props.goBack())}
      >
        <Text style={GlobalStyles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}