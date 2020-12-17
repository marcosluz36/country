import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import {RectButton } from 'react-native-gesture-handler'
import { Octicons, MaterialIcons } from '@expo/vector-icons';

const Title = ({page, action}) => {
  return(
    <View>
      {page 
        ? <RectButton onPres={action} ><MaterialIcons name="arrow-back-ios" size={24} color="purple"/> </RectButton>
        : null}
      <Text>Que País É Esse?</Text>
      <Octicons name="globe" size={24} color="purple" />
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  conteiner: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});