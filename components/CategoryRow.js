import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import { DataProvider } from '../utils/DataProvider'

const CategoryRow = ({id, title, description, tokens}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className='font-bold text-lg text-white'>{title}</Text>
        </View>

        <Text className='px-4 text-xs text-white'>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
        {/*Category Cards*/}
        {tokens.map((token)=>DataProvider.getToken(token)).map((token)=>(
            <CategoryCard
                key={token.name}
                id={token.name}
                tokenName={token.name}
                tokenAddress='xxx'
                imageUrl={token.imageUrl}
                price={token.price}
                dailyPerc={token.dailyPerc}
                description={token.description}
                volume={token.volume}
                inWallet={token.inWallet}
            />
        ))}
        </ScrollView>
    </View>
  )
}

export default CategoryRow