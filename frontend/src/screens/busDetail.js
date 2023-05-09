import React from 'react';
import {useState} from 'react'
import { View, Text, Modal, TextInput, Pressable,ScrollView,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps'

import Search from '../components/search';
import avatar from '../imgs/avatar.png'

const BusDetail = ({navigation}) => {
    const [busModal, setBusModal] = useState(false);
    const [ratingModal, setRatingModal] = useState(false);


    const onRegionChange=(region)=>{
        console.log(region)
    }
    return (
       <View className="h-full">
            <Pressable onPress={() => navigation.navigate('Home')} className="bg-[#ace6fd] h-[70px] px-4 py-2">
                <View className="pt-6">
                    <Icon name="arrow-left" size={25} light></Icon>
                </View>
            </Pressable>
            
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
                    <Pressable onPress={()=>setBusModal(!busModal)} className="flex flex-row justify-between border border-[#9adbfe] bg-white p-2 rounded-xl px-4 items-center">
                        <Text className="text-lg">Bến xe quận 8</Text>
                        <Text className="text-lg font-bold">1 phút</Text>
                    </Pressable>

                </ScrollView>
                
            </View>

            {/* Modal bus information*/}
            <Modal
                animationType="slide"
                transparent={true}
                visible={busModal}
            >
                <View className="mt-20 flex flex-col p-6 mx-4 bg-white rounded-2xl border border-[#60c6ff] border-2 items-center">
                    <Text className="font-black text-3xl text-center">Thông tin</Text>
                    <ScrollView className="pt-4">
                        <View className="flex flex-col gap-y-2">
                            <Text>Tên tuyến: Bến xe Quận 8 – Đại học Quốc Gia</Text>
                            <Text>Đơn vị vận tải: Xe buýt Quyết Thắng</Text>
                            <Text>Số tuyến: 08</Text>
                            <Text>Loại hình hoạt động: phổ thông có trợ giá</Text>
                            <Text>Loại xe: 39 – 80 chỗ</Text>
                            <Text>Khoảng cách: 23,25km</Text>
                            <Text>Điểm cuối: Đại học Quốc Gia</Text>
                            <Text>Số tuyến mỗi ngày: 360 chuyến/ngày</Text>
                            <Text>Thời gian hoạt động của xe bus 08: Khởi hành: 4h40 – Kết thúc: 20h30</Text>
                            <Text>Tần suất xe chạy: 2 – 15 phút/lượt</Text>
                            <Text>Thời gian chuyến: 60 – 80 phút</Text>
                            <Text>Giá Vé lượt: 7.000VNĐ</Text>
                            <Text>Giá Vé tháng: 135.000VNĐ</Text>

                            

                        </View>
                    </ScrollView>
                    <View className="flex flex-row flex-wrap gap-x-4">
                        <Pressable onPress={()=>setBusModal(!busModal)} className="rounded-xl bg-[#60c6ff] px-8 py-2 mt-4">
                            <Text className="text-white font-bold text-2xl text-center">Đóng</Text>
                        </Pressable>

                        <Pressable onPress={()=>{setBusModal(!busModal);setRatingModal(!ratingModal)}} className="rounded-xl bg-[#ffc046] px-6 py-2 mt-4">
                            <Text className="text-white font-bold text-2xl text-center">Đánh giá</Text>
                        </Pressable>
                    </View>
                    

                </View>

            </Modal>

            {/* Modal rating */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={ratingModal}
            >
                <View className="mt-28 flex flex-col p-6 mx-4 bg-white rounded-2xl border border-[#60c6ff] border-2 items-center">
                    <Text className="font-black text-3xl text-center">Đánh giá</Text>
                    <View className="flex flex-row gap-x-3 py-2">
                        <Icon name="star" size={35} color="#ffc046"></Icon>
                        <Icon name="star" size={35} color="#ffc046"></Icon>
                        <Icon name="star" size={35} color="#ffc046"></Icon>
                        <Icon name="star" size={35} color="#ffc046"></Icon>
                        <Icon name="star" size={35} color="#ffc046"></Icon>
                    </View>

                    <View className="w-full">
                        <TextInput 
                            className="rounded-2xl border border-[#60c6ff] border-2 px-4 w-full" 
                            placeholder="Đánh giá của bạn"
                            multiline
                            numberOfLines={4}   
                        >
                        </TextInput>
                        <Pressable onPress={()=>setRatingModal(!ratingModal)} className="absolute bottom-[-12px] right-[-12px] rounded-full bg-[#60c6ff] p-2 mt-4 items-center mx-auto">
                            <Icon name="paper-plane" size={25} color="#ffffff"></Icon>
                        </Pressable>
                    </View>
                    

                    {/* comments */}
                    <ScrollView className="w-full flex flex-col space-y-2">
                        
                        <View className="bg-[#f9f9f9] rounded-2xl flex flex-row px-2 space-x-2 mt-4 py-3 border border-gray-300">
                            <Image source={avatar} className="w-16 h-16"></Image>
                            <View className="flex flex-col">
                                <Text className="font-black text-lg">User 1</Text>
                                <Text className="font-light text-gray-500">Chạy hơi nhanh</Text>
                            </View>
                            <View className="flex flex-col gap-y-2">
                                <View className="flex flex-row">
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                </View>
                                <Text className="font-semibold text-right">4.5</Text>
                            </View>
                        </View>

                        <View className="bg-[#f9f9f9] rounded-2xl flex flex-row px-2 space-x-2 mt-4 py-3 border border-gray-300">
                            <Image source={avatar} className="w-16 h-16"></Image>
                            <View className="flex flex-col">
                                <Text className="font-black text-lg">User 1</Text>
                                <Text className="font-light text-gray-500">Chạy hơi nhanh</Text>
                            </View>
                            <View className="flex flex-col gap-y-2">
                                <View className="flex flex-row">
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                </View>
                                <Text className="font-semibold text-right">4.5</Text>
                            </View>
                        </View>
                    </ScrollView>
                    

                </View>
            </Modal>
            
       </View>
    );
}

export default BusDetail;
