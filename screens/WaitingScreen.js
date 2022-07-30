import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function WaitingScreen() {
  const navigation = useNavigation()

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("Home")
    }, 12000);
  })

  return (
    <SafeAreaView className='bg-[#000e37] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require("../assets/loading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className='h-96 w-96'
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className='text-lg text-white text-center pt-16 pb-16'
      >
      Waiting for transaction confirmation
      </Animatable.Text>
      <Progress.Circle size={40} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})