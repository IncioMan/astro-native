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
import { TextInput } from 'react-native'
import RecapButton from '../components/RecapButton'

const TokenScreen = () => {
    const navigation = useNavigation()
    const {height, width} = Dimensions.get('window')
    const [fromToken, setFromToken] = useState(0)
    const fromTokenSelected = useSharedValue(0)
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

    const inputFormAnimatedStyleBegin = useAnimatedStyle(()=>{
        const interpolation = interpolate(fromTokenSelected.value, [0,1], [height/2, 0])
        return {
            transform: [{
                translateY: withTiming(interpolation, {duration: 1000})
            }],
            opacity: withTiming(fromTokenSelected.value, {duration:500})
        }
    })

    return (
    <>
    <SafeAreaView className='h-full bg-[#060d37]'>
        <StatusBar
          backgroundColor='#060d37'
          barStyle={'light-content'}
          />
        {/*Hidden top*/}
        <Animated.View
            className='absolute bg-[#ffffff] pt-20 top-0 w-full z-10'
            style={[{height: height/2}, 
                    amountSelectorTitleAnimatedStyle
                ]}
        >
            <View className='justify-center'>
                <Text className=' text-black text-center text-xl'>
                    How much to purchase?
                </Text>
            </View>
            <View className='pt-4 flex-row justify-center items-center'>
                <Image
                    source={{
                        uri: fromToken !== null ? tokens[fromToken][1]?.imageUrl : null
                    }}
                    className='h-16 w-16 rounded-sm mb-1 mt-2 mr-1'
                />
                <ArrowRightIcon color={'black'} size={24}></ArrowRightIcon>
                <Image
                    source={{
                        uri: imageUrl
                    }}
                    className='h-16 w-16 rounded-sm mb-1 mt-2 ml-1'
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
        {/*Visible top*/}
        <Animated.View 
            style={[{height: height},fromTokenSelectorAnimatedStyle]}
            className='absolute pt-16 pb-8 overflow-hidden bg-[#ffffff]]' 
            >
            <Animated.View className='h-full' style={fromTokenSelectorContentAnimatedStyle}>
                <View className='justify-center'>
                    <Text className=' text-black text-center text-4xl'>
                        {tokenName}
                    </Text>
                </View>
                <View className='justify-center pt-4 px-8'>
                    <Text className=' text-black text-justify text-base'>
                        {description}
                    </Text>
                </View>
                <View 
                    className='border-6 border-white 
                               rounded-full justify-center 
                               items-center flex-1'>
                    <Image
                        source={{
                            uri: imageUrl
                        }}
                        className='h-32 w-32 
                        rounded-sm'
                    />
                </View>
                <View className='justify-center'>
                    <Text className=' text-black pb-4 text-center text-xl'>
                        What do you want to pay with?
                    </Text>
                </View>
                <View className='justify-center items-center'>
                    <TokensCarousel 
                        className='justify-center items-center'
                        tokens={tokens}
                        setFromToken={setFromToken}
                    />
                </View>
                <Animated.View className='opacity-90 justify-end items-center'>
                    <TouchableOpacity 
                        onPress={()=>{fromTokenSelected.value=1}}
                        className='h-12 w-48 justify-center 
                            bg-transparent 
                            items-center rounded-full relative -bottom-3'>
                        <ChevronUpIcon color={'black'} size={30}/>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </Animated.View>
        {/*Hidden top*/}
        <Animated.View 
            style={inputFormAnimatedStyleBegin}
            className='absolute -z-10 bottom-0 h-[70%] pt-16 w-full justify-center items-center'>
            <TextInput
                className='text-white text-2xl text-center h-12 border-1 w-40 bg-transparent border-gray-50 mx-8 my-2 rounded-xl'
                placeholder='Amount'
                placeholderTextColor='gray'
                underlineColorAndroid='gray'
                keyboardType = 'numeric'
                textAlign='center'
            />
            <RecapButton/>
      </Animated.View>
    </SafeAreaView>
    </>
    )
}

export default TokenScreen