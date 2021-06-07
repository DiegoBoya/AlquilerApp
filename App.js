import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auto from './Components/Auto';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
//import Barrita from './Barrita';
import {AuthContext} from './Components/Context';
import portada from './assets/portada.png';
import * as ImagePicker from 'expo-image-picker';
import Registro from './screens/registro';
import Login from './screens/login';
import Autos from './screens/autos';
import Home from './screens/home';
import Favoritos from './screens/favoritos';


export default function App() {

  const Stack = createStackNavigator();
  const [isLoading , setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  
  const authContext = useMemo(()=>({

    login: (username, password)=>{
      // const requestOptions = {
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: '*/*'
      //   },
      //   body: {username: username, password: password}
      // };
      // console.log(requestOptions);
      // (fetch('http://localhost:3000/api/users/SignIn', requestOptions)
      // .then(response => response.json())
      // .then(response => console.log('response' , response))
      // .then(isBoom => console.log(isBoom))
      // .then(data =>  setUserToken('as')));
      console.log(username, '+',  password, '+')
      setUserToken('token');
      setIsLoading(false);
    },
    registro: ()=>{
      setUserToken('token');
      setIsLoading(false);
    },
    desconectar: ()=>{
      setUserToken(null);
      setIsLoading(false);
    }

  }));
  
  useEffect(() =>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  }, []);

  if( isLoading ){
    return(
      <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size='large'/>
      </View>
    );}

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {/* En "initialRouteName={}" podes poner la página a la que se vuelve con el "back" básicamente. */}
      {userToken == null ?( 
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Registro" component={Registro}/>
      </Stack.Navigator>
      ):(
        <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Autos" component={Autos}/>
        <Stack.Screen name="Favoritos" component={Favoritos}/>
      </Stack.Navigator>
      )
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
  // const [autos, setAutos] = useState([]);
  // //const [filtro, setFiltro] = useState("");
  

  // useEffect(() => {
  //   buscarAutos();
  // }, []);



  // /*  const ingresarFiltro = (event) => {
  //     setFiltro(event.target.value);
  //   }
  // */
  // function buscarAutos() {
  //   const aut = fetch('http://localhost:3000/api/autos');
  //   //'/api/estacionamientos'
  //   return aut
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log('la busqueda' + json);
  //       setAutos(json);
  //     })
  //     .catch(error => console.log('Ocurrio un error' + error));
  // }


  // let opeImagePickerAsync = async () => {
  //   //pide permisos al usario para iniciar la visualizacion de la galeria. 
  //   // si el usuario acepta, esto retorna true, sino , false
  //   let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  //   if(permissionResult.granted === false){
  //     return alert('los permisos son requeridos');
  //   }

  //   const pickRessult = await ImagePicker.launchImageLibraryAsync()
    

  //   if(permissionResult.granted === true){
  //     return ;
  //   }
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  foto: {
    width: 350,
    height: 200
  },

  title: { fontSize: 30 },

  touchable: {
    fontSize: 12,
    backgroundColor: 'black',
    font: 'red',
    margin: 10,
    padding: 5
  },

  buttonText: {
    color: '#fff'
  }
});





