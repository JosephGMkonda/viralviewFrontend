import React from 'react'
import {View,Text, SafeAreaView, TextInput} from 'react-native'
import { SIZES,COLORS } from '../constants/theme'

const SignIn =() => {
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
                >Login here</Text>
            </View>
           <View 
           style={{
            marginVertical: 35
           }}
           >
            <TextInput
             placeholder='Username' 
             placeholderTextColor={COLORS.black}
             

            style={{
              margin: 20,
              backgroundColor: COLORS.lightgray,
              fontSize: 20

            }}
            />
           </View>

        </View>
    </SafeAreaView>
  )
}

export default SignIn