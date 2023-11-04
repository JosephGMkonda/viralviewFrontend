import React from 'react';
import {View,Text} from 'react-native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import {Welcome,SignIn,SignUp } from '../screens/Index.js'

const Stack = createNativeStackNavigator()

const Home = () => {
    return (
        <Stack.Navigator
        initialRouteName='Welcome'
        >
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
                headerShown: false,
                headerMode: 'none',
                headerShadowVisible: false,
                headerTitle: ""

            }}
            />

           <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false,
                headerShadowVisible: false,
                headerTitle: ""
            }}
            />

            <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerShown: false,
                headerShadowVisible:false,
                headerTitle:""
            }}
            />
        </Stack.Navigator>
    )
}

export default Home;