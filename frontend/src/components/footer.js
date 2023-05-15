import React from 'react';
import { View, Text, Image, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = ({ navigation, id }) => {
    
    return (
        <View className="flex flex-row bg-white rounded-t-xl items-center justify-rounded">
            <Pressable onPress={() => navigation.navigate("Home")} className={"flex flex-col items-center mx-4 py-2 space-y-1 " + (id===1? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="home" size={25} color={id === 1? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 1? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Trang chủ</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Notification")} className={'flex flex-col items-center mx-4 py-2  space-y-1 '+ (id===2? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="bell" size={25} color={id === 2? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 2? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Thông báo</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("MyTicket")} className={'flex flex-col items-center mx-4 py-2  space-y-1 '+ (id===3? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="ticket-alt" size={25} color={id === 3? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 3? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Vé của tôi</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Profile")} className={'flex flex-col items-center mx-4 py-2  space-y-1 '+ (id===4? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="user" size={25} color={id === 4? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 4? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Cá nhân</Text>
            </Pressable>
        </View>
    );
}

export default Footer;
