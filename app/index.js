import React from 'react';
import {View,Text} from 'react-native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import {Welcome,SignIn,SignUp,Feed,Profile,Notification,Create,Chat} from '../screens/Index.js'
import BottomTabNavigation from '../navigation/BottomTabNavigation.js';

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
                
                headerTitle:""
            }}
            />

            <Stack.Screen
            name="BottomTabNagivation"
            component={BottomTabNavigation}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}

export default Home;