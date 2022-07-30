import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const CategoryRow = ({id, title, description}) => {
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
            <CategoryCard
                id='luna'
                tokenName='LUNA'
                tokenAddress='xxx'
                imageUrl='https://assets.terra.money/icon/svg/LUNA.png'
                price={'1.80'}
                dailyPerc={-12.4}
                description={'324k Volume'}
            />
            <CategoryCard
                id='astro'
                tokenName='ASTRO'
                tokenAddress='xxx'
                imageUrl='https://app.astroport.fi/tokens/astro.png'
                price={0.04}
                dailyPerc={+1.4}
                description={'120k Volume'}
            />
            <CategoryCard
                id='luna'
                tokenName='LUNA'
                tokenAddress='xxx'
                imageUrl='https://assets.terra.money/icon/svg/LUNA.png'
                price={1.80}
                dailyPerc={-12.4}
                description={'324k Volume'}
            />
            <CategoryCard
                id='luna'
                tokenName='LUNA'
                tokenAddress='xxx'
                imageUrl='https://assets.terra.money/icon/svg/LUNA.png'
                price={1.8}
                dailyPerc={-12.4}
                description={'324k Volume'}
            />
        </ScrollView>
    </View>
  )
}

export default CategoryRow