import React, {useEffect} from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS } from '../constants/theme'
import { MaterialIcons,Ionicons,Feather,Foundation,MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Font } from 'expo-font';


export const Feed = () => {

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
            ...FONTS.body2,
            marginRight: 4,
            fontWeight: 'bold',
            color: COLORS.blue
            }}
          >ViralView</Text>
          

        </View>

        <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'center'

        }}
        >


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
       <Ionicons name="chatbox-outline" size={24} color={COLORS.white}/>
         </LinearGradient>
        </View>

      </View>
    )
  }

  //Feed Post Function

  function renderFeedPost(){
    return(
      <View
      style={{
        backgroundColor: "#fff",
        flexDirection: 'column',
        width: '100%',
        borderRadius: 26,
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 12,


      }}
      >
        {/* {Post Header} */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 8
        }}>

          <View>
            
          </View>

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
        {renderFeedPost()}

        <ScrollView>

        </ScrollView>

      </View>

    </SafeAreaView>
    

  )
}

