import React from 'react'
import {ImageBackground, SafeAreaView, Text, View, Dimensions,TouchableOpacity} from 'react-native'
import {SIZES,COLORS} from '../constants/theme'



const {height} = Dimensions.get("window")
const Welcome = () => {
  return (
    <SafeAreaView>
        <View>
            <ImageBackground style={{
                height: height / 2.5,

            }} 
            resizeMode='contain' 
            source={require("../assets/images/welcome.png")}/>

            <View
                style={{
                  paddingHorizontal: SIZES.padding,
                  paddingTop: SIZES.padding,
                }}>
              <Text
              style={{
                fontSize: SIZES.largeTitle2,
                color: COLORS.blue,
                textAlign: 'center',
                




              }}
              >Elevate Your Business with ViralView</Text>


              </View>


              <View
                style={{
                  paddingHorizontal: SIZES.padding3,
                  paddingTop: SIZES.padding3,
                }}>
              <Text
              style={{
                fontSize: SIZES.body5,
                color: COLORS.black,
                textAlign: 'center',
                




              }}
              > Welcome to the future of business growth and marketing excellence</Text>


              </View>

              <View
              style={{
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.padding4,
                flexDirection:"row"
                
              }}
              >
                <TouchableOpacity
                style={{
                  backgroundColor: COLORS.blue,
                  paddingHorizontal: SIZES.padding2,
                  paddingVertical: SIZES.padding3,
                  borderRadius: SIZES.radius2,
                  
                  width:"48%",
                  

                }}
                >
                  <Text
                  style={{
                    color: COLORS.white,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: SIZES.h4
                  }}
                  >SignIn</Text>

                </TouchableOpacity>

                <TouchableOpacity
                style={{
                  
                  paddingHorizontal: SIZES.padding3,
                  paddingVertical: SIZES.padding3,
                  borderRadius: SIZES.radius2,
                  
                  width:"48%",
                  

                }}
                >
                  <Text
                  style={{
                    color: COLORS.black,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: SIZES.h4
                  }}
                  >Signup</Text>

                </TouchableOpacity>
                </View>
        </View>


        
    </SafeAreaView>
    
  )
}

export default Welcome