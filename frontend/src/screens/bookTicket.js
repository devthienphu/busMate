import { View, Image, TextInput, Pressable, Text, ScrollView,ActivityIndicator,Modal } from "react-native"
import {useState, useEffect} from "react"
import { BlurView } from 'expo-blur';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import backBtn from '../imgs/icon/ArrowLeft.png'
import findIcon from '../imgs/route/findIcon.png'
import style from "../style";
import { getTicket,buyTicket } from "../api/ticketApi";

const BookTicket = ({navigation}) => {
    const [listTicket,setListTicket] = useState([])
    const [load, setLoad] = useState(true)
    const [keyword, setKeyword] = useState('')
    const [currentTicket, setCurrentTicket] = useState({});
    const [ticketModal,setTicketModal] = useState(false)

    const addTicket = async (id)=>{
        const token = await AsyncStorage.getItem('user')
        const res = await buyTicket(token,id)
    }

    useEffect(()=>{
        (async () => {
            setLoad(true)
            const res = await getTicket(keyword);
            setListTicket(res);
            setLoad(false)
        })()      
    },[])

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
                    
                    {
                        load?<ActivityIndicator size="large" />:listTicket.length?
                        <View className="h-[450px]">
                            <ScrollView className='flex flex-col gap-y-2 '>
                                {
                                    listTicket.map((ticket)=>(
                                        <Pressable key={ticket.name} onPress={()=>{setCurrentTicket(ticket);setTicketModal(!ticketModal)}} style={style.shadow} className="flex flex-col justify-between border border-[#9adbfe] bg-white p-2 rounded-2xl px-5 space-y-2">
                                            <View className='flex flex-row items-center justify-between mb-4'>
                                                <Text style={{fontFamily:'Poppins-Bold'}} className='text-base'>{ticket.name}</Text>
                                                <Icon name="chevron-right" size={15}></Icon>
                                            </View>

                                            <View className='flex flex-row items-center justify-between'>
                                                <Text style={{fontFamily:'Poppins-Regular'}} className='text-base text-[#aaa]'>{ticket.startPoint} - {ticket.destination}</Text>
                                                <Text style={{fontFamily:'Poppins-Regular'}} className='text-base text-[#aaa]'>{ticket.departTime}</Text>
                                            </View>

                                            <View className='flex flex-row items-center justify-between'>
                                                <Text style={{fontFamily:'Poppins-SemiBold'}} className='text-base'>{ticket.ticketPrice}.000VNĐ</Text>
                                                <Text style={{fontFamily:'Poppins-SemiBold'}} className='text-base'>{ticket.available}/{ticket.capacity}</Text>
                                            </View>
                                        </Pressable>
                                    ))
                                }                          
                            </ScrollView>
                        </View>
                        :
                        <Text className='text-xl' style={{fontFamily:'Poppins-SemiBold'}}>Không có tuyến xe phù hợp</Text>
                    }
                    
                    
                    
                    {/* buy ticket modal */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={ticketModal}
                    >
                        <View className="mt-20 flex flex-col p-6 mx-4 bg-white rounded-2xl border border-[#60c6ff] border-2 items-center">
                        <Text style={{fontFamily:'Poppins-Bold'}} className="text-3xl">Thông tin vé</Text>
                            <ScrollView className="pt-4 w-full">
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg">Nhà xe: {currentTicket.name}</Text>
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg">Điểm khởi hành: {currentTicket.startPoint}</Text>
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg">Đích đến: {currentTicket.destination}</Text>
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg">Thời gian khởi hành: {currentTicket.departTime}</Text>
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg">Giá vé: {currentTicket.ticketPrice}.000 VNĐ</Text>
                                <Text style={{fontFamily:'Poppins-Regular'}} className="text-lg">Số lượng vé còn lại: {currentTicket.available} vé</Text>

                            </ScrollView>
                            <View className="flex flex-row flex-wrap gap-x-4">
                                <Pressable onPress={()=>setTicketModal(!ticketModal)} className="rounded-xl bg-[#60c6ff] px-8 py-2 mt-4">
                                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Đóng</Text>
                                </Pressable>

                                <Pressable onPress={()=>{setTicketModal(!ticketModal);addTicket(currentTicket._id)}} className="rounded-xl bg-[#ffc046] px-6 py-2 mt-4">
                                    <Text style={{fontFamily:'Poppins-Bold'}} className="text-white text-2xl text-center">Mua vé</Text>
                                </Pressable>
                            </View>
                            

                        </View>

                    </Modal>
                </View>
            </View>
            {(ticketModal)
                && 
                <BlurView
                    tint="light"
                    intensity={100}
                    className='absolute w-full h-full z-20'
                />
            }
        </LinearGradient>
    )
}

export default BookTicket