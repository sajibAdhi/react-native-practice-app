import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

const Login = () => {
    const [userName, setUserName] = useState(''); 
    const [password, setPassword] = useState(''); 

    return(
        <View style={{padding: 40}}>

            {/* User Name Section */}
            <TextInput
                style={styles.input}
                placeholder="User Name"
                onChangeText={newText => setUserName(newText)}
            />
            <Text>{ userName }</Text>

            {/* Password Section */}
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={newText => setPassword(newText)}
            />
            <Text>{ password }</Text>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderBottomWidth : 1.0
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#000",
    },
    loginText: {
        color: '#fff'
    }
});

export default Login;