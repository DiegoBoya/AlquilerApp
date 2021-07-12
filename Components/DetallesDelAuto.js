import 'react-native-gesture-handler';
import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert, CheckBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from './Context';
import AsyncStorage from '@react-native-community/async-storage';


const DetallesDelAuto = ({ navigation, auto}) => {
    const Stack = createStackNavigator();
    const { devolverUsuario } = useContext(AuthContext);
   // const [checkBoxState, setCheckBoxState] = useState(false) ;
    const user = devolverUsuario();

    async function alquilarAuto() {
    const token = await AsyncStorage.getItem('token');
    console.log("el usuario es" + user._id);
    const requestOptions = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
           Accept: '*',
          Authorization: token},
      body: JSON.stringify({auto: auto.id})
    };
    console.log(auto._id);
    console.log(" el auto " + auto.id )
    try{
    (fetch(`http://localhost:3000/api/users/alquilarAuto/${user._id}`, requestOptions)
    .then(res => res.json())
    .then(json => alert(json)));
    //console.log(user.token);
    }catch(error){console.log(error.message);}
  }



    return (
        <View>
            
            <Text style={styles.title}> Revise los datos antes de alquilar: </Text>
      
            <Text style={styles.datos}> DATOS DE USUARIO: </Text>
            <Text style={styles.subtitle}> {"Nombre: " + user.firstName} </Text>
            <Text style={styles.subtitle}> {"Apellido: " + user.lastName} </Text>
            <Text style={styles.subtitle}> {"DNI: " + user.document} </Text>
            <Text style={styles.subtitle}> {"Mail: " + user.mail} </Text>
            <Text style={styles.subtitle}> {"UserName: " + user.username} </Text>

            <Text style={styles.datos}> DATOS DEL AUTO: </Text>
            <Text style={styles.subtitle}> {"Marca: " + auto.marca} </Text>
            <Text style={styles.subtitle}> {"Modelo: " + auto.modelo} </Text>
            <Text style={styles.subtitle}> {"Año: " + auto.año} </Text>
            

            <View style={styles.container}>

            <Text style={styles.enviar} onPress={()=>{
                alquilarAuto();navigation.navigate('ScreenProfile')
                }} 
                title="Alquilar Ahora!"> Alquilar Ahora </Text>
            </View>
            
           
            

        </View >
    );
};


const styles = StyleSheet.create({
    container: {
      alignContent: 'center',
      alignItems: 'center'
    },
    foto: {
      width: 350,
      height: 200,
      alignItems: 'center',
      alignContent: 'center',
      marginTop: 25
    },
    column:{
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      alignItems: 'center',
      alignContent: 'center'
    },
    title: { 
      fontSize: 20,
      color: 'darkslategrey',
      margin: 10
    },
    datos: {
        fontSize: 17,
        color: 'darkslategrey',
        margin: 10,
        fontWeight: 'bold'
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
      marginBottom: 10,
      fontWeight: 'bold'
    },
    subtitle: { 
      fontSize: 14,
      color: 'darkslategrey', 
      alignContent: 'center',
      alignItems: 'center',
      margintop: 7,
      marginBottom: 7,
      marginLeft: 10
  
    },
  })

export default DetallesDelAuto;

