/**
 * @format
 */
 import React from 'react';
 import {AppRegistry, Text, View, Image, StyleSheet} from 'react-native';
 import {name as appName} from './app.json';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 // 여기에 Router 설정을 위해서 추가한 화면을 import 시켜주세요
 import Home from './screen/View/Home';
 import Class from './screen/View/Class';
 import Post from './screen/View/Post';
 import Chat from './screen/View/Chat';
 import Profile from './screen/View/Profile';
 
 const Stack = createNativeStackNavigator();
 const Tab = createBottomTabNavigator();
 
 // 여기 부분에도 import한 파일에 맞춰서 스택 추가해주시면 됩니다.
 function App() {
     return (
       <NavigationContainer>
         <Tab.Navigator>
            <Tab.Screen name="홈" component={Home} options= {{
                tabBarLabel: ({focused, color}) => {
                  return (
                    <Text style={{color: focused ? 'black' : color}}>홈</Text>
                  )
                },
                tabBarIcon : ({focused}) => {
                  return (
                    <Image
                     source={focused ? require("./assets/Home_active.png") : require("./assets/Home_inactive.png")} 
                     style = {{width : 30, height : 30}}
                     />
                  )
                }
              }}/>
              <Tab.Screen name="모임" component={Class} options= {{
                tabBarLabel: ({focused, color}) => {
                  return (
                    <Text style={{color: focused ? 'black' : color}}>모임</Text>
                  )
                },
                tabBarIcon : ({focused}) => {
                  return (
                    <Image
                     source={focused ? require("./assets/Class_active.png") : require("./assets/Class_inactive.png")} 
                     style = {{width : 30, height : 30}}
                     />
                  )
                }
              }}/>
              <Tab.Screen name="등록" component={Post} options= {{
                tabBarLabel: ({focused, color}) => {
                  return (
                    <Text style={{color: focused ? 'black' : color}}>등록</Text>
                  )
                },
                tabBarIcon : ({focused}) => {
                  return (
                    <Image
                     source={focused ? require("./assets/Post_active.png") : require("./assets/Post_inactive.png")} 
                     style = {{width : 30, height : 30}}
                     />
                  )
                }
              }}/>
              <Tab.Screen name="채팅" component={Chat} options= {{
                tabBarLabel: ({focused, color}) => {
                  return (
                    <Text style={{color: focused ? 'black' : color}}>채팅</Text>
                  )
                },
                tabBarIcon : ({focused}) => {
                  return (
                    <Image
                     source={focused ? require("./assets/Chat_active.png") : require("./assets/Chat_inactive.png")} 
                     style = {{width : 30, height : 30}}
                     />
                  )
                }
              }}/>
              <Tab.Screen name="프로필" component={Profile} options= {{
                tabBarLabel: ({focused, color}) => {
                  return (
                    <Text style={{color: focused ? 'black' : color}}>프로필</Text>
                  )
                },
                tabBarIcon : ({focused}) => {
                  return (
                    <Image
                     source={focused ? require("./assets/Profile_active.png") : require("./assets/Profile_inactive.png")} 
                     style = {{width : 30, height : 30}}
                     />
                  )
                }
              }}/>
         </Tab.Navigator>
       </NavigationContainer>
     );
 }
 
 AppRegistry.registerComponent(appName, () => App);