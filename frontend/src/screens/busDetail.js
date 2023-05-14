import React from 'react';
import {useState} from 'react'
import { BlurView } from 'expo-blur';
import { View, Text, Modal, TextInput, Pressable,ScrollView,Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps'
import Header from '../components/header'

import Search from '../components/search';
import avatar from '../imgs/avatar.png'

const BusDetail = ({navigation}) => {
    const [busModal, setBusModal] = useState(false);
    const [ratingModal, setRatingModal] = useState(false);

    return (
       <View className="h-full">
            <Header navigation={navigation}/>
            
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
            <View className="absolute bg-[#f9f9f9] rounded-t-3xl px-4 z-10 bottom-0 w-full pt-4 h-3/5 border border-[#9adbfe]">
                <View className="flex flex-row justify-between gap-x-3 items-center pb-5">
                    <Icon name="arrow-left" size={20}  ></Icon>
                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-3xl">Trạm dừng</Text>
                    <Icon name="arrow-right" size={20}  ></Icon>
                </View>
            
                <ScrollView>
                    <View className='flex flex-col gap-y-3'>
                        <Pressable onPress={() => setBusModal(!busModal)} className="flex flex-row justify-between border border-[#9adbfe] bg-white p-2 rounded-lg px-4 items-center">
                            <Text style={{fontFamily:'Poppins-Regular'}} className="text-base">Bến xe quận 8</Text>
                            <Text style={{fontFamily:'Poppins-SemiBold'}} className="text-base">1 phút</Text>
                        </Pressable>
                    </View>

                </ScrollView>
                
            </View>

            {/* Modal bus information*/}
            <Modal
                animationType="slide"
                transparent={true}
                visible={busModal}
            >
                <View className="mt-20 flex flex-col p-6 mx-4 bg-white rounded-2xl border border-[#60c6ff] border-2 items-center">
                <Text style={{fontFamily:'Poppins-Bold'}} className="text-3xl">Thông tin</Text>
                    <ScrollView className="pt-4">
                        <View className="flex flex-col gap-y-2">
                            <Text style={{fontFamily:'Poppins-Regular'}}>Tên tuyến: Bến xe Quận 8 – Đại học Quốc Gia</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Đơn vị vận tải: Xe buýt Quyết Thắng</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Số tuyến: 08</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Loại hình hoạt động: phổ thông có trợ giá</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Loại xe: 39 – 80 chỗ</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Khoảng cách: 23,25km</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Điểm cuối: Đại học Quốc Gia</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Số tuyến mỗi ngày: 360 chuyến/ngày</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Thời gian hoạt động của xe bus 08: Khởi hành: 4h40 – Kết thúc: 20h30</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Tần suất xe chạy: 2 – 15 phút/lượt</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Thời gian chuyến: 60 – 80 phút</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Giá Vé lượt: 7.000VNĐ</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}}>Giá Vé tháng: 135.000VNĐ</Text>

                            

                        </View>
                    </ScrollView>
                    <View className="flex flex-row flex-wrap gap-x-4">
                        <Pressable onPress={()=>setBusModal(!busModal)} className="rounded-xl bg-[#60c6ff] px-8 py-2 mt-4">
                            <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Đóng</Text>
                        </Pressable>

                        <Pressable onPress={()=>{setBusModal(!busModal);setRatingModal(!ratingModal)}} className="rounded-xl bg-[#ffc046] px-6 py-2 mt-4">
                            <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Đánh giá</Text>
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
                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-3xl">Đánh giá</Text>
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
                        
                        <View className="bg-[#f9f9f9] rounded-2xl flex flex-row items-center justify-between px-2 space-x-2 mt-4 py-3 px-4 border border-gray-300">
                            <View className='flex flex-row items-center space-x-4'>
                                <Image source={avatar} className="w-16 h-16"></Image>
                                <View className="flex flex-col">
                                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-lg">User 1</Text>
                                    <Text style={{fontFamily:'Poppins-Light'}} className="text-gray-500">Chạy hơi nhanh</Text>
                                </View>
                            </View>
                            <View className="flex flex-col gap-y-2">
                                <View className="flex flex-row">
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                    <Icon name="star" size={15} color="#ffc046"></Icon>
                                </View>
                                <Text style={{fontFamily:'Poppins-Light'}} className="font-semibold text-right">4.5</Text>
                            </View>
                        </View>
                    </ScrollView>
                    

                </View>
            </Modal>
            {(busModal || ratingModal)
                && 
                <BlurView
                    tint="light"
                    intensity={100}
                    className='absolute w-full h-full z-20'
                />
            }
       </View>
    );
}

export default BusDetail;
