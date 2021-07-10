import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from './Context';
import AsyncStorage from '@react-native-community/async-storage';
import { useState, useEffect } from 'react';


const AutoAlquilado = ({ navigation, user }) => {
    const Stack = createStackNavigator();
    const [isLoading , setIsLoading] = useState(true);
    const [usuario, setUsuario] = useState(user);
    const [flag, setFlag] = useState(false);
    const [auto, setAuto] = useState();

    
    async function getUsuario() {
      const token = await AsyncStorage.getItem('token');
      const requestOptions = {
        method: "GET",
        headers: {Authorization: token} 
      }
      try {
        const est = fetch(`http://localhost:3000/api/users/${user._id}`, requestOptions);
        console.log(est)
        return est
        .then(res => res.json())
        .then(json => {
          console.log(json.est);
          setUsuario(json);
        })
        .catch(error => console.log('Ocurrio el error: ' + error)); 
      }catch(error){console.log(error.message);} 
    }

    async function getAuto() {
      const token = await AsyncStorage.getItem('token');
      const requestOptions = {
        method: "GET",
        headers: {Authorization: token} 
      }
      try {
        const est = fetch(`http://localhost:3000/api/autos/${usuario.auto[0]}`, requestOptions);
        console.log(est)
        return est
        .then(res => res.json())
        .then(json => {
          console.log(json.est);
          setAuto(json);
        })
        .catch(error => console.log('Ocurrio el error: ' + error)); 
      }catch(error){console.log(error.message);} 
    }

    async function terminarAlquiler() {
    const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
           Accept: '*',
          Authorization: token},
      body: JSON.stringify({auto: usuario.auto[0]})
    };
    console.log(JSON.stringify({auto: usuario.auto[0]}));
    try{
    (fetch(`http://localhost:3000/api/users/terminarAlquiler/${usuario._id}`, requestOptions)
    .then(res => res.json())
    .then(json => alert(json)));
    console.log(token)
    //console.log(user.token);
    }catch(error){console.log(error.message);}
  }

  useEffect(() =>{
    getUsuario()
    getAuto()
    setTimeout(()=>{
      setIsLoading(false);
      ;
    },1000);
  }, user);

  if( isLoading ){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Text>Loading...</Text>
      </View>
    );}


    return (

        
        <View style={styles.entorno}>

        {
          (usuario.auto.length == 0) ?
          (<Text style={styles.title}> No tiene Auto Alquilado </Text>):
          ( <View>
            {console.log(auto)}
            <View style={styles.entorno}>
            <Image
            source={auto.imagen}
            style={styles.foto}
          />
            </View>
            <Text style={styles.title}> {auto.modelo} </Text>
            <Text style={styles.subtitle}> {auto.marca + " | " + auto.año} </Text>
            <Button onPress={()=>{
                terminarAlquiler();
                navigation.navigate('ScreenHome')
                }} title="Terminar Alquiler"/>
          </View>)
        }
            
           

        </View >
    );
};


const styles = StyleSheet.create({
    
  entorno:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  foto: {
    width: 350,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
    
  },
  title: { fontSize: 30 },

  subtitle: { fontSize: 24 },

  borde: {
    borderWidth: 2,
    borderRadius: 30,

  },

})

export default AutoAlquilado;


/*<Image
            source={auto.imagen}
            style={styles.foto}
          /> */