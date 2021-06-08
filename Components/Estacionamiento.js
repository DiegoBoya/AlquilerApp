import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import Favorito from './Favorito';


const Estacionamiento = ({ name }) => {
    return (
        <View style={styles.borde}>
            <TouchableOpacity
                onPress={() => {
                    alert('ingresando al estacionamiento')
                    console.log("ingresando al estacionamiento")
                }}
            >
                <Image
                    source={{ uri: 'https://picsum.photos/200/200' }}
                    style={styles.foto}
                />
            </TouchableOpacity>

            <Text style={styles.title}> {name} </Text>
            <Text> </Text>



            <Favorito />

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

    borde: {
        borderWidth: 2,
        borderRadius: 30,

    },

})

export default Estacionamiento;