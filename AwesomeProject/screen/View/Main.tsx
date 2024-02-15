import React from 'react';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView, Dimensions, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Main({navigation} : any) {

    const kakaoSignIn = () => {
        console.log('KaKao Login')
    }

    const naverSignIn = () => {

    }

    const googleSignIn = () => {

    }
    
    return (
        <SafeAreaView style={styles.SafeAreaView}>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Tabs")}> */}
            <TouchableOpacity onPress={kakaoSignIn} style={styles.kakaoLoginBtn}>
                    <Image 
                    source={require('../../assets/Home_active.png')} />
                    <Text style={styles.text}>카카오로 로그인</Text>
                
            </TouchableOpacity>
            <TouchableOpacity onPress={naverSignIn} style={styles.naverLoginBtn}>
                    <Image 
                    source={require('../../assets/Home_active.png')} />
                    <Text style={styles.text}>네이버로  로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={googleSignIn} style={styles.googleLoginBtn}>
                    <Image 
                    source={require('../../assets/Home_active.png')} />
                    <Text style={styles.text}>구글로  로그인</Text>
            </TouchableOpacity>
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
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
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
