//Custom Input Field
import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';

const CustomInputField = ({ placeholder }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder={placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
});

export default CustomInputField;