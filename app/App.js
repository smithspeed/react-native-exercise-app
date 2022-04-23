import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigator/Navigator';


const App = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
    )
}

export default App

const styles = StyleSheet.create({})