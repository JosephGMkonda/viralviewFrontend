import React from 'react'
import {View,Text, SafeAreaView} from 'react-native'
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
                  paddingTop: 30,
                  fontWeight: 'bold'
                }}
                >Login here</Text>
            </View>

            
        </View>
    </SafeAreaView>
  )
}

export default SignIn