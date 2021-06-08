import React , {useContext, useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image, TextInput } from 'react-native';
import {AuthContext} from './Context';



const Login = () => {
  const {login}  = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.subtitle}>Login!</Text>
      <TextInput placeholder='username' onChangeText={username => setUsername(username)} defaultValue={username}/>
      <TextInput placeholder='password' secureTextEntry={true} onChangeText={password => setPassword(password)} defaultValue={password}/>
      <Button onPress={()=> {login(username, password)}} title='login'/>
    </View>
  );
};


const styles = StyleSheet.create({
  foto: {
    width: 150,
    height: 150,
    alignItems: 'center',
    alignContent: 'center'

  },
  title: { fontSize: 30 },

  subtitle: { fontSize: 24 , color:'red'},

  borde: {
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
  }

})

export default Login;