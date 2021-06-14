import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TextInput, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';

//Hay que ver como enviar los datos

const Registro = () => {
      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [password, setPassword] = useState('');
      const [mail, setMail] = useState('');
      const [username, setUsername] = useState('');
          
      return (
            <View style={styles.container}>
                <Text style={styles.subtitle}>Register Now!</Text>
                <TextInput style={styles.text} placeholder='firstName' onChangeText={firstName => setFirstName(firstName)} defaultValue={firstName}/>
                <TextInput style={styles.text} placeholder='lastName' onChangeText={lastName => setLastName(lastName)} defaultValue={lastName}/>
                <TextInput style={styles.text} placeholder='password' secureTextEntry={true} onChangeText={password => setPassword(password)} defaultValue={password}/>
                <TextInput style={styles.text} placeholder='mail' onChangeText={mail => setMail(mail)} defaultValue={mail}/>
                <TextInput style={styles.text} placeholder='username' onChangeText={username => setUsername(username)} defaultValue={username}/>
                <Text style={styles.enviar} onPress={()=> {Registro(username, password)}} title='Send'> SEND </Text>
                
              </View>
            );
          };

          const styles = StyleSheet.create({
            container: {
              flex: 1,
              alignItems: 'center',
              backgroundColor: 'darkslategrey',
              justifyContent: 'center',
              marginHorizontal: 16,
            },
            subtitle: { 
              fontSize: 24,
              alignItems: 'center',
              alignContent: 'center',
              color:'white',
              fontWeight: 'bold'
            },
            text : {
              width: 200,
              height: 50,
              alignItems: 'center',
              textAlign: 'center',
              margin: 10,
              backgroundColor: 'darkslategrey',
              borderColor: "darksalmon",
              color: 'white',
              borderWidth: 5,
              borderRadius: 30,
            },
            boton: {
              width: 200,
              color: 'red',
              margin: 10,
              alignItems: 'center',
              textAlign: 'center',
            },
            enviar: {
              width: 100,
              height: 25,
              margin: 10,
              alignItems: 'center',
              textAlign: 'center',
              backgroundColor: 'dodgerblue',
              borderColor: "dodgerblue",
              color: 'white',
              borderWidth: 2.5,
              borderRadius: 15,
              fontWeight: 'bold'
            },
          })
          
          export default Registro;