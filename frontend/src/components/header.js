import React from 'react';
import { View,Image,Pressable,Text } from 'react-native';
import backBtn from '../imgs/icon/ArrowLeft.png'
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({navigation, title}) => {
    return (
        <LinearGradient colors={['#C7F2FD', '#60C6FF']} start={[0, 0]} end={[1, 1]}>
            <View className =" p-4 flex-row">
                <Pressable onPress={() => navigation.goBack()} className="z-10">
                    <Image  source={backBtn} className="w-8 h-8"></Image>
                </Pressable> 
                {title?                 
                <Text className="font-bold flex-grow text-center pt-1 text-white text-xl -ml-4">
                    {title}
                </Text>:""}

            </View>
        </LinearGradient>
    );
}

export default Header;
