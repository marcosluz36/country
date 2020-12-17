import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
//import { Octicons, MaterialIcons } from '@expo/vector-icons';

const Item = (name) => {
  return(
    <TouchableOpacity style={styles.container}>
        {name}
    </TouchableOpacity>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#F00'
  }
});