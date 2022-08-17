import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { tokens } from '../data/tokens'
import { ArrowSmUpIcon, ArrowSmDownIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';

function TokenCard({token}) {

  const navigation = useNavigation();
  const tokenData = tokens[token]

  return (
    <TouchableOpacity className=' opacity-80 border-gray-500 flex flex-row items-center px-2 py-4'
        onPress={()=>{
            navigation.navigate('Token', 
            {
                id: tokenData.id,
                tokenName: tokenData.name,
                tokenAddress: tokenData.tokenAddress,
                imageUrl: tokenData.imageUrl,
                price: tokenData.price,
                dailyPerc: tokenData.dailyPerc,
                description: tokenData.description,
                inWallet: tokenData.inWallet
            })
        }}>
        <Image
            /*border-solid border-white rounded-full border-4 p-1*/
            className = 'w-8 h-8'
            source={{ uri: tokenData?.imageUrl}}
        /> 
        <View className='flex-1 pl-4'>
            <View className='flex-row'>
                <Text className='flex-1 text-white text-base font-bold'>{tokenData?.name}</Text>
                <Text className='text-gray-400 text-base'>$ {tokenData?.price}</Text>
            </View>
            <View className='flex-row items-center'>
                <Text className='text-gray-400 text-xs'>24h: {tokenData?.dailyPerc}%</Text>
                {(tokenData?.dailyPerc>=0)&&<ArrowSmUpIcon color={'gray'} size={18}></ArrowSmUpIcon>}
                {(tokenData?.dailyPerc<0)&&<ArrowSmDownIcon color={'gray'} size={18}></ArrowSmDownIcon>}
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default TokenCard