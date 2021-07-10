import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import Favorito from './Favorito';
import { createStackNavigator } from '@react-navigation/stack';


const Estacionamiento = ({ navigation, id, name, image, location, description }) => {
    const Stack = createStackNavigator();
    return (
        <View style={styles.borde}>
            <TouchableOpacity
                onPress={() => {
                    console.log("ingresando al estacionamiento")
                }}
            >
                <Image
                    source={image}
                    style={styles.foto}
                />
            </TouchableOpacity>

            <Text style={styles.title}> {name} </Text>
            <Text style={styles.subtitle}> {location} </Text>
            <Text style={styles.subtitle}> {description} </Text>
            <Text> </Text>
            <Button  onPress={()=>{navigation.navigate('ScreenAutos', {_id: id})}} title="Autos"/>

        </View >
    );
};


const styles = StyleSheet.create({
    foto: {
        width: 350,
        height: 200,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 25

    },
    title: { fontSize: 30 },
    subtitle: { fontSize: 10 },

    borde: {
        borderWidth: 2,
        borderRadius: 30,

    },

})

export default Estacionamiento;