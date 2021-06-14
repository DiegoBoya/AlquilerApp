import React , {useContext, useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import {AuthContext} from './Context';



const Login = () => {
  const {login}  = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Login!</Text>
      <TextInput style={styles.text} placeholder='username' onChangeText={username => setUsername(username)} defaultValue={username}/>
      <TextInput style={styles.text} placeholder='password' secureTextEntry={true} onChangeText={password => setPassword(password)} defaultValue={password}/>
      <Text style={styles.enviar} onPress={()=> {login(username, password)}} title='Send'> SEND </Text>
      
    </View>
  );
};


const styles = StyleSheet.create({
  /*foto: {
    width: 150,
    height: 150,
    alignItems: 'center',
    alignContent: 'center'

  },
  title: { 
    fontSize: 30 
  },*/
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
/*  borde: {
    borderWidth: 2,
    borderRadius: 30,
    
  },

  favoriteButton: {
    backgroundColor: 'pink',
    color: 'white',
    marginHorizontal: 200,
    //padding: 10,
    margin : 10,
    borderRadius: 25
  }*/

})

export default Login;