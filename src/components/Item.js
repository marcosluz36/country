import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
//import { Octicons, MaterialIcons } from '@expo/vector-icons';

const Item = ({name}) => {
  return(
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    width: 100,
    backgroundColor: '#82B',
    height: 50,
    margin: 10
  },
  text:{
    color: '#FFF'
  }
});