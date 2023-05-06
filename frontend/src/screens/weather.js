import React from 'react';
import { View, Text,Image,Pressable } from 'react-native';
import Header from '../components/header';

const Weather = ({navigation}) => {
    return (
       <View className="bg-[#F9F9F9] h-full">
            <Header navigation={navigation} title = "Thời tiết hôm nay"/>
       </View>
    );
}

export default Weather;
