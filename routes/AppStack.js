import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../src/pages/HomeScreen';
import CountryDetails from '../src/pages/CountryDetails';

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer  >
            <Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen" >
                <Screen name="HomeScreen" component={HomeScreen} />
                <Screen name="CountryDetails" component={CountryDetails} />
            </Navigator>
        </NavigationContainer>
    );
    
}

export default AppStack;