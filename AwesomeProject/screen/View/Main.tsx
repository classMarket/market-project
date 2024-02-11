 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import {
   SafeAreaView,
   StyleSheet,
   View,
   TextInput,
   TouchableOpacity,
   Text,
   Platform,
   Dimensions,
   NativeModules,
 } from 'react-native';
 
 export default function Main({navigation} : any) {
 
    const [sample_param_A, setSampleParamA] = useState('')
    const [sample_param_B, setSampleParamB] = useState('')

    const headers = {
      'Accept': 'application/json',
      'Content-Type' : 'application/json; charset=UTF-8'
    }
    useEffect(() => {
        console.log("렌더링 시 한번만 실행 Platform : " + Platform.OS)
    }, []);


    //axios get 연결 테스트
    const getTest = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts', {
      }).then((response) => {
        // 테스트 데이터가 너무 많아서 한컬럼만 호출 합니다.
        console.log(response.data[0].userId)
        console.log(response.data[0].id)
        console.log(response.data[0].title)
        console.log(response.data[0].body)

        setSampleParamA(response.data[0].userId)
        setSampleParamB(response.data[0].id)
      }).catch((error) => {
        console.log(error)
      })
    }

    //axios post 연결 테스트
    const postTest = (title : String, body : String, userId : Number) => {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
             // 파라미터 부분
            title : title,
            body : body,
            userId : userId
        }, {
            headers : headers
        }).then((response) => {
          console.log(response.data)
          setSampleParamA(response.data.title)
          setSampleParamB(response.data.body)
        }).catch((error) => {
            console.log(error)
        })
    }
    
    return (
          <SafeAreaView style={styles.SafeAreaView}>
              <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.touchBtn} onPress={getTest}>
                      <Text style={styles.touchBtnText}>Get Test</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.touchBtn} onPress={() => postTest('Post 테스트', 'Rest API Test Call', 1)}>
                      <Text style={styles.touchBtnText}>Post Test</Text>
                  </TouchableOpacity>
                  <Text style={styles.resultFiled}>{sample_param_A}</Text>
                  <Text style={styles.resultFiled}>{sample_param_B}</Text>

                  {/* 아래 Navigation Test 버튼 눌렀을 때 파라미터 두개 SignIn 페이지로 넘깁니다. */}
                  {/* 파라미터는 GetTest, PostTest 를 통해서 세팅하는거로 해놓았습니다. */}
                  <TouchableOpacity style={styles.nextBtn} onPress = {() => navigation.navigate("SignIn", {param_1 : sample_param_A, param_2 : sample_param_B})}>
                      <Text style={styles.nextBtnText}>Navigation Test</Text>
                  </TouchableOpacity>
              </View>
          </SafeAreaView>
    );
}
 
 const styles = StyleSheet.create({
    SampleStyle : {
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    SafeAreaView : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    buttonView: {
        margin: 12,
        width: Dimensions.get("window").width - 100
    },
    touchBtn: {
        height: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    touchBtnText: {
        color: 'white'
    },
    resultFiled : {
        textAlign: 'center',
        fontSize: 20,
        marginTop : 20,
        color : 'black'
    },
    nextBtn : {
        height: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    nextBtnText : {
        color : 'white'
    },
    image: {
        borderColor: 'gray',
        borderWidth: 1,
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
    }
 })