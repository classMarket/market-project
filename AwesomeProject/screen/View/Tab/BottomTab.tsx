import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import Home from '../Home';
import Class from '../Class';
import Post from '../Post';
import Chat from '../Chat';
import Profile from '../Profile';

const Tabs = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="홈"
        component={Home}
        options={{
          tabBarLabel: ({focused, color}) => {
            return <Text style={{color: focused ? 'black' : color}}>홈</Text>;
          },
          // 탭 아이콘 설정
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../../../assets/Home_active.png')
                    : require('../../../assets/Home_inactive.png')
                }
                style={{width: 30, height: 30}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="모임"
        component={Class}
        options={{
          tabBarLabel: ({focused, color}) => {
            return <Text style={{color: focused ? 'black' : color}}>모임</Text>;
          },
          // 탭 아이콘 설정
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../../../assets/Class_active.png')
                    : require('../../../assets/Class_inactive.png')
                }
                style={{width: 30, height: 30}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="등록"
        component={Post}
        options={{
          tabBarLabel: ({focused, color}) => {
            return <Text style={{color: focused ? 'black' : color}}>등록</Text>;
          },
          // 탭 아이콘 설정
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../../../assets/Post_active.png')
                    : require('../../../assets/Post_inactive.png')
                }
                style={{width: 30, height: 30}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="채팅"
        component={Chat}
        options={{
          tabBarLabel: ({focused, color}) => {
            return <Text style={{color: focused ? 'black' : color}}>채팅</Text>;
          },
          // 탭 아이콘 설정
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../../../assets/Chat_active.png')
                    : require('../../../assets/Chat_inactive.png')
                }
                style={{width: 30, height: 30}}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="프로필"
        component={Profile}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text style={{color: focused ? 'black' : color}}>프로필</Text>
            );
          },
          // 탭 아이콘 설정
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../../../assets/Profile_active.png')
                    : require('../../../assets/Profile_inactive.png')
                }
                style={{width: 30, height: 30}}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
