import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Auto from './Components/Auto';
import { StyleSheet, Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
//import Barrita from './Barrita';
import portada from './assets/portada.png'
import * as ImagePicker from 'expo-image-picker'
import Favorito from './Components/Favorito';


export default function App() {

  const [autos, setAutos] = useState([]);
  
  //const [filtro, setFiltro] = useState("");

  useEffect(() => {
    buscarAutos();
  }, []);



  /*  const ingresarFiltro = (event) => {
      setFiltro(event.target.value);
    }
  */
  function buscarAutos() {
    const aut = fetch('http://localhost:3000/api/autos');
    //'/api/estacionamientos'
    return aut
      .then(res => res.json())
      .then(json => {
        console.log('la busqueda' + json);
        setAutos(json);
      })
      .catch(error => console.log('Ocurrio un error' + error));
  }




  return (
    <View style={styles.container}>
      <Text style={styles.title}> Viaja como quieras ^-^ </Text>
      <StatusBar style="auto" />

      <Image source={{uri: portada}}
      style={styles.foto}
      />

      <Button
        title="primerBoton"
        color="red"
        onPress={() => alert('boton comun')}
      />

      <TouchableOpacity
        onPress={() => alert('el touchable')}
        style={styles.touchable}
      >
        <Text style={styles.buttonText}> el touchable </Text>
      </TouchableOpacity>

      {autos.map(auto => (
        <Auto key={auto._id} modelo={auto.modelo} marca={auto.marca} id={auto._id} />
      ))}


    </View>

  );
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





