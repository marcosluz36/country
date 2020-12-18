import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
//import { Octicons, MaterialIcons } from '@expo/vector-icons';

const Item = ({name, complement=null}) => {
  return(
    <TouchableOpacity style={styles.container}>

        {complement?
          <Text style={styles.complement}>{complement}</Text>:
          null
        }
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
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  text:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  complement:{
    color: 'white'
  }
});