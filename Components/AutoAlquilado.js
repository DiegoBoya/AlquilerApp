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

    const schema = {
      firstName: "",
      lastName: "",
      auto: [],
      password: "",
      mail: "",
      username: "",
      favoritos: []
  };
    
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

        
        <View>

        {
          (usuario.auto.length == 0) ?
          (<Text style={styles.title}> No tiene Auto Alquilado </Text>):
          ( <View>
            <Text style={styles.title}> {usuario.firstName} </Text>
            <Text style={styles.subtitle}> {usuario.lastName} </Text>
            <Text style={styles.subtitle}> {usuario.auto[0]} </Text>
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
    
    title: { fontSize: 30 },
    subtitle: { fontSize: 10 },

    borde: {
        borderWidth: 2,
        borderRadius: 30,

    },

})

export default AutoAlquilado;


/*login: async (username, password)=>{
       const requestOptions = {
         method: 'post',
         headers: {
           'Content-Type': 'application/json',
           Accept: '*',
          },
          body: JSON.stringify({username: username, password: password, rememberMe: false})
       };
       console.log('Username: ' + username + '. Password: ' + password);
        try{
        if(username == '' || password == ''){
          throw 'Error credenciales vacías';
        }
       await (fetch('http://localhost:3000/api/users/SignIn', requestOptions)
       .then(response => response.json())
       .then(json => AsyncStorage.setItem('token' , json.token)));
       
       await (fetch('http://localhost:3000/api/users/SignIn', requestOptions)
       .then(response => response.json()).then(json => setUser(json)));

      
       //setUser(AsyncStorage.getItem('usuario'));
       setUserToken(AsyncStorage.getItem('token'));
       setIsLoading(false); 
       }catch(error){ console.log('Error catcheado: ' + error.message); alert('Failed Credentials.')}

    }, */