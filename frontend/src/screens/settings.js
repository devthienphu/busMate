import React, { useState} from 'react';
import { View, Text, Pressable,Switch} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Header from '../components/header'
import Footer from "../components/footer"
const Settings = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const logout = async (navigation) => {
        await AsyncStorage.removeItem('user')
        navigation.navigate('Home')
    }
    return (
        <View className='flex flex-col h-full justify-between bg-[#f9f9f9]'>
            <View>
                <Header navigation={navigation} title = "Cài đặt"/>
                <View className="flex flex-col gap-y-4 pt-4">

                    <Pressable onPress={()=>logout(navigation)} className="flex flex-row justify-between border-b border-gray-300 mx-6 pb-2">
                        <Text className="font-bold text-lg">Xóa bộ nhớ cache</Text>
                        <Text className="text-gray-500">13.81MB</Text>
                    </Pressable>

                    <View className='flex flex-row justify-between items-center px-6'>
                        <View className='flex flex-col'>    
                            <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg font-bold">Thông báo</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}} className="text-gray-500">Bật tắt thông báo</Text>
                        </View>

                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            value={isEnabled}
                            onValueChange={()=>setIsEnabled(!isEnabled)}
                        ></Switch>
                    </View>
                </View>
               
            </View>
            <Footer navigation={navigation} id={4}/>
       </View>
    );
}

export default Settings;
