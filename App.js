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
import ScreenRegistro from './screens/registro';
import ScreenLogin from './screens/login';
import ScreenAutos from './screens/autos';
import ScreenHome from './screens/home';
import ScreenAutoAlquilado from './screens/autoAlquilado';
import ScreenDetallesDelAuto from './screens/detallesDelAuto';
import ScreenFavoritos from './screens/favoritos';
import AsyncStorage from '@react-native-community/async-storage';


export default function App() {
  const Stack = createStackNavigator();
  const [isLoading , setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState(null);
  
  const authContext = useMemo(()=>({
    login: async (username, password)=>{
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

    },
    registro: async (firstName, lastName, password, username, mail)=>{
      const requestOptions = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*',
         },
        body: JSON.stringify({firstName: firstName, lastName: lastName, password: password, username: username, mail: mail})
      };
      console.log('Username: ' + username + '. Password: ' + password);
       try{
       if(username == '' || password == ''){
        throw {message: 'mal regsitro'}
       }
      let retorno = await (fetch('http://localhost:3000/api/users/SignUp', requestOptions)
      .then(response => response.json()).then(json => alert(json)))
      setIsLoading(false);
      return true
      }catch(error){ console.log('Error catcheado: ' + error.message); alert('Failed Credentials.'); return false
    }
        
    },
    devolverUsuario: () => {
      let usuario =  user.usuario;
      return usuario;
    },
    updateUser: async (json) => {
      setUser(json);
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
        <Text>Loading...</Text>
      </View>
    );}

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer style={styles.container}>
      {/* En "initialRouteName={}" podes poner la página a la que se vuelve con el "back" básicamente. */}
      {userToken == null ?( 
      <Stack.Navigator initialRouteName={"ScreenLogin"}>
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ title: 'Inicio' }}/>
        <Stack.Screen name="ScreenRegistro" component={ScreenRegistro} options={{ title: 'Registro' }}/>
      </Stack.Navigator>
      ):(
        <Stack.Navigator initialRouteName={"ScreenHome"}>
        <Stack.Screen name="ScreenHome" component={ScreenHome} options={{ title: 'Home' }}/>
        <Stack.Screen name="ScreenAutos" component={ScreenAutos} options={{ title: 'Autos' }}/>
        <Stack.Screen name="ScreenFavoritos" component={ScreenFavoritos} options={{ title: 'Favoritos' }}/>
        {console.log(user.usuario)}
        <Stack.Screen name="ScreenAutoAlquilado" component={ScreenAutoAlquilado} user={user} options={{ title: 'Auto Alquilado' }}/>
        <Stack.Screen name="ScreenDetallesDelAuto" component={ScreenDetallesDelAuto} user={user} options={{ title: 'Detalles' }}/>
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
    backgroundColor: 'darkslategrey',
    alignItems: 'center',
    justifyContent: 'center',
  }
});