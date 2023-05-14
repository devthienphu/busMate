import { Image, ScrollView, Text, View } from "react-native"
import Header from '../components/header'
import Footer from "../components/footer"
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from "../style";

import noti from '../imgs/notification/noti.png'

const notification = [
    {
        content: 'Vé của bạn đã được thanh toán thành công',
        timeLeft: '2 phút trước',
    },
    {
        content: 'Các tuyến bus đi quận 1 nhanh nhất',
        timeLeft: '17 phút trước',
    },
    {
        content: 'Vé của bạn đã được thanh toán thành công',
        timeLeft: '2 tiếng trước',
    }
]

const Notification = ( {navigation} ) => {
    return (
        <View className='flex flex-col h-full justify-between bg-[#f9f9f9]'>
            <View>
                <Header navigation={navigation} title = "Thông báo"/>
                <ScrollView className='mx-4 my-4 space-y-4'>
                    {
                        notification.map((item, index) => (
                            <View key={index} className='bg-white rounded-xl flex flex-col px-4 py-2' style={style.shadow}>
                                <View className='flex flex-row items-center justify-between'>
                                    <Text style={{fontFamily:'Poppins-SemiBold'}} className='w-3/4 text-base'>{item.content}</Text>
                                    <Icon name="chevron-right" size={15}></Icon>
                                </View>

                                <Text style={{fontFamily:'Poppins-Regular'}} className='text-sm text-[#aaa]'>{item.timeLeft}</Text>
                                
                                <Image source={noti} className='scale-50 w-full'></Image>
                            </View>
                        ))
                    }
                </ScrollView>

            </View>

            <Footer />
        </View>
    )
}

export default Notification