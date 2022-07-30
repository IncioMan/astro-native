import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPurchase } from '../features/purchaseSlice'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const RecapButton = () => {
  const purchase = useSelector(selectPurchase)
  const navigation = useNavigation()

  return (
    <>
    {
    (purchase.purchase)&&
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity 
            onPress={()=>{navigation.navigate("WaitingScreen")}}
            className='bg-[#5643f2] mx-5 p-4 rounded-lg flex-row justify-center items-center space-x-1'>
          <Text className='text-white font-extrabold'>{purchase?.purchase?.fromAmount} {purchase?.purchase?.fromToken}</Text>
          <Text className='text-white font-extrabold'>→</Text>
          <Text className='text-white font-extrabold'>{purchase?.purchase?.toAmount} {purchase?.purchase?.toToken}</Text>
      </TouchableOpacity>
    </View>    
    }
    </>
  )
}

export default RecapButton