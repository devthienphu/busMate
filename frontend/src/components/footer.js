import React from 'react';
import { View, Text, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = ({ navigation }) => {
    
    return (
        <View className="flex flex-row py-1 bg-white rounded-t-xl items-center justify-rounded">
            <View className="flex flex-col items-center px-4 py-2  space-y-1">
                <Icon name="home" size={25} color="#60c6ff"></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-[#60c6ff] text-xs">Trang chủ</Text>
            </View>

            <Pressable onPress={() => navigation.navigate("Notification")} className="flex flex-col items-center px-4 py-2  space-y-1">
                <Icon name="bell" size={25} color="#60c6ff"></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-[#60c6ff] text-xs">Thông báo</Text>
            </Pressable>

            <View className="flex flex-col items-center px-4 py-2  space-y-1">
                <Icon name="ticket-alt" size={25} color="#60c6ff"></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-[#60c6ff] text-xs">Vé của tôi</Text>
            </View>

            <View className="flex flex-col items-center px-4 py-2  space-y-1">
                <Icon name="user" size={25} color="#60c6ff"></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-[#60c6ff] text-xs">Cá nhân</Text>
            </View>
        </View>
    );
}

export default Footer;
