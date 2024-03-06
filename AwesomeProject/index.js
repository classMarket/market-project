import React from 'react';
import {AppRegistry} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {name as appName} from './app.json';
import SignIn from './screen/View/SignIn';
import BottomTab from './screen/View/Tab/BottomTab';
import ProfileDetail from './screen/View/Profile/ProfileDetail';
import {ProfileProvider} from './screen/View/Profile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="프로필상세"
          component={ProfileDetail}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AppWithProvider() {
  return (
    <ProfileProvider>
      <App />
    </ProfileProvider>
  );
}

AppRegistry.registerComponent(appName, () => AppWithProvider);
