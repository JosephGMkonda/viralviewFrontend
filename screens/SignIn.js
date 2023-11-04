import React from 'react'
import {View,Text, SafeAreaView, TextInput,TouchableOpacity} from 'react-native'
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
            marginVertical: 35,

           }}
           >
            <TextInput
             placeholder='Username' 
             placeholderTextColor={COLORS.black}
             

            style={{
              margin: 20,
              padding: 15,
              backgroundColor: COLORS.lightgray,
              fontSize: 20,
              borderRadius: SIZES.radius2,
              

            }}
            />

            <TextInput
             placeholder='Password' 
             secureTextEntry
             placeholderTextColor={COLORS.black}
             

            style={{
              margin: 20,
              padding: 15,
              backgroundColor: COLORS.lightgray,
              fontSize: 20,
              borderRadius: SIZES.radius2,
              

            }}
            />

           </View>

           <View>
            <Text 
            style={{
              fontSize: 15,
              color: COLORS.secondary,
              alignItems: 'flex-end'
            }}
            >Forgot your password ?</Text>
           </View>
          <TouchableOpacity>
            

          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SignIn