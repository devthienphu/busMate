import React from 'react';
import { View, Text, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = () => {
    return (
        <View className="flex flex-row py-1 bg-white rounded-b-2xl items-center justify-center gap-x-2">
            <View className="flex flex-col gap-y-1 items-center px-4 py-1.5">
                <Icon name="home" size={30} color="#60c6ff"></Icon>
                <Text className="text-[#60c6ff] font-black ">Trang chủ</Text>
            </View>

            <View className="flex flex-col gap-y-1 items-center px-4 py-1.5">
                <Icon name="bell" size={30} color="#60c6ff"></Icon>
                <Text className="text-[#60c6ff] font-black ">Thông báo</Text>
            </View>

            <View className="flex flex-col gap-y-1 items-center px-4 py-1.5">
                <Icon name="ticket-alt" size={30} color="#60c6ff"></Icon>
                <Text className="text-[#60c6ff] font-black ">Vé của tôi</Text>
            </View>

            <View className="flex flex-col gap-y-1 items-center px-4 py-1.5">
                <Icon name="user" size={30} color="#60c6ff"></Icon>
                <Text className="text-[#60c6ff] font-black ">Cá nhân</Text>
            </View>
        </View>
    );
}

export default Footer;
