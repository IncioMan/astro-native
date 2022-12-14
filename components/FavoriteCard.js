import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { tokens } from '../data/tokens'
import { useNavigation } from '@react-navigation/native';

function FavoriteCard({token}) {

  const navigation = useNavigation();
  const tokenData = tokens[token]

  return (
    <TouchableOpacity className='w-1/3 items-center pt-4'
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
    }}
    >
        <Image 
            /*border-solid border-white rounded-full border-4 p-1*/
            className = 'w-16 h-16'
            source={{ uri: tokenData?.imageUrl}}
        />  
        <View className='flex-row items-center justify-center w-full pt-2'>
            {(tokenData?.dailyPerc>=0)&&
                <>
                    <View className='w-3 h-3 rounded-full bg-[#3edd61]'></View>
                    <Text className='text-[#3edd61] px-2'>${tokenData?.price}</Text>
                </>
            }
            {(tokenData?.dailyPerc<0)&&
                <>
                    <View className='w-3 h-3 rounded-full bg-[#ef5176]'></View>
                    <Text className='text-[#ef5176] px-2'>${tokenData?.price}</Text>
                </>
            }
            <View className='w-3 h-3 rounded-full bg-transparent'></View>
        </View> 
    </TouchableOpacity>
  )
}

export default FavoriteCard