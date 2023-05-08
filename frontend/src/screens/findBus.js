import React from 'react';
import { View, Text, Image, TextInput, Pressable,Animated,ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Search from '../components/search';

const FindBus = ({navigation}) => {
    return (
        <View className=" h-full ">
            <View className="bg-[#ace6fd] h-[70px] px-4 py-2 pt-4">
                <Pressable onPress={() => navigation.navigate('Home')} className="pt-6">
                    <Icon name="arrow-left" size={25} light></Icon>
                </Pressable>
            </View>
            
            {/* Search */}
            <View className="mt-[-40px] z-10">
                <Search/>   
            </View>

            {/* Bus */} 
            <ScrollView className="mt-[-22px] bg-[#f9f9f9]">
                <View className="flex flex-row flex-wrap gap-4 items-center bg-[#f9f9f9] pt-12 px-2">
                    <Pressable onPress={() => navigation.navigate('BusDetail')} className="z-10 flex flex-col gap-y-1 rounded-2xl bg-white border py-3 px-6 mt-2 items-center text-center">
                        <Text className="font-bold text-xl">Tuyến xe 08</Text>
                        <Text className="text-gray-500">Bến xe quận 8- DHQG</Text>
                        <Text className="font-black text-[#60c6ff]">04:40 - 20:30</Text>
                        <View className="flex flex-row gap-x-2 items-center">
                            <View className="flex flew-row rounded-xl bg-[#fff4d8] px-2 py-1">
                                <Icon name="star" solid size={15} color="#ffc046">
                                    <Text className="font-bold text-black">3.2</Text>
                                </Icon>
                            </View>

                            <Icon name="dollar-sign" solid size={15} color="#ef7474">
                                <Text className="font-semibold text-gray-500">7k</Text>
                            </Icon>

                            <Icon name="heart" solid size={15} color="#ef7474"></Icon>

                        </View>
                    </Pressable>

                    <Pressable className="z-10 flex flex-col gap-y-1 rounded-2xl bg-white border py-3 px-6 mt-2 items-center text-center">
                        <Text className="font-bold text-xl">Tuyến xe 08</Text>
                        <Text className="text-gray-500">Bến xe quận 8- DHQG</Text>
                        <Text className="font-black text-[#60c6ff]">04:40 - 20:30</Text>
                        <View className="flex flex-row gap-x-2 items-center">
                            <View className="flex flew-row rounded-xl bg-[#fff4d8] px-2 py-1">
                                <Icon name="star" solid size={15} color="#ffc046">
                                    <Text className="font-bold text-black">3.2</Text>
                                </Icon>
                            </View>

                            <Icon name="dollar-sign" solid size={15} color="#ef7474">
                                <Text className="font-semibold text-gray-500">7k</Text>
                            </Icon>

                            <Icon name="heart" solid size={15} color="#ef7474"></Icon>

                        </View>
                    </Pressable>

                    <Pressable className="z-10 flex flex-col gap-y-1 rounded-2xl bg-white border py-3 px-6 mt-2 items-center text-center">
                        <Text className="font-bold text-xl">Tuyến xe 08</Text>
                        <Text className="text-gray-500">Bến xe quận 8- DHQG</Text>
                        <Text className="font-black text-[#60c6ff]">04:40 - 20:30</Text>
                        <View className="flex flex-row gap-x-2 items-center">
                            <View className="flex flew-row rounded-xl bg-[#fff4d8] px-2 py-1">
                                <Icon name="star" solid size={15} color="#ffc046">
                                    <Text className="font-bold text-black">3.2</Text>
                                </Icon>
                            </View>

                            <Icon name="dollar-sign" solid size={15} color="#ef7474">
                                <Text className="font-semibold text-gray-500">7k</Text>
                            </Icon>

                            <Icon name="heart" solid size={15} color="#ef7474"></Icon>

                        </View>
                    </Pressable>
                </View>
            </ScrollView>
           
        </View>
    );
}

export default FindBus;
