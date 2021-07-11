import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert, YellowBox } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from './Context';
import { forEach } from 'async';

const Favorito = (idAuto) => {
    const [visible, setVisible] = useState(true);
    const {devolverUsuario} = useContext(AuthContext);
    const user = devolverUsuario();
    const [estadoRes, setEstadoRes] = useState();
    //el valor inicialdeberia ser false.. despues del setVisible hay que capturar con un then??

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
            body: JSON.stringify({autoID: idAuto.idAuto})
        };
        console.log('Auto: ' + (idAuto.idAuto));
        console.log('User: ' + JSON.stringify(user));
        if (visible == true) {
            try{
                await fetch(`http://localhost:3000/api/users/addToFavorites/${user._id}` , requestOptions)
                .then(res => res.json())
                .then(json => {setEstadoRes(json.message); console.log(json.message)})
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
                .then(json => {setEstadoRes(json.message); console.log(json.message)})
                alert('Success');
            }catch(error){
                flag = true;
                console.log(error.message);
                alert('Failed');
            }
        }
        status == 200 ? alert('Success') : console.log('fallo: ' + status);
        flag ? console.log('siga') : setVisible(!visible);
    }
    useEffect(() => {
        user.favoritos.forEach(fav => {
            console.log("id: " + fav._id);
            fav._id == idAuto.idAuto ? 
            setVisible(false) :
            setVisible(true)});
    }, [])

    return (
        <View  style={styles.favoriteButton}>
            {visible?
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