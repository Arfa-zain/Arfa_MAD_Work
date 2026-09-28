import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from './styles/GlobalStyles';

export default function ContactScreen(props) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email first.');
    } else {
      Alert.alert('Submitted', `Thank you! We received: ${email}`);
    }
  };

  return (
    <View style={GlobalStyles.overlay}>
      <Text style={GlobalStyles.titleText}>Contact Us</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
        <Ionicons name="mail-outline" size={22} color="#333" style={{ marginRight: 8 }} />
        <TextInput
          style={[GlobalStyles.input, { flex: 1 }]}
          placeholder="Enter your email"
          keyboardType="email-address"
          inputMode="email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={[GlobalStyles.button, { marginTop: 15 }]} onPress={handleSubmit}>
        <Text style={GlobalStyles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyles.button, { backgroundColor: '#666' }]}
        onPress={() => props.navigation.navigate('Home')}
        // onPress={() => (props.navigation ? props.navigation.goBack() : props.goBack())}
      >
        <Text style={GlobalStyles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}