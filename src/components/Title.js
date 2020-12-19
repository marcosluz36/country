import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import globe from "../../images/earth.png";
import arrow from '../../images/left-arrow.png';

export default function Title({action}){
  // let show = action ? true : false;
  const { goBack } = useNavigation();

  function handleGoBack(){
      goBack();
  }

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        {action && (<RectButton onPress={handleGoBack}><Image style={styles.icons} source={arrow}/></RectButton>)}
        <View style={styles.title}>
          <Text style={styles.titleText}>Que país é esse?</Text>
          <Image source={globe} style={[styles.iconTitle]}/>
        </View>
        
        
      </View>
        
        
        {/* <Entypo name="globe" size={24} color="black" /> */}
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    width: '90%',
    flexDirection: 'row',
    // backgroundColor: 'gray',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  icons: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  title: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green'

  },
  titleText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
  iconTitle: {
    marginLeft: 10,
    height: 30,
    width: 30
  }
});