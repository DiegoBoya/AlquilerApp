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
import ScreenFavoritos from './screens/favoritos';


export default function App() {
  const Stack = createStackNavigator();
  const [isLoading , setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  
  const authContext = useMemo(()=>({
    login: async (username, password)=>{
       const requestOptions = {
         method: 'post',
         headers: {
           'Content-Type': 'application/json',
           Accept: '*',
          },
          body: JSON.stringify({username: username, password: password})
       };
       console.log(requestOptions);
        try{
       await (fetch('http://localhost:3000/api/users/SignIn', requestOptions)
       .then(response => response.json())
       .then(json => setUserToken(json.token)));      
       setIsLoading(false);
       }catch(error){ console.log('Error catcheado: ' + error.message); alert('Failed Credentials')}

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
        <Text>Loading...</Text>
      </View>
    );}

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {/* En "initialRouteName={}" podes poner la página a la que se vuelve con el "back" básicamente. */}
      {userToken == null ?( 
      <Stack.Navigator initialRouteName={"ScreenLogin"}>
        <Stack.Screen name="ScreenLogin" component={ScreenLogin} options={{ title: 'Login' }}/>
        <Stack.Screen name="ScreenRegistro" component={ScreenRegistro} options={{ title: 'Registro' }}/>
      </Stack.Navigator>
      ):(
        <Stack.Navigator initialRouteName={"ScreenHome"}>
        <Stack.Screen name="ScreenHome" component={ScreenHome} options={{ title: 'Home' }}/>
        <Stack.Screen name="ScreenAutos" component={ScreenAutos} options={{ title: 'Autos' }}/>
        <Stack.Screen name="ScreenFavoritos" component={ScreenFavoritos} options={{ title: 'Favoritos' }}/>
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
    margin: 10,
    padding: 5
  },

  buttonText: {
    color: '#fff'
  }
});