import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';



const Auto = ({ marca, modelo, precio, km }) => {
  return (
    <View style={styles.borde}>
      <Text style={styles.title}> {marca} </Text>
      <Text style={styles.subtitle}> {modelo} </Text>
      <Text> {km} </Text>
      <Text> {precio} </Text>
      <Text> en cada uri poner la foto de la BD de cada auto</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.foto}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('agregado a favoritos'), console.log('agregado a favoritos')}
        style={styles.favoriteButton}
      >
          <Text style={styles.borde}> (corazoncito) </Text>
      </TouchableOpacity>

      <Button
        title='agregar a favoritos' />
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

  subtitle: { fontSize: 24 },

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

export default Auto;