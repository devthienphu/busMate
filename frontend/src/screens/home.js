import React from 'react';
import { View, Text, Image, TextInput, Pressable,Animated,ScrollView,StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import notification from '../imgs/homePage/notification.png'
import findBus from '../imgs/homePage/findBus.png'
import findRoad from '../imgs/homePage/findRoad.png'
import findJob from '../imgs/homePage/findJob.png'
import menu from '../imgs/homePage/menu.png'
import news from '../imgs/homePage/news.png'
import report from '../imgs/homePage/report.png'
import weather from '../imgs/homePage/weather.png'
import feedback from '../imgs/homePage/feedback.png'
import buyTicket from '../imgs/homePage/buyTicket.png'
import map from '../imgs/homePage/map.png'

import styles from "../style";
import Footer from '../components/footer';

const applications =[
    {
        img:findBus,
        text:'Tìm bus'
    },
    {
        img:findRoad,
        text:'Tìm đường'
    },
    {
        img:buyTicket,
        text:'Mua bé'
    },
    {
        img:news,
        text:'Tin tức'
    },
    {
        img:report,
        text:'Báo cáo'
    },
    {
        img:findJob,
        text:'Tìm việc'
    },
    {
        img:weather,
        text:'Thời tiết'
    },
    {
        img:feedback,
        text:'Góp ý'
    },
]

const Home = () => {

  

    return (
       <ScrollView className="bg-[#cde0fe]">
            <View className="flex flex-row justify-between px-6 mt-12">
                <View className="bg-[#eefbfe] rounded-xl p-1.5 px-2 font-semibold flex flex-row gap-x-1 items-center">
                    <Icon name="map-marker-alt" light></Icon>
                    <Text className="">TP.Hồ Chí Minh</Text>
                </View>
                <Image source={notification} className="h-8 w-8"></Image>
            </View>

            {/* Search */}
            <View className="z-10 flex border flex-row justify-between items-center bg-white w-3/4 mx-auto rounded-xl mt-4 px-4">
                <TextInput className="py-2" placeholder="Nhập điểm đến"/>              
                <Icon className="flex justify-end" name="search"></Icon>
            </View>

            {/* application */}
            <View className="mt-[-25px] flex flex-row flex-wrap pl-3 py-6 pt-10 bg-white rounded-2xl gap-x-6  items-center mx-auto">
                    {
                        applications.map((app,key)=>(
                            <View className="flex flex-col items-center" key={key}>
                                <Image source={app.img} className="w-16 h-16"></Image>
                                <Text>{app.text}</Text>
                            </View>
                        ))
                    }
            </View>
            
            {/* <Image source={map} className=""></Image> */}

            {/* News */}
            <View className="bg-[#f9f9f9]">
                <View className="flex flex-row justify-between px-4 items-center py-4">
                    <Text className="font-bold text-lg">Tin tức nổi bật</Text>
                    <View className="flex flex-row items-center gap-x-1">
                        <Text className="text-gray-800">Xem thêm</Text>
                        <Icon name="arrow-right" light></Icon>
                    </View>
                </View>

            </View>

            <Footer/>

       </ScrollView>
    );
}



export default Home;
