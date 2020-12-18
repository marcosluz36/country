import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'
//import { Octicons, MaterialIcons } from '@expo/vector-icons';

const Item = ({name, complement=null, click}) => {
  let align = complement ? 'right' : 'center';
  let space = complement ? 'space-between' : 'center';

  return(
    <TouchableOpacity style={[styles.container, {justifyContent: space}]}  onPress={click}>

        {complement?
          <Text style={styles.complement}>{complement}</Text>:
          null
        }
        <Text style={[styles.text, {textAlign: align}]}>{name}</Text>
        
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  text:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: '80%'
  },
  complement:{
    color: 'white'
  }
});