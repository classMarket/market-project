import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

export default function SignIn({navigation, route} : any) {

    const [paramA , setParamA] = useState('')
    const [paramB, setParamB] = useState('')

    useEffect(() => {
        console.log("SignIn Page Call")
        if (route.params.param_1 != undefined || route.params.param_2 != undefined) {
            setParamA(route.params.param_1)
            setParamB(route.params.param_2)
        }
    }, []);


    return (
            <SafeAreaView style={styles.SafeAreaView}>
                <Text style={styles.text}>{paramA}</Text>
                <Text style={styles.text}>{paramB}</Text>
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