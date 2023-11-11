import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS } from '../constants/theme'
import { MaterialIcons,Ionicons,Feather,Foundation,MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

export const Feed = () => {
  function renderHeader(){
    return (
      <View
      style={{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
      }}
      >

        <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

        }}
        >
          <Text
          style={{
            ...FONTS.body4,
            marginRight: 4
            }}
          >ViralView</Text>
          <MaterialIcons 
          name='keyboard-arrow-down'
          size={24}
          color={COLORS.black}
          />

        </View>

        <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'center'

        }}
        >
        <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          shadowColor: "#182784",
          shadowOffset: {
            width: 0,
            height: 4.5,


          },
          shadowOpacity: 0.12,
          shadowRadius: 6.5,
          elevation: 2,
          borderRadius: 22

        }}
        >
          <Ionicons name='filter' size={24} color={COLORS.black} />
         </TouchableOpacity>

         <LinearGradient
         colors={['#F68464','#EEA849']}
         style={{

          height: 50,
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        
          shadowColor: "#182784",
          shadowOffset: {
            width: 0,
            height: 4.5,


          },
          shadowOpacity: 0.12,
          shadowRadius: 6.5,
          elevation: 2,
          borderRadius: 22,
          marginLeft: 12

        

          

         }}
         >
       <Ionicons name="chatbox-outline"/>
         </LinearGradient>
        </View>

      </View>
    )
  }
  return (
    <SafeAreaView  style={{
      flex: 1,
      backgroundColor: "#E7E7E7"
    }}>
      <View style={{ flex:1, paddingHorizontal: 22}}>
        {renderHeader()}

      </View>

    </SafeAreaView>
    

  )
}

