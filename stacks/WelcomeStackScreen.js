import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import DoneScreen from '../screens/DoneScreen';
import HomeScreen from '../screens/HomeScreen';
import RecapScreen from '../screens/RecapScreen';
import TabsStackScreen from './TabsStackScreen';
import TokenScreen from '../screens/TokenScreen';
import WaitingScreen from '../screens/WaitingScreen';
import AssetsStackScreen from './AssetsStackScreen';
import WalletScreen from '../screens/WelcomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

function WelcomeStackScreen() {

    const AssetsStack = createNativeStackNavigator();
    return (
        <AssetsStack.Navigator>
            <AssetsStack.Screen 
                name='Done' 
                component={WelcomeScreen}
                options={{presentation:'fullScreenModal', headerShown: false}}
            />
            <AssetsStack.Screen 
                name="Home" 
                component={AssetsStackScreen} 
                options={{presentation:'fullScreenModal', headerShown: false}}
            />
        </AssetsStack.Navigator>
    );
}

export default WelcomeStackScreen