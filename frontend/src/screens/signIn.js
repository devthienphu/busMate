import React, {useEffect,useState, useRef, useLayoutEffect} from 'react';
import { View, Text, Image, TextInput, Pressable,Animated } from "react-native";
import { useIsFocused } from '@react-navigation/native';

import logo from "../imgs/logo.png";
import styles from "../style";
import { signIn } from '../api/userApi';

const SignIn = ({ navigation }) => {
    const [formValue, setFormValue] = useState({email:'', password:''})
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

    const handleHide = async () => {
        const res = await signIn(formValue)
        // console.log(res)
        if (res && res._id) {
            Animated.timing(translateY, {
                toValue: 500,
                duration: 200,
                useNativeDriver: true
            }).start(() => navigation.navigate("Home"));   
        }
    }
    
    const handleChange = (event, name) => {
        setFormValue({
            ...formValue,
            [name]: event.nativeEvent.text
        })
    }

  return (
    <View className="bg-[#C8F2FE] h-full">
      <View className="z-10">
        <Image source={logo} className="w-56 h-56 mx-auto mt-10"></Image>
        
        <Animated.View style={{ transform: [{ translateY }] }} 
        className="flex flex-col " >

            {/* Input */}
            <View className="flex flex-col gap-y-4 mt-16">
            <TextInput
                onChange={event => handleChange(event, 'email')}
                className="bg-white rounded-2xl border border-gray-200 py-3 mx-12 px-4"
                placeholder="Tên tài khoản"
            ></TextInput>
            <TextInput
                onChange={event => handleChange(event, 'password')}
                className="bg-white rounded-2xl border border-gray-200 py-3 mx-12 px-4"
                placeholder="Mật khẩu"
                secureTextEntry={true}
            ></TextInput>
            </View>

            <Pressable
                className="bg-[#2F3039] rounded-2xl py-4 mx-12 px-4 mt-8"
                style={styles.innerShadow}
                onPress={()=>handleHide()}
            >
            <Text style={{fontFamily: 'Poppins-Bold'}} className="text-white text-2xl text-center">
                Đăng nhập
            </Text>
            </Pressable>     

            <View className="flex flex-row gap-x-1 items-center mx-auto pt-5">
                <Text style={{fontFamily:'Poppins-Regular'}} className="text-sm">Chưa có tài khoản?</Text>
                <Pressable onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{fontFamily:'Poppins-BoldItalic'}} className="text-sm text-[#441F62]">
                        Đăng ký ngay
                    </Text>
                </Pressable>
            </View>
            <Text style={{fontFamily:'Poppins-BoldItalic'}} className="text-sm text-[#441F62] text-center">
            Quên mật khẩu
            </Text>
        </Animated.View>
       
      </View>

      <View className="bg-white rounded-[150px] opacity-50 mt-[-350px] h-full "></View>
    </View>
  );
};

export default SignIn;
