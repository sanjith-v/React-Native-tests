import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Icon name='rowing' />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  
  sectionTitle: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#55BCF6',
    paddingVertical: 10,
    
  },
  body: {
    paddingHorizontal: 20,
  },
  form: {
    textAlign: 'left',
    fontSize: 18,
    marginTop: 30,
    paddingBottom:5,

  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  submit: {
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#55BCF6',
    marginTop: 30,
    borderRadius: 5,  
 
 },
});

export default App;