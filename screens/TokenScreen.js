import { View, Text, Image, StatusBar, Dimensions, SafeAreaView } from 'react-native'
import {React, useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataProvider } from '../utils/DataProvider'
import TokensCarousel from '../components/TokensCarousel'
import { useState } from 'react'
import { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated,{ interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { ArrowRightIcon, ChevronUpIcon} from 'react-native-heroicons/outline'
import { tokens } from '../data/tokens'

const TokenScreen = () => {
    const navigation = useNavigation()
    const {height, width} = Dimensions.get('window')
    const [fromToken, setFromToken] = useState(0)
    const fromTokenSelected = useSharedValue(0)
    const {
      params:
        {
            tokenName,
            imageUrl
        }
    } = useRoute()  
    const tokens = Object.entries(DataProvider.getTokensPurchase(tokenName))
    console.log(tokens)

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])
    useEffect(()=>{
        console.log(fromToken)
    },[fromToken])

    const fromTokenSelectorAnimatedStyle = useAnimatedStyle(()=>{
        const interpolation = interpolate(fromTokenSelected.value, [1,0], [-height/2, 0])
        return {
            transform: [{
                translateY: withTiming(interpolation, {duration: 1000})
            }]
        }
    })

    const fromTokenSelectorContentAnimatedStyle = useAnimatedStyle(()=>{
        const interpolationOpacity = interpolate(fromTokenSelected.value, [0,1], [1,0])
        return {
            opacity: withTiming(interpolationOpacity, {duration:500})
        }
    })


    const amountSelectorTitleAnimatedStyle = useAnimatedStyle(()=>{
        const interpolation = interpolate(fromTokenSelected.value, [0,1], [-height/2, 0])
        return {
            transform: [{
                translateY: withTiming(interpolation, {duration: 1000})
            }],
            opacity: withTiming(fromTokenSelected.value, {duration:500})
        }
    })

    return (
    <>
    <SafeAreaView className='h-full'>
        <StatusBar
          backgroundColor='#060d37'
          barStyle={'light-content'}
          />
        <Animated.View
            className='absolute bg-[#060d37] py-20 top-0 w-full z-10'
            style={[{height: height/2}, 
                    amountSelectorTitleAnimatedStyle
                ]}
        >
            <View className='justify-center'>
                <Text className=' text-white text-center text-4xl'>
                    How much to purchase?
                </Text>
            </View>
            <View className='pt-8  opacity-70 flex-row justify-center items-center'>
                <Image
                    source={{
                        uri: fromToken !== null ? tokens[fromToken][1]?.imageUrl : null
                    }}
                    className='h-20 w-20 rounded-sm mb-1 mt-2 mr-1'
                />
                <ArrowRightIcon color={'white'} size={40}></ArrowRightIcon>
                <Image
                    source={{
                        uri: imageUrl
                    }}
                    className='h-20 w-20 rounded-sm mb-1 mt-2 mr-1'
                />
            </View>
            <View className='w-full justify-center          
                            items-center absolute bottom-0'>
                <TouchableOpacity 
                        onPress={()=>{fromTokenSelected.value=0}}
                        className='h-8 w-8 justify-center 
                            shadow-xl bg-white 
                            items-center rounded-full relative -bottom-3'>
                <Text className='text-black font-bold text-base'>X</Text>
            </TouchableOpacity>
            </View>
        </Animated.View>
        <Animated.View 
            style={[{height: height},fromTokenSelectorAnimatedStyle]}
            className='absolute py-20 overflow-hidden bg-[#060d37]]' 
            >
            <Animated.View className='h-full' style={fromTokenSelectorContentAnimatedStyle}>
                <View className='justify-center'>
                    <Text className=' text-white text-center text-4xl'>
                        What to use to purchase it?
                    </Text>
                </View>
                <View className='justify-center items-center flex-1'>
                    <Image
                        source={{
                            uri: imageUrl
                        }}
                        className='opacity-50 h-48 w-48 
                        rounded-sm mb-1 mt-2 mr-1'
                    />
                </View>
                <View className='justify-center items-center'>
                    <TokensCarousel 
                        className='justify-center items-center'
                        tokens={tokens}
                        setFromToken={setFromToken}
                    />
                </View>
                <Animated.View className='justify-center items-center pr-3 h-50'>
                    <TouchableOpacity
                        onPress={()=>{fromTokenSelected.value=1}}
                        >
                        <ChevronUpIcon color={'white'} size={30}/>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </Animated.View>
    </SafeAreaView>
    </>
    )
}

export default TokenScreen