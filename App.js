import 'react-native-gesture-handler';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './frontend/HomeScreen';
import ProfileScreen from './frontend/ProfileScreen';
import SettingsScreen from './frontend/SettingsScreen';
import ContactScreen from './frontend/ContactScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs({ route }) {
  const initialTab = route.params?.screen || 'Home';

  return (
    <Tab.Navigator initialRouteName={initialTab}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeDrawer">
        <Drawer.Screen name="HomeDrawer" component={BottomTabs} initialParams={{ screen: 'Home' }} options={{ title: 'Home' }} />
        <Drawer.Screen name="ProfileDrawer" component={BottomTabs} initialParams={{ screen: 'Profile' }} options={{ title: 'Profile' }} />
        <Drawer.Screen name="SettingsDrawer" component={BottomTabs} initialParams={{ screen: 'Settings' }} options={{ title: 'Settings' }} />
        <Drawer.Screen name="ContactDrawer" component={BottomTabs} initialParams={{ screen: 'Contact' }} options={{ title: 'Contact' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}