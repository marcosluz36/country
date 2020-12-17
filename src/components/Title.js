import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'
import { Entypo, MaterialIcons } from '@expo/vector-icons';

import globe from "../../images/earth.png";
import arrow from '../../images/left-arrow.png';

const Title = ({page, action}) => {
  return(
    <View style={styles.conteiner}>
      <View style={styles.content}>
        {action ? <Image style={styles.icons}source={arrow}/> : null }
        {/* <Image style={styles.icons}source={arrow}/> */}
        <View style={styles.title}>
          <Text style={styles.titleText}>Que País É Esse?</Text>
          <Image source={globe} style={[styles.iconTitle]}/>
        </View>
        
        
      </View>
        
        
        {/* <Entypo name="globe" size={24} color="black" /> */}
      </View>
      
    
  );
}

export default Title;

const styles = StyleSheet.create({
  conteiner: {
    width: "100%",
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    width: '90%',
    flexDirection: 'row',
    // backgroundColor: 'gray',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  icons: {
    width: 20,
    height: 20,
  },
  title: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green'

  },
  titleText:{
    fontFamily: 'Poppins_300Ligth',
    fontSize: 30,
    color: 'purple',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  iconTitle: {
    marginLeft: 20,
    height: 30,
    width: 30
  }
});