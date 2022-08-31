import { View, Text, Image, StatusBar, Dimensions, SafeAreaView } from 'react-native'
import {React, useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { DataProvider } from '../utils/DataProvider'
import TokensCarousel from '../components/TokensCarousel'
import { useState } from 'react'
import { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated,{ interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { ArrowLeftIcon, ArrowRightIcon, ChevronUpIcon} from 'react-native-heroicons/outline'
import { tokens } from '../data/tokens'
import { TextInput } from 'react-native'
import RecapButton from '../components/RecapButton'
import { useDispatch } from 'react-redux'
import { addPurchase, resetPurchase } from '../features/purchaseSlice'

const TokenScreen = () => {
    const navigation = useNavigation()
    const {height, width} = Dimensions.get('window')
    const [fromToken, setFromToken] = useState(0)
    const [showTokenFrom, setShowTokenFrom] = useState(false)
    const fromTokenSelected = useSharedValue(0)
    const dispatch = useDispatch();
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

    const handleTokenFromSelected = () =>{
        fromTokenSelected.value = 1
        setTimeout(() => {
            setShowTokenFrom(true)
        }, 2000);
    }

    const handleAddPurchase = (value)=>{
        if(value===''){
            dispatch(resetPurchase())
            return
        }
        dispatch(addPurchase({
            fromToken: tokens[fromToken][1]?.name,
            toToken: tokenName,
            fromAmount: value,
            toAmount: parseFloat((value/310).toFixed(2))
        }))
    }

    const tokenImageAnimatedStyle = useAnimatedStyle(()=>{
        const scaleInterp = interpolate(fromTokenSelected.value, [0,1], [1,5/6])
        return {
            transform: [
            {
                scale: withDelay(500,withTiming(scaleInterp, {duration: 1000}))
            }],
        }
    })

    const tokenFromAnimatedStyle = useAnimatedStyle(()=>{
        const interpolation = interpolate(fromTokenSelected.value, [0,1], [0,1])
        return {
            opacity: withDelay(2000,withTiming(interpolation, {duration:500})),
            visibility: 'visible'
        }
    })

    const tokenInfoAnimatedStyle = useAnimatedStyle(()=>{
        const interpolation = interpolate(fromTokenSelected.value, [0,1], [1,0])
        return {
            opacity: withTiming(interpolation, {duration:500})
        }
    })

    const carouselBottomAnimatedStyle = useAnimatedStyle(()=>{
        const scaleInterp = interpolate(fromTokenSelected.value, [0,1], [0, height/2])
        const interpolation = interpolate(fromTokenSelected.value, [0,1], [1,0])
        return {
            opacity: withDelay(0,withTiming(interpolation, {duration: 500}))
        }
    })

    const amountInputAnimatedStyle = useAnimatedStyle(()=>{
        const interpolation = interpolate(fromTokenSelected.value, [0,1], [height,2/3*height-50])
        return {
            transform: [{
                translateY: withTiming(interpolation, {duration: 2000})
            }]
        }
    })

    return (
    <>
    <SafeAreaView className='h-full bg-[#ffffff]'>
        <StatusBar
          backgroundColor='#ffffff'
          barStyle={'dark-content'}
          />
        {/*Visible top*/}
        <Animated.View 
            style={[{height: height}]}
            className='absolute pt-16 pb-8 overflow-hidden bg-[#ffffff]]' 
            >
            <TouchableOpacity
                onPress={navigation.goBack}
                className='absolute left-9 p-2 bg-white rounded-full'>
                <ArrowLeftIcon size={20} color='#060d37'></ArrowLeftIcon>
            </TouchableOpacity>
            <Animated.View className='h-full' style={[]}>
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
                               items-center flex-row flex-1'>
                    <Animated.View className='mr-2 h-24' style={[tokenInfoAnimatedStyle]}>
                        <Text className='text-right h-1/3 font-bold text-sm opacity-70 text-black'>$ {price}</Text>
                        <Text className='text-right h-1/3 font-bold text-sm opacity-70 text-black'>{inWallet} in wallet</Text>
                        <Text className='text-right h-1/3 font-bold text-sm opacity-70 text-black'>200k volume</Text>
                    </Animated.View>
                    <View className='flex-row justify-center items-center'>
                        {(showTokenFrom)&&<Animated.View 
                            className='opacity-0 flex-row justify-center items-center'
                            style={[tokenFromAnimatedStyle]}
                        >
                            <Image
                                source={{
                                    uri: fromToken !== null ? tokens[fromToken][1]?.imageUrl : null
                                }}
                                className='h-20 w-20 rounded-sm mb-1 mt-2 mr-1'
                            />
                            <ArrowRightIcon color={'black'} size={24}></ArrowRightIcon>
                        </Animated.View>}
                        <Animated.Image
                        style={[tokenImageAnimatedStyle]}
                        source={{
                            uri: imageUrl
                        }}
                        className='h-24 w-24 
                        rounded-sm'
                        />
                    </View>
                    <Animated.View className='ml-2 h-24' style={[tokenInfoAnimatedStyle]}>
                        <Text className='text-left h-1/3 font-bold text-sm opacity-70 text-black'>+4.3% in 24h</Text>
                        <Text className='text-left h-1/3 font-bold text-sm opacity-70 text-black'>-2.3% in 30d</Text>
                        <Text className='text-left h-1/3 font-bold text-sm opacity-70 text-black'>-10% in 90d</Text>
                    </Animated.View>
                </View>
                <Animated.View style={[carouselBottomAnimatedStyle]}>
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
                            onPress={handleTokenFromSelected}
                            className='h-12 w-48 justify-center 
                                bg-transparent 
                                items-center rounded-full relative -bottom-3'>
                            <ChevronUpIcon color={'black'} size={30}/>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
        </Animated.View>
        <Animated.View style={[amountInputAnimatedStyle]}
            className='h-1/6'>
            <View className='justify-center'>
                <Text className=' text-black pb-4 text-center text-xl'>
                    How much do you want to spend?
                </Text>
            </View>
            <View className='flex-1'/>
            <TextInput
                className='text-4xl mx-16 text-center'
                placeholder="Amount"
                keyboardType="numeric"
                style={{
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1,
                    outline: 'none'
                    }}
                onChangeText={handleAddPurchase}
            />
        </Animated.View>
        <RecapButton/>          
    </SafeAreaView>
    </>
    )
}

export default TokenScreen