import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import DoneScreen from './DoneScreen';
import HomeScreen from './HomeScreen';
import RecapScreen from './RecapScreen';
import TabsStackScreen from './TabsStackScreen';
import TokenScreen from './TokenScreen';
import WaitingScreen from './WaitingScreen';

function AssetsStackScreen() {

    const AssetsStack = createNativeStackNavigator();
    return (
        <AssetsStack.Navigator>
            <AssetsStack.Screen 
                name="Home" 
                component={TabsStackScreen} 
                options={{presentation:'fullScreenModal', headerShown: false}}
            />
            <AssetsStack.Screen 
                name='Done' 
                component={DoneScreen}
                options={{presentation:'fullScreenModal', headerShown: false}}
            />
            <AssetsStack.Screen 
                name='Token' 
                component={TokenScreen}
            />
            <AssetsStack.Screen 
                name='WaitingScreen' 
                component={WaitingScreen}
                options={{presentation:'fullScreenModal', headerShown: false}}
            />
            <AssetsStack.Screen 
                name='RecapScreen' 
                component={RecapScreen}
                options={{presentation:'modal', headerShown: false}}
            />
        </AssetsStack.Navigator>
    );
}

export default AssetsStackScreen