import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({
    id,
    tokenName,
    tokenAddress,
    imageUrl,
    price,
    dailyPerc,
    description,
    volume,
    inWallet
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
        className='w-36 mr-3'
        onPress={()=>{
            navigation.navigate('Token', 
            {
                id,
                tokenName,
                tokenAddress,
                imageUrl,
                price,
                dailyPerc,
                description,
                inWallet
            })
        }}>
        <View className='flex-row align-bottom p-1 border border-white'>
            <View className='flex-1 justify-end'>      
                {(dailyPerc<0)&& <Text className='text-[#ef5176] text-lg font-bold'>{dailyPerc}%</Text>}
                {(dailyPerc>=0)&& <Text className='text-[#3edd61] text-lg font-bold'>+{dailyPerc}%</Text>}
            </View>
            <Image
                source={{
                    uri: imageUrl
                }}
                className='h-8 w-8 rounded-sm mb-1 mt-2 mr-1'
            />
        </View>
        <View className='bg-white w-36'>
            <View className='flex-row pl-2 pr-2 pt-2'>
                <Text className='flex-1 text-base font-bold'>{tokenName}</Text>
                <Text className='text-base font-bold'>${price}</Text>
            </View>  
            <Text className='pl-2 pr-2 pb-2 text-xs opacity-50'>{volume}</Text>  
        </View>
        
    </TouchableOpacity>
  )
}

export default CategoryCard