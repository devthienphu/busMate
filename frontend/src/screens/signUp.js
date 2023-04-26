import React, {useEffect,useState, useRef, useLayoutEffect} from 'react';
import { View, Text, Image, TextInput, Pressable,Animated } from "react-native";
import { useIsFocused } from '@react-navigation/native';

import logo from "../imgs/logo.png";
import styles from "../style";

const reg = [
    {
        name:'username',
        placeholder:'Tên tài khoản',
        isHidden: false

    },
    {
        name:'phone',
        placeholder:'Số điện thoại',
        isHidden: false
    },
    {
        name:'email',
        placeholder:'Email',
        isHidden: false
    },
    {
        name:'password',
        placeholder:'Mật khẩu',
        isHidden: true
    },
    {
        name:'re-password',
        placeholder:'Xác nhận mật khẩu',
        isHidden: true
    }
]

const SignUp = ({ navigation }) => {
    const isFocused = useIsFocused();
    const translateY = useRef(new Animated.Value(500)).current

    useLayoutEffect(() => {
        if (isFocused) {
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    }, [isFocused])

    useEffect(() => {
        if (!isFocused) {
            translateY.setValue(500)
        }
    }, [isFocused])

    const handleHide = () => {
        Animated.timing(translateY, {
            toValue: 500,
            duration: 200,
            useNativeDriver: true
        }).start(() => navigation.navigate("SignUp"));
    }

    return (
        <View className="bg-[#C8F2FE] h-full">
        <Image source={logo} className="w-32 h-32 mx-auto mt-10"></Image>
      <View className="z-10">
        
        <Animated.View style={{ transform: [{ translateY }] }} 
        className="flex flex-col " >
            {/* Input */}
            <View className="flex flex-col gap-y-4 mt-10">
                {
                    reg.map((field,key)=>(
                        <TextInput
                        className="bg-white rounded-2xl border border-gray-200 py-3 mx-12 px-4"
                        name={field.name}
                        placeholder={field.placeholder}
                        secureTextEntry={field.isHidden}
                        ></TextInput>
                    ))
                }
                
            </View>

            <Pressable
            className="bg-[#2F3039] rounded-2xl py-4 mx-12 px-4 mt-8"
            style={styles.innerShadow}
            onPress={handleHide}
            >
            <Text className="text-white text-2xl font-black text-center">
                Đăng ký
            </Text>
            </Pressable>     

            <View className="flex flex-row gap-x-1 items-center mx-auto pt-5">
            <Text className="text-lg">Dã có tài khoản?</Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <Text className="italic font-bold text-lg text-[#441F62]">
                    Đăng nhập
                </Text>
            </Pressable>
            
            </View>
        </Animated.View>
       
      </View>

      <View className="bg-white rounded-[150px] opacity-50 mt-[-550px] h-full "></View>
    </View>
    );
}

export default SignUp;
