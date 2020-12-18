import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
//import { Octicons, MaterialIcons } from '@expo/vector-icons';

const Item = ({name, click}) => {
  return(
    <TouchableOpacity style={styles.container} onPress={click}>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    minWidth: '95%',
    maxWidth: '95%',
    backgroundColor: '#74B',
    minHeight: 60,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10
  },
  text:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  }
});