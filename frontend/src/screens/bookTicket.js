import { View, Image, TextInput, Pressable, Text, ScrollView } from "react-native"
import backBtn from '../imgs/icon/ArrowLeft.png'

import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import findIcon from '../imgs/route/findIcon.png'
import style from "../style";

const BookTicket = ({navigation}) => {
    return (
        <LinearGradient colors={['#C7F2FD', '#60C6FF']} start={[0, 0]} end={[1, 1]}>
            <View className ="mt-8 p-4 h-full">
                <Pressable onPress={() => navigation.goBack()} className="z-10 self-left">
                    <Image source={backBtn} className="w-8 h-8"></Image>
                </Pressable> 
                
                <TextInput style={{fontFamily:'Poppins-Regular', elevation:5}} className="py-2 px-2 bg-white rounded-xl px-4 py-2 my-2" placeholder="Đi từ:"/>
                <View className='relative'>
                    <TextInput style={{fontFamily:'Poppins-Regular', elevation:5}} className="py-2 px-2 bg-white rounded-xl px-4 py-2 my-2" placeholder="Đến:"/>
                    <Image source={findIcon} className='absolute -top-36 -right-28 scale-50 z-10'></Image>
                </View>
                <TextInput style={{fontFamily:'Poppins-Regular', elevation:5}} className="py-2 px-2 bg-white rounded-xl px-4 py-2 my-2" placeholder="Thời gian đi:"/>


                {/* Ticket detail */}
                <View className="absolute bg-[#f9f9f9] rounded-t-3xl px-4 z-10 bottom-0 w-screen pt-4 h-3/4 border border-[#9adbfe]">
                    <View className="flex flex-col justify-between items-center pb-5">
                        <Text style={{fontFamily:'Poppins-Bold'}} className="text-lg">Đề xuất từ Busmate</Text>
                    </View>

                    <ScrollView className='space-y-4'>
                        <View className='flex flex-col'>
                            <Pressable style={style.shadow} className="flex flex-col justify-between border border-[#9adbfe] bg-white p-2 rounded-2xl px-5 space-y-2">
                                <View className='flex flex-row items-center justify-between mb-4'>
                                    <Text style={{fontFamily:'Poppins-Bold'}} className='text-base'>Xe khách Phương Trang</Text>
                                    <Icon name="chevron-right" size={15}></Icon>
                                </View>

                                <View className='flex flex-row items-center justify-between'>
                                    <Text style={{fontFamily:'Poppins-Regular'}} className='text-base text-[#aaa]'>Phan Thiết - Sài Gòn</Text>
                                    <Text style={{fontFamily:'Poppins-Regular'}} className='text-base text-[#aaa]'>24/04</Text>
                                </View>

                                <View className='flex flex-row items-center justify-between'>
                                    <Text style={{fontFamily:'Poppins-SemiBold'}} className='text-base'>250.000VNĐ</Text>
                                    <Text style={{fontFamily:'Poppins-SemiBold'}} className='text-base'>3/40</Text>
                                </View>
                            </Pressable>
                        </View>
                        
                    </ScrollView>
                    
                </View>
            </View>
        </LinearGradient>
    )
}

export default BookTicket