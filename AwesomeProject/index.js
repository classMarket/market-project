/**
 * @format
 */

 import {AppRegistry, Text, View} from 'react-native';
 import {name as appName} from './app.json';
 
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from "@react-navigation/native-stack";

 // 여기에 Router 설정을 위해서 추가한 화면을 import 시켜주세요
 import Router_1 from './screen/View/Main';
 import Router_2 from './screen/View/SignIn'
 
 const Stack = createNativeStackNavigator();
 
 // 여기 부분에도 import한 파일에 맞춰서 스택 추가해주시면 됩니다.
 function App() {
     return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Main" component={Router_1}/>
           <Stack.Screen name="SignIn" component={Router_2}/>
         </Stack.Navigator>
       </NavigationContainer>
     );
 }
 
 AppRegistry.registerComponent(appName, () => App);