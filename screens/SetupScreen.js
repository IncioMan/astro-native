import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import Animated, {interpolate, useSharedValue, withDelay, useAnimatedStyle, withTiming, withSpring, withRepeat} from 'react-native-reanimated'
import { CheckIcon } from 'react-native-heroicons/outline'

function SetupScreen() {
  const {height, width} = Dimensions.get('window')
  const helloText = useSharedValue(0)
  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("Home")
    }, 10000);
  })
  
  const imageAnimatedStyle = useAnimatedStyle(()=>{
    const interpolation = interpolate(helloText.value, [0,1], [0, 360])
    return {
      transform: [{
         rotate: withRepeat(withTiming(`${interpolation}deg`,{duration:10000}),-1)
      }]
    }
  })

  const textAnimatedStyleBegin = useAnimatedStyle(()=>{
     return {
      opacity: withDelay(1000,withTiming(helloText.value, {duration: 5000}))
    }
  })

  const subtextAnimatedStyleBegin = useAnimatedStyle(()=>{
    return {
     opacity: withDelay(3000,withTiming(helloText.value, {duration: 5000}))
   }
 })

 const subsubtextAnimatedStyleBegin = useAnimatedStyle(()=>{
  return {
   opacity: withDelay(5000,withTiming(helloText.value, {duration: 5000}))
 }
})


  useEffect(()=>{
    helloText.value = 1
  },[])

  return (
    <View className='h-full w-full overflow-hidden justify-end'>
      <StatusBar
            backgroundColor='#060d37'
            barStyle={'light-content'}
            />
      <Animated.View className='absolute top-0 left-0 right-0 
                                bottom-0 items-center 
                                justify-center'>
            <View style={[{height: height+60}]} 
                className='bg-[#060d37] items-center h-full w-full justify-center'>
            <Animated.View
                className='opacity-0'
                style={[textAnimatedStyleBegin]}>
              <Text 
                className='text-white text-center text-3xl pb-8'>
                  Good evening, IncioMan
              </Text>
            </Animated.View>
            <Animated.View
                className='opacity-0'
                style={[subtextAnimatedStyleBegin]}>
              <Text 
                className='text-white text-xl text-center pb-8'>
                  Please, wait a few moments
              </Text>
            </Animated.View>
            <Animated.Image style={[imageAnimatedStyle]}
              source={require('../assets/ball.png')}
              className='h-60 w-60'
            />
            <Animated.View
                className='opacity-0'
                style={[subsubtextAnimatedStyleBegin]}>
              <Text 
                className='text-white text-xl text-center pt-8'>
                  We are setting things up
              </Text>
          </Animated.View>
          </View>
      </Animated.View>
    </View>
  )
}

export default SetupScreen