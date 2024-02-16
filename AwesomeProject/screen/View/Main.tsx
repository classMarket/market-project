import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView, Dimensions, Image, View } from 'react-native';
import  * as KakaoLogin from '@react-native-seoul/kakao-login';
import { KakaoOAuthToken, login } from '@react-native-seoul/kakao-login';

export default function Main({navigation} : any) {

    const [result , setResult] = useState('')

    const kakaoSignIn = () => {
        KakaoLogin.login().then((result) => {
            console.log("Login Success", JSON.stringify(result));
            getProfile();
        }).catch((error) => {
            if (error.code === 'E_CANCELLED_OPERATION') {
                console.log("Login Cancel", error.message);
            } else {
                console.log(`Login Fail(code:${error.code})`, error.message);
            }
        });
    }
    
    const signInWithKakao = async (): Promise<void> => {
        try {
            const token: KakaoOAuthToken = await login();
            console.log(token)
        } catch(error) {
            console.log(error)
        }
        // setResult(JSON.stringify(token));
      };

    const naverSignIn = () => {

    }

    const googleSignIn = () => {

    }
      
    const getProfile = () => {
        KakaoLogin.getProfile().then((result) => {
            console.log("GetProfile Success", JSON.stringify(result));
        }).catch((error) => {
            console.log(`GetProfile Fail(code:${error.code})`, error.message);
        });
    };
    
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Tabs")}> */}
            <Image source={require('../../assets/loginTopImg.png')} style={styles.loginTopImg}/>
            <Image source={require('../../assets/loginMiddleImg.png')} style={styles.loginMiddleImg}/>
            <Image source={require('../../assets/backgroundImg.png')} style={styles.backgroundImg}/>
            <View style={styles.btnStack}>
                <TouchableOpacity onPress={signInWithKakao} style={styles.kakaoLoginBtn}>
                    <View style={styles.loginView}>
                        <Image source={require('../../assets/KakaoImg.png')} />
                        <Text style={styles.text}>카카오로 로그인</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={naverSignIn} style={styles.naverLoginBtn}>
                    <View style={styles.loginView}> 
                        <Image source={require('../../assets/NaverImg.png')} />
                        <Text style={styles.text}>네이버로  로그인</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={googleSignIn} style={styles.googleLoginBtn}>
                    <View style={styles.loginView}> 
                        <Image source={require('../../assets/GoogleImg.png')} />
                        <Text style={styles.text}>구글로  로그인</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SafeAreaView : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor : 'white'
    },
    loginTopImg : {
        position : 'absolute',
        top : 200,
        left : 21
    },
    loginMiddleImg : {
        position : 'absolute',
        top : 300,
        right : 21
    },
    backgroundImg : {
        position : 'absolute',
        bottom : 0,
        left : 0
    },
    btnStack : {
        position : 'absolute',
        // top : 414,
        bottom : 180
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginLeft : 10
    },
    loginView : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    kakaoLoginBtn : {
        width : Dimensions.get("window").width - 30,
        height : 44,
        textAlign: 'center',
        backgroundColor : '#FFDB00',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : 10
    },
    naverLoginBtn : {
        width : Dimensions.get("window").width - 30,
        height : 44,
        textAlign: 'center',
        backgroundColor : '#03C75A',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 10,
        borderRadius : 10
    },
    googleLoginBtn : {
        width : Dimensions.get("window").width - 30,
        height : 44,
        textAlign: 'center',
        backgroundColor : '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 10,
        borderRadius : 10,
        
    }

    
});

