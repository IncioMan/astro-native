import React from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { PlusCircleIcon, SearchIcon } from 'react-native-heroicons/outline'
import FavoritesContainer from '../components/FavoritesContainer'
import TokensContainer from '../components/TokensContainer'

function AssetDialectScreen() {
  return (
    <SafeAreaView className='flex-1 px-6 pt-4 bg-[#060d37]'>
        <StatusBar
            backgroundColor='#060d37'
            barStyle={'light-content'}
            />
        <View className='flex-row w-full'>
            <TouchableOpacity>
              <Image 
                  className='w-6 h-6 rounded-full'
                  source={require('../assets/pfp2.jpg')} />
            </TouchableOpacity>
            <Text className='flex-1 text-white text-base text-center font-bold'>Tokens</Text>
            <TouchableOpacity>
              <PlusCircleIcon
                color={'#ffffff'}
                size={24}
              />
            </TouchableOpacity>
        </View>
        <View className='flex-row items-center pt-4 space-x-2 w-full'>
          <View className='flex-row flex-1 space-x-2 bg-[#0c1941] items-center p-1 rounded-xl border border-gray-500'>
            <SearchIcon className='mt-2' color='gray' size={20}/>
            <TextInput className='text-white flex-1' placeholderTextColor='gray' placeholder='Search token' keyboardType='default'></TextInput>
          </View>
        </View>
        <ScrollView>
          <FavoritesContainer/>
          <TokensContainer/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AssetDialectScreen