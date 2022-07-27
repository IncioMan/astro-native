import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react/cjs/react.development'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView,StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function HomeScreen() {

  const icons = {'axlUSDC': 'https://app.astroport.fi/tokens/usdc.svg',
  'axlUSDT': 'https://app.astroport.fi/tokens/usdt.svg',
  'LUNA': 'https://assets.terra.money/icon/svg/LUNA.png',
  'ASTRO': 'https://app.astroport.fi/tokens/astro.png',
  'VKR': 'https://app.astroport.fi/tokens/vkr.jpg',
  'LunaX': 'https://app.astroport.fi/tokens/lunax.png',
  'STEAK':'https://app.astroport.fi/tokens/steak.png',
  'ampLUNA': 'https://app.astroport.fi/tokens/ampLuna.png'}
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown: false
    })
  },[])

  return (
    <SafeAreaView className='flex-1' style={{'height':'100%','backgroundColor':'#060d37'}}>
        <StatusBar
            backgroundColor='#060d37'
            barStyle={'light-content'}
        />
      <View className='flex-1'></View>
      <ScrollView 
            horizontal 
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showHorizontalScrollIndicator={false}>
        {
            Object.keys(icons).map((token)=>(
                <Image 
                    source={{uri:icons[token]}}
                    key={token}
                    className='h-12 w-12 m-2 rounded-full'
                />
            ))
        }
      </ScrollView>
      <TouchableOpacity
        onPress={()=>{navigation.navigate("WaitingScreen")}}
        className='rounded-lg bg-[#ffffff] p-4'>
        <Text>Load</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}