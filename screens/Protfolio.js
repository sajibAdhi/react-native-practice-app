// Protfoilio with name , image, institution, and description
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Protfolio = ({ name, image, institution, description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.institution}>{institution}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="email" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="linkedin-square" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="github" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome5 name="facebook-square" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Protfolio;
