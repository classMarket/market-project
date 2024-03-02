import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

export default function Chat({navigation, route} : any) {

    useEffect(() => {
        console.log("채팅 Page Call")
    }, []);


    return (
            <SafeAreaView style={styles.SafeAreaView}>
                <Text style={styles.text}>채팅 페이지</Text>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
   SafeAreaView : {
       flex: 1,
       justifyContent: 'center', 
       alignItems: 'center',
   },
   text: {
       color: 'black'
   },
})