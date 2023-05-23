import React, { useState} from 'react';
import { View, Text, Pressable,Switch} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/header'
import Footer from "../components/footer"
const Security = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);

    return (
       <View className='flex flex-col h-full justify-between bg-[#f9f9f9]'>
            <View>
                <Header navigation={navigation} title = "Bảo mật"/>
                <View className='flex flex-row justify-between items-center px-6 pt-4'>
                    <View className='flex flex-col'>    
                        <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg font-bold">Bật bảo vệ 2 lớp</Text>
                        <Text style={{fontFamily:'Poppins-Regular'}} className="text-gray-500">Bật tính năng này để tăng cường bảo mật tài khoản</Text>
                    </View>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        value={isEnabled}
                        onValueChange={()=>setIsEnabled(!isEnabled)}
                    ></Switch>
                </View>
               
            </View>
            <Footer navigation={navigation} id={4}/>
       </View>
    );
}

export default Security;
