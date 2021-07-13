import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert, YellowBox } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from './Context';

const Favorito = ({idAuto , visible}) => {
    const {devolverUsuario} = useContext(AuthContext);
    const user = devolverUsuario();
    const [estadoRes, setEstadoRes] = useState();
    const [boton, setBoton] = useState(visible);

    const pressFav =  async () => {
        let flag = false;
        const token = await AsyncStorage.getItem('token');
        const requestOptions = {
            method: 'post',
            headers: {
               'Content-Type': 'application/json',
                Accept: '*',
                Authorization: token
            },
            body: JSON.stringify({autoID: idAuto})
        };
        if (boton == true) {
            try{
                await fetch(`http://localhost:3000/api/users/addToFavorites/${user._id}` , requestOptions)
                .then(res => res.json())
                .then(json => {setEstadoRes(json.message); console.log(json)})
                alert('Success');
            }catch(error){
                flag = true;
                console.log(error.message); 
                alert('Failed');
            }
        } else {
            try{
                await fetch(`http://localhost:3000/api/users/removeFromFavorites/${user._id}` , requestOptions)
                .then(res => res.json())
                .then(json => {setEstadoRes(json.message); console.log(json)})
                alert('Success');
            }catch(error){
                flag = true;
                console.log(error.message);
                alert('Failed');
            }
        }
        flag ? console.log('siga') : setBoton(!boton);
    }

    useEffect(() => {
        console.log('valor visible en Favoritos: ' + visible)
    }, [])

    return (
        <View  style={styles.favoriteButton}>
            {boton?
                <Button
                    onPress={pressFav}
                    styles={styles.colorTrue}
                    title="Agregar"/>
                :
                <Button onPress={pressFav} styles={styles.colorFalse} title="Remover"/>
                }
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
        color: '#141216'
    },

    colorFalse: {
        color: '#ff6969'
    }

})


export default Favorito;