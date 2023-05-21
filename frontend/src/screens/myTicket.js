import { useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, ScrollView, Text, View, Modal, Pressable } from "react-native"
import { BlurView } from 'expo-blur';
import Header from "../components/header"
import Footer from "../components/footer"
import success from '../imgs/ticket/success.png'
import waiting from '../imgs/ticket/waiting.png'
import style from '../style';
import { getMyTicket } from '../api/ticketApi';

const MyTicket = ({navigation}) => {
    const [ticketModal, setticketModal] = useState(false)
    const [myTicket,setMyTicket] = useState([])
    const [load, setLoad] = useState(true)
    useEffect(()=>{
        (async () => {
            setLoad(true)
            const token = await AsyncStorage.getItem('user')
            const res = await getMyTicket(token);
            
            setLoad(false)
        })()      
    },[])
    return (
        <View className="flex flex-col h-full justify-between bg-[#f9f9f9]">
            <View>
                <Header navigation={navigation} title='Vé của tôi' />

                <View className='my-8 mx-8'>
                    <Text style={{fontFamily:'Poppins-Bold'}} className='text-lg'>Lịch sử mua vé</Text>

                    <ScrollView className='my-4'>
                        <View className='space-y-4'>
                            <Pressable onPress={() => setticketModal(!ticketModal)} className='px-4 rounded-2xl border border-[#57DDA6]'>
                                <View className='flex flex-row items-center justify-between'>
                                    <View className='w-[3/5] space-y-1'>
                                        <Text className='text-sm' style={{fontFamily:'Poppins-Regular'}}>Vé xe khách</Text>
                                        <Text className='text-lg' style={{fontFamily:'Poppins-Bold'}}>Trung Nga</Text>
                                        <Text className='text-base text-[#aaa]' numberOfLines={1} style={{fontFamily:'Poppins-Regular'}}>Phan Thiết - Sài Gòn</Text>
                                        <Text className='text-base text-[#aaa]' numberOfLines={1} style={{fontFamily:'Poppins-Regular'}}>14:00 24/04/2023</Text>
                                    </View>
                                    <Image source={success} className='scale-[0.4]'></Image>
                                </View>
                            </Pressable>

                            <View className='px-4 rounded-2xl border border-[#FFC046]'>
                                <View className='flex flex-row items-center justify-between'>
                                    <View className='w-[3/5] space-y-1'>
                                        <Text className='text-sm' style={{fontFamily:'Poppins-Regular'}}>Vé xe khách</Text>
                                        <Text className='text-lg' style={{fontFamily:'Poppins-Bold'}}>Trung Nga</Text>
                                        <Text className='text-base text-[#aaa]' numberOfLines={1} style={{fontFamily:'Poppins-Regular'}}>Phan Thiết - Sài Gòn</Text>
                                        <Text className='text-base text-[#aaa]' numberOfLines={1} style={{fontFamily:'Poppins-Regular'}}>14:00 24/04/2023</Text>
                                    </View>
                                    <Image source={waiting} className='scale-[0.4]'></Image>
                                </View>
                                <Text className='text-sm text-[#aaa] pb-4' numberOfLines={1} style={{fontFamily:'Poppins-Regular'}}>Chưa thanh toán thành công</Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={ticketModal}
                >
                    <View className="flex flex-col items-center bg-white rounded-2xl py-4 px-8 w-[90%] space-y-8 mx-auto my-auto" style={style.shadow}>
                        <View>
                            <Image source={success} className='w-20 h-20'></Image>
                        </View>
                        <Text style={{fontFamily:'Poppins-Bold'}} className='text-lg'>Đã thanh toán</Text>
                        <Text style={{fontFamily:'Poppins-Regular'}} className='text-base text-[#aaa]'>Vé xe khách Trung Nga</Text>
                            
                        <View className='w-full flex flex-row items-center justify-between pb-2 border-b border-[#ddd]'>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>Tên:</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>Nguyễn</Text>
                        </View>

                        <View className='w-full flex flex-row items-center justify-between pb-2 border-b border-[#ddd]'>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>Tuyến:</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>Phan Thiết - HCM</Text>
                        </View>

                        <View className='w-full flex flex-row items-center justify-between pb-2 border-b border-[#ddd]'>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>Số ghế:</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>A2D</Text>
                        </View>

                        <View className='w-full flex flex-row items-center justify-between pb-2 border-b border-[#ddd]'>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>Thời gian khởi hành:</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>14:00PM</Text>
                        </View>

                        <View className='w-full flex flex-row items-center justify-between pb-2 border-b border-[#ddd]'>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>Ngày khởi hành:</Text>
                            <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm'>24/04/2023</Text>
                        </View>

                        <Pressable onPress={()=>setticketModal(!ticketModal)} className="rounded-xl bg-[#60c6ff] px-16 py-2">
                            <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Đóng</Text>
                        </Pressable>

                    </View>

                </Modal>
            </View>

            <Footer navigation={navigation} id={3}/>

            {(ticketModal)
                && 
                <BlurView
                    tint="light"
                    intensity={100}
                    className='absolute w-full h-full z-20'
                />
            }
        </View>
    )
}

export default MyTicket