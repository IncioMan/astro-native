import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react/cjs/react.development'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView,StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native'
import CategoryRow from '../components/CategoryRow'
import { CheckIcon } from 'react-native-heroicons/outline'

export default function DoneScreen() {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      className='bg-[#000e37] flex-1 justify-center items-center'>
      <TouchableOpacity 
        onPress={()=>{navigation.navigate('Home')}}
        className='justify-center flex-1 items-center'>
      <Text className='text-[#3edd61] text-lg font-bold'>
        You bought 3.87 LUNA
      </Text>
      <CheckIcon
        color={'#3edd61'}
        size={150}
      />
      <Text  className='text-[#3edd61] text-lg font-bold'>
        with 1200 ASTRO
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}