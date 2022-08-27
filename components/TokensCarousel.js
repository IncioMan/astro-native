import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { interpolate } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

function TokensCarousel({tokens, setFromToken}) {
    const width = Dimensions.get('window').width;
    tokens = tokens.map((t)=>t[1])
    const itemSize = 80;
    const centerOffset = width / 2 - itemSize / 2;


    const animationStyle = React.useCallback(
        (value) => {
            'worklet';

            const itemGap = interpolate(
                value,
                [-3, -2, -1, 0, 1, 2, 3],
                [-30, -15, 0, 0, 0, 15, 30]
            );

            const translateX =
                interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
                centerOffset - itemGap;

            const translateY = interpolate(
                value,
                [-1, -0.5, 0, 0.5, 1],
                [40, 35, 25, 35, 40]
            );

            const scale = interpolate(
                value,
                [-1, -0.5, 0, 0.5, 1],
                [0.7, 0.75, 1.3, 0.75, 0.7]
            );

            const opacity = interpolate(
                value,
                [-1, -0.5, 0, 0.5, 1],
                [0.6, 0.65, 1, 0.65, 0.6]
            );

            return {
                transform: [
                    {
                        translateX,
                    },
                    {
                        translateY,
                    },
                    { scale },
                ],
                opacity
            };
        },
        [centerOffset]
    );
    
    return (
    <Animated.View>
        <Carousel
            loop
            width={width/5}
            height={50}
            style={{
                width: width,
                height: 100
            }}
            data={tokens}
            onSnapToItem={(index) => setFromToken(index)}
            customAnimation={animationStyle}
            renderItem={({ index }) => (
                <TouchableOpacity 
                    className='radius-full justify-center items-center'>
                    <Image
                        source={{
                            uri: tokens[index].imageUrl
                        }}
                        className='h-12 w-12
                        rounded-sm mb-1 mt-2 mr-1'
                    />
                </TouchableOpacity>
            )}
        />
    </Animated.View>
  )
}

export default TokensCarousel

