import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect, useState } from 'react/cjs/react.development'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, ScrollView,StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native'
import CategoryRow from '../components/CategoryRow'
import { DataProvider } from '../utils/DataProvider'

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
    <SafeAreaView className='flex-1 p-4 bg-[#060d37]' style={{'height':'100%'}}>
        <StatusBar
            backgroundColor='#060d37'
            barStyle={'light-content'}
            />
      <View className='items-center'>
        <Image source={require('../assets/astro-white-logo.png')}
              className='w-36 h-36'/>
      </View>
      {/*Categories*/}
      <ScrollView>
        {DataProvider.getCategories().map((category)=>(
          <CategoryRow
            id={category.id}
            title={category.name}
            description={category.description}
            tokens={category.tokens}
          />
        ))}
      </ScrollView>     
    </SafeAreaView>
  )
}