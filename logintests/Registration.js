import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image} from 'react-native';

export default function App() {
  const [email,setEmail]=useState('');
  const [name,setName]=useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionTitle}> Welcome to registration </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.form}> Full Name: </Text>
        <TextInput style={styles.input}  onChangeText={(name) => setName(name)} placeholder={'Enter your name'}/>
        <Text style={styles.form} > Email address: </Text>
        <TextInput style={styles.input} onChangeText={(email) => setEmail(email)} placeholder={'Enter your email'}/>
        <TouchableOpacity >
        <Text style={styles.submit}>Click to submit</Text>
        </TouchableOpacity>
      </View>
    </View>
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