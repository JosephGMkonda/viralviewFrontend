import React,{useEffect} from 'react'
import { Feather, Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, View, } from 'react-native'
import { COLORS } from '../constants/theme'
import {Feed} from '../screens/Feed'
import {Chat} from '../screens/Chat'
import {Create} from '../screens/Create'
import {Notification} from '../screens/Notification'
import {Profile} from '../screens/Profile'
import { LinearGradient } from 'expo-linear-gradient'
import { Font } from 'expo-font';



const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHiderOnKeyboard: true,

    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
}

const BottomTabNavigation = () => {

    useEffect(() => {
        const loadFonts = async () => {
          await Font.loadAsync({
            FontAwesome: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/FontAwesome.ttf'),
            feather: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Feather.ttf'),
          });
          // Set a state variable or perform any other actions after the font is loaded
        };
      
        loadFonts();
      }, []);

    return (

        <Tab.Navigator screenOptions={screenOptions}>

            <Tab.Screen
                name='Feed'
                component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Feather name="home" size={24} color={focused ? COLORS.primary : COLORS.blue} style={{ fontFamily: 'feather' }} />
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Chat'
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Ionicons name="chatbox-outline" size={24} color={focused ? COLORS.primary : COLORS.blue} />
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Create'
                component={Create}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <LinearGradient
                                colors={['#F68464', '#EEA849']}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: Platform.OS == 'android' ? 50 : 60,
                                    height: Platform.OS == 'android' ? 50 : 60,
                                    top: Platform.OS == 'android' ? -10 : -20,
                                    borderRadius: 22,
                                    borderColor: '#fff',
                                    borderWidth: 4
                                }}
                            >
                                <Feather name="plus-circle" size={24} color={COLORS.white} />
                            </LinearGradient>
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Notifications'
                component={Notification}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome5 name="heart" size={24} color={focused ? COLORS.primary : COLORS.blue} />
                        )
                    }
                }}
            />

            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <FontAwesome 
                            name="user-circle" 
                            size={24}
                            color={focused ? COLORS.primary : COLORS.blue}
                            style={{ fontFamily: 'FontAwesome' }}
                             />
                        )
                    }
                }}
            />

        </Tab.Navigator >
    )
}

export default BottomTabNavigation