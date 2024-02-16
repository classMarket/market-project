import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { name as appName } from './app.json'
import Main from './screen/View/Main';
import BottomTab from './screen/View/Tab/BottomTab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options= {
          {
            headerShown : false
          }
        }/>
        <Stack.Screen name="Tabs" component={BottomTab} options={
          {
            // headerShown : false
          }
        } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
