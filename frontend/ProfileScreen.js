import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { GlobalStyles } from './styles/GlobalStyles';

export default function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <ScrollView contentContainerStyle={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>My Profile</Text>

      <Image
        source={require('../assets/home-bg.jpeg')}
        style={{ width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginBottom: 20 }}
      />

      <Text style={GlobalStyles.label}>Name:</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Enter your name"
        keyboardType="default"
        value={name}
        onChangeText={setName}
      />

      <Text style={GlobalStyles.label}>Age:</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        inputMode="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Live Preview: {name ? name : '...'} , Age: {age ? age : '...'}
      </Text>

      <TouchableOpacity
        style={GlobalStyles.button}
        onPress={() => props.navigation.navigate('Home')}
        // onPress={() => (props.navigation ? props.navigation.goBack() : props.goBack())}
      >
        <Text style={GlobalStyles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}