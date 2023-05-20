import React from 'react';
import { Text, View,Image,Pressable } from 'react-native';

import logo from '../imgs/logo.png'
import startBtn from '../imgs/onBoarding/startBtn.png'
import planet from '../imgs/onBoarding/planet.png'
import planet1 from '../imgs/onBoarding/planet1.png'

const OnBoarding = ({ navigation }) => {
    return (
        <View className ="bg-[#C8F2FE] h-full">
            <Image source={logo} className="w-72 h-72 mx-auto mt-10"></Image>
            <Text style={{ fontFamily: 'Poppins-BoldItalic' }} className="text-lg text-center">Bạn đồng hành trên mọi chuyến đi</Text>
            <Pressable onPress={() => navigation.navigate('Home')} className="z-10">
                <Image  source={startBtn} className="scale-50 ml-6 mt-[-50px] z-10"></Image>
            </Pressable>
            <View className="bg-white rounded-[150px] opacity-50 mt-[-220px] h-full ">
            </View>
            <Image source={planet} className="opacity-100 w-32 h-32 mt-[-700px] ml-4"></Image>
            <Image source={planet1} className="opacity-100 w-12 h-12 ml-72"></Image>
        </View>
    );
}

export default OnBoarding;
