import { View, Text, Image, StatusBar, Dimensions } from 'react-native'
import {React, useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import PurchaseWithToken from '../components/PurchaseWithToken'
import RecapButton from '../components/RecapButton'
import { DataProvider } from '../utils/DataProvider'
import TokensCarousel from '../components/TokensCarousel'

const TokenScreen = () => {
    const navigation = useNavigation()
    const {height, width} = Dimensions.get('window')
    const {
      params:
        {
            id,
            tokenName,
            tokenAddress,
            imageUrl,
            price,
            dailyPerc,
            description,
            inWallet
        }
    } = useRoute()  

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])

    return (
    <>
    <View className='h-full'>
        <StatusBar
          backgroundColor='#060d37'
          barStyle={'light-content'}
          />
        <View className='bg-[#060d37]]' style={{height: height}}>
            <View className='h-1/3 justify-center'>
                <Text className=' text-white text-center text-4xl'>
                    What to use to purchase it?
                </Text>
            </View>
            <View className='justify-center items-center h-1/3'>
                <Image
                    source={{
                        uri: imageUrl
                    }}
                    className='opacity-50 h-48 w-48 
                    rounded-sm mb-1 mt-2 mr-1'
                />
            </View>
            <View className='justify-center items-center pt-16 h-1/3'>
                <TokensCarousel 
                    className='justify-center items-center'
                    tokens={Object.entries(DataProvider.getTokensPurchase(tokenName))}
                />
            </View>
        </View>
    </View>
    </>
    )
}

export default TokenScreen