import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'
// import { Entypo, MaterialIcons } from '@expo/vector-icons';

import globe from "../../images/earth.png";
import arrow from '../../images/left-arrow.png';

const Title = ({page, action}) => {
  return(
    <View style={styles.conteiner}>
    
        {/* <MaterialIcons name="arrow-back-ios" size={24} color="purple"/> */}
        <Image style={styles.icons}source={arrow}/>
        <Text>Que País É Esse?</Text>
        <Image source={globe} style={styles.icons}/>
        {/* <Entypo name="globe" size={24} color="black" /> */}
      </View>
      
    
  );
}

export default Title;

const styles = StyleSheet.create({
  conteiner: {
    width: '90%',
    backgroundColor: '#A9A9A9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icons: {
    width: 20,
    height: 20
  }
});