import { View, Text, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectSettings } from '../features/settingsSlice'
import { selectPurchase } from '../features/purchaseSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DataProvider } from '../utils/DataProvider'
import { TouchableOpacity } from 'react-native'

const RecapScreen = () => {
  const [fromToken, setFromToken] = useState(null)
  const [toToken, setToToken] = useState(null)
  const navigation = useNavigation()
  const settings = useSelector(selectSettings)
  const purchase = useSelector(selectPurchase)
  const dispatch = useDispatch()

  useEffect(()=>{
    setFromToken(DataProvider.getToken(purchase.purchase.fromToken))
    setToToken(DataProvider.getToken(purchase.purchase.toToken))
  },[purchase])

  return (
    <SafeAreaView className='bg-[#000e37] flex-1 items-center p-8'>
        <StatusBar
          backgroundColor='#060d37'
          barStyle={'light-content'}
          />
        <View className='justify-center items-center flex-1'>
            <Image source={require('../assets/astro-white-logo.png')}
                className='w-36 h-36'/>
            <Text className='text-[#ffffff] text-3xl pb-12 font-bold text-center'>
                Purchase Summary
            </Text>  
            <View className='flex-row items-center w-full justify-evenly pb-4'>
                <Text className='text-[#ffffff] text-3xl font-bold'>
                    {purchase.purchase.fromAmount}
                </Text>
                <Image
                        source={{
                            uri: fromToken?.imageUrl
                        }}
                        className='h-12 w-12 rounded-sm mb-1 mt-2 mr-1'
                    />
                <Text className='text-white text-3xl font-extrabold'>→</Text>
                <Image
                        source={{
                            uri: toToken?.imageUrl
                        }}
                        className='h-12 w-12 rounded-sm mb-1 mt-2 mr-1'
                    />
                <Text className='text-[#ffffff] text-3xl font-bold'>
                    {purchase.purchase.toAmount}
                </Text>
            </View>
        </View>
        <View className='flex-row items-center w-full py-2 px-8 justify-evenly'>
            <Text className='text-[#ffffff] flex-1 text-xlg font-bold'>
                Total value
            </Text>  
            <Text className='text-[#ffffff] text-xlg font-bold'>
                ${parseFloat((purchase.purchase.fromAmount * fromToken?.price/310).toFixed(2))}
            </Text>         
        </View>
        <View className='flex-row items-center py-2 px-8 w-full justify-evenly'>
            <Text className='text-[#ffffff] flex-1 text-xlg font-bold'>
                Slippage
            </Text>  
            <Text className='text-[#ffffff] text-xlg font-bold'>
                {settings.settings.slippage}%
            </Text>         
        </View>
        <View className='flex-row items-center py-2 px-8 w-full justify-evenly'>
            <Text className='text-[#ffffff] flex-1 text-xlg font-bold'>
                Tx Fee
            </Text>  
            <Text className='text-[#ffffff] text-xlg font-bold'>
                0.02 LUNA
            </Text>         
        </View>
        <View className='py-8'>      
        </View>
        <TouchableOpacity
            onPress={()=>{navigation.navigate("WaitingScreen")}}
            className='bg-[#5643f2] absolute bottom-5 px-12 py-4 rounded-lg'>
          <Text className='text-white font-extrabold'>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default RecapScreen