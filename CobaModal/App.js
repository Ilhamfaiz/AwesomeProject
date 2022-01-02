import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/Home'
import jisoo from './screen/Jisoo';
import lisa from './screen/Lisa';
import rose from './screen/Rose';
import jennie from './screen/Jennie';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#fcafd2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#f2138c',
          },
        }}
        />
        
        <Stack.Screen 
        name="Jisoo" 
        component={jisoo} 
        options={{
          title: 'Jisoo',
          headerStyle: {
            backgroundColor: '#fcafd2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#f2138c',
          },
        }}
        />

        <Stack.Screen
        name="Lisa" 
        component={lisa} 
        options={{
          title: 'Lisa',
          headerStyle: {
            backgroundColor: '#fcafd2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#f2138c',
          },
        }}/>

        <Stack.Screen 
        name="Rose" 
        component={rose} 
        options={{
          title: 'Rose',
          headerStyle: {
            backgroundColor: '#fcafd2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#f2138c',
          },
        }}/>

        <Stack.Screen 
        name="Jennie" 
        component={jennie}
        options={{
          title: 'Jennie',
          headerStyle: {
            backgroundColor: '#fcafd2',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#f2138c',
          },
        }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack