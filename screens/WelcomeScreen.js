import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import Animated, {interpolate, useSharedValue, withDelay, useAnimatedStyle, withTiming, withSpring} from 'react-native-reanimated'
import { CheckIcon } from 'react-native-heroicons/outline'

function WelcomeScreen() {
  const {height, width} = Dimensions.get('window')
  const imagePosition = useSharedValue(1)
  const helloText = useSharedValue(0)
  const navigation = useNavigation()
  
  const [connectingWallet, setConnectingWallet] = useState(false)
  const [connected, setConnected] = useState(false)

  const imageContainerAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [-height/2, 0])
    return {
      transform: [{
        translateY: withTiming(interpolation, {duration: 1000})
      }]
    }
  })
  const imageAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [height/5, 0])
    return {
      transform: [{
        translateY: withTiming(interpolation, {duration: 1000})
      }]
    }
  })
  const textAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [height/5, 0])
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{
        translateY: withTiming(interpolation, {duration: 1000})
      }]
    }
  })
  const textAnimatedStyleBegin = useAnimatedStyle(()=>{
     return {
      opacity: withDelay(1000,withTiming(helloText.value, {duration: 5000}))
    }
  })

  const subtextAnimatedStyleBegin = useAnimatedStyle(()=>{
    if(imagePosition.value===0){
      return {}
    }
    return {
     opacity: withDelay(3000,withTiming(helloText.value, {duration: 5000}))
   }
 })

  const loginButtonAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(imagePosition.value, [0,1], [250, 0])
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{
        translateY: withTiming(interpolation, {duration: 1000})
      }]
    }
  })
  const loginButtonAnimatedStyleBegin = useAnimatedStyle(()=>{
    return {
      opacity: withDelay(8000,withTiming(helloText.value, {duration: 1000}))
    }
  })

  const formAnimatedStyleBegin = useAnimatedStyle(()=>{
    return {
      opacity: imagePosition.value === 0 ? withDelay(500,withTiming(1, {duration:800})) : withTiming(0,{duration: 300})
    }
  })

  const loginHandler = () =>{
    imagePosition.value = 0
  }
  const closeLoginHandler = () =>{
    imagePosition.value = 1
  }

  useEffect(()=>{
    helloText.value = 1
  },[])

  return (
    <View className='h-full w-full overflow-hidden justify-end'>
      <StatusBar
            backgroundColor='#060d37'
            barStyle={'light-content'}
            />
      <Animated.View style={[imageContainerAnimatedStyle]} 
                     className='absolute top-0 left-0 right-0 
                                bottom-0 items-center 
                                justify-center'>
            <View style={[{height: height+60}]} 
                className='bg-[#060d37] items-center h-full w-full justify-center'>
            <Animated.View
                className='opacity-0'
                style={[textAnimatedStyleBegin,textAnimatedStyle]}>
              <Text 
                className='text-white text-center text-3xl pb-8'>
                  Hello Astrochad
              </Text>
            </Animated.View>
            <Animated.View
                className='opacity-0'
                style={[subtextAnimatedStyleBegin,textAnimatedStyle]}>
              <Text 
                className='text-white text-xl text-center pb-8'>
                  Welcome on board
              </Text>
            </Animated.View>
            <Animated.Image style={[imageAnimatedStyle]}
              source={require('../assets/port.png')}
              className='h-60 w-96'
            />
          </View>
          <TouchableOpacity 
                      onPress={closeLoginHandler}
                      className='h-8 w-8 justify-center 
                        shadow-xl bg-white 
                        items-center rounded-full relative bottom-3'>
            <Text className='text-black font-bold text-base'>X</Text>
          </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[loginButtonAnimatedStyleBegin, loginButtonAnimatedStyle]} className='h-1/4 justify-center'>
        <TouchableOpacity 
              onPress={loginHandler}
              className=' bg-[#5643f2] mx-16 p-3
                  rounded-full flex-row justify-center 
                  items-center space-x-1'>
          <Text className='flex-end text-white font-bold text-base'>Let's begin</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View 
        style={formAnimatedStyleBegin}
        className='absolute -z-10 h-[60%] pt-16 w-full justify-center items-center'>
        <TextInput
            className='h-12 border-1 w-52 text-center bg-transparent border-gray-50 mx-8 my-2 rounded-xl'
            placeholder='Astrochad Username'
        ></TextInput>
        {(!connected&&!connectingWallet)&&<TouchableOpacity 
              onPress={()=> {
                  setConnectingWallet(true)
                  setTimeout(() => {
                    setConnectingWallet(false)
                    setConnected(true)
                  }, 4000);
              }}
              className=' border w-72 border-white bg-[#5643f2] mx-16 p-3 my-2
                  rounded-full flex-row justify-center 
                  items-center space-x-1'>
          <Text className='flex-end text-white font-bold text-base'>Connect Wallet</Text>
        </TouchableOpacity>}
        {(!connected&&connectingWallet)&&<ActivityIndicator className='pt-4' size={'large'} color='#5643f2'/>}
        {(connected)&&
          <View className='w-full'>
            <View className='flex-row justify-center items-center'>
              <Text className='py-8 text-center text-black'>terra1clz9canwh...m5dgqh29np</Text>
              <CheckIcon color={'#7befc1'} size={32}/>
            </View>
            <TouchableOpacity 
              onPress={()=>navigation.navigate('Setup')}
              className=' border border-white bg-[#5643f2] mx-8 p-3 my-2
                  rounded-full justify-center 
                  items-center space-x-1'>
              <Text className='flex-end text-white font-bold text-base'>Next</Text>
            </TouchableOpacity>
          </View>
        }
      </Animated.View>
    </View>
  )
}

export default WelcomeScreen