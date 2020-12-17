import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/pages/HomeScreen';

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer  >
            <Navigator screenOptions={{headerShown: false}}  >
                <Screen name="HomeScreen" component={HomeScreen} />
            </Navigator>
        </NavigationContainer>
    );
    
}

export default AppStack;