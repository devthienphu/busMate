import React from 'react';
import { View, Text, Image, TextInput, Pressable,Animated,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps'

import Search from '../components/search';

const BusDetail = () => {
    const onRegionChange=(region)=>{
        console.log(region)
    }
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

            
            {/* map */}
            <MapView 
                className="w-full h-full mt-[-22px]"
                // onRegionChange={onRegionChange}
                initialRegion={{
                    "latitude": 10.878832141931976, 
                    "latitudeDelta": 0.004954235495171488, 
                    "longitude": 106.80599564686418, 
                    "longitudeDelta": 0.002536363899707794}}
            ></MapView>

            {/* Route detail */}
            <View className="absolute bg-[#f9f9f9] rounded-t-3xl px-4 z-10 bottom-0 w-full pt-4 h-1/2 border border-[#9adbfe]">
                <View className="flex flex-row justify-between gap-x-3 items-center pb-5">
                    <Icon name="arrow-left" size={25} light ></Icon>
                    <Text className="font-black text-3xl">Trạm dừng</Text>
                    <Icon name="arrow-right" size={25} light ></Icon>
                </View>
            
                <ScrollView className="flex flex-col gap-y-3">
                    <Pressable className="flex flex-row justify-between border border-[#9adbfe] bg-white p-2 rounded-xl px-4 items-center">
                        <Text className="text-lg">Bến xe quận 8</Text>
                        <Text className="text-lg font-bold">1 phút</Text>
                    </Pressable>

                </ScrollView>
                
            </View>
            
       </View>
    );
}

export default BusDetail;
