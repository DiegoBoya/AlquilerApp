import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import Favorito from './Favorito';
import { createStackNavigator } from '@react-navigation/stack';


const Estacionamiento = ({ navigation, id, name, image, location, description, cantAutos }) => {
    const Stack = createStackNavigator();
    return (
        <View style={styles.borde}>
            <View style={styles.container}>
                <Image
                    source={image}
                    style={styles.foto}
                />
            </View>

            <Text style={styles.title}> {name} </Text>
            <Text style={styles.subtitle}> {location + " | Cantidad de Autos: " + cantAutos} </Text>
            <Text style={styles.text}> {description} </Text>
            <View style={styles.container}> 
                <Text style={styles.enviar} onPress={()=>{navigation.navigate('ScreenAutos', {_id: id})}} title='Autos'> Autos </Text>
            </View>
            
            

        </View >
    );
};


const styles = StyleSheet.create({
    foto: {
        width: 300,
        height: 200,
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10

    },
    title: { 
        fontSize: 30,
        color: "white"
    },
    subtitle: { 
        fontSize: 20,
        margin: 5,
        color: "white"
    },
    text: { 
        fontSize: 10,
        margin: 5,
        color: "white"
    },
    borde: {
        borderWidth: 1,
        borderRadius: 15,
    },
    enviar: {
        width: 300,
        height: 25,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'dodgerblue',
        borderColor: "dodgerblue",
        color: 'white',
        borderWidth: 2,
        borderRadius: 30,
        marginTop: 5,
        fontWeight: 'bold'
      },
      container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'darkslategrey',
        justifyContent: 'center',
        marginHorizontal: 24,
      },

})

export default Estacionamiento;