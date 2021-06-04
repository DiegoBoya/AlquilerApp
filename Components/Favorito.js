import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert, YellowBox } from 'react-native';
import { useState, useEffect } from 'react';
import React from 'react';

const Favorito = () => {
    const [visible, setVisible] = useState(true);
    //el valor inicialdeberia ser false.. despues del setVisible hay que capturar con un then??

    const pressFav = () => {
        setVisible(!visible);
        if (visible === true) {
            //  alert('agregar a favoritos')
            console.log("url para agregar en el array de favoritos")
        } else {
            //alert('sacar de favoritos')
            console.log("url para sacar del array de favoritos")
        }
        console.log(visible)
        //no me funciona este if para cambiar el color del boton
        if (visible) {
           styles.colorTrue
        } else {
            styles.colorFalse

        }
    }

    useEffect(() => {
        console.log("cambio");
    }), [visible];

    return (
        <View  style={
            styles.favoriteButton}>
            <TouchableOpacity
                style={
                    //styles.favoriteButton,
                    styles.borde
                    // visible ? styles.colorTrue : styles.colorFalse
                }
                onPress={pressFav}
            >
                <Text> XD </Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    borde: {
        borderWidth: 2,
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center'

    },

    favoriteButton: {
        color: 'red',
        marginHorizontal: 20,
        //padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'Yellow',
        width: 35,
        height: 35,
        alignContent: 'center',
        alignItems: 'center'
        


    },
    colorTrue: {
        backgroundColor: 'blue'
    },

    colorFalse: {
        backgroundColor: 'red'
    }

})


export default Favorito;