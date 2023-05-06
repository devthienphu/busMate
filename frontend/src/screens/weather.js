import React from 'react';
import { View, Text,Image,Pressable,StatusBar,Animated  } from 'react-native';
import Header from '../components/header';
import circle from '../imgs/weather/circle.png'
import sun from '../imgs/weather/sun.png'
import moon from '../imgs/weather/moon.png'

const Weather = ({navigation}) => {
    const value = {
        location: "Kiên Giang",
        description: "Trời nắng nóng kéo dài",
        temperature: 30,
        humidity: 70
    }
    return (
       <View className="bg-[#F9F9F9] h-full">
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header navigation={navigation} title = "Thời tiết hôm nay"/>
            <View className="w-full h-1/3 flex-row flex justify-center content-center mt-10 mb-5">
                <Image source = {circle} className = "flex-1" style = {{ width: null, height: null, resizeMode: 'contain'}}/>
                <Image source = {sun} className = "absolute z-10 w-4/5 h-4/5 top-[20%] left-[25%]" />
            </View>
            <View className="">
                <Text className="font-bold text-4xl text-[#60C6FF] text-center">
                    {value.location}
                </Text>
                <Text className="font-bold text-5xl text-[#FFC95F] text-center ">
                    {value.temperature}°C
                </Text>
                <Text className="font-bold text-lg text-[#A0A7BA] text-center ">
                    {value.description}
                </Text>
                <Text className="font-bold text-lg text-[#A0A7BA] text-center ">
                    Nhiệt độ: {value.temperature}°C
                </Text>
                <Text className="font-bold text-lg text-[#A0A7BA] text-center ">
                    Độ ẩm: {value.humidity}%
                </Text>
            </View>
            <Image source={moon} className="h-2/3 -z-10 -mt-[200px]" style = {{ width: null, resizeMode: 'contain'}}/>

       </View>
    );
}

export default Weather;
