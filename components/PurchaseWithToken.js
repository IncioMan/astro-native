import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { addPurchase, resetPurchase } from '../features/purchaseSlice'

const PurchaseWithToken = ({
    id,
    tokenName,
    tokenAddress,
    imageUrl,
    price,
    pricePerUnit,
    inWallet,
    tokenToPurchase
}) => {
  const [isPressed, setIsPressed] = useState(false)
  const dispatch = useDispatch();
  const handleAddPurchase = (value)=>{
    if(value===''){
        dispatch(resetPurchase())
        return
    }
    dispatch(addPurchase({
        fromToken: tokenName,
        toToken: tokenToPurchase,
        fromAmount: value,
        toAmount: value*10
    }))
  }

  useEffect(()=>{
    if(!isPressed){
        dispatch(resetPurchase())
    }
  },[isPressed])

  return (
    <>
    <TouchableOpacity 
        onPress={()=>setIsPressed(!isPressed)} 
        className={`px-8 py-2 border border-gray-200 bg-white ${isPressed && "border-b-0"}`}>
        <View className="flex-row">
            <View className='flex-1 mr-4'>
                <View className='flex-row'>
                    <Text className='font-bold text-lg flex-1'>{tokenName}</Text>
                    <Text className='text-lg'>{price}</Text>
                </View>
                <View className='flex-row '>
                    <Text className='flex-1 text-gray-500'>In wallet:</Text>
                    <Text className='text-gray-500'>{inWallet}</Text>
                </View>
                <View className='flex-row'>
                    <Text className='flex-1 text-gray-500'>Price per unit:</Text>
                    <Text className='text-gray-500'>{pricePerUnit}</Text>
                </View>
            </View>
            <Image
                source={{
                    uri: imageUrl
                }}
                className='h-14 w-14 rounded-sm mb-1 mt-2 mr-1'
            />
        </View>
    </TouchableOpacity>
    {isPressed &&
        <View className='bg-white px-8 pb-2'>
            <View className='flex-row'>
                <TextInput
                    className='flex-1 text-base text-center'
                    placeholder="Type Amount"
                    keyboardType="numeric"
                    style={{
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        outline: 'none'
                      }}
                    onChangeText={handleAddPurchase}
                />
                <Text className='text-lg'>{price}</Text>
                <View className='w-14 mr-4'></View>
            </View>
        </View>
    }
    </>
  )
}

export default PurchaseWithToken