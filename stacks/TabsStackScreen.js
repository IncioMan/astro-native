import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AssetDialectScreen from '../screens/AssetDialectScreen';
import WalletScreen from '../screens/WalletScreen';

function TabsStackScreen() {
    const Tab = createMaterialBottomTabNavigator();
  return (
      <Tab.Navigator
            initialRouteName="Assets"
            activeColor="#ffffff"
            inactiveColor="gray"
            labeled={true}
            barStyle={{ backgroundColor: '#060d37', height: 60 }}
          >
        <Tab.Screen 
        name='Wallet' 
        component={WalletScreen}
        options={{
                    tabBarLabel: 'Wallet',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="wallet" color={color} size={26} />
                    ),
                }}            
        />
        <Tab.Screen 
        name='Assets' 
        component={AssetDialectScreen}
        options={{
                    tabBarLabel: 'Assets',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="swap-vertical" color={color} size={26} />
                    ),
                }} 
        /> 
        <Tab.Screen 
        name='Pools' 
        component={WalletScreen}
        options={{
                    tabBarLabel: 'Pools',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="waves" color={color} size={26} />
                    ),
                }}            
        />
        <Tab.Screen 
        name='Governance' 
        component={WalletScreen}
        options={{
                    tabBarLabel: 'Governance',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="gavel" color={color} size={26} />
                    ),
                }}            
        />
    </Tab.Navigator>
  )
}

export default TabsStackScreen