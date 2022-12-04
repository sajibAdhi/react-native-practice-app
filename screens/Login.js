import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CustomInputField from '../components/CustomInputField';

const Login = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.header}>- LOGIN -</Text>
      <CustomInputField placeholder="User Name" color="dsadsad"></CustomInputField>
      <TextInput style={styles.textInput} placeholder="Password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
  },
  textInput: {
    height: 40,
    backgroundColor: '#f2f2f2',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    height: 40,
    backgroundColor: '#f2f2f2',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Login;
