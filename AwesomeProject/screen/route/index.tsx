import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {AppRegistry, Text, View, Image, StyleSheet} from 'react-native';
import { name as appName } from '../../app.json'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 생성한 화면을 Import 해주세요.
import Home from "../View/Home";
import Class from '../View/Class';
import Post from '../View/Post';
import Chat from '../View/Chat';
import Profile from '../View/Profile';
import Main from '../View/Main';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 아래부분에서 <Stack.Screen /> 부분을 import 한 부분에 맞춰서 추가해주시면 됩니다.
export default function Navigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
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
                     source={focused ? require("../assets/Home_active.png") : require("../assets/Home_inactive.png")} 
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
                     source={focused ? require("../assets/Class_active.png") : require("../assets/Class_inactive.png")} 
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
                     source={focused ? require("../assets/Post_active.png") : require("../assets/Post_inactive.png")} 
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
                     source={focused ? require("../assets/Chat_active.png") : require("../assets/Chat_inactive.png")} 
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
                     source={focused ? require("../assets/Profile_active.png") : require("../assets/Profile_inactive.png")} 
                     style = {{width : 30, height : 30}}
                     />
                  )
                }
              }}/>
         </Tab.Navigator>
    </NavigationContainer>
  );
}