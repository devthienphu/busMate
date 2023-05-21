import React, {useState, useLayoutEffect} from 'react';
import { View, Text, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = ({ navigation, id }) => {
    const [token, setToken] = useState(null)
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
        (async () => {
            if (isFocused)
            {
                const res = await AsyncStorage.getItem('user')
                if (typeof res === 'string')
                    setToken(res)
                else 
                    setToken(null)
            }
        })()        
    }, [isFocused])
    
    return (
        <View className="flex flex-row bg-white rounded-t-xl items-center justify-rounded">
            <Pressable onPress={() => navigation.navigate("Home")} className={"flex flex-col items-center mx-4 py-2 space-y-1 " + (id===1? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="home" size={25} color={id === 1? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 1? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Trang chủ</Text>
            </Pressable>

            <Pressable onPress={() => token? navigation.navigate("Notification") : navigation.navigate("SignIn")} className={'flex flex-col items-center mx-4 py-2  space-y-1 '+ (id===2? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="bell" size={25} color={id === 2? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 2? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Thông báo</Text>
            </Pressable>

            <Pressable onPress={() => token? navigation.navigate("MyTicket") : navigation.navigate("SignIn")} className={'flex flex-col items-center mx-4 py-2  space-y-1 '+ (id===3? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="ticket-alt" size={25} color={id === 3? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 3? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Vé của tôi</Text>
            </Pressable>

            <Pressable onPress={() => token? navigation.navigate("Profile") : navigation.navigate("SignIn")} className={'flex flex-col items-center mx-4 py-2  space-y-1 '+ (id===4? 'border-t-4 border-[#EF7474]':'')}>
                <Icon name="user" size={25} color={id === 4? "#EF7474":"#60c6ff"}></Icon>
                <Text style={{fontFamily:'Poppins-SemiBold'}} className={id === 4? "text-xs text-[#EF7474]":"text-xs text-[#60c6ff]"}>Cá nhân</Text>
            </Pressable>
        </View>
    );
}

export default Footer;
