import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Login from './screens/Login';
import Restaurant from './screens/Restaurant'; 
import OrderDelivery from './screens/OrderDelivery';
import Tabs from './navigation/tabs';
import { HalamanAwal } from './screens';



const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="HalamanAWal" component={HalamanAwal} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;