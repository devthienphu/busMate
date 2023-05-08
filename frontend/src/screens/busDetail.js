import React from 'react';
import { View, Text, Image, TextInput, Pressable,Animated,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


import Search from '../components/search';

const BusDetail = () => {
    return (
       <View className="h-full">
            <View className="bg-[#ace6fd] h-[70px] px-4 py-2">
                <View className="pt-6">
                    <Icon name="arrow-left" size={25} light></Icon>
                </View>
            </View>
            
            {/* Search */}
            <View className="mt-[-40px] z-10">
                <Search/>   
            </View>
       </View>
    );
}

export default BusDetail;
