import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {AuthContext} from './Context';
import AsyncStorage from '@react-native-community/async-storage';


const AutoAlquilado = ({ navigation, user }) => {
    const Stack = createStackNavigator();

    async function terminarAlquiler() {
    const token = await AsyncStorage.getItem('token');
    const requestOptions = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
           Accept: '*',
          Authorization: token},
      body: JSON.stringify({auto: user.auto[0]})
    };
    console.log(JSON.stringify({auto: user.auto[0]}));
    try{
    (fetch(`http://localhost:3000/api/users/terminarAlquiler/${user._id}`, requestOptions)
    .then(res => res.json())
    .then(json => alert(json)));
    console.log(token)
    //console.log(user.token);
    }catch(error){console.log(error.message);}
  }

    return (
        <View>
            
            <Text style={styles.title}> {user.firstName} </Text>
            <Text style={styles.subtitle}> {user.lastName} </Text>
            <Text style={styles.subtitle}> {user.auto[0]} </Text>
            <Text> </Text>
            {console.log(user._id)}
            <Button onPress={()=>{
                terminarAlquiler();
                navigation.navigate('ScreenHome')
                }} title="Terminar Alquiler"/>

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