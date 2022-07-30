import { View, Text, Image } from 'react-native'
import {React, useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import PurchaseWithToken from '../components/PurchaseWithToken'
import RecapButton from '../components/RecapButton'

const TokenScreen = () => {
    const tokens = [1,2,3,4,4,4]
    const navigation = useNavigation()
    const {
      params:
        {
            id,
            tokenName,
            tokenAddress,
            imageUrl,
            price,
            dailyPerc,
            description
        }
    } = useRoute()  

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])

    return (
    <>
    <ScrollView>
        <View className=''>
            <View className='flex-row p-4 pl-8 pr-8 h-48 bg-[#060d37] items-end '>
                <View className='flex-1 justify-end'>      
                    {(dailyPerc<0)&& <Text className='text-[#ef5176] text-4xl mb-1 font-bold'>{dailyPerc}%</Text>}
                    {(dailyPerc>=0)&& <Text className='text-[#3edd61] text-4xl mb-1 font-bold'>+{dailyPerc}%</Text>}
                </View>
                <Image
                    source={{
                        uri: imageUrl
                    }}
                    className='h-20 w-20 rounded-sm mb-1 mt-2 mr-1'
                />
            </View>
            <TouchableOpacity 
                onPress={navigation.goBack}
                className='absolute top-8 left-9 p-2 bg-white rounded-full'>
                <ArrowLeftIcon size={20} color='#060d37'></ArrowLeftIcon>
            </TouchableOpacity>
        </View>
        <View className='bg-white flex-row justify-between'>
            <View className='px-8 pt-4'>
                <Text className='text-3xl font-bold'>{tokenName}</Text>
            </View>
            <View className='px-8 pt-4'>
                <Text className='text-3xl font-bold mr-4'>${price}</Text>
            </View>
        </View>
        <View className='bg-white flex-row justify-between'>
            <View className='px-8'>
                <Text className='text-gray-500 font-bold'>In wallet</Text>
            </View>
            <View className='px-8'>
                <Text className='text-gray-500 font-bold mr-4'>10.4</Text>
            </View>
        </View>
        <View className='bg-white flex-row justify-between px-8 py-4'>
            <Text className='text-gray-500'>
                The native coin of the Terra blockchain.
                Used to pay for gas fees and provide liquidity on different DEXs.
            </Text>
        </View>
        <View>
            <Text className='px-8 pt-4 mb-3 font-bold text-xl'>Purchase With</Text>
            {/*Purchase with tokens*/}
            {tokens.map((token)=>(
                <PurchaseWithToken
                    id={token}
                    tokenName='LUNAX'
                    tokenAddress=''
                    imageUrl='https://app.astroport.fi/tokens/lunax.png'
                    price='$1.81'
                    pricePerUnit={0.99}
                    inWallet={10.3}
                    tokenToPurchase={tokenName}
                />
            ))}
        </View>
    </ScrollView>
    <RecapButton/>
    </>
    )
}

export default TokenScreen