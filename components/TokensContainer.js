import React from 'react'
import { View } from 'react-native'
import TokenCard from './TokenCard'
import { tokens } from '../data/tokens'

function TokensContainer() {
  return (
    <View className='pt-4'>
        {Object.keys(tokens).map((t)=>{
            return <TokenCard key={t} token={t}/>
        })}
    </View>
  )
}

export default TokensContainer