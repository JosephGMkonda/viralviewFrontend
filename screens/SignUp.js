import React from 'react'

import {View,Text,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'
import { SIZES,COLORS } from '../constants/theme'

const SignUp =({navigation: {navigate}}) => {
  return (

    <SafeAreaView>  
    <View>
        <View 
        style={{
          alignItems:"center"

        }}
        >
            <Text
            style={{
              fontSize: 24,
              color: COLORS.blue,
              paddingTop: 40,
              fontWeight: 'bold'
            }}
            >Create Account</Text>
        </View>
       <View 
       style={{
        marginVertical: 35,

       }}
       >
        <TextInput
         placeholder='Username' 
         placeholderTextColor={COLORS.black}
         

        style={{
          margin: 20,
          padding: 10,
          backgroundColor: COLORS.lightgray,
          fontSize: 15,
          borderRadius: SIZES.radius2,
          

        }}
        />

        <TextInput
         placeholder='Password' 
         secureTextEntry
         placeholderTextColor={COLORS.black}
         

        style={{
          margin: 20,
          padding: 10,
          backgroundColor: COLORS.lightgray,
          fontSize: 15,
          borderRadius: SIZES.radius2,
          

        }}
        />



        <TextInput
         placeholder='ConfirmPassword' 
         secureTextEntry
         placeholderTextColor={COLORS.black}
         

        style={{
          margin: 20,
          padding: 10,
          backgroundColor: COLORS.lightgray,
          fontSize: 15,
          borderRadius: SIZES.radius2,
          

        }}
        />

       </View>

      <TouchableOpacity
      onPress={() => navigate("Feed")}
       style={{
        padding: 15,
        

       }}
      >
        <Text

        style={{
          backgroundColor: COLORS.blue,
          paddingHorizontal: SIZES.padding2,
          paddingVertical: SIZES.padding3,
          borderRadius: SIZES.radius,
          width: '90%',
          textAlign: 'center',
          color:COLORS.white,
          shadowColor:COLORS.blue,
          fontWeight: 'bold'
          

        }}
        >
          Sign up
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
       style={{
        padding: 15,
        

       }}
      >
        <Text
        style={{
      
          paddingHorizontal: SIZES.padding2,
          paddingVertical: SIZES.padding3,
          
          width: '90%',
          textAlign: 'center',
          color:COLORS.black,
          
          

        }}
        >
          Already have an account
        </Text>

      </TouchableOpacity>
    </View>
</SafeAreaView>


    
  )
}

export default SignUp