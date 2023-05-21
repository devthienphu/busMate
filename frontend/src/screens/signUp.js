import React, {useEffect,useState, useRef, useLayoutEffect} from 'react';
import { View, Text, Image, TextInput, Pressable,Animated } from "react-native";
import { useIsFocused } from '@react-navigation/native';

import logo from "../imgs/logo.png";
import styles from "../style";
import { signUp } from '../api/userApi';

const reg = [
    {
        name:'userName',
        placeholder:'Tên tài khoản',
        isHidden: false

    },
    {
        name:'contact',
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
        name:'re_password',
        placeholder:'Xác nhận mật khẩu',
        isHidden: true
    }
]

const SignUp = ({ navigation }) => {
    const [formValue, setFormValue] = useState({userName:'', email:'', contact:'', password:'', re_password:''})
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

    const handleHide = async (navigation) => {
        if (formValue.password !== '' && formValue.re_password !=='' && formValue.password === formValue.re_password)
        {
            formValue.re_password = undefined
            const res = await signUp(formValue)
            // console.log(res)
            if (res && res._id) {
                Animated.timing(translateY, {
                    toValue: 500,
                    duration: 200,
                    useNativeDriver: true
                }).start(() => navigation.navigate("Home"));   
            }
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
        <Image source={logo} className="w-32 h-32 mx-auto mt-10"></Image>
        <View className="z-10">
        
        <Animated.View style={{ transform: [{ translateY }] }} 
        className="flex flex-col " >
            {/* Input */}
            <View className="flex flex-col gap-y-4 mt-10">
                {
                    reg.map((field,key)=>(
                        <TextInput
                            onChange={event => handleChange(event, field.name)}
                            key={key}
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
                onPress={() => handleHide(navigation)}
            >
            <Text style={{fontFamily: 'Poppins-Bold'}} className="text-white text-2xl text-center">
                Đăng ký
            </Text>
            </Pressable>     

            <View className="flex flex-row gap-x-1 items-center mx-auto pt-5">
            <Text style={{fontFamily:'Poppins-Regular'}} className="text-sm">Đã có tài khoản?</Text>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <Text style={{fontFamily:'Poppins-BoldItalic'}}>
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
