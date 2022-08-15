import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WaitingScreen from './screens/WaitingScreen';
import TokenScreen from './screens/TokenScreen';
import { store } from './store';
import { Provider } from 'react-redux'
import DoneScreen from './screens/DoneScreen';
import RecapScreen from './screens/RecapScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WalletScreen from './screens/WalletScreen';
import AssetsStackScreen from './screens/AssetsStackScreen';
import TabsStackScreen from './screens/TabsStackScreen';



export default function App() {
  
  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <AssetsStackScreen/>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
