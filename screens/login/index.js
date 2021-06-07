import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import {AuthContext} from '../../Components/Context';


export default function Login({navigation}) {
    const {login}  = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
          
      <View>
        <Text>Login?</Text>
        <TextInput placeholder='username' onChangeText={username => setUsername(username)} defaultValue={username}/>
        <TextInput placeholder='password' onChangeText={password => setPassword(password)} defaultValue={password}/>
        <Button onPress={()=> {login(username, password)}} title='login'/>
        <Text>Registro?</Text>
        <Button onPress={() => navigation.navigate('Registro')} title="Registro"></Button>
    </View>
        
  );}