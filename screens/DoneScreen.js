import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView,StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native'
import CategoryRow from '../components/CategoryRow'
import { CheckIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { selectPurchase } from '../features/purchaseSlice'
import { addPurchase, resetPurchase } from '../features/purchaseSlice'


export default function DoneScreen() {
  const navigation = useNavigation()
  const purchase = useSelector(selectPurchase)
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(resetPurchase());
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView
      className='bg-[#000e37] flex-1 justify-center items-center'>
      <StatusBar
          backgroundColor='#060d37'
          barStyle={'light-content'}
          />
      <TouchableOpacity 
        onPress={handleClick}
        className='justify-center flex-1 items-center'>
      <Text className='text-[#3edd61] text-lg font-bold'>
        You bought {purchase?.purchase?.toAmount} {purchase?.purchase?.toToken}
      </Text>
      <CheckIcon
        color={'#3edd61'}
        size={150}
      />
      <Text  className='text-[#3edd61] text-lg font-bold'>
        with {purchase?.purchase?.fromAmount} {purchase?.purchase?.fromToken}
      </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}