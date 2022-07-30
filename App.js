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

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Token' component={TokenScreen}/>
            <Stack.Screen 
              name='Done' component={DoneScreen}
              options={{presentation:'fullScreenModal', headerShown: false}}/>
            <Stack.Screen 
              name='WaitingScreen' 
              component={WaitingScreen}
              options={{presentation:'fullScreenModal', headerShown: false}}/>
          </Stack.Navigator>
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
