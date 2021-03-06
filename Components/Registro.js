import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';



const Registro = ({navigation}) => {
  return (
    <View style={styles.borde}>
      <Text style={styles.title}> Registro </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Registro')}
      />
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

export default Registro;