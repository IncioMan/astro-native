import React from 'react'
import { View } from 'react-native'
import FavoriteCard from './FavoriteCard'

function FavoritesContainer() {
  return (
    <View className='py-6 flex-row justify-between flex-wrap space-y-4 gap-4'>
        <FavoriteCard
            token='LUNA'
        />
        <FavoriteCard
            token='ASTRO'
        />
        <FavoriteCard
            token='KUJI'
        />
        <FavoriteCard
            token='ATOM'
        />
        <FavoriteCard
            token='PRISM'
        />
        <FavoriteCard
            token='NEB'
        />
    </View>
  )
}

export default FavoritesContainer